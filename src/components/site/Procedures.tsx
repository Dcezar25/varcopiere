import { Sparkles, Scissors, Wind, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const procedures = [
  {
    icon: Sparkles,
    title: "Rinoplastie",
    desc: "Remodelarea estetică a piramidei nazale, în armonie cu trăsăturile naturale ale feței.",
    slug: "rinoplastie",
    linked: true,
  },
  {
    icon: Scissors,
    title: "Rinoseptoplastie",
    desc: "Combinație între chirurgia estetică și funcțională — formă echilibrată și respirație optimă.",
    slug: "rinoseptoplastie",
    linked: false,
  },
  {
    icon: Wind,
    title: "Deviație de sept",
    desc: "Corectarea septului nazal pentru a îmbunătăți respirația și calitatea somnului.",
    slug: "deviație-de-sept",
    linked: false,
  },
];

export const Procedures = () => {
  return (
    <section id="proceduri" className="py-24 lg:py-32 bg-cream/40 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.22em] text-accent mb-5">
            — Proceduri
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight text-balance">
            Intervenții realizate cu <span className="italic">măiestrie</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Fiecare procedură este planificată individual, după o consultație
            atentă și o discuție deschisă cu pacientul.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {procedures.map((p, i) => {
            const Icon = p.icon;
            const cardClasses =
              "group relative p-8 rounded-2xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-elegant transition-all duration-500 block h-full";

            const inner = (
              <>
                <div className="w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-primary mb-3">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {p.desc}
                </p>
                {p.linked && (
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent font-medium">
                    Detalii
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                )}
              </>
            );

            return p.linked ? (
              <Link
                key={p.title}
                to={`/proceduri#${p.slug}`}
                className={cardClasses}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {inner}
              </Link>
            ) : (
              <article
                key={p.title}
                className={cardClasses}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {inner}
              </article>
            );
          })}
        </div>

        {/* Wavy arrow + CTA */}
        <div className="mt-16 flex flex-col items-center text-center">
          <svg
            width="120"
            height="70"
            viewBox="0 0 120 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-accent mb-2"
            aria-hidden="true"
          >
            <path
              d="M5 10 Q 25 35, 45 18 T 90 30 L 90 55"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="3 4"
            />
            <path
              d="M83 48 L 90 58 L 97 48"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <Link
            to="/proceduri"
            className="inline-flex items-center gap-2 px-7 h-12 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-elegant hover:bg-primary/90 transition-colors"
          >
            Află mai multe
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
