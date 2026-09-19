import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDestination } from "../data/destinations";
import { packages } from "../data/packages";
import { site } from "../data/site";
import PackageCard from "../components/ui/PackageCard";
import { createWhatsAppLink } from "../lib/whatsapp";
import { MapPin, Compass, ArrowRight, ArrowLeft, Check, Sparkles } from "lucide-react";

export default function DestinationDetails() {
  const { slug } = useParams();
  const nav = useNavigate();

  const destination = useMemo(() => getDestination(slug), [slug]);

  // Find tour packages that visit this destination
  const matchingPackages = useMemo(() => {
    if (!destination) return [];
    const term = destination.name.toLowerCase();
    return packages.filter((p) =>
      p.destinations.some((d) => d.toLowerCase().includes(term)) ||
      p.route.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term)
    );
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
    `Hello ${site.brand}, I am interested in visiting ${destination.name}. Could you please help me include it in a private custom tour?`
  );

  return (
    <div className="bg-ivory-100">
      <PageHero
        eyebrow={`Destination Guide &bull; ${destination.region}`}
        title={destination.name}
        subtitle={destination.description}
        image={destination.image}
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
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
                  Discovering {destination.name}
                </h2>

                <p className="text-xs sm:text-base text-forest-950/75 leading-relaxed">
                  {destination.description}
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
                    <span>Plan a Trip Here</span>
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
                  Include {destination.name} in a tailor-made private itinerary with dedicated vehicle and driver.
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
              <h3 className="font-serif text-2xl font-bold text-forest-950 mb-8 text-center sm:text-left">
                Tours Featuring {destination.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchingPackages.slice(0, 3).map((pkg) => (
                  <PackageCard key={pkg.slug} pkg={pkg} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}