import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Award, Compass, Handshake, Phone, ShieldCheck, UserRound } from "lucide-react";
import missionImage from "@/assets/import-distribution.jpg";
import { company } from "@/data/company";
import { team, timeline, values } from "@/data/team";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/Cta";
import { Reveal, TiltCard } from "@/components/site/motion-primitives";

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

      <CtaBand />
    </>
  );
}
