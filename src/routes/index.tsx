import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Apartments } from "@/components/site/Apartments";
import { Amenities } from "@/components/site/Amenities";
import { Gallery } from "@/components/site/Gallery";
import { Booking } from "@/components/site/Booking";
import { Footer } from "@/components/site/Footer";
import { useParallax, useReveal } from "@/components/site/useReveal";
import { useEffect, useState } from "react";
import { ApartmentDetail } from "@/components/site/ApartmentDetail";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useReveal();
  useParallax();

  const [path, setPath] = useState(typeof window !== "undefined" ? window.location.pathname : "/");

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // if path matches /apartments/:slug render detail view
  const m = path.match(/^\/apartments\/([^/]+)\/?$/);
  if (m) {
    const slug = m[1];
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <ApartmentDetail slug={slug} />
        <Footer />
      </div>
    );
  }

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
