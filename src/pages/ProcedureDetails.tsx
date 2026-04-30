import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight, Images, Quote, Sparkles, Scissors, Wind } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import beforeImg from "@/assets/before-after-before.jpg";
import afterImg from "@/assets/before-after-after.jpg";

type Procedure = {
  icon: typeof Sparkles;
  title: string;
  slug: string;
  description: string;
  showGallery?: boolean;
  testimonial: { text: string; name: string };
  testimonials?: { text: string; name: string }[];
};

const procedures: Procedure[] = [
  {
    icon: Sparkles,
    title: "Rinoplastie",
    slug: "rinoplastie",
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
    slug: "rinoseptoplastie",
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
    slug: "deviatie-de-sept",
    showGallery: false,
    description:
      "Septoplastia corectează devierea septului nazal, îmbunătățind respirația, calitatea somnului și confortul de zi cu zi. Procedura este minim invazivă și are o recuperare rapidă.",
    testimonial: {
      text: "După ani de zile în care nu puteam respira normal, totul s-a schimbat. Profesionalism și o echipă caldă, atentă la detalii.",
      name: "Răzvan P.",
    },
    testimonials: [
      {
        text: "După ani de zile în care nu puteam respira normal, totul s-a schimbat. Profesionalism și o echipă caldă, atentă la detalii.",
        name: "Răzvan P.",
      },
      {
        text: "Respir mult mai bine, dorm liniștit și recuperarea a fost mai simplă decât mă așteptam. Totul a fost explicat clar și calm.",
        name: "Mihai C.",
      },
      {
        text: "Intervenția mi-a schimbat confortul de zi cu zi. Am apreciat atenția domnului doctor și felul în care a urmărit evoluția după operație.",
        name: "Cristina N.",
      },
    ],
  },
];

const galleryPairs = [
  { before: beforeImg, after: afterImg },
  { before: beforeImg, after: afterImg },
  { before: beforeImg, after: afterImg },
];

const BeforeAfterGallery = ({ title }: { title: string }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const slides = galleryPairs.flatMap((pair, index) => [
    { src: pair.before, alt: `${title} — înainte ${index + 1}` },
    { src: pair.after, alt: `${title} — după ${index + 1}` },
  ]);

  const scrollByPair = useCallback(
    (direction: "prev" | "next") => {
      if (!api) return;
      const maxIndex = slides.length - 2;
      const nextIndex = direction === "next" ? selected + 2 : selected - 2;
      api.scrollTo(Math.max(0, Math.min(nextIndex, maxIndex)));
    },
    [api, selected, slides.length]
  );

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div>
      <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
        — Înainte și după
      </div>
      <Carousel setApi={setApi} opts={{ align: "start", containScroll: "trimSnaps" }}>
        <CarouselContent className="-ml-3">
          {slides.map((slide, index) => (
            <CarouselItem key={`${slide.alt}-${index}`} className="pl-3 basis-1/2">
              <div className="relative rounded-xl overflow-hidden border border-border/60 aspect-[3/4] bg-card">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-5 flex items-center justify-center gap-3">
        <Button type="button" variant="outline" size="icon" aria-label="Transformarea anterioară" className="rounded-full transition-all duration-300 hover:-translate-y-0.5" onClick={() => scrollByPair("prev")} disabled={selected <= 0}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <Button type="button" variant="outline" size="icon" aria-label="Transformarea următoare" className="rounded-full transition-all duration-300 hover:-translate-y-0.5" onClick={() => scrollByPair("next")} disabled={selected >= slides.length - 2}>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

const TestimonialCarousel = ({ testimonials }: { testimonials: { text: string; name: string }[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="lg:self-center">
      <Carousel setApi={setApi} opts={{ align: "start", containScroll: "trimSnaps" }}>
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.name}>
              <figure className="p-7 rounded-2xl bg-secondary/50 border border-border/60 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/20">
                <Quote className="w-6 h-6 text-accent mb-3 opacity-80" />
                <blockquote className="text-foreground/90 leading-relaxed text-[15px] italic">
                  „{testimonial.text}"
                </blockquote>
                <figcaption className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">
                  — {testimonial.name}
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-5 flex items-center justify-center gap-3">
        <Button type="button" variant="outline" size="icon" aria-label="Review anterior" className="rounded-full transition-all duration-300 hover:-translate-y-0.5" onClick={() => api?.scrollPrev()} disabled={selected <= 0}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <Button type="button" variant="outline" size="icon" aria-label="Review următor" className="rounded-full transition-all duration-300 hover:-translate-y-0.5" onClick={() => api?.scrollNext()} disabled={selected >= testimonials.length - 1}>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

const ProcedureDetails = () => {
  const location = useLocation();

  useEffect(() => {
    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute("content") ?? "";
    document.title = "Proceduri ORL — Rinoplastie, Rinoseptoplastie, Septoplastie | Dr. Marin Voica";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Detalii despre rinoplastie, rinoseptoplastie și corecția deviației de sept realizate de Dr. Marin Voica, medic primar ORL în București."
      );
    return () => {
      document.title = prevTitle;
      document.querySelector('meta[name="description"]')?.setAttribute("content", prevDesc);
    };
  }, []);

  useEffect(() => {
    const id = location.hash.replace("#", "");
    requestAnimationFrame(() => {
      if (id) {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  }, [location.hash, location.pathname]);

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
                id={p.slug}
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

                  {p.showGallery !== false && (
                    <figure className="p-6 rounded-2xl bg-secondary/50 border border-border/60">
                      <Quote className="w-6 h-6 text-accent mb-3 opacity-80" />
                      <blockquote className="text-foreground/90 leading-relaxed text-[15px] italic">
                        „{p.testimonial.text}"
                      </blockquote>
                      <figcaption className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
                        — {p.testimonial.name}
                      </figcaption>
                    </figure>
                  )}
                </div>

                {p.showGallery !== false && (
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <BeforeAfterGallery title={p.title} />
                  </div>
                )}
                {p.showGallery === false && p.testimonials && (
                  <TestimonialCarousel testimonials={p.testimonials} />
                )}
              </article>
            );
          })}

          {/* CTA — full photo gallery */}
          <div className="flex flex-col items-center text-center pt-4">
            <div className="text-xs uppercase tracking-[0.22em] text-accent mb-4">
              — Mai multe rezultate
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 text-balance">
              Vezi <span className="italic">galeria foto</span> completă.
            </h2>
            <p className="text-muted-foreground max-w-xl leading-relaxed mb-8">
              O colecție extinsă de fotografii înainte și după, publicate cu acordul pacienților.
            </p>
            <Link
              to="/galerie"
              className="group inline-flex items-center gap-2 px-7 h-12 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-elegant hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              <Images className="w-4 h-4" />
              Deschide galeria foto
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProcedureDetails;
