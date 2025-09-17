import { FormEvent } from "react";

import AppModalFormFields from "./app_modal_form_fields";
import AppModalButton from "../../app_modal_ui/app_modal_button";
import AppModalError from "../../app_modal_ui/app_modal_error";
import { useAppModalForm } from "../../app_modal_hooks/app_modal_use_form";
import generateToken from "@/utils/generateToken";
import { stringify } from "querystring";

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
  const { fields, set, error, submitting, isValid, submit } = useAppModalForm({
    onClose,
    whatsappNumber,
    originLabel,
  });

  //Defini um objeto para armazenar os dados
  const data = {
    name: "",
    phone: "",
    email: "",
    areaOfInterest: "",
    enterpriseId: 2,
  };

  const sendToApi = async (data: {
    name: string;
    phone: string;
    email: string;
    areaOfInterest: string;
    enterpriseId: number;
  }) => {
    try {
      const token = await generateToken();
      
      const response = await fetch("https://api.polofaculdades.com.br/leads/criar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);
      return result;
    } catch (error) {
      console.error("Request error:", error);
      throw error;
    }
  };

  //Função para o envio
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const formData = {
        ...data,
        name: fields.fullName,
        phone: fields.phone,
        email: fields.email,
      };

      await sendToApi(formData);
      await submit();
    } catch (error) {
      console.error("Form submission error:", error);
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
      <AppModalButton disabled={submitting || !isValid}>
        {submitting ? "Abrindo WhatsApp..." : "Enviar para o WhatsApp"}
      </AppModalButton>
    </form>
  );
}
