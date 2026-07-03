import { createFileRoute } from "@tanstack/react-router";
import apartments from "@/components/site/apartmentsData";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/apartment-slug")({
  component: ApartmentPage,
});

function ApartmentPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const apt = apartments.find((a) => a.slug === slug);
  if (!apt) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <main className="max-w-4xl mx-auto py-24 px-6">Apartment not found</main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="max-w-5xl mx-auto py-20 px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h1 className="font-serif text-4xl mb-4">{apt.title}</h1>
            <p className="text-muted-foreground mb-6">{apt.description}</p>

            <section className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm text-gold uppercase mb-2">Bedrooms</h3>
                <p className="text-sm">{apt.bedrooms}</p>
              </div>
              <div>
                <h3 className="text-sm text-gold uppercase mb-2">Bathrooms</h3>
                <p className="text-sm">{apt.bathrooms}</p>
              </div>
              <div>
                <h3 className="text-sm text-gold uppercase mb-2">Kitchen</h3>
                <p className="text-sm">{apt.kitchen}</p>
              </div>
              <div>
                <h3 className="text-sm text-gold uppercase mb-2">Living</h3>
                <p className="text-sm">{apt.living}</p>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-gold uppercase text-sm mb-3">Amenities</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                {apt.amenities.map((am) => (
                  <li key={am}>• {am}</li>
                ))}
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-gold uppercase text-sm mb-3">Quick details</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                {Object.entries(apt.quick).map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <div className="text-foreground/80">{k}</div>
                    <div className="font-medium">{v}</div>
                  </div>
                ))}
              </div>
            </section>

            <a href="#booking" className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-5 py-3 rounded-full shadow-gold">Book this apartment</a>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-4">
              {apt.images.map((src, i) => (
                <img key={i} src={src} alt={`${apt.title} ${i + 1}`} className="w-full h-64 object-cover rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
