import { Plane, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { VehicleCard } from '../components/ui/VehicleCard';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { Reveal } from '../components/ui/Reveal';
import { JourneyLine } from '../components/ui/JourneyLine';
import { vehicles } from '../data/vehicles';
import { faqs } from '../data/destinations';
import { createWhatsAppLink, whatsappMessages } from '../lib/whatsapp';

const transferTypes = [
  { title: 'Airport Transfers', desc: 'Punctual private pickup and drop-off at Bandaranaike International Airport (CMB) with flight tracking.' },
  { title: 'Point-to-Point Transfers', desc: 'Direct hotel-to-hotel and city-to-city transfers across Sri Lanka without public transit delays.' },
  { title: 'Day Tours & Excursions', desc: 'Explore a historic citadel, safari park, or beach town in a single day with your private driver.' },
  { title: 'Multi-Day Driver Hire', desc: 'Hire a dedicated air-conditioned vehicle and chauffeur guide for several days of flexible touring.' },
  { title: 'Bespoke Custom Routes', desc: 'Tell us your exact schedule, stops, and accommodations — we take care of every single kilometer.' },
];

const airportSteps = [
  'Send your arrival date, flight number & hotel destination',
  'Your chauffeur monitors your flight status in real time for delays',
  'Meet your driver directly inside the CMB arrivals terminal with a custom name board',
  'Relax in air-conditioned comfort as you are driven straight to your hotel',
];

export function Transportation() {
  return (
    <div>
      <PageHero
        eyebrow="Private Transportation"
        title="Sri Lanka, with Your Own Private Driver"
        subtitle="Already planned your holiday? Let our courteous, licensed chauffeurs take care of every kilometer in comfort and style."
        image="/hero/galle-fort-lighthouse.jpg"
      />

      {/* Transfer Types */}
      <section className="py-16 sm:py-24 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Flexible Services"
              title="Every Form of Private Transport"
              subtitle="Whether you need a quick airport transfer or an island-wide chauffeur for two weeks, we provide modern vehicles and transparent rates."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {transferTypes.map((t, i) => (
              <Reveal key={t.title} delay={i * 60}>
                <div className="card-luxury h-full rounded-2xl bg-white p-6 border border-forest-800/10 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-forest-950 mb-2">{t.title}</h3>
                    <p className="text-xs sm:text-sm text-forest-950/70 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Airport Transfers Highlight */}
      <section className="py-16 sm:py-24 bg-forest-950 text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/20 text-gold-400 border border-gold-400/40 mb-6">
                <Plane size={24} strokeWidth={2} />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-2">
                24/7 Bandaranaike International Airport (CMB)
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Arriving in Sri Lanka? Let Us Welcome You.
              </h2>

              <JourneyLine className="my-4" />

              <p className="text-xs sm:text-sm text-ivory-100/80 leading-relaxed">
                Skip long taxi queues and unpredictable airport touts. Your LANKOVA chauffeur monitors your flight for delays and meets you directly inside the terminal arrivals area.
              </p>

              <div className="mt-8 space-y-3">
                {airportSteps.map((step, i) => (
                  <div key={step} className="flex items-center gap-3 text-xs sm:text-sm text-ivory-100/85">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-xs font-bold text-gold-400">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={createWhatsAppLink(whatsappMessages.airport)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-7 py-3 text-xs font-bold uppercase tracking-wider text-forest-950 shadow-md hover:from-gold-400 hover:to-gold-300 transition-all active:scale-95"
                >
                  <span>Arrange Airport Pickup</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="overflow-hidden rounded-3xl border border-forest-800/40 shadow-2xl h-80 sm:h-96">
                <img
                  src="https://images.pexels.com/photos/39075475/pexels-photo-39075475.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Airport transfer van Sri Lanka"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-16 sm:py-24 bg-white border-t border-forest-800/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Our Private Fleet"
              title="Choose Your Vehicle"
              subtitle="From comfortable sedans for couples to spacious high-roof vans for families — all with professional drivers."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((v, i) => (
              <Reveal key={v.id} delay={i * 70}>
                <VehicleCard vehicle={v} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-ivory-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <SectionHeader
              eyebrow="Frequently Asked Questions"
              title="Transportation Questions, Answered"
              subtitle="Common questions regarding driver bookings, fuel policies, and airport transfers."
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

export default Transportation;
