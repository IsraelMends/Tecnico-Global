let cachedToken: { token: string; expiresAt: number } | null = null;

export default async function generateToken(): Promise<string> {
  const API_LOGIN = process.env.NEXT_PUBLIC_API_LOGIN;
  const API_SECRET = process.env.NEXT_PUBLIC_API_SECRET;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // Validate required environment variables
  if (!API_LOGIN || !API_SECRET || !API_URL) {
    console.error("Missing required environment variables for API authentication");
    throw new Error("Configuration error: missing API credentials");
  }

  // Return cached token if still valid (cache for 50 minutes, tokens typically last 1 hour)
  if (cachedToken && cachedToken.expiresAt > Date.now()) {
    return cachedToken.token;
  }

  const data = {
    email: API_LOGIN,
    password: API_SECRET,
  };

  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(`Authentication failed: ${res.status}`);
    }

    const result = await res.json();
    const token = result.authToken?.token || result.authToken;

    if (!token) {
      throw new Error("No token received from authentication service");
    }

    // Cache token for 50 minutes
    cachedToken = {
      token,
      expiresAt: Date.now() + 50 * 60 * 1000,
    };

    return token;
  } catch (error) {
    console.error("Token generation failed:", error);
    throw error;
  }
}
