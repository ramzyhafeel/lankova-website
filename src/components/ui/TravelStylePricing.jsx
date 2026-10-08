import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const travelCategories = [
  {
    name: 'Comfort',
    stars: 3,
    tier: '3-Star Stays',
    price: 33,
    highlight: 'Clean, cozy & budget-friendly',
  },
  {
    name: 'Premium',
    stars: 4,
    tier: '4-Star Resorts',
    price: 41,
    highlight: 'Scenic views & swimming pools',
    popular: true,
  },
  {
    name: 'Luxury',
    stars: 5,
    tier: '5-Star Stays',
    price: 52,
    highlight: 'Bespoke villas & tea bungalows',
  },
];

export function TravelStylePricing() {
  return (
    <div className="mb-10">
      {/* Subsection Heading */}
      <Reveal>
        <div className="text-center mb-6">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
            Choose Your Travel &amp; Accommodation Style
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-forest-950/70">
            Transparent pricing based on your comfort preference. We arrange 3-star, 4-star, and 5-star hotels for your budget.
          </p>
        </div>
      </Reveal>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto">
        {travelCategories.map((cat, i) => (
          <Reveal key={cat.name} delay={i * 80}>
            <div
              className={`relative rounded-2xl p-5 sm:p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                cat.popular
                  ? 'border-2 border-gold-400 bg-white ring-1 ring-gold-400/30'
                  : 'border border-forest-800/10 bg-white hover:border-gold-400/40'
              }`}
            >
              {cat.popular && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-forest-950 shadow-sm">
                  Most Popular
                </div>
              )}

              <div className="flex justify-center items-center gap-0.5 text-gold-500 mb-1.5">
                {Array.from({ length: cat.stars }).map((_, idx) => (
                  <Star key={idx} size={13} fill="currentColor" />
                ))}
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gold-600 mb-0.5">
                {cat.name} ({cat.tier})
              </p>

              <p className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mt-1">
                USD {cat.price}
              </p>
              <p className="text-[11px] text-forest-950/60 mt-0.5">
                starting per person / day
              </p>

              <p className="text-[11px] font-medium text-forest-800/80 mt-2.5 pt-2 border-t border-forest-800/10">
                {cat.highlight}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Link to Hotels Page */}
      <Reveal delay={250}>
        <div className="mt-5 text-center">
          <Link
            to="/hotels"
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-forest-900 hover:text-gold-600 transition-colors"
          >
            <span>Learn How We Arrange 3, 4 &amp; 5-Star Stays For Your Budget</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </Reveal>

      {/* Customer Satisfaction Message */}
      <Reveal delay={300}>
        <p className="mt-4 text-center text-xs sm:text-sm text-forest-950/70 leading-relaxed max-w-2xl mx-auto">
          <span className="text-gold-500">—</span>{' '}
          Beyond the price, your satisfaction and comfort are at the heart of every Sri Lankan journey we create.{' '}
          <span className="text-gold-500">—</span>
        </p>
      </Reveal>
    </div>
  );
}

export default TravelStylePricing;
