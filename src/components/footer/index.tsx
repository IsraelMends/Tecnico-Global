import FooterBrand from "./footer_brand";
import FooterLinks from "./footer_links";
import FooterContact from "./footer_contact";
import FooterCopyright from "./footer_copyright";

const Footer = () => {
  return (
    <footer className="bg-[#241645] text-white">
      <div className="container mx-auto px-4 py-8">
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
