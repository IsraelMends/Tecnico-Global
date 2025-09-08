import Link from "next/link";

const ContactLink = () => {
    return(
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
    )
}

export default ContactLink;