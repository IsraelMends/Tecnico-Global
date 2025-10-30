"use client";
import PrivacyDialog from "@/components/legal/PrivacyDialog";
import TermsDialog from "@/components/legal/TermsDialog";

const FooterCopyright = () => {
  return (
    <div className="mt-8 pt-6">
      <div className="w-full h-[2px] bg-gradient-to-r from-[var(--amber)] via-[var(--primary)] to-[var(--blue-detail)] rounded-full mb-4 opacity-80" />

      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-2 text-white/80 text-sm">
        <PrivacyDialog />
        <span className="hidden md:inline-block opacity-40">|</span>
        <TermsDialog />
      </div>

      <p className="text-center text-white/70 text-sm">
        © {new Date().getFullYear()} Técnico Global. Todos os direitos
        reservados.
      </p>
    </div>
  );
};

export default FooterCopyright;
