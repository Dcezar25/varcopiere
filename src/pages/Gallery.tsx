import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import beforeImg from "@/assets/before-after-before.jpg";
import afterImg from "@/assets/before-after-after.jpg";

type Photo = {
  id: string;
  src: string;
  alt: string;
  removable?: boolean;
};

const seedSources = [beforeImg, afterImg];
const initialPhotos: Photo[] = Array.from({ length: 16 }, (_, i) => ({
  id: `seed-${i}`,
  src: seedSources[i % seedSources.length],
  alt: `Rezultat pacient ${i + 1}`,
}));

const Gallery = () => {
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const prevTitle = document.title;
    const prevDesc =
      document.querySelector('meta[name="description"]')?.getAttribute("content") ?? "";
    document.title = "Galerie foto — Before & After | Dr. Marin Voica";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Galerie foto Before & After — rezultate ale pacienților Dr. Marin Voica.",
      );
    return () => {
      document.title = prevTitle;
      document.querySelector('meta[name="description"]')?.setAttribute("content", prevDesc);
    };
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight")
        setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length));
      if (e.key === "ArrowLeft")
        setOpenIndex((i) =>
          i === null ? null : (i - 1 + photos.length) % photos.length,
        );
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, photos.length]);

  const removePhoto = (id: string) => {
    setPhotos((p) => p.filter((ph) => ph.id !== id));
    setOpenIndex(null);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-10 lg:pt-40 lg:pb-12 bg-gradient-hero">
        <div className="container max-w-5xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi la pagina principală
          </Link>
          <div className="text-xs uppercase tracking-[0.22em] text-accent mb-5">
            — Galerie foto
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-tight text-balance">
            Rezultate <span className="italic">reale</span>, povestite în imagini.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Apasă pe orice imagine pentru a o vedea în detaliu.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container max-w-6xl">
          {photos.length === 0 ? (
            <div className="text-center py-24 text-muted-foreground">
              Nu există imagini în galerie. Apasă „Încarcă imagini” pentru a adăuga.
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 [column-fill:_balance]">
              {photos.map((photo, idx) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setOpenIndex(idx)}
                  aria-label={`Deschide imaginea ${idx + 1}`}
                  className="group relative mb-4 sm:mb-5 w-full break-inside-avoid overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 block"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-left translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-primary-foreground/80">
                      Click pentru detalii
                    </div>
                    <div className="font-serif text-base text-primary-foreground mt-1">
                      Before &amp; After
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {openIndex !== null && photos[openIndex] && (
        <div
          className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Before & After"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex(null);
            }}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-background/15 hover:bg-background/25 text-primary-foreground flex items-center justify-center transition-colors"
            aria-label="Închide"
          >
            <X className="w-5 h-5" />
          </button>
          {photos[openIndex].removable && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removePhoto(photos[openIndex]!.id);
              }}
              className="absolute top-5 right-20 inline-flex items-center gap-2 h-11 px-4 rounded-full bg-background/15 hover:bg-destructive/80 text-primary-foreground text-xs transition-colors"
              aria-label="Șterge imaginea"
            >
              <Trash2 className="w-4 h-4" />
              Șterge
            </button>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) =>
                i === null ? null : (i - 1 + photos.length) % photos.length,
              );
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/15 hover:bg-background/25 text-primary-foreground flex items-center justify-center transition-colors"
            aria-label="Imaginea anterioară"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length));
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/15 hover:bg-background/25 text-primary-foreground flex items-center justify-center transition-colors"
            aria-label="Imaginea următoare"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <figure
            className="relative max-w-5xl w-full max-h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[openIndex].src}
              alt={photos[openIndex].alt}
              className="max-h-[78vh] w-auto max-w-full object-contain rounded-xl shadow-elegant animate-fade-in"
            />
            <figcaption className="mt-5 text-center">
              <div className="font-serif text-2xl text-primary-foreground">
                Before &amp; After
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.22em] text-primary-foreground/70">
                {openIndex + 1} / {photos.length}
              </div>
            </figcaption>
          </figure>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default Gallery;