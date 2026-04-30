import { useRef } from "react";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Andreea M.",
    role: "Pacientă rinoplastie",
    text: "Rezultatul depășește orice așteptare. Domnul doctor mi-a explicat fiecare etapă, iar recuperarea a fost mult mai ușoară decât credeam.",
  },
  {
    name: "Răzvan P.",
    role: "Septoplastie",
    text: "După ani de zile în care nu puteam respira normal, totul s-a schimbat. Profesionalism și o echipă caldă, atentă la detalii.",
  },
  {
    name: "Ioana D.",
    role: "Rinoseptoplastie",
    text: "Mi-am dorit un rezultat natural, nu unul artificial. Exact asta am obținut. Recomand cu toată inima Dr. Voica.",
  },
  {
    name: "Mihai S.",
    role: "Pacient rinoplastie",
    text: "Echipa caldă, explicații clare și un rezultat care arată complet natural. Sunt extrem de mulțumit.",
  },
  {
    name: "Cristina V.",
    role: "Septoplastie",
    text: "Pentru prima dată după ani de zile pot respira normal pe nas. Mulțumesc, domnule doctor!",
  },
];

export const Testimonials = () => {
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section
      id="pacienti"
      className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 -z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary-glow/40 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/30 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.22em] text-primary-glow mb-5">
            — Opinii pacienți
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
            Încrederea celor care <span className="italic">au ales</span> diferența.
          </h2>
        </div>

        <Carousel
          plugins={[autoplay.current]}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t) => (
              <CarouselItem
                key={t.name}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <figure className="h-full p-8 rounded-2xl bg-primary-foreground/[0.06] border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/[0.09] transition-colors">
                  <Quote className="w-7 h-7 text-primary-glow mb-5 opacity-80" />
                  <blockquote className="text-primary-foreground/90 leading-relaxed text-[15px]">
                    {t.text}
                  </blockquote>
                  <figcaption className="mt-6 pt-6 border-t border-primary-foreground/10">
                    <div className="font-serif text-lg">{t.name}</div>
                    <div className="text-xs uppercase tracking-wider text-primary-glow/80 mt-1">
                      {t.role}
                    </div>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-10 flex items-center justify-center gap-3">
            <CarouselPrevious
              className="static translate-y-0 h-10 w-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
            />
            <CarouselNext
              className="static translate-y-0 h-10 w-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
