interface ApartmentMapProps {
  title: string;
  address: string;
  latitude: number;
  longitude: number;
}

export function ApartmentMap({ title, address, latitude, longitude }: ApartmentMapProps) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";
  
  // Create embed URL for Google Maps Embed API
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(address)}`;

  if (!apiKey) {
    return (
      <div className="w-full h-96 bg-secondary/30 rounded-2xl flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-2">Map not configured</p>
          <p className="text-xs text-muted-foreground/70">
            Get directions:{" "}
            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              {address}
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-4">
        <h3 className="text-xs text-gold uppercase tracking-[0.2em] mb-2">Location</h3>
        <p className="text-sm text-muted-foreground">{address}</p>
      </div>
      <iframe
        width="100%"
        height="384"
        style={{ border: 0, borderRadius: "1rem" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={embedUrl}
        title={`Map of ${title}`}
        className="shadow-soft"
      />
      <div className="mt-4 flex gap-3">
        <a
          href={`https://www.google.com/maps/search/${encodeURIComponent(address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary/60 text-foreground px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-xs uppercase tracking-[0.2em]"
        >
          View on Google Maps
        </a>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary/60 text-foreground px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-xs uppercase tracking-[0.2em]"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
}


