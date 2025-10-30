"use client";

import { IoCall } from "react-icons/io5";
import * as React from "react";
import AppModal from "@/components/app-modal";

const HeaderButtom = () => {
  const menuItems = [
    { id: "About", label: "Sobre Nós" },
    { id: "Courses", label: "Cursos Técnicos" },
    { id: "Contact", label: "Contato" },
    { id: "Parceiros", label: "Nossos Parceiros" },
  ];

  const [activeItem, setActiveItem] = React.useState("home");
  const [open, setOpen] = React.useState(false);

  return (
    <div className="hidden md:flex items-center space-x-8">
      {menuItems.map((item) => (
        <a
          key={item.id}
          href={item.id === "About" ? "/about" : `/#${item.id}`}
          className={`px-4 py-2 rounded-md font-bold relative transition-all duration-300 overflow-hidden group
            ${activeItem === item.id
              ? "bg-gradient-to-tr from-[var(--primary)] to-[var(--blue-detail)] text-white shadow-xl after:content-[''] after:block after:h-1 after:bg-[var(--blue-detail)] after:rounded-full after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              : "text-white hover:text-[var(--amber)] hover:bg-[var(--gray-contrast)] after:content-[''] after:block after:h-1 after:bg-[var(--blue-detail)] after:rounded-full after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            }`}
          aria-label={item.label}
        >
          {item.label}
        </a>
      ))}
      <button
        className="bg-[var(--amber)] text-[var(--gray-contrast)] px-6 py-2 rounded-md flex items-center space-x-2 font-bold shadow shadow-[var(--primary-glow)] hover:scale-105 transition-all duration-300 focus:ring-2 focus:ring-[var(--amber)]"
        aria-label="Entre em contato"
        onClick={() => setOpen(true)}
      >
        <IoCall className="text-xl" />
        <span>Entre em contato</span>
      </button>

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

export default HeaderButtom;
