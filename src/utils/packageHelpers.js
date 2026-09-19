import { buildCanonical } from "./seoHelpers";
import { site } from "../data/site";

export function packageSeo(pkg) {
  const name = pkg.name || pkg.title;
  const title = `${name} | Tour Packages | ${site.brand}`;
  const description =
    pkg.description ||
    `${pkg.days || pkg.duration} tour package with ${site.brand}.`;
  const canonical = buildCanonical(`/packages/${pkg.slug}`);
  return { title, description, canonical };
}