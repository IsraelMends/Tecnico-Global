"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

import AppModalFormFields from "./app_modal_form_fields";
import AppModalButton from "../../app_modal_ui/app_modal_button";
import AppModalError from "../../app_modal_ui/app_modal_error";
import { useAppModalForm } from "../../app_modal_hooks/app_modal_use_form";
import generateToken from "@/utils/generateToken";

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
  const router = useRouter(); // hook para navegação
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
    const token = await generateToken(); // ESSENCIAL

    const res = await fetch("https://api.polofaculdades.com.br/leads/criar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    const text = await res.text();
    let json: any = null;
    try {
      json = JSON.parse(text);
    } catch {
      /* resposta pode não ser JSON */
    }

    if (!res.ok) {
      console.error("Erro da API:", res.status, text);
      throw new Error(`Erro na API: ${res.status}`);
    }

    return json ?? text;
  };

  // Função para o envio
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // monte o payload a partir dos fields
    const payload = {
      name: (fields.fullName || "").trim(),
      phone: (fields.phone || "").replace(/\D/g, ""), // só dígitos
      email: (fields.email || "").trim(),
      areaOfInterest: "Geral".trim?.() || "Geral", // ajuste conforme seu hook
      enterpriseId: 2,
    };

    try {
      await sendToApi(payload);
      await submit();

      // 🚀 Redireciona para a página de agradecimento
      router.push("/agradecimento");
    } catch (err) {
      console.error("Falha ao enviar lead:", err);
      // opcional: exibir erro na UI (via estado do seu hook)
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
