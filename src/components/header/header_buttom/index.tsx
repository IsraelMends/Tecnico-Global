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
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            activeItem === item.id
              ? "bg-secondary text-white"
              : "text-white hover:bg-primary hover:text-[#241645]"
          }`}
          aria-label={item.label}
        >
          {item.label}
        </a>
      ))}
      <button
        className="bg-[#8c15e8] text-white px-6 py-2 rounded-md flex items-center space-x-2 hover:bg-[#19edd0] hover:text-[#241645] transition-all duration-300"
        aria-label="Entre em contato"
        onClick={() => setOpen(true)}
      >
        <IoCall className="text-xl" />
        <span>Entre em contato</span>
      </button>

      <AppModal
        isOpen={open}
        onClose={() => setOpen(false)}
        whatsappNumber="5531999999999" // DDI + DDD + número, apenas dígitos
        policyUrl="/politica-de-privacidade"
        originLabel="Botão Hero"
      />
    </div>
  );
};

export default HeaderButtom;
