## Modificări

1. **Testimoniale → carusel** (`src/components/site/Testimonials.tsx`)
   - Înlocuiesc grila cu 3 coloane cu un carusel folosind componenta existentă `@/components/ui/carousel` (shadcn / Embla).
   - Pe desktop: 3 carduri vizibile simultan; pe tablet: 2; pe mobil: 1.
   - Adaug butoane „Previous / Next" și indicatori (dots) sub carusel.
   - Activez auto-play discret (loop, ~5s între slide-uri) cu pauză la hover.
   - Păstrez stilul existent al cardurilor (Quote, blockquote, figcaption, culorile pe fundal primary).

2. **Reordonare Proceduri ↔ Experiență**
   - În `src/pages/Index.tsx`: schimb ordinea înapoi astfel încât „Proceduri" să apară înaintea „Experiență".
   - În `src/components/site/Navbar.tsx`: schimb ordinea linkurilor — `Proceduri` înainte de `Experiență`.

3. **Text Timeline** (`src/components/site/Timeline.tsx`)
   - La intrarea „1999 — prezent", scurtez textul la doar: `Medic primar ORL.` (elimin „, cu activitate în spitale din România și străinătate").

## Detalii tehnice

- Caruselul shadcn (`Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext`) suportă responsive prin clase Tailwind pe `CarouselItem` (`basis-full md:basis-1/2 lg:basis-1/3`).
- Pentru autoplay folosesc plugin-ul `embla-carousel-autoplay` (deja parte din ecosistemul shadcn carousel). Dacă nu este instalat în proiect, va trebui adăugat ca dependență.
- Butoanele prev/next vor fi stilizate pe fundal `primary` (varianta outline cu ton deschis pentru contrast).
- Nu modific niciun alt fișier sau secțiune.
