import { Card } from "@/components/ui/card";
import { PricingTier } from "./pricing-data";
import { Check } from "lucide-react";

interface PricingCardProps {
  tier: PricingTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  const formatCurrency = (value: number): string => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const isPopular = tier.courseCount === 3;

  return (
    <Card
      className={`relative overflow-hidden rounded-2xl p-0 flex flex-col flex-1 h-full transition-all duration-300 ${
        isPopular
          ? "bg-gradient-to-br from-[#FF8C42] to-[#FF7620] shadow-2xl hover:shadow-3xl hover:scale-105 border-2 border-[var(--amber)]"
          : "bg-card shadow-sm hover:shadow-xl border border-[var(--border)] hover:-translate-y-2"
      }`}
    >
      {/* faixa superior com gradiente */}
      <div
        className={`absolute inset-x-0 top-0 h-1 ${
          isPopular
            ? "bg-gradient-to-r from-[var(--amber)] via-[var(--blue-detail)] to-[var(--primary)]"
            : "bg-gradient-to-r from-[var(--primary)] via-[var(--amber)] to-[var(--blue-detail)]"
        }`}
      />

      {/* popular badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--blue-detail)] text-white px-3 py-1 text-xs font-bold shadow-lg">
            ⭐ Mais Popular
          </span>
        </div>
      )}

      {/* leve acento de cor no canto */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -left-8 -top-8 h-20 w-20 rounded-full opacity-20 ${
          isPopular
            ? "bg-[var(--blue-detail)]"
            : "bg-[var(--purple-soft)]"
        }`}
      />

      <div className={`relative ${isPopular ? "p-6 sm:p-8" : "p-6 sm:p-7"} flex flex-col flex-1`}>
        <div className={`mb-6 ${isPopular ? "mt-2" : ""}`}>
          <h3
            className={`text-2xl font-bold mb-2 ${
              isPopular ? "text-white" : "text-[var(--primary)]"
            }`}
          >
            {tier.courseCount}
            {tier.courseCount === 1 ? " Curso" : " Cursos"}
          </h3>
          <div
            className={`h-1 w-12 rounded-full ${
              isPopular
                ? "bg-[var(--blue-detail)]"
                : "bg-gradient-to-r from-[var(--primary)] to-[var(--amber)]"
            }`}
          />
        </div>

        <div className="flex-1 space-y-6">
          <div className="pricing-amount">
            <p
              className={`text-xs font-medium mb-2 ${
                isPopular ? "text-white" : "text-muted-foreground"
              }`}
            >
              Valor Total
            </p>
            <p
              className={`text-2xl sm:text-3xl lg:text-4xl font-black break-words ${
                isPopular ? "text-white" : "text-[var(--primary)]"
              }`}
            >
              {formatCurrency(tier.totalPrice)}
            </p>
          </div>

          <div
            className={`rounded-lg p-4 ${
              isPopular
                ? "bg-white/20 border border-white/30 backdrop-blur-sm"
                : "bg-[var(--muted)]"
            }`}
          >
            <p
              className={`text-sm font-medium mb-2 ${
                isPopular ? "text-white" : "text-muted-foreground"
              }`}
            >
              Parcelado em {tier.installments}x
            </p>
            <p
              className={`text-xl font-bold ${
                isPopular ? "text-white" : "text-[var(--primary)]"
              }`}
            >
              {formatCurrency(tier.monthlyPrice)}
            </p>
            <p
              className={`text-xs mt-2 ${
                isPopular ? "text-white/95" : "text-muted-foreground"
              }`}
            >
              por mês
            </p>
          </div>

          <div
            className={`border-t ${
              isPopular
                ? "border-white/30 pt-4"
                : "border-[var(--border)] pt-4"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Check
                className={`w-4 h-4 ${
                  isPopular ? "text-white" : "text-[var(--primary)]"
                }`}
              />
              <p
                className={`text-xs font-medium ${
                  isPopular
                    ? "text-white"
                    : "text-muted-foreground"
                }`}
              >
                100% Reconhecido MEC
              </p>
            </div>
          </div>

          <button
            className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 mt-4 ${
              isPopular
                ? "bg-[var(--blue-detail)] text-white hover:bg-blue-700 shadow-lg hover:shadow-xl hover:scale-105"
                : "bg-[var(--primary)] text-white hover:bg-[var(--burnt-orange)] shadow-md hover:shadow-lg"
            }`}
          >
            Escolher Plano
          </button>
        </div>
      </div>
    </Card>
  );
}
