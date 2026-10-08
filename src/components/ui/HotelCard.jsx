import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Check, Sparkles, MessageCircle, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { createWhatsAppLink, whatsappMessages } from '../../lib/whatsapp';

export function HotelTierCard({ tier }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = tier.gallery && tier.gallery.length > 0 ? tier.gallery : [tier.heroImage];
  const activeImage = images[activeImageIndex] || tier.heroImage;

  return (
    <div
      className={`relative card-luxury overflow-hidden rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between ${
        tier.popular
          ? 'border-gold-400 shadow-xl ring-2 ring-gold-400/30'
          : 'border-forest-800/10 shadow-md hover:border-gold-400/40'
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
        {/* Main Image Showcase */}
        <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-forest-950 group">
          <img
            src={activeImage}
            alt={`${tier.name} - Sri Lanka hotel and accommodation arrangement by Lankova`}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/25 to-transparent" />

          {/* Star & Badge Overlay */}
          <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10">
            <div className="inline-flex items-center gap-1 rounded-full bg-forest-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-gold-300 border border-gold-400/30 shadow-sm">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: tier.stars }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={12}
                    className="text-gold-400 fill-gold-400"
                  />
                ))}
              </div>
              <span className="ml-1 text-[11px] font-extrabold uppercase tracking-wider text-white">
                {tier.stars}-Star Tier
              </span>
            </div>
          </div>

          {/* Image Navigation Dots / Thumbnails */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10">
              <span className="text-[11px] font-medium text-ivory-100/90 bg-forest-950/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                {tier.budgetLabel}
              </span>
              <div className="flex gap-1.5">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveImageIndex(idx);
                    }}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'w-6 bg-gold-400'
                        : 'w-2.5 bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`View photo ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600">
              {tier.badge}
            </span>
            <span className="text-[11px] font-semibold text-forest-950/50">
              Personalized Booking
            </span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-forest-950 leading-snug">
            {tier.name}
          </h3>

          <p className="mt-2 text-xs sm:text-sm font-medium text-forest-800/90 leading-relaxed italic">
            "{tier.tagline}"
          </p>

          <p className="mt-3 text-xs sm:text-sm text-forest-950/75 leading-relaxed">
            {tier.description}
          </p>

          {/* Sample Styles Chips */}
          <div className="mt-5 pt-4 border-t border-forest-800/10">
            <p className="text-[11px] uppercase tracking-wider font-bold text-forest-950/60 mb-2">
              Typical Accommodations:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {tier.sampleStyles.map((style) => (
                <span
                  key={style}
                  className="rounded-lg bg-ivory-200/70 border border-forest-800/10 px-2.5 py-1 text-[11px] font-medium text-forest-950"
                >
                  {style}
                </span>
              ))}
            </div>
          </div>

          {/* Inclusions Checklist */}
          <div className="mt-5 pt-4 border-t border-forest-800/10">
            <p className="text-[11px] uppercase tracking-wider font-bold text-forest-950/60 mb-2.5">
              What We Guarantee in this Tier:
            </p>
            <ul className="space-y-2">
              {tier.features.slice(0, 5).map((feat) => (
                <li key={feat} className="flex items-start gap-2 text-xs text-forest-950/80 leading-snug">
                  <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
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
          <span>Plan Tour with {tier.stars}-Star Stays</span>
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
          <span>Inquire on WhatsApp for {tier.stars}-Star Quote</span>
        </a>
      </div>
    </div>
  );
}

// Export both default and named for backward compatibility
export const HotelCard = HotelTierCard;
export default HotelTierCard;
