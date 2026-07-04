import { createAPIFileRoute } from '@tanstack/react-start/server';
import apartments from '@/components/site/apartmentsData';

export const APIRoute = createAPIFileRoute('/sitemap.xml')({
  GET: () => {
    const baseUrl = 'https://homepestana.com';
    
    // Main pages
    const mainPages = [
      { url: '/', changefreq: 'weekly', priority: '1.0', lastmod: new Date().toISOString() },
    ];

    // Apartment pages
    const apartmentPages = apartments.map((apt) => ({
      url: `/Apartments/${apt.slug}`,
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: new Date().toISOString(),
    }));

    const allPages = [...mainPages, ...apartmentPages];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    });
  },
});
