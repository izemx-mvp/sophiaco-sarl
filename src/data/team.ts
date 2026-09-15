export type Member = {
  name: string;
  role: string;
  bio: string;
};

export const team: Member[] = [
  {
    name: "M. Belmaché",
    role: "Contact référent",
    bio: "Interlocuteur privilégié des professionnels de santé pour toute demande d'équipement, d'information technique ou de devis.",
  },
];

export const values = [
  {
    title: "Qualité",
    text: "Une sélection d'équipements issus de marques reconnues, choisis pour leur durabilité en usage quotidien.",
  },
  {
    title: "Fiabilité",
    text: "Des approvisionnements suivis et des engagements tenus, condition de la continuité des soins.",
  },
  {
    title: "Expertise technique",
    text: "Plus de vingt ans de pratique du matériel dentaire, médical et de laboratoire.",
  },
  {
    title: "Proximité client",
    text: "Un interlocuteur direct, à Casablanca, qui connaît les contraintes du terrain.",
  },
];

export const timeline = [
  {
    year: "2003",
    title: "Création de SOPHIACO S.A.R.L.",
    text: "L'entreprise est fondée à Casablanca autour de l'importation et de la distribution de matériel destiné aux professionnels de santé.",
  },
  {
    year: "Développement",
    title: "Spécialisation dentaire",
    text: "L'équipement des cabinets dentaires devient le cœur de l'expertise, complété par le médical, le laboratoire d'analyse et l'hygiène.",
  },
  {
    year: "Aujourd'hui",
    title: "Un acteur reconnu",
    text: "Sophiaco accompagne cabinets dentaires, cabinets médicaux, cliniques et laboratoires d'analyse dans l'équipement de leurs structures.",
  },
];
