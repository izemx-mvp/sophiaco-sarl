# Sophiaco Connect

Prompt Lovable — Site Vitrine Sophiaco

Copier-coller l'intégralité du contenu ci-dessous dans Lovable comme prompt initial.

Contexte du projet

Construis un site web vitrine / annuaire médical professionnel (pas d'e-commerce, pas de panier, pas de paiement en ligne) pour Sophiaco (SOPHIACO S.A.R.L.), une entreprise marocaine créée en 2003, basée à Casablanca, spécialisée dans l'importation et la distribution de matériel et produits dentaires, médicaux, de laboratoire d'analyse et d'hygiène, avec une spécialisation particulière dans l'équipement pour cabinets dentaires.

Le site ne doit pas ressembler à un site vitrine classique et statique. Il doit avoir un niveau de finition et d'interactivité proche d'un site produit tech/SaaS moderne (type site d'équipement médical haut de gamme ou de dispositifs scientifiques premium) tout en restant sobre et crédible pour une audience de professionnels de santé. Chaque page doit avoir des animations réfléchies qui appuient le contenu (pas de gadget gratuit) et une direction artistique qui évoque la précision, la technologie médicale et l'international (import/distribution).

Informations entreprise (à utiliser telles quelles)

Nom commercial : Sophiaco

Raison sociale : SOPHIACO S.A.R.L.

Année de création : 2003

Secteur : Importation et distribution de matériel et produits dentaires, médicaux, de laboratoire d'analyse et d'hygiène

Spécialité mise en avant : équipement et matériel pour dentistes

Ville : Casablanca, Maroc

Adresse : 400, Bd Zerktouni, Business Plaza, Casablanca (à reconfirmer avec le client avant mise en ligne — placeholder clairement modifiable)

Téléphone : 05 22 26 65 14 (trouvé sur annuaire public — à reconfirmer avec le client avant mise en ligne)

Contact référent : M. Belmaché

Note pour le développeur : marque l'adresse et le téléphone avec un commentaire <!-- À CONFIRMER AVEC LE CLIENT --> dans le code source.

Logo — instructions strictes

Le fichier logo (sophiaco-logo.png) est fourni en pièce jointe avec ce prompt.

Utiliser ce fichier tel quel, dans son format d'origine (PNG), dans le header et le footer

Ne pas convertir, re-générer, re-vectoriser ou recréer le logo dans un autre format (pas de conversion en SVG, pas de reconstruction via JSON/code, pas de recréation "à l'identique" par génération d'image) — le fichier PNG original doit être importé et utilisé directement comme asset image

Ne pas modifier ses couleurs, ses proportions ou son style

Prévoir uniquement un redimensionnement CSS responsive (largeur/hauteur adaptées au header/footer), sans retoucher le fichier lui-même

Génération des autres images du site

Le logo est le seul asset visuel fourni. Toutes les autres images nécessaires au site (hero, photos de matériel dentaire/médical/laboratoire, galerie, illustrations de section, etc.) doivent être générées directement par Lovable.

Pour chaque image à générer, rédiger un prompt de génération précis et détaillé plutôt qu'une description vague, en spécifiant systématiquement :

Le sujet exact (ex : "plateau d'instruments dentaires en acier inoxydable posé sur un chariot médical blanc, cabinet dentaire moderne en arrière-plan flou")

L'angle/cadrage (gros plan, plan large, vue de dessus, etc.)

L'ambiance lumineuse (lumière naturelle douce, lumière clinique blanche et nette, pas d'ambiance sombre ou dramatique)

La palette de couleurs à respecter autant que possible (tons blancs, gris clairs, bleus, pour rester cohérent avec l'identité visuelle bleu marine/vert du site)

Le style photographique attendu : photo-réaliste, professionnel, propre, haute définition, jamais de style illustration/cartoon/3D stylisé, jamais de texte incrusté dans l'image, jamais de logo ou marque visible d'un concurrent

Le contexte d'usage : environnement médical/dentaire/laboratoire crédible et net (pas de décor générique de bureau)

Exemples de prompts de génération à utiliser comme référence :

Hero : "Photo professionnelle grand angle d'un cabinet dentaire moderne et lumineux, fauteuil dentaire blanc au premier plan légèrement flou, lumière naturelle douce, tons blancs et bleu clair, aucune personne visible, style photo-réaliste haute définition"

Univers "Matériel médical" : "Gros plan photo-réaliste sur des instruments médicaux et un tensiomètre disposés proprement sur une table d'examen blanche, lumière clinique nette, fond neutre gris très clair, aucun texte ni marque visible"

Univers "Laboratoire d'analyse" : "Photo-réaliste d'un plan de travail de laboratoire d'analyse avec microscope et tubes à essai, éclairage naturel de laboratoire, tons blancs et bleus, aucune personne, haute définition"

Identité visuelle

Logo fourni séparément (voir section "Logo — instructions strictes" ci-dessus).

Couleurs principales :

Bleu marine profond #122A73 — couleur dominante (triangle et texte "Sophiaco")

Bleu dégradé #3B6FB6 → #DCE8F5 — accents, fonds de section, dégradés du globe

Vert #5C9A5C — accent secondaire, à utiliser avec parcimonie (micro-interactions, icônes, highlights)

Blanc et gris très clair #F7F8FA pour les fonds

Typographie : sans-serif moderne et institutionnelle (Inter, Manrope ou Poppins) ; grands titres en gras avec un tracking légèrement resserré pour un rendu "premium/technique"

Style général : sobre, professionnel, rassurant, mais avec des éléments visuels modernes : dégradés doux inspirés du globe du logo, fond avec grille fine ou motif "réseau/globe" très discret en filigrane, cartes avec ombres douces et bords arrondis, glassmorphism léger sur le header au scroll

Iconographie : icônes fines (line icons, style Lucide/Phosphor), jamais d'emoji

Stack technique

React + TypeScript

Tailwind CSS

Framer Motion pour toutes les animations de composants, transitions de page et micro-interactions

GSAP + ScrollTrigger (optionnel, si besoin d'animations de scroll plus avancées que Framer Motion, notamment pour les effets de parallax et les animations séquencées au scroll)

Design responsive mobile-first, animations allégées/désactivées sur mobile si elles nuisent à la fluidité

Routing multi-pages (react-router) avec transition de page animée (fade + léger slide)

Formulaire de contact fonctionnel (sans backend de paiement)

Contenu structuré en fichiers de données séparés (products.ts, services.ts, team.ts) pour faciliter une future connexion CMS

Respect de prefers-reduced-motion : toutes les animations doivent avoir une version réduite/désactivée pour l'accessibilité

Direction animations & interactions modernes (à appliquer sur tout le site)

Ce site doit se démarquer par une couche d'interaction soignée. Voici le langage d'animation à utiliser de façon cohérente sur toutes les pages :

Animations globales

Scroll reveal : chaque section/bloc de contenu apparaît avec un fade-in + léger slide-up (translateY 20-30px → 0) déclenché à l'entrée dans le viewport (Intersection Observer / Framer Motion whileInView), avec un léger stagger (décalage de 80-120ms) entre les éléments d'une même grille (ex : les 4 cartes "domaines d'expertise" apparaissent l'une après l'autre, pas toutes en même temps)

Header sticky intelligent : le header devient plus compact et prend un fond avec effet glassmorphism (backdrop-blur) dès que l'utilisateur scrolle au-delà de 80px ; il se masque légèrement au scroll vers le bas et réapparaît au scroll vers le haut

Curseur/hover premium : sur desktop, les boutons principaux ont un effet "magnetic" léger (le bouton suit très légèrement le curseur) et un effet de remplissage progressif au survol (fond qui se déploie depuis le centre ou depuis un coin)

Transitions de page : fade + léger slide lors du changement de route, avec une barre de progression fine en haut de page (façon loader) pendant le chargement

Compteurs animés : les chiffres clés (année de création → "+20 ans d'expertise", nombre de familles de produits, etc.) s'incrémentent depuis 0 jusqu'à leur valeur finale lorsqu'ils entrent dans le viewport

Cartes interactives : les cartes produits/services ont un effet de léger tilt 3D au survol (perspective CSS, inclinaison suivant la position du curseur) + ombre portée qui s'intensifie + légère mise à l'échelle (scale 1.02-1.03)

Fond animé discret : sur le hero et certaines sections de transition, un dégradé animé lent (mesh gradient bleu/blanc évoquant le globe du logo) ou des particules/lignes fines qui évoquent un réseau mondial (import/distribution), très subtil, jamais distrayant

Utilisation par type d'élément

Boutons CTA principaux : effet hover avec remplissage progressif de couleur + légère élévation (shadow) + icône flèche qui se déplace légèrement vers la droite au survol

Icônes de section (dentaire, médical, laboratoire, hygiène) : micro-animation au survol (légère rotation, pulse, ou trait qui se dessine façon "stroke animation" SVG)

Images produits : effet de zoom léger au survol (scale 1.05) avec overflow hidden sur le conteneur

Formulaire de contact : labels flottants animés, bordure des champs qui s'anime en couleur bleue/verte au focus, bouton d'envoi avec état de chargement animé (spinner ou checkmark animé après succès)

Structure et contenu détaillé des pages

1. Accueil (/)

Header

Logo Sophiaco à gauche

Menu horizontal centré ou à droite : Accueil, À propos, Produits, Services, Contact

Numéro de téléphone cliquable affiché en permanence à droite (icône téléphone + 05 22 26 65 14), avec un léger effet de pulse discret sur l'icône pour attirer l'œil sans être agaçant

Bouton CTA "Demander un devis" bien visible dans le header

Hero (plein écran ou proche)

Fond avec dégradé animé bleu marine → bleu clair façon globe du logo, ou photo grand format d'un plateau d'instruments dentaires/médicaux en gros plan avec un overlay dégradé bleu marine à 60-70% d'opacité

Titre principal (grand, impactant) : quelque chose comme "L'équipement de confiance des professionnels de santé au Maroc depuis 2003"

Sous-titre : phrase courte sur l'expertise dans le matériel dentaire, médical, de laboratoire et d'hygiène

Deux CTA : "Découvrir nos produits" (bouton plein, primaire) et "Nous contacter" (bouton outline, secondaire)

Le titre et les CTA apparaissent avec une animation d'entrée séquencée (titre en premier, puis sous-titre, puis boutons) au chargement de la page

Bandeau de logos ou d'icônes en bas du hero type "trusted by" discret : "Cabinets dentaires", "Cliniques", "Laboratoires d'analyse" avec petites icônes, en fade-in au scroll

Section "Nos domaines d'expertise" (4 blocs)

Grille de 4 cartes : Matériel dentaire / Matériel médical / Matériel de laboratoire d'analyse / Produits d'hygiène

Chaque carte : icône ligne animée, titre, courte description (1-2 phrases), effet tilt 3D + lien "Découvrir" au survol

Apparition en stagger au scroll

Section "Pourquoi choisir Sophiaco"

3-4 arguments avec icônes et compteurs animés là où c'est pertinent, par exemple :

"+20 ans" d'expertise (compteur animé depuis 0)

"4 familles de produits" couvertes

"Accompagnement personnalisé" à chaque étape

"Import & distribution" de marques reconnues

Disposition en grille ou en frise horizontale avec ligne de connexion animée qui se dessine entre les points au scroll (façon timeline/process)

Section "Ils nous font confiance"

Bloc générique (texte, pas de faux logos) évoquant cabinets dentaires, cliniques et laboratoires clients, avec un fond de section légèrement différent (gris très clair) pour marquer la rupture visuelle

Peut inclure un carrousel discret de témoignages génériques si le client en fournit plus tard (prévoir la structure même si le contenu réel n'existe pas encore)

Bande CTA de fin de page

Fond bleu marine avec dégradé, texte blanc : "Besoin d'un équipement spécifique ? Notre équipe vous accompagne."

Bouton "Contactez-nous" avec effet hover marqué

Légère animation de fond (mesh gradient lent ou motif globe en filigrane qui bouge très lentement)

Footer

Logo, courte description de l'entreprise, adresse, téléphone

Liens rapides vers toutes les pages

Mentions légales / © année en cours

Éventuellement icônes réseaux sociaux si fournis plus tard

2. À propos (/a-propos)

Hero de page

Bandeau plus compact que la home, titre "À propos de Sophiaco", fil d'Ariane (Accueil > À propos)

Section "Notre histoire"

Texte narratif sur la création de l'entreprise en 2003 et son évolution vers un acteur reconnu de la distribution médicale/dentaire à Casablanca

Présentée sous forme de frise chronologique verticale animée : le trait de la timeline se dessine progressivement au fur et à mesure du scroll, avec des points/étapes qui s'illuminent quand ils entrent dans le viewport (ex : 2003 - Création, aujourd'hui - Acteur reconnu ; étapes intermédiaires à compléter avec le client si disponibles, sinon garder 2-3 jalons génériques et sourcés uniquement sur des faits confirmés)

Section "Notre mission"

Mission et positionnement : partenaire de confiance pour l'équipement des professionnels de santé au Maroc

Mise en page en deux colonnes : texte à gauche, illustration/photo à droite avec léger effet parallax (l'image se déplace plus lentement que le texte au scroll)

Section "Nos valeurs"

3-4 valeurs (qualité, fiabilité, expertise technique, proximité client) en cartes avec icônes animées au survol, même traitement que les cartes de la home pour la cohérence

Section "Notre équipe" / référent

Présentation institutionnelle de M. Belmaché en tant que contact référent (pas de photo si non fournie — utiliser un avatar générique élégant ou une icône), avec ses coordonnées de contact direct si le client valide cette information

3. Produits (/produits)

Principe directeur — important : cette page ne doit surtout pas avoir l'apparence d'une page e-commerce (pas de grille de "product cards" avec prix, pas de bouton "ajouter", pas de badges type "-20%" ou "en stock"). Elle doit se lire comme une présentation éditoriale / catalogue visuel immersif de l'expertise de Sophiaco — pense à la manière dont une marque d'équipement scientifique ou technique haut de gamme présente son savoir-faire (grandes images, mise en page en sections plein écran, storytelling par univers de produits), pas à la manière dont un site marchand présente ses articles. L'objectif est de faire comprendre en un coup d'œil ce que Sophiaco sait fournir, pas de vendre une référence précise.

Hero de page

Grande photo/collage plein écran d'univers professionnel (cabinet dentaire, matériel médical, laboratoire) avec overlay dégradé bleu marine

Titre fort : "Un univers d'équipements pour les professionnels de santé"

Sous-titre clair sur le positionnement : "Découvrez les familles de produits que nous importons et distribuons. Pour toute demande, notre équipe vous accompagne avec un devis personnalisé."

Pas de moteur de recherche produit, pas de filtres "prix/disponibilité" — au maximum une navigation rapide par ancre vers les 4 univers (voir ci-dessous)

Navigation rapide entre univers

Une barre de navigation fine et discrète (pas un système d'onglets/filtres façon boutique) permettant de sauter directement à l'un des 4 univers de la page via une ancre, avec indicateur animé qui suit la section actuellement visible au scroll (scrollspy)

4 sections "univers de produits" en plein format (une par famille, disposées en grand, pas en petites cartes de grille)

Chaque univers occupe une section large de la page (façon "showcase"), avec une mise en page alternée gauche/droite entre les sections pour casser la monotonie :

Matériel dentaire — grande image immersive (fauteuil dentaire, plateau d'instruments), titre, paragraphe descriptif sur l'expertise dans ce domaine, liste illustrée par petites icônes des sous-univers couverts (fauteuils dentaires, instruments rotatifs, consommables, imagerie/radiologie dentaire) — présentés comme des repères de contenu, pas comme des fiches produits cliquables individuellement

Matériel médical — même traitement visuel : équipement de cabinet médical, mobilier médical, instruments de consultation

Matériel de laboratoire d'analyse — même traitement visuel : équipements d'analyse, instruments de mesure et de diagnostic

Produits et matériel d'hygiène — même traitement visuel : équipement de stérilisation, consommables d'hygiène et de protection

Traitement visuel/animation de chaque section :

L'image de la section apparaît avec un léger effet de parallax/zoom-out au scroll (l'image est légèrement zoomée puis se stabilise à sa taille normale en arrivant dans le viewport)

Le texte apparaît en fade + slide, décalé légèrement après l'image

Les icônes de sous-univers apparaissent en stagger, avec un trait animé (stroke draw) au moment de l'apparition

Un seul bouton discret par section, cohérent avec le ton non-marchand : "Échanger avec notre équipe sur ce besoin", qui renvoie vers le formulaire de contact (jamais "Ajouter", "Commander" ou un prix)

Section finale de type "galerie"

En bas de page, une mosaïque/galerie photo (grid asymétrique, pas uniforme) de visuels d'équipement en situation réelle (cabinet, laboratoire) pour renforcer l'aspect "vitrine visuelle" plutôt que catalogue — au survol d'une image, léger zoom + légende qui apparaît en overlay (nom de l'univers concerné), sans lien vers une fiche produit individuelle

Ce qu'il ne faut surtout pas faire sur cette page

Pas de grille répétitive de petites cartes identiques façon boutique en ligne

Pas de prix, pas de bouton "ajouter au panier"/"acheter", pas de système de filtre par prix/marque/disponibilité

Pas de fiches produit individuelles avec référence, en revanche des univers/familles racontés visuellement

Le seul call-to-action possible sur cette page est d'entrer en contact avec l'équipe, jamais une transaction

4. Services (/services)

Hero de page

Titre "Nos services", sous-titre sur l'accompagnement global proposé aux professionnels de santé

Liste de services en sections alternées Présenter chaque service en alternance image/texte (gauche-droite puis droite-gauche), avec animation de scroll (fade + slide horizontal léger selon le côté) :

Conseil et accompagnement : aide au choix du matériel adapté au cabinet/à la structure

Import et distribution : sourcing et importation de produits de marques reconnues à l'international

Support et suivi client : accompagnement après-vente, réponse aux besoins spécifiques

Section "Notre processus"

Frise horizontale (desktop) / verticale (mobile) en 3-4 étapes type "Prise de contact → Analyse du besoin → Proposition & devis → Livraison & accompagnement", avec une ligne de progression animée qui se remplit au scroll et des icônes qui s'activent (changement de couleur) à chaque étape atteinte

5. Contact (/contact)

Hero de page

Titre "Contactez-nous", sous-titre invitant à échanger avec l'équipe pour tout besoin en équipement

Mise en page en deux colonnes

Colonne gauche : formulaire de contact (Nom, Société/Cabinet, Téléphone, Email, Sujet, Message, bouton "Envoyer")

Champs avec labels flottants animés (le label remonte et rétrécit dès que le champ est actif ou rempli)

Bordure des champs qui passe progressivement du gris au bleu marine (puis vert en cas de validation réussie) au focus

Bouton d'envoi avec état de chargement (spinner animé) puis état de succès (icône check qui apparaît avec une animation de type "draw" + message de confirmation qui remplace temporairement le formulaire)

Colonne droite : bloc coordonnées (adresse, téléphone cliquable, horaires) + carte Google Maps intégrée (embed) centrée sur l'adresse à Casablanca, avec un léger effet de fade-in/zoom-in au chargement de la carte

Horaires d'ouverture

Placeholder standard : Lundi-Vendredi 9h-18h (à confirmer avec le client)

Contenu / Ton

Tous les textes en français

Ton professionnel, rassurant, orienté B2B (dentistes, médecins, responsables de laboratoires et de cliniques — pas le grand public)

Éviter tout vocabulaire e-commerce ("acheter", "panier", "commander") — utiliser "nous contacter", "demander un devis", "en savoir plus"

Fonctionnalités attendues

Numéro de téléphone cliquable (tel:) visible dans le header sur mobile

Formulaire de contact avec validation des champs et états animés (chargement/succès/erreur)

Navigation fluide, transitions de page animées, bouton de retour en haut de page qui apparaît au scroll

Site rapide malgré les animations (lazy loading des images, animations optimisées GPU via transform/opacity uniquement)

SEO de base (balises title/meta description par page, structure Hn cohérente)

Respect de prefers-reduced-motion

Aucune fonctionnalité de paiement, panier, compte utilisateur ou catalogue e-commerce

Ce qu'il ne faut PAS faire

Pas de panier ni de tunnel d'achat

Pas d'affichage de prix

Pas de création de compte client

Pas de contenu inventé pour les certifications, marques partenaires ou chiffres clés (utiliser des formulations génériques comme "des marques reconnues" plutôt que d'inventer des noms de marques ou des chiffres non confirmés)

Pas d'animations gratuites qui ralentissent la page ou nuisent à la lisibilité — chaque animation doit avoir une justification (guider l'œil, confirmer une action, révéler du contenu)

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/95f50478-d354-4fee-989c-0c0d1c39037a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
