import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";
import { Check, Clock, Loader2, MapPin, Phone, Send, UserRound } from "lucide-react";
import { z } from "zod";
import { company } from "@/data/company";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sophiaco, matériel médical et dentaire à Casablanca" },
      {
        name: "description",
        content:
          "Contactez l'équipe Sophiaco à Casablanca pour tout besoin en matériel dentaire, médical, de laboratoire ou d'hygiène. Demande de devis personnalisé.",
      },
      { property: "og:title", content: "Contactez Sophiaco" },
      {
        property: "og:description",
        content:
          "Un besoin en équipement ? Écrivez-nous ou appelez-nous : notre équipe vous répond et établit un devis adapté.",
      },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Merci d'indiquer votre nom").max(100),
  company: z.string().trim().max(120).optional(),
  phone: z
    .string()
    .trim()
    .min(6, "Numéro de téléphone incomplet")
    .max(30, "Numéro trop long"),
  email: z.string().trim().email("Adresse email invalide").max(255),
  subject: z.string().trim().min(2, "Merci de préciser le sujet").max(150),
  message: z.string().trim().min(10, "Merci de détailler votre besoin").max(1500),
});

type Field = keyof z.infer<typeof schema>;

const fields: {
  name: Field;
  label: string;
  type?: string | undefined;
  required?: boolean | undefined;
}[] = [
  { name: "name", label: "Nom et prénom", required: true },
  { name: "company", label: "Société / Cabinet" },
  { name: "phone", label: "Téléphone", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "subject", label: "Sujet", required: true },
];

function Contact() {
  const [values, setValues] = useState<Record<Field, string>>({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function set(field: Field, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<Field, string>> = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as Field] = issue.message;
      }
      setErrors(next);
      return;
    }
    setStatus("loading");
    // Envoi simulé côté client : à brancher sur la messagerie du client.
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  }

  return (
    <>
      <PageHero
        crumb="Contact"
        title="Contactez-nous"
        subtitle="Un projet d'équipement, une question technique ou un besoin de réapprovisionnement ? Échangeons avec notre équipe à Casablanca."
      />

      <section className="section-y bg-background">
        <div className="shell grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* FORMULAIRE */}
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex min-h-[420px] flex-col items-center justify-center text-center"
                  >
                    <span className="flex size-16 items-center justify-center rounded-full bg-leaf/12 text-leaf">
                      <motion.span
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 16 }}
                      >
                        <Check className="size-8" strokeWidth={2.2} />
                      </motion.span>
                    </span>
                    <h2 className="mt-6 text-2xl text-navy">Message envoyé</h2>
                    <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                      Merci pour votre message. Notre équipe revient vers vous dans les meilleurs
                      délais. Pour une demande urgente, appelez-nous au {company.phone}.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setValues({
                          name: "",
                          company: "",
                          phone: "",
                          email: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="mt-8 rounded-full border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-surface"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    noValidate
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-5"
                  >
                    <h2 className="text-xl text-navy">Votre demande</h2>

                    <div className="grid gap-5 sm:grid-cols-2">
                      {fields.map((f) => (
                        <FloatingField
                          key={f.name}
                          id={f.name}
                          label={f.label}
                          type={f.type}
                          required={f.required}
                          value={values[f.name]}
                          error={errors[f.name]}
                          onChange={(v) => set(f.name, v)}
                          className={f.name === "subject" ? "sm:col-span-2" : ""}
                        />
                      ))}

                      <FloatingField
                        id="message"
                        label="Votre message"
                        required
                        textarea
                        value={values.message}
                        error={errors.message}
                        onChange={(v) => set("message", v)}
                        className="sm:col-span-2"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-shadow hover:shadow-lift disabled:opacity-80"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 origin-center scale-x-0 rounded-full bg-navy-soft transition-transform duration-400 group-hover:scale-x-100"
                      />
                      <span className="relative">
                        {status === "loading" ? "Envoi en cours…" : "Envoyer"}
                      </span>
                      {status === "loading" ? (
                        <Loader2 className="relative size-4 animate-spin" strokeWidth={2} />
                      ) : (
                        <Send
                          className="relative size-4 transition-transform duration-300 group-hover:translate-x-1"
                          strokeWidth={1.75}
                        />
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* COORDONNEES */}
          <div className="space-y-5">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-surface p-7">
                <h2 className="text-xl text-navy">Coordonnées</h2>
                <ul className="mt-6 space-y-5 text-sm">
                  {/* À CONFIRMER AVEC LE CLIENT — adresse relevée sur annuaire public */}
                  <InfoRow icon={<MapPin className="size-4" strokeWidth={1.75} />} title="Adresse">
                    {company.address}
                  </InfoRow>
                  {/* À CONFIRMER AVEC LE CLIENT — téléphone relevé sur annuaire public */}
                  <InfoRow icon={<Phone className="size-4" strokeWidth={1.75} />} title="Téléphone">
                    <a href={company.phoneHref} className="transition-colors hover:text-navy">
                      {company.phone}
                    </a>
                  </InfoRow>
                  {/* À CONFIRMER AVEC LE CLIENT — horaires indicatifs */}
                  <InfoRow icon={<Clock className="size-4" strokeWidth={1.75} />} title="Horaires">
                    {company.hours}
                  </InfoRow>
                  <InfoRow
                    icon={<UserRound className="size-4" strokeWidth={1.75} />}
                    title="Contact référent"
                  >
                    {company.contactName}
                  </InfoRow>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-3xl border border-border shadow-soft"
              >
                <iframe
                  title="Localisation de Sophiaco à Casablanca"
                  src="https://www.google.com/maps?q=400%20Bd%20Zerktouni%20Business%20Plaza%20Casablanca&output=embed"
                  loading="lazy"
                  className="h-[340px] w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-background text-navy-soft">
        {icon}
      </span>
      <span>
        <span className="block text-xs font-semibold tracking-wide text-navy/60 uppercase">
          {title}
        </span>
        <span className="mt-1 block text-muted-foreground">{children}</span>
      </span>
    </li>
  );
}

function FloatingField({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required,
  textarea,
  className = "",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string | undefined;
  type?: string | undefined;
  required?: boolean | undefined;
  textarea?: boolean | undefined;
  className?: string | undefined;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;
  const valid = value.trim().length > 1 && !error;

  const border = error
    ? "border-destructive"
    : focused
      ? "border-navy"
      : valid
        ? "border-leaf/70"
        : "border-input";

  const shared = `peer w-full rounded-xl border bg-background px-4 pt-6 pb-2 text-sm text-foreground outline-none transition-colors duration-300 ${border}`;

  return (
    <div className={`relative ${className}`}>
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 origin-left transition-all duration-200 ${
          lifted
            ? "top-2 text-[11px] font-semibold text-navy/70"
            : "top-4 text-sm text-muted-foreground"
        }`}
      >
        {label}
        {required ? " *" : ""}
      </label>

      {textarea ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className={`${shared} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className={shared}
        />
      )}

      {error ? <p className="mt-1.5 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
