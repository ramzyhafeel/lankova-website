import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, MessageCircle } from 'lucide-react';
import { createWhatsAppLink, whatsappMessages } from '../../lib/whatsapp';

export function PackageCard({ pkg }) {
  return (
    <div className="group card-luxury zoom-card flex flex-col overflow-hidden rounded-2xl bg-white border border-forest-800/10">
      {/* Image container */}
      <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-forest-950">
        <img
          src={pkg.image}
          alt={pkg.name}
          loading="lazy"
          className="zoom-image h-full w-full object-cover object-center"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-black/20" />

        {/* Duration Badge */}
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-forest-950/85 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-gold-300 border border-gold-400/30">
          <Clock size={12} />
          <span>{pkg.days} Days / {pkg.nights} Nights</span>
        </div>

        {/* Suitable For Pill */}
        {pkg.suitableFor && (
          <div className="absolute bottom-3 left-3">
            <span className="inline-block rounded-md bg-white/90 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-bold text-forest-950 uppercase tracking-wider">
              {Array.isArray(pkg.suitableFor) ? pkg.suitableFor[0] : pkg.suitableFor}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6 justify-between">
        <div>
          <h3 className="font-serif text-xl font-bold text-forest-950 group-hover:text-forest-800 transition-colors">
            <Link to={`/packages/${pkg.slug}`}>
              {pkg.name}
            </Link>
          </h3>

          {/* Route path */}
          {pkg.route && (
            <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-forest-700 line-clamp-1">
              <MapPin size={13} className="text-gold-600 shrink-0" />
              <span>{pkg.route}</span>
            </div>
          )}

          <p className="mt-3 text-xs sm:text-sm text-forest-950/70 leading-relaxed line-clamp-3">
            {pkg.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-forest-800/10 flex items-center justify-between gap-3">
          <Link
            to={`/packages/${pkg.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest-900 group-hover:text-gold-600 transition-colors"
          >
            <span>View Itinerary</span>
            <ArrowRight size={14} className="stroke-[2.5]" />
          </Link>

          <a
            href={createWhatsAppLink(whatsappMessages.packageInquiry(pkg.name, pkg.days))}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Inquire about ${pkg.name} on WhatsApp`}
            className="inline-flex items-center gap-1 rounded-full bg-forest-900/10 px-3 py-1.5 text-xs font-semibold text-forest-900 hover:bg-gold-400 hover:text-forest-950 transition-all"
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
