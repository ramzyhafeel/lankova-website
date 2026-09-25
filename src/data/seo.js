import { site } from "./site";

const ogImage = `${site.domain}/images/lankova-social-preview.jpeg`;

export const seo = {
  default: {
    title: `${site.brand} | Private Sri Lanka Tours & Driver Transportation`,
    description:
      "Explore Sri Lanka with LANKOVA. Private tours, professional English-speaking drivers, airport transfers, car and van transportation, hotels, and customized Sri Lanka travel packages.",
    canonical: site.domain + "/",
    ogImage,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        name: site.legalName,
        alternateName: site.brand,
        url: site.domain,
        logo: site.domain + "/images/lankova-logo.png",
        image: ogImage,
        telephone: site.phone,
        email: site.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Colombo",
          addressRegion: "Western Province",
          addressCountry: "LK"
        },
        areaServed: {
          "@type": "Country",
          name: "Sri Lanka"
        },
        sameAs: [site.facebookUrl, site.instagramUrl, site.tripAdvisorUrl].filter(Boolean)
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: site.brand,
        url: site.domain,
        potentialAction: {
          "@type": "SearchAction",
          target: `${site.domain}/packages?search={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }
    ]
  },

  routes: {
    "/": {
      title: `${site.brand} | Private Sri Lanka Tours & Driver Transportation`,
      description:
        "Handcrafted private tours, dedicated chauffeur-guides, comfortable vehicle fleet, and tailor-made island journeys across Sri Lanka with LANKOVA.",
      canonical: site.domain + "/"
    },
    "/packages": {
      title: `Sri Lanka Tour Packages (3 to 14 Days) | ${site.brand}`,
      description:
        "Browse handcrafted Sri Lanka private tour itineraries. From 3-day cultural escapes to 14-day grand island explorations with your own private driver.",
      canonical: site.domain + "/packages"
    },
    "/destinations": {
      title: `Top Sri Lanka Destinations | Cultural Triangle, Hill Country & Beaches | ${site.brand}`,
      description:
        "Discover Sri Lanka's most iconic destinations: Sigiriya Rock, Ella's tea hills, Galle Fort, Kandy Tooth Relic, Yala safaris, and pristine coastal bays.",
      canonical: site.domain + "/destinations"
    },
    "/services": {
      title: `Private Tour Services & Chauffeur Transportation | ${site.brand}`,
      description:
        "Private chauffeur driver hire, Bandaranaike Airport transfers, custom Sri Lanka tour planning, and hotel-to-hotel private transportation.",
      canonical: site.domain + "/services"
    },
    "/transportation": {
      title: `Sri Lanka Private Driver & Vehicle Fleet Hire | ${site.brand}`,
      description:
        "Hire private air-conditioned cars, SUVs, and luxury vans with licensed English-speaking drivers. Dependable airport pickups and island-wide travel.",
      canonical: site.domain + "/transportation"
    },
    "/hotels": {
      title: `Hotels & Luxury Accommodations in Sri Lanka | ${site.brand}`,
      description:
        "Handpicked boutique resorts, colonial tea bungalows, and luxury beach villas included in your personalized Lankova Sri Lanka itinerary.",
      canonical: site.domain + "/hotels"
    },
    "/gallery": {
      title: `Sri Lanka Travel Moments & Visual Gallery | ${site.brand}`,
      description:
        "Explore scenic vistas, wildlife encounters, cultural landmarks, and authentic moments captured on Lankova private tours across Sri Lanka.",
      canonical: site.domain + "/gallery"
    },
    "/reviews": {
      title: `Traveler Reviews & Guest Feedback | ${site.brand}`,
      description:
        "Read genuine reviews and 5-star testimonials from international travelers who explored Sri Lanka with Lankova Travel & Tours.",
      canonical: site.domain + "/reviews"
    },
    "/about": {
      title: `About Lankova | Sri Lanka Private Travel Specialists`,
      description:
        "Learn about Lankova Travel & Tours: our dedication to authentic Sri Lankan hospitality, professional private chauffeurs, safety, and seamless journeys.",
      canonical: site.domain + "/about"
    },
    "/contact": {
      title: `Contact Lankova | Plan Your Private Sri Lanka Tour`,
      description:
        "Connect with our travel specialists via WhatsApp or email. Fast response, free custom itinerary design, and reliable travel advice.",
      canonical: site.domain + "/contact"
    },
    "/customize-tour": {
      title: `Customize Your Sri Lanka Tour | Interactive Trip Planner | ${site.brand}`,
      description:
        "Design your dream Sri Lanka itinerary with our interactive trip planner. Choose your service, dates, preferred destinations, comfort level, and get a tailored quote.",
      canonical: site.domain + "/customize-tour"
    }
  }
};

export default seo;