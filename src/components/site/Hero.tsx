import { useEffect, useState } from "react";
import heroImg from "../../assets/hero1.jpeg?url";
import room1Img from "../../assets/hero2.jpeg?url";
import room2Img from "../../assets/home3.jpeg?url";

const SLIDES = [
  { src: heroImg, alt: "Luxury serviced apartment interior" },
  { src: room1Img, alt: "Elegant bedroom suite" },

  { src: room2Img, alt: "Refined living space" },
];

const SLIDE_DURATION = 6000; // ms each slide holds before switching
const FADE_DURATION = 1200; // ms crossfade between slides

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="sticky top-0 isolate z-0 h-screen overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden bg-black/40">
        <div className="absolute inset-x-0 -top-24 -bottom-24 hero-media" data-parallax="0.35">
          {SLIDES.map((slide, i) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={`absolute inset-0 w-full h-full object-cover ease-in-out hero-slide ${
                i === active ? "opacity-100 animate-hero-zoom" : "opacity-0"
              }`}
              style={{
                transitionProperty: "opacity, transform",
                transitionDuration: `${FADE_DURATION}ms`,
                animationDuration: `${SLIDE_DURATION + FADE_DURATION}ms`,
              }}
              width={1920}
              height={1200}
            />
          ))}
        </div>
        <div className="bg-hero-overlay absolute inset-0" />
      </div>

      <div className="absolute bottom-10 right-8 lg:right-10 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === active ? "w-6 bg-gold" : "w-1.5 bg-foreground/30"
            }`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28">
        <div className="max-w-3xl hero-text">
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
            className="animate-reveal mt-8 max-w-xl text-lg text-background/50 leading-relaxed"
            style={{ animationDelay: "260ms" }}
          >
            Home Pestana Apartments blends the intimacy of a private residence with the polish of a
            five-star hotel — curated interiors, gilded details, and effortless hospitality in the
            city's most desirable quarter.
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
        </div>
      </div>
    </section>
  );
}
