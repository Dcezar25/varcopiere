Voi actualiza site-ul sistematic, păstrând intacte secțiunile Despre și Contact ca structură/design/conținut.

## 1. Ordine site și navbar

Noua ordine va fi:

```text
Hero -> Despre -> Experiență -> Proceduri -> Pacienți -> Contact -> Footer
```

- În `src/pages/Index.tsx`, voi muta `Timeline` înainte de `Procedures`.
- În `src/components/site/Navbar.tsx`, voi schimba ordinea linkurilor în: Despre, Experiență, Proceduri, Pacienți, Contact.
- Nu voi modifica intern secțiunile `About` și `Contact`.

## 2. Proceduri: butoane, CTA și iconografie

În `src/components/site/Procedures.tsx`:

- Fiecare card va avea un buton mic, elegant, cu textul `Detalii`.
- Voi face toate cele 3 proceduri accesibile către pagina `/proceduri#...`, nu doar prima, astfel încât butonul `Detalii` să fie coerent pe fiecare card.
- CTA-ul principal va fi schimbat din `Află mai multe` într-un text mai inspirațional, de tip `Descoperă transformarea`.
- Săgeata CTA va fi înlocuită cu un chevron modern/subtil, aliniat cu estetica Apple.
- Voi păstra săgeata decorativă/wavy, dar o voi rafina vizual dacă este nevoie ca să nu concureze cu CTA-ul.
- Cardurile vor primi micro-interacțiuni mai premium: hover lift, border mai fin, umbră discretă, icon ușor animat.

## 3. Redesign Experiență

În `src/components/site/Timeline.tsx`, voi transforma secțiunea într-un layout mai premium:

- Header curat, minimalist, cu titlu și subtitlu profesional.
- Un rând de statistici elegante, de exemplu:
  - `30+` ani experiență
  - `5000+` intervenții
  - `1982` începutul carierei
- Timeline modern într-un card/glass panel cu spațiere generoasă, puncte și linie verticală rafinate.
- Entrările existente vor rămâne în română și vor păstra conținutul actual, inclusiv `1999 — prezent: Medic primar ORL.`
- Stilul va fi mai vizual și premium, dar nu încărcat.

## 4. Pacienți: carusel cu surse reale

În `src/components/site/Testimonials.tsx`:

- Voi înlocui recenziile curente cu cele 5 recenzii furnizate exact ca nume, metadate și text.
- Fiecare card va afișa clar sursa:
  - badge `Google`
  - badge `SfatulMedicului`
- Pentru Google voi folosi un badge text/logo-like simplu, fără a încărca asset-uri externe.
- Pentru SfatulMedicului voi folosi un badge tip text elegant.
- Voi păstra caruselul existent cu autoplay și butoane prev/next, dar voi rafina cardurile pentru texte mai lungi: înălțime coerentă, spațiere bună, lizibilitate și responsive mai bun.

## 5. Fixuri responsive pentru tabletă

În `src/components/site/Navbar.tsx` și, dacă e nevoie, în clasele responsive existente:

- Voi ajusta breakpoint-ul/layout-ul headerului astfel încât textul `ORL` din brand să nu se suprapună peste secțiunea `Despre` pe tabletă.
- Voi preveni suprapunerea linkului `Contact` peste hover-ul/butonul `Programare`, prin gap-uri, dimensiuni și breakpoint-uri mai sigure.
- Probabil voi face nav-ul desktop să apară doar de la `lg` în sus, iar între mobile și tabletă să rămână burger menu, pentru a evita aglomerarea.

## 6. Animații și finisaje Apple-style

Voi adăuga animații fine, fără exagerare:

- Hover transitions pe linkuri, butoane și carduri.
- Subtle lift/scale pe carduri.
- Animații la intrarea în viewport pentru secțiunile principale, de tip fade-up/slide-up.
- Voi implementa animațiile în mod simplu și performant, cu CSS și/sau un mic hook `IntersectionObserver`, respectând `prefers-reduced-motion`.
- Voi păstra designul general curat, medical-premium, cu whitespace generos și tipografie rafinată.

## Fișiere vizate

- `src/pages/Index.tsx`
- `src/components/site/Navbar.tsx`
- `src/components/site/Procedures.tsx`
- `src/components/site/Timeline.tsx`
- `src/components/site/Testimonials.tsx`
- posibil `src/index.css` și/sau `tailwind.config.ts` pentru animații/utilitare globale

## Ce nu voi modifica

- Nu voi schimba conținutul, layout-ul intern sau designul secțiunii `Despre`.
- Nu voi schimba conținutul, layout-ul intern sau designul secțiunii `Contact`.
- Nu voi introduce backend sau funcționalități externe inutile.