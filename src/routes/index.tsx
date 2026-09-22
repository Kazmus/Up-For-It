import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Up For It — Accompagnement horeca, commerces & freelances en Belgique",
      },
      {
        name: "description",
        content:
          "UFI Studio (conseil pour établissements déjà ouverts) et UFI Academy (formation pour structurer, lancer ou relancer votre projet). Demandez votre conseil d'orientation : construisons votre succès.",
      },
      {
        property: "og:title",
        content: "Up For It — Construisons votre succès",
      },
      {
        property: "og:description",
        content:
          "Conseil terrain et formation pour l'horeca, les commerces et les freelances en Belgique.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

type Choice = "" | "Studio" | "Academy" | "Je ne sais pas";

const NAV_LINKS = [
  { label: "Studio", href: "#studio" },
  { label: "Academy", href: "#academy" },
  { label: "À propos", href: "#a-propos" },
  { label: "Références", href: "#references" },
  { label: "Contact", href: "#contact" },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={className ?? "h-5 w-5 shrink-0"}
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M3 10h14m0 0l-5-5m5 5l-5 5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function CtaButton({
  onClick,
  children,
  className,
  type = "button",
}: {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        className ??
        "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      }
    >
      {children}
    </button>
  );
}

function PhotoPlaceholder({
  label,
  alt,
  className,
}: {
  label: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={
        className ??
        "flex min-h-56 items-center justify-center rounded-3xl border-2 border-dashed border-border bg-muted/60 p-6"
      }
    >
      <span className="max-w-56 text-center text-sm font-medium text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function Header({ onAdvise }: { onAdvise: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-1.5" aria-label="Up For It — accueil">
          <span className="text-lg font-black tracking-tight text-foreground">
            UP <span className="text-primary">FOR IT</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <CtaButton onClick={onAdvise} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift">
            Me faire conseiller
          </CtaButton>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="h-6 w-6">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="h-6 w-6">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/70 bg-background px-4 pb-5 pt-3 md:hidden" aria-label="Navigation mobile">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
          </div>
          <CtaButton
            onClick={() => {
              setOpen(false);
              onAdvise();
            }}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-soft"
          >
            Me faire conseiller
          </CtaButton>
        </nav>
      )}
    </header>
  );
}

function Hero({ onAdvise }: { onAdvise: () => void }) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-secondary/60 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:pb-24 lg:pt-20 lg:px-8">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary-foreground sm:text-sm">
            Conseil & formation — Horeca, commerces, freelances
          </p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Des projets horeca qui tiennent la route.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
            Horeca, commerces, freelances : on travaille avec votre réalité,
            pas avec des grandes théories.
          </p>
          <div className="mt-6 sm:mt-8">
            <CtaButton onClick={onAdvise} className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift sm:inline-flex sm:w-auto">
              Me faire conseiller <ArrowIcon />
            </CtaButton>
            <p className="mt-3 text-sm text-muted-foreground">
              Un premier échange, sans engagement et sans jargon.
            </p>
          </div>
        </div>
        <PhotoPlaceholder
          className="hidden min-h-80 items-center justify-center rounded-3xl border-2 border-dashed border-border bg-muted/60 p-6 lg:flex"
          label="Photo d'ambiance — votre établissement (à remplacer)"
          alt="Photo d'ambiance : l'intérieur chaleureux d'un établissement horeca en Belgique (photo à venir)"
        />
      </div>
    </section>
  );
}

function DoorCard({
  id,
  chip,
  chipClass,
  title,
  subtitle,
  checklistTitle,
  items,
  ctaLabel,
  onCta,
  photo,
}: {
  id: string;
  chip: string;
  chipClass: string;
  title: string;
  subtitle: string;
  checklistTitle: string;
  items: string[];
  ctaLabel: string;
  onCta: () => void;
  photo: { label: string; alt: string };
}) {
  return (
    <article
      id={id}
      className="flex scroll-mt-20 flex-col rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <span
        className={`mb-4 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${chipClass}`}
      >
        {chip}
      </span>
      <h3 className="text-2xl font-extrabold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
        {subtitle}
      </p>
      <PhotoPlaceholder
        className="mt-5 flex min-h-40 items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted/60 p-6"
        label={photo.label}
        alt={photo.alt}
      />
      <p className="mt-6 text-sm font-bold uppercase tracking-wide text-foreground">
        {checklistTitle}
      </p>
      <ul className="mt-3 flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground sm:text-base">
            <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-7 flex-1" />
      <button
        type="button"
        onClick={onCta}
        className="inline-flex w-fit items-center gap-2 rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        {ctaLabel} <ArrowIcon />
      </button>
    </article>
  );
}

function TestimonialCard({
  quote,
  results,
  name,
  context,
}: {
  quote: string;
  results: string[];
  name: string;
  context: string;
}) {
  return (
    <figure className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-soft">
      <span aria-hidden="true" className="text-4xl font-black leading-none text-primary">
        “
      </span>
      <blockquote className="mt-2 text-base font-medium leading-relaxed text-foreground">
        {quote}
      </blockquote>
      <ul className="mt-4 flex flex-col gap-2">
        {results.map((r) => (
          <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {r}
          </li>
        ))}
      </ul>
      <figcaption className="mt-5 text-sm">
        <span className="font-bold text-foreground">{name}</span>
        <span className="text-muted-foreground"> — {context}</span>
      </figcaption>
    </figure>
  );
}

function ContactForm({
  choice,
  onChoiceChange,
}: {
  choice: Choice;
  onChoiceChange: (c: Choice) => void;
}) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full rounded-2xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40";

  if (sent) {
    return (
      <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
          <CheckIcon className="h-7 w-7 text-secondary-foreground" />
        </div>
        <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-foreground">
          Merci, c'est bien noté !
        </h3>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
          Votre demande de conseil d'orientation est enregistrée. On vous
          recontacte rapidement — promis, sans forcing commercial.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-semibold text-accent underline-offset-4 hover:underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
      aria-label="Demander un conseil d'orientation"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nom" className="text-sm font-semibold text-foreground">
            Nom *
          </label>
          <input id="nom" name="nom" type="text" required autoComplete="name" placeholder="Votre nom" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-semibold text-foreground">
            E-mail *
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="vous@exemple.be" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="tel" className="text-sm font-semibold text-foreground">
            Téléphone
          </label>
          <input id="tel" name="tel" type="tel" autoComplete="tel" placeholder="+32 (0)4XX XX XX XX" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="choix" className="text-sm font-semibold text-foreground">
            Vous vous reconnaissez plutôt…
          </label>
          <select
            id="choix"
            name="choix"
            value={choice}
            onChange={(e) => onChoiceChange(e.target.value as Choice)}
            className={inputClass}
          >
            <option value="Je ne sais pas">Je ne sais pas — conseillez-moi</option>
            <option value="Studio">UFI Studio — mon établissement est ouvert</option>
            <option value="Academy">UFI Academy — je prépare mon projet</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold text-foreground">
            Votre situation en quelques mots
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Où en êtes-vous ? Qu'est-ce qui coince aujourd'hui ?"
            className={`${inputClass} resize-y`}
          />
        </div>
      </div>
      <CtaButton
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift sm:inline-flex sm:w-auto"
      >
        Me faire conseiller <ArrowIcon />
      </CtaButton>
      <p className="mt-3 text-xs text-muted-foreground">
        Vos informations restent entre nous et ne sont jamais revendues.
      </p>
    </form>
  );
}

function LandingPage() {
  const [choice, setChoice] = useState<Choice>("");

  const goContact = (c?: Choice) => {
    if (c) setChoice(c);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onAdvise={() => goContact()} />

      <main>
        <Hero onAdvise={() => goContact()} />

        {/* Deux portes */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24" aria-labelledby="portes-titre">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="portes-titre" className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
              Deux portes d'entrée, une seule ambition
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Selon où vous en êtes, la porte n'est pas la même. Pas d'inquiétude :
              si vous vous trompez, on vous réoriente dès le premier échange.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
            <DoorCard
              id="studio"
              chip="UFI Studio"
              chipClass="bg-secondary text-secondary-foreground"
              title="Studio"
              subtitle="Conseil et production pour les établissements déjà ouverts."
              checklistTitle="Vous êtes plutôt Studio si"
              items={[
                "Votre établissement est déjà ouvert",
                "La rentabilité ou la trésorerie est difficile",
                "Votre équipe est mal structurée ou sous tension",
                "Votre visibilité en ligne ne suit pas",
              ]}
              ctaLabel="Découvrir le Studio"
              onCta={() => goContact("Studio")}
              photo={{
                label: "Photo d'ambiance — en salle ou en cuisine (à remplacer)",
                alt: "Photo d'ambiance : un gérant dans son établissement en pleine activité (photo à venir)",
              }}
            />
            <DoorCard
              id="academy"
              chip="UFI Academy"
              chipClass="bg-primary/15 text-foreground"
              title="Academy"
              subtitle="Formation pour structurer, lancer ou relancer votre projet."
              checklistTitle="Vous êtes plutôt Academy si"
              items={[
                "Votre projet est en cours de structuration",
                "Vous êtes en reconversion ou en sortie du chômage",
                "Vous ouvrez votre premier établissement",
                "Vous avez besoin de clarté sur le concept, les chiffres et les étapes",
              ]}
              ctaLabel="Découvrir l'Academy"
              onCta={() => goContact("Academy")}
              photo={{
                label: "Photo d'ambiance — atelier ou formation (à remplacer)",
                alt: "Photo d'ambiance : un porteur de projet en session de travail (photo à venir)",
              }}
            />
          </div>
        </section>

        {/* Orientation */}
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="flex flex-col items-start gap-5 rounded-3xl bg-secondary p-8 text-secondary-foreground sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                Vous hésitez entre les deux ?
              </h2>
              <p className="mt-2 text-base leading-relaxed">
                On vous oriente, sans forcing commercial.
              </p>
            </div>
            <button
              type="button"
              onClick={() => goContact("Je ne sais pas")}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-card px-6 py-3 text-base font-semibold text-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              Me faire conseiller <ArrowIcon />
            </button>
          </div>
        </section>

        {/* À propos */}
        <section id="a-propos" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24" aria-labelledby="a-propos-titre">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <PhotoPlaceholder
              label="Photo d'ambiance — terrain, avec vous (à remplacer)"
              alt="Photo d'ambiance : un conseiller Up For It sur le terrain avec un gérant (photo à venir)"
            />
            <div className="text-center lg:text-left">
              <h2 id="a-propos-titre" className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                À propos d'Up For It
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Up For It est une société belge qui accompagne l'horeca, les
                commerces et les freelances, sur le terrain : dans votre salle,
                votre cuisine ou votre boutique.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Pas de grandes théories : des constats honnêtes, des priorités
                claires et des actions qu'on met en place avec vous, une par une.
              </p>
              <p className="mt-5 text-lg font-bold text-primary sm:text-xl">
                « Construisons votre succès. »
              </p>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section id="references" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24" aria-labelledby="references-titre">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="references-titre" className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
              Ils sont passés avant vous
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Des situations réelles, des résultats concrets.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <TestimonialCard
              quote="Enfin des conseils concrets, appliqués en salle dès la semaine suivante. Ça change tout."
              results={[
                "Marge du bar en hausse de 6 points",
                "Carte resserrée : de 42 à 28 références",
                "Brief d'équipe avant chaque service",
              ]}
              name="Alex"
              context="bar à vin & tapas"
            />
            <TestimonialCard
              quote="Ils ont remis de l'ordre dans nos process et nos chiffres, site par site. On respire enfin."
              results={[
                "Deuxième site rentable en 5 mois",
                "Planning d'équipe stabilisé",
                "Visibilité Google doublée",
              ]}
              name="Sarah"
              context="concept food multi-sites"
            />
            <TestimonialCard
              quote="Après mon chômage, je ne savais pas par où commencer. Aujourd'hui, j'ai un plan et un dossier solide."
              results={[
                "Business plan présenté à la banque",
                "Concept clarifié en 6 semaines",
                "Dossier de financement préparé avec eux",
              ]}
              name="Jean"
              context="projet de café après une période de chômage"
            />
          </div>
        </section>

        {/* Primes et aides */}
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24" aria-labelledby="primes-titre">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5 text-secondary-foreground">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
              </div>
              <div>
                <h2 id="primes-titre" className="text-xl font-extrabold tracking-tight sm:text-2xl">
                  Primes et aides publiques
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  Certains accompagnements peuvent être partiellement
                  cofinancés par des aides publiques. Up For It vous aide à
                  vérifier votre éligibilité et à préparer votre dossier, pièce
                  par pièce.
                </p>
                <p className="mt-4 text-sm italic text-muted-foreground">
                  L'obtention d'une prime dépend des organismes publics et
                  n'est jamais garantie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24" aria-labelledby="contact-titre">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="contact-titre" className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
              Construisons votre succès
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Dites-nous où vous en êtes. On vous oriente vers la bonne porte,
              sans engagement.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl">
            <ContactForm choice={choice} onChoiceChange={setChoice} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-lg font-black tracking-tight">
                UP <span className="text-primary">FOR IT</span>
              </p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-background/70">
                Accompagnement terrain pour l'horeca, les commerces et les
                freelances en Belgique.
              </p>
              <a
                href="tel:+32479091909"
                className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-background transition-colors hover:text-primary"
              >
                <PhoneIcon /> +32 (0)479 09 19 09
              </a>
            </div>
            <nav aria-label="Réseaux sociaux et liens" className="flex flex-col items-center gap-2.5 text-sm md:items-start">
              <span className="text-xs font-bold uppercase tracking-wide text-background/60">
                Suivez-nous
              </span>
              <a href="#" className="w-fit text-background/85 transition-colors hover:text-primary">
                Instagram
              </a>
              <a href="#" className="w-fit text-background/85 transition-colors hover:text-primary">
                Facebook
              </a>
              <a href="#" className="w-fit text-background/85 transition-colors hover:text-primary">
                LinkedIn
              </a>
              <a href="#" className="mt-3 w-fit font-semibold text-primary transition-colors hover:text-background">
                Espace Learning
              </a>
            </nav>
          </div>
          <div className="mt-10 flex flex-col items-center gap-2 border-t border-background/15 pt-6 text-center text-xs text-background/60 sm:flex-row sm:justify-between sm:text-left">
            <p>© {new Date().getFullYear()} Up For It SRL — Belgique</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-background">
                Mentions légales
              </a>
              <a href="#" className="hover:text-background">
                Confidentialité
              </a>
              <a href="#" className="hover:text-background">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
