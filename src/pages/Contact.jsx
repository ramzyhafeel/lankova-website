import { useState } from 'react';
import { MessageCircle, Mail, Phone, MapPin, ArrowRight, Send, Clock, ShieldCheck } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Reveal } from '../components/ui/Reveal';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { site } from '../data/site';
import { faqs } from '../data/destinations';
import { createWhatsAppLink } from '../lib/whatsapp';

const needOptions = [
  'Complete Tour Package',
  'Private Driver & Vehicle Only',
  'CMB Airport Transfer',
  'Hotel + Transportation',
  'Custom Tailor-Made Itinerary',
  'Other Inquiries',
];

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    country: '',
    whatsapp: '',
    email: '',
    arrival: '',
    departure: '',
    travellers: '2 Adults',
    need: needOptions[0],
    message: '',
  });

  const buildMessage = () => {
    return `Hello LANKOVA,

I would like to inquire about a Sri Lanka trip.

Full Name: ${form.name || 'Traveler'}
Country: ${form.country || 'Not specified'}
WhatsApp / Phone: ${form.whatsapp || 'Not specified'}
Email: ${form.email || 'Not specified'}
Travel Dates: ${form.arrival || 'TBD'} to ${form.departure || 'TBD'}
Number of Travelers: ${form.travellers}
Service Required: ${form.need}

Message / Special Requests:
${form.message || 'Looking forward to your suggestions and quote.'}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(createWhatsAppLink(buildMessage()), '_blank');
  };

  const inputClass =
    'w-full rounded-xl border border-forest-800/15 bg-white px-4 py-3 text-xs sm:text-sm text-forest-950 placeholder:text-forest-950/40 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors';

  return (
    <div>
      <PageHero
        eyebrow="Get In Touch"
        title="Let’s Plan Your Sri Lanka Journey"
        subtitle="WhatsApp is the fastest way to connect with our travel specialists. Or send us your holiday details below and we will prepare a bespoke proposal."
        image="/hero/colombo-lotus-tower.jpg"
      />

      {/* 4 Contact Cards */}
      <section className="py-16 sm:py-20 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* WhatsApp */}
            <Reveal delay={0}>
              <div className="card-luxury flex h-full flex-col items-center rounded-2xl bg-white p-7 text-center border border-forest-800/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600 mb-4">
                  <MessageCircle size={24} strokeWidth={2} />
                </div>
                <h3 className="font-serif text-lg font-bold text-forest-950">WhatsApp</h3>
                <p className="mt-1 text-xs text-forest-950/60 flex-1">Fastest response for itinerary advice &amp; quick quotes.</p>
                <a
                  href={createWhatsAppLink('Hello LANKOVA, I would like to get in touch regarding a Sri Lanka trip.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </Reveal>

            {/* Email */}
            <Reveal delay={80}>
              <div className="card-luxury flex h-full flex-col items-center rounded-2xl bg-white p-7 text-center border border-forest-800/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-600 mb-4">
                  <Mail size={24} strokeWidth={2} />
                </div>
                <h3 className="font-serif text-lg font-bold text-forest-950">Email Us</h3>
                <p className="mt-1 text-xs text-forest-950/60 flex-1">{site.email}</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-gold-700 hover:text-gold-800 transition-colors"
                >
                  <span>Send Email</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </Reveal>

            {/* Phone */}
            <Reveal delay={160}>
              <div className="card-luxury flex h-full flex-col items-center rounded-2xl bg-white p-7 text-center border border-forest-800/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-900/10 text-forest-900 mb-4">
                  <Phone size={24} strokeWidth={2} />
                </div>
                <h3 className="font-serif text-lg font-bold text-forest-950">Telephone</h3>
                <p className="mt-1 text-xs text-forest-950/60 flex-1">{site.phone}</p>
                <a
                  href={`tel:${site.phone.replace(/\s+/g, '')}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-forest-900 hover:text-gold-600 transition-colors"
                >
                  <span>Call Directly</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </Reveal>

            {/* Location */}
            <Reveal delay={240}>
              <div className="card-luxury flex h-full flex-col items-center rounded-2xl bg-white p-7 text-center border border-forest-800/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-900/10 text-forest-900 mb-4">
                  <MapPin size={24} strokeWidth={2} />
                </div>
                <h3 className="font-serif text-lg font-bold text-forest-950">Operating Base</h3>
                <p className="mt-1 text-xs text-forest-950/60 flex-1">{site.location} &bull; {site.coverage}</p>
                <span className="mt-4 text-xs font-bold text-forest-800">
                  Island-Wide Operations
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 sm:py-24 bg-white border-t border-forest-800/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <SectionHeader
              eyebrow="Send Your Travel Details"
              title="Request a Free Custom Tour Itinerary"
              subtitle="Fill out the form below and click submit to generate your formatted quote request directly on WhatsApp with our travel coordinator."
            />
          </Reveal>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-forest-950">
                  Full Name *
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. John Smith"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-forest-950">
                  Country of Residence
                </label>
                <input
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  placeholder="e.g. United Kingdom"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-forest-950">
                  WhatsApp Number
                </label>
                <input
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  placeholder="+44 7123 456789"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-forest-950">
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-forest-950">
                  Arrival Date
                </label>
                <input
                  type="date"
                  value={form.arrival}
                  onChange={(e) => setForm({ ...form, arrival: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-forest-950">
                  Departure Date
                </label>
                <input
                  type="date"
                  value={form.departure}
                  onChange={(e) => setForm({ ...form, departure: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-forest-950">
                Number of Travelers
              </label>
              <input
                value={form.travellers}
                onChange={(e) => setForm({ ...form, travellers: e.target.value })}
                placeholder="e.g. 2 Adults, 1 Child"
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-forest-950">
                What Service Do You Require?
              </label>
              <div className="flex flex-wrap gap-2">
                {needOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setForm({ ...form, need: opt })}
                    className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                      form.need === opt
                        ? 'bg-forest-950 text-gold-400 shadow-sm'
                        : 'bg-ivory-200 text-forest-950/70 hover:bg-forest-900 hover:text-white'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-forest-950">
                Trip Details, Places You Love, or Questions
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about places you'd love to see (e.g. Sigiriya, Ella train, Yala safari, beach relaxation)..."
                className={inputClass}
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-forest-950 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-gold-500 hover:text-forest-950 transition-all shadow-md active:scale-95"
              >
                <MessageCircle size={16} strokeWidth={2.2} />
                <span>Submit &amp; Chat on WhatsApp</span>
              </button>
              <p className="mt-2.5 text-[11px] text-forest-950/50">
                Your details are transferred directly into a polite WhatsApp message to initiate immediate planning.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-ivory-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <SectionHeader
              eyebrow="Booking Assistance"
              title="Frequently Asked Questions"
              subtitle="Quick answers to help you organize your Sri Lanka adventure."
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

export default Contact;