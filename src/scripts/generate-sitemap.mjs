import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function xmlEscape(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

async function main() {
  const projectRoot = path.resolve(__dirname, "../..");

  const siteMod = await import(pathToFileURL(path.join(projectRoot, "src/data/site.js")).href);
  const destMod = await import(pathToFileURL(path.join(projectRoot, "src/data/destinations.js")).href);
  const pkgMod = await import(pathToFileURL(path.join(projectRoot, "src/data/packages.js")).href);

  const domain = (siteMod.site?.domain || "https://lankova.vercel.app").replace(/\/$/, "");

  const staticRoutes = [
    "/",
    "/packages",
    "/destinations",
    "/services",
    "/transportation",
    "/hotels",
    "/gallery",
    "/reviews",
    "/about",
    "/contact",
    "/customize-tour",
  ];

  const destinationRoutes = (destMod.destinations || []).map((d) => `/destinations/${d.slug}`);
  const packageRoutes = (pkgMod.packages || []).map((p) => `/packages/${p.slug}`);

  const all = [...staticRoutes, ...destinationRoutes, ...packageRoutes];
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = all
    .map((r) => {
      const loc = `${domain}${r}`;
      return `  <url>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${r === "/" ? "1.0" : r === "/packages" || r === "/customize-tour" ? "0.95" : "0.85"}</priority>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  const outPath = path.join(projectRoot, "public", "sitemap.xml");
  fs.writeFileSync(outPath, xml, "utf8");
  console.log(`✅ sitemap.xml generated with ${all.length} URLs → ${outPath}`);
}

main().catch((e) => {
  console.error("❌ sitemap generation failed:", e);
  process.exit(1);
});