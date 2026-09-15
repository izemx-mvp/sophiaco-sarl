import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

/** Compact page header with breadcrumb, used on every inner page. */
export function PageHero({
  title,
  subtitle,
  crumb,
  image,
  children,
}: {
  title: string;
  subtitle: string;
  crumb: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden">
      {image ? (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 gradient-navy opacity-[0.82]" aria-hidden />
        </>
      ) : (
        <>
          <div className="absolute inset-0 gradient-navy" aria-hidden />
          <div className="absolute inset-0 mesh-slow opacity-50" aria-hidden />
        </>
      )}
      <div className="absolute inset-0 bg-grid opacity-15" aria-hidden />

      <div className="shell relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1 text-xs text-sky-pale/80"
          aria-label="Fil d'Ariane"
        >
          <Link to="/" className="transition-colors hover:text-white">
            Accueil
          </Link>
          <ChevronRight className="size-3.5" strokeWidth={1.75} />
          <span className="text-white">{crumb}</span>
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-4xl text-4xl text-white sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-2xl text-base text-sky-pale/90 sm:text-lg"
        >
          {subtitle}
        </motion.p>

        {children ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9"
          >
            {children}
          </motion.div>
        ) : null}
      </div>
    </header>
  );
}
