const FooterContact = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Contatos</h3>
      <ul className="space-y-2 text-white/80">
        <li>
          <span className="sr-only">Telefone:</span>
          <a href="tel:+5594992294042" className="hover:text-[var(--amber)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--amber)] transition-colors">+55 (94) 99229-4042</a>
        </li>
        <li>
          <span className="sr-only">Endereço:</span>
          <a
            href="https://maps.app.goo.gl/CXmE9HqXGf22TNHd8"
            target="_blank" rel="noopener noreferrer"
            className="hover:text-[var(--amber)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--amber)] transition-colors"
          >
            Av. ANTÔNIO VILHENA, 551 - LIBERDADE, MARABÁ
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
