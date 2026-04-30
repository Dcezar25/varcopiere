export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground/80 py-12">
      <div className="container flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
        <div>
          <div className="font-serif text-xl text-primary-foreground">
            Dr. Marin Voica
          </div>
          <div className="text-xs uppercase tracking-[0.2em] mt-1 text-primary-foreground/60">
            Medic Primar ORL · București
          </div>
        </div>
        <div className="text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Dr. Marin Voica. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
};