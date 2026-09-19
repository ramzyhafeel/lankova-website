import { Link } from 'react-router-dom';
import {
  Car,
  Plane,
  Map,
  Building2,
  Users,
  Calendar,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

const showcaseServices = [
  {
    id: 'car-transfers',
    icon: Car,
    title: 'Private Car & Van Transfers',
    to: '/transportation',
  },
  {
    id: 'airport-transfers',
    icon: Plane,
    title: 'Airport Transfers',
    to: '/transportation',
  },
  {
    id: 'custom-tours',
    icon: Map,
    title: 'Custom Sri Lanka Tours',
    to: '/customize-tour',
  },
  {
    id: 'hotel-transfers',
    icon: Building2,
    title: 'Hotel-to-Hotel Transport',
    to: '/transportation',
  },
  {
    id: 'family-trips',
    icon: Users,
    title: 'Private Family Trips',
    to: '/packages',
  },
];

const showcasePackages = [
  {
    id: '3-days',
    days: '3 Days',
    subtitle: 'Cultural Triangle',
    image: '/hero/sigiriya-rock-fortress.jpg',
    to: '/packages/3-day-sri-lanka',
  },
  {
    id: '5-days',
    days: '5 Days',
    subtitle: 'Misty Tea Highlands',
    image: '/hero/ella-nine-arch-bridge.jpg',
    to: '/packages/5-day-sri-lanka',
  },
  {
    id: '7-days',
    days: '7 Days',
    subtitle: 'Coastal Fort & Beaches',
    image: '/hero/galle-fort-lighthouse.jpg',
    to: '/packages/7-day-sri-lanka',
  },
  {
    id: '14-days',
    days: '14 Days',
    subtitle: 'Grand Island Journey',
    image: '/hero/kandy-dalada-maligawa.jpg',
    to: '/packages/14-day-sri-lanka',
  },
];

export function HeroFirstEyeShowcase() {
  return (
    <div className="w-full max-w-5xl mx-auto bg-[#fcfaf7] sm:bg-[#fcfaf7]/98 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3 sm:p-5 lg:p-5.5 shadow-[0_20px_50px_-10px_rgba(4,21,15,0.4)] border border-gold-400/30 text-forest-950 transition-all">
      {/* SECTION 1: CORE SERVICES */}
      <div className="w-full">
        <div className="flex items-center justify-between mb-1.5 sm:mb-2 px-0.5">
          <h2 className="font-serif text-sm sm:text-base lg:text-lg font-bold tracking-tight text-forest-950">
            Our Services
          </h2>
          <Link
            to="/services"
            className="inline-flex items-center gap-0.5 text-[10.5px] sm:text-xs font-semibold text-forest-800 hover:text-gold-600 transition-colors"
          >
            <span>See All</span>
            <ChevronRight size={13} className="stroke-[2.5]" />
          </Link>
        </div>

        {/* 5 Services Grid (One horizontal row across all screen sizes) */}
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5 lg:gap-3.5">
          {showcaseServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={service.to}
                className="group flex flex-col items-center text-center p-0.5 sm:p-1.5 rounded-xl transition-all duration-200 hover:bg-[#f2f8f4]"
              >
                {/* Premium Emerald/Gold Squircle Container */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-50 via-emerald-100/70 to-emerald-50/90 border border-emerald-900/15 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-emerald-100 group-hover:border-gold-400/70 group-hover:shadow-md transition-all duration-300">
                  <Icon
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6.5 lg:h-6.5 text-forest-900 group-hover:text-forest-950 transition-colors"
                    strokeWidth={1.8}
                  />
                </div>

                <span className="mt-1 sm:mt-1.5 text-[9px] sm:text-[10.5px] lg:text-xs font-semibold text-forest-950 group-hover:text-forest-800 leading-tight text-center min-h-[26px] sm:min-h-[30px] flex items-center justify-center break-words px-0.5">
                  {service.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: POPULAR PACKAGES */}
      <div className="w-full mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-forest-900/10">
        <div className="flex items-center justify-between mb-1.5 sm:mb-2 px-0.5">
          <h2 className="font-serif text-sm sm:text-base lg:text-lg font-bold tracking-tight text-forest-950">
            Popular Packages
          </h2>
          <Link
            to="/packages"
            className="inline-flex items-center gap-0.5 text-[10.5px] sm:text-xs font-semibold text-forest-800 hover:text-gold-600 transition-colors"
          >
            <span>View All Packages</span>
            <ChevronRight size={13} className="stroke-[2.5]" />
          </Link>
        </div>

        {/* 4 Packages Grid (Prominently displayed with dark contrast overlay & gold badges) */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5 lg:gap-3.5">
          {showcasePackages.map((pkg) => (
            <Link
              key={pkg.id}
              to={pkg.to}
              className="group relative h-[110px] sm:h-[135px] lg:h-[155px] rounded-xl sm:rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 block border border-white/20"
            >
              <img
                src={pkg.image}
                alt={pkg.subtitle}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Multilayer Dark Filmic Overlay for Crisp Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/15 group-hover:via-forest-950/50 transition-all duration-300" />

              <div className="absolute inset-0 p-1.5 sm:p-2.5 lg:p-3 flex flex-col justify-end text-center items-center">
                <span className="font-serif text-xs sm:text-sm lg:text-base font-bold text-white leading-tight drop-shadow-md">
                  {pkg.days}
                </span>
                <span className="text-[8px] sm:text-[10px] lg:text-[11px] text-gold-300 font-medium leading-tight line-clamp-1 mt-0.5 mb-1 drop-shadow-sm">
                  {pkg.subtitle}
                </span>

                <span className="inline-flex items-center justify-center gap-1 rounded-full bg-forest-900/90 group-hover:bg-gold-400 group-hover:text-forest-950 border border-gold-400/40 group-hover:border-gold-400 text-[7.5px] sm:text-[9px] lg:text-[10px] font-bold text-gold-200 px-2 sm:px-2.5 py-0.5 sm:py-1 transition-all duration-300 shadow-sm">
                  <span>View Details</span>
                  <ArrowRight size={10} className="stroke-[2.2]" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* SECTION 3: PRIMARY GOLDEN CTA BUTTON */}
      <div className="w-full mt-2.5 sm:mt-3 pt-0.5">
        <Link
          to="/customize-tour"
          className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 hover:from-gold-400 hover:via-gold-300 hover:to-amber-400 px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-950 shadow-[0_8px_20px_-5px_rgba(212,171,72,0.45)] hover:shadow-[0_12px_25px_-5px_rgba(212,171,72,0.6)] active:scale-[0.99] transition-all duration-300"
        >
          <Calendar size={16} strokeWidth={2.2} className="text-forest-950 shrink-0" />
          <span>Plan Your Journey</span>
          <ChevronRight size={16} strokeWidth={2.6} className="text-forest-950 shrink-0 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

export default HeroFirstEyeShowcase;
