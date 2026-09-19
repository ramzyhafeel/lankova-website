import { Link } from 'react-router-dom';
import {
  Car,
  Plane,
  Map,
  Building2,
  Users,
  ShieldCheck,
  Check,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Reveal } from '../components/ui/Reveal';
import { createWhatsAppLink, whatsappMessages } from '../lib/whatsapp';

const servicesList = [
  {
    icon: Car,
    title: 'Private Chauffeur & Vehicle Hire',
    tagline: 'Dedicated English-Speaking Chauffeur-Guides',
    description:
      'Hire an air-conditioned modern vehicle with a licensed private chauffeur for single-day journeys or multi-week island tours. Avoid stressful foreign driving and unpredictable public transport.',
    features: [
      'Modern air-conditioned sedans, SUVs, and luxury vans',
      'All fuel, expressway tolls, and driver accommodation covered',
      'Flexible departure times and spontaneous scenic stops',
      'Experienced English-speaking tourism drivers',
    ],
    ctaText: 'Inquire on Transport',
    whatsappMessage: whatsappMessages.driverHire,
  },
  {
    icon: Plane,
    title: 'Airport Transfers (Bandaranaike CMB)',
    tagline: 'Punctual 24/7 Meet & Greet Arrivals Service',
    description:
      'Begin and conclude your holiday effortlessly. Your private driver monitors your flight status in real-time, welcomes you inside the terminal arrival hall, assists with luggage, and drives you directly to your hotel.',
    features: [
      'Real-time flight delay monitoring',
      'Meet & Greet with personalized name paging board',
      'Direct highway transfers to Colombo, Negombo, Kandy, Galle & beyond',
      'Child seats available upon request',
    ],
    ctaText: 'Arrange Airport Pickup',
    whatsappMessage: whatsappMessages.airport,
  },
  {
    icon: Map,
    title: 'Customized Tour Planning',
    tagline: 'Tailor-Made Itineraries Built for You',
    description:
      'Collaborate with our travel coordinators to craft a personalized route balancing cultural landmarks, wildlife safaris, scenic railway journeys, and beach relaxation according to your exact timeframe.',
    features: [
      'Bespoke daily routing and realistic drive times',
      'Handpicked boutique, heritage, and luxury hotel bookings',
      'Pre-arranged wildlife jeep safaris and train tickets',
      'Free itinerary revisions until you are completely satisfied',
    ],
    ctaText: 'Build Custom Tour',
    whatsappMessage: whatsappMessages.customTour,
  },
  {
    icon: Building2,
    title: 'Hotel-to-Hotel Point Transfers',
    tagline: 'Direct, Comfortable Intercity Connections',
    description:
      'Already arranged your accommodations independently? Let Lankova handle every intercity transfer smoothly. We pick you up from your hotel lobby and deliver you directly to your next retreat.',
    features: [
      'Punctual door-to-door hotel transfers',
      'Comfortable luggage space for long stays',
      'Optional sightseeing stops en route',
      'Fixed upfront pricing with no hidden surprises',
    ],
    ctaText: 'Request Transfer Quote',
    whatsappMessage: 'Hello LANKOVA, I would like to book a private hotel-to-hotel transfer.',
  },
  {
    icon: Users,
    title: 'Private Family & Group Holidays',
    tagline: 'Spacious Vans & Multi-Generational Travel',
    description:
      'Travel together in high-roof spacious touring vans equipped with generous luggage space, recliner seating, and dual-zone air conditioning, perfect for families and small groups.',
    features: [
      'High-roof luxury passenger vans (up to 14 guests)',
      'Comfortable pacing for seniors and young children',
      'Family-friendly destination and activity recommendations',
      'Dedicated driver ensuring safety at every turn',
    ],
    ctaText: 'Plan Family Journey',
    whatsappMessage: 'Hello LANKOVA, I would like to plan a private family holiday in Sri Lanka.',
  },
];

export function Services() {
  return (
    <div>
      <PageHero
        eyebrow="What We Do"
        title="Comprehensive Travel & Chauffeur Services"
        subtitle="From seamless airport arrivals to bespoke multi-week island tours, experience Sri Lanka with absolute convenience and authentic hospitality."
        image="/hero/bentota-madu-river.jpg"
      />

      {/* Services Showcase */}
      <section className="py-16 sm:py-24 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 1;

            return (
              <Reveal key={service.title} delay={index * 50}>
                <div
                  className={`rounded-3xl border border-forest-800/10 bg-white p-8 sm:p-12 shadow-sm flex flex-col ${
                    isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  } items-center gap-8 lg:gap-12`}
                >
                  {/* Left Column: Icon & Overview */}
                  <div className="flex-1 space-y-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-900/10 text-forest-900 border border-forest-800/20">
                      <Icon size={28} strokeWidth={1.8} className="text-forest-950" />
                    </div>

                    <div>
                      <span className="text-[11px] uppercase tracking-widest font-bold text-gold-600 block">
                        {service.tagline}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mt-1">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-xs sm:text-sm text-forest-950/75 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2">
                      <a
                        href={createWhatsAppLink(service.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-forest-950 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-gold-500 hover:text-forest-950 transition-all shadow-sm active:scale-95"
                      >
                        <MessageCircle size={15} />
                        <span>{service.ctaText}</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Features checklist */}
                  <div className="w-full lg:w-96 rounded-2xl bg-ivory-50 p-6 border border-forest-800/10">
                    <h3 className="font-serif text-base font-bold text-forest-950 mb-3.5">
                      Service Highlights
                    </h3>
                    <ul className="space-y-2.5">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs text-forest-950/80 leading-snug">
                          <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Trust Inclusions Guarantee */}
      <section className="py-16 bg-forest-950 text-white border-t border-forest-800/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            light={true}
            eyebrow="All-Inclusive Reliability"
            title="The Lankova Booking Promise"
            subtitle="Every transportation service with Lankova comes backed by full operational integrity."
          />

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-forest-900/40 border border-forest-800/50">
              <span className="font-serif text-2xl font-bold text-gold-400 block mb-1">0%</span>
              <span className="text-xs text-ivory-100/80">Hidden Highway Tolls or Fuel Surcharges</span>
            </div>
            <div className="p-4 rounded-xl bg-forest-900/40 border border-forest-800/50">
              <span className="font-serif text-2xl font-bold text-gold-400 block mb-1">100%</span>
              <span className="text-xs text-ivory-100/80">Air-Conditioned &amp; Insured Fleet</span>
            </div>
            <div className="p-4 rounded-xl bg-forest-900/40 border border-forest-800/50">
              <span className="font-serif text-2xl font-bold text-gold-400 block mb-1">24/7</span>
              <span className="text-xs text-ivory-100/80">Flight Monitoring &amp; On-Road Support</span>
            </div>
            <div className="p-4 rounded-xl bg-forest-900/40 border border-forest-800/50">
              <span className="font-serif text-2xl font-bold text-gold-400 block mb-1">FREE</span>
              <span className="text-xs text-ivory-100/80">Custom Itinerary Quotes &amp; Advice</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
