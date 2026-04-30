const items = [
  { year: "1982 — 1988", text: "Student la UMF Carol Davila și student militar al Institutului de Medicină Militară București." },
  { year: "1988 — 1991", text: "Medic stagiar la Spitalul Militar Timișoara." },
  { year: "1991 — 1994", text: "Medic secundar ORL la CMFACF Dr. Hociotă." },
  { year: "1994 — 1999", text: "Medic specialist ORL la Institutul de Medicină Aerospațială București." },
  { year: "1999 — prezent", text: "Medic primar ORL." },
];

export const Timeline = () => {
  return (
    <section id="experienta" className="py-24 lg:py-32 bg-background">
      <div className="container max-w-5xl">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.22em] text-accent mb-5">
            — Primar ORL
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight text-balance">
            O carieră construită <span className="italic">an cu an</span>.
          </h2>
        </div>

        <ol className="relative border-l border-border/80 ml-3 space-y-12">
          {items.map((it) => (
            <li key={it.year} className="pl-10 relative">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gradient-primary ring-4 ring-background" />
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
                {it.year}
              </div>
              <p className="mt-2 text-lg text-foreground/85 leading-relaxed max-w-3xl">
                {it.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};