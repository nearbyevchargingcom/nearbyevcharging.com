export interface LayoutChildren {
  children: React.ReactNode;
}

export interface PricingCardModel {
  id: string;
  plan?: string;
  description?: string;
  pricePerMonth?: string;
  pricePerYearly?: string;
  isBusiness?: boolean;
  buttonName: string;
  features?: FeatureNameModel[];
}



export interface FeatureNameModel {
  id: string;
  featureName?: string;
}
