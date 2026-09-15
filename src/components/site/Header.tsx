import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import logo from "@/assets/sophiaco-logo.png";
import { company, nav } from "@/data/company";
import { CtaLink } from "./Cta";

export function Header() {
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [last, setLast] = useState(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    setCompact(y > 80);
    setHidden(y > 240 && y > last);
    setLast(y);
  });

  return (
    <motion.header
      animate={{ y: hidden && !open ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        compact
          ? "border-b border-white/50 bg-white/75 shadow-soft backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div
        className={`shell flex items-center justify-between transition-all duration-300 ${
          compact ? "py-2.5" : "py-4"
        }`}
      >
        <Link
          to="/"
          className={`flex items-center rounded-xl transition-all duration-300 ${
            compact ? "" : "bg-white/90 px-3 py-1.5 shadow-soft backdrop-blur-sm"
          }`}
          aria-label={`${company.name} — accueil`}
        >
          {/* Logo fourni par le client, utilisé tel quel (PNG), redimensionné en CSS uniquement */}
          <img
            src={logo}
            alt="Sophiaco"
            className={`w-auto transition-all duration-300 ${compact ? "h-9" : "h-11"}`}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: compact ? "text-navy" : "text-white" }}
              inactiveProps={{
                className: compact ? "text-foreground/70" : "text-white/75",
              }}
              className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                compact ? "hover:text-navy" : "hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* À CONFIRMER AVEC LE CLIENT — numéro relevé sur annuaire public */}
          <a
            href={company.phoneHref}
            className={`group flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
              compact ? "text-navy hover:text-navy-soft" : "text-white hover:text-sky-pale"
            }`}
          >
            <span
              className={`relative flex size-8 items-center justify-center rounded-full ${
                compact ? "bg-sky-pale/70 text-navy" : "bg-white/15 text-white"
              }`}
            >
              <span
                className="absolute inset-0 animate-ping rounded-full bg-leaf/25 [animation-duration:3s]"
                aria-hidden
              />
              <Phone className="relative size-4" strokeWidth={1.75} />
            </span>
            <span className="hidden sm:inline">{company.phone}</span>
          </a>

          <span className="hidden md:inline">
            <CtaLink to="/contact" variant={compact ? "solid" : "light"}>
              Demander un devis
            </CtaLink>
          </span>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className={`flex size-10 items-center justify-center rounded-full border lg:hidden ${
              compact ? "border-navy/15 text-navy" : "border-white/40 text-white"
            }`}
          >
            {open ? (
              <X className="size-5" strokeWidth={1.75} />
            ) : (
              <Menu className="size-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-white/95 backdrop-blur-xl lg:hidden"
            aria-label="Navigation mobile"
          >
            <div className="shell flex flex-col py-3">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-navy" }}
                  className="border-b border-border/60 py-3 text-sm font-medium text-foreground/80 last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <div className="py-3">
                <CtaLink to="/contact">Demander un devis</CtaLink>
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
