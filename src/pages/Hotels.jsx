import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  Sparkles,
  Check,
  CheckCircle2,
  ShieldCheck,
  Bed,
  Calendar,
  ArrowRight,
  MessageCircle,
  MapPin,
  SlidersHorizontal,
  Layers,
  Utensils,
  Coffee,
  Compass,
  DollarSign,
  HeartHandshake,
  Waves,
} from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
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
      {/* 1. EDITORIAL PAGE HERO */}
      <PageHero
        eyebrow="Accommodations & Stays"
        title="3-Star, 4-Star & 5-Star Hotel Arrangements"
        subtitle="We don’t limit you to fixed hotel rosters. Tell us your preferred comfort level and travel budget, and Lankova will handpick, negotiate, and arrange verified 3-star, 4-star, or 5-star accommodations across Sri Lanka for a seamless holiday."
        image="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

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
                <p className="text-[11px] text-ivory-100/65">Vetted cleanliness &amp; quiet AC</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/20 text-gold-400 shrink-0">
                <DollarSign size={22} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white tracking-wide">Direct Partner Rates</p>
                <p className="text-[11px] text-ivory-100/65">Transparent pricing for your budget</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/20 text-gold-400 shrink-0">
                <Coffee size={22} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white tracking-wide">Daily Breakfast Included</p>
                <p className="text-[11px] text-ivory-100/65">Fresh local &amp; continental fare</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/20 text-gold-400 shrink-0">
                <HeartHandshake size={22} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white tracking-wide">Driver Logistics Handled</p>
                <p className="text-[11px] text-ivory-100/65">Luggage help &amp; driver quarters covered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE STAR TIERS SHOWCASE */}
      <section className="py-16 sm:py-24 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Curated For Your Comfort"
              title="Choose Your Preferred Star Level"
              subtitle="Whether you prefer clean budget-friendly convenience, scenic poolside 4-star comfort, or 5-star private luxury, we structure every stay around your style."
            />
          </Reveal>

          {/* Filter Pills */}
          <div className="mt-10 mb-12 flex flex-wrap justify-center gap-2.5">
            {[
              { id: 'All', label: 'All Star Tiers' },
              { id: '3-star', label: '3-Star Comfort' },
              { id: '4-star', label: '4-Star Premium' },
              { id: '5-star', label: '5-Star Luxury' },
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
                  <span>Traveler Pro Tip</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Can’t Decide on One Tier? <br className="hidden sm:inline" />
                  <span className="text-gold-400">Mix &amp; Match</span> Across Your Itinerary
                </h3>

                <p className="text-xs sm:text-sm text-ivory-100/80 leading-relaxed max-w-2xl">
                  Many smart travelers choose comfortable <strong className="text-white">3-Star or 4-Star</strong> hotels during busy touring days in Kandy, Sigiriya, and Ella, and then upgrade to a breathtaking <strong className="text-gold-300">5-Star luxury beachfront villa</strong> in Galle or Bentota to unwind before flying home. We can customize any combination for your trip.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-ivory-100/90 bg-forest-900/60 px-3.5 py-2 rounded-xl border border-forest-800/60">
                    <CheckCircle2 size={16} className="text-gold-400 shrink-0" />
                    <span>Cultural Days: 3 or 4-Star Scenic</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-ivory-100/90 bg-forest-900/60 px-3.5 py-2 rounded-xl border border-forest-800/60">
                    <CheckCircle2 size={16} className="text-gold-400 shrink-0" />
                    <span>Beach Relaxation: 5-Star Luxury Villa</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link
                  to="/customize-tour"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-6 py-4 text-xs font-bold uppercase tracking-wider text-forest-950 hover:from-gold-400 hover:to-gold-300 transition-all shadow-lg active:scale-95 text-center"
                >
                  <Calendar size={16} strokeWidth={2.4} />
                  <span>Customize Mix &amp; Match Tour</span>
                </Link>

                <a
                  href={createWhatsAppLink(
                    whatsappMessages.hotelInquiry('a customized mix of 3, 4, and 5-Star stays')
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-950/40 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-300 hover:bg-emerald-900/50 transition-all text-center"
                >
                  <MessageCircle size={16} className="text-emerald-400" />
                  <span>Discuss Stays on WhatsApp</span>
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
              title="Side-by-Side Star Tier Comparison"
              subtitle="Understand exactly what to expect from each accommodation tier so you can choose with total clarity."
            />
          </Reveal>

          <div className="mt-12 overflow-x-auto rounded-3xl border border-forest-800/10 shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-forest-800/15 bg-ivory-100/80">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-forest-950/70 w-1/4">
                    Feature &amp; Standard
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-forest-900 w-1/4">
                    <div className="flex items-center gap-1.5">
                      <div className="flex text-gold-500">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <Star key={i} size={13} fill="currentColor" />
                        ))}
                      </div>
                      <span>3-Star Comfort</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-forest-950 bg-gold-400/10 border-x border-gold-400/20 w-1/4">
                    <div className="flex items-center gap-1.5">
                      <div className="flex text-gold-500">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <Star key={i} size={13} fill="currentColor" />
                        ))}
                      </div>
                      <span>4-Star Premium</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-forest-900 w-1/4">
                    <div className="flex items-center gap-1.5">
                      <div className="flex text-gold-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={13} fill="currentColor" />
                        ))}
                      </div>
                      <span>5-Star Luxury</span>
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
              eyebrow="Seamless & Stress-Free"
              title="How Our Hotel Arrangement Service Works"
              subtitle="From initial route design to checking into your room, we take care of every detail."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: '01',
                title: 'Share Dates & Budget',
                desc: 'Tell us your travel dates, preferred route, room preferences, and desired spending target per night.',
              },
              {
                step: '02',
                title: 'Select Your Star Tier',
                desc: 'Choose 3-star comfort, 4-star premium, 5-star luxury, or request a customized combination across regions.',
              },
              {
                step: '03',
                title: 'Review Handpicked Options',
                desc: 'We present vetted, quality-tested hotel options with full photos, amenities, and transparent pricing for your approval.',
              },
              {
                step: '04',
                title: 'Relax on Arrival',
                desc: 'Your private chauffeur coordinates check-ins, assists with luggage, and stays on call for every leg of your journey.',
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

      {/* 7. ISLAND-WIDE DESTINATIONS WE COVER */}
      <section className="py-16 sm:py-24 bg-white border-t border-forest-800/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Island-Wide Coverage"
              title="Handpicked Stays in Every Sri Lanka Region"
              subtitle="Wherever your journey leads, we have trusted 3, 4, and 5-star partner properties ready to welcome you."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {accommodationRegions.map((region, i) => (
              <Reveal key={region.name} delay={i * 60}>
                <div className="card-luxury rounded-2xl overflow-hidden border border-forest-800/10 bg-white group flex flex-col h-full">
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-forest-950">
                    <img
                      src={region.image}
                      alt={`${region.name} Sri Lanka accommodations and hotels`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400">
                        {region.places}
                      </span>
                      <h4 className="font-serif text-xl font-bold text-white drop-shadow-sm">
                        {region.name}
                      </h4>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <p className="text-xs sm:text-sm text-forest-950/75 leading-relaxed">
                      {region.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-forest-800/10 flex items-center justify-between text-xs text-forest-950/60 font-medium">
                      <span>3, 4 &amp; 5-Star Options Available</span>
                      <MapPin size={14} className="text-gold-600" />
                    </div>
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
              title="Why Travelers Book Accommodations With Us"
              subtitle="Avoid booking blind on the internet. We ensure you get maximum value, cleanliness, and peace of mind."
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
                  <p className="text-xs sm:text-sm text-ivory-100/70 leading-relaxed">
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
              title="Accommodation Frequently Asked Questions"
              subtitle="Everything you need to know about booking 3-star, 4-star, and 5-star stays in Sri Lanka with Lankova."
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
            Comfort Designed For Your Budget
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4 leading-tight">
            Ready to Arrange Your Sri Lanka Stays?
          </h2>
          <p className="mx-auto max-w-2xl text-xs sm:text-base text-ivory-100/80 leading-relaxed font-normal mb-8">
            Let us know your travel dates, group size, and preferred comfort style. We will respond promptly with a transparent proposal and handpicked options tailored to your budget.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/customize-tour"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-950 shadow-lg hover:from-gold-400 hover:to-gold-300 transition-all active:scale-95"
            >
              <Calendar size={16} strokeWidth={2.4} />
              <span>Plan Tour with Accommodations</span>
            </Link>

            <a
              href={createWhatsAppLink(
                whatsappMessages.hotelInquiry('3, 4, or 5-Star accommodations for our budget')
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-950/50 backdrop-blur-md px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-300 hover:bg-emerald-900/60 transition-all active:scale-95"
            >
              <MessageCircle size={17} className="text-emerald-400" />
              <span>WhatsApp Accommodation Quote</span>
            </a>
          </div>

          <p className="mt-6 text-center text-xs text-ivory-100/50">
            Already have your hotels reserved? You can hire our private vehicle &amp; chauffeur service only.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hotels;
