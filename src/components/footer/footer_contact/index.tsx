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
            href="https://maps.google.com/?q=R.%20Luiz%20Rodrigues%20dos%20Santos,%2044%20-%20Todos%20Os%20Santos,%20Cel.%20Fabriciano"
            target="_blank" rel="noopener noreferrer"
            className="hover:text-[var(--amber)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--amber)] transition-colors"
          >
            R. Luiz Rodrigues dos Santos, 44 - Todos Os Santos, Cel. Fabriciano
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
