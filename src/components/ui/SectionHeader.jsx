import { JourneyLine } from './JourneyLine';

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-gold-500 mb-2">
          {eyebrow}
        </p>
      )}

      <h2
        className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-forest-950'
        }`}
      >
        {title}
      </h2>

      <div className={`my-3.5 flex ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <JourneyLine />
      </div>

      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            light ? 'text-ivory-100/75' : 'text-forest-950/70'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
