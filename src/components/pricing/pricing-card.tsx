import { Card } from "@/components/ui/card";
import { PricingTier } from "./pricing-data";

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

  return (
    <Card className="relative overflow-hidden rounded-2xl bg-card p-0 shadow-sm flex flex-col flex-1 h-full hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
      {/* faixa superior com gradiente */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[var(--primary)] via-[var(--amber)] to-[var(--blue-detail)]" />

      {/* leve acento de cor no canto */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-8 -top-8 h-20 w-20 rounded-full bg-[var(--purple-soft)] opacity-20"
      />

      <div className="relative p-6 sm:p-7 flex flex-col flex-1">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-[var(--primary)] mb-2">
            {tier.courseCount}
            {tier.courseCount === 1 ? " Curso" : " Cursos"}
          </h3>
          <div className="h-1 w-12 bg-gradient-to-r from-[var(--primary)] to-[var(--amber)] rounded-full" />
        </div>

        <div className="flex-1 space-y-6">
          <div className="pricing-amount">
            <p className="text-sm font-medium text-muted-foreground mb-1">
              Valor Total
            </p>
            <p className="text-3xl font-bold text-[var(--primary)]">
              {formatCurrency(tier.totalPrice)}
            </p>
          </div>

          <div className="installment-info bg-[var(--muted)] rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-2">
              Parcelado em {tier.installments}x
            </p>
            <p className="text-lg font-semibold text-[var(--primary)]">
              {formatCurrency(tier.monthlyPrice)}
            </p>
            <p className="text-xs text-muted-foreground mt-2">por mês</p>
          </div>

          <div className="border-t border-[var(--border)] pt-4">
            <p className="text-xs text-muted-foreground text-center">
              100% Reconhecido MEC
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
