export function Booking() {
  return (
    <section id="booking" className="relative z-10 py-28 lg:py-36 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[oklch(0.99_0.005_85)] to-[oklch(0.95_0.03_85)] border border-gold/30 shadow-elegant reveal-on-scroll">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-gold opacity-20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-gradient-gold opacity-10 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.4em] text-gold-deep">Reserve</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-foreground leading-tight">
                Begin your stay at <span className="text-gradient-gold italic">Home Pestana</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
                Tell us your dates and we'll confirm availability across our residences —
                two-bedroom, one-bedroom, and studio.
              </p>

              <div className="mt-8 pt-8 border-t border-border/60">
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Prefer to speak with us directly?
                </div>
                <a
                  href="tel:+2349043400400"
                  className="gold-underline block text-sm text-foreground/85"
                >
                  +2349128151734, +2349162838184, +353899619722
                </a>
                <a
                  href="mailto:homepestanaapartment@gmail.com"
                  className="gold-underline block text-sm text-foreground/85 mt-1.5"
                >
                  homepestanaapartment@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-card/60 lg:border-l border-border/60 p-10 md:p-14 flex flex-col justify-center">
              <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Check In
                  </span>
                  <input
                    type="date"
                    className="bg-background border border-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Check Out
                  </span>
                  <input
                    type="date"
                    className="bg-background border border-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition"
                  />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Apartment Type
                  </span>
                  <select className="bg-background border border-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30">
                    <option>Two-Bedroom Apartment</option>
                    <option>One-Bedroom with Sitting Room</option>
                    <option>Studio (Single Room with Kitchen)</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Guests
                  </span>
                  <select className="bg-background border border-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                  </select>
                </label>
                <button
                  type="submit"
                  className="sm:col-span-2 mt-2 bg-gradient-gold text-primary-foreground uppercase tracking-[0.2em] text-xs px-6 py-4 rounded-lg shadow-gold hover:shadow-elegant hover:scale-[1.02] transition-all duration-300"
                >
                  Check Availability
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
