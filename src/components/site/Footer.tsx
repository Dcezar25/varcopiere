export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground/80 py-7">
      <div className="container">
        <div className="grid gap-4 text-center md:grid-cols-3 md:items-center md:text-left">
          <div>
            <div className="font-serif text-xl text-primary-foreground">
              Dr. Marin Voica
            </div>
            <div className="text-xs uppercase tracking-[0.2em] mt-1 text-primary-foreground/60">
              Medic Primar ORL · București
            </div>
          </div>
          <div className="text-xs text-primary-foreground/45 md:text-center">
            Powered by Pixel & Profit
          </div>
          <div className="text-sm text-primary-foreground/60 md:text-right">
            © {new Date().getFullYear()} Dr. Marin Voica. Toate drepturile rezervate.
          </div>
        </div>
      </div>
    </footer>
  );
};