import { useRef } from "react";
import { Quote, Star } from "lucide-react";
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
    source: "Google",
    name: "Nicoleta Dinu",
    meta: "2 recenzii, acum 2 luni",
    text: "Am avut o experiență plăcută cu domnul doctor Voica Marin și cu întregul personal!De la prima consultatie până la recuperarea post-operatorie,am simțit ca sunt intr-o grijă medicală profesionistă, atentă și empatica.Rezultatul operației a fost peste așteptări.",
  },
  {
    source: "Google",
    name: "ANGELA-PAULA LIȚĂ",
    meta: "Acum o saptamana",
    text: "Acum o saptamana am fost operata de domnul doctor. Am avut o experienta minunata,fiind un profesionist desavarsit. In fiecare zi s-a interesat de starea mea,recuperarea a fost una rapida,iar rezultatele au fost fix asa cum mi-am dorit. Recomand din tot sufletul!",
  },
  {
    source: "Google",
    name: "Alexandra Ivan",
    meta: "9 recenzii·4 fotografii, acum 8 luni",
    text: "Un doctor care stie ce face. Explica si intelege nevoile pacientilor. Daca aveti nevoie de rino,deviatie, cornete (sau alte probleme mai grave) stiti unde sa mergeti! Eu inca nu m-am operat, dar urmeaza :)",
  },
  {
    source: "Facebook",
    name: "Nina Petru recomandă Dr. Marin Voica",
    meta: "14 noiembrie 2024",
    text: "Un doctor foarte profesionist si dedicat, foarte implicat. Am fost la dansul pentru procedura de reductie a cornetelor nazale( prin radiofrecvență), totul a decurs perfect. Dl doctor a ajutat mult si pe partea de recuperare post- procedura. Ii multumesc pentru tot!",
  },
  {
    source: "SfatulMedicului",
    name: "lucian",
    meta: "10 ani si 1 luni",
    text: "In calitate de cadru medical nu pot decat sa subliniez corectitudinea actului medical si interesul domnului doctor pentru pacient. Am facut o rinoseptoplastie care a fost un succes, fara inflamatie postoperatorie sau edem important. Fara sa fiu subiectiv, il recomand pe domnul doctor!",
  },
];

const sourceClass = {
  Google: "bg-background text-primary",
  SfatulMedicului: "bg-primary-glow/20 text-primary-glow border-primary-glow/25",
  Facebook: "bg-secondary text-primary border-secondary/60",
};

const sourceLinks = {
  Google:
    "https://www.google.com/search?sca_esv=66e1f1ab6540b637&rlz=1C1BNSD_enRO1083RO1083&sxsrf=ANbL-n6V9BEcRFnBTIZMFU5R8ZUSH7c1hQ:1777478680630&q=Dr.+Marin+VOICA+Recenzii&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MzcyNDYyMzI2MDAzMDUyNDIx2sDI-IpRwqVIT8E3sSgzTyHM39PZUSEoNTk1ryozcxErTikAOfjor1AAAAA&rldimm=6721326230060521242&tbm=lcl&hl=ro-RO&sa=X&ved=2ahUKEwim5eqKuJOUAxUNygIHHTwHM3EQ9fQKegQILRAG&biw=1920&bih=945&dpr=1#lkt=LocalPoiReviews",
  SfatulMedicului: "https://www.sfatulmedicului.ro/medici/dr-marin-voica_25848",
  Facebook: "https://www.facebook.com/DrChirurgORLMarinVOICA/",
};

const sourceLabels = {
  Google: "Google",
  SfatulMedicului: "Sfatul Medicului",
  Facebook: "Facebook",
};

export const Testimonials = () => {
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section
      id="pacienti"
      className="scroll-reveal py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden"
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
                className="pl-4 basis-full md:basis-1/2 xl:basis-1/3"
              >
                <figure className="h-full min-h-[420px] p-7 rounded-2xl bg-primary-foreground/[0.06] border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/[0.09] hover:-translate-y-1 transition-all duration-500 flex flex-col">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <a
                      href={sourceLinks[t.source as keyof typeof sourceLinks]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Vezi recenziile pe ${sourceLabels[t.source as keyof typeof sourceLabels]}`}
                      className={`inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/10 px-3 py-1 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-glow ${sourceClass[t.source as keyof typeof sourceClass]}`}
                    >
                      {t.source === "Google" && <span className="font-serif text-sm leading-none">G</span>}
                      {t.source === "Facebook" && <span className="font-serif text-sm leading-none">f</span>}
                      {sourceLabels[t.source as keyof typeof sourceLabels]}
                    </a>
                    <div className="flex text-primary-glow" aria-label="5 stele">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Quote className="w-7 h-7 text-primary-glow mb-5 opacity-80" />
                  <blockquote className="text-primary-foreground/90 leading-relaxed text-[15px] flex-1">
                    {t.text}
                  </blockquote>
                  <figcaption className="mt-6 pt-6 border-t border-primary-foreground/10">
                    <div className="font-serif text-lg">{t.name}</div>
                    <div className="text-xs uppercase tracking-wider text-primary-glow/80 mt-1">
                      {t.meta}
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
