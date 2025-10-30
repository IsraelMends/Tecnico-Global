"use client";

import HeroButtons from "../hero_buttons";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

const HeroContent = () => {
  return (
    <div className="md:w-1/2 mb-10 md:mb-0 flex flex-col justify-center items-start text-left max-w-xl mx-auto md:mx-0">
      {/* badge com destaque */}
      <span className="mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold bg-[var(--amber)] text-[var(--gray-contrast)] shadow-lg shadow-[var(--primary-glow)] animate-fade-in">
        Novo no Brasil &bull; Certificação Super Rápida
      </span>

      <h1 className="text-4xl md:text-6xl font-black leading-tight text-white drop-shadow-md mb-4 animate-slide-up">
        Bem vindo à <br/>
        <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--amber)] to-[var(--blue-detail)] bg-clip-text text-transparent">
          GlobalTec
        </span>
      </h1>
      <p className="text-lg md:text-2xl text-[var(--amber)] font-medium mb-8 animate-fade-in">
        Seu próximo passo para conquistar seu certificado técnico com agilidade, aceito em todo o Brasil.
      </p>
      <div className="flex gap-4 w-full animate-slide-up">
        <button
          onClick={() => window?.scrollTo({top: 9999, behavior: 'smooth'})}
          className="flex items-center gap-2 bg-gradient-to-tr from-[var(--primary)] via-[var(--amber)] to-[var(--burnt-orange)] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-[var(--primary-glow)] hover:scale-105 transition-all duration-200 hover:ring-2 hover:ring-[var(--amber)] group"
        >
          <FaWhatsapp className="text-xl animate-pulse group-hover:scale-125" />
          Falar no WhatsApp
        </button>
        <a href="/about" className="flex items-center gap-2 border-2 border-[var(--blue-detail)] text-[var(--blue-detail)] px-8 py-4 rounded-xl font-bold text-lg bg-white/10 hover:bg-[var(--blue-detail)] hover:text-white hover:shadow-md transition-all duration-200">
          Saiba mais <FaArrowRight className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
