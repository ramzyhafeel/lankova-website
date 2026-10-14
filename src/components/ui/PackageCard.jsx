import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, MessageCircle, Car, Utensils, Sparkles } from 'lucide-react';
import { createWhatsAppLink, whatsappMessages } from '../../lib/whatsapp';
import { getPackagePricing } from '../../data/packages';

export function PackageCard({ pkg }) {
  const { transportPrice, halfBoardPrice } =
    pkg.transportPrice && pkg.halfBoardPrice
      ? { transportPrice: pkg.transportPrice, halfBoardPrice: pkg.halfBoardPrice }
      : getPackagePricing(pkg.days);

  return (
    <div className="group card-luxury zoom-card flex flex-col overflow-hidden rounded-2xl bg-white border border-forest-800/10 h-full justify-between">
      <div>
        {/* Image container */}
        <Link
          to={`/packages/${pkg.slug}`}
          className="relative h-52 sm:h-56 w-full overflow-hidden bg-forest-950 block"
        >
          <img
            src={pkg.image}
            alt={`${pkg.name} - Private Sri Lanka Tour Package with Lankova`}
            loading="lazy"
            className="zoom-image h-full w-full object-cover object-center"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-black/25" />

          {/* Duration Badge */}
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-forest-950/85 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-gold-300 border border-gold-400/30">
            <Clock size={12} />
            <span>
              {pkg.days} Days / {pkg.nights} Nights
            </span>
          </div>

          {/* Starting Price Pill on Top Right */}
          <div className="absolute top-3 right-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-3 py-1 text-[11px] font-extrabold text-forest-950 shadow-sm">
            From ${transportPrice} / pp
          </div>

          {/* Suitable For Pill */}
          {pkg.suitableFor && (
            <div className="absolute bottom-3 left-3">
              <span className="inline-block rounded-md bg-white/90 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-bold text-forest-950 uppercase tracking-wider">
                {Array.isArray(pkg.suitableFor) ? pkg.suitableFor[0] : pkg.suitableFor}
              </span>
            </div>
          )}
        </Link>

        {/* Content */}
        <div className="p-5 sm:p-6 pb-0">
          <h3 className="font-serif text-xl font-bold text-forest-950 group-hover:text-forest-800 transition-colors">
            <Link to={`/packages/${pkg.slug}`}>{pkg.name}</Link>
          </h3>

          {/* Route path */}
          {pkg.route && (
            <div className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-forest-700 line-clamp-1">
              <MapPin size={13} className="text-gold-600 shrink-0" />
              <span>{pkg.route}</span>
            </div>
          )}

          <p className="mt-2.5 text-xs sm:text-sm text-forest-950/70 leading-relaxed line-clamp-2">
            {pkg.description}
          </p>

          {/* Dual Pricing Box: Transport vs Half Board */}
          <div className="mt-4 grid grid-cols-2 gap-2.5 rounded-xl bg-ivory-100/90 p-2.5 border border-forest-800/10">
            {/* Transport Only */}
            <div className="rounded-lg bg-white p-2.5 border border-forest-800/8 flex flex-col justify-between">
              <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-forest-800">
                <Car size={11} className="text-gold-600 shrink-0" />
                <span>Transport Only</span>
              </div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="font-serif text-xl font-extrabold text-forest-950">
                  ${transportPrice}
                </span>
                <span className="text-[10px] font-medium text-forest-950/55">/ person</span>
              </div>
              <span className="text-[10px] text-forest-950/60 mt-0.5 block">
                Car &amp; Driver Only
              </span>
            </div>

            {/* Half Board (All-In-One: Transport + Hotel + Meals) */}
            <div className="relative rounded-lg bg-forest-950 p-2.5 border border-gold-400 text-white flex flex-col justify-between shadow-xs ring-1 ring-gold-400/30">
              <div className="flex items-center justify-between gap-1">
                <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-gold-300">
                  <Sparkles size={10} className="fill-gold-300 text-gold-300" />
                  <span>Half Board</span>
                </div>
                <span className="rounded bg-gold-400 text-forest-950 text-[9px] font-black px-1.5 py-0.2 uppercase tracking-tight">
                  Best Value
                </span>
              </div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="font-serif text-xl font-extrabold text-white">
                  ${halfBoardPrice}
                </span>
                <span className="text-[10px] font-medium text-ivory-100/70">/ person</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-400 mt-0.5 block leading-tight">
                Hotel + Food + Transport!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-5 sm:p-6 pt-4">
        <div className="pt-3.5 border-t border-forest-800/10 flex items-center justify-between gap-3">
          <Link
            to={`/packages/${pkg.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest-900 group-hover:text-gold-600 transition-colors"
          >
            <span>View Itinerary</span>
            <ArrowRight size={14} className="stroke-[2.5]" />
          </Link>

          <a
            href={createWhatsAppLink(
              whatsappMessages.packageInquiry(pkg.name, pkg.days, transportPrice, halfBoardPrice)
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Inquire about ${pkg.name} on WhatsApp`}
            className="inline-flex items-center gap-1 rounded-full bg-forest-900/10 px-3.5 py-1.5 text-xs font-semibold text-forest-900 hover:bg-gold-400 hover:text-forest-950 transition-all"
          >
            <MessageCircle size={13} className="text-forest-800" />
            <span>Inquire</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
