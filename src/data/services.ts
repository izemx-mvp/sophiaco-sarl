import conseil from "@/assets/cabinet-medical.jpg";
import importImg from "@/assets/import-distribution.jpg";
import support from "@/assets/instruments-rotatifs.jpg";

export type Service = {
  id: string;
  title: string;
  description: string;
  points: string[];
  image: string;
};

export const services: Service[] = [
  {
    id: "conseil",
    title: "Conseil et accompagnement",
    description:
      "Nous aidons chaque praticien à définir l'équipement réellement adapté à sa structure, à son volume d'activité et à son espace de travail, sans surdimensionner l'investissement.",
    points: [
      "Analyse du besoin et du plateau technique existant",
      "Recommandation d'équipements adaptés à la pratique",
      "Aide à l'aménagement du cabinet ou du laboratoire",
    ],
    image: conseil,
  },
  {
    id: "import",
    title: "Import et distribution",
    description:
      "Notre activité repose sur le sourcing et l'importation de matériel auprès de marques reconnues à l'international, puis sa distribution auprès des professionnels de santé au Maroc.",
    points: [
      "Sourcing international de matériel et consommables",
      "Importation et gestion des approvisionnements",
      "Distribution auprès des cabinets, cliniques et laboratoires",
    ],
    image: importImg,
  },
  {
    id: "support",
    title: "Support et suivi client",
    description:
      "La relation ne s'arrête pas à la livraison. Nous restons l'interlocuteur des professionnels que nous équipons, pour leurs besoins récurrents comme pour leurs demandes spécifiques.",
    points: [
      "Accompagnement après-vente",
      "Réponse aux besoins spécifiques et pièces complémentaires",
      "Réapprovisionnement des consommables",
    ],
    image: support,
  },
];

export const process = [
  {
    step: "01",
    title: "Prise de contact",
    text: "Vous nous exposez votre projet ou votre besoin, par téléphone ou via le formulaire.",
  },
  {
    step: "02",
    title: "Analyse du besoin",
    text: "Nous qualifions l'usage, les contraintes techniques et l'environnement d'installation.",
  },
  {
    step: "03",
    title: "Proposition & devis",
    text: "Nous vous adressons une proposition d'équipement chiffrée et adaptée.",
  },
  {
    step: "04",
    title: "Livraison & accompagnement",
    text: "Nous assurons la mise à disposition du matériel et le suivi dans la durée.",
  },
];
