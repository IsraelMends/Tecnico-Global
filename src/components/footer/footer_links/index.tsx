const FooterLinks = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Links</h3>
      <ul className="space-y-2">
        <li><a href="/about" className="text-gray-400 hover:text-white">Sobre Nós</a></li>
        <li><a href="/#Parceiros" className="text-gray-400 hover:text-white">Parceiros</a></li>
        <li><a href="/#Contact" className="text-gray-400 hover:text-white">Contato</a></li>
      </ul>
    </div>
  );
};

export default FooterLinks;
