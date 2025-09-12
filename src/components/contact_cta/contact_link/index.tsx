"use client";

import * as React from "react";

import Link from "next/link";

import AppModal from "@/components/app-modal";

const ContactLink = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="mt-6 flex items-center justify-center gap-3">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="px-6 py-3 rounded-2xl bg-primary text-black font-semibold hover:opacity-90 transition"
      >
        Fale conosco
      </button>
      <Link
        href="/about"
        className="px-6 py-3 rounded-2xl border border-white/20 text-white hover:bg-white/10 transition"
      >
        Conhecer mais
      </Link>

      <AppModal
        isOpen={open}
        onClose={() => setOpen(false)}
        whatsappNumber="5531984770007" // DDI + DDD + número, apenas dígitos
        policyUrl="/politica-de-privacidade"
        originLabel="Botão Hero"
      />
    </div>
  );
};

export default ContactLink;
