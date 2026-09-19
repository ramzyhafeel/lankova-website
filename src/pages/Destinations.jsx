import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Compass } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { destinations, destinationCategories } from '../data/destinations';

export function Destinations() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered =
    selectedCategory === 'All'
      ? destinations
      : destinations.filter((d) => d.category === selectedCategory);

  return (
    <div>
      <PageHero
        eyebrow="Sri Lanka Destinations"
        title="Explore an Island of Wonders"
        subtitle="From UNESCO World Heritage citadels to misty high tea plantations and turquoise coastal reefs, discover Sri Lanka’s greatest treasures."
        image="/hero/ella-nine-arch-bridge.jpg"
      />

      <section className="py-16 sm:py-24 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {destinationCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? 'bg-forest-950 text-gold-400 shadow-md scale-105'
                    : 'bg-white border border-forest-800/15 text-forest-950/70 hover:bg-forest-900 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((dest, i) => (
              <Reveal key={dest.name} delay={i * 60}>
                <div className="card-luxury zoom-card overflow-hidden rounded-2xl bg-white border border-forest-800/10 flex flex-col justify-between h-full">
                  <div>
                    {/* Image */}
                    <div className="relative h-56 w-full overflow-hidden bg-forest-950">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        loading="lazy"
                        className="zoom-image h-full w-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 rounded-full bg-forest-950/80 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-gold-300 border border-gold-400/20">
                        {dest.category}
                      </div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-gold-400 block">
                          {dest.region}
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                          {dest.name}
                        </h3>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-5">
                      <p className="text-xs sm:text-sm text-forest-950/75 leading-relaxed">
                        {dest.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-5 pt-0 flex items-center justify-between border-t border-forest-800/10 mt-4">
                    <Link
                      to={`/customize-tour?destination=${encodeURIComponent(dest.name)}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-forest-900 hover:text-gold-600 transition-colors"
                    >
                      <span>Add to Custom Trip</span>
                      <ArrowRight size={13} />
                    </Link>

                    <Link
                      to="/packages"
                      className="text-[11px] text-forest-700 hover:text-forest-950 font-semibold"
                    >
                      View Tours
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-16 rounded-3xl bg-forest-950 p-8 sm:p-12 text-center text-white">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
              Unsure Which Places to Include in Your Itinerary?
            </h3>
            <p className="mx-auto max-w-xl text-xs sm:text-sm text-ivory-100/80 leading-relaxed mb-6">
              Sri Lanka is compact but culturally and topographically diverse. Share how many days you have, and we'll craft an itinerary connecting the best destinations smoothly.
            </p>
            <Link
              to="/customize-tour"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-forest-950 hover:bg-gold-400 transition-all shadow-md"
            >
              <Compass size={16} strokeWidth={2.4} />
              <span>Ask Our Travel Specialists to Plan</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Destinations;