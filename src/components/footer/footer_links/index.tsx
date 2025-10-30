const FooterLinks = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Links</h3>
      <ul className="space-y-2 grid grid-cols-2 gap-4">
        <li><a href="/about" className="text-gray-400 hover:text-white relative transition-colors after:content-[''] after:block after:h-1 after:bg-[var(--blue-detail)] after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Sobre Nós</a></li>
        <li><a href="/#Parceiros" className="text-gray-400 hover:text-white relative transition-colors after:content-[''] after:block after:h-1 after:bg-[var(--blue-detail)] after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Parceiros</a></li>
        <li><a href="/#Contact" className="text-gray-400 hover:text-white relative transition-colors after:content-[''] after:block after:h-1 after:bg-[var(--blue-detail)] after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Contato</a></li>
        <li><a href="/#Courses" className="text-gray-400 hover:text-white relative transition-colors after:content-[''] after:block after:h-1 after:bg-[var(--blue-detail)] after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Cursos Técnicos</a></li>
      </ul>
    </div>
  );
};

export default FooterLinks;
