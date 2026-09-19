import { Link } from 'react-router-dom';
import { Shield, Compass, Heart, Award, ArrowRight, CheckCircle2, Car, Users } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Reveal } from '../components/ui/Reveal';
import { JourneyLine } from '../components/ui/JourneyLine';

const values = [
  {
    icon: Compass,
    title: 'Authentic Local Knowledge',
    desc: 'Sri Lanka is an island of profound contrasts. Our chauffeurs know the finest mountain view stops, authentic village eateries, and scenic detours that group buses miss.',
  },
  {
    icon: Shield,
    title: 'Safety & Professionalism First',
    desc: 'Every vehicle in our fleet is fully insured, air-conditioned, and meticulously inspected. Our drivers maintain impeccable safety standards on mountain passes and highways.',
  },
  {
    icon: Heart,
    title: 'Genuine Warmth & Hospitality',
    desc: 'In Sri Lanka, a guest is welcomed as family. We take deep pride in patient, considerate service that allows you to relax completely from the moment you arrive.',
  },
  {
    icon: Car,
    title: 'Tailored Pacing & Flexibility',
    desc: 'There are no rigid schedules. If you wish to linger at a tea plantation, photograph a wild peacock, or take an early rest, your chauffeur accommodates your personal rhythm.',
  },
];

export function About() {
  return (
    <div>
      <PageHero
        eyebrow="Who We Are"
        title="Your Trusted Sri Lanka Travel Specialists"
        subtitle="LANKOVA is a premier Sri Lankan private tour and transportation agency dedicated to seamless, authentic, and unforgettable island experiences."
        image="/hero/arugam-bay-beach.jpg"
      />

      {/* Narrative Section */}
      <section className="py-16 sm:py-24 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <SectionHeader
                align="left"
                eyebrow="Our Story & Philosophy"
                title="Travel Designed Around You"
                subtitle="We founded Lankova with a simple commitment: to replace the stress of foreign driving and hurried group tours with the grace, ease, and insight of a dedicated private chauffeur."
              />

              <div className="mt-6 space-y-4 text-xs sm:text-sm text-forest-950/75 leading-relaxed">
                <p>
                  Sri Lanka boasts eight UNESCO World Heritage Sites, thousands of wild Asian elephants, emerald highlands, and golden palm-fringed coastlines — all within a single compact island. Yet, navigating local transport routes can be challenging for international visitors.
                </p>
                <p>
                  With Lankova, your holiday is private from start to finish. From greeting you at Bandaranaike International Airport to guiding you across scenic backroads and ensuring smooth hotel arrivals, we curate journeys that feel effortless, respectful of local culture, and deeply enriching.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/packages"
                  className="inline-flex items-center gap-2 rounded-full bg-forest-950 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-gold-500 hover:text-forest-950 transition-all shadow-sm"
                >
                  <span>Explore Tour Packages</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-forest-800/30 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-forest-950 hover:bg-forest-950 hover:text-white transition-all"
                >
                  <span>Contact Our Team</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-3xl shadow-xl border border-forest-800/20 h-96 sm:h-[480px]">
                <img
                  src="/hero/sigiriya-rock-fortress.jpg"
                  alt="Scenic view of Sigiriya Sri Lanka"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-serif text-xl sm:text-2xl font-bold">
                    "A journey through Sri Lanka should be as tranquil as it is breathtaking."
                  </p>
                  <p className="text-xs text-gold-300 mt-2 tracking-wider uppercase font-semibold">
                    &bull; The Lankova Hospitality Creed
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-16 sm:py-24 bg-white border-t border-forest-800/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Our Commitment"
              title="What Defines Every Lankova Journey"
              subtitle="The guiding principles behind every chauffeur transfer and custom itinerary we operate."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <Reveal key={val.title} delay={i * 70}>
                  <div className="card-luxury h-full rounded-2xl bg-ivory-50 p-6 border border-forest-800/10 flex flex-col justify-between">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-950 text-gold-400 mb-5">
                        <Icon size={22} strokeWidth={2} />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-forest-950 mb-2">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-forest-950/70 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-forest-950 text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Start Your Adventure
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
            We Would Love to Host You in Sri Lanka
          </h2>
          <p className="text-xs sm:text-sm text-ivory-100/80 leading-relaxed mb-8">
            Contact us today with your travel dates, preferred destinations, or any special questions. We will design your personalized route proposal with zero obligation.
          </p>
          <Link
            to="/customize-tour"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-forest-950 shadow-md hover:from-gold-400 hover:to-gold-300 transition-all active:scale-95"
          >
            <span>Plan Your Custom Tour</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;