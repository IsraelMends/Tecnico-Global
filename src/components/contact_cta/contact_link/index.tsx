"use client";

import * as React from "react";

import Link from "next/link";

import AppModal from "@/components/app-modal";
import { FaWhatsapp } from "react-icons/fa";

const ContactLink = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="mt-6 flex items-center justify-center gap-3">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="px-7 py-3 rounded-2xl bg-gradient-to-tr from-[var(--primary)] via-[var(--amber)] to-[var(--burnt-orange)] text-white font-bold hover:scale-105 transition-all shadow-lg shadow-[var(--primary-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white flex items-center gap-2"
        aria-label="Abrir formulário de contato"
      >
        <FaWhatsapp className="text-xl" /> Fale conosco
      </button>
      <Link
        href="/about"
        className="px-7 py-3 rounded-2xl border-2 border-[var(--blue-detail)] text-white bg-white/10 hover:bg-[var(--blue-detail)] hover:text-white transition-all font-bold"
      >
        Conhecer mais
      </Link>

      <AppModal
        isOpen={open}
        onClose={() => setOpen(false)}
        whatsappNumber="5594992294042" // DDI + DDD + número, apenas dígitos
        policyUrl="/politica-de-privacidade"
        originLabel="Botão CTA"
      />
    </div>
  );
};

export default ContactLink;
