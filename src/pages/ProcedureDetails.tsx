import { Link } from "react-router-dom";
import { ArrowLeft, Quote, Sparkles, Scissors, Wind } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import beforeImg from "@/assets/before-after-before.jpg";
import afterImg from "@/assets/before-after-after.jpg";

const procedures = [
  {
    icon: Sparkles,
    title: "Rinoplastie",
    description:
      "Rinoplastia remodelează piramida nazală pentru un aspect echilibrat și natural, în armonie cu trăsăturile feței. Intervenția este planificată în detaliu, cu accent pe proporții, profil și expresivitate.",
    testimonial: {
      text: "Rezultatul depășește orice așteptare. Domnul doctor mi-a explicat fiecare etapă, iar recuperarea a fost mult mai ușoară decât credeam.",
      name: "Andreea M.",
    },
  },
  {
    icon: Scissors,
    title: "Rinoseptoplastie",
    description:
      "Combină chirurgia estetică cu cea funcțională — corectează simultan forma nasului și deviația de sept, pentru o respirație optimă și un rezultat estetic armonios.",
    testimonial: {
      text: "Mi-am dorit un rezultat natural, nu unul artificial. Exact asta am obținut. Recomand cu toată inima Dr. Voica.",
      name: "Ioana D.",
    },
  },
  {
    icon: Wind,
    title: "Deviație de sept",
    description:
      "Septoplastia corectează devierea septului nazal, îmbunătățind respirația, calitatea somnului și confortul de zi cu zi. Procedura este minim invazivă și are o recuperare rapidă.",
    testimonial: {
      text: "După ani de zile în care nu puteam respira normal, totul s-a schimbat. Profesionalism și o echipă caldă, atentă la detalii.",
      name: "Răzvan P.",
    },
  },
];

const ProcedureDetails = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-hero">
        <div className="container max-w-5xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi la pagina principală
          </Link>
          <div className="text-xs uppercase tracking-[0.22em] text-accent mb-5">
            — Detalii proceduri
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-tight text-balance">
            Proceduri în <span className="italic">detaliu</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Descoperă fiecare intervenție, alături de povestea pacienților și
            rezultate înainte și după.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container max-w-5xl space-y-24">
          {procedures.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                id={p.title.toLowerCase().replace(/\s+/g, "-")}
                className="grid lg:grid-cols-2 gap-12 items-start"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-6 shadow-soft">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-primary mb-5">
                    {p.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-[15px] mb-8">
                    {p.description}
                  </p>

                  <figure className="p-6 rounded-2xl bg-secondary/50 border border-border/60">
                    <Quote className="w-6 h-6 text-accent mb-3 opacity-80" />
                    <blockquote className="text-foreground/90 leading-relaxed text-[15px] italic">
                      „{p.testimonial.text}"
                    </blockquote>
                    <figcaption className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
                      — {p.testimonial.name}
                    </figcaption>
                  </figure>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
                    — Înainte și după
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative rounded-xl overflow-hidden border border-border/60 aspect-[3/4]">
                      <img
                        src={beforeImg}
                        alt={`${p.title} — înainte`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-[10px] uppercase tracking-wider text-primary">
                        Înainte
                      </div>
                    </div>
                    <div className="relative rounded-xl overflow-hidden border border-border/60 aspect-[3/4]">
                      <img
                        src={afterImg}
                        alt={`${p.title} — după`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary/90 text-primary-foreground text-[10px] uppercase tracking-wider">
                        După
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProcedureDetails;
