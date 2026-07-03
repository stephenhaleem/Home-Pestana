import hero from "../../assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={hero}
          alt="Luxury serviced apartment interior"
          className="w-full h-[120%] object-cover"
          data-parallax="0.35"
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.25)_55%,rgba(255,253,247,0.95)_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28">
        <div className="max-w-3xl">
          <span className="animate-reveal inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold-deep">
            <span className="w-10 h-px bg-gold" /> Luxury Serviced Living
          </span>
          <h1
            className="animate-reveal mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-foreground"
            style={{ animationDelay: "120ms" }}
          >
            A refined address, <br />
            <span className="text-gradient-gold italic">crafted for you.</span>
          </h1>
          <p
            className="animate-reveal mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
            style={{ animationDelay: "260ms" }}
          >
            Home Pestana Apartments blends the intimacy of a private residence with the
            polish of a five-star hotel — curated interiors, gilded details, and effortless
            hospitality in the city's most desirable quarter.
          </p>

          <div
            className="animate-reveal mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "420ms" }}
          >
            <a
              href="#apartments"
              className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground uppercase tracking-[0.2em] text-xs px-8 py-4 rounded-full shadow-gold hover:shadow-elegant hover:scale-[1.03] transition-all duration-300"
            >
              Explore Residences
            </a>
            <a
              href="#booking"
              className="gold-underline inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-foreground/80 hover:text-foreground px-2 py-2"
            >
              Book a Stay →
            </a>
          </div>

          <div
            className="animate-reveal mt-16 grid grid-cols-3 max-w-lg gap-6"
            style={{ animationDelay: "560ms" }}
          >
            {[
              ["24", "Suites"],
              ["9.6", "Guest Rating"],
              ["5★", "Concierge"],
            ].map(([n, l]) => (
              <div key={l} className="border-l border-gold/40 pl-4">
                <div className="font-serif text-3xl text-foreground">{n}</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-gold-deep animate-float">
        scroll
      </div>
    </section>
  );
}
