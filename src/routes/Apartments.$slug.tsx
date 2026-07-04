import { createFileRoute, Link } from "@tanstack/react-router";
import apartments from "@/components/site/apartmentsData";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ApartmentDetail } from "@/components/site/ApartmentDetail";

export const Route = createFileRoute("/Apartments/$slug")({
  component: ApartmentPage,
});

function ApartmentPage() {
  const { slug } = Route.useParams();
  const apt = apartments.find((a) => a.slug === slug);

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
