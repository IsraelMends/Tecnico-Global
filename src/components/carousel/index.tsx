import PartnerLogosCarousel from "./carousel-content"

export default function Carousel () {
    return(
        <section id="Parceiros" 
        className="max-w-9xl mx-auto px-4 text-center"
        >
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          NOSSOS PARCEIROS
        </h2>

        {/* Descrição */}
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Trabalhamos lado a lado com instituições que compartilham nossa
          visão de qualidade e inovação na educação. Conheça alguns dos nossos
          principais parceiros.
        </p>

        {/* Carrossel */}
        <div className="mt-10">
          <PartnerLogosCarousel />
        </div>
      </section>
    )
}