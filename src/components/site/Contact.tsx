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
          <div className="relative min-h-[400px]">
            <img
              src={clinic}
              alt="Cabinet ORL"
              width={1280}
              height={1600}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
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
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border/60">
                <div className="w-11 h-11 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
                  <PhoneCall className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Telefon
                  </div>
                  <PhoneNumber
                    number="0722.307.818"
                    tel="0722307818"
                    className="font-medium text-primary"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-border/60">
                <div className="w-11 h-11 rounded-lg bg-secondary text-primary flex items-center justify-center">
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
