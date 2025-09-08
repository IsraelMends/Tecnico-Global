import Link from "next/link";

const ContactCTA = () => {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 id="contact-title" className="text-3xl font-bold text-white">
          Pronto para começar?
        </h2>
        <p className="text-gray-300 mt-3">
          Fale com nossa equipe e receba um plano sob medida.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="mailto:contato@tecnicoglobal.com"
            className="px-6 py-3 rounded-2xl bg-primary text-black font-semibold hover:opacity-90 transition"
          >
            Fale conosco
          </Link>
          <Link
            href="#services"
            className="px-6 py-3 rounded-2xl border border-white/20 text-white hover:bg-white/10 transition"
          >
            Ver serviços
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
