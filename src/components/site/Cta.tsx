import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Magnetic, Reveal } from "./motion-primitives";
import { company } from "@/data/company";

type Variant = "solid" | "outline" | "light";

const base =
  "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-shadow duration-300";

const styles: Record<Variant, string> = {
  solid: "bg-navy text-primary-foreground shadow-soft hover:shadow-lift",
  outline: "border border-navy/25 text-navy hover:shadow-soft",
  light: "border border-white/40 text-white hover:shadow-lift",
};

const fill: Record<Variant, string> = {
  solid: "bg-navy-soft",
  outline: "bg-sky-pale",
  light: "bg-white/15",
};

/** Primary CTA with center-out fill on hover and a nudging arrow. */
export function CtaLink({
  to,
  children,
  variant = "solid",
  hash,
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  hash?: string;
}) {
  return (
    <Magnetic>
      <Link to={to} {...(hash ? { hash } : {})} className={`${base} ${styles[variant]}`}>
        <span
          aria-hidden
          className={`absolute inset-0 origin-center scale-x-0 rounded-full transition-transform duration-400 ease-out group-hover:scale-x-100 ${fill[variant]}`}
        />
        <span className="relative">{children}</span>
        <ArrowRight
          className="relative size-4 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={1.75}
        />
      </Link>
    </Magnetic>
  );
}

/** Closing CTA band with slow moving mesh gradient. */
export function CtaBand() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-navy" aria-hidden />
      <div className="absolute inset-0 mesh-slow opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
      <div className="shell section-y relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-3xl text-white sm:text-4xl">
            Besoin d'un équipement spécifique&nbsp;? Notre équipe vous accompagne.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-xl text-sky-pale/90">
            Décrivez-nous votre besoin : nous revenons vers vous avec une proposition adaptée à
            votre structure. {company.contactName} reste votre interlocuteur direct.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <CtaLink to="/contact" variant="light">
              Contactez-nous
            </CtaLink>
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              {company.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
