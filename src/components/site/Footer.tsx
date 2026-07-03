import { useEffect, useState } from "react";

export function Footer() {
  const [weather, setWeather] = useState<null | {
    temperature: number;
    windspeed: number;
    humidity?: number;
    time?: string;
    description?: string;
  }>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch current weather for Lagos using Open-Meteo (no API key)
    const lat = 6.5244;
    const lon = 3.3792;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relativehumidity_2m&timezone=auto`;

    let cancelled = false;
    setLoading(true);
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        try {
          const cw = data.current_weather;
          let humidity: number | undefined = undefined;
          if (data.hourly && data.hourly.time && data.hourly.relativehumidity_2m) {
            const idx = data.hourly.time.indexOf(cw.time);
            if (idx !== -1) humidity = data.hourly.relativehumidity_2m[idx];
          }

          const descMap: Record<number, string> = {
            0: "Clear sky",
            1: "Mainly clear",
            2: "Partly cloudy",
            3: "Overcast",
            45: "Fog",
            48: "Depositing rime fog",
            51: "Light drizzle",
            53: "Moderate drizzle",
            55: "Dense drizzle",
            61: "Slight rain",
            63: "Moderate rain",
            65: "Heavy rain",
            80: "Rain showers",
            95: "Thunderstorm",
          };

          setWeather({
            temperature: cw.temperature,
            windspeed: cw.windspeed,
            humidity,
            time: cw.time,
            description: descMap[cw.weathercode] ?? "",
          });
          setLoading(false);
        } catch (e) {
          setError("Failed to parse weather response");
          setLoading(false);
        }
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err.message || "Failed to fetch weather");
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // live local time (updates every minute)
  const [now, setNow] = useState<Date>(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  const formattedNow = (() => {
    try {
      const day = now.toLocaleDateString(undefined, { weekday: "long" });
      const time = now.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
      return `${day} ${time}`;
    } catch (e) {
      return "";
    }
  })();

  const renderIcon = (desc?: string) => {
    const size = 48;
    if (!desc) return null;
    const d = desc.toLowerCase();
    if (d.includes("thunder")) {
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 13a6 6 0 1111.874 1.367A4 4 0 0119 19H6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13 13l-2 4h4l-2 4" fill="#fff" />
        </svg>
      );
    }
    if (d.includes("rain") || d.includes("drizzle") || d.includes("shower")) {
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 13a6 6 0 1111.874 1.367A4 4 0 0119 19H6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 21l1.5-2M12 21l1.5-2M16 21l1.5-2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
    if (d.includes("clear")) {
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="4" fill="#fff" />
          <g stroke="#fff" strokeWidth="1.2">
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="M4.2 4.2l1.4 1.4" />
            <path d="M18.4 18.4l1.4 1.4" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="M4.2 19.8l1.4-1.4" />
            <path d="M18.4 5.6l1.4-1.4" />
          </g>
        </svg>
      );
    }
    if (d.includes("fog") || d.includes("mist") || d.includes("fog")) {
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12h18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M5 16h14" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 8h10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    }
    // default: cloudy
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 13a6 6 0 1111.874 1.367A4 4 0 0119 19H6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  };

  return (
    <footer id="contact" className="footer-bg text-[oklch(0.9_0.01_85)] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top: three columns (weather / follow / mailing) */}
        <div className="footer-top grid md:grid-cols-3 gap-12 pb-8">
          <div>
            <h4 className="footer-title">Weather Widget</h4>
            <div className="mt-6 text-sm">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">LAGOS, NG</div>

              {/* Weather layout: icon + temp on left, meta stacked on right */}
              <div className="weather-widget mt-4 flex items-start justify-between">
                <div className="weather-main flex items-center gap-6">
                  <div className="weather-icon w-14 h-14 flex items-center justify-center">
                    {loading ? <div className="text-2xl">--</div> : renderIcon(weather?.description)}
                  </div>
                  <div className="weather-temp">
                    <div className="text-4xl font-semibold">{loading ? "--" : `${Math.round(weather?.temperature ?? 0)}`}</div>
                    <div className="weather-units text-sm text-muted-foreground">°F | °C</div>
                  </div>
                </div>

                <div className="weather-meta text-xs text-muted-foreground text-right">
                  {/* formatted day and time */}
                  {loading ? (
                    <div>Loading...</div>
                  ) : error ? (
                    <div>Error</div>
                  ) : (
                    <>
                                              <div className="font-medium">{formattedNow}</div>
                      <div className="mt-1 capitalize">{weather?.description ?? ""}</div>
                      <div className="mt-3">Wind: {weather?.windspeed ?? "-"} km/h</div>
                      <div>Humidity: {weather?.humidity ?? "-"}%</div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Follow Us</h4>
            <div className="mt-6 text-sm text-muted-foreground">
              <div className="uppercase text-xs tracking-wider mb-3">Our social media channels</div>
              <div className="flex items-center gap-4 text-lg">
                <a href="#" aria-label="facebook" className="hover:text-gold">f</a>
                <a href="#" aria-label="twitter" className="hover:text-gold">t</a>
                <a href="#" aria-label="instagram" className="hover:text-gold">◉</a>
                <a href="#" aria-label="linkedin" className="hover:text-gold">in</a>
              </div>
              <p className="mt-4 text-sm max-w-sm">Follow us on social media to keep up-to-date with latest news, discounts and events.</p>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Sign up for our mailing list.</h4>
            <div className="mt-6">
              <div className="text-xs uppercase text-muted-foreground mb-2">Sign up for special offers</div>
              <div className="flex gap-3 items-center">
                <input aria-label="email" placeholder="YOUR EMAIL ADDRESS" className="subscribe-input" />
                <button className="subscribe-btn">→</button>
              </div>
              <p className="mt-4 text-[11px] text-muted-foreground max-w-md">By submitting this form, I agree to having my personal and contact information processed and used for the purpose of marketing communications. More details about our Privacy policy can be found at the following link: Privacy Policy</p>
            </div>
          </div>
        </div>

        <hr className="border-t border-white/8 my-8" />

        {/* Middle: address / logo / contact */}
        <div className="grid md:grid-cols-3 items-center gap-6 py-6">
          <div className="text-sm text-muted-foreground">
            <strong>Address:</strong>
            <div className="mt-2 text-[13px] max-w-sm">8a Wole Olateju Crescent, Lekki Phase1, Lagos.<br/>1 Oju Olobun Close, Victoria Island, Lagos.</div>
          </div>

          <div className="flex justify-center">
            <div className="w-40 h-14 flex items-center justify-center">
              <span className="w-12 h-12 rounded-full bg-gradient-gold shadow-gold flex items-center justify-center font-serif text-lg text-primary-foreground">P</span>
            </div>
          </div>

          <div className="text-sm text-muted-foreground text-right">
            <div><strong>Tel:</strong> +234 904 340 0400, +234 913 444 5523</div>
            <div className="mt-2"><strong>Email:</strong> reservations@homepestana.com</div>
          </div>
        </div>

        <hr className="border-t border-white/8 my-6" />

        {/* Bottom links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div className="flex gap-4">
            <a href="#" className="text-[13px] hover:text-gold">Awards &amp; Press</a>
            <a href="#" className="text-[13px] hover:text-gold">Sitemap</a>
            <a href="#" className="text-[13px] hover:text-gold">Careers</a>
            <a href="#" className="text-[13px] hover:text-gold">Terms &amp; Conditions</a>
          </div>

          <div className="text-[13px]">© {new Date().getFullYear()} HOME PESTANA. All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
}
