import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Award, Compass, Handshake, MapPin, Phone, ShieldCheck, UserRound } from "lucide-react";
import missionImage from "@/assets/import-distribution.jpg";
import chiffresImage from "@/assets/casablanca-business.jpg";
import bureauImage from "@/assets/bureau-conseil.jpg";
import { company } from "@/data/company";
import { team, timeline, values } from "@/data/team";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/Cta";
import { Counter, Reveal, TiltCard } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos de Sophiaco — Distributeur de matériel médical à Casablanca" },
      {
        name: "description",
        content:
          "Créée en 2003 à Casablanca, Sophiaco est spécialisée dans l'importation et la distribution de matériel dentaire, médical, de laboratoire et d'hygiène.",
      },
      { property: "og:title", content: "À propos de Sophiaco" },
      {
        property: "og:description",
        content:
          "Notre histoire, notre mission et nos valeurs au service des professionnels de santé au Maroc.",
      },
    ],
  }),
  component: About,
});

const valueIcons = [Award, ShieldCheck, Compass, Handshake];

function About() {
  const missionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: missionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: lineProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 60%"],
  });

  return (
    <>
      <PageHero
        crumb="À propos"
        title="À propos de Sophiaco"
        subtitle={`${company.legalName}, société marocaine créée en ${company.foundedYear} et basée à Casablanca, dédiée à l'équipement des professionnels de santé.`}
      />

      {/* HISTOIRE */}
      <section className="section-y bg-background">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Notre histoire</p>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
              Plus de vingt ans au service des structures de soin
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              Sophiaco est née en {company.foundedYear} d'une conviction simple : les praticiens
              marocains méritent un accès direct, fiable et conseillé à du matériel professionnel de
              qualité. L'entreprise s'est construite à Casablanca autour de l'importation et de la
              distribution de matériel dentaire, puis a élargi son périmètre au médical, au
              laboratoire d'analyse et à l'hygiène.
            </p>
          </Reveal>

          <div ref={timelineRef} className="relative mt-16 pl-8 sm:pl-12">
            <div className="absolute top-2 bottom-2 left-[7px] w-px bg-navy/10 sm:left-[15px]" />
            <motion.div
              style={{ scaleY: lineProgress }}
              className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-navy-soft sm:left-[15px]"
              aria-hidden
            />
            <ol className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal as="li" key={t.title} delay={i * 0.1} className="relative">
                  <span className="absolute top-1.5 -left-8 flex size-4 items-center justify-center rounded-full border-2 border-navy-soft bg-background sm:-left-12">
                    <span className="size-1.5 rounded-full bg-leaf" />
                  </span>
                  <p className="eyebrow">{t.year}</p>
                  <h3 className="mt-2 text-xl text-navy">{t.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {t.text}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section ref={missionRef} className="section-y overflow-hidden bg-surface">
        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Notre mission</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Être le partenaire d'équipement des professionnels de santé au Maroc
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Nous sélectionnons, importons et distribuons du matériel destiné aux cabinets
              dentaires, cabinets médicaux, cliniques et laboratoires d'analyse. Notre mission
              dépasse la fourniture : nous conseillons sur le choix des équipements, nous assurons
              la continuité des approvisionnements et nous restons joignables pour chaque besoin
              spécifique.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Cette proximité, doublée d'un sourcing auprès de marques reconnues à l'international,
              constitue le socle de la relation de confiance que nous entretenons avec les
              praticiens.
            </p>
          </Reveal>

          <div className="overflow-hidden rounded-3xl shadow-lift">
            <motion.img
              style={{ y: imageY }}
              src={missionImage}
              alt="Stock de matériel médical prêt à être distribué"
              width={1408}
              height={1008}
              loading="lazy"
              className="h-[460px] w-full scale-110 object-cover"
            />
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="section-y bg-background">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Nos valeurs</p>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">Ce qui guide notre travail</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = valueIcons[i % valueIcons.length] ?? Award;
              return (
                <Reveal key={v.title} delay={i * 0.1}>
                  <TiltCard className="group h-full">
                    <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift">
                      <span className="flex size-12 items-center justify-center rounded-xl bg-sky-pale/60 text-navy transition-transform duration-500 group-hover:scale-110">
                        <Icon className="size-6" strokeWidth={1.5} />
                      </span>
                      <h3 className="mt-6 text-lg text-navy">{v.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="section-y bg-surface">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Notre équipe</p>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">Votre contact chez Sophiaco</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1}>
                <div className="flex gap-5 rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl gradient-navy text-white">
                    <UserRound className="size-7" strokeWidth={1.4} />
                  </span>
                  <div>
                    <h3 className="text-lg text-navy">{m.name}</h3>
                    <p className="text-sm font-semibold text-navy-soft">{m.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                    {/* À CONFIRMER AVEC LE CLIENT — ligne directe */}
                    <a
                      href={company.phoneHref}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-navy-soft"
                    >
                      <Phone className="size-4" strokeWidth={1.75} />
                      {company.phone}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOPHIACO EN CHIFFRES */}
      <section className="relative overflow-hidden">
        <img
          src={chiffresImage}
          alt="Quartier d'affaires de Casablanca"
          width={1408}
          height={912}
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 gradient-navy opacity-[0.86]" aria-hidden />
        <div className="absolute inset-0 bg-grid opacity-15" aria-hidden />
        <div className="shell section-y relative">
          <Reveal>
            <p className="eyebrow text-sky-pale">Sophiaco en bref</p>
            <h2 className="mt-3 max-w-2xl text-3xl text-white sm:text-4xl">
              Une entreprise casablancaise, ancrée dans le tissu médical marocain
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: new Date().getFullYear() - company.foundedYear,
                prefix: "+",
                suffix: "",
                label: "années d'activité",
                text: `Depuis ${company.foundedYear}, sans interruption.`,
              },
              {
                value: 4,
                prefix: "",
                suffix: "",
                label: "familles de produits",
                text: "Dentaire, médical, laboratoire, hygiène.",
              },
              {
                value: 1,
                prefix: "",
                suffix: "",
                label: "interlocuteur dédié",
                text: `${company.contactName}, votre contact direct.`,
              },
              {
                value: 0,
                prefix: "",
                suffix: "",
                label: "Tout le Maroc",
                text: "Bureaux à Casablanca, service national.",
              },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <p className="font-display text-4xl font-bold text-white">
                  {s.value > 0 ? (
                    <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                  ) : (
                    s.label
                  )}
                </p>
                {s.value > 0 ? (
                  <p className="mt-1 text-sm font-semibold text-sky-pale">{s.label}</p>
                ) : null}
                <p className="mt-3 text-sm text-sky-pale/80">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="section-y bg-background">
        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Nos engagements</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Ce que vous pouvez attendre de nous, concrètement
            </h2>
            <ul className="mt-8 space-y-6">
              {[
                {
                  title: "Une réponse rapide",
                  text: "Toute demande reçue pendant les heures d'ouverture est prise en charge dans la journée ou le jour ouvré suivant.",
                },
                {
                  title: "Un conseil honnête",
                  text: "Si un équipement n'est pas adapté à votre pratique ou à votre budget, nous le disons et proposons une alternative.",
                },
                {
                  title: "Une traçabilité claire",
                  text: "Références, provenance et conditions de livraison sont précisées dans chaque proposition écrite.",
                },
                {
                  title: "La continuité",
                  text: "Nous anticipons les besoins récurrents en consommables pour éviter les ruptures en cours d'activité.",
                },
              ].map((e, i) => (
                <Reveal as="li" key={e.title} delay={0.08 * i}>
                  <span className="flex gap-4">
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-sky-pale/60 font-display text-sm font-bold text-navy">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-display font-bold text-navy">{e.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                        {e.text}
                      </span>
                    </span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <div className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src={bureauImage}
              alt="Salle de réunion des bureaux Sophiaco à Casablanca"
              width={1408}
              height={1008}
              loading="lazy"
              className="h-[460px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ZONE D'INTERVENTION */}
      <section className="section-y bg-surface">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Zone d'intervention</p>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
              Basés à Casablanca, au service des praticiens du Royaume
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              {
                title: "Casablanca et région",
                text: "Notre zone historique : échanges directs, rendez-vous sur site et réactivité maximale.",
              },
              {
                title: "Grandes villes du Maroc",
                text: "Rabat, Marrakech, Tanger, Fès, Agadir : nous livrons les structures de soin partout dans le pays.",
              },
              {
                title: "Sourcing international",
                text: "Nos approvisionnements s'appuient sur des marques reconnues à l'international, importées par nos soins.",
              },
            ].map((z, i) => (
              <Reveal key={z.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <MapPin className="size-5 text-navy-soft" strokeWidth={1.6} />
                  <h3 className="mt-4 text-base text-navy">{z.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{z.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
