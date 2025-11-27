import { NextResponse } from "next/server";
import { validateLead, normalizeLead } from "@/utils/validateLead";

const {
  NEXT_PUBLIC_API_ENTERPRISE_ID,
  NEXT_PUBLIC_API_SECRET,
  NEXT_PUBLIC_API_LOGIN,
  NEXT_PUBLIC_API_URL,
} = process.env;

// Store for tracking recent submissions in memory (in production, use a database or Redis)
const recentSubmissions = new Map<
  string,
  { timestamp: number; data: Record<string, any> }
>();
const DEDUPLICATION_WINDOW = 60000; // 1 minute

/**
 * Generate a unique key for deduplication
 */
function generateSubmissionKey(email: string, phone: string): string {
  return `${email.toLowerCase()}:${phone}`;
}

/**
 * Check if submission was already made recently
 */
function isDuplicateSubmission(email: string, phone: string): boolean {
  const key = generateSubmissionKey(email, phone);
  const recent = recentSubmissions.get(key);

  if (!recent) {
    return false;
  }

  const elapsed = Date.now() - recent.timestamp;
  if (elapsed > DEDUPLICATION_WINDOW) {
    recentSubmissions.delete(key);
    return false;
  }

  return true;
}

/**
 * Record a submission for deduplication
 */
function recordSubmissionAttempt(
  email: string,
  phone: string,
  data: Record<string, any>
): void {
  const key = generateSubmissionKey(email, phone);
  recentSubmissions.set(key, {
    timestamp: Date.now(),
    data,
  });
}

/**
 * Clean up old submissions periodically
 */
function cleanupOldSubmissions(): void {
  const now = Date.now();
  for (const [key, value] of recentSubmissions.entries()) {
    if (now - value.timestamp > DEDUPLICATION_WINDOW * 2) {
      recentSubmissions.delete(key);
    }
  }
}

/**
 * Generate authentication token for upstream API
 */
async function generateServerToken(): Promise<string> {
  if (!NEXT_PUBLIC_API_LOGIN || !NEXT_PUBLIC_API_SECRET || !NEXT_PUBLIC_API_URL) {
    throw new Error("Missing API configuration");
  }

  const data = {
    email: NEXT_PUBLIC_API_LOGIN,
    password: NEXT_PUBLIC_API_SECRET,
  };

  try {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Authentication failed: ${response.status}`);
    }

    const result = await response.json();
    const token = result.authToken?.token || result.authToken;

    if (!token) {
      throw new Error("No token received from authentication service");
    }

    return token;
  } catch (error) {
    console.error("Token generation failed:", error);
    throw error;
  }
}

export async function POST(req: Request) {
  try {
    // Clean up old submissions
    cleanupOldSubmissions();

    // Parse request body
    const body = await req.json();

    // Normalize the lead data
    const normalizedData = normalizeLead({
      name: body.name,
      email: body.email,
      phone: body.phone,
      areaOfInterest: body.areaOfInterest,
      enterpriseId: body.enterpriseId,
    });

    // Validate the lead data
    const validationErrors = validateLead(normalizedData);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationErrors,
        },
        { status: 400 }
      );
    }

    // Check for duplicate submission in recent window
    if (isDuplicateSubmission(normalizedData.email, normalizedData.phone)) {
      return NextResponse.json(
        {
          error: "Duplicate submission detected",
          message:
            "This lead was already submitted recently. Please wait before trying again.",
        },
        { status: 409 }
      );
    }

    // Record this submission attempt
    recordSubmissionAttempt(normalizedData.email, normalizedData.phone, normalizedData);

    // Generate authentication token
    const token = await generateServerToken();

    // Forward to upstream API
    const upstreamResponse = await fetch(`${NEXT_PUBLIC_API_URL}/leads/criar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: normalizedData.name,
        email: normalizedData.email,
        phone: normalizedData.phone,
        areaOfInterest: normalizedData.areaOfInterest,
        enterpriseId: normalizedData.enterpriseId,
      }),
    });

    const responseText = await upstreamResponse.text();
    let responseJson: any = null;

    try {
      responseJson = JSON.parse(responseText);
    } catch {
      // Response is not JSON
    }

    if (!upstreamResponse.ok) {
      console.error(
        "Upstream API error:",
        upstreamResponse.status,
        responseText
      );
      return NextResponse.json(
        {
          error: "Failed to create lead",
          status: upstreamResponse.status,
          details: responseJson ?? responseText,
        },
        { status: 502 }
      );
    }

    return NextResponse.json(responseJson ?? { ok: true, message: "Lead created successfully" });
  } catch (error: any) {
    console.error("Lead creation API error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error?.message ?? "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}
