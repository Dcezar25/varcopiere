import { PhoneCall, CalendarClock, Navigation, MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneNumber } from "./PhoneNumber";
import clinic from "@/assets/clinic.jpg";

const MAPS_LINK = "https://maps.app.goo.gl/CKMFpv6YWuL4Hrpu7";
const MAPS_EMBED =
  "https://www.google.com/maps?q=44.452935,25.995787&z=16&output=embed";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="rounded-[2rem] overflow-hidden shadow-elegant border border-border/60 grid lg:grid-cols-2">
          <div className="relative flex items-center justify-center min-h-[320px] lg:min-h-full bg-gradient-to-b from-white to-secondary/30 p-8 lg:p-16">
            <img
              src={clinic}
              alt="Cabinet ORL"
              loading="lazy"
              className="w-full max-h-[400px] lg:max-h-[500px] object-contain mix-blend-multiply transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          <div className="p-10 lg:p-14 bg-card">
            <div className="text-xs uppercase tracking-[0.22em] text-accent mb-5">
              — Contact
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight text-balance">
              Programează o <span className="italic">consultație</span>.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Sunați direct sau scrieți pe WhatsApp pentru întrebări și
              programări. Răspundem în zilele lucrătoare, între 09:00 și 18:00.
            </p>

            <div className="mt-10 space-y-5">
              <div className="group flex items-start gap-4 p-4 rounded-xl border border-border/60 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft hover:bg-secondary/30">
                <div className="w-11 h-11 shrink-0 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <PhoneCall className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-accent">
                    Urgențe & intervenții
                  </div>
                  <div className="text-sm font-medium text-primary mt-0.5">
                    Sună pentru intervenție
                  </div>
                  <PhoneNumber
                    number="0722.307.818"
                    tel="0722307818"
                    className="block font-serif text-xl text-primary mt-1 tracking-tight"
                  />
                </div>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="rounded-full self-center hidden sm:inline-flex"
                >
                  <a href="tel:0722307818" aria-label="Sună la 0722307818">
                    Sună acum
                  </a>
                </Button>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-xl border border-border/60 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft hover:bg-secondary/30">
                <div className="w-11 h-11 shrink-0 rounded-lg bg-secondary text-primary flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <PhoneCall className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Programări consultații
                  </div>
                  <div className="text-sm font-medium text-primary mt-0.5">
                    Sună pentru programare
                  </div>
                  <PhoneNumber
                    number="0721.173.670"
                    tel="0721173670"
                    className="block font-serif text-xl text-primary mt-1 tracking-tight"
                  />
                </div>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="rounded-full self-center hidden sm:inline-flex"
                >
                  <a href="tel:0721173670" aria-label="Sună la 0721173670">
                    Sună acum
                  </a>
                </Button>
              </div>

              <div className="group flex items-center gap-4 p-4 rounded-xl border border-border/60 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft hover:bg-secondary/30">
                <div className="w-11 h-11 rounded-lg bg-secondary text-primary flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <CalendarClock className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Program
                  </div>
                  <div className="font-medium text-primary">Luni – Vineri · 09:00 – 18:00</div>
                </div>
              </div>

              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-border/60 overflow-hidden hover:border-primary/40 transition-colors group"
              >
                <div className="flex items-center gap-4 p-4">
                  <div className="w-11 h-11 rounded-lg bg-secondary text-primary flex items-center justify-center">
                    <Navigation className="w-4 h-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      Locație
                    </div>
                    <div className="font-medium text-primary">
                      Vezi pe Google Maps
                    </div>
                  </div>
                </div>
                <div className="relative h-44 w-full border-t border-border/60">
                  <iframe
                    title="Locație cabinet — Google Maps"
                    src={MAPS_EMBED}
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <div className="absolute inset-0 pointer-events-none ring-0 group-hover:ring-2 group-hover:ring-primary/30 transition-all" />
                </div>
              </a>
            </div>

            <Button asChild size="lg" className="rounded-full mt-10 w-full sm:w-auto px-7 h-12 shadow-elegant">
              <a
                href="https://wa.me/40722307818"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircleMore className="w-4 h-4 mr-2" strokeWidth={1.75} />
                Scrie pe WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
