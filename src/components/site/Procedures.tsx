import { Sparkles, Scissors, Wind, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const procedures = [
  {
    icon: Sparkles,
    title: "Rinoplastie",
    desc: "Remodelarea estetică a piramidei nazale, în armonie cu trăsăturile naturale ale feței. Obținem un profil echilibrat care îți pune în valoare frumusețea nativă a chipului.",
    slug: "rinoplastie",
  },
  {
    icon: Scissors,
    title: "Rinoseptoplastie",
    desc: "Combinație între chirurgia estetică și funcțională — formă echilibrată și respirație optimă. Această intervenție complexă rezolvă simultan atât aspectul vizual, cât și problemele respiratorii.",
    slug: "rinoseptoplastie",
  },
  {
    icon: Wind,
    title: "Deviație de sept",
    desc: "Corectarea septului nazal pentru a îmbunătăți respirația și calitatea somnului. Redescoperă confortul unei respirații libere și elimină oboseala cronică cauzată de fluxul de aer deficitar.",
    slug: "deviatie-de-sept",
  },
];

export const Procedures = () => {
  return (
    <section id="proceduri" className="scroll-reveal py-24 lg:py-32 bg-cream/40 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden hidden lg:block z-0" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-3xl animate-blob-drift" />
        <div className="absolute -bottom-32 -left-24 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-accent/15 via-primary/10 to-transparent blur-3xl animate-blob-drift-slow" />

        {/* NASUL ANIMAT - MAI MARE */}
        <div className="absolute top-4 right-6 xl:right-10 w-56 h-56 xl:w-64 xl:h-64 scale-110">
          <svg viewBox="0 0 200 200" className="w-full h-full text-primary/70" fill="none">
            <defs>
              <linearGradient id="nose-stroke-v5" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="hsl(212 75% 35%)" />
                <stop offset="100%" stopColor="hsl(200 85% 55%)" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="90" fill="rgba(200, 220, 255, 0.05)" className="animate-pulse" />
            <path d="M 70 30 C 78 55, 70 75, 95 95 C 115 110, 130 118, 128 135 C 126 150, 110 160, 90 158" stroke="url(#nose-stroke-v5)" strokeWidth="3.5" strokeLinecap="round" fill="none" className="animate-nose-before" />
            <path d="M 72 32 C 82 60, 78 82, 100 100 C 118 114, 130 122, 126 138 C 122 152, 108 160, 90 158" stroke="url(#nose-stroke-v5)" strokeWidth="3.5" strokeLinecap="round" fill="none" className="animate-nose-after" />
          </svg>
        </div>
      </div>

      {/* SISTEM DUBLU DE ORBITE DINAMICE */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full hidden lg:block z-[5]" viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice">
        <filter id="glow-v5"><feGaussianBlur stdDeviation="2.5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>

        <path id="path-outer-v4" d="M 450 140 C 80 140, 80 840, 720 840 C 1360 840, 1360 140, 990 140" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/10" strokeDasharray="4 4" />
        <path id="path-inner-v4" d="M 500 200 C 200 200, 200 780, 720 780 C 1240 780, 1240 200, 940 200" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/10" strokeDasharray="4 4" />

        {[0, 1.6, 3.2, 4.8, 6.4].map((d, i) => (
          <circle key={`out-${i}`} r="3.5" fill="hsl(var(--accent))" filter="url(#glow-v5)">
            <animateMotion dur="8s" begin={`${d}s`} repeatCount="indefinite"><mpath href="#path-outer-v4" /></animateMotion>
          </circle>
        ))}

        {[0, 1.2, 2.4, 3.6, 4.8].map((d, i) => (
          <circle key={`in-${i}`} r="2.5" fill="hsl(var(--primary))" filter="url(#glow-v5)">
            <animateMotion dur="6s" begin={`${d}s`} repeatCount="indefinite"><mpath href="#path-inner-v4" /></animateMotion>
          </circle>
        ))}
      </svg>

      <div className="container relative z-10">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.22em] text-accent mb-5">— Proceduri</div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">Intervenții realizate cu <span className="italic">măiestrie</span>.</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">Fiecare procedură este planificată individual, după o consultație atentă și o discuție deschisă cu pacientul.</p>
        </div>

        {/* Grid Carduri - max-w-full și gap mare pentru lățime maximă */}
        <div className="grid lg:grid-cols-3 gap-6 xl:gap-8 max-w-full mx-auto">
          {procedures.map((p, i) => (
            <Link key={p.title} to={`/proceduri#${p.slug}`} className="group relative p-8 rounded-2xl bg-card/85 backdrop-blur-md border border-border/60 hover:border-primary/25 hover:shadow-elegant transition-all duration-500 block h-full hover:-translate-y-1 z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform">
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-3">{p.title}</h3>
              {/* Text sexy (15px) + Justify cu Hyphens (fără spații mari) */}
              <p 
                className="text-muted-foreground leading-relaxed text-[15px]" 
                style={{ 
                  textAlign: 'justify', 
                  textJustify: 'inter-word', 
                  hyphens: 'auto', 
                  WebkitHyphens: 'auto' 
                }}
              >
                {p.desc}
              </p>
              <div className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm text-primary font-medium group-hover:bg-secondary transition-all">
                <span>Detalii</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>

        <div className="relative mt-20 flex flex-col items-center text-center z-10">
          <Link to="/proceduri" className="group inline-flex items-center gap-2 px-8 h-12 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-elegant hover:shadow-glow transition-all duration-300">
            Apasă pentru mai mulți clienți fericiți
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
