import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { destinations, getDestination } from "../data/destinations";
import { packages } from "../data/packages";
import { site } from "../data/site";
import PageHero from "../components/ui/PageHero";
import PackageCard from "../components/ui/PackageCard";
import { createWhatsAppLink } from "../lib/whatsapp";
import { MapPin, Compass, ArrowRight, ArrowLeft } from "lucide-react";

export default function DestinationDetails() {
  const { slug } = useParams();
  const nav = useNavigate();

  const destination = useMemo(() => getDestination(slug), [slug]);

  // Find tour packages that visit this destination
  const matchingPackages = useMemo(() => {
    if (!destination) return [];
    const term = destination.name.toLowerCase();
    const matches = packages.filter((p) =>
      p.destinations.some((d) => d.toLowerCase().includes(term)) ||
      p.route.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term)
    );
    return matches.length > 0 ? matches : packages.slice(0, 3);
  }, [destination]);

  // Nearby & related destinations to explore
  const relatedDestinations = useMemo(() => {
    if (!destination) return [];
    const sameRegion = destinations.filter(
      (d) => d.slug !== destination.slug && d.region === destination.region
    );
    const others = destinations.filter(
      (d) => d.slug !== destination.slug && d.region !== destination.region
    );
    return [...sameRegion, ...others].slice(0, 3);
  }, [destination]);

  if (!destination) {
    return (
      <div className="py-32 text-center bg-ivory-100 min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h2 className="font-serif text-3xl font-bold text-forest-950 mb-2">Destination Not Found</h2>
        <p className="text-forest-950/60 text-sm mb-6">The requested destination is unavailable.</p>
        <button
          className="rounded-full bg-forest-950 px-7 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-gold-500 hover:text-forest-950 transition-colors"
          onClick={() => nav("/destinations")}
        >
          Browse All Destinations
        </button>
      </div>
    );
  }

  const waHref = createWhatsAppLink(
    `Hello ${site.legalName}, I am interested in visiting ${destination.name}. Could you please help me include it in a private custom Sri Lanka tour?`
  );

  return (
    <div className="bg-ivory-100">
      <PageHero
        eyebrow={`Destination Guide • ${destination.region}, Sri Lanka`}
        title={`${destination.name} Tours & Experiences`}
        subtitle={destination.description}
        image={destination.image}
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-2 text-xs text-forest-950/70 font-medium">
              <Link to="/" className="hover:text-gold-600 transition-colors">Home</Link>
              <span>&bull;</span>
              <Link to="/destinations" className="hover:text-gold-600 transition-colors">Destinations</Link>
              <span>&bull;</span>
              <span className="text-forest-950 font-semibold">{destination.name}</span>
            </div>

            <Link
              to="/destinations"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-700 hover:text-gold-600 transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to All Destinations</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Overview & Information */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card-luxury rounded-3xl bg-white p-8 border border-forest-800/10">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600 mb-2">
                  <MapPin size={15} />
                  <span>{destination.region}, Sri Lanka</span>
                </div>

                <h2 className="font-serif text-3xl font-bold text-forest-950 mb-4">
                  Discovering {destination.name} with Lankova
                </h2>

                <p className="text-xs sm:text-base text-forest-950/75 leading-relaxed">
                  {destination.description}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-forest-950/70 leading-relaxed">
                  Experience {destination.name} with the flexibility of a private chauffeur guide and air-conditioned vehicle. Whether you want to explore ancient cultural monuments, take in panoramic viewpoints, or sample authentic regional cuisine, our tailor-made itineraries allow you to travel comfortably at your personal pace.
                </p>

                <div className="mt-8 pt-6 border-t border-forest-800/10 flex flex-wrap gap-4 items-center justify-between">
                  <div>
                    <span className="text-xs text-forest-950/60 block">Category</span>
                    <span className="font-bold text-sm text-forest-950">{destination.category}</span>
                  </div>
                  <div>
                    <span className="text-xs text-forest-950/60 block">Travel Style</span>
                    <span className="font-bold text-sm text-forest-950">Chauffeured Private Tour</span>
                  </div>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-forest-950 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-gold-500 hover:text-forest-950 transition-all shadow-sm"
                  >
                    <span>Plan a Trip to {destination.name}</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar Inquiry Card */}
            <div>
              <div className="card-luxury rounded-3xl bg-white p-6 border border-forest-800/10 shadow-sm sticky top-28">
                <h3 className="font-serif text-xl font-bold text-forest-950 mb-2">
                  Add {destination.name} to Your Tour
                </h3>
                <p className="text-xs text-forest-950/70 leading-relaxed mb-6">
                  Include {destination.name} in a tailor-made private itinerary with dedicated vehicle and licensed driver.
                </p>

                <Link
                  to={`/customize-tour?destination=${encodeURIComponent(destination.name)}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 py-3 text-xs font-bold uppercase tracking-wider text-forest-950 shadow-md hover:from-gold-400 hover:to-gold-300 transition-all"
                >
                  <Compass size={15} />
                  <span>Start Customizer</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Matching Tour Packages */}
          {matchingPackages.length > 0 && (
            <div className="mt-16 pt-12 border-t border-forest-800/10">
              <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950">
                    Sri Lanka Tour Packages Featuring {destination.name}
                  </h3>
                  <p className="text-xs text-forest-950/60 mt-1">
                    Handcrafted private itineraries that visit {destination.name} with dedicated chauffeur guides.
                  </p>
                </div>
                <Link
                  to="/packages"
                  className="text-xs font-bold text-forest-900 hover:text-gold-600 transition-colors inline-flex items-center gap-1"
                >
                  <span>View All Tour Packages</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchingPackages.slice(0, 3).map((pkg) => (
                  <PackageCard key={pkg.slug} pkg={pkg} />
                ))}
              </div>
            </div>
          )}

          {/* Nearby & Related Sri Lanka Destinations */}
          {relatedDestinations.length > 0 && (
            <div className="mt-16 pt-12 border-t border-forest-800/10">
              <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950">
                    Other Destinations to Combine with {destination.name}
                  </h3>
                  <p className="text-xs text-forest-950/60 mt-1">
                    Connect these iconic Sri Lankan destinations smoothly within your private tour itinerary.
                  </p>
                </div>
                <Link
                  to="/destinations"
                  className="text-xs font-bold text-forest-900 hover:text-gold-600 transition-colors inline-flex items-center gap-1"
                >
                  <span>All Destinations</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedDestinations.map((relDest) => (
                  <Link
                    key={relDest.slug}
                    to={`/destinations/${relDest.slug}`}
                    className="card-luxury zoom-card group overflow-hidden rounded-2xl bg-white border border-forest-800/10 block shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="relative h-44 w-full overflow-hidden bg-forest-950">
                      <img
                        src={relDest.image}
                        alt={`${relDest.name}, Sri Lanka - Tours & Experiences`}
                        loading="lazy"
                        className="zoom-image h-full w-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 rounded-full bg-forest-950/80 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-semibold text-gold-300 border border-gold-400/20">
                        {relDest.category}
                      </div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-gold-400 block">
                          {relDest.region}
                        </span>
                        <h4 className="font-serif text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                          {relDest.name}
                        </h4>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-forest-950/70 line-clamp-2 leading-relaxed">
                        {relDest.description}
                      </p>
                      <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-forest-900 group-hover:text-gold-600 transition-colors">
                        <span>Explore {relDest.name}</span>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}