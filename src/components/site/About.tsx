import noseIllustration from "@/assets/nose-illustration.jpg";

export const About = () => {
  return (
    <section id="despre" className="py-24 lg:py-32 bg-background">
      <div className="container grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative max-w-sm mx-auto">
            <div className="absolute -inset-6 bg-cream rounded-[2rem]" />
            <img
              src={noseIllustration}
              alt="Ilustrație profil nas — chirurgie estetică"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative rounded-[1.5rem] mix-blend-multiply"
            />
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="text-xs uppercase tracking-[0.22em] text-accent mb-5">
            — Despre doctor
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight text-balance">
            Trei decenii dedicate <span className="italic">chirurgiei nasului</span> și echilibrului ORL.
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground text-lg leading-relaxed max-w-2xl">
            <p>
              Dr. Marin Voica este medic primar ORL, cu o carieră începută în
              1982, la Universitatea de Medicină și Farmacie „Carol Davila"
              din București. De-a lungul timpului, a activat în spitale de
              referință din România și din străinătate.
            </p>
            <p>
              Specializat în <strong className="text-primary font-medium">rinoplastie</strong>,
              <strong className="text-primary font-medium"> rinoseptoplastie</strong> și
              corectarea <strong className="text-primary font-medium">deviației de sept</strong>,
              abordează fiecare caz cu o filozofie aparte: rezultate naturale,
              recuperare blândă și respect pentru anatomia fiecărui pacient.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};