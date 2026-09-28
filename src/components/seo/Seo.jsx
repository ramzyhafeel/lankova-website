import { useEffect } from "react";
import { getSeoForPath, seo } from "../../data/seo";

function setMeta(name, content) {
  if (!content) return;
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setPropertyMeta(property, content) {
  if (!content) return;
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  if (!href) return;
  let link = document.querySelector(`link[rel="canonical"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function setJsonLd(id, json) {
  const existing = document.getElementById(id);
  if (!json || (Array.isArray(json) && json.length === 0)) {
    if (existing) existing.remove();
    return;
  }
  const script = existing || document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.text = JSON.stringify(json);
  if (!existing) document.head.appendChild(script);
}

export default function Seo({ path, override }) {
  useEffect(() => {
    const metaData = override || getSeoForPath(path);

    const title = metaData.title || seo.default.title;
    const description = metaData.description || seo.default.description;
    const canonical = metaData.canonical || seo.default.canonical;
    const robots = metaData.robots || "index, follow";
    const ogImage = metaData.ogImage || seo.default.ogImage;

    // Document title and primary SEO meta
    document.title = title;
    setMeta("description", description);
    setMeta("robots", robots);
    setCanonical(canonical);

    // OpenGraph
    setPropertyMeta("og:type", "website");
    setPropertyMeta("og:site_name", "Lankova Travel & Tours");
    setPropertyMeta("og:locale", "en_US");
    setPropertyMeta("og:title", title);
    setPropertyMeta("og:description", description);
    setPropertyMeta("og:url", canonical);
    setPropertyMeta("og:image", ogImage);
    setPropertyMeta("og:image:secure_url", ogImage);
    setPropertyMeta("og:image:type", "image/jpeg");
    setPropertyMeta("og:image:width", "1200");
    setPropertyMeta("og:image:height", "630");
    setPropertyMeta("og:image:alt", title);

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);
    setMeta("twitter:image:alt", title);

    // JSON-LD Structured Data
    const jsonLd = metaData.jsonLd || seo.default.jsonLd;
    setJsonLd("jsonld-route", jsonLd);
  }, [path, override]);

  return null;
}