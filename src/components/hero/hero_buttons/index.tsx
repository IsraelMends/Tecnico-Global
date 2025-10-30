"use client";

import React, { useState } from "react";
import Link from "next/link";

import AppModal from "@/components/app-modal";

const HeroButtons = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-x-4">
      <button
        onClick={() => setOpen(true)}
        className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg hover:bg-[var(--burnt-orange)] hover:shadow-lg hover:shadow-[var(--primary-glow)] transition-all"
      >
        Venha fazer parte
      </button>
      <Link href="/about" className="border border-[var(--amber)] text-[var(--amber)] px-6 py-3 rounded-lg hover:bg-[var(--amber)] hover:text-gray-900 hover:shadow-lg hover:shadow-[var(--purple-soft)] transition-all">
        Sobre
      </Link>

      <AppModal
        isOpen={open}
        onClose={() => setOpen(false)}
        whatsappNumber="5594992294042" // DDI + DDD + número, apenas dígitos
        policyUrl="/politica-de-privacidade"
        originLabel="Botão Hero"
      />
    </div>
  );
};

export default HeroButtons;
