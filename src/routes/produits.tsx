import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import heroImage from "@/assets/univers-dentaire.jpg";
import galerie1 from "@/assets/hero-dental-office.jpg";
import galerie2 from "@/assets/labo-centrifugeuse.jpg";
import galerie3 from "@/assets/cabinet-medical.jpg";
import galerie4 from "@/assets/instruments-rotatifs.jpg";
import galerie5 from "@/assets/imagerie-dentaire.jpg";
import galerie6 from "@/assets/consommables-hygiene.jpg";
import galerie7 from "@/assets/mobilier-medical.jpg";
import galerie8 from "@/assets/analyseur-labo.jpg";
import provenanceImage from "@/assets/consommables-dentaires.jpg";
import { univers, type Univers } from "@/data/products";
import { faqProduits } from "@/data/faq";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/Cta";
import { Faq } from "@/components/site/Faq";
import { Reveal } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/produits")({
  head: () => ({
    meta: [
      { title: "Produits — Matériel dentaire, médical, laboratoire et hygiène | Sophiaco" },
      {
        name: "description",
        content:
          "Les familles de produits importées et distribuées par Sophiaco : matériel dentaire, matériel médical, équipement de laboratoire d'analyse et produits d'hygiène.",
      },
      { property: "og:title", content: "Un univers d'équipements pour les professionnels de santé" },
      {
        property: "og:description",
        content:
          "Découvrez les familles de produits que Sophiaco importe et distribue au Maroc, du fauteuil dentaire à la stérilisation.",
      },
    ],
  }),
  component: Produits,
});

const galerie = [
  { src: galerie1, alt: "Cabinet dentaire équipé", legend: "Matériel dentaire", tall: true },
  { src: galerie2, alt: "Centrifugeuse de laboratoire", legend: "Laboratoire d'analyse" },
  { src: galerie3, alt: "Salle de consultation médicale", legend: "Matériel médical" },
  {
    src: galerie4,
    alt: "Instruments rotatifs dentaires",
    legend: "Instruments dentaires",
    wide: true,
  },
  { src: galerie5, alt: "Unité d'imagerie dentaire", legend: "Imagerie dentaire" },
  { src: galerie6, alt: "Consommables d'hygiène rangés", legend: "Hygiène et protection" },
  { src: galerie7, alt: "Mobilier médical et chariot d'instruments", legend: "Mobilier médical" },
  { src: galerie8, alt: "Automate d'analyse en laboratoire", legend: "Équipements d'analyse" },
];

function Produits() {
  const [active, setActive] = useState(univers[0]?.id ?? "dentaire");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const u of univers) {
      const el = document.getElementById(u.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHero
        crumb="Produits"
        title="Un univers d'équipements pour les professionnels de santé"
        subtitle="Découvrez les familles de produits que nous importons et distribuons. Pour toute demande, notre équipe vous accompagne avec un devis personnalisé."
        image={heroImage}
      />

      {/* Navigation rapide (scrollspy) */}
      <nav
        className="sticky top-16 z-30 border-y border-border bg-background/85 backdrop-blur-xl"
        aria-label="Navigation entre les univers de produits"
      >
        <div className="shell flex gap-1 overflow-x-auto py-2">
          {univers.map((u) => (
            <a
              key={u.id}
              href={`#${u.id}`}
              className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === u.id ? "text-navy" : "text-muted-foreground hover:text-navy"
              }`}
            >
              {active === u.id ? (
                <motion.span
                  layoutId="univers-indicator"
                  className="absolute inset-0 rounded-full bg-sky-pale/70"
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                />
              ) : null}
              <span className="relative">{u.title}</span>
            </a>
          ))}
        </div>
      </nav>

      {univers.map((u, i) => (
        <UniversSection key={u.id} data={u} index={i} />
      ))}

      {/* GALERIE */}
      <section className="section-y bg-surface">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">En situation</p>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
              Nos équipements dans les structures de soin
            </h2>
          </Reveal>

          <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-4">
            {galerie.map((g, i) => (
              <Reveal
                key={g.legend}
                delay={i * 0.09}
                className={`${g.tall ? "row-span-2" : ""} ${g.wide ? "col-span-2" : ""}`}
              >
                <figure className="group relative h-full overflow-hidden rounded-2xl">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-navy/90 to-transparent p-4 text-sm font-semibold text-white opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                    {g.legend}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROVENANCE */}
      <section className="section-y bg-background">
        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src={provenanceImage}
              alt="Consommables dentaires prêts à être distribués"
              width={1200}
              height={912}
              loading="lazy"
              className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <Reveal>
            <p className="eyebrow">Provenance et sélection</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Des marques reconnues, sélectionnées pour l'usage quotidien
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Nous importons directement le matériel que nous distribuons. Cette maîtrise de la
              chaîne nous permet de sélectionner des références éprouvées en cabinet, de vérifier
              leur conformité et d'assurer la disponibilité des consommables associés dans le temps.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Sélection",
                  text: "Des équipements retenus pour leur robustesse et leur ergonomie réelle.",
                },
                {
                  title: "Importation",
                  text: "Un sourcing international assuré en interne, sans intermédiaire superflu.",
                },
                {
                  title: "Disponibilité",
                  text: "Les consommables associés restent accessibles après l'installation.",
                },
                {
                  title: "Conseil",
                  text: "Une recommandation adaptée à votre pratique, pas au catalogue le plus large.",
                },
              ].map((p, i) => (
                <Reveal as="li" key={p.title} delay={0.08 * i}>
                  <span className="block rounded-xl border border-border bg-surface p-5">
                    <span className="block font-display font-bold text-navy">{p.title}</span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                      {p.text}
                    </span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Faq
        items={faqProduits}
        title="Vos questions sur nos produits"
        intro="Cette page présente nos familles de produits, pas un catalogue tarifé : chaque configuration se construit avec vous."
      />

      <CtaBand />
    </>
  );
}

function UniversSection({ data, index }: { data: Univers; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.14, 1]);
  const reversed = index % 2 === 1;

  return (
    <section
      id={data.id}
      ref={ref}
      className={`section-y scroll-mt-28 ${index % 2 === 1 ? "bg-surface" : "bg-background"}`}
    >
      <div
        className={`shell grid items-center gap-12 lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <div className="overflow-hidden rounded-3xl shadow-lift">
          <motion.img
            style={{ scale }}
            src={data.image}
            alt={data.title}
            width={1408}
            height={1008}
            loading="lazy"
            className="h-[420px] w-full object-cover"
          />
        </div>

        <div>
          <Reveal delay={0.1}>
            <p className="eyebrow">Univers {index + 1} / 4</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">{data.title}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{data.description}</p>
          </Reveal>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {data.items.map((item, i) => (
              <Reveal as="li" key={item} delay={0.2 + i * 0.09}>
                <span className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-navy">
                  <Check className="mt-0.5 size-4 shrink-0 text-leaf" strokeWidth={2} />
                  {item}
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.3}>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-navy-soft"
            >
              Échanger avec notre équipe sur ce besoin
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.75}
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
