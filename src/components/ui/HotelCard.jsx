import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';

export function HotelCard({ hotel }) {
  return (
    <div className="card-luxury overflow-hidden rounded-2xl bg-white border border-forest-800/10 flex flex-col justify-between">
      <div>
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-forest-950">
          <img
            src={hotel.image}
            alt={hotel.name}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 left-3 rounded-full bg-forest-950/80 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-gold-300 border border-gold-400/20">
            {hotel.category}
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-1.5 text-xs text-forest-700 font-medium mb-1">
            <MapPin size={13} className="text-gold-600 shrink-0" />
            <span>{hotel.location}</span>
          </div>

          <h3 className="font-serif text-xl font-bold text-forest-950">{hotel.name}</h3>

          <p className="mt-2.5 text-xs sm:text-sm text-forest-950/70 leading-relaxed line-clamp-2">
            {hotel.description}
          </p>

          {hotel.highlights && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {hotel.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-md bg-ivory-200 px-2 py-0.5 text-[11px] font-medium text-forest-900"
                >
                  {h}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-5 pt-0">
        <Link
          to={`/customize-tour?hotel=${encodeURIComponent(hotel.name)}`}
          className="w-full inline-flex items-center justify-center rounded-full border border-forest-800/20 bg-ivory-50 py-2.5 text-xs font-semibold uppercase tracking-wider text-forest-950 hover:bg-gold-400 hover:border-gold-400 transition-all"
        >
          Include in My Tour
        </Link>
      </div>
    </div>
  );
}

export default HotelCard;
