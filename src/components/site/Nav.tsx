import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#apartments", label: "Apartments" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-white/95 ${
          scrolled ? "backdrop-blur-md shadow-soft border-b border-border/60" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="w-9 h-9 rounded-full bg-gradient-gold shadow-gold flex items-center justify-center text-primary-foreground font-serif text-lg">
              P
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-xl tracking-wide text-foreground">Home Pestana</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Apartments</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="gold-underline text-sm uppercase tracking-[0.18em] text-foreground/80 hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#booking"
              className="hidden md:inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.22em] px-6 py-3 rounded-full shadow-gold hover:shadow-elegant hover:scale-[1.03] transition-all duration-300"
            >
              Book Your Stay
            </a>

            {/* Mobile hamburger */}
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 text-foreground focus:outline-none"
            >
              <span className={`hamburger ${open ? "open" : ""}`}>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu panel (rendered outside header to avoid header scroll styling conflicts) */}
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed inset-0 transition-transform duration-300 lg:hidden pointer-events-auto ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ zIndex: 9999 }}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-md" onClick={() => setOpen(false)} />
        <div className="relative h-full w-full px-6 pt-20">
          <nav className="flex flex-col gap-6 text-foreground">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-2xl uppercase tracking-[0.18em]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="mt-8">
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.22em] px-6 py-3 rounded-full shadow-gold"
            >
              Book Your Stay
            </a>
          </div>

          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 p-2"
          >
            <span className="text-foreground">✕</span>
          </button>
        </div>
      </div>
    </>
  );
}
