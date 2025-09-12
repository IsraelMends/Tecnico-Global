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
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all"
      >
        Venha fazer parte
      </button>
      <Link href="/about" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all">
        Sobre
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

export default HeroButtons;
