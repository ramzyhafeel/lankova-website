import { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { galleryImages, galleryFilters } from '../data/gallery';

export function Gallery() {
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <div>
      <PageHero
        eyebrow="Moments Captured"
        title="Visual Journey Across Sri Lanka"
        subtitle="Explore a gallery of iconic landmarks, wildlife encounters, cultural festivals, and memorable moments from our private tours."
        image="/hero/trincomalee-koneswaram.jpg"
      />

      <section className="py-16 sm:py-24 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {galleryFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all ${
                  filter === f
                    ? 'bg-forest-950 text-gold-400 shadow-md scale-105'
                    : 'bg-white border border-forest-800/15 text-forest-950/70 hover:bg-forest-900 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((item, i) => (
              <Reveal key={item.src + i} delay={(i % 3) * 60}>
                <div className="group relative overflow-hidden rounded-2xl bg-forest-950 shadow-sm transition-all hover:shadow-xl break-inside-avoid">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-gold-400">
                      {item.category}
                    </span>
                    <p className="font-serif text-sm font-semibold text-white drop-shadow-sm">
                      {item.alt}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;