"use client";

import { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";

import AppModalFormFields from "./app_modal_form_fields";
import AppModalButton from "../../app_modal_ui/app_modal_button";
import AppModalError from "../../app_modal_ui/app_modal_error";
import { useAppModalForm } from "../../app_modal_hooks/app_modal_use_form";
import generateToken from "@/utils/generateToken";
import {
  checkDuplicateSubmission,
  recordSubmission,
} from "@/utils/deduplicationService";
import { validateLead, normalizeLead } from "@/utils/validateLead";

interface Props {
  onClose: () => void;
  whatsappNumber: string;
  policyUrl: string;
  originLabel?: string;
}

export default function AppModalForm({
  onClose,
  whatsappNumber,
  policyUrl,
  originLabel,
}: Props) {
  const router = useRouter();
  const { fields, set, error, submitting, isValid, submit } = useAppModalForm({
    onClose,
    whatsappNumber,
    originLabel,
  });

  const submitInProgressRef = useRef(false);

  const sendToApi = async (data: {
    name: string;
    phone: string;
    email: string;
    areaOfInterest: string;
    enterpriseId: number;
  }) => {
    const token = await generateToken();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/leads/criar`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    const text = await res.text();
    let json: any = null;
    try {
      json = JSON.parse(text);
    } catch {
      /* resposta pode não ser JSON */
    }

    if (!res.ok) {
      console.error("API Error:", res.status, text);
      throw new Error(`API Error: ${res.status}`);
    }

    return json ?? text;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent double-submit
    if (submitInProgressRef.current) {
      return;
    }

    // Normalize the data
    const normalizedData = normalizeLead({
      name: fields.fullName,
      email: fields.email,
      phone: fields.phone,
      areaOfInterest: "Geral",
      enterpriseId: 2,
    });

    // Validate the normalized data
    const validationErrors = validateLead(normalizedData);
    if (validationErrors.length > 0) {
      const errorMessage = validationErrors
        .map((err) => err.message)
        .join("; ");
      set.setError(errorMessage);
      return;
    }

    // Check for duplicate submission in current session
    const duplicateCheck = checkDuplicateSubmission(
      normalizedData.email,
      normalizedData.phone
    );
    if (duplicateCheck.isDuplicate) {
      set.setError(
        duplicateCheck.message ||
          "Duplicate submission detected. Please try again later."
      );
      return;
    }

    submitInProgressRef.current = true;

    try {
      await sendToApi(normalizedData);

      // Record successful submission
      recordSubmission(normalizedData.email, normalizedData.phone);

      // Call the submit hook from useAppModalForm
      await submit();

      // Redirect to thank you page
      router.push("/agradecimento");
    } catch (err: any) {
      console.error("Lead submission failed:", err);
      const errorMessage =
        err?.message || "Failed to submit lead. Please try again.";
      set.setError(errorMessage);
      submitInProgressRef.current = false;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <AppModalFormFields.FullName
        value={fields.fullName}
        onChange={set.setFullName}
      />
      <AppModalFormFields.Email value={fields.email} onChange={set.setEmail} />
      <AppModalFormFields.Phone value={fields.phone} onChange={set.setPhone} />
      <AppModalFormFields.Privacy
        checked={fields.accepted}
        onChange={set.setAccepted}
        policyUrl={policyUrl}
      />
      {error && <AppModalError>{error}</AppModalError>}
      <AppModalButton disabled={submitting || !isValid || submitInProgressRef.current}>
        {submitting ? "Abrindo WhatsApp..." : "Enviar para o WhatsApp"}
      </AppModalButton>
    </form>
  );
}
