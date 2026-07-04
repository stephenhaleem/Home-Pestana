import apartments from "./apartmentsData";
import { ApartmentMap } from "./ApartmentMap";
import { BookingForm } from "./BookingForm";

export function ApartmentDetail({ slug }: { slug: string }) {
  const apt = apartments.find((a) => a.slug === slug);
  if (!apt) return <div className="p-8">Apartment not found</div>;

  return (
    <main className="max-w-6xl mx-auto py-24 px-6">
      <a
        href="/#apartments"
        className="gold-underline inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8"
      >
        ← Back to residences
      </a>

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-gold-deep bg-secondary/60 px-3 py-1.5 rounded-full mb-4">
            {apt.unitsAvailable}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">{apt.title}</h1>
          <p className="text-muted-foreground leading-relaxed mb-8">{apt.description}</p>

          <section className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xs text-gold uppercase tracking-[0.2em] mb-2">Bedroom</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{apt.bedroom}</p>
            </div>
            <div>
              <h3 className="text-xs text-gold uppercase tracking-[0.2em] mb-2">Bathroom</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{apt.bathroom}</p>
            </div>
            <div>
              <h3 className="text-xs text-gold uppercase tracking-[0.2em] mb-2">Kitchen</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{apt.kitchen}</p>
            </div>
            <div>
              <h3 className="text-xs text-gold uppercase tracking-[0.2em] mb-2">Living area</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{apt.living}</p>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xs text-gold uppercase tracking-[0.2em] mb-3">Parking</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{apt.parking}</p>
          </section>

          <section className="mb-8">
            <h3 className="text-xs text-gold uppercase tracking-[0.2em] mb-3">Amenities</h3>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-muted-foreground">
              {apt.amenities.map((am) => (
                <li key={am} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  {am}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10 border-t border-border/60 pt-6">
            <h3 className="text-xs text-gold uppercase tracking-[0.2em] mb-3">Quick details</h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
              {Object.entries(apt.quick).map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-border/40 py-1.5">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="font-medium text-foreground">{v}</span>
                </div>
              ))}
            </div>
          </section>

          <a
            href="/#booking"
            className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-full shadow-gold hover:shadow-elegant hover:scale-[1.02] transition-all duration-300 text-xs uppercase tracking-[0.22em]"
          >
            Book this apartment
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {apt.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${apt.title} ${i + 1}`}
              className="w-full h-64 lg:h-72 object-cover rounded-2xl shadow-soft"
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
          {apt.location && (
            <div className="mt-8">
              <ApartmentMap
                title={apt.title}
                address={apt.location.address}
                latitude={apt.location.latitude}
                longitude={apt.location.longitude}
              />
            </div>
          )}
          <div className="mt-8">
            <BookingForm apartmentTitle={apt.title} apartmentSlug={apt.slug} />
          </div>
        </div>
      </div>
    </main>
  );
}
