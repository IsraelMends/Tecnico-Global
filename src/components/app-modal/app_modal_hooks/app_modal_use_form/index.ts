import { useCallback, useMemo, useState } from "react";
import { onlyDigits, isPhoneValid } from "../../app_modal_utils/app_modal_phone";
import { isFullNameValid, isEmailValid } from "../../app_modal_utils/app_modal_validation";
import { buildWhatsAppUrl } from "../../app_modal_lib/app_modal_whatsapp";

interface Params {
  onClose: () => void;
  whatsappNumber: string;
  originLabel?: string;
}

export const useAppModalForm = ({ onClose, whatsappNumber, originLabel }: Params) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isValid = useMemo(() => {
    return isFullNameValid(fullName) && isPhoneValid(phone) && isEmailValid(email) && accepted;
  }, [fullName, phone, email, accepted]);

  const submit = useCallback(() => {
    if (!isValid) {
      if (!isFullNameValid(fullName)) return setError("Informe seu nome completo.");
      if (!isPhoneValid(phone)) return setError("Informe um telefone válido (com DDD).");
      if (!accepted) return setError("Você precisa aceitar a Política de Privacidade.");
    }
    setError(null);
    setSubmitting(true);
    try {
      const digits = onlyDigits(phone);
      const msg = `Olá! Meu nome é ${fullName}. Poderia me apresentar as propostas`;
      const url = '/agradecimento'
      window.open(url, "noo ener,noreferrer");
      onClose();
    } catch (e) {
      setError("Não foi possível abrir o WhatsApp agora. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  }, [accepted, fullName, onClose, originLabel, phone, whatsappNumber, isValid]);

  return {
    fields: { fullName, phone, email, accepted },
    set: { setFullName, setPhone, setEmail, setAccepted },
    error,
    submitting,
    isValid,
    submit,
  };
};
