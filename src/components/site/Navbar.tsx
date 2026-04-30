import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SOCIAL_LINKS } from "./SocialIcons";

const links = [
  { hash: "despre", label: "Despre" },
  { hash: "experienta", label: "Experiență" },
  { hash: "proceduri", label: "Proceduri" },
  { hash: "pacienti", label: "Pacienți" },
  { hash: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const openScrollY = useRef<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (hash: string) => {
    setOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${hash}`);
      }
    } else {
      navigate(`/#${hash}`);
    }
  };

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      });
    }
  };

  // When landing on "/" with a hash (after navigating from another page), scroll to it.
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      // Wait for layout
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      if (
        open &&
        openScrollY.current !== null &&
        Math.abs(window.scrollY - openScrollY.current) > 20
      ) {
        setOpen(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    if (open) {
      openScrollY.current = window.scrollY;
    } else {
      openScrollY.current = null;
    }
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container grid grid-cols-3 lg:flex items-center lg:justify-between h-20">
        <a
          href="/"
          onClick={goHome}
          className="flex items-baseline gap-2 group cursor-pointer justify-self-start"
        >
          <span className="font-serif text-2xl font-medium text-primary tracking-tight">
            Dr. Marin Voica
          </span>
          <span className="hidden sm:inline text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            ORL
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((l) => (
            <button
              type="button"
              key={l.hash}
              onClick={() => goToSection(l.hash)}
              className="text-sm text-foreground/75 hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 pl-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 h-9 px-4 rounded-full text-sm text-foreground/80 hover:text-primary border border-border/60 bg-background/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft hover:border-primary/30"
              >
                Socials
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 data-[state=open]:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={10}
              className="min-w-[200px] rounded-xl border-border/60 bg-background/75 backdrop-blur-xl shadow-elegant p-1.5"
            >
              {SOCIAL_LINKS.map(({ platform, label, href, Icon }) => (
                <DropdownMenuItem key={platform} asChild>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm text-foreground/85 hover:text-primary focus:text-primary transition-all duration-300 hover:bg-secondary/60 focus:bg-secondary/60 hover:translate-x-0.5"
                  >
                    <span className="w-7 h-7 rounded-md bg-secondary/60 text-primary flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    {label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            size="sm"
            onClick={() => goToSection("contact")}
            className="rounded-full px-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
          >
            Programare
          </Button>
        </div>

        <button
          aria-label="Meniu"
          aria-expanded={open}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center text-primary transition-transform duration-300 active:scale-95"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative w-6 h-6 block">
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-out ${
                open ? "rotate-45 translate-y-0" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-6 bg-current rounded-full transition-all duration-200 ease-out ${
                open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-out ${
                open ? "-rotate-45 translate-y-0" : "translate-y-2"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border/60 transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-[560px] opacity-100 border-t" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container py-6 flex flex-col gap-4">
          {links.map((l, i) => (
            <button
              type="button"
              key={l.hash}
              onClick={() => goToSection(l.hash)}
              style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
              className={`text-base text-left text-foreground/80 hover:text-primary transform transition-all duration-300 ease-out ${
                open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
            >
              {l.label}
            </button>
          ))}
          <Button
            onClick={() => goToSection("contact")}
            className={`rounded-full mt-2 transform transition-all duration-300 ease-out ${
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${80 + links.length * 60}ms` : "0ms" }}
          >
            Programare
          </Button>
          <div
            className={`flex items-center gap-3 pt-2 transform transition-all duration-300 ease-out ${
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${80 + (links.length + 1) * 60}ms` : "0ms" }}
          >
            {SOCIAL_LINKS.map(({ platform, href, Icon }) => (
              <a
                key={platform}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform}
                className="w-10 h-10 rounded-full border border-border/60 text-foreground/70 hover:text-primary hover:border-primary/40 hover:bg-secondary/60 flex items-center justify-center transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
