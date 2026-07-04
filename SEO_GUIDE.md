# SEO Setup Guide - Home Pestana Apartments

## What's Been Implemented

### ✅ Meta Tags & Social Media
- **Title Tags**: Unique, descriptive titles for each page
- **Meta Descriptions**: Compelling descriptions with keywords
- **Keywords**: Targeted search terms for apartments and location
- **Open Graph (OG) Tags**: For social media sharing (Facebook, LinkedIn, Slack)
- **Twitter Card**: For Twitter sharing with preview image
- **Canonical Tags**: Prevent duplicate content issues

### ✅ Site Structure
- **robots.txt** (`/robots.txt`) - Guides search engine crawlers
- **XML Sitemap** (`/sitemap.xml`) - Lists all pages for indexing
- **Heading Hierarchy** - Proper H1→H2→H3 structure
- **Internal Linking** - Navigation between related pages

### ✅ Structured Data
- **Schema.org Markup** - Machine-readable data for:
  - Apartment details (bedrooms, bathrooms, amenities)
  - Address information
  - Images and descriptions
- **Rich Results** - Google can display enhanced search snippets

### ✅ Technical SEO
- **Mobile Responsive** - Optimized for all devices
- **Fast Loading** - Optimized images and code splitting
- **Semantic HTML** - Proper heading and landmark tags
- **Theme Color** - Gold (#c9a961) for browser UI

## Next Steps for Maximum SEO Impact

### 1. Submit to Search Engines
```bash
# Google Search Console
https://search.google.com/search-console

# Bing Webmaster Tools
https://www.bing.com/webmasters
```

**Process:**
1. Go to Google Search Console
2. Click "Add property"
3. Enter: `https://homepestana.com`
4. Verify ownership via DNS record or HTML file
5. Submit your sitemap: `https://homepestana.com/sitemap.xml`

### 2. Update Domain & URLs
Replace these placeholder domains in the code:
- `homepestana.com` → your actual domain
- `homepestana.vercel.app` → your production URL

**Files to update:**
- `src/routes/__root.tsx` (line with og:url)
- `src/routes/Apartments.$slug.tsx` (canonical URLs)
- `src/routes/sitemap.xml.ts` (baseUrl)

### 3. Add Open Graph Images
For better social media sharing:

1. Create a hero image (1200×630px for OG)
2. Add to `/public/og-image.png`
3. Update `__root.tsx`:
   ```tsx
   { property: "og:image", content: "https://homepestana.com/og-image.png" }
   ```

### 4. Local Business Schema (Highly Recommended)
Add to `src/routes/__root.tsx` to appear in Google Maps:

```tsx
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Home Pestana Apartments",
  "image": "https://homepestana.com/logo.png",
  "description": "Luxury serviced apartments in Lagos",
  "telephone": "+234-XXX-XXXX-XXXX",
  "email": "contact@homepestana.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "...",
    "addressLocality": "Lagos",
    "addressCountry": "NG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 6.5244,
    "longitude": 3.3792
  }
}
</script>
```

### 5. Create Quality Content
Best practices:
- Blog posts about Lagos neighborhoods
- "Guide to Short-term Rentals"
- "Moving to Lagos? Here's what to expect"
- Guest house vs serviced apartment comparison

### 6. Build Backlinks
- Submit to property listing sites
- Local Lagos business directories
- Travel websites (Airbnb, Booking.com partnerships)
- Real estate blogs and forums

### 7. Monitor Performance
**Free Tools:**
- Google Search Console - tracks clicks, impressions, rankings
- Google Analytics 4 - visitor behavior
- Lighthouse - performance scores (built into Chrome DevTools)

**Freemium Tools:**
- SEMrush - keyword research, competitor analysis
- Moz - backlink tracking
- Ubersuggest - keyword opportunities

## Current SEO Checklist

- [x] Meta titles and descriptions
- [x] Keywords in page content
- [x] Open Graph tags
- [x] Canonical URLs
- [x] robots.txt
- [x] XML Sitemap
- [x] Schema markup (apartments)
- [x] Mobile responsive
- [x] Google Maps embedded
- [x] Internal links
- [ ] Submit to Google Search Console
- [ ] Add Local Business schema
- [ ] Create quality content
- [ ] Build backlinks
- [ ] Monitor with Analytics

## Quick Wins (Do First)

1. **Google Search Console** (5 min)
   - Add property
   - Submit sitemap
   - Check indexing status

2. **Update og:image** (10 min)
   - Add hero image to /public
   - Update meta tags

3. **Set up Google Analytics** (10 min)
   - Create account at google.com/analytics
   - Add tracking ID to HTML head

4. **Local Business schema** (15 min)
   - Add to __root.tsx
   - Include complete address and coordinates

---

**Need help?** Check Google's [SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
