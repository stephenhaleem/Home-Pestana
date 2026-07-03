import g1 from "../../assets/hero1.jpeg";
import g2 from "../../assets/room-1.jpg?url";
import g3 from "../../assets/room-2.jpg?url";
import g4 from "../../assets/room-3.jpg?url";
import g5 from "../../assets/amenity-pool.jpg?url";
import g6 from "../../assets/amenity-gym.jpg?url";
import g7 from "../../assets/amenity-lounge.jpg?url";

export function Gallery() {
  return (
    <section id="gallery" className="relative z-10 py-28 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 reveal-on-scroll">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-gold-deep">Gallery</span>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl text-foreground">
              A house of <span className="text-gradient-gold italic">light & marble</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Hover to explore — every corner is composed for the moment you arrive.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {[
            { src: g1, span: "col-span-2 row-span-2" },
            { src: g2, span: "col-span-1 row-span-1" },
            { src: g3, span: "col-span-1 row-span-2" },
            { src: g4, span: "col-span-1 row-span-1" },
            { src: g5, span: "col-span-2 row-span-1" },
            { src: g6, span: "col-span-1 row-span-1" },
            { src: g7, span: "col-span-2 row-span-1" },
          ].map((it, i) => (
            <div
              key={i}
              className={`zoom-hover reveal-on-scroll relative rounded-xl overflow-hidden shadow-soft hover:shadow-elegant transition-shadow duration-500 ${it.span}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <img
                src={it.src}
                alt="Interior detail"
                className="zoom-hover-img absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
