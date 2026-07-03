import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Apartments } from "@/components/site/Apartments";
import { Amenities } from "@/components/site/Amenities";
import { Gallery } from "@/components/site/Gallery";
import { Booking } from "@/components/site/Booking";
import { Footer } from "@/components/site/Footer";
import { useParallax, useReveal } from "@/components/site/useReveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useReveal();
  useParallax();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Apartments />
        <Amenities />
        <Gallery />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
