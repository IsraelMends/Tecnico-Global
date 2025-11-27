interface SubmissionRecord {
  email: string;
  phone: string;
  timestamp: number;
}

const SUBMISSION_COOLDOWN = 60000; // 1 minute
const STORAGE_KEY = "leadSubmissions";

/**
 * Check if a lead with the same email or phone was recently submitted
 * to prevent duplicate submissions in the same session
 */
export function checkDuplicateSubmission(
  email: string,
  phone: string
): { isDuplicate: boolean; message?: string } {
  try {
    const submitted = sessionStorage.getItem(STORAGE_KEY);
    const submissions: SubmissionRecord[] = submitted
      ? JSON.parse(submitted)
      : [];

    const now = Date.now();
    const recentSubmissions = submissions.filter(
      (s) => now - s.timestamp < SUBMISSION_COOLDOWN
    );

    // Check for duplicate in recent submissions
    const duplicate = recentSubmissions.some(
      (s) => s.email.toLowerCase() === email.toLowerCase() || s.phone === phone
    );

    if (duplicate) {
      return {
        isDuplicate: true,
        message:
          "Você já submeteu suas informações recentemente. Aguarde um momento antes de tentar novamente.",
      };
    }

    return { isDuplicate: false };
  } catch (error) {
    console.warn("Deduplication check failed:", error);
    // If check fails, allow submission but log the error
    return { isDuplicate: false };
  }
}

/**
 * Record a successful submission to prevent duplicates
 */
export function recordSubmission(email: string, phone: string): void {
  try {
    const submitted = sessionStorage.getItem(STORAGE_KEY);
    const submissions: SubmissionRecord[] = submitted
      ? JSON.parse(submitted)
      : [];

    const now = Date.now();
    // Keep only recent submissions
    const recentSubmissions = submissions.filter(
      (s) => now - s.timestamp < SUBMISSION_COOLDOWN * 2
    );

    recentSubmissions.push({
      email: email.toLowerCase(),
      phone,
      timestamp: now,
    });

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(recentSubmissions));
  } catch (error) {
    console.warn("Failed to record submission:", error);
  }
}

/**
 * Clear submission history (use after successful API response)
 */
export function clearSubmissionHistory(): void {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn("Failed to clear submission history:", error);
  }
}
