import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  MessageCircle,
  ShieldCheck,
  Clock,
  Car,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Navigation,
  GitFork,
  BookOpen,
  Calendar,
  Star,
  Users,
} from 'lucide-react';
import { Hero } from '../components/home/Hero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { PackageCard } from '../components/ui/PackageCard';
import { TravelStylePricing } from '../components/ui/TravelStylePricing';
import { VehicleCard } from '../components/ui/VehicleCard';
import { ReviewCard } from '../components/ui/ReviewCard';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { Reveal } from '../components/ui/Reveal';
import { JourneyLine } from '../components/ui/JourneyLine';
import { packages } from '../data/packages';
import { vehicles } from '../data/vehicles';
import { reviews } from '../data/reviews';
import { destinations, faqs } from '../data/destinations';
import { createWhatsAppLink, whatsappMessages } from '../lib/whatsapp';

// Why Choose Lankova (6 verified features)
const whyChooseFeatures = [
  {
    icon: Navigation,
    title: 'Authentic Local Insight',
    description: 'We know every scenic backroad, hidden waterfall, and peaceful viewpoint across Sri Lanka.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed Chauffeur Guides',
    description: 'Courteous, English-speaking professional drivers dedicated to passenger safety and comfort.',
  },
  {
    icon: Clock,
    title: 'Flexible, Tailored Routing',
    description: 'Travel at your own pace without rigid bus schedules. Your journey unfolds your way.',
  },
  {
    icon: GitFork,
    title: 'Direct Personal Service',
    description: 'One-on-one communication with your dedicated Sri Lanka travel coordinator on WhatsApp.',
  },
  {
    icon: Car,
    title: 'Modern Climate-Controlled Fleet',
    description: 'Immaculate, air-conditioned sedans, SUVs, and luxury vans with ample luggage space.',
  },
  {
    icon: Headphones,
    title: '24/7 Island-Wide Assistance',
    description: 'From airport pickup until your departure gate, our team is always on call for you.',
  },
];

// How It Works (4 Steps)
const howItWorksSteps = [
  {
    step: '01',
    icon: MessageCircle,
    title: 'Tell Us Your Vision',
    description: 'Share your travel dates, preferred pace, party size, and places you would love to visit.',
  },
  {
    step: '02',
    icon: BookOpen,
    title: 'Custom Itinerary Design',
    description: 'We draft a personalized, seamless route proposal with vehicle options and transparent pricing.',
  },
  {
    step: '03',
    icon: CheckCircle2,
    title: 'Confirm with Ease',
    description: 'Fine-tune your schedule with your travel specialist. No stressful commitments.',
  },
  {
    step: '04',
    icon: Compass,
    title: 'Explore with Confidence',
    description: 'Your private driver welcomes you at CMB Airport for an unforgettable Sri Lankan journey.',
  },
];

export function Home() {
  const [activeDuration, setActiveDuration] = useState('All');

  const featuredPackages = packages.slice(0, 6);
  const filteredPackages =
    activeDuration === 'All'
      ? featuredPackages
      : packages.filter((p) => `${p.days} Days` === activeDuration);

  return (
    <div className="flex flex-col">
      {/* 1. CINEMATIC HERO WITH SHOWCASE */}
      <Hero />

      {/* 2. TRUST HIGHLIGHTS BAR */}
      <section className="bg-forest-900 border-y border-forest-800/40 py-6 text-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                <Car size={20} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white tracking-wide">Private Tours Only</p>
                <p className="text-[11px] text-ivory-100/60">No shared coaches or strangers</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                <ShieldCheck size={20} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white tracking-wide">Licensed Drivers</p>
                <p className="text-[11px] text-ivory-100/60">English-speaking tourism pros</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                <Compass size={20} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white tracking-wide">Tailor-Made Routes</p>
                <p className="text-[11px] text-ivory-100/60">Customized to your schedule</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                <Headphones size={20} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white tracking-wide">24/7 Island Support</p>
                <p className="text-[11px] text-ivory-100/60">Direct WhatsApp coordinator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION / ABOUT LANKOVA */}
      <section className="py-16 sm:py-24 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <SectionHeader
                align="left"
                eyebrow="About Lankova Travel & Tours"
                title="Sri Lanka, Experienced with Grace & Comfort"
                subtitle="We believe travel is profoundly personal. Whether you wish to ascend the 5th-century rock fortress of Sigiriya, journey through misty tea plantations in Ella, or witness ocean giants along the southern coast, Lankova ensures every kilometer is relaxed, authentic, and memorable."
              />

              <div className="mt-6 space-y-3.5 text-xs sm:text-sm text-forest-950/75 leading-relaxed">
                <p>
                  As an island-wide private travel agency, we eliminate the stress of foreign driving, erratic train timetables, and impersonal tour buses. With your dedicated vehicle and English-speaking chauffeur, your holiday operates entirely on your rhythm.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-forest-950 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-gold-500 hover:text-forest-950 transition-all"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight size={14} />
                </Link>

                <Link
                  to="/customize-tour"
                  className="inline-flex items-center gap-2 rounded-full border border-forest-800/30 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-forest-950 hover:bg-forest-950 hover:text-white transition-all"
                >
                  <span>Design Your Trip</span>
                </Link>
              </div>
            </Reveal>

            {/* Visual Mosaic */}
            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl shadow-md h-56 sm:h-64">
                    <img
                      src="/hero/sigiriya-rock-fortress.jpg"
                      alt="Sigiriya Rock Fortress UNESCO site"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-md h-40 sm:h-48">
                    <img
                      src="https://images.pexels.com/photos/322471/pexels-photo-322471.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Sri Lanka wild elephant safari"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="overflow-hidden rounded-2xl shadow-md h-40 sm:h-48">
                    <img
                      src="/hero/ella-nine-arch-bridge.jpg"
                      alt="Nine Arch Bridge Ella train"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-md h-56 sm:h-64">
                    <img
                      src="/hero/galle-fort-lighthouse.jpg"
                      alt="Galle Fort Lighthouse coast"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. POPULAR PACKAGES */}
      <section className="py-16 sm:py-24 bg-white border-t border-forest-800/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Curated Itineraries"
              title="Handcrafted Sri Lanka Tour Packages"
              subtitle="From brief 3-day cultural highlights to 14-day comprehensive expeditions, explore our most popular chauffeured journeys."
            />
          </Reveal>

          {/* Travel Style Pricing */}
          <div className="mt-10">
            <TravelStylePricing />
          </div>

          {/* Duration Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {['All', '3 Days', '4 Days', '5 Days', '7 Days', '10 Days', '14 Days'].map((d) => (
              <button
                key={d}
                onClick={() => setActiveDuration(d)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                  activeDuration === d
                    ? 'bg-forest-950 text-gold-400 shadow-sm scale-105'
                    : 'bg-ivory-200 text-forest-950/70 hover:bg-forest-900 hover:text-white'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPackages.map((pkg, i) => (
              <Reveal key={pkg.slug} delay={i * 70}>
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>

          {/* View All Action */}
          <div className="mt-12 text-center">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 rounded-full bg-forest-950 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-gold-500 hover:text-forest-950 transition-all shadow-md active:scale-95"
            >
              <span>View All {packages.length} Tour Packages</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY TRAVEL WITH LANKOVA */}
      <section className="py-16 sm:py-24 bg-forest-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#d4ab48_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              light={true}
              eyebrow="The Lankova Standard"
              title="Why Travelers Choose Lankova"
              subtitle="We combine bespoke route planning with seasoned private chauffeurs to guarantee peace of mind."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <Reveal key={feat.title} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-forest-800/60 bg-forest-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold-400/40 hover:-translate-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/15 text-gold-400 border border-gold-400/30 mb-4">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white mb-2">{feat.title}</h3>
                    <p className="text-xs sm:text-sm text-ivory-100/70 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="py-16 sm:py-24 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Seamless Booking"
              title="How Your Private Tour Works"
              subtitle="From initial concept to arrival in Sri Lanka, we keep your booking effortless."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {howItWorksSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.step} delay={i * 80}>
                  <div className="relative card-luxury h-full rounded-2xl bg-white p-6 border border-forest-800/10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-serif text-2xl font-bold text-gold-500">
                          {step.step}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-900/5 text-forest-900">
                          <Icon size={18} strokeWidth={2} />
                        </div>
                      </div>

                      <h3 className="font-serif text-base sm:text-lg font-bold text-forest-950 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-forest-950/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. PRIVATE FLEET PREVIEW */}
      <section className="py-16 sm:py-24 bg-white border-t border-forest-800/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Comfort On The Road"
              title="Our Private Vehicle Fleet"
              subtitle="Travel smoothly in pristine, air-conditioned comfort with dedicated luggage capacity and courteous drivers."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((v, i) => (
              <Reveal key={v.id} delay={i * 70}>
                <VehicleCard vehicle={v} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/transportation"
              className="inline-flex items-center gap-2 rounded-full border border-forest-800/30 bg-ivory-50 px-6 py-3 text-xs font-bold uppercase tracking-wider text-forest-950 hover:bg-forest-950 hover:text-white transition-all"
            >
              <span>Explore All Transportation &amp; Airport Services</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. DESTINATIONS SHOWCASE */}
      <section className="py-16 sm:py-24 bg-ivory-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Explore Sri Lanka"
              title="Iconic Island Destinations"
              subtitle="Ancient royal citadels, mist-shrouded mountain peaks, and sun-kissed Indian Ocean shores."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {destinations.slice(0, 6).map((dest, i) => (
              <Reveal key={dest.slug || dest.name} delay={i * 50}>
                <Link
                  to="/destinations"
                  className="group relative h-48 sm:h-64 rounded-2xl overflow-hidden block shadow-sm hover:shadow-lg transition-all"
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
                  <div className="absolute inset-0 p-3 flex flex-col justify-end text-white">
                    <span className="text-[10px] uppercase font-bold text-gold-400 tracking-wider">
                      {dest.region}
                    </span>
                    <h3 className="font-serif text-sm sm:text-base font-bold text-white drop-shadow-sm">
                      {dest.name}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 rounded-full bg-forest-950 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-gold-500 hover:text-forest-950 transition-all shadow-md"
            >
              <span>View All 15 Sri Lanka Destinations</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. TRAVELER REVIEWS */}
      <section className="py-16 sm:py-24 bg-white border-t border-forest-800/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Guest Testimonials"
              title="Stories from International Travelers"
              subtitle="Read verified reviews from guests who explored the wonders of Sri Lanka with Lankova."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {reviews.slice(0, 3).map((rev, i) => (
              <Reveal key={rev.id || i} delay={i * 80}>
                <ReviewCard review={rev} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest-900 hover:text-gold-600 transition-colors"
            >
              <span>Read More Traveler Reviews</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FINAL CALL TO ACTION BANNER */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 text-white relative overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-gold-400">
            Ready to Begin Your Sri Lanka Journey?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4 leading-tight">
            Let Us Craft Your Ideal Holiday
          </h2>
          <p className="mx-auto max-w-2xl text-xs sm:text-base text-ivory-100/80 leading-relaxed font-normal mb-8">
            Reach out directly on WhatsApp or build your custom route in minutes. We respond promptly with thoughtful advice and bespoke pricing.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/customize-tour"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest-950 shadow-lg hover:from-gold-400 hover:to-gold-300 transition-all active:scale-95"
            >
              <Calendar size={16} strokeWidth={2.4} />
              <span>Plan Your Trip Online</span>
            </Link>

            <a
              href={createWhatsAppLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-950/50 backdrop-blur-md px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-300 hover:bg-emerald-900/60 transition-all active:scale-95"
            >
              <MessageCircle size={17} className="text-emerald-400" />
              <span>WhatsApp Inquire</span>
            </a>
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="py-16 sm:py-24 bg-ivory-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <SectionHeader
              eyebrow="Clear Answers"
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about booking private tours and chauffeur transportation in Sri Lanka."
            />
          </Reveal>

          <div className="mt-12">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;