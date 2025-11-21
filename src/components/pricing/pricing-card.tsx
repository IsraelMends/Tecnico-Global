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

      <div className={`relative ${isPopular ? "p-8 sm:p-10" : "p-8 sm:p-9"} flex flex-col flex-1`}>
        <div className={`mb-5 ${isPopular ? "mt-2" : ""}`}>
          <h3
            className={`text-xl sm:text-2xl font-bold mb-3 ${
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

        <div className="flex-1 space-y-5">
          <div className="pricing-amount">
            <p
              className={`text-xs font-medium mb-3 ${
                isPopular ? "text-white/90" : "text-muted-foreground"
              }`}
            >
              Valor Parcelado em {tier.installments}x
            </p>
            <p
              className={`text-4xl sm:text-5xl font-black mb-4 ${
                isPopular ? "text-white" : "text-[var(--primary)]"
              }`}
            >
              {formatCurrency(tier.monthlyPrice)}
            </p>
            <p
              className={`text-sm mb-4 ${
                isPopular ? "text-white/95" : "text-muted-foreground"
              }`}
            >
              por mês
            </p>
          </div>

          <div
            className={`rounded-lg p-4 border ${
              isPopular
                ? "bg-white/10 border-white/20"
                : "bg-[var(--muted)] border-[var(--border)]"
            }`}
          >
            <p
              className={`text-xs font-medium mb-1 ${
                isPopular ? "text-white/80" : "text-muted-foreground"
              }`}
            >
              Valor Total
            </p>
            <p
              className={`text-lg sm:text-xl font-bold break-words ${
                isPopular ? "text-white" : "text-[var(--primary)]"
              }`}
            >
              {formatCurrency(tier.totalPrice)}
            </p>
          </div>

          <div
            className={`border-t mt-4 pt-4 ${
              isPopular
                ? "border-white/20"
                : "border-[var(--border)]"
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
        </div>
      </div>
    </Card>
  );
}
