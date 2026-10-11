import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  MessageCircle,
  MapPin,
  Utensils,
  Coffee,
  DollarSign,
  HeartHandshake,
  Building2,
  Compass,
  Award,
} from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { JourneyLine } from '../components/ui/JourneyLine';
import { Reveal } from '../components/ui/Reveal';
import { HotelTierCard } from '../components/ui/HotelCard';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import {
  hotelTiers,
  tierComparison,
  whyBookWithLankova,
  accommodationRegions,
  accommodationFaqs,
} from '../data/hotels';
import { createWhatsAppLink, whatsappMessages } from '../lib/whatsapp';

export function Hotels() {
  const [selectedTierFilter, setSelectedTierFilter] = useState('All');

  const filteredTiers =
    selectedTierFilter === 'All'
      ? hotelTiers
      : hotelTiers.filter((t) => t.id === selectedTierFilter);

  return (
    <div>
      {/* 1. ARCHITECTURAL EDITORIAL HERO (ZERO HOTEL IMAGES) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950 pt-28 pb-20 sm:pt-36 sm:pb-24 text-center text-ivory-100">
        {/* Subtle Gold Pattern & Ambient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4ab48_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-[640px] rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 border border-gold-400/35 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-300 mb-5">
            <Award size={14} className="text-gold-400" />
            <span>Tailored Sri Lanka Accommodations</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            We Arrange <span className="text-gold-400">3-Star, 4-Star &amp; 5-Star</span> Hotels for Your Journey
          </h1>

          <div className="my-5 flex justify-center">
            <JourneyLine />
          </div>

          <p className="mx-auto max-w-2xl text-sm sm:text-base text-ivory-100/85 leading-relaxed font-normal">
            We do not lock you into fixed hotel rosters. Tell us your preferred star rating, route, and budget—and Lankova will handpick, inspect, and arrange verified <strong className="text-white">3-star, 4-star, or 5-star hotels</strong> across Sri Lanka with Half Board (Dinner &amp; Breakfast) included.
          </p>

          {/* 3-Star, 4-Star, 5-Star Quick Summary Badges */}
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto">
            {[
              { stars: 3, title: '3-Star Hotels', sub: 'Clean, Safe & Smart Value' },
              { stars: 4, title: '4-Star Hotels', sub: 'Pools, Balconies & Views' },
              { stars: 5, title: '5-Star Hotels', sub: 'World-Class Luxury & Villas' },
            ].map((item) => (
              <div
                key={item.stars}
                className="rounded-2xl border border-gold-400/30 bg-white/5 backdrop-blur-sm px-4 py-3.5 text-center transition-all hover:border-gold-400/60 hover:bg-white/10"
              >
                <div className="flex items-center justify-center gap-1 text-gold-400 mb-1">
                  {Array.from({ length: item.stars }).map((_, idx) => (
                    <Star key={idx} size={14} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="font-serif text-base font-bold text-white">{item.title}</p>
                <p className="text-[11px] text-ivory-100/75 mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. TRUST HIGHLIGHTS BAR */}
      <section className="bg-forest-900 border-y border-forest-800/40 py-6 text-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/20 text-gold-400 shrink-0">
                <ShieldCheck size={22} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white tracking-wide">Personally Inspected</p>
                <p className="text-[11px] text-ivory-100/65">Vetted cleanliness &amp; quiet A/C</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/20 text-gold-400 shrink-0">
                <DollarSign size={22} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white tracking-wide">Direct Partner Rates</p>
                <p className="text-[11px] text-ivory-100/65">Arranged to match your budget</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/20 text-gold-400 shrink-0">
                <Coffee size={22} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white tracking-wide">Half Board Available</p>
                <p className="text-[11px] text-ivory-100/65">Daily Dinner &amp; Breakfast included</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/20 text-gold-400 shrink-0">
                <HeartHandshake size={22} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white tracking-wide">Chauffeur Logistics Handled</p>
                <p className="text-[11px] text-ivory-100/65">Check-in &amp; driver quarters covered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE STAR TIERS SHOWCASE */}
      <section className="py-16 sm:py-24 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Half Board Package Pricing Strip */}
          <Reveal>
            <div className="mb-16 rounded-3xl border border-gold-400/35 bg-white p-6 sm:p-9 shadow-md">
              <div className="text-center max-w-2xl mx-auto mb-7">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-400/15 border border-gold-400/30 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-amber-800 mb-2">
                  <Utensils size={12} />
                  <span>Half Board Hotel Arrangement Rates (Dinner &amp; Breakfast Included)</span>
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
                  Half Board Hotel + Private Transport Pricing
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm text-forest-950/75">
                  Every Half Board rate includes your handpicked hotel stay, <strong className="text-forest-950">Daily Dinner &amp; Breakfast</strong> provided by the hotel, and private air-conditioned transport with an English-speaking chauffeur.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto">
                {[
                  { days: '3 Days', price: 75 },
                  { days: '5 Days', price: 70 },
                  { days: '7 Days', price: 68 },
                  { days: '10 Days', price: 60 },
                  { days: '14 Days', price: 55 },
                ].map((tier) => (
                  <div
                    key={tier.days}
                    className="rounded-2xl border border-forest-800/12 bg-ivory-50/90 p-4 text-center transition-all hover:border-gold-400 hover:bg-white hover:shadow-sm"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-forest-800 block">
                      {tier.days}
                    </span>
                    <p className="font-serif text-2xl sm:text-3xl font-extrabold text-forest-950 mt-1">
                      ${tier.price}
                    </p>
                    <span className="text-[11px] text-forest-950/65 mt-0.5 block font-medium">
                      per person
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <SectionHeader
              eyebrow="3-Star • 4-Star • 5-Star Hotels"
              title="Hotel Categories We Arrange for You"
              subtitle="Whether you want dependable 3-star value, scenic 4-star resort comfort, or 5-star luxury hospitality, we arrange verified accommodations tailored to your trip."
            />
          </Reveal>

          {/* Filter Pills */}
          <div className="mt-10 mb-12 flex flex-wrap justify-center gap-2.5">
            {[
              { id: 'All', label: 'All Star Categories (3★, 4★ & 5★)' },
              { id: '3-star', label: '3-Star Hotels' },
              { id: '4-star', label: '4-Star Hotels' },
              { id: '5-star', label: '5-Star Hotels' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedTierFilter(f.id)}
                className={`rounded-full px-6 py-2.5 text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  selectedTierFilter === f.id
                    ? 'bg-forest-950 text-gold-400 shadow-md scale-105 ring-2 ring-gold-400/30'
                    : 'bg-white border border-forest-800/15 text-forest-950/75 hover:bg-forest-900 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Star Tiers Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTiers.map((tier, i) => (
              <Reveal key={tier.id} delay={i * 90}>
                <HotelTierCard tier={tier} />
              </Reveal>
            ))}
          </div>

          {/* 4. "MIX & MATCH" FEATURE HIGHLIGHT */}
          <div className="mt-16 rounded-3xl bg-gradient-to-br from-forest-950 via-forest-900 to-forest-950 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-gold-400/20">
            <div className="absolute inset-0 bg-[radial-gradient(#d4ab48_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 border border-gold-400/30 px-3.5 py-1 text-xs font-bold text-gold-300 uppercase tracking-widest">
                  <Sparkles size={13} className="text-gold-400" />
                  <span>Flexible Star Combinations</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Combine <span className="text-gold-400">3-Star, 4-Star &amp; 5-Star</span> Hotels Across Your Route
                </h3>

                <p className="text-xs sm:text-sm text-ivory-100/80 leading-relaxed max-w-2xl">
                  You don’t have to stick to a single star category for your entire trip. Many travelers ask us to arrange comfortable <strong className="text-white">3-Star or 4-Star hotels</strong> during active sightseeing days in Sigiriya, Kandy, and Ella, and then upgrade to a <strong className="text-gold-300">5-Star luxury beachfront resort</strong> on the South Coast to relax before flying home.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-ivory-100/90 bg-forest-900/70 px-3.5 py-2 rounded-xl border border-forest-800/60">
                    <CheckCircle2 size={16} className="text-gold-400 shrink-0" />
                    <span>Touring Days: 3-Star or 4-Star Comfort</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-ivory-100/90 bg-forest-900/70 px-3.5 py-2 rounded-xl border border-forest-800/60">
                    <CheckCircle2 size={16} className="text-gold-400 shrink-0" />
                    <span>Beach Finale: 5-Star Luxury Resort</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link
                  to="/customize-tour"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-6 py-4 text-xs font-bold uppercase tracking-wider text-forest-950 hover:from-gold-400 hover:to-gold-300 transition-all shadow-lg active:scale-95 text-center"
                >
                  <Calendar size={16} strokeWidth={2.4} />
                  <span>Customize Your Hotel Plan</span>
                </Link>

                <a
                  href={createWhatsAppLink(
                    whatsappMessages.hotelInquiry('arranging 3-Star, 4-Star, or 5-Star hotels for our trip')
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-950/40 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-300 hover:bg-emerald-900/50 transition-all text-center"
                >
                  <MessageCircle size={16} className="text-emerald-400" />
                  <span>Ask About Hotels on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SIDE-BY-SIDE TIER COMPARISON MATRIX */}
      <section className="py-16 sm:py-24 bg-white border-t border-forest-800/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Transparent Standards"
              title="3-Star vs 4-Star vs 5-Star Comparison"
              subtitle="Compare what we provide in each hotel category so you can choose the ideal level of comfort for your Sri Lanka tour."
            />
          </Reveal>

          <div className="mt-12 overflow-x-auto rounded-3xl border border-forest-800/10 shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-forest-800/15 bg-ivory-100/80">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-forest-950/70 w-1/4">
                    Standard &amp; Feature
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-forest-900 w-1/4">
                    <div className="flex items-center gap-1.5">
                      <div className="flex text-gold-500">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <Star key={i} size={13} fill="currentColor" />
                        ))}
                      </div>
                      <span>3-Star Hotels</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-forest-950 bg-gold-400/10 border-x border-gold-400/20 w-1/4">
                    <div className="flex items-center gap-1.5">
                      <div className="flex text-gold-500">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <Star key={i} size={13} fill="currentColor" />
                        ))}
                      </div>
                      <span>4-Star Hotels</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-forest-900 w-1/4">
                    <div className="flex items-center gap-1.5">
                      <div className="flex text-gold-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={13} fill="currentColor" />
                        ))}
                      </div>
                      <span>5-Star Hotels</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest-800/10 text-xs sm:text-sm text-forest-950/80">
                {tierComparison.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-ivory-50/50'}
                  >
                    <td className="py-4 px-6 font-semibold text-forest-950">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 leading-relaxed">
                      {row.star3}
                    </td>
                    <td className="py-4 px-6 leading-relaxed bg-gold-400/5 font-medium text-forest-950 border-x border-gold-400/20">
                      {row.star4}
                    </td>
                    <td className="py-4 px-6 leading-relaxed">
                      {row.star5}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. HOW WE ARRANGE YOUR ACCOMMODATIONS (4 STEPS) */}
      <section className="py-16 sm:py-24 bg-ivory-100 border-t border-forest-800/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Simple 4-Step Process"
              title="How We Arrange Your Hotels"
              subtitle="From selecting your preferred star level to checking into your room, our team manages every detail."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: '01',
                title: 'Share Dates & Route',
                desc: 'Tell us your arrival dates, number of travelers, room configuration, and target budget.',
              },
              {
                step: '02',
                title: 'Pick 3★, 4★ or 5★ Tier',
                desc: 'Choose 3-star, 4-star, or 5-star hotels—or ask us to combine star levels across different regions.',
              },
              {
                step: '03',
                title: 'Approve Hotel Proposal',
                desc: 'We send you a clear itinerary proposal with verified hotel recommendations and transparent Half Board rates.',
              },
              {
                step: '04',
                title: 'Enjoy Seamless Stays',
                desc: 'We confirm all bookings, meal plans, and driver quarters so you simply arrive, check in, and relax.',
              },
            ].map((st, i) => (
              <Reveal key={st.step} delay={i * 80}>
                <div className="relative card-luxury h-full rounded-2xl bg-white p-6 border border-forest-800/10 flex flex-col justify-between">
                  <div>
                    <span className="font-serif text-3xl font-bold text-gold-500 mb-3 block">
                      {st.step}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-forest-950 mb-2">
                      {st.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-forest-950/70 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ISLAND-WIDE DESTINATIONS WE COVER (IMAGE-FREE ARCHITECTURAL CARDS) */}
      <section className="py-16 sm:py-24 bg-white border-t border-forest-800/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Island-Wide Partner Network"
              title="Where We Arrange 3-Star, 4-Star & 5-Star Hotels"
              subtitle="Across every major touring region in Sri Lanka, we work with trusted 3-star, 4-star, and 5-star partner hotels."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {accommodationRegions.map((region, i) => (
              <Reveal key={region.name} delay={i * 60}>
                <div className="card-luxury rounded-2xl border border-forest-800/12 bg-white p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-950 text-gold-400 shrink-0">
                        <Compass size={20} />
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-gold-400/15 border border-gold-400/30 px-3 py-1 text-[11px] font-bold text-amber-800">
                        <Building2 size={12} />
                        <span>3★ • 4★ • 5★ Available</span>
                      </span>
                    </div>

                    <h4 className="font-serif text-xl font-bold text-forest-950">
                      {region.name}
                    </h4>

                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-gold-600">
                      {region.places}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm text-forest-950/75 leading-relaxed">
                      {region.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-forest-800/10 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {region.availableTiers.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-ivory-100 border border-forest-800/10 px-2 py-0.5 text-[10px] font-bold text-forest-900"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <MapPin size={15} className="text-gold-600 shrink-0" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY ARRANGE ACCOMMODATIONS THROUGH LANKOVA */}
      <section className="py-16 sm:py-24 bg-forest-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#d4ab48_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              light={true}
              eyebrow="The Lankova Advantage"
              title="Why Arrange Your Hotels Through Lankova"
              subtitle="Save hours of research and avoid unreliable online listings—we arrange inspected 3-star, 4-star, and 5-star stays with full local support."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyBookWithLankova.map((feat, i) => (
              <Reveal key={feat.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-forest-800/60 bg-forest-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold-400/40 hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/15 text-gold-400 border border-gold-400/30 mb-4">
                    <CheckCircle2 size={22} strokeWidth={2} />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-ivory-100/75 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ACCOMMODATION FAQS */}
      <section className="py-16 sm:py-24 bg-ivory-100 border-t border-forest-800/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <SectionHeader
              eyebrow="Clear Answers"
              title="Hotel Arrangement Frequently Asked Questions"
              subtitle="Everything you need to know about our 3-star, 4-star, and 5-star hotel arrangements in Sri Lanka."
            />
          </Reveal>

          <div className="mt-12">
            <FAQAccordion faqs={accommodationFaqs} />
          </div>
        </div>
      </section>

      {/* 10. FINAL CONVERSION BANNER */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 text-white relative overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-gold-400">
            3-Star • 4-Star • 5-Star Hotel Arrangements
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4 leading-tight">
            Let Us Arrange the Ideal Hotels for Your Budget
          </h2>
          <p className="mx-auto max-w-2xl text-xs sm:text-base text-ivory-100/80 leading-relaxed font-normal mb-8">
            Share your travel dates, group size, and whether you prefer 3-star, 4-star, or 5-star accommodations. Our team will prepare a tailored itinerary and hotel proposal promptly.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/customize-tour"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-950 shadow-lg hover:from-gold-400 hover:to-gold-300 transition-all active:scale-95"
            >
              <Calendar size={16} strokeWidth={2.4} />
              <span>Request 3★ / 4★ / 5★ Hotel Proposal</span>
            </Link>

            <a
              href={createWhatsAppLink(
                whatsappMessages.hotelInquiry('3-Star, 4-Star, or 5-Star hotel arrangements')
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-950/50 backdrop-blur-md px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-300 hover:bg-emerald-900/60 transition-all active:scale-95"
            >
              <MessageCircle size={17} className="text-emerald-400" />
              <span>WhatsApp Hotel Inquiry</span>
            </a>
          </div>

          <p className="mt-6 text-center text-xs text-ivory-100/60">
            Already booked your own hotels? You can also book our private vehicle &amp; chauffeur service only.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hotels;
