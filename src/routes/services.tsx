import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { process, services, type Service } from "@/data/services";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/Cta";
import { Reveal } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Nos services — Conseil, import et suivi client | Sophiaco" },
      {
        name: "description",
        content:
          "Conseil dans le choix du matériel, import et distribution auprès de marques reconnues, support et suivi client : l'accompagnement Sophiaco.",
      },
      { property: "og:title", content: "Nos services — Sophiaco" },
      {
        property: "og:description",
        content:
          "Un accompagnement global des professionnels de santé, du conseil initial au suivi après livraison.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  const processRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start 75%", "end 65%"],
  });

  return (
    <>
      <PageHero
        crumb="Services"
        title="Nos services"
        subtitle="Bien plus qu'un fournisseur : un accompagnement global des professionnels de santé, du choix de l'équipement jusqu'au suivi dans la durée."
      />

      {services.map((s, i) => (
        <ServiceSection key={s.id} data={s} index={i} />
      ))}

      {/* PROCESSUS */}
      <section className="section-y relative overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="shell relative">
          <Reveal>
            <p className="eyebrow">Notre processus</p>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
              Quatre étapes, du premier échange à la livraison
            </h2>
          </Reveal>

          <div ref={processRef} className="relative mt-14">
            <div className="absolute top-6 right-0 left-0 hidden h-px bg-navy/15 lg:block" />
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="absolute top-6 right-0 left-0 hidden h-px origin-left bg-navy-soft lg:block"
              aria-hidden
            />
            <ol className="grid gap-10 lg:grid-cols-4">
              {process.map((p, i) => (
                <Reveal as="li" key={p.step} delay={i * 0.12}>
                  <span className="flex size-12 items-center justify-center rounded-full border border-navy/15 bg-background font-display font-bold text-navy-soft">
                    {p.step}
                  </span>
                  <h3 className="mt-6 text-lg text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function ServiceSection({ data, index }: { data: Service; index: number }) {
  const reversed = index % 2 === 1;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      ref={ref}
      className={`section-y overflow-hidden ${reversed ? "bg-surface" : "bg-background"}`}
    >
      <div
        className={`shell grid items-center gap-12 lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <div className="overflow-hidden rounded-3xl shadow-lift">
          <motion.img
            style={{ y }}
            src={data.image}
            alt={data.title}
            loading="lazy"
            className="h-[400px] w-full scale-110 object-cover"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: reversed ? -26 : 26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">Service {index + 1} / {services.length}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{data.title}</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">{data.description}</p>
          <ul className="mt-7 space-y-3">
            {data.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-navy">
                <Check className="mt-0.5 size-4 shrink-0 text-leaf" strokeWidth={2} />
                {p}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-navy-soft"
          >
            Parler de ce besoin avec notre équipe
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.75}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
