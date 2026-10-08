import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Users,
  Sparkles,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Camera,
  Calendar,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Compass,
  Heart,
  Share2,
} from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Reveal } from '../components/ui/Reveal';
import { galleryImages, galleryFilters, guestHighlights } from '../data/gallery';
import { createWhatsAppLink } from '../lib/whatsapp';

export function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filtered images list
  const filtered =
    filter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  // Lightbox handlers
  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % filtered.length);
    }
  }, [lightboxIndex, filtered.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    }
  }, [lightboxIndex, filtered.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex]);

  const currentImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div>
      {/* 1. EDITORIAL PAGE HERO */}
      <PageHero
        eyebrow="Real Guest Moments & Photo Gallery"
        title="Visual Journey Across Sri Lanka"
        subtitle="Explore genuine moments from international travelers exploring misty mountain bridges, ancient UNESCO citadels, wildlife safaris, and tropical beaches with their dedicated Lankova private chauffeurs."
        image="/hero/ella-nine-arch-bridge.jpg"
      />

      {/* 2. TRUST & AUTHENTICITY HIGHLIGHTS BAR */}
      <section className="bg-forest-900 border-y border-forest-800/40 py-6 text-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/20 text-gold-400 shrink-0">
                <Users size={22} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white tracking-wide">100% Real Travelers</p>
                <p className="text-[11px] text-ivory-100/65">Candid moments from verified tours</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/20 text-gold-400 shrink-0">
                <Camera size={22} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white tracking-wide">Scenic Photo Stops</p>
                <p className="text-[11px] text-ivory-100/65">Drivers know the best hidden viewpoints</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/20 text-gold-400 shrink-0">
                <Compass size={22} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white tracking-wide">Island-Wide Journeys</p>
                <p className="text-[11px] text-ivory-100/65">Ella, Sigiriya, Kandy, Galle &amp; Yala</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/20 text-gold-400 shrink-0">
                <Heart size={22} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white tracking-wide">Private &amp; Stress-Free</p>
                <p className="text-[11px] text-ivory-100/65">No rushed bus crowds or tight schedules</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED GUEST SPOTLIGHT STRIP */}
      <section className="py-12 sm:py-16 bg-white border-b border-forest-800/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-gold-400/15 border border-gold-400/30 px-3 py-1 text-xs font-bold text-gold-600 uppercase tracking-widest mb-2">
                  <Sparkles size={13} className="text-gold-600 fill-gold-600" />
                  <span>Featured Highlights</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
                  Guest Spotlight: Unforgettable Island Memories
                </h2>
              </div>
              <button
                onClick={() => setFilter('Guests')}
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-forest-900 hover:text-gold-600 transition-colors shrink-0 cursor-pointer"
              >
                <span>View All 15 Guest Moments</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </Reveal>

          {/* Featured Horizontal Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {guestHighlights.slice(0, 4).map((item, idx) => (
              <Reveal key={item.id} delay={idx * 70}>
                <div
                  onClick={() => {
                    const matchIdx = filtered.findIndex((f) => f.id === item.id);
                    if (matchIdx !== -1) openLightbox(matchIdx);
                    else {
                      setFilter('Guests');
                      setTimeout(() => {
                        const newIdx = galleryImages.findIndex((f) => f.id === item.id);
                        openLightbox(newIdx !== -1 ? newIdx : 0);
                      }, 50);
                    }
                  }}
                  className="group relative h-80 rounded-2xl overflow-hidden shadow-md cursor-pointer border border-forest-800/10 block bg-forest-950"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/30 to-transparent" />

                  {/* Top Location Pill */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 rounded-full bg-forest-950/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-gold-300 border border-gold-400/20">
                      <MapPin size={11} className="text-gold-400 shrink-0" />
                      <span>{item.location}</span>
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest-950/70 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={13} />
                    </span>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 block mb-1">
                      Guest Moment
                    </span>
                    <h3 className="font-serif text-base font-bold text-white drop-shadow-sm group-hover:text-gold-300 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-ivory-100/75 mt-1 line-clamp-2 leading-relaxed">
                      {item.story}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MAIN GALLERY WITH FILTER PILLS */}
      <section className="py-16 sm:py-24 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Curated Photo Collection"
              title="Browse by Experience &amp; Destination"
              subtitle="Filter through authentic guest moments, ancient heritage citadels, tea hill valleys, and wildlife encounters across Sri Lanka."
            />
          </Reveal>

          {/* Filter Pills */}
          <div className="mt-10 mb-8 flex flex-wrap justify-center items-center gap-2">
            {galleryFilters.map((f) => {
              const isGuestFilter = f === 'Guests';
              const isActive = filter === f;

              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-5 py-2.5 text-xs font-bold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? isGuestFilter
                        ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-forest-950 shadow-md scale-105 ring-2 ring-gold-400/40'
                        : 'bg-forest-950 text-gold-400 shadow-md scale-105 ring-2 ring-forest-900/30'
                      : isGuestFilter
                      ? 'bg-gold-50 border border-gold-300 text-forest-950 hover:bg-gold-100'
                      : 'bg-white border border-forest-800/15 text-forest-950/75 hover:bg-forest-900 hover:text-white'
                  }`}
                >
                  {isGuestFilter && <Users size={13} className="text-forest-950 shrink-0" />}
                  <span>{f === 'Guests' ? 'Guest Moments (15)' : f}</span>
                </button>
              );
            })}
          </div>

          {/* Photo Counter */}
          <p className="mb-10 text-center text-xs text-forest-950/60 font-medium">
            Showing {filtered.length} photo{filtered.length !== 1 ? 's' : ''}{' '}
            {filter !== 'All' ? `in ${filter}` : 'across all collections'}
          </p>

          {/* Modern Masonry-Style Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filtered.map((item, i) => {
              const isGuest = item.category === 'Guests';

              return (
                <Reveal key={item.id || item.src + i} delay={(i % 3) * 60}>
                  <div
                    onClick={() => openLightbox(i)}
                    className="group card-luxury relative overflow-hidden rounded-2xl bg-white border border-forest-800/10 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
                  >
                    {/* Image Area */}
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-forest-950">
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                        {isGuest ? (
                          <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-forest-950 shadow-sm">
                            <Users size={12} className="text-forest-950 shrink-0" />
                            <span>Guest Moment</span>
                          </div>
                        ) : (
                          <span className="rounded-full bg-forest-950/80 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-ivory-100 border border-white/20">
                            {item.category}
                          </span>
                        )}

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-forest-950/70 text-white backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Maximize2 size={14} />
                        </div>
                      </div>

                      {/* Location Chip over Image */}
                      {item.location && (
                        <div className="absolute bottom-3 left-3.5 z-10">
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gold-300 bg-forest-950/80 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-gold-400/20">
                            <MapPin size={11} className="text-gold-400 shrink-0" />
                            <span>{item.location}</span>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Card Content Footer */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-forest-950 group-hover:text-gold-600 transition-colors">
                          {item.title}
                        </h3>
                        {item.story && (
                          <p className="mt-1.5 text-xs text-forest-950/70 leading-relaxed line-clamp-2">
                            {item.story}
                          </p>
                        )}
                      </div>

                      <div className="mt-4 pt-3 border-t border-forest-800/10 flex items-center justify-between text-[11px] font-semibold text-forest-800/80">
                        <span className="group-hover:text-gold-600 transition-colors">
                          Click to view full photo
                        </span>
                        <ArrowRight size={13} className="text-gold-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. GUEST PHOTOGRAPHY VALUE BANNER */}
      <section className="py-16 bg-forest-950 text-white border-t border-forest-800/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#d4ab48_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl border border-forest-800/60 bg-forest-900/60 p-8 sm:p-12 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
                <div className="space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-400 border border-gold-400/30 mb-3 mx-auto sm:mx-0">
                    <Camera size={22} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">Your Personal Photographer</h3>
                  <p className="text-xs text-ivory-100/70 leading-relaxed">
                    Our courteous private chauffeurs are always happy to help take couple, group, and family photos so everyone is in the frame.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-400 border border-gold-400/30 mb-3 mx-auto sm:mx-0">
                    <Compass size={22} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">Secret Scenic Viewpoints</h3>
                  <p className="text-xs text-ivory-100/70 leading-relaxed">
                    We know the exact timing for Nine Arches trains, Sigiriya sunrise peaks, and quiet waterfall pools away from the crowded tour bus groups.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-400 border border-gold-400/30 mb-3 mx-auto sm:mx-0">
                    <Calendar size={22} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">No Rushed Schedules</h3>
                  <p className="text-xs text-ivory-100/70 leading-relaxed">
                    Want to stop spontaneously for roadside king coconuts, tea photos, or mountain light? Your private itinerary moves at your rhythm.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. FINAL CONVERSION BANNER */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 text-white relative overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-gold-400">
            Create Your Own Sri Lankan Album
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4 leading-tight">
            Ready to Experience These Sights in Person?
          </h2>
          <p className="mx-auto max-w-2xl text-xs sm:text-base text-ivory-100/80 leading-relaxed font-normal mb-8">
            Tell us which destinations caught your eye. Our travel coordinators will craft a personalized private tour itinerary with a dedicated vehicle, driver-guide, and handpicked stays.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/customize-tour"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-950 shadow-lg hover:from-gold-400 hover:to-gold-300 transition-all active:scale-95"
            >
              <Calendar size={16} strokeWidth={2.4} />
              <span>Design Your Custom Tour</span>
            </Link>

            <a
              href={createWhatsAppLink(
                'Hello LANKOVA, I was browsing your photo gallery and would like to plan a private tour to visit these destinations.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-950/50 backdrop-blur-md px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-300 hover:bg-emerald-900/60 transition-all active:scale-95"
            >
              <MessageCircle size={17} className="text-emerald-400" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE LIGHTBOX MODAL */}
      {currentImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest-950/95 backdrop-blur-md p-3 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Top Control Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-ivory-100/70 bg-forest-900/80 px-3 py-1 rounded-full border border-forest-800">
                {lightboxIndex + 1} of {filtered.length}
              </span>
              {currentImage.category === 'Guests' && (
                <span className="inline-flex items-center gap-1 rounded-full bg-gold-400 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-forest-950">
                  <Users size={11} />
                  <span>Guest Moment</span>
                </span>
              )}
            </div>

            <button
              onClick={closeLightbox}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-900/80 text-white hover:bg-gold-500 hover:text-forest-950 transition-all cursor-pointer border border-forest-700/60"
              aria-label="Close photo view"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-forest-900/80 text-white hover:bg-gold-500 hover:text-forest-950 transition-all cursor-pointer border border-forest-700/60 z-20 shadow-lg"
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-forest-900/80 text-white hover:bg-gold-500 hover:text-forest-950 transition-all cursor-pointer border border-forest-700/60 z-20 shadow-lg"
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>

          {/* Modal Content Container */}
          <div
            className="relative max-w-5xl w-full max-h-[88vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative max-h-[68vh] overflow-hidden rounded-2xl shadow-2xl bg-black">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-h-[68vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            {/* Bottom Caption & Action Strip */}
            <div className="w-full max-w-3xl mt-4 rounded-2xl bg-forest-900/90 border border-forest-800/80 p-4 sm:p-5 backdrop-blur-md text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {currentImage.location && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gold-400">
                      <MapPin size={12} />
                      <span>{currentImage.location}</span>
                    </span>
                  )}
                  <span className="text-ivory-100/40 text-xs">•</span>
                  <span className="text-[11px] text-ivory-100/60 uppercase font-bold tracking-wider">
                    {currentImage.category}
                  </span>
                </div>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                  {currentImage.title}
                </h4>
                {currentImage.story && (
                  <p className="text-xs text-ivory-100/80 mt-1 max-w-xl leading-relaxed">
                    {currentImage.story}
                  </p>
                )}
              </div>

              {/* Direct Booking CTA */}
              <div className="shrink-0 flex items-center gap-2">
                <a
                  href={createWhatsAppLink(
                    `Hello LANKOVA, I saw the photo "${currentImage.title}" at ${currentImage.location || 'Sri Lanka'} in your gallery and would love to experience this on my private tour.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white hover:bg-[#20ba5a] transition-all whitespace-nowrap shadow-sm"
                >
                  <MessageCircle size={14} />
                  <span>Book This Trip</span>
                </a>

                <Link
                  to="/customize-tour"
                  onClick={closeLightbox}
                  className="inline-flex items-center gap-1.5 rounded-full bg-forest-800 hover:bg-gold-500 hover:text-forest-950 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all whitespace-nowrap border border-forest-700"
                >
                  <Calendar size={13} />
                  <span>Plan Tour</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;