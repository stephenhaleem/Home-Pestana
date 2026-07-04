import pool from "../../assets/amenity-pool.jpg?url";
import gym from "../../assets/amenity-gym.jpg?url";
import lounge from "../../assets/amenity-lounge.jpg?url";

const featured = [
  {
    img: pool,
    title: "Swimming Pool",
    desc: "A quiet place to unwind after a long day.",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/5] lg:aspect-auto",
  },
  {
    img: lounge,
    title: "Residents' Lounge",
    desc: "Comfortable shared space for guests.",
    span: "lg:col-span-2",
    aspect: "aspect-[16/10]",
  },
  {
    img: gym,
    title: "Fitness Area",
    desc: "Stay on routine during your stay.",
    span: "lg:col-span-1",
    aspect: "aspect-square",
  },
];

const included = [
  "24/7 security",
  "High-speed Wi\u2011Fi",
  "Backup power",
  "Daily housekeeping",
  "On-site parking",
  "Smart TV in every unit",
];

export function Amenities() {
  return (
    <section id="amenities" className="relative z-10 py-28 lg:py-40 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 reveal-on-scroll">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.4em] text-gold-deep">Amenities</span>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl text-foreground">
              Comfort, <span className="text-gradient-gold italic">handled daily.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            Every residence at Home Pestana comes with the essentials taken care of, plus shared
            spaces built for rest and routine.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:h-[560px]">
          {featured.map((f, i) => (
            <div
              key={f.title}
              className={`zoom-hover reveal-on-scroll group relative rounded-2xl overflow-hidden shadow-soft ${f.span} ${f.aspect}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={f.img}
                alt={f.title}
                className="zoom-hover-img w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-serif text-2xl text-white">{f.title}</h3>
                <p className="mt-1 text-sm text-white/80">{f.desc}</p>
              </div>
            </div>
          ))}

          <div className="reveal-on-scroll lg:col-span-1 rounded-2xl border border-border/60 bg-card p-8 flex flex-col justify-center shadow-soft">
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold-deep mb-5">
              Included with every stay
            </h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
