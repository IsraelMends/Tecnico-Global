/**
 * Validate lead data before submission
 */
export interface ValidationError {
  field: string;
  message: string;
}

export interface LeadData {
  name: string;
  phone: string;
  email: string;
  areaOfInterest: string;
  enterpriseId: number;
}

/**
 * Normalize and validate lead data
 */
export function validateLead(data: LeadData): ValidationError[] {
  const errors: ValidationError[] = [];

  // Validate name
  if (!data.name || typeof data.name !== "string") {
    errors.push({ field: "name", message: "Name is required" });
  } else {
    const trimmedName = data.name.trim();
    if (trimmedName.length < 3) {
      errors.push({
        field: "name",
        message: "Name must be at least 3 characters",
      });
    }
    if (trimmedName.length > 100) {
      errors.push({
        field: "name",
        message: "Name must not exceed 100 characters",
      });
    }
    // Validate that name contains at least 2 words (first and last name)
    const nameParts = trimmedName.split(/\s+/);
    if (nameParts.length < 2) {
      errors.push({
        field: "name",
        message: "Please provide your full name (first and last name)",
      });
    }
  }

  // Validate email
  if (!data.email || typeof data.email !== "string") {
    errors.push({ field: "email", message: "Email is required" });
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.push({
        field: "email",
        message: "Please provide a valid email address",
      });
    }
    if (data.email.length > 255) {
      errors.push({
        field: "email",
        message: "Email must not exceed 255 characters",
      });
    }
  }

  // Validate phone (only digits, Brazilian format validation)
  if (!data.phone || typeof data.phone !== "string") {
    errors.push({ field: "phone", message: "Phone is required" });
  } else {
    const phoneDigits = data.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      errors.push({
        field: "phone",
        message: "Phone must have at least 10 digits",
      });
    }
    if (phoneDigits.length > 11) {
      errors.push({
        field: "phone",
        message: "Phone must not exceed 11 digits",
      });
    }
    // Validate DDD (area code) for Brazil
    const ddd = phoneDigits.substring(0, 2);
    if (!/^[1-9][1-9]$/.test(ddd)) {
      errors.push({
        field: "phone",
        message: "Invalid area code (DDD)",
      });
    }
  }

  // Validate area of interest if provided
  if (data.areaOfInterest && typeof data.areaOfInterest !== "string") {
    errors.push({
      field: "areaOfInterest",
      message: "Area of interest must be a string",
    });
  }

  return errors;
}

/**
 * Normalize lead data for API submission
 */
export function normalizeLead(data: LeadData): LeadData {
  return {
    name: (data.name || "").trim(),
    email: (data.email || "").trim().toLowerCase(),
    phone: (data.phone || "").replace(/\D/g, ""),
    areaOfInterest: (data.areaOfInterest || "").trim() || "Geral",
    enterpriseId: data.enterpriseId || 2,
  };
}
