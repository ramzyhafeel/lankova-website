import { Link } from 'react-router-dom';
import { Car, Utensils, Bed, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
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
            Transparent Rates Per Person • Direct Local Pricing
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
            Tour Transport &amp; Half Board Hotel Pricing
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-forest-950/70 max-w-2xl mx-auto">
            Choose between private transport only or our <strong className="text-forest-950 font-bold">#1 guest favorite: the Half Board Package</strong>, which fully includes your dedicated private car, chauffeur, verified hotel stay, and daily dinner &amp; breakfast.
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
                  Vehicle &amp; Chauffeur
                </span>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                Private Transport Only
              </h4>
              <p className="mt-1 text-xs text-forest-950/70 leading-relaxed">
                Dedicated air-conditioned vehicle, licensed English-speaking chauffeur, fuel, highway tolls &amp; airport transfers. <span className="font-semibold text-forest-950/80">(Hotels and meals not included)</span>.
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
                <span>Fleet Info</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Panel 2: Half Board (Hotel with Dinner & Breakfast + TRANSPORT INCLUDED) */}
        <Reveal delay={100} className="lg:col-span-7 flex">
          <div className="card-luxury relative w-full rounded-3xl border-2 border-gold-500 bg-white p-6 sm:p-7 text-forest-950 shadow-xl ring-4 ring-gold-400/25 flex flex-col justify-between overflow-hidden">
            {/* Top Recommended Ribbon */}
            <div className="absolute top-0 right-0 z-10">
              <div className="bg-gradient-to-l from-gold-500 via-gold-400 to-gold-500 text-forest-950 text-[10px] sm:text-[11px] font-black tracking-widest uppercase py-1.5 px-4 rounded-bl-2xl shadow-md flex items-center gap-1.5">
                <Sparkles size={12} className="fill-forest-950 text-forest-950" />
                <span>#1 Choice • Best Value All-In-One</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-400/20 border border-gold-500/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-forest-950">
                  <Bed size={13} className="text-gold-600" />
                  <Utensils size={12} className="text-gold-600" />
                  <span>Half Board Package</span>
                </span>
              </div>

              {/* HIGH-IMPACT TRANSPORT INCLUDED BANNER */}
              <div className="mb-4 rounded-2xl bg-emerald-50 border-2 border-emerald-500/50 p-3.5 text-forest-950 flex items-start gap-3 shadow-xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-xs">
                  <Car size={20} strokeWidth={2.4} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-900">
                      100% Private Transport Included!
                    </span>
                    <span className="rounded-full bg-emerald-700 text-white text-[9px] font-extrabold px-2 py-0.5 uppercase tracking-wide">
                      No Extra Car Hire Needed
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-forest-950/85 font-medium leading-relaxed">
                    You do NOT need to book transport separately. Every Half Board rate already includes your dedicated air-conditioned vehicle, licensed English-speaking chauffeur, all fuel, highway expressway tolls, and airport pickup!
                  </p>
                </div>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                Half Board All-In-One Package (Hotel + Meals + Transport)
              </h4>
              <p className="mt-1 text-xs text-forest-950/75 leading-relaxed">
                Handpicked 3★, 4★, or 5★ hotel rooms with <strong className="text-forest-950 font-bold">Daily Dinner &amp; Breakfast</strong> provided at the hotel, plus your private dedicated chauffeur &amp; vehicle driving you everywhere across Sri Lanka.
              </p>

              {/* 5 Price Tiers Grid */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
                {halfBoardPricingTiers.map((item) => (
                  <div
                    key={item.days}
                    className="rounded-2xl border-2 border-gold-400/40 bg-forest-950 p-3.5 text-center transition-all hover:border-gold-400 hover:scale-[1.02] shadow-sm"
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
                    <span className="mt-1.5 inline-block rounded bg-emerald-900/80 px-1.5 py-0.5 text-[9px] font-extrabold text-emerald-300 uppercase tracking-tight">
                      Car + Hotel + Food
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-forest-800/12 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-forest-950">
                <span className="flex items-center gap-1.5 font-bold text-forest-950">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span>Dedicated Private A/C Vehicle &amp; Chauffeur</span>
                </span>
                <span className="flex items-center gap-1.5 font-bold text-forest-950">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span>Daily Dinner &amp; Breakfast at Hotel</span>
                </span>
                <span className="flex items-center gap-1.5 font-bold text-forest-950">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span>Verified 3★, 4★, or 5★ Hotel Stays</span>
                </span>
                <span className="flex items-center gap-1.5 font-bold text-forest-950">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span>Fuel, Tolls &amp; Airport Transfers Covered</span>
                </span>
              </div>

              <Link
                to="/customize-tour"
                className="shrink-0 inline-flex items-center justify-center gap-1.5 rounded-full bg-forest-950 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-gold-300 hover:bg-gold-500 hover:text-forest-950 transition-all shadow-sm text-center"
              >
                <span>Select Half Board</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Strategic Comparison Nudge */}
      <Reveal delay={200}>
        <div className="mt-6 max-w-4xl mx-auto rounded-2xl bg-forest-900/5 border border-forest-800/10 p-4 text-center">
          <p className="text-xs sm:text-sm text-forest-950/80 leading-relaxed font-medium">
            <span className="font-bold text-forest-950">💡 Why 92% of travelers choose Half Board:</span> For just a small daily difference from transport alone, you secure your entire hotel stay and two fresh meals every single day. You save up to 35% compared to booking hotels and finding dinners on your own, with zero transport hassle.
          </p>
        </div>
      </Reveal>
    </div>
  );
}

export default TravelStylePricing;
