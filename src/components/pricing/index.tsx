import { pricingTiers } from "./pricing-data";
import { PricingCard } from "./pricing-card";
import { Zap, Award, Headset } from "lucide-react";

export const CoursePricing = () => {
  return (
    <section id="pricing" className="relative py-20 sm:py-28 overflow-hidden">
      {/* fundo decorativo avançado */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* gradiente de fundo */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--muted)] to-transparent opacity-40" />

        {/* elementos decorativos flutuantes */}
        <div className="absolute -bottom-32 right-1/3 h-96 w-96 rounded-full blur-3xl opacity-15 bg-gradient-hero animate-pulse" />
        <div className="absolute -top-32 left-1/4 h-80 w-80 rounded-full blur-2xl opacity-20 bg-gradient-primary animate-floating" />
        <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full blur-3xl opacity-10 bg-[var(--blue-detail)] animate-pulse" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* header */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20 flex flex-col items-center">
          {/* Badge */}
          <span className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-[var(--blue-detail)]/10 text-[var(--blue-detail)] border border-[var(--blue-detail)]/30 shadow-sm animate-fade-in">
            <Zap className="w-4 h-4" />
            Planos Flexíveis e Acessíveis
          </span>
          <h2 className="mt-4 text-balance text-5xl sm:text-5xl font-black tracking-tight text-[var(--primary)] drop-shadow-lg animate-slide-up">
            Valores dos Cursos Técnicos
          </h2>
          <p className="mt-6 text-pretty text-lg text-muted-foreground sm:text-xl max-w-xl mx-auto font-medium animate-fade-in">
            Invista em sua carreira com opções de pagamento flexíveis e reconhecidas pelo MEC
          </p>
        </div>

        {/* pricing grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-7 mb-16 auto-rows-fr">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.courseCount} tier={tier} />
          ))}
        </div>

        {/* benefits section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 pt-12 border-t border-[var(--border)]">
          <div className="flex items-start gap-4 text-center md:text-left">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--blue-detail)]/10 text-[var(--blue-detail)]">
                <Award className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Certificado MEC</h3>
              <p className="text-sm text-muted-foreground">
                Todos os cursos são 100% reconhecidos pelo Ministério da Educação
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 text-center md:text-left">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                <Zap className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Até 12x</h3>
              <p className="text-sm text-muted-foreground">
                Parcelamento sem juros para facilitar seu investimento
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 text-center md:text-left">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--amber)]/10 text-[var(--amber)]">
                <Headset className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Suporte 24/7</h3>
              <p className="text-sm text-muted-foreground">
                Equipe especializada pronta para ajudar em sua jornada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
