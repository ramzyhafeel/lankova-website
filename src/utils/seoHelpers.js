import { site } from "../data/site";

export function buildCanonical(path) {
  const base = (site.domain || "").replace(/\/$/, "");
  return base ? `${base}${path}` : path;
}

export function destinationSeo(destination) {
  const name = destination.name || destination.title;
  const title = `${name} | Destinations | ${site.brand}`;
  const description = destination.description || destination.summary || `Explore ${name} on a private tour with ${site.brand}.`;
  const canonical = buildCanonical(`/destinations`);

  return {
    title,
    description,
    canonical,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        name: name,
        description,
        url: canonical,
      },
    ],
  };
}

export function packageSeo(pkg) {
  const name = pkg.name || pkg.title;
  const title = `${name} | Tour Packages | ${site.brand}`;
  const description =
    pkg.description ||
    `${pkg.days} Days tour package across Sri Lanka with ${site.brand}.`;
  const canonical = buildCanonical(`/packages/${pkg.slug}`);

  return {
    title,
    description,
    canonical,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        name: name,
        description,
        url: canonical,
      },
    ],
  };
}