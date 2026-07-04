import { Link } from "@tanstack/react-router";
import apartments from "./apartmentsData";

const items = apartments.map((a) => ({
  img: a.images[0],
  tag: a.slug.includes("studio")
    ? "Studio Suite"
    : a.slug.includes("one-bedroom")
      ? "One Bedroom"
      : "Two Bedroom",
  title: a.title,
  price: "On request",
  desc: a.short,
  slug: a.slug,
}));

export function Apartments() {
  return (
    <section id="apartments" className="relative z-10 py-28 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 reveal-on-scroll">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.4em] text-gold-deep">
              The Residences
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl text-foreground">
              Suites shaped by <span className="text-gradient-gold italic">quiet luxury</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            Three distinct floor plans, each finished in soft ivory, warm oak, and hand-cast brass.
            Every residence is serviced daily and stocked to your preference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <article
              key={it.title}
              className="reveal-on-scroll group bg-card rounded-2xl overflow-hidden shadow-soft hover-lift border border-border/60"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="zoom-hover relative aspect-[4/5]">
                <img
                  src={it.img}
                  alt={it.title}
                  className="zoom-hover-img w-full h-full object-cover"
                  loading="lazy"
                  width={1200}
                  height={900}
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-[10px] uppercase tracking-[0.25em] text-gold-deep px-3 py-1.5 rounded-full">
                  {it.tag}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl text-foreground">{it.title}</h3>
                  <div className="text-right">
                    <div className="text-gold font-serif text-xl">{it.price}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      per night
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                <Link
                  to="/Apartments/$slug"
                  params={{ slug: it.slug }}
                  className="gold-underline mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground"
                >
                  View details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
