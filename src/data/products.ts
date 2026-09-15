import dentaire from "@/assets/univers-dentaire.jpg";
import medical from "@/assets/univers-medical.jpg";
import laboratoire from "@/assets/univers-laboratoire.jpg";
import hygiene from "@/assets/univers-hygiene.jpg";

export type Univers = {
  id: string;
  title: string;
  short: string;
  description: string;
  image: string;
  items: string[];
};

export const univers: Univers[] = [
  {
    id: "dentaire",
    title: "Matériel dentaire",
    short:
      "Notre cœur de métier : équiper les cabinets dentaires, du fauteuil aux consommables du quotidien.",
    description:
      "Depuis plus de vingt ans, l'équipement des cabinets dentaires constitue notre spécialité. Nous accompagnons les praticiens dans le choix d'un plateau technique cohérent, durable et adapté à leur pratique quotidienne, de l'installation d'un nouveau cabinet au renouvellement d'un poste de travail.",
    image: dentaire,
    items: [
      "Fauteuils et unités dentaires",
      "Instruments rotatifs et petit instrumentation",
      "Consommables de soins",
      "Imagerie et radiologie dentaire",
    ],
  },
  {
    id: "medical",
    title: "Matériel médical",
    short:
      "Équipements et mobilier pour cabinets médicaux, cliniques et structures de soins.",
    description:
      "Nous fournissons aux médecins, cliniques et structures de soins le matériel nécessaire à la consultation et au diagnostic, ainsi que le mobilier médical qui structure un espace de soin fonctionnel et conforme aux exigences d'hygiène.",
    image: medical,
    items: [
      "Instruments de consultation et de diagnostic",
      "Équipement de cabinet médical",
      "Mobilier médical",
      "Petit matériel de soin",
    ],
  },
  {
    id: "laboratoire",
    title: "Matériel de laboratoire d'analyse",
    short:
      "Instruments de mesure, d'analyse et de diagnostic pour laboratoires.",
    description:
      "Les laboratoires d'analyse exigent précision et fiabilité. Nous sélectionnons des équipements d'analyse et des instruments de mesure auprès de marques reconnues à l'international, avec un accompagnement technique sur le choix et la mise en service.",
    image: laboratoire,
    items: [
      "Équipements d'analyse",
      "Instruments de mesure et de diagnostic",
      "Verrerie et consommables de laboratoire",
      "Petits équipements de paillasse",
    ],
  },
  {
    id: "hygiene",
    title: "Produits et matériel d'hygiène",
    short:
      "Stérilisation, désinfection et consommables de protection au quotidien.",
    description:
      "L'hygiène est la condition première de toute pratique de soin. Nous distribuons les équipements de stérilisation et les consommables d'hygiène et de protection nécessaires au respect des protocoles, avec des approvisionnements réguliers.",
    image: hygiene,
    items: [
      "Équipement de stérilisation",
      "Produits de désinfection",
      "Consommables de protection",
      "Gestion des déchets de soins",
    ],
  },
];
