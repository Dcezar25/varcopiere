# Ghid: Cum adaugi poze pe site

Acest ghid explică pas cu pas cum poți înlocui sau adăuga fotografii în cele **3 zone** ale site-ului: poza de pe pagina principală, pozele înainte/după din paginile de transformări, și pozele din galeria foto.

---

## Unde se află pozele (structura folderelor)

Toate pozele folosite în cod se află în:

```
src/
└── assets/
    ├── doctor-portrait.jpg        ← Poza doctorului (Hero / pagina principală)
    ├── nose-illustration.jpg      ← Ilustrația nasului (secțiunea "Despre doctor")
    ├── before-after-before.jpg    ← Poza "Înainte" (transformări + galerie)
    └── before-after-after.jpg     ← Poza "După" (transformări + galerie)
```

---

## 1. Poza de pe pagina principală (Hero)

### Ce afișează
Poza mare a doctorului din secțiunea de introducere (colțul dreapta al paginii principale).

### Fișierul de modificat
```
src/components/site/Hero.tsx
```

### Cum înlocuiești poza

**Pasul 1** — Pune noua ta poză în folderul `src/assets/`. De exemplu:
```
src/assets/doctor-portrait.jpg
```
> ⚠️ Înlocuiește direct fișierul existent cu același nume, sau folosește un nume nou și urmează Pasul 2.

**Pasul 2** — Dacă ai ales un nume nou pentru fișier, deschide `Hero.tsx` și schimbă linia 3:
```tsx
// Înainte:
import doctor from "@/assets/doctor-portrait.jpg";

// După (exemplu cu nume nou):
import doctor from "@/assets/poza-doctor-noua.jpg";
```

**Pasul 3** — Opțional, actualizează și textul `alt` de la linia 63 (pentru SEO și accesibilitate):
```tsx
alt="Dr. Marin Voica, medic primar ORL în București"
```

### Dimensiuni recomandate
- **Format:** JPG sau WebP
- **Dimensiune:** minim 800×1000 px (proporție 4:5, portret)
- **Calitate:** poză de calitate înaltă, fond curat

---

## 2. Poza din secțiunea "Despre doctor" (About)

### Ce afișează
Ilustrația / poza din stânga secțiunii "Despre doctor" de pe pagina principală.

### Fișierul de modificat
```
src/components/site/About.tsx
```

### Cum înlocuiești poza

**Pasul 1** — Pune noua poză în `src/assets/`. De exemplu:
```
src/assets/nose-illustration.jpg
```

**Pasul 2** — Dacă ai ales un alt nume, schimbă linia 1 din `About.tsx`:
```tsx
// Înainte:
import noseIllustration from "@/assets/nose-illustration.jpg";

// După (exemplu):
import noseIllustration from "@/assets/poza-noua.jpg";
```

---

## 3. Pozele de transformări (Înainte & După) din pagina de proceduri

### Ce afișează
Un carusel cu perechi de poze "Înainte" și "După", vizibil pe paginile **Rinoplastie** și **Rinoseptoplastie**.

### Fișierul responsabil
```
src/pages/ProcedureDetails.tsx
```

### Cum funcționează acum (AUTOMAT)
Nu mai este nevoie să scrii importuri manuale! Sistemul citește **automat** toate pozele dintr-un folder specific, atâta timp cât respecți o regulă simplă de denumire.

Am creat două foldere noi:
1. `src/assets/proceduri/rinoplastie/`
2. `src/assets/proceduri/rinoseptoplastie/`

### Cum adaugi sau înlocuiești pozele

**Pasul 1** — Adaugă pozele în folderul corespunzător procedurii (`rinoplastie` sau `rinoseptoplastie`).

**Pasul 2** — **Denumește fișierele corect!** Aceasta este singura regulă. Fișierele trebuie să se termine obligatoriu în `-inainte` și `-dupa`. Pentru a se împerechea corect, folosește numere (sau nume scurte) la început:

Exemplu de conținut în `src/assets/proceduri/rinoplastie/`:
```
01-inainte.png
01-dupa.png
02-inainte.png
02-dupa.png
pacient-ana-inainte.png
pacient-ana-dupa.png
```

> 💡 **GATA!** Nu trebuie să modifici nicio linie de cod. Doar pui pozele în folder cu aceste sufixe, iar ele vor apărea automat pe site, ordonate alfabetic. Poți pune oricâte perechi dorești. Extensii suportate automat: `.png`, `.jpg`, `.jpeg`, `.webp`.

### Dimensiuni recomandate
- **Format:** JPG, PNG sau WebP
- **Dimensiune:** minim 600×800 px (proporție 3:4, portret)
- **Sfat:** Pozele dintr-o pereche ar trebui să aibă dimensiuni identice pentru aliniere perfectă. Folosește `01`, `02`, `03`... în loc de `1`, `2`, `10` dacă ai mai mult de 9 poze, pentru a asigura ordonarea alfabetică corectă.

---

## 4. Pozele din galeria foto (pagina /galerie)

### Ce afișează
Un carusel mare cu toate pozele pacienților, accesibil la adresa `/galerie`. Fiecare poză poate fi deschisă în modul fullscreen.

### Fișierul de modificat
```
src/pages/Gallery.tsx
```

### Cum funcționează acum
La liniile 12–26, galeria generează automat 16 poziții folosind alternativ `beforeImg` și `afterImg`:

```tsx
import beforeImg from "@/assets/before-after-before.jpg";
import afterImg from "@/assets/before-after-after.jpg";

const seedSources = [beforeImg, afterImg];
const initialPhotos: Photo[] = Array.from({ length: 16 }, (_, i) => ({
  id: `seed-${i}`,
  src: seedSources[i % seedSources.length],
  alt: `Rezultat pacient ${i + 1}`,
}));
```

### Cum adaugi pozele tale reale

**Pasul 1** — Pune toate pozele în `src/assets/`, de exemplu:
```
src/assets/galerie/pacient1.jpg
src/assets/galerie/pacient2.jpg
src/assets/galerie/pacient3.jpg
...
```
> ⚠️ Folderul `galerie/` nu există implicit — trebuie să-l creezi tu în `src/assets/`.

**Pasul 2** — Deschide `Gallery.tsx` și înlocuiește importurile și definiția `initialPhotos` (liniile 12–26):

```tsx
// Șterge sau comentează acestea:
// import beforeImg from "@/assets/before-after-before.jpg";
// import afterImg from "@/assets/before-after-after.jpg";

// Importă pozele tale:
import galerie1 from "@/assets/galerie/pacient1.jpg";
import galerie2 from "@/assets/galerie/pacient2.jpg";
import galerie3 from "@/assets/galerie/pacient3.jpg";
// ... câte poze ai

// Înlocuiește initialPhotos cu lista ta:
const initialPhotos: Photo[] = [
  { id: "1", src: galerie1, alt: "Rezultat pacient 1 — Rinoplastie" },
  { id: "2", src: galerie2, alt: "Rezultat pacient 2 — Rinoseptoplastie" },
  { id: "3", src: galerie3, alt: "Rezultat pacient 3 — Rinoplastie" },
  // adaugă câte vrei
];
```

**Pasul 3** — Șterge și variabilele care nu mai sunt folosite (`seedSources` și codul `Array.from`).

### Dimensiuni recomandate
- **Format:** JPG sau WebP
- **Dimensiune:** minim 800×1000 px (proporție 4:5)
- **Calitate:** pozele se deschid în fullscreen, deci calitate cât mai bună

---

## Rezumat rapid

| Zonă | Fișier de editat | Variabile/Array de modificat |
|------|-----------------|------------------------------|
| Poza doctor (Hero) | `src/components/site/Hero.tsx` | `import doctor from ...` |
| Ilustrație "Despre doctor" | `src/components/site/About.tsx` | `import noseIllustration from ...` |
| Poze Înainte/După (Proceduri) | `src/pages/ProcedureDetails.tsx` | array `galleryPairs` |
| Galerie foto completă | `src/pages/Gallery.tsx` | array `initialPhotos` |

---

## Note importante

- **Toate pozele sunt importate din cod** — nu e suficient să le pui în folder, trebuie și să le legi în codul `.tsx` corespunzător.
- **Extensii acceptate:** `.jpg`, `.jpeg`, `.png`, `.webp` — toate funcționează cu Vite.
- **Optimizare:** Folosește WebP pentru fișiere mai mici și încărcare mai rapidă.
- **Consimțământ pacienți:** Asigură-te că ai acordul pacienților înainte de a publica pozele.
