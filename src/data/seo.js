import { site } from "./site";

const domain = site.domain.replace(/\/$/, "");
const ogImage = `${domain}/images/lankova-social-preview.jpeg`;
const logoUrl = `${domain}/images/lankova-logo.png`;

// Shared Base JSON-LD schemas
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "TravelAgency"],
  "@id": `${domain}/#organization`,
  name: site.legalName,
  alternateName: site.brand,
  url: `${domain}/`,
  logo: logoUrl,
  image: ogImage,
  description: "Lankova Travel & Tours provides private Sri Lanka tours, tailor-made travel packages and driver transportation services.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "LK",
    addressLocality: "Sri Lanka"
  },
  areaServed: {
    "@type": "Country",
    name: "Sri Lanka"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${domain}/#website`,
  name: site.legalName,
  alternateName: site.brand,
  url: `${domain}/`,
  publisher: {
    "@id": `${domain}/#organization`
  }
};

export const seo = {
  default: {
    title: "Lankova Sri Lanka | Private Tours, Travel Packages & Drivers",
    description:
      "Explore Sri Lanka with Lankova Travel & Tours. Discover private tours, tailor-made travel packages, experienced drivers and unforgettable Sri Lankan experiences.",
    canonical: `${domain}/`,
    robots: "index, follow",
    ogImage,
    jsonLd: [organizationSchema, websiteSchema]
  },

  routes: {
    "/": {
      title: "Lankova Sri Lanka | Private Tours, Travel Packages & Drivers",
      description:
        "Explore Sri Lanka with Lankova Travel & Tours. Discover private tours, tailor-made travel packages, experienced drivers and unforgettable Sri Lankan experiences.",
      canonical: `${domain}/`,
      robots: "index, follow",
      ogImage,
      jsonLd: [organizationSchema, websiteSchema]
    },
    "/packages": {
      title: "Sri Lanka Tour Packages | Private & Tailor-Made Tours | Lankova",
      description:
        "Browse handcrafted Sri Lanka private tour packages from 3 to 14 days with Lankova Travel & Tours. Dedicated air-conditioned vehicles and licensed chauffeur guides.",
      canonical: `${domain}/packages`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Tour Packages", item: `${domain}/packages` }
          ]
        }
      ]
    },
    "/destinations": {
      title: "Sri Lanka Destinations | Explore Top Places to Visit | Lankova",
      description:
        "Discover Sri Lanka's most iconic travel destinations with Lankova. Explore Sigiriya, Kandy, Ella, Yala, Galle, and pristine tropical beaches on private tours.",
      canonical: `${domain}/destinations`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Destinations", item: `${domain}/destinations` }
          ]
        }
      ]
    },
    "/services": {
      title: "Private Tour Services & Chauffeur Transportation | Lankova Sri Lanka",
      description:
        "Private chauffeur driver hire, Bandaranaike Airport transfers, custom Sri Lanka tour planning, and intercity hotel transfers with Lankova Travel & Tours.",
      canonical: `${domain}/services`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Services", item: `${domain}/services` }
          ]
        }
      ]
    },
    "/transportation": {
      title: "Sri Lanka Private Driver & Vehicle Fleet Hire | Lankova",
      description:
        "Hire private air-conditioned cars, SUVs, and luxury vans with licensed English-speaking drivers in Sri Lanka. Reliable airport pickups and island-wide travel.",
      canonical: `${domain}/transportation`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Transportation", item: `${domain}/transportation` }
          ]
        }
      ]
    },
    "/hotels": {
      title: "Hotels & Accommodations in Sri Lanka | Lankova Travel",
      description:
        "Handpicked boutique resorts, colonial tea bungalows, and luxury beach villas included in your personalized Lankova Sri Lanka private tour itinerary.",
      canonical: `${domain}/hotels`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Hotels", item: `${domain}/hotels` }
          ]
        }
      ]
    },
    "/gallery": {
      title: "Sri Lanka Travel Moments & Photo Gallery | Lankova",
      description:
        "Explore scenic vistas, wildlife encounters, cultural landmarks, and authentic moments captured on Lankova private tours across Sri Lanka.",
      canonical: `${domain}/gallery`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Gallery", item: `${domain}/gallery` }
          ]
        }
      ]
    },
    "/reviews": {
      title: "Traveler Reviews & Guest Feedback | Lankova Sri Lanka",
      description:
        "Read genuine reviews and testimonials from international travelers who explored Sri Lanka with Lankova Travel & Tours private chauffeur services.",
      canonical: `${domain}/reviews`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Reviews", item: `${domain}/reviews` }
          ]
        }
      ]
    },
    "/about": {
      title: "About Lankova | Sri Lanka Travel & Private Tours",
      description:
        "Learn about Lankova Travel & Tours: our dedication to authentic Sri Lankan hospitality, licensed private chauffeur guides, safety, and seamless journeys.",
      canonical: `${domain}/about`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "About Us", item: `${domain}/about` }
          ]
        }
      ]
    },
    "/contact": {
      title: "Contact Lankova | Plan Your Sri Lanka Tour",
      description:
        "Connect with our Sri Lanka travel specialists via WhatsApp or email. Fast response, free custom itinerary design, and reliable travel advice.",
      canonical: `${domain}/contact`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Contact", item: `${domain}/contact` }
          ]
        }
      ]
    },
    "/customize-tour": {
      title: "Customize Your Sri Lanka Tour | Interactive Trip Planner | Lankova",
      description:
        "Design your dream Sri Lanka itinerary with our interactive trip planner. Choose your service, dates, preferred destinations, comfort level, and get a tailored quote.",
      canonical: `${domain}/customize-tour`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Customize Tour", item: `${domain}/customize-tour` }
          ]
        }
      ]
    },

    // Destination Specific Routes
    "/destinations/sigiriya": {
      title: "Sigiriya Tours & Experiences in Sri Lanka | Lankova",
      description:
        "Discover Sigiriya with Lankova through private tours, cultural experiences and flexible Sri Lanka travel itineraries.",
      canonical: `${domain}/destinations/sigiriya`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Destinations", item: `${domain}/destinations` },
            { "@type": "ListItem", position: 3, name: "Sigiriya", item: `${domain}/destinations/sigiriya` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Sigiriya",
          description: "The legendary Lion Rock Fortress — a 5th-century UNESCO World Heritage wonder rising above royal water gardens.",
          url: `${domain}/destinations/sigiriya`,
          containedInPlace: { "@type": "Country", name: "Sri Lanka" }
        }
      ]
    },
    "/destinations/kandy": {
      title: "Kandy Tours & Cultural Experiences | Lankova Sri Lanka",
      description:
        "Explore Kandy with Lankova through private Sri Lanka tours, cultural attractions and personalized travel experiences.",
      canonical: `${domain}/destinations/kandy`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Destinations", item: `${domain}/destinations` },
            { "@type": "ListItem", position: 3, name: "Kandy", item: `${domain}/destinations/kandy` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Kandy",
          description: "The last royal kingdom of Sri Lanka — home to the sacred Temple of the Tooth Relic and scenic mountain lake.",
          url: `${domain}/destinations/kandy`,
          containedInPlace: { "@type": "Country", name: "Sri Lanka" }
        }
      ]
    },
    "/destinations/ella": {
      title: "Ella Tours & Hill Country Experiences | Lankova Sri Lanka",
      description:
        "Explore Ella, Sri Lanka with private tours, scenic journeys and tailor-made travel experiences from Lankova.",
      canonical: `${domain}/destinations/ella`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Destinations", item: `${domain}/destinations` },
            { "@type": "ListItem", position: 3, name: "Ella", item: `${domain}/destinations/ella` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Ella",
          description: "Misty peaks, the world-famous Nine Arch Bridge railway viaduct, and scenic hikes up Little Adam's Peak.",
          url: `${domain}/destinations/ella`,
          containedInPlace: { "@type": "Country", name: "Sri Lanka" }
        }
      ]
    },
    "/destinations/colombo": {
      title: "Colombo Tours & Private Travel Experiences | Lankova",
      description:
        "Explore Colombo with Lankova through flexible private tours, local experiences and personalized Sri Lanka travel.",
      canonical: `${domain}/destinations/colombo`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Destinations", item: `${domain}/destinations` },
            { "@type": "ListItem", position: 3, name: "Colombo", item: `${domain}/destinations/colombo` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Colombo",
          description: "The vibrant capital city of Sri Lanka — a blend of colonial architecture, modern dining, and oceanfront promenades.",
          url: `${domain}/destinations/colombo`,
          containedInPlace: { "@type": "Country", name: "Sri Lanka" }
        }
      ]
    },
    "/destinations/negombo": {
      title: "Negombo Tours & Beach Experiences | Lankova Sri Lanka",
      description:
        "Explore Negombo with Lankova through private coastal tours, airport transfers, seafood culinary experiences and tailored Sri Lanka itineraries.",
      canonical: `${domain}/destinations/negombo`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Destinations", item: `${domain}/destinations` },
            { "@type": "ListItem", position: 3, name: "Negombo", item: `${domain}/destinations/negombo` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Negombo",
          description: "A laid-back beach haven near CMB airport, renowned for Dutch colonial canals, fresh seafood, and golden shores.",
          url: `${domain}/destinations/negombo`,
          containedInPlace: { "@type": "Country", name: "Sri Lanka" }
        }
      ]
    },
    "/destinations/dambulla": {
      title: "Dambulla Tours & Cave Temple Experiences | Lankova Sri Lanka",
      description:
        "Discover Dambulla with Lankova through private tours, ancient cave temple explorations and cultural triangle travel packages.",
      canonical: `${domain}/destinations/dambulla`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Destinations", item: `${domain}/destinations` },
            { "@type": "ListItem", position: 3, name: "Dambulla", item: `${domain}/destinations/dambulla` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Dambulla",
          description: "Home to the magnificent UNESCO Royal Rock Cave Temple complex adorned with ancient Buddha statues and murals.",
          url: `${domain}/destinations/dambulla`,
          containedInPlace: { "@type": "Country", name: "Sri Lanka" }
        }
      ]
    },
    "/destinations/nuwara-eliya": {
      title: "Nuwara Eliya Tours & Tea Country Experiences | Lankova Sri Lanka",
      description:
        "Explore Nuwara Eliya with Lankova through private hill country tours, tea estate walks, waterfall excursions and scenic Sri Lanka travel.",
      canonical: `${domain}/destinations/nuwara-eliya`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Destinations", item: `${domain}/destinations` },
            { "@type": "ListItem", position: 3, name: "Nuwara Eliya", item: `${domain}/destinations/nuwara-eliya` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Nuwara Eliya",
          description: "Little England — misty emerald tea plantations, cascading waterfalls, cool mountain air, and colonial bungalows.",
          url: `${domain}/destinations/nuwara-eliya`,
          containedInPlace: { "@type": "Country", name: "Sri Lanka" }
        }
      ]
    },
    "/destinations/yala": {
      title: "Yala Safari Tours & Wildlife Experiences | Lankova Sri Lanka",
      description:
        "Experience Yala National Park with Lankova through private safari tours, leopard tracking excursions and custom Sri Lanka wildlife packages.",
      canonical: `${domain}/destinations/yala`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Destinations", item: `${domain}/destinations` },
            { "@type": "ListItem", position: 3, name: "Yala", item: `${domain}/destinations/yala` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Yala",
          description: "Sri Lanka's premier safari destination — home to dense leopard populations, wild elephant herds, and exotic birdlife.",
          url: `${domain}/destinations/yala`,
          containedInPlace: { "@type": "Country", name: "Sri Lanka" }
        }
      ]
    },
    "/destinations/mirissa": {
      title: "Mirissa Tours & Whale Watching Experiences | Lankova Sri Lanka",
      description:
        "Discover Mirissa with Lankova through private coastal tours, ocean whale watching safaris and relaxed southern Sri Lanka holiday itineraries.",
      canonical: `${domain}/destinations/mirissa`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Destinations", item: `${domain}/destinations` },
            { "@type": "ListItem", position: 3, name: "Mirissa", item: `${domain}/destinations/mirissa` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Mirissa",
          description: "Blue whale watching safaris, picturesque palm-fringed sandy bays, and Coconut Tree Hill sunsets.",
          url: `${domain}/destinations/mirissa`,
          containedInPlace: { "@type": "Country", name: "Sri Lanka" }
        }
      ]
    },
    "/destinations/galle": {
      title: "Galle Fort Tours & Heritage Experiences | Lankova Sri Lanka",
      description:
        "Explore historic Galle Fort with Lankova through private walking tours, colonial heritage journeys and southern coast travel packages.",
      canonical: `${domain}/destinations/galle`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Destinations", item: `${domain}/destinations` },
            { "@type": "ListItem", position: 3, name: "Galle", item: `${domain}/destinations/galle` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Galle",
          description: "A historic 17th-century UNESCO Dutch Fort city featuring cobblestone alleyways, boutique cafes, and coastal ramparts.",
          url: `${domain}/destinations/galle`,
          containedInPlace: { "@type": "Country", name: "Sri Lanka" }
        }
      ]
    },
    "/destinations/bentota": {
      title: "Bentota Tours & River Safari Experiences | Lankova Sri Lanka",
      description:
        "Experience Bentota with Lankova through private beach tours, Madu River mangrove boat safaris and customized Sri Lanka coastal holidays.",
      canonical: `${domain}/destinations/bentota`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Destinations", item: `${domain}/destinations` },
            { "@type": "ListItem", position: 3, name: "Bentota", item: `${domain}/destinations/bentota` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Bentota",
          description: "Golden sand beach resorts, water sports, and tranquil mangrove boat safaris along the Madu River.",
          url: `${domain}/destinations/bentota`,
          containedInPlace: { "@type": "Country", name: "Sri Lanka" }
        }
      ]
    },
    "/destinations/trincomalee": {
      title: "Trincomalee Tours & East Coast Experiences | Lankova Sri Lanka",
      description:
        "Discover Trincomalee with Lankova through private tours, Swami Rock temple visits, Pigeon Island excursions and pristine east coast travel.",
      canonical: `${domain}/destinations/trincomalee`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Destinations", item: `${domain}/destinations` },
            { "@type": "ListItem", position: 3, name: "Trincomalee", item: `${domain}/destinations/trincomalee` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Trincomalee",
          description: "Swami Rock cliffside temple, Pigeon Island national marine park coral reefs, and calm turquoise waters.",
          url: `${domain}/destinations/trincomalee`,
          containedInPlace: { "@type": "Country", name: "Sri Lanka" }
        }
      ]
    },
    "/destinations/anuradhapura": {
      title: "Anuradhapura Tours & Ancient Kingdom Experiences | Lankova Sri Lanka",
      description:
        "Explore sacred Anuradhapura with Lankova through private heritage tours, ancient stupa visits and spiritual Sri Lanka cultural journeys.",
      canonical: `${domain}/destinations/anuradhapura`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Destinations", item: `${domain}/destinations` },
            { "@type": "ListItem", position: 3, name: "Anuradhapura", item: `${domain}/destinations/anuradhapura` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Anuradhapura",
          description: "Sri Lanka's first sacred ancient capital — millennia-old towering stupas and the sacred Jaya Sri Maha Bodhi tree.",
          url: `${domain}/destinations/anuradhapura`,
          containedInPlace: { "@type": "Country", name: "Sri Lanka" }
        }
      ]
    },
    "/destinations/polonnaruwa": {
      title: "Polonnaruwa Tours & Medieval Heritage Experiences | Lankova Sri Lanka",
      description:
        "Discover medieval Polonnaruwa with Lankova through private tours, Gal Vihara stone monument visits and cultural triangle itineraries.",
      canonical: `${domain}/destinations/polonnaruwa`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Destinations", item: `${domain}/destinations` },
            { "@type": "ListItem", position: 3, name: "Polonnaruwa", item: `${domain}/destinations/polonnaruwa` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Polonnaruwa",
          description: "The medieval royal capital of Sri Lanka featuring monumental stone-carved Buddha sculptures at Gal Vihara.",
          url: `${domain}/destinations/polonnaruwa`,
          containedInPlace: { "@type": "Country", name: "Sri Lanka" }
        }
      ]
    },
    "/destinations/arugam-bay": {
      title: "Arugam Bay Tours & Surf Experiences | Lankova Sri Lanka",
      description:
        "Experience Arugam Bay with Lankova through private tours, world-class surf adventures and relaxed east coast Sri Lanka travel packages.",
      canonical: `${domain}/destinations/arugam-bay`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Destinations", item: `${domain}/destinations` },
            { "@type": "ListItem", position: 3, name: "Arugam Bay", item: `${domain}/destinations/arugam-bay` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Arugam Bay",
          description: "A world-renowned surf destination on the eastern coastline featuring golden bays and laid-back coastal charm.",
          url: `${domain}/destinations/arugam-bay`,
          containedInPlace: { "@type": "Country", name: "Sri Lanka" }
        }
      ]
    },

    // Package Specific Routes
    "/packages/3-day-sri-lanka": {
      title: "3-Day Sri Lanka Cultural Tour Package | Private Driver | Lankova",
      description:
        "Explore Sigiriya, Dambulla and Kandy on a 3-day private Sri Lanka tour with Lankova. Includes dedicated vehicle, licensed chauffeur guide and custom pacing.",
      canonical: `${domain}/packages/3-day-sri-lanka`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Tour Packages", item: `${domain}/packages` },
            { "@type": "ListItem", position: 3, name: "3 Days Sri Lanka Tour", item: `${domain}/packages/3-day-sri-lanka` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "3 Days Sri Lanka Tour",
          description: "A compact introduction to Sri Lanka's cultural triangle. Visit Sigiriya Rock, Dambulla Cave Temple, and Kandy with your private driver.",
          url: `${domain}/packages/3-day-sri-lanka`,
          provider: { "@type": "TravelAgency", name: site.legalName, url: `${domain}/` }
        }
      ]
    },
    "/packages/4-day-sri-lanka": {
      title: "4-Day Sri Lanka Tour Package | Cultural Triangle & Kandy | Lankova",
      description:
        "Discover Sri Lanka in 4 days with Lankova. Private chauffeured tour covering Negombo, Sigiriya Rock, Dambulla Cave Temple, Kandy and Colombo.",
      canonical: `${domain}/packages/4-day-sri-lanka`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Tour Packages", item: `${domain}/packages` },
            { "@type": "ListItem", position: 3, name: "4 Days Sri Lanka Tour", item: `${domain}/packages/4-day-sri-lanka` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "4 Days Sri Lanka Tour",
          description: "An extended cultural and nature itinerary covering Negombo, Sigiriya, Dambulla, Kandy and Colombo in private vehicle comfort.",
          url: `${domain}/packages/4-day-sri-lanka`,
          provider: { "@type": "TravelAgency", name: site.legalName, url: `${domain}/` }
        }
      ]
    },
    "/packages/5-day-sri-lanka": {
      title: "5-Day Sri Lanka Highlights Tour Package | Private Chauffeur | Lankova",
      description:
        "Experience Sri Lanka's top highlights in 5 days with Lankova. Private tour featuring Sigiriya, Kandy, tea plantations in Nuwara Eliya and scenic waterfalls.",
      canonical: `${domain}/packages/5-day-sri-lanka`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Tour Packages", item: `${domain}/packages` },
            { "@type": "ListItem", position: 3, name: "5 Days Sri Lanka Tour", item: `${domain}/packages/5-day-sri-lanka` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "5 Days Sri Lanka Tour",
          description: "Travel from the ancient rock citadel of Sigiriya up into misty tea estates of Nuwara Eliya with a private chauffeur guide.",
          url: `${domain}/packages/5-day-sri-lanka`,
          provider: { "@type": "TravelAgency", name: site.legalName, url: `${domain}/` }
        }
      ]
    },
    "/packages/6-day-sri-lanka": {
      title: "6-Day Sri Lanka Tour Package | Culture, Tea Country & Wildlife | Lankova",
      description:
        "A comprehensive 6-day private Sri Lanka itinerary by Lankova. Travel in air-conditioned comfort to Sigiriya, Kandy, Ella and Yala National Park safari.",
      canonical: `${domain}/packages/6-day-sri-lanka`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Tour Packages", item: `${domain}/packages` },
            { "@type": "ListItem", position: 3, name: "6 Days Sri Lanka Tour", item: `${domain}/packages/6-day-sri-lanka` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "6 Days Sri Lanka Tour",
          description: "6 days connecting Sri Lanka's cultural triangle, tea country in Ella, and thrilling leopard safari in Yala National Park.",
          url: `${domain}/packages/6-day-sri-lanka`,
          provider: { "@type": "TravelAgency", name: site.legalName, url: `${domain}/` }
        }
      ]
    },
    "/packages/7-day-sri-lanka": {
      title: "7-Day Classic Sri Lanka Tour Package | Private Island Journey | Lankova",
      description:
        "The ultimate 7-day Sri Lanka holiday package with Lankova. Explore Sigiriya, Kandy, Nuwara Eliya tea hills, Ella train ride, Yala safari and Galle coast.",
      canonical: `${domain}/packages/7-day-sri-lanka`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Tour Packages", item: `${domain}/packages` },
            { "@type": "ListItem", position: 3, name: "7 Days Sri Lanka Tour", item: `${domain}/packages/7-day-sri-lanka` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "7 Days Sri Lanka Tour",
          description: "Our signature 7-day classic Ceylon journey covering ancient culture, highland tea plantations, wildlife safari, and coastal heritage.",
          url: `${domain}/packages/7-day-sri-lanka`,
          provider: { "@type": "TravelAgency", name: site.legalName, url: `${domain}/` }
        }
      ]
    },
    "/packages/8-day-sri-lanka": {
      title: "8-Day Sri Lanka Discovery Tour Package | Tailor-Made Travel | Lankova",
      description:
        "8-day private chauffeured holiday across Sri Lanka with Lankova. Ancient citadels, scenic hill country railway journeys, wildlife safaris and golden beaches.",
      canonical: `${domain}/packages/8-day-sri-lanka`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Tour Packages", item: `${domain}/packages` },
            { "@type": "ListItem", position: 3, name: "8 Days Sri Lanka Tour", item: `${domain}/packages/8-day-sri-lanka` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "8 Days Sri Lanka Tour",
          description: "An unhurried 8-day tour blending heritage citadels, the scenic Ella train, national park safaris, and beach relaxation.",
          url: `${domain}/packages/8-day-sri-lanka`,
          provider: { "@type": "TravelAgency", name: site.legalName, url: `${domain}/` }
        }
      ]
    },
    "/packages/9-day-sri-lanka": {
      title: "9-Day Sri Lanka Explorer Tour Package | Private Chauffeur | Lankova",
      description:
        "Immerse in Sri Lanka on a 9-day private tour with Lankova. Experience UNESCO heritage sites, central tea country, wildlife encounters and tropical coastal relaxation.",
      canonical: `${domain}/packages/9-day-sri-lanka`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Tour Packages", item: `${domain}/packages` },
            { "@type": "ListItem", position: 3, name: "9 Days Sri Lanka Tour", item: `${domain}/packages/9-day-sri-lanka` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "9 Days Sri Lanka Tour",
          description: "Discover Sri Lanka in depth across 9 days with private transportation, scenic train passage, wildlife, and coastal towns.",
          url: `${domain}/packages/9-day-sri-lanka`,
          provider: { "@type": "TravelAgency", name: site.legalName, url: `${domain}/` }
        }
      ]
    },
    "/packages/10-day-sri-lanka": {
      title: "10-Day Grand Sri Lanka Tour Package | Private Driver & Tour | Lankova",
      description:
        "A rich 10-day private Sri Lanka holiday with Lankova. Cultural Triangle, Kandy, Ella, Yala safari, Mirissa whale watching and Galle Fort with dedicated chauffeur.",
      canonical: `${domain}/packages/10-day-sri-lanka`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Tour Packages", item: `${domain}/packages` },
            { "@type": "ListItem", position: 3, name: "10 Days Sri Lanka Tour", item: `${domain}/packages/10-day-sri-lanka` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "10 Days Sri Lanka Tour",
          description: "Experience the ultimate Sri Lankan journey across 10 memorable days with dedicated private vehicle and chauffeur guide.",
          url: `${domain}/packages/10-day-sri-lanka`,
          provider: { "@type": "TravelAgency", name: site.legalName, url: `${domain}/` }
        }
      ]
    },
    "/packages/14-day-sri-lanka": {
      title: "14-Day Grand Island Expedition | Complete Sri Lanka Tour | Lankova",
      description:
        "The complete two-week private Sri Lanka journey with Lankova. Explore ancient capitals, tea plantations, wildlife sanctuaries and serene beaches at your own pace.",
      canonical: `${domain}/packages/14-day-sri-lanka`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Tour Packages", item: `${domain}/packages` },
            { "@type": "ListItem", position: 3, name: "14 Days Sri Lanka Tour", item: `${domain}/packages/14-day-sri-lanka` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "14 Days Sri Lanka Tour",
          description: "Two weeks of leisurely island exploration covering every essential Sri Lankan destination with private vehicle and driver.",
          url: `${domain}/packages/14-day-sri-lanka`,
          provider: { "@type": "TravelAgency", name: site.legalName, url: `${domain}/` }
        }
      ]
    },
    "/packages/cultural-sri-lanka": {
      title: "Cultural Sri Lanka Tour Package | UNESCO Heritage Journey | Lankova",
      description:
        "6-day cultural immersion tour across Sri Lanka's sacred kingdoms. Visit Anuradhapura, Polonnaruwa, Sigiriya, Dambulla and Kandy with a private chauffeur guide.",
      canonical: `${domain}/packages/cultural-sri-lanka`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Tour Packages", item: `${domain}/packages` },
            { "@type": "ListItem", position: 3, name: "Cultural Sri Lanka", item: `${domain}/packages/cultural-sri-lanka` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "Cultural Sri Lanka",
          description: "Immerse in millennia of history across Sri Lanka's sacred UNESCO World Heritage sites with a licensed chauffeur guide.",
          url: `${domain}/packages/cultural-sri-lanka`,
          provider: { "@type": "TravelAgency", name: site.legalName, url: `${domain}/` }
        }
      ]
    },
    "/packages/ayurveda-wellness": {
      title: "Ayurveda & Wellness Sri Lanka Tour Package | Rejuvenation | Lankova",
      description:
        "Rebalance mind and body with a 7-day private Ayurveda and wellness retreat in Sri Lanka. Holistic treatments, herbal baths and serene natural sanctuaries.",
      canonical: `${domain}/packages/ayurveda-wellness`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Tour Packages", item: `${domain}/packages` },
            { "@type": "ListItem", position: 3, name: "Ayurveda & Wellness", item: `${domain}/packages/ayurveda-wellness` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "Ayurveda & Wellness",
          description: "Holistic wellness journey in Sri Lanka featuring ancient Ayurvedic treatments, herbal steam baths, yoga, and peaceful retreats.",
          url: `${domain}/packages/ayurveda-wellness`,
          provider: { "@type": "TravelAgency", name: site.legalName, url: `${domain}/` }
        }
      ]
    },
    "/packages/wild-sri-lanka": {
      title: "Wild Sri Lanka Safari Tour Package | Wildlife & National Parks | Lankova",
      description:
        "7-day private wildlife safari tour across Sri Lanka with Lankova. Spot leopards in Yala, wild elephant gatherings in Udawalawe and blue whales in Mirissa.",
      canonical: `${domain}/packages/wild-sri-lanka`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Tour Packages", item: `${domain}/packages` },
            { "@type": "ListItem", position: 3, name: "Wild Sri Lanka", item: `${domain}/packages/wild-sri-lanka` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "Wild Sri Lanka",
          description: "A premier wildlife safari holiday encountering leopards in Yala, Asian elephant herds, and oceanic blue whales.",
          url: `${domain}/packages/wild-sri-lanka`,
          provider: { "@type": "TravelAgency", name: site.legalName, url: `${domain}/` }
        }
      ]
    },
    "/packages/beach-escape": {
      title: "Sri Lanka Beach Escape Tour Package | Tropical Coastline | Lankova",
      description:
        "5-day relaxing private beach holiday along Sri Lanka's tropical southern coast. Bentota, Mirissa and Galle with dedicated private driver transportation.",
      canonical: `${domain}/packages/beach-escape`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Tour Packages", item: `${domain}/packages` },
            { "@type": "ListItem", position: 3, name: "Beach Escape", item: `${domain}/packages/beach-escape` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "Beach Escape",
          description: "A restorative 5-day escape along the southern coast of Sri Lanka with sun, surf, river boat safaris, and historic coastal ramparts.",
          url: `${domain}/packages/beach-escape`,
          provider: { "@type": "TravelAgency", name: site.legalName, url: `${domain}/` }
        }
      ]
    },
    "/packages/honeymoon-sri-lanka": {
      title: "Romantic Sri Lanka Honeymoon Tour Package | Private Luxury | Lankova",
      description:
        "8-day romantic private honeymoon itinerary in Sri Lanka with Lankova. Boutique hill country villas, private candlelit dinners, scenic train rides and secluded beaches.",
      canonical: `${domain}/packages/honeymoon-sri-lanka`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Tour Packages", item: `${domain}/packages` },
            { "@type": "ListItem", position: 3, name: "Honeymoon Sri Lanka", item: `${domain}/packages/honeymoon-sri-lanka` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "Honeymoon Sri Lanka",
          description: "An unforgettable romantic holiday with boutique accommodations, mountain vistas, scenic train journeys, and candlelit seaside dinners.",
          url: `${domain}/packages/honeymoon-sri-lanka`,
          provider: { "@type": "TravelAgency", name: site.legalName, url: `${domain}/` }
        }
      ]
    },
    "/packages/family-adventure": {
      title: "Sri Lanka Family Adventure Tour Package | Tailor-Made Family Holiday | Lankova",
      description:
        "8-day family-friendly private Sri Lanka tour with Lankova. Spacious touring van, elephant encounters, scenic nature walks and gentle beach days for all ages.",
      canonical: `${domain}/packages/family-adventure`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Tour Packages", item: `${domain}/packages` },
            { "@type": "ListItem", position: 3, name: "Family Adventure", item: `${domain}/packages/family-adventure` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "Family Adventure",
          description: "A safe, fun, and comfortable family itinerary across Sri Lanka with private air-conditioned touring van and thoughtful pacing.",
          url: `${domain}/packages/family-adventure`,
          provider: { "@type": "TravelAgency", name: site.legalName, url: `${domain}/` }
        }
      ]
    },
    "/packages/sri-lanka-highlights": {
      title: "Sri Lanka Highlights Tour Package | Best of Island Travel | Lankova",
      description:
        "10-day comprehensive private highlights tour of Sri Lanka with Lankova. Sigiriya, Kandy, Nuwara Eliya, Ella, Yala safari and southern coastal fortresses.",
      canonical: `${domain}/packages/sri-lanka-highlights`,
      robots: "index, follow",
      ogImage,
      jsonLd: [
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
            { "@type": "ListItem", position: 2, name: "Tour Packages", item: `${domain}/packages` },
            { "@type": "ListItem", position: 3, name: "Sri Lanka Highlights", item: `${domain}/packages/sri-lanka-highlights` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "Sri Lanka Highlights",
          description: "The complete best-of-Sri Lanka experience in 10 chauffeured days: ancient wonders, tea hills, wildlife safari, and coastal heritage.",
          url: `${domain}/packages/sri-lanka-highlights`,
          provider: { "@type": "TravelAgency", name: site.legalName, url: `${domain}/` }
        }
      ]
    }
  }
};

/**
 * Helper to retrieve SEO configuration for any path
 */
export function getSeoForPath(pathname) {
  const cleanPath = (pathname || "/").replace(/\/$/, "") || "/";

  // Exact match
  if (seo.routes[cleanPath]) {
    return seo.routes[cleanPath];
  }

  // Fallback for 404 / unknown pages
  return {
    title: "Page Not Found | Lankova Sri Lanka",
    description: "The page you requested could not be found. Explore private Sri Lanka tours and tailor-made travel packages with Lankova Travel & Tours.",
    canonical: `${domain}/`,
    robots: "noindex, follow",
    ogImage,
    jsonLd: [organizationSchema]
  };
}

export default seo;