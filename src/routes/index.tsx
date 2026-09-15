import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import {
  Boxes,
  Building2,
  FlaskConical,
  Globe2,
  HeartHandshake,
  Microscope,
  ShieldCheck,
  Stethoscope,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/hero-dental-office.jpg";
import { company } from "@/data/company";
import { univers } from "@/data/products";
import { CtaBand, CtaLink } from "@/components/site/Cta";
import { Counter, Reveal, TiltCard } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sophiaco — Matériel dentaire et médical à Casablanca depuis 2003" },
      {
        name: "description",
        content:
          "Importation et distribution de matériel dentaire, médical, de laboratoire d'analyse et d'hygiène pour les professionnels de santé au Maroc.",
      },
      {
        property: "og:title",
        content: "Sophiaco — L'équipement de confiance des professionnels de santé au Maroc",
      },
      {
        property: "og:description",
        content:
          "Matériel dentaire, médical, de laboratoire et d'hygiène. Importateur et distributeur à Casablanca depuis 2003.",
      },
    ],
  }),
  component: Home,
});

const domainIcons = {
  dentaire: Stethoscope,
  medical: HeartHandshake,
  laboratoire: Microscope,
  hygiene: ShieldCheck,
} as const;

const trust = [
  { icon: Stethoscope, label: "Cabinets dentaires" },
  { icon: Building2, label: "Cliniques" },
  { icon: FlaskConical, label: "Laboratoires d'analyse" },
];

const reasons = [
  {
    icon: Globe2,
    value: new Date().getFullYear() - company.foundedYear,
    prefix: "+",
    suffix: " ans",
    title: "d'expertise",
    text: `Créée en ${company.foundedYear} à Casablanca, Sophiaco accompagne les professionnels de santé depuis plus de deux décennies.`,
  },
  {
    icon: Boxes,
    value: 4,
    prefix: "",
    suffix: "",
    title: "familles de produits",
    text: "Dentaire, médical, laboratoire d'analyse et hygiène : un seul interlocuteur pour l'ensemble de votre plateau technique.",
  },
  {
    icon: HeartHandshake,
    value: 1,
    prefix: "",
    suffix: "",
    title: "interlocuteur dédié",
    text: "Un accompagnement personnalisé à chaque étape, du choix du matériel au suivi après livraison.",
  },
  {
    icon: Globe2,
    value: 0,
    prefix: "",
    suffix: "",
    title: "Import & distribution",
    text: "Un sourcing international auprès de marques reconnues, distribué localement auprès des structures de soin.",
  },
];

function Home() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Cabinet dentaire moderne et lumineux équipé par Sophiaco"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 gradient-navy opacity-[0.78]" aria-hidden />
        <div className="absolute inset-0 mesh-slow opacity-40 mix-blend-screen" aria-hidden />
        <div className="absolute inset-0 bg-grid opacity-15" aria-hidden />

        <div className="shell relative pt-32 pb-16">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-sky-pale"
          >
            {company.legalName} · Casablanca
          </motion.p>

          <motion.h1
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-4xl text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl"
          >
            L'équipement de confiance des professionnels de santé au Maroc depuis 2003
          </motion.h1>

          <motion.p
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl text-lg text-sky-pale/90"
          >
            Spécialiste de l'équipement des cabinets dentaires, Sophiaco importe et distribue
            également le matériel médical, de laboratoire d'analyse et d'hygiène.
          </motion.p>

          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <CtaLink to="/produits" variant="light">
              Découvrir nos produits
            </CtaLink>
            <CtaLink to="/contact" variant="light">
              Nous contacter
            </CtaLink>
          </motion.div>

          <Reveal delay={0.2} className="mt-16 border-t border-white/20 pt-6">
            <ul className="flex flex-wrap items-center gap-x-10 gap-y-4">
              <li className="text-xs tracking-[0.14em] text-sky-pale/70 uppercase">
                Ils s'équipent chez nous
              </li>
              {trust.map((t) => (
                <li key={t.label} className="flex items-center gap-2 text-sm text-white/85">
                  <t.icon className="size-4 text-leaf" strokeWidth={1.6} />
                  {t.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* DOMAINES */}
      <section className="section-y relative bg-background">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Nos domaines d'expertise</p>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
              Quatre familles de produits, un seul partenaire
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {univers.map((u, i) => {
              const Icon = domainIcons[u.id as keyof typeof domainIcons];
              return (
                <Reveal key={u.id} delay={i * 0.1}>
                  <TiltCard className="group h-full">
                    <Link
                      to="/produits"
                      hash={u.id}
                      className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift"
                    >
                      <span className="flex size-12 items-center justify-center rounded-xl bg-sky-pale/60 text-navy transition-transform duration-500 group-hover:-rotate-6">
                        <Icon className="size-6" strokeWidth={1.5} />
                      </span>
                      <h3 className="mt-6 text-lg text-navy">{u.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {u.short}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-soft">
                        Découvrir
                        <ArrowRight
                          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                          strokeWidth={1.75}
                        />
                      </span>
                    </Link>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* POURQUOI */}
      <section className="section-y relative overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="shell relative">
          <Reveal>
            <p className="eyebrow">Pourquoi choisir Sophiaco</p>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
              Une expertise construite dans la durée
            </h2>
          </Reveal>

          <div className="relative mt-14">
            <motion.div
              className="absolute top-6 right-0 left-0 hidden h-px origin-left bg-navy/20 lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              aria-hidden
            />
            <div className="grid gap-10 lg:grid-cols-4">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={i * 0.12}>
                  <div className="relative">
                    <span className="flex size-12 items-center justify-center rounded-full border border-navy/15 bg-background text-navy-soft">
                      <r.icon className="size-5" strokeWidth={1.6} />
                    </span>
                    <p className="mt-6 font-display text-3xl font-bold text-navy">
                      {r.value > 0 ? (
                        <Counter to={r.value} prefix={r.prefix} suffix={r.suffix} />
                      ) : (
                        r.title
                      )}
                    </p>
                    {r.value > 0 ? (
                      <p className="mt-1 text-sm font-semibold text-navy/70">{r.title}</p>
                    ) : null}
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONFIANCE */}
      <section className="section-y bg-background">
        <div className="shell grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Ils nous font confiance</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Des cabinets, cliniques et laboratoires équipés au quotidien
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Chirurgiens-dentistes, médecins, cliniques et responsables de laboratoires d'analyse
              nous consultent pour l'équipement de leurs structures comme pour leurs
              réapprovisionnements réguliers. Notre rôle&nbsp;: rendre l'accès au bon matériel
              simple, fiable et durable.
            </p>
            <div className="mt-8">
              <CtaLink to="/a-propos" variant="outline">
                En savoir plus sur Sophiaco
              </CtaLink>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {trust.map((t, i) => (
              <Reveal key={t.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <t.icon className="size-6 text-navy-soft" strokeWidth={1.5} />
                  <h3 className="mt-4 text-base text-navy">{t.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Équipement, consommables et accompagnement adaptés à ce type de structure.
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="rounded-2xl border border-dashed border-navy/20 bg-background p-6">
                <p className="text-sm text-muted-foreground">
                  Espace réservé aux témoignages de nos clients professionnels.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
