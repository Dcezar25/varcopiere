import { Button } from "@/components/ui/button";
import { ArrowRight, Award } from "lucide-react";
import doctor from "@/assets/doctor-portrait.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -right-32 w-[480px] h-[480px] rounded-full bg-primary-glow/15 blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-[420px] h-[420px] rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border/60 text-xs uppercase tracking-[0.18em] text-primary/80 mb-8">
            <Award className="w-3.5 h-3.5" />
            Medic Primar ORL · 30+ ani experiență
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-primary text-balance">
            Chirurgie ORL <br />
            <span className="italic gradient-text">Redarea armoniei </span>naturale.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Rinoplastie, rinoseptoplastie și corectarea deviației de sept —
            realizate cu rafinament, siguranță și o atenție obsesivă pentru detaliu.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-full px-7 h-12 shadow-elegant">
              <a href="#contact">
                Programează o consultație <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="rounded-full px-7 h-12">
              <a href="#proceduri">Vezi proceduri</a>
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { v: "30+", l: "ani de experiență" },
              { v: "5000+", l: "intervenții realizate" },
              { v: "1982", l: "începutul carierei" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-serif text-3xl text-primary">{s.v}</dt>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5 relative animate-fade-in">
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute -inset-4 bg-gradient-primary rounded-[2rem] opacity-10 blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-elegant ring-1 ring-border/60">
              <img
                src={doctor}
                alt="Dr. Marin Voica, medic primar ORL în București"
                width={1024}
                height={1280}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-soft border border-border/60 max-w-[230px] hidden sm:block">
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Specializare
              </div>
              <div className="font-serif text-lg text-primary mt-1 leading-tight">
                Rinoplastie & Rinoseptoplastie
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};