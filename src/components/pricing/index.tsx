import { pricingTiers } from "./pricing-data";
import { PricingCard } from "./pricing-card";

export const CoursePricing = () => {
  return (
    <section id="pricing" className="relative py-20 sm:py-24">
      {/* fundo decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden transition-all duration-500 group-hover:blur-2xl"
      >
        <div className="absolute -bottom-24 right-1/2 h-[38rem] w-[38rem] translate-x-1/2 rounded-full blur-3xl opacity-20 bg-gradient-primary animate-pulse" />
        <div className="absolute left-[-10%] bottom-1/4 h-64 w-64 -rotate-12 opacity-25 [mask-image:radial-gradient(closest-side,white,transparent)] bg-gradient-hero animate-floating" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 flex flex-col items-center">
          {/* Badge */}
          <span className="mb-3 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold bg-[var(--blue-detail)] text-white shadow shadow-[var(--primary-glow)] animate-fade-in">
            Valores Competitivos
          </span>
          <h2 className="mt-2 text-balance text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[var(--primary)] via-[var(--amber)] to-[var(--blue-detail)] bg-clip-text text-transparent drop-shadow-md animate-slide-up">
            Valores dos Cursos Técnicos por Competência
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg max-w-md mx-auto animate-fade-in">
            Escolha a quantidade de cursos que você deseja estudar e comece sua transformação profissional
          </p>
        </div>

        {/* pricing grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.courseCount} tier={tier} />
          ))}
        </div>

        {/* footer note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Todos os cursos incluem certificado reconhecido pelo MEC e suporte dedicado
          </p>
        </div>
      </div>
    </section>
  );
};
