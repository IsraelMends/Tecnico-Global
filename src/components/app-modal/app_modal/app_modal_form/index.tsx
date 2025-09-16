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

  const token = async () => {
    return generateToken();
  };

  const sendToApi = async (data: {
    name: string;
    phone: string;
    email: string;
    areaOfInterest: string;
    enterpriseId: number;
  }) => {
    await fetch("https://api.polofaculdades.com.br/leads/criar", {
      method: "POST", // pode ser GET, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // ou outro formato, depende da API
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        console.log("Sucesso:", result);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  };

  //Função para o envio
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //Previne o comportamento padrão do formulário
    //Nome e Telefone
    data.name = fields.fullName;
    data.phone = fields.phone;
    data.email = fields.email;

    //Envia na API
    sendToApi(data);
    submit();
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
