import { useEffect, useState } from "react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/#apartments", label: "Apartments" },
  { href: "/#amenities", label: "Amenities" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

const socials = [
  { label: "Facebook", href: "#", glyph: "f" },
  { label: "Instagram", href: "#", glyph: "◉" },
  { label: "Twitter", href: "#", glyph: "t" },
  { label: "LinkedIn", href: "#", glyph: "in" },
];

function useLagosWeather() {
  const [weather, setWeather] = useState<null | { temperature: number; description: string }>(null);

  useEffect(() => {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=6.5244&longitude=3.3792&current_weather=true&timezone=auto";
    let cancelled = false;

    const descMap: Record<number, string> = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Fog",
      51: "Light drizzle",
      53: "Drizzle",
      55: "Drizzle",
      61: "Light rain",
      63: "Rain",
      65: "Heavy rain",
      80: "Rain showers",
      95: "Thunderstorm",
    };

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        const cw = data.current_weather;
        if (!cw) return;
        setWeather({
          temperature: Math.round(cw.temperature),
          description: descMap[cw.weathercode] ?? "",
        });
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  return weather;
}

export function Footer() {
  const weather = useLagosWeather();

  return (
    <footer
      id="contact"
      className="relative z-10 bg-[oklch(0.15_0.01_85)] text-white/90 pt-20 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-full bg-gradient-gold shadow-gold flex items-center justify-center text-primary-foreground font-serif text-lg shrink-0">
                P
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg text-white">Home Pestana</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Apartments</span>
              </span>
            </div>
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-xs">
              Serviced apartments in the heart of Lagos, finished with care and looked after daily.
            </p>
            {weather && (
              <div className="mt-5 inline-flex items-center gap-2 text-xs text-white/50">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Lagos now: {weather.temperature}°C, {weather.description}
              </div>
            )}
            <div className="mt-6 flex items-center gap-4 text-base">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/50 transition-colors"
                >
                  {s.glyph}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-base text-gold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="gold-underline text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-base text-gold mb-5">Contact</h4>
            <div className="text-sm text-white/70 leading-relaxed space-y-4">
              <div>
                10, Damilare Oshinuga Str,Off Ijede Road, Behind D chillers Hotel, Ikorodu, Lagos,
                Nigeria.
                <br />
              </div>
              <a href="tel:+2349043400400" className="gold-underline block">
                +353899619722, +2349128151734, +2349162838184
              </a>
              <a href="mailto:homepestanaapartment@gmail.com" className="gold-underline block">
                homepestanaapartment@gmail.com
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-base text-gold mb-5">Stay Updated</h4>
            <p className="text-sm text-white/60 mb-4 leading-relaxed">
              Occasional news on offers and availability — no spam.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                aria-label="Email address"
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="shrink-0 w-10 h-10 rounded-lg bg-gradient-gold text-primary-foreground flex items-center justify-center hover:shadow-gold transition-shadow"
              >
                →
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-xs text-white/45">
          <div>© {new Date().getFullYear()} Home Pestana Apartments. All rights reserved.</div>
          <div>Lagos, Nigeria</div>
        </div>
      </div>
    </footer>
  );
}
