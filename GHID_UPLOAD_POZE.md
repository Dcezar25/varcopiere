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

### Cum funcționează acum (AUTOMAT)
La fel ca la secțiunea de proceduri, galeria afișează acum **automat** toate pozele dintr-un folder. Nu mai este nevoie să modifici codul!

Sistemul citește pozele din folderul:
```
src/assets/galerie/
```

### Cum adaugi pozele tale reale

**Pasul 1** — Adaugă pozele pacienților direct în folderul `src/assets/galerie/`.
> ⚠️ Dacă folderul `galerie/` nu există, trebuie să-l creezi tu în `src/assets/`.

Exemplu de conținut:
```
pacient-1-rinoplastie.jpg
pacient-2.png
03-rinoseptoplastie.webp
```

**Pasul 2** — Numește fișierele descriptiv, deoarece textul din numele fișierului va fi folosit automat de site pentru accesibilitate/SEO (ex: `pacient-ana-rinoplastie.jpg` devine "Rezultat Pacient Ana Rinoplastie").

> 💡 **GATA!** Orice poză pui în acest folder va apărea imediat și automat în Galerie.

### Dimensiuni recomandate
- **Format:** JPG, PNG sau WebP
- **Dimensiune:** minim 800×1000 px (proporție 4:5)
- **Calitate:** pozele se deschid în fullscreen, deci calitate cât mai bună

---

## Rezumat rapid

| Zonă | Fișier de editat | Variabile/Array de modificat |
|------|-----------------|------------------------------|
| Poza doctor (Hero) | `src/components/site/Hero.tsx` | `import doctor from ...` |
| Ilustrație "Despre doctor" | `src/components/site/About.tsx` | `import noseIllustration from ...` |
| Poze Înainte/După (Proceduri) | - | Doar pui pozele în folder |
| Galerie foto completă | - | Doar pui pozele în folder |

---

## Note importante

- **Toate pozele din Hero și About trebuie importate din cod** — nu e suficient să le pui în folder, trebuie și să le legi în codul `.tsx` corespunzător. (Cele din proceduri și galerie se iau automat).
- **Extensii acceptate:** `.jpg`, `.jpeg`, `.png`, `.webp` — toate funcționează cu Vite.
- **Optimizare:** Folosește WebP pentru fișiere mai mici și încărcare mai rapidă.
- **Consimțământ pacienți:** Asigură-te că ai acordul pacienților înainte de a publica pozele.
