import { Link } from 'react-router-dom';
import { Car, Utensils, Bed, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const transportPricingTiers = [
  { days: '3 Days', price: 33 },
  { days: '5 Days', price: 30 },
  { days: '7 Days', price: 27 },
  { days: '10 Days', price: 25 },
];

const halfBoardPricingTiers = [
  { days: '3 Days', price: 75 },
  { days: '5 Days', price: 70 },
  { days: '7 Days', price: 68 },
  { days: '10 Days', price: 60 },
  { days: '14 Days', price: 55 },
];

export function TravelStylePricing() {
  return (
    <div className="mb-12">
      {/* Subsection Heading */}
      <Reveal>
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-600 block mb-1.5">
            Transparent Rates Per Person
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
            Tour Transport &amp; Half Board Hotel Pricing
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-forest-950/70 max-w-2xl mx-auto">
            Select <strong className="text-forest-950">Private Transport Only</strong> or upgrade to our all-in-one{' '}
            <strong className="text-forest-950">Half Board Package</strong> (includes Hotel Stay with Daily Dinner &amp; Breakfast).
          </p>
        </div>
      </Reveal>

      {/* Two Main Pricing Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto items-stretch">
        {/* Panel 1: Transport Per Person */}
        <Reveal className="lg:col-span-5 flex">
          <div className="card-luxury w-full rounded-3xl border border-forest-800/12 bg-white p-6 sm:p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-900/8 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-forest-900">
                  <Car size={13} className="text-gold-600" />
                  <span>Transport Only</span>
                </span>
                <span className="text-[11px] font-semibold text-forest-950/55">
                  Per Person Rate
                </span>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                Private Transport Per Person
              </h4>
              <p className="mt-1 text-xs text-forest-950/70 leading-relaxed">
                Dedicated air-conditioned vehicle, licensed English-speaking chauffeur, fuel, highway tolls &amp; airport transfers.
              </p>

              {/* Price Tiers Grid */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
                {transportPricingTiers.map((item) => (
                  <div
                    key={item.days}
                    className="rounded-2xl border border-forest-800/10 bg-ivory-50/80 p-3.5 text-center transition-all hover:border-gold-400/50 hover:bg-white hover:shadow-xs"
                  >
                    <span className="text-[11px] font-bold uppercase tracking-wider text-forest-800 block">
                      {item.days}
                    </span>
                    <div className="mt-1 flex items-baseline justify-center gap-0.5">
                      <span className="font-serif text-2xl sm:text-3xl font-extrabold text-forest-950">
                        ${item.price}
                      </span>
                    </div>
                    <span className="text-[10px] font-medium text-forest-950/55 block mt-0.5">
                      per person
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-forest-800/10 flex items-center justify-between text-xs text-forest-950">
              <span className="flex items-center gap-1.5 font-semibold text-forest-950">
                <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                <span>100% Private Vehicle &amp; Driver</span>
              </span>
              <Link
                to="/transportation"
                className="font-bold text-gold-600 hover:text-gold-700 inline-flex items-center gap-1"
              >
                <span>Fleet</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Panel 2: Half Board (Hotel with Dinner & Breakfast) */}
        <Reveal delay={100} className="lg:col-span-7 flex">
          <div className="card-luxury relative w-full rounded-3xl border-2 border-gold-400 bg-white p-6 sm:p-7 text-forest-950 shadow-xl ring-2 ring-gold-400/20 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 z-10">
              <div className="bg-gradient-to-l from-gold-500 to-gold-400 text-forest-950 text-[10px] font-black tracking-widest uppercase py-1 px-3.5 rounded-bl-2xl shadow-sm flex items-center gap-1">
                <Sparkles size={11} className="fill-forest-950" />
                <span>Most Popular Value</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-400/20 border border-gold-500/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-forest-950">
                  <Bed size={13} className="text-gold-600" />
                  <Utensils size={12} className="text-gold-600" />
                  <span>Half Board (Hotel + Dinner &amp; Breakfast)</span>
                </span>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                Half Board Package (Hotel + Meals + Transport)
              </h4>
              <p className="mt-1 text-xs text-forest-950/75 leading-relaxed">
                Includes handpicked comfortable hotels with <strong className="text-forest-950 font-bold">Daily Dinner &amp; Breakfast</strong>, plus private air-conditioned transport &amp; chauffeur.
              </p>

              {/* 5 Price Tiers Grid */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
                {halfBoardPricingTiers.map((item) => (
                  <div
                    key={item.days}
                    className="rounded-2xl border border-gold-400/35 bg-forest-950 p-3.5 text-center transition-all hover:border-gold-400 hover:bg-forest-900 shadow-xs"
                  >
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400 block">
                      {item.days}
                    </span>
                    <div className="mt-1 flex items-baseline justify-center gap-0.5">
                      <span className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                        ${item.price}
                      </span>
                    </div>
                    <span className="text-[10px] font-medium text-ivory-100/70 block mt-0.5">
                      per person
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-forest-800/12 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex flex-wrap items-center gap-4 text-forest-950">
                <span className="flex items-center gap-1.5 font-semibold text-forest-950">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                  <span>Hotel Stay Included</span>
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-forest-950">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                  <span>Daily Dinner &amp; Breakfast</span>
                </span>
              </div>
              <Link
                to="/hotels"
                className="font-bold text-gold-600 hover:text-gold-700 inline-flex items-center gap-1"
              >
                <span>View Hotel Tiers</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Customer Satisfaction Message */}
      <Reveal delay={200}>
        <p className="mt-5 text-center text-xs sm:text-sm text-forest-950/70 leading-relaxed max-w-2xl mx-auto">
          <span className="text-gold-500">—</span>{' '}
          Longer stays enjoy lower rates. All packages can be customized with 3-star, 4-star, or 5-star accommodations for your budget.{' '}
          <span className="text-gold-500">—</span>
        </p>
      </Reveal>
    </div>
  );
}

export default TravelStylePricing;
