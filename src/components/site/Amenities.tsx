import pool from "../../assets/amenity-pool.jpg?url";

const list = [
  { t: "Rooftop Infinity Pool", d: "Sunset skyline swims with butler service." },
  { t: "24/7 Concierge", d: "From dinner reservations to private drivers." },
  { t: "Signature Spa", d: "Steam, sauna, and treatments in-suite." },
  { t: "Executive Fitness", d: "Technogym floor with skyline views." },
  { t: "Daily Housekeeping", d: "Turndown, linens, and floral touches." },
  { t: "Private Chef", d: "In-residence dining crafted on request." },
];

export function Amenities() {
  return (
    <section id="amenities" className="relative z-100 py-28 bg-background lg:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={pool}
          alt=""
          className="w-full h-[130%] object-cover opacity-25"
          data-parallax="0.4"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto reveal-on-scroll">
          <span className="text-xs uppercase tracking-[0.4em] text-gold-deep">Amenities</span>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl text-foreground">
            Everything considered.
            <br />
            <span className="text-gradient-gold italic">Nothing overlooked.</span>
          </h2>
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 rounded-2xl overflow-hidden shadow-elegant border border-border/60">
          {list.map((a, i) => (
            <div
              key={a.t}
              className="reveal-on-scroll group relative bg-card p-10 hover:bg-accent/40 transition-colors duration-500"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-serif text-lg shadow-gold group-hover:scale-110 transition-transform duration-500">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 font-serif text-2xl text-foreground">{a.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
