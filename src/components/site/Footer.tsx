import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/sophiaco-logo.png";
import { company, nav } from "@/data/company";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="shell grid gap-12 py-16 md:grid-cols-3">
        <div>
          {/* Logo fourni par le client, utilisé tel quel (PNG) */}
          <img src={logo} alt="Sophiaco" className="h-14 w-auto" loading="lazy" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {company.legalName} — société marocaine créée en {company.foundedYear}, basée à
            Casablanca. {company.tagline}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-navy">Navigation</h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-navy">Coordonnées</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {/* À CONFIRMER AVEC LE CLIENT — adresse relevée sur annuaire public */}
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-navy-soft" strokeWidth={1.75} />
              <span>{company.address}</span>
            </li>
            {/* À CONFIRMER AVEC LE CLIENT — téléphone relevé sur annuaire public */}
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-navy-soft" strokeWidth={1.75} />
              <a href={company.phoneHref} className="transition-colors hover:text-navy">
                {company.phone}
              </a>
            </li>
            {/* À CONFIRMER AVEC LE CLIENT — horaires indicatifs */}
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-navy-soft" strokeWidth={1.75} />
              <span>{company.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. Tous droits réservés.
          </p>
          <p>Casablanca, Maroc</p>
        </div>
      </div>
    </footer>
  );
}
