export function Booking() {
  return (
    <section id="booking" className="py-28 lg:py-36 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[oklch(0.99_0.005_85)] to-[oklch(0.95_0.03_85)] border border-gold/30 shadow-elegant p-10 md:p-16 reveal-on-scroll">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-gold opacity-20 blur-3xl" />
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end relative">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-gold-deep">Reserve</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-foreground">
                Begin your stay at <span className="text-gradient-gold italic">Home Pestana</span>
              </h2>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 grid md:grid-cols-4 gap-4 relative"
          >
            {[
              { l: "Check In", t: "date" },
              { l: "Check Out", t: "date" },
            ].map((f) => (
              <label key={f.l} className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {f.l}
                </span>
                <input
                  type={f.t}
                  className="bg-background border border-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition"
                />
              </label>
            ))}
            <label className="flex flex-col gap-2">
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
              className="self-end bg-gradient-gold text-primary-foreground uppercase tracking-[0.2em] text-xs px-6 py-4 rounded-lg shadow-gold hover:shadow-elegant hover:scale-[1.02] transition-all duration-300"
            >
              Check Availability
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
