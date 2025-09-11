"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";


export default function ModalWhatsApp({
  isOpen,
  onClose,
  whatsappNumber,
  policyUrl = "/politica-de-privacidade",
  originLabel,
}: {
  isOpen: boolean;
  onClose: () => void;
  /** Número do WhatsApp no formato internacional, somente dígitos. Ex.: 5551999999999 */
  whatsappNumber: string;
  /** URL da sua política de privacidade */
  policyUrl?: string;
  /** Texto opcional para identificar de onde veio a abertura (ex.: "Botão Header") */
  originLabel?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) {
      // Resetar campos quando fechar
      setFullName("");
      setPhone("");
      setAccepted(false);
      setSubmitting(false);
      setError(null);
    }
  }, [isOpen]);

  if (!mounted) return null;
  const container = document.body;
  if (!container) return null;

  const onlyDigits = (v: string) => v.replace(/\D+/g, "");

  const validate = () => {
    if (!fullName.trim() || fullName.trim().split(" ").length < 2) {
      setError("Informe seu nome completo.");
      return false;
    }
    const digits = onlyDigits(phone);
    if (digits.length < 10) {
      setError("Informe um telefone válido (com DDD).");
      return false;
    }
    if (!accepted) {
      setError("Você precisa aceitar a Política de Privacidade.");
      return false;
    }
    setError(null);
    return true;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      setSubmitting(true);
      const digits = onlyDigits(phone);
      const msg = encodeURIComponent(
        `Olá! Meu nome é ${fullName}. Telefone: ${digits}. Concordo com a Política de Privacidade. ${
          originLabel ? `Origem: ${originLabel}.` : ""
        }`
      );
      const url = `https://wa.me/${onlyDigits(whatsappNumber)}?text=${msg}`;
      window.open(url, "_blank", "noopener,noreferrer");
      onClose();
    } catch (err) {
      console.error(err);
      setError("Não foi possível abrir o WhatsApp agora. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  const isDisabled =
    submitting || !fullName.trim() || onlyDigits(phone).length < 10 || !accepted;

  if (!isOpen) return null;

  return createPortal(
    <div
      aria-hidden
      className="fixed inset-0 z-[100] flex items-center justify-center"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        className="relative z-[101] w-[90vw] max-w-md rounded-2xl bg-white p-6 shadow-2xl"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 className="text-xl font-semibold">Fale com a gente no WhatsApp</h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-zinc-100"
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Nome completo */}
          <div>
            <label className="mb-1 block text-sm font-medium">Nome completo *</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Seu nome e sobrenome"
              className="w-full rounded-xl border border-zinc-300 px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-900"
              required
            />
          </div>

          {/* Telefone */}
          <div>
            <label className="mb-1 block text-sm font-medium">Telefone (com DDD) *</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(99) 99999-9999"
              inputMode="tel"
              className="w-full rounded-xl border border-zinc-300 px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-900"
              required
              maxLength={11}
              
            />
            <p className="mt-1 text-xs text-zinc-500">
              Informe apenas números, com DDI/DDD, ex.: 559998887777
            </p>
          </div>

          {/* Consentimento */}
          <label className="flex items-start gap-3 text-sm">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-zinc-300"
              required
            />
            <span>
              Eu li e aceito a
              {" "}
              <a
                href={policyUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="underline"
              >
                Política de Privacidade
              </a>
              .
            </span>
          </label>

          {error && (
            <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isDisabled}
            className="w-full rounded-2xl bg-black px-4 py-2 text-white shadow transition disabled:cursor-not-allowed disabled:bg-zinc-400"
          >
            {submitting ? "Abrindo WhatsApp..." : "Enviar pelo WhatsApp"}
          </button>
        </form>
      </div>
    </div>,
    container
  );
}
