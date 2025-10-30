import FooterBrand from "./footer_brand";
import FooterLinks from "./footer_links";
import FooterContact from "./footer_contact";
import FooterCopyright from "./footer_copyright";

const Footer = () => {
  return (
    <footer className="bg-[var(--burnt-orange)] text-[var(--amber)] relative overflow-hidden">
      {/* Top border gradiente */}
      <div className="absolute left-0 top-0 w-full h-2 bg-gradient-to-r from-[var(--amber)] via-[var(--primary)] to-[var(--blue-detail)] rounded-b-2xl opacity-90 z-10 animate-slide-down" />
      <div className="container mx-auto px-4 py-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
