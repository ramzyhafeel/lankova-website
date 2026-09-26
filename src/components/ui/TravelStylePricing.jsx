import { Reveal } from './Reveal';

const travelCategories = [
  { name: 'Comfort', price: 33 },
  { name: 'Premium', price: 41 },
  { name: 'Luxury', price: 52 },
];

export function TravelStylePricing() {
  return (
    <div className="mb-10">
      {/* Subsection Heading */}
      <Reveal>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 text-center mb-6">
          Choose Your Travel Style
        </h3>
      </Reveal>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto">
        {travelCategories.map((cat, i) => (
          <Reveal key={cat.name} delay={i * 80}>
            <div className="rounded-2xl border border-forest-800/10 bg-white p-5 sm:p-6 text-center shadow-sm transition-all duration-300 hover:border-gold-400/40 hover:shadow-md hover:-translate-y-1">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gold-500 mb-2">
                {cat.name}
              </p>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
                USD {cat.price}
              </p>
              <p className="text-xs text-forest-950/60 mt-1">
                per person
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Customer Satisfaction Message */}
      <Reveal delay={300}>
        <p className="mt-6 text-center text-sm sm:text-base text-forest-950/70 leading-relaxed max-w-2xl mx-auto">
          <span className="text-gold-500">—</span>{' '}
          Beyond the price, your satisfaction is at the heart of every Sri Lankan journey we create.{' '}
          <span className="text-gold-500">—</span>
        </p>
      </Reveal>
    </div>
  );
}

export default TravelStylePricing;
