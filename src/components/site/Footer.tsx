import { SOCIAL_LINKS } from "./SocialIcons";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground/80 py-8">
      <div className="container">
        <div className="grid gap-6 text-center md:grid-cols-3 md:items-center md:text-left">
          <div>
            <div className="font-serif text-xl text-primary-foreground">
              Dr. Marin Voica
            </div>
            <div className="text-xs uppercase tracking-[0.2em] mt-1 text-primary-foreground/60">
              Medic Primar ORL · București
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            {SOCIAL_LINKS.map(({ platform, href, Icon }) => (
              <a
                key={platform}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform}
                className="w-9 h-9 rounded-full border border-primary-foreground/15 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/30 flex items-center justify-center transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="md:text-right">
            <div className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Dr. Marin Voica. Toate drepturile rezervate.
            </div>
            <div className="text-xs text-primary-foreground/45 mt-1">
              Powered by Pixel & Profit
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
