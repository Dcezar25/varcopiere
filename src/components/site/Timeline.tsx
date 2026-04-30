const items = [
  { year: "1982 — 1988", text: "Student la UMF Carol Davila și student militar al Institutului de Medicină Militară București." },
  { year: "1988 — 1991", text: "Medic stagiar la Spitalul Militar Timișoara." },
  { year: "1991 — 1994", text: "Medic secundar ORL la CMFACF Dr. Hociotă." },
  { year: "1994 — 1999", text: "Medic specialist ORL la Institutul de Medicină Aerospațială București." },
  { year: "1999 — prezent", text: "Medic primar ORL." },
];

const stats = [
  {
    value: "Din 1982",
    label: "Expertiză consolidată în timp",
    text: "O carieră formată prin disciplină chirurgicală, decizii precise și atenție constantă pentru fiecare detaliu funcțional și estetic.",
  },
  {
    value: "Mii de cazuri",
    label: "Respirații și zâmbete redate",
    text: "Fiecare intervenție pornește de la anatomia pacientului și urmărește un rezultat natural, echilibrat, ușor de purtat.",
  },
  {
    value: "30+ ani",
    label: "Maturitate medicală",
    text: "Experiența acumulată în timp se transformă într-un proces calm, clar și predictibil, de la consultație la recuperare.",
  },
];

export const Timeline = () => {
  return (
    <section id="experienta" className="scroll-reveal py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container max-w-5xl">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.22em] text-accent mb-5">
            — Primar ORL
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight text-balance">
            O carieră construită <span className="italic">an cu an</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Experiență chirurgicală matură, susținută de disciplină medicală și atenție constantă pentru rezultat natural.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant hover:border-primary/20">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="font-serif text-3xl md:text-4xl text-primary leading-tight">{stat.value}</div>
              <div className="mt-3 text-xs uppercase tracking-[0.18em] text-accent">{stat.label}</div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {stat.text}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-[2rem] border border-border/60 bg-card/85 p-6 md:p-10 shadow-elegant backdrop-blur-sm">
          <ol className="relative border-l border-border/80 ml-3 space-y-10">
            {items.map((it, index) => (
              <li key={it.year} className="pl-9 md:pl-12 relative group">
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gradient-primary ring-4 ring-card transition-transform duration-500 group-hover:scale-125" />
                <span className="absolute -left-[3px] top-2.5 w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                  <div className="md:w-40 shrink-0 text-xs uppercase tracking-[0.2em] text-accent font-medium">
                    {it.year}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-foreground/85 leading-relaxed max-w-3xl">
                      {it.text}
                    </p>
                    {index === items.length - 1 && (
                      <div className="mt-4 inline-flex rounded-full bg-secondary px-3 py-1 text-xs uppercase tracking-[0.16em] text-primary">
                        Prezent
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};