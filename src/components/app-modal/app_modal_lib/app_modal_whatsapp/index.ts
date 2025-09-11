export const buildWhatsAppUrl = (numberDigits: string, message: string) =>
  `https://wa.me/${numberDigits}?text=${encodeURIComponent(message)}`;
