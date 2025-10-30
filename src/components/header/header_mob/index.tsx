"use client";

import * as React from "react";
import AppModal from "@/components/app-modal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTimes, FaBars } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Header_Mob = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();

  // Ajuste os destinos conforme suas rotas/seções reais
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Sobre Nós" },
    { href: "/#Parceiros", label: "Nossos Parceiros" }, // seção na home: <section 
    { href: "/#Contact", label: "Contato" }, // evite maiúsculas no id: <section 
  ];

  React.useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(true);
      else setIsOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Botão mobile */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed top-4 right-4 z-50 text-[var(--primary)] md:hidden"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Menu lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[var(--accent)] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40`}
      >
        <div className="p-6">
          <div className="flex flex-col space-y-4 mt-12">
            {menuItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    (pathname === "/" && item.href.startsWith("/#"));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)} // fecha o menu ao navegar
                  className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    isActive
                      ? "bg-secondary text-white"
                      : "text-white hover:bg-primary hover:text-[var(--accent)]"
                  }`}
                  aria-label={item.label}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Botão de contato (telefone) */}
            <button
              onClick={() => { setOpen(true); setIsOpen(false); }}
              className="bg-secondary text-white px-6 py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-primary hover:text-[var(--accent)] transition-all duration-300"
              aria-label="Call Us"
            >
              {" "}
              <IoCall className="text-xl" /> <span>Entre em contato</span>{" "}
            </button>
          </div>
        </div>
      </div>

      <AppModal
        isOpen={open}
        onClose={() => setOpen(false)}
        whatsappNumber="5594992294042" // DDI + DDD + número, apenas dígitos
        policyUrl="/politica-de-privacidade"
        originLabel="Botão Hero"
      />
    </>
  );
};

export default Header_Mob;
