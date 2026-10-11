import { Link } from 'react-router-dom';
import {
  Star,
  Check,
  Sparkles,
  MessageCircle,
  Calendar,
  ArrowRight,
  Bed,
  Utensils,
  ShieldCheck,
} from 'lucide-react';
import { createWhatsAppLink, whatsappMessages } from '../../lib/whatsapp';

export function HotelTierCard({ tier }) {
  return (
    <div
      className={`relative card-luxury overflow-hidden rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between h-full ${
        tier.popular
          ? 'border-gold-400 shadow-xl ring-2 ring-gold-400/30'
          : 'border-forest-800/12 shadow-md hover:border-gold-400/40'
      }`}
    >
      {/* Popular Ribbon / Badge */}
      {tier.popular && (
        <div className="absolute top-0 right-0 z-20">
          <div className="bg-gradient-to-l from-gold-500 to-gold-400 text-forest-950 text-[11px] font-black tracking-widest uppercase py-1.5 px-4 rounded-bl-2xl shadow-md flex items-center gap-1.5">
            <Sparkles size={13} className="text-forest-950 fill-forest-950" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      <div>
        {/* Architectural Luxury Star-Tier Header (No Hotel Images) */}
        <div className="relative bg-gradient-to-br from-forest-950 via-forest-900 to-forest-950 px-6 pt-7 pb-6 text-white overflow-hidden border-b border-gold-400/20">
          <div className="absolute inset-0 bg-[radial-gradient(#d4ab48_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

          <div className="relative z-10">
            {/* Star Rating Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 border border-gold-400/35 px-3.5 py-1.5 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: tier.stars }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    className="text-gold-400 fill-gold-400"
                  />
                ))}
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-gold-300">
                {tier.stars}-Star Category
              </span>
            </div>

            <span className="block text-[11px] font-bold uppercase tracking-widest text-gold-400/90 mb-1">
              {tier.badge}
            </span>

            <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-white leading-tight">
              {tier.name}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-ivory-100/80 italic leading-relaxed">
              &ldquo;{tier.tagline}&rdquo;
            </p>

            {/* Quick Tier Spec Pills */}
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-ivory-100">
                <Bed size={13} className="text-gold-400 shrink-0" />
                <span>{tier.roomStandard}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-gold-400/15 border border-gold-400/30 px-2.5 py-1 text-[11px] font-bold text-gold-300">
                <ShieldCheck size={13} className="text-gold-400 shrink-0" />
                <span>{tier.budgetLabel}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          <p className="text-xs sm:text-sm text-forest-950/80 leading-relaxed">
            {tier.description}
          </p>

          {/* Dining & Facility Standard Highlights */}
          <div className="mt-5 grid grid-cols-1 gap-2.5 rounded-2xl bg-ivory-100/90 p-4 border border-forest-800/10">
            <div className="flex items-start gap-2.5">
              <Utensils size={15} className="text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-forest-950">Meal Plan &amp; Dining: </span>
                <span className="text-forest-950/75">{tier.diningStyle}</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5 pt-2 border-t border-forest-800/10">
              <Bed size={15} className="text-forest-800 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-forest-950">Comfort &amp; Facilities: </span>
                <span className="text-forest-950/75">{tier.facilityHighlight}</span>
              </div>
            </div>
          </div>

          {/* Sample Styles Chips */}
          <div className="mt-5 pt-4 border-t border-forest-800/10">
            <p className="text-[11px] uppercase tracking-wider font-bold text-forest-950/60 mb-2">
              Property Types We Arrange:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {tier.sampleStyles.map((style) => (
                <span
                  key={style}
                  className="rounded-lg bg-ivory-200/70 border border-forest-800/10 px-2.5 py-1 text-[11px] font-semibold text-forest-950"
                >
                  {style}
                </span>
              ))}
            </div>
          </div>

          {/* Inclusions Checklist */}
          <div className="mt-5 pt-4 border-t border-forest-800/10">
            <p className="text-[11px] uppercase tracking-wider font-bold text-forest-950/60 mb-2.5">
              What We Guarantee in {tier.stars}-Star Stays:
            </p>
            <ul className="space-y-2">
              {tier.features.map((feat) => (
                <li
                  key={feat}
                  className="flex items-start gap-2 text-xs text-forest-950/85 leading-snug"
                >
                  <Check size={14} className="text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal For Note */}
          <div className="mt-5 rounded-xl bg-forest-50 p-3.5 border border-forest-100 text-xs text-forest-900 leading-relaxed">
            <span className="font-bold text-forest-950">Ideal for: </span>
            {tier.idealFor}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 sm:p-7 pt-0 space-y-2.5">
        <Link
          to={`/customize-tour?starTier=${tier.stars}Star`}
          className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95 ${
            tier.popular
              ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-forest-950 hover:from-gold-400 hover:to-gold-300'
              : 'bg-forest-950 text-white hover:bg-gold-500 hover:text-forest-950'
          }`}
        >
          <Calendar size={15} strokeWidth={2.2} />
          <span>Arrange {tier.stars}-Star Hotel Tour</span>
          <ArrowRight size={14} />
        </Link>

        <a
          href={createWhatsAppLink(
            whatsappMessages.hotelInquiry(`${tier.stars}-Star (${tier.name})`)
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-forest-800/20 bg-ivory-50 py-2.5 px-4 text-xs font-semibold text-forest-950 hover:bg-emerald-50 hover:border-emerald-500 hover:text-emerald-800 transition-all active:scale-95"
        >
          <MessageCircle size={15} className="text-emerald-600" />
          <span>Inquire on WhatsApp for {tier.stars}-Star Stays</span>
        </a>
      </div>
    </div>
  );
}

// Export both default and named for backward compatibility
export const HotelCard = HotelTierCard;
export default HotelTierCard;
