export interface AppModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber: string;
  policyUrl?: string;
  originLabel?: string;
}
