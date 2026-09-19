import { Users, Briefcase, Wind, Check, ArrowRight } from 'lucide-react';
import { createWhatsAppLink } from '../../lib/whatsapp';

export function VehicleCard({ vehicle }) {
  const inquiryMessage = `Hello LANKOVA, I would like to inquire about booking the ${vehicle.name} for private transport in Sri Lanka.`;

  return (
    <div className="card-luxury overflow-hidden rounded-2xl bg-white border border-forest-800/10 flex flex-col justify-between">
      <div>
        {/* Vehicle Image */}
        <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-forest-950">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 right-3 rounded-full bg-forest-950/80 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-gold-300 border border-gold-400/20">
            {vehicle.suitable}
          </div>
        </div>

        {/* Details */}
        <div className="p-5">
          <h3 className="font-serif text-xl font-bold text-forest-950">{vehicle.name}</h3>

          {/* Specs grid */}
          <div className="mt-4 grid grid-cols-3 gap-2 py-3 border-y border-forest-800/10 text-center text-xs text-forest-950/80">
            <div className="flex flex-col items-center">
              <Users size={16} className="text-gold-600 mb-1" />
              <span className="font-bold text-forest-950">{vehicle.passengers}</span>
              <span className="text-[10px] text-forest-950/60">Guests</span>
            </div>
            <div className="flex flex-col items-center border-x border-forest-800/10">
              <Briefcase size={16} className="text-gold-600 mb-1" />
              <span className="font-bold text-forest-950">{vehicle.luggage}</span>
              <span className="text-[10px] text-forest-950/60">Bags</span>
            </div>
            <div className="flex flex-col items-center">
              <Wind size={16} className="text-gold-600 mb-1" />
              <span className="font-bold text-forest-950">Full A/C</span>
              <span className="text-[10px] text-forest-950/60">Climate</span>
            </div>
          </div>

          {/* Features list */}
          {vehicle.features && (
            <ul className="mt-4 space-y-1.5 text-xs text-forest-950/75">
              {vehicle.features.slice(0, 3).map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Booking Action */}
      <div className="p-5 pt-0">
        <a
          href={createWhatsAppLink(inquiryMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-forest-950 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-gold-500 hover:text-forest-950 active:scale-98"
        >
          <span>Book This Vehicle</span>
          <ArrowRight size={13} />
        </a>
      </div>
    </div>
  );
}

export default VehicleCard;
