import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Clock,
  MapPin,
  Car,
  Bed,
  Check,
  ChevronDown,
  MessageCircle,
  Calendar,
  ArrowRight,
  Shield,
  Sparkles,
} from 'lucide-react';
import { getPackage, packages } from '../data/packages';
import { createWhatsAppLink, whatsappMessages } from '../lib/whatsapp';
import { PlanMyTripModal } from '../components/ui/PlanMyTripModal';
import { PackageCard } from '../components/ui/PackageCard';

export function PackageDetails() {
  const { slug } = useParams();
  const pkg = getPackage(slug);

  const [openDay, setOpenDay] = useState(1);
  const [planModalOpen, setPlanModalOpen] = useState(false);

  if (!pkg) {
    return (
      <div className="py-32 text-center bg-ivory-100 min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl font-bold text-forest-950 mb-3">
          Tour Package Not Found
        </h1>
        <p className="text-sm text-forest-950/60 mb-6">
          The requested itinerary may have moved or been updated.
        </p>
        <Link
          to="/packages"
          className="rounded-full bg-forest-950 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-gold-500 hover:text-forest-950 transition-colors"
        >
          Explore All Packages
        </Link>
      </div>
    );
  }

  const toggleDay = (dayNum) => {
    setOpenDay(openDay === dayNum ? null : dayNum);
  };

  const relatedPackages = packages.filter((p) => p.slug !== pkg.slug).slice(0, 3);

  return (
    <div className="bg-ivory-100">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-end overflow-hidden bg-forest-950 pt-28 pb-12 sm:pb-16 text-white">
        <img
          src={pkg.heroImage || pkg.image}
          alt={pkg.name}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-45 animate-drone-push"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/40" />

        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-ivory-100/70 mb-3 font-medium">
            <Link to="/" className="hover:text-gold-400">Home</Link>
            <span>&bull;</span>
            <Link to="/packages" className="hover:text-gold-400">Tour Packages</Link>
            <span>&bull;</span>
            <span className="text-gold-300 truncate max-w-xs">{pkg.name}</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-forest-900/80 px-3.5 py-1 text-xs font-semibold text-gold-300 border border-gold-400/30 backdrop-blur-sm mb-3">
              <Clock size={13} />
              <span>{pkg.days} Days / {pkg.nights} Nights</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {pkg.name}
            </h1>

            <p className="mt-3 text-xs sm:text-base text-ivory-100/85 leading-relaxed">
              {pkg.tagline || pkg.description}
            </p>
          </div>
        </div>
      </section>

      {/* 2. TRIP SUMMARY BAR */}
      <section className="bg-white border-b border-forest-800/10 py-5 shadow-sm sticky top-16 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-xs text-forest-950 w-full md:w-auto">
            <div>
              <span className="text-[10px] uppercase font-bold text-gold-600 block">Duration</span>
              <span className="font-bold text-sm">{pkg.days} Days / {pkg.nights} Nights</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gold-600 block">Transport</span>
              <span className="font-semibold truncate block max-w-[140px]">Private Vehicle &amp; Driver</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gold-600 block">Accommodations</span>
              <span className="font-semibold truncate block max-w-[140px]">Comfort / Luxury</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gold-600 block">Destinations</span>
              <span className="font-semibold truncate block max-w-[140px]">{pkg.destinations.length} Places</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => setPlanModalOpen(true)}
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 rounded-full bg-forest-950 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-gold-500 hover:text-forest-950 transition-all shadow-sm active:scale-95"
            >
              <Calendar size={14} />
              <span>Book / Customize</span>
            </button>

            <a
              href={createWhatsAppLink(whatsappMessages.packageInquiry(pkg.name, pkg.days))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#20ba5a] transition-all shadow-sm active:scale-95"
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. MAIN CONTENT: ITINERARY & SIDEBAR */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left 2 Cols: Day-by-day Itinerary */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mb-2">
                  Trip Overview
                </h2>
                <p className="text-xs sm:text-sm text-forest-950/75 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Route Summary */}
              {pkg.route && (
                <div className="rounded-2xl bg-forest-900/5 p-4 border border-forest-800/10 flex items-center gap-3">
                  <MapPin size={20} className="text-gold-600 shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-forest-800 block">
                      Tour Route
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-forest-950">
                      {pkg.route}
                    </span>
                  </div>
                </div>
              )}

              {/* Day-by-Day Accordion */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-forest-950 mb-4">
                  Day-by-Day Itinerary
                </h3>

                <div className="space-y-3.5">
                  {pkg.itinerary.map((day) => {
                    const isOpen = openDay === day.day;
                    return (
                      <div
                        key={day.day}
                        className="rounded-2xl border border-forest-800/10 bg-white overflow-hidden shadow-sm transition-all"
                      >
                        <button
                          onClick={() => toggleDay(day.day)}
                          className="flex w-full items-center justify-between p-5 text-left hover:bg-ivory-50 transition-colors"
                        >
                          <div className="flex items-center gap-3.5">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest-950 text-gold-400 font-serif font-bold text-sm">
                              D{day.day}
                            </span>
                            <div>
                              <h4 className="font-serif text-base sm:text-lg font-bold text-forest-950 leading-tight">
                                {day.title}
                              </h4>
                              {day.route && (
                                <p className="text-[11px] text-forest-700 font-medium">
                                  {day.route}
                                </p>
                              )}
                            </div>
                          </div>

                          <ChevronDown
                            size={18}
                            className={`text-forest-700 transition-transform duration-300 ${
                              isOpen ? 'rotate-180 text-gold-600' : ''
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-6 pt-1 text-xs sm:text-sm text-forest-950/75 border-t border-forest-800/5 space-y-3">
                            <p className="leading-relaxed">{day.description}</p>

                            {day.experiences && day.experiences.length > 0 && (
                              <div className="pt-2">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-forest-950 block mb-1.5">
                                  Key Highlights:
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                  {day.experiences.map((exp) => (
                                    <span
                                      key={exp}
                                      className="rounded-lg bg-ivory-200 px-2.5 py-1 text-xs text-forest-900 font-medium"
                                    >
                                      &bull; {exp}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            <div className="flex items-center justify-between pt-3 border-t border-forest-800/5 text-[11px] text-forest-950/60 font-medium">
                              <span>Drive Time: {day.driveTime}</span>
                              <span>Overnight: {day.stay}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="rounded-2xl bg-white p-6 border border-emerald-500/20 shadow-sm">
                  <h4 className="font-serif text-lg font-bold text-forest-950 mb-3 flex items-center gap-2">
                    <Check size={18} className="text-emerald-600" />
                    <span>Included in This Tour</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-forest-950/75">
                    {pkg.included.map((inc) => (
                      <li key={inc} className="flex items-start gap-2">
                        <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-white p-6 border border-gold-500/20 shadow-sm">
                  <h4 className="font-serif text-lg font-bold text-forest-950 mb-3 flex items-center gap-2">
                    <Sparkles size={18} className="text-gold-600" />
                    <span>Optional Experiences</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-forest-950/75">
                    {pkg.optionalExperiences.map((opt) => (
                      <li key={opt} className="flex items-start gap-2">
                        <span className="text-gold-600 font-bold shrink-0">&bull;</span>
                        <span>{opt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right 1 Col: Booking Card Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-32 card-luxury rounded-2xl bg-white p-6 border border-forest-800/10 shadow-md">
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold-600 block mb-1">
                  Private Tour Inquiries
                </span>
                <h3 className="font-serif text-2xl font-bold text-forest-950 mb-3">
                  Ready to Book or Customize?
                </h3>
                <p className="text-xs sm:text-sm text-forest-950/70 leading-relaxed mb-6">
                  Every tour can be modified with your preferred dates, hotel categories, and custom stops.
                </p>

                <div className="space-y-3">
                  <button
                    onClick={() => setPlanModalOpen(true)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-forest-950 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-gold-500 hover:text-forest-950 transition-all shadow-sm active:scale-95"
                  >
                    <Calendar size={15} />
                    <span>Plan / Reserve Online</span>
                  </button>

                  <a
                    href={createWhatsAppLink(whatsappMessages.packageInquiry(pkg.name, pkg.days))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-50 py-3 text-xs font-bold uppercase tracking-wider text-emerald-800 hover:bg-emerald-100 transition-all"
                  >
                    <MessageCircle size={16} className="text-emerald-600" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>

                <div className="mt-6 pt-5 border-t border-forest-800/10 space-y-2.5 text-xs text-forest-950/70">
                  <div className="flex items-center gap-2">
                    <Shield size={14} className="text-gold-600 shrink-0" />
                    <span>100% Private Chauffeured Tour</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car size={14} className="text-gold-600 shrink-0" />
                    <span>Dedicated Air-Conditioned Vehicle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-gold-600 shrink-0" />
                    <span>Fuel, Highway Tolls &amp; Parking Included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OTHER RELATED TOURS */}
      {relatedPackages.length > 0 && (
        <section className="py-16 bg-white border-t border-forest-800/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="font-serif text-2xl font-bold text-forest-950 mb-8 text-center">
              You Might Also Like
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPackages.map((p) => (
                <PackageCard key={p.slug} pkg={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Plan My Trip Modal */}
      <PlanMyTripModal
        isOpen={planModalOpen}
        onClose={() => setPlanModalOpen(false)}
      />
    </div>
  );
}

export default PackageDetails;