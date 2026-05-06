import { useRef, useState } from "react";
import { Quote, Star, ChevronDown } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

type Testimonial = {
  source: "Google" | "Facebook" | "SfatulMedicului";
  name: string;
  meta: string;
  text: string;
  rating?: number;
  response?: string;
};

const testimonials: Testimonial[] = [
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
  {
    source: "Google",
    name: "Natalia Andreea Neicu",
    meta: "4 recenzii·2 fotografii, modificat acum 5 ani",
    rating: 1,
    text:
      "Nu recomand! Operatia de septoplastie si micsorarea cornetelor nazale au avut un impact negativ major asupra vietii si respiratiei mele, in urma carora am survenit complicatii.\n\nAm fost nevoita sa sterg aproate tot comentariul precedent, ca sa pot raspunde la ce mi-ati scris. Realitatea este mult prea complexa pentru a putea fi relatata in totalitate aici. Sunt multe urme de neadevar in raspunsul dumneavoastra. M-am tinut intru totul de recomandarile primite. Cand am fost nevoita sa plec din tara, am plecat doar dupa ce am primit acordul dumneavostra avizat. Eu am venit la control regulat, conform instructiunilor si nu am prejudiciat actul medical dupa cum sustineti. Nu a fost nicio clipa problema ca sunt din alt oras, din moment ce oricum aveam o locuinta stabila si in Bucuresti. Dupa cateva saptamani a aparut sinechia (eram deja plecata din tara si mi-am asumat sa ma intorc in Romania pentru a remedia situatia). Am observat ca nu ma simt bine si am revenit in tara la control la dumneavostra cu un RMN efectuat inainte, in urma caruia ati depistat sinechia. Aceasta este tempistica corecta a realitatii. Recunosc ca mi-ati tratat sinechia atunci. Am inteles ca este o complicatie normala si am venit la tratament pana cand s-a rezolvat. Dar problemele de respiratie au persistat dupa aceea, fara corelatie cu sinechia deja vindecata. Poate nu va amintiti, dar la ceva timp dupa vindecare (trecusera cateva luni) am revenit la control si in ciuda faptului ca am acuzat disconfort (fara corelatie cu sinechia deja rezolvata), ati spus ca este totul in regula. De aceea nu v-am mai cerut parerea pentru o eventuala interventie (ca sa intelegeti de ce nu am mai luat legatura cu dumneavoastra; nu pentru ca nu am vrut, ci pentru ca mi-ati spus ca sunt bine) si am apelat la alti medici din domeniu. Iar deficitul estetic este 100% creat in urma operatiei cu dumneavoatra, si stiti asta foarte bine, la fel cum ati stiut si la momentul respectiv. Mi-ati prescris unguentul pentru plagi Biotitus Derma, dar tesutul nu s-a refacut (inca detin reteta cu parafa dumneavoastra; daca nu era o problema, nu mi-ati fi prescris unguentul, daca tot vorbim de documentatie justificatoare; am poze datate care arata clar cicatricea dupa operatie, asa ca nu inteleg cum pretindeti ca as avea cicatricea din alte parti; nu am actionat legal din motive de care sunt convinsa ca sunteti constient, cum ar fi ca sistemul malpraxis este total defectuos si partinitor in Romania, cu putin respect pentru pacient si suferinta lui, cu o desfasurare a cazului de ani de zile). Operatia a fost efectuata prin metoda inchisa si am inteles foarte clar ca nu va exista o incizie a columelei. Deficitul estetic s-a produs cand ati legat mesele si s-a agravat cand v-a cazut putin nitrat de argint pe columela in urma interventiei pentru sinechie (inteleg ca este delicat sa lucrati poate cu el). A doua mea interventie la un alt medic nu are corelatie cu cicatricea, deoarece a fost o cauterizare cu radiofrecventa pentru a rezolva disconfortul din nara dreapta pe care il tot acuzam si cu dumneavoastra, simtind efectiv cam ese ceva blocat acolo. Inteleg ca sunteti deranjat, dar nu este tocmai placut sa simti timp de aproape 2 ani un “obiect strain” cand respiri. Este decizia mea sa imi fac publica experienta acum, cand sunt pregatita, in deplinatatea unei realitati. Nu sunt singura paciena care v-a scris un review dupa ani de zile. Este doar experienta mea si nu o generalizare; sunt convinsa ca nu se intampla cu toti pacientii, cum sunt convinsa si ca majoritatea sunt multumiti de dumneavoastra. De aceea nu am intentia sa sune ca o defaimare, ci ca un caz izolat. Inteleg ca sunteti siderat, dar trebuie sa intelegeti ca si eu m-am ales cu un complex estetic, greu de rezolvat, pe care nimeni nu si l-ar dori. Sincer este departe de mine dorinta de a crea o polologhie si un conflict de o mare amploare, doar ca si eu sunt om si am suferit si sufar din motivele mentionate mai sus. Din moment ce percepeti situatia ca o defaimare, comentariul meu poate fi eliminat.",
    response:
      "Sunt siderat de acest comentariu răutăcios si inexact. În primul rand, operatia de deviatie de sept se face prin interiorul nasului. Prima incizie din tehnica operatorie se face la 3-4 cm de orificiul nazal fara nici o legatura cu columela (porțiunea de tesut moale dintre nări la care vă referiți). Pentru ca sunteti din Craiova, v-am avertizat că vindecarea cauterizarii cornetelor nazale se face lent și poate dura pana la 3-4 săptămâni, motiv pentru care trebuie sa veniti periodic la control in Bucuresti de cate ori vă recomand. D-voastră nu ati respectat termenii înțelegerii și nu ati venit in mod regulat la consult si tratamentul local nazal, motiv pt care ati facut postoperator ceea ce se numește sinechie nazala (o punte de tesut intre septul nazal si cornetul nazal), sinechie pe care v-am rezolvat-o la nivel de cabinet. Apoi m-ati anunțat că plecati din țară și nu știți cand o sa reveniți, dar eu v-am reavertizat ca trebuie sa veniti la tratament după intervenția pt sinechie, ceea ce nu ati luat in considerare. De atunci, de aproape 2 ani nu ati mai luat legătura cu mine, decat prin aceasta defaimatoare postare. În acest răstimp ati considerat sa faceti alte proceduri medicale fara sa ne consultam.\n\nÎn concluzie, operatiile facute de mine nu au nici o legatura cu deficitul estetic pe care-l reclamati sau cu problemele vegetative de care suferiti. Dupa mai bine de 2 ani imi reprosati public aceste complicatii? De ce nu ati facut-o in primele luni de zile? Eu vă sfătuiesc să reveniți la realitatea faptelor că sunteti manata de alte duplicități?! Altfel va pot acționa în instanță pentru defăimare. Sau mergeți D-voastră și reclamați pretinsul prejudiciu de sănătate! Va pun la dispoziție documentele medicale justificatoare.\n\nDar e mai usor sa invinuiesti medicul fara ca tu sa-ti asumi vreo vina. Nerespectarea indicațiilor medicului pot prejudicia un act medical corect efectuat. Aviz și altor pacienți care cred ca daca s-au operat, nu mai este nevoie de control medical. La controalele medicale indicate se vine de cate ori solicită medicul, pana la vindecarea deplină. Actul medical este ca un contract/parteneriat in care fiecare, atat medicul cat și pacientul trebuie sa-și faca treaba!",
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
  const [openResponse, setOpenResponse] = useState<Testimonial | null>(null);
  const [openReview, setOpenReview] = useState<Testimonial | null>(null);
  const TRUNCATE_LIMIT = 280;

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
            {testimonials.map((t) => {
              const stars = t.rating ?? 5;
              return (
                <CarouselItem
                  key={t.name}
                  className="pl-4 basis-full md:basis-1/2 xl:basis-1/3"
                >
                  <figure className="h-full min-h-[420px] p-7 rounded-2xl bg-primary-foreground/[0.06] border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/[0.09] hover:-translate-y-1 transition-all duration-500 flex flex-col">
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <a
                        href={sourceLinks[t.source]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Vezi recenziile pe ${sourceLabels[t.source]}`}
                        className={`inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/10 px-3 py-1 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-glow ${sourceClass[t.source]}`}
                      >
                        {t.source === "Google" && <span className="font-serif text-sm leading-none">G</span>}
                        {t.source === "Facebook" && <span className="font-serif text-sm leading-none">f</span>}
                        {sourceLabels[t.source]}
                      </a>
                      <div className="flex text-primary-glow" aria-label={`${stars} stele`}>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            className={`h-3.5 w-3.5 ${index < stars ? "fill-current" : "opacity-30"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <Quote className="w-7 h-7 text-primary-glow mb-5 opacity-80" />
                    <blockquote className="text-primary-foreground/90 leading-relaxed text-[15px] flex-1 whitespace-pre-line">
                      {t.text.length > TRUNCATE_LIMIT
                        ? `${t.text.slice(0, TRUNCATE_LIMIT).trimEnd()}…`
                        : t.text}
                    </blockquote>
                    {t.text.length > TRUNCATE_LIMIT && (
                      <button
                        type="button"
                        onClick={() => setOpenReview(t)}
                        className="mt-4 self-start inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-primary-glow transition-all duration-300 hover:gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-glow rounded-sm"
                      >
                        Citește tot reviewul
                        <span aria-hidden className="transition-transform duration-300">→</span>
                      </button>
                    )}
                    <figcaption className="mt-6 pt-6 border-t border-primary-foreground/10">
                      <div className="font-serif text-lg">{t.name}</div>
                      <div className="text-xs uppercase tracking-wider text-primary-glow/80 mt-1">
                        {t.meta}
                      </div>
                    </figcaption>
                    {t.response && (
                      <button
                        type="button"
                        onClick={() => setOpenResponse(t)}
                        className="mt-5 group inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-primary-foreground/[0.08] border border-primary-foreground/15 text-xs font-medium text-primary-foreground/90 transition-all duration-300 hover:bg-primary-foreground/[0.12] hover:border-primary-foreground/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-glow"
                      >
                        <span className="tracking-wide">Citește răspunsul medicului</span>
                        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
                      </button>
                    )}
                  </figure>
                </CarouselItem>
              );
            })}
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

        <div className="mt-20 flex flex-col items-center text-center">
          <div className="text-xs uppercase tracking-[0.22em] text-primary-glow mb-4">
            — Părerea ta contează
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground max-w-xl text-balance">
            Ai fost pacientul nostru? <span className="italic">Lasă o recenzie.</span>
          </h3>
          <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="https://share.google/XWJTgxcAIRYyZugsb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 h-12 rounded-full bg-primary-foreground text-primary text-sm font-medium shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-foreground/90 hover:shadow-elegant"
            >
              <span className="font-serif text-base leading-none">G</span>
              Lasă o recenzie pe Google
            </a>
            <a
              href="https://www.facebook.com/DrChirurgORLMarinVOICA/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 h-12 rounded-full border border-primary-foreground/25 text-primary-foreground text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-foreground/10 hover:border-primary-foreground/40"
            >
              <span className="font-serif text-base leading-none">f</span>
              Lasă o recenzie pe Facebook
            </a>
          </div>
        </div>
      </div>

      <Dialog open={!!openResponse} onOpenChange={(o) => !o && setOpenResponse(null)}>
        <DialogContent className="max-w-2xl p-0 gap-0 border-primary/10 bg-background/95 backdrop-blur-xl shadow-elegant overflow-hidden rounded-2xl">
          <DialogHeader className="px-8 pt-8 pb-5 border-b border-border/60">
            <div className="text-[10px] uppercase tracking-[0.22em] text-primary/70 mb-2">
              Răspunsul medicului
            </div>
            <DialogTitle className="font-serif text-2xl text-foreground leading-tight">
              Dr. Marin Voica răspunde
            </DialogTitle>
            {openResponse && (
              <DialogDescription className="text-xs text-muted-foreground pt-1">
                Către recenzia <span className="italic">{openResponse.name}</span> · {openResponse.meta}
              </DialogDescription>
            )}
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] px-8 py-6">
            <div className="space-y-4 text-[15px] leading-relaxed text-foreground/85 whitespace-pre-line pr-4">
              {openResponse?.response}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
};
