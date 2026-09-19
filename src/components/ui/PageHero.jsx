import { JourneyLine } from './JourneyLine';

export function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className="relative flex min-h-[45vh] sm:min-h-[50vh] items-center justify-center overflow-hidden bg-forest-950 pt-24 pb-16 text-center text-ivory-100">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-40 animate-drone-push"
      />

      {/* Luxury Vignette & Dark Forest Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-950/70 to-forest-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        {eyebrow && (
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-gold-400 mb-3 drop-shadow-sm">
            {eyebrow}
          </p>
        )}

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h1>

        <div className="my-4 flex justify-center">
          <JourneyLine />
        </div>

        {subtitle && (
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-ivory-100/80 leading-relaxed font-normal">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export default PageHero;