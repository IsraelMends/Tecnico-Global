import FooterBrand from "./footer_brand";
import FooterLinks from "./footer_links";
import FooterContact from "./footer_contact";
import FooterCopyright from "./footer_copyright";

const Footer = () => {
  return (
    <footer className="bg-[var(--burnt-orange)] text-white relative overflow-hidden">
      {/* Top border gradiente */}
      <div className="absolute left-0 top-0 w-full h-2 bg-gradient-to-r from-[var(--amber)] via-[var(--primary)] to-[var(--blue-detail)] rounded-b-2xl opacity-90 z-10 animate-slide-down" />

      {/* Decoração sutil de fundo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 left-1/4 h-56 w-56 rounded-full bg-[var(--blue-detail)] opacity-[0.12] blur-3xl" />
        <div className="absolute bottom-[-3rem] right-10 h-48 w-48 rounded-full bg-[var(--amber)] opacity-[0.12] blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-white/10 md:[&>*]:px-6">
          <FooterBrand />
          <FooterLinks />
          <FooterContact />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
