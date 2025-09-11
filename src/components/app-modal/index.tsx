"use client";
import AppModalContainer from "./app_modal/app_modal_container";
import AppModalHeader from "./app_modal/app_modal_header";
import AppModalForm from "./app_modal/app_modal_form";
import type { AppModalProps } from "./types";

export default function AppModal({ isOpen, onClose, whatsappNumber, policyUrl = "/politica-de-privacidade", originLabel }: AppModalProps) {
  if (!isOpen) return null;
  return (
    <AppModalContainer onClose={onClose}>
      <AppModalHeader onClose={onClose} />
      <AppModalForm onClose={onClose} whatsappNumber={whatsappNumber} policyUrl={policyUrl} originLabel={originLabel} />
    </AppModalContainer>
  );
}
