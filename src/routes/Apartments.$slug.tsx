import { createFileRoute, Link } from "@tanstack/react-router";
import apartments from "@/components/site/apartmentsData";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ApartmentDetail } from "@/components/site/ApartmentDetail";

export const Route = createFileRoute("/Apartments/$slug")({
  head: () => {
    const { slug } = Route.useParams();
    const apt = apartments.find((a) => a.slug === slug);
    
    if (!apt) {
      return {
        meta: [
          { title: "Apartment Not Found — Home Pestana Apartments" },
          { name: "description", content: "The apartment you're looking for could not be found." },
          { robots: "noindex" },
        ],
      };
    }

    const bedrooms = apt.quick.Bedrooms || "1";
    const bathrooms = apt.quick.Bathrooms || "1";
    
    return {
      meta: [
        { title: `${apt.title} — Home Pestana Apartments Lagos` },
        {
          name: "description",
          content: `${apt.short} Premium amenities include daily housekeeping, high-speed WiFi, 24/7 security, and concierge services. Book your stay today.`,
        },
        {
          name: "keywords",
          content: `${apt.title}, serviced apartment Lagos, ${bedrooms} bedroom apartment, luxury rental, short-term stay`,
        },
        { property: "og:title", content: `${apt.title} — Home Pestana Apartments` },
        { property: "og:description", content: apt.description },
        { property: "og:type", content: "property" },
        { property: "og:image", content: apt.images[0] },
        { property: "og:url", content: `https://homepestana.com/Apartments/${slug}` },
      ],
      links: [
        { rel: "canonical", href: `https://homepestana.com/Apartments/${slug}` },
      ],
    };
  },
  component: ApartmentPage,
});

function ApartmentPage() {
  const { slug } = Route.useParams();
  const apt = apartments.find((a) => a.slug === slug);

  if (apt) {
    // Add structured data for schema.org
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Apartment",
      name: apt.title,
      description: apt.description,
      image: apt.images,
      address: {
        "@type": "PostalAddress",
        streetAddress: apt.location?.address || "Lagos, Nigeria",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
      amenityFeature: apt.amenities.map((a) => ({ "@type": "Text", name: a })),
      numberOfBedrooms: apt.quick.Bedrooms,
      numberOfBathrooms: apt.quick.Bathrooms,
      petsAllowed: false,
    };

    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      {apt ? (
        <ApartmentDetail slug={slug} />
      ) : (
        <main className="max-w-4xl mx-auto py-32 px-6 text-center">
          <h1 className="font-serif text-3xl mb-4">Apartment not found</h1>
          <p className="text-muted-foreground mb-6">
            We couldn't find that residence. It may have been renamed or is no longer listed.
          </p>
          <Link to="/" className="gold-underline text-xs uppercase tracking-[0.25em] text-gold">
            ← Back to home
          </Link>
        </main>
      )}
      <Footer />
    </div>
  );
}

