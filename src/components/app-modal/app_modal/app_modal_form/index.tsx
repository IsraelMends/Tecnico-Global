import { FormEvent } from "react";

import AppModalFormFields from "./app_modal_form_fields";
import AppModalButton from "../../app_modal_ui/app_modal_button";
import AppModalError from "../../app_modal_ui/app_modal_error";
import { useAppModalForm } from "../../app_modal_hooks/app_modal_use_form";

interface Props {
  onClose: () => void;
  whatsappNumber: string;
  policyUrl: string;
  originLabel?: string;
}

export default function AppModalForm({ onClose, whatsappNumber, policyUrl, originLabel }: Props) {
  const { fields, set, error, submitting, isValid, submit } = useAppModalForm({ onClose, whatsappNumber, originLabel });

  //Defini um objeto para armazenar os dados
  const data = {
    name: "",
    telefone: "",
    email: ""
  }

  //Função para o envio
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    
    e.preventDefault() //Previne o comportamento padrão do formulário
    //Nome e Telefone
    data.name = fields.fullName
    data.telefone = fields.phone
    data.email = fields.email
    JSON.stringify(data) //Transforma o objeto em JSON
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <AppModalFormFields.FullName value={fields.fullName} onChange={set.setFullName} />
      <AppModalFormFields.Email value={fields.email} onChange={set.setEmail} />
      <AppModalFormFields.Phone value={fields.phone} onChange={set.setPhone} />
      <AppModalFormFields.Privacy checked={fields.accepted} onChange={set.setAccepted} policyUrl={policyUrl} />
      {error && <AppModalError>{error}</AppModalError>}
      <AppModalButton disabled={submitting || !isValid}>{submitting ? "Abrindo WhatsApp..." : "Enviar pelo WhatsApp"}</AppModalButton>
    </form>
  );
}

