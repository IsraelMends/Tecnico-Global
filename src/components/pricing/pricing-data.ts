export interface PricingTier {
  courseCount: number;
  totalPrice: number;
  monthlyPrice: number;
  installments: number;
}

export const pricingTiers: PricingTier[] = [
  {
    courseCount: 1,
    totalPrice: 1999.90,
    monthlyPrice: 166.67,
    installments: 12,
  },
  {
    courseCount: 2,
    totalPrice: 3499.90,
    monthlyPrice: 291.67,
    installments: 12,
  },
  {
    courseCount: 3,
    totalPrice: 4999.90,
    monthlyPrice: 416.67,
    installments: 12,
  },
  {
    courseCount: 4,
    totalPrice: 5999.90,
    monthlyPrice: 500.0,
    installments: 12,
  },
  {
    courseCount: 5,
    totalPrice: 6999.90,
    monthlyPrice: 583.33,
    installments: 12,
  },
];
