const FooterCopyright = () => {
  return (
    <div className="border-t border-gray-700 mt-8 pt-4">
      <p className="text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Técnico Global. Todos os direitos reservados.
      </p>
    </div>
  );
};

export default FooterCopyright;
