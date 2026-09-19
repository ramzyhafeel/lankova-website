import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Calendar } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { HotelCard } from '../components/ui/HotelCard';
import { Reveal } from '../components/ui/Reveal';
import { hotels, hotelFilters } from '../data/hotels';

export function Hotels() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? hotels : hotels.filter((h) => h.category === filter);

  return (
    <div>
      <PageHero
        eyebrow="Accommodations"
        title="Stay Somewhere Truly Unforgettable"
        subtitle="Tell us your preferred comfort level and we will incorporate handpicked boutique retreats, colonial tea bungalows, and luxury beachfront villas into your personalized itinerary."
        image="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16 sm:py-24 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {hotelFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all ${
                  filter === f
                    ? 'bg-forest-950 text-gold-400 shadow-md scale-105'
                    : 'bg-white border border-forest-800/15 text-forest-950/70 hover:bg-forest-900 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <p className="mb-8 text-center text-xs text-forest-950/60 font-medium">
            Showing {filtered.length} propert{filtered.length !== 1 ? 'ies' : 'y'}
          </p>

          {/* Hotels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((hotel, i) => (
              <Reveal key={hotel.id} delay={(i % 3) * 80}>
                <HotelCard hotel={hotel} />
              </Reveal>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 rounded-3xl bg-forest-950 p-8 sm:p-12 text-center text-white shadow-xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
              Want Handpicked Accommodations Included in Your Itinerary?
            </h3>
            <p className="mx-auto max-w-xl text-xs sm:text-sm text-ivory-100/80 leading-relaxed mb-6">
              Use our interactive tour planner to specify your preferred lodging style — whether 3-star comfort, heritage estates, or 5-star luxury resorts.
            </p>
            <Link
              to="/customize-tour"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-forest-950 hover:from-gold-400 hover:to-gold-300 transition-all shadow-md active:scale-95"
            >
              <Calendar size={16} strokeWidth={2.4} />
              <span>Customize Trip with Hotels</span>
            </Link>
          </div>

          <p className="mt-8 text-center text-[11px] text-forest-950/50">
            Note: Accommodations are reserved as part of comprehensive custom tour packages arranged by LANKOVA Travel &amp; Tours.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hotels;
