import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, ArrowRight } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { PackageCard } from '../components/ui/PackageCard';
import { Reveal } from '../components/ui/Reveal';
import { TravelStylePricing } from '../components/ui/TravelStylePricing';
import { packages, durationFilters } from '../data/packages';

export function Packages() {
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = packages.filter((pkg) => {
    const matchesDuration =
      selectedDuration === 'All' || `${pkg.days} Days` === selectedDuration;
    const matchesSearch =
      !searchQuery ||
      pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.destinations.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesDuration && matchesSearch;
  });

  return (
    <div>
      <PageHero
        eyebrow="Sri Lanka Private Tours"
        title="Handcrafted Tour Packages"
        subtitle="Explore Sri Lanka at your own pace with a dedicated vehicle, personal chauffeur guide, and tailor-made routing."
        image="/hero/sigiriya-rock-fortress.jpg"
      />

      <section className="py-16 sm:py-24 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Travel Style Pricing */}
          <div className="mb-10">
            <TravelStylePricing />
          </div>

          {/* Controls: Duration Filter & Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            {/* Duration Pills */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2">
              {durationFilters.map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDuration(d)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                    selectedDuration === d
                      ? 'bg-forest-950 text-gold-400 shadow-sm scale-105'
                      : 'bg-white border border-forest-800/15 text-forest-950/70 hover:bg-forest-900 hover:text-white'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by destination or theme..."
                className="w-full rounded-full border border-forest-800/15 bg-white px-4 py-2.5 pl-10 text-xs text-forest-950 placeholder:text-forest-950/40 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 shadow-sm"
              />
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-forest-950/40"
              />
            </div>
          </div>

          {/* Results Count */}
          <p className="text-xs text-forest-950/60 mb-8 font-medium">
            Showing {filtered.length} {filtered.length === 1 ? 'package' : 'packages'}
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filtered.map((pkg, i) => (
                <Reveal key={pkg.slug} delay={i * 60}>
                  <PackageCard pkg={pkg} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-forest-800/10 p-8">
              <p className="text-base text-forest-950 font-bold mb-2">
                No matching tour packages found
              </p>
              <p className="text-xs text-forest-950/60 mb-6">
                Looking for a specialized itinerary? We can custom craft it for you.
              </p>
              <button
                onClick={() => {
                  setSelectedDuration('All');
                  setSearchQuery('');
                }}
                className="rounded-full bg-forest-950 px-6 py-2.5 text-xs font-semibold text-white hover:bg-gold-500 hover:text-forest-950 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Custom Tour CTA Banner */}
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 p-8 sm:p-12 text-center text-white shadow-xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
              Want a Completely Custom Sri Lanka Itinerary?
            </h3>
            <p className="mx-auto max-w-xl text-xs sm:text-sm text-ivory-100/80 leading-relaxed mb-6">
              Tell us the destinations on your bucket list, preferred accommodation level, and pace of travel. We will create your dream journey from scratch.
            </p>
            <Link
              to="/customize-tour"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-forest-950 shadow-md hover:from-gold-400 hover:to-gold-300 transition-all active:scale-95"
            >
              <Calendar size={16} strokeWidth={2.4} />
              <span>Use 7-Step Tour Customizer</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Packages;