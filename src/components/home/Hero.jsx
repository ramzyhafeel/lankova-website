import { useState, useEffect } from 'react';
import {
  ShieldCheck,
  UserCheck,
  Star,
  Shield,
  Users,
  Headphones,
} from 'lucide-react';
import { HeroFirstEyeShowcase } from './HeroFirstEyeShowcase';

const heroPlaces = [
  {
    id: 'sigiriya',
    name: 'Sigiriya Rock Fortress',
    shortName: 'Sigiriya',
    image: '/hero/sigiriya-rock-fortress.jpg',
    kenBurnsClass: 'animate-drone-push',
  },
  {
    id: 'ella',
    name: 'Nine Arch Bridge, Ella',
    shortName: 'Ella',
    image: '/hero/ella-nine-arch-bridge.jpg',
    kenBurnsClass: 'animate-drone-right',
  },
  {
    id: 'galle',
    name: 'Galle Fort & Lighthouse',
    shortName: 'Galle',
    image: '/hero/galle-fort-lighthouse.jpg',
    kenBurnsClass: 'animate-drone-pull',
  },
  {
    id: 'kandy',
    name: 'Temple of the Sacred Tooth',
    shortName: 'Kandy',
    image: '/hero/kandy-dalada-maligawa.jpg',
    kenBurnsClass: 'animate-drone-left',
  },
  {
    id: 'bentota',
    name: 'Madu River Mangrove Safari',
    shortName: 'Bentota',
    image: '/hero/bentota-madu-river.jpg',
    kenBurnsClass: 'animate-drone-push',
  },
  {
    id: 'arugam-bay',
    name: 'Arugam Bay Golden Coast',
    shortName: 'Arugam Bay',
    image: '/hero/arugam-bay-beach.jpg',
    kenBurnsClass: 'animate-drone-right',
  },
  {
    id: 'trincomalee',
    name: 'Swami Rock & Koneswaram',
    shortName: 'Trincomalee',
    image: '/hero/trincomalee-koneswaram.jpg',
    kenBurnsClass: 'animate-drone-pull',
  },
  {
    id: 'colombo',
    name: 'Colombo Lotus Tower',
    shortName: 'Colombo',
    image: '/hero/colombo-lotus-tower.jpg',
    kenBurnsClass: 'animate-drone-left',
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Cinematic 5-second pacing with calm, professional drone glides
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroPlaces.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="relative overflow-hidden bg-forest-950 flex flex-col justify-between pt-16 sm:pt-18 lg:pt-20 pb-8 sm:pb-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Scenic Landscape Images with 1400ms Cross-Dissolve & Steady Drone Motion */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-forest-950 pointer-events-none">
        {heroPlaces.map((place, idx) => {
          const isCurrent = idx === currentIndex;
          return (
            <div
              key={place.id}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
                isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={place.image}
                alt={place.name}
                className={`h-full w-full object-cover object-center brightness-[0.70] contrast-[1.04] saturate-[1.06] ${
                  isCurrent ? place.kenBurnsClass : ''
                }`}
              />
            </div>
          );
        })}

        {/* Authentic 35mm Optical Film Grain Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none film-grain-overlay opacity-30 mix-blend-overlay" />

        {/* Lens Vignette */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(4,21,15,0.75)_100%)]" />

        {/* Cinema Depth Grading for crystal clear typography */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-forest-950/92 via-forest-950/40 to-forest-950/95" />
      </div>

      {/* Content Container */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Top Hero Headline & Intro Area (Compact for Above-The-Fold First View) */}
        <div className="pt-1 pb-1.5 sm:pb-2 max-w-3xl text-center mx-auto flex flex-col items-center">
          {/* Serif Luxury Headline */}
          <h1 className="font-serif text-2xl sm:text-4xl lg:text-[2.85rem] font-bold tracking-tight text-white leading-[1.12]">
            Discover Sri Lanka with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-300 drop-shadow-[0_2px_12px_rgba(212,171,72,0.4)] font-extrabold inline-block">
              Lankova
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-1 max-w-xl mx-auto text-[11.5px] sm:text-xs lg:text-sm text-ivory-100/90 leading-relaxed font-normal">
            Private transport and personalised travel experiences across Sri Lanka.
          </p>

          {/* Highlighted Trust Points Bar (Professional High-Visibility UI) */}
          <div className="mt-2 sm:mt-2.5 inline-flex items-center justify-center flex-wrap sm:flex-nowrap gap-1 sm:gap-0 px-2 sm:px-3 py-1 rounded-full bg-forest-950/85 backdrop-blur-md border border-gold-400/45 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            {/* Safe & Reliable */}
            <div className="px-2 sm:px-3 py-0.5 flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-white">
              <span className="flex h-5 w-5 sm:h-5.5 sm:w-5.5 items-center justify-center rounded-full bg-gold-400/25 text-gold-400 border border-gold-400/50 shadow-xs shrink-0">
                <ShieldCheck size={12} strokeWidth={2.4} />
              </span>
              <span className="tracking-wide whitespace-nowrap">Safe &amp; Reliable</span>
            </div>

            <span className="hidden sm:block h-3.5 w-px bg-gold-400/35" />

            {/* Local Expertise */}
            <div className="px-2 sm:px-3 py-0.5 flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-white">
              <span className="flex h-5 w-5 sm:h-5.5 sm:w-5.5 items-center justify-center rounded-full bg-gold-400/25 text-gold-400 border border-gold-400/50 shadow-xs shrink-0">
                <UserCheck size={12} strokeWidth={2.4} />
              </span>
              <span className="tracking-wide whitespace-nowrap">Local Expertise</span>
            </div>

            <span className="hidden sm:block h-3.5 w-px bg-gold-400/35" />

            {/* 5.0+ Reviews */}
            <div className="px-2 sm:px-3 py-0.5 flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-gold-300">
              <span className="flex h-5 w-5 sm:h-5.5 sm:w-5.5 items-center justify-center rounded-full bg-gold-400/25 text-gold-400 border border-gold-400/50 shadow-xs shrink-0">
                <Star size={12} className="fill-gold-400 text-gold-400" />
              </span>
              <span className="tracking-wide whitespace-nowrap">5.0+ Reviews</span>
            </div>
          </div>
        </div>

        {/* Floating Curved Luxury Ivory Sheet ("1st eye" Services & Popular Packages Showcase Box) */}
        <div className="w-full mt-2 sm:mt-2.5">
          <HeroFirstEyeShowcase />
        </div>

        {/* Bottom Dark Area: Bottom Trust Badges & Italic Quote */}
        <div className="w-full max-w-4xl mx-auto mt-6 sm:mt-8 text-center flex flex-col items-center">
          {/* Bottom 3 Trust Badges (Government Licensed | Trusted by Travelers | 24/7 Support) */}
          <div className="flex flex-wrap items-center justify-center divide-x divide-white/20 text-[10.5px] sm:text-xs font-semibold text-ivory-100/85">
            <div className="px-3 sm:px-5 flex items-center gap-1.5">
              <Shield size={15} className="text-gold-400 shrink-0" strokeWidth={2} />
              <span>Government Licensed</span>
            </div>
            <div className="px-3 sm:px-5 flex items-center gap-1.5">
              <Users size={15} className="text-gold-400 shrink-0" strokeWidth={2} />
              <span>Trusted by Travelers</span>
            </div>
            <div className="px-3 sm:px-5 flex items-center gap-1.5">
              <Headphones size={15} className="text-gold-400 shrink-0" strokeWidth={2} />
              <span>24/7 Support</span>
            </div>
          </div>

          {/* Signature Quote */}
          <blockquote className="mt-4 sm:mt-5 font-serif italic text-sm sm:text-base lg:text-lg text-ivory-100/90 max-w-xl leading-relaxed">
            “Your journey is not just transportation. It is your Sri Lankan experience.”
          </blockquote>

          {/* Gold Decorative Flourish Ornament */}
          <div className="mt-2.5 flex items-center justify-center gap-2 text-gold-400/80">
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-gold-400/70" />
            <svg width="24" height="12" viewBox="0 0 24 12" fill="currentColor" className="text-gold-400">
              <path d="M12 0L14.5 4.5L19 6L14.5 7.5L12 12L9.5 7.5L5 6L9.5 4.5L12 0Z" />
            </svg>
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-gold-400/70" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;