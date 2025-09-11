"use client"

import * as React from "react"
import Image from "next/image"
import  AppModal  from "@/components/app-modal"
import { Button } from "@/components/ui/button"

type WhatsAppIconWithModalProps = {
  src?: string
  modalContent?: React.ReactNode
  modalTitle?: string
  modalDescription?: string
  className?: string
  whatsappHref?: string
}

export function WhatsAppFloatButton({
  src = "/whatsapp-svgrepo-com.svg",
  modalContent,
  modalTitle = "Fale conosco no WhatsApp",
  modalDescription = "Clique abaixo para iniciar uma conversa.",
  className = "w-16 h-16", // tamanho padrão maior
  whatsappHref = "https://wa.me/5500000000000", // ajuste para o seu número
}: WhatsAppIconWithModalProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      {/* Botão fixo no canto inferior direito */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-white shadow-lg rounded-full p-2 hover:scale-105 transition-transform duration-200 ${className}`}
        aria-label="Abrir contato via WhatsApp"
      >
        <div className="relative w-full h-full">
          <Image
            alt="Ícone do WhatsApp"
            src={src}
            fill
            className="object-contain"
            sizes="64px"
            priority
          />
        </div>
      </button>

      {/* Modal reutilizável */}
         <AppModal
           isOpen={open}
           onClose={() => setOpen(false)}
           whatsappNumber="5531984770007" // DDI + DDD + número, apenas dígitos
           policyUrl="/politica-de-privacidade"
           originLabel="Botão Hero"
         />
    </>
  )
}
