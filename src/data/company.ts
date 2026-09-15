// Données institutionnelles Sophiaco.
// Centralisées ici pour faciliter une future connexion à un CMS.

export const company = {
  name: "Sophiaco",
  legalName: "SOPHIACO S.A.R.L.",
  foundedYear: 2003,
  city: "Casablanca, Maroc",
  // À CONFIRMER AVEC LE CLIENT (adresse relevée sur annuaire public)
  address: "400, Bd Zerktouni, Business Plaza, Casablanca",
  // À CONFIRMER AVEC LE CLIENT (téléphone relevé sur annuaire public)
  phone: "05 22 26 65 14",
  phoneHref: "tel:+212522266514",
  contactName: "M. Belmaché",
  // À CONFIRMER AVEC LE CLIENT (horaires indicatifs)
  hours: "Lundi – Vendredi : 9h – 18h",
  tagline:
    "Importation et distribution de matériel et produits dentaires, médicaux, de laboratoire d'analyse et d'hygiène.",
} as const;

export const nav = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/a-propos" },
  { label: "Produits", to: "/produits" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
] as const;
