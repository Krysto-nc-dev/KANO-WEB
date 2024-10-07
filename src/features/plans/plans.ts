export type Plan = {
  id: string;
  name: string;
  subtitle: string;
  price: number; // Prix en XPF
  barredPrice?: number; // Prix barré si applicable
  currency: string; // Devise, ici "XPF"
  features: string[]; // Liste des fonctionnalités
  isPopular?: boolean; // Indique si le plan est populaire
  type?: "monthly" | "yearly" | "one-time"; // Type d'abonnement
  className?: string; // Classes CSS personnalisées
  priceId: string; // ID du prix pour les paiements
  cta: string; // Texte du bouton d'appel à l'action
  ctaSubtitle: string; // Sous-titre pour le bouton d'appel à l'action
};

export const PLANS = [
  {
    id: "FREE",
    name: "Gratuit",
    subtitle: "Idéal pour les artisans débutants",
    price: 0,
    currency: "XPF",
    features: ["1 utilisateur", "Fonctionnalités de base"],
    isPopular: false,
    priceId: "",
    cta: "Commencer gratuitement",
    ctaSubtitle: "Aucune carte de crédit requise",
  },
  {
    id: "PRO",
    name: "Pro",
    subtitle: "Parfait pour les artisans confirmés",
    price: 4990, // Prix en XPF, ajusté pour correspondre à un montant réaliste
    currency: "XPF",
    features: [
      "5 utilisateurs",
      "Gestion avancée des stocks",
      "Support prioritaire",
    ],
    isPopular: true,
    type: "monthly",
    priceId: "price_id_demo",
    cta: "Commencer maintenant",
    ctaSubtitle: "Ensuite 4 990 XPF/mois",
  },
] satisfies Plan[];
