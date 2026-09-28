import { site } from "../data/site";

export function buildCanonical(path) {
  const base = (site.domain || "").replace(/\/$/, "");
  const cleanPath = path === "/" ? "/" : (path || "").replace(/\/$/, "");
  return base ? `${base}${cleanPath}` : cleanPath;
}

export function destinationSeo(destination) {
  const name = destination.name || destination.title;
  const title = `${name} Tours & Experiences in Sri Lanka | ${site.brand}`;
  const description =
    destination.description ||
    destination.summary ||
    `Discover ${name} with ${site.legalName} through private tours, cultural experiences and flexible Sri Lanka travel itineraries.`;
  const canonical = buildCanonical(`/destinations/${destination.slug}`);

  return {
    title,
    description,
    canonical,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: buildCanonical("/") },
          { "@type": "ListItem", position: 2, name: "Destinations", item: buildCanonical("/destinations") },
          { "@type": "ListItem", position: 3, name: name, item: canonical }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        name: name,
        description,
        url: canonical,
        containedInPlace: {
          "@type": "Country",
          name: "Sri Lanka"
        }
      }
    ]
  };
}

export function packageSeo(pkg) {
  const name = pkg.name || pkg.title;
  const title = `${name} | Private Sri Lanka Tour Package | ${site.brand}`;
  const description =
    pkg.description ||
    `${pkg.days} Days private chauffeured tour package across Sri Lanka with ${site.legalName}.`;
  const canonical = buildCanonical(`/packages/${pkg.slug}`);

  return {
    title,
    description,
    canonical,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: buildCanonical("/") },
          { "@type": "ListItem", position: 2, name: "Tour Packages", item: buildCanonical("/packages") },
          { "@type": "ListItem", position: 3, name: name, item: canonical }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        name: name,
        description,
        url: canonical,
        provider: {
          "@type": "TravelAgency",
          name: site.legalName,
          url: buildCanonical("/")
        }
      }
    ]
  };
}