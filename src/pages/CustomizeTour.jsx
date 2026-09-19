import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  MessageCircle,
  Calendar,
  Users,
  Compass,
  MapPin,
  Bed,
  Car,
  Send,
  Sparkles,
  Layers,
} from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { createWhatsAppLink } from '../lib/whatsapp';
import { customizerInterests, customizerDestinations } from '../data/destinations';
import { getPackage } from '../data/packages';

const serviceOptions = [
  {
    id: 'complete-tour',
    title: 'Complete Tour (Vehicle + Hotels + Tours)',
    desc: 'All-inclusive private itinerary with dedicated vehicle, licensed chauffeur-guide, handpicked accommodations, and sightseeing excursions.',
    badge: 'All-Inclusive',
  },
  {
    id: 'vehicle-driver',
    title: 'Private Vehicle + Driver Only',
    desc: 'Dedicated private air-conditioned car, SUV, or passenger van with a professional English-speaking driver for your self-planned route.',
    badge: 'Chauffeur Hire',
  },
  {
    id: 'airport-transfer',
    title: 'Airport Transfer Only',
    desc: 'Punctual 24/7 airport meet & greet pickup or drop-off between Colombo Bandaranaike International Airport (BIA) and any hotel island-wide.',
    badge: 'Direct Transfer',
  },
  {
    id: 'hotel-transfer',
    title: 'Hotel-to-Hotel Transfer',
    desc: 'Comfortable private point-to-point intercity transfer between any two hotels or destinations across Sri Lanka.',
    badge: 'Intercity Transfer',
  },
  {
    id: 'tailor-made',
    title: 'Custom Tailor-Made Holiday',
    desc: 'Fully bespoke island holiday designed completely from scratch around your specific timeframe, interests, and dream wishlist.',
    badge: 'Bespoke Itinerary',
  },
];

const steps = [
  { num: 1, title: 'What service do you require?', short: 'Service', icon: Layers },
  { num: 2, title: 'When are you visiting?', short: 'Dates', icon: Calendar },
  { num: 3, title: "Who's travelling?", short: 'Travelers', icon: Users },
  { num: 4, title: 'What would you love to experience?', short: 'Experiences', icon: Compass },
  { num: 5, title: 'Where would you like to visit?', short: 'Destinations', icon: MapPin },
  { num: 6, title: 'Accommodation preference', short: 'Hotels', icon: Bed },
  { num: 7, title: 'Transportation', short: 'Vehicle', icon: Car },
  { num: 8, title: 'Review & Send Request', short: 'Review', icon: Send },
];

const accommodationOptions = [
  'Budget / Guesthouses',
  '3 Star / Comfort Hotels',
  '4 Star / Boutique Resorts',
  '5 Star / Luxury & Heritage Villas',
  'Already booked my own hotels',
];

const vehicleOptions = [
  'Comfort Sedan (1-3 Guests)',
  'Luxury SUV / Crossover (1-4 Guests)',
  'Spacious Touring Van (4-8 Guests)',
  'High-Roof Mini Coach (8-14 Guests)',
  'Recommend the best vehicle for our party',
];

export function CustomizeTour() {
  const [params] = useSearchParams();
  const presetPackage = params.get('package');
  const presetDest = params.get('destination');
  const presetService = params.get('service');
  const pkg = presetPackage ? getPackage(presetPackage) : undefined;

  const matchedService = serviceOptions.find(
    (s) =>
      s.title.toLowerCase().includes(presetService?.toLowerCase() || '') ||
      s.id.toLowerCase() === presetService?.toLowerCase()
  );

  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    service: matchedService?.title || serviceOptions[0].title,
    arrival: '',
    departure: '',
    adults: 2,
    children: 0,
    infants: 0,
    interests: [],
    destinations: presetDest ? [presetDest] : [],
    recommendDestinations: false,
    accommodation: accommodationOptions[1],
    vehicle: vehicleOptions[4],
    notes: '',
    packageName: pkg?.name || '',
  });

  const toggleInterest = (val) => {
    setData((d) => ({
      ...d,
      interests: d.interests.includes(val)
        ? d.interests.filter((i) => i !== val)
        : [...d.interests, val],
    }));
  };

  const toggleDestination = (val) => {
    setData((d) => ({
      ...d,
      destinations: d.destinations.includes(val)
        ? d.destinations.filter((dest) => dest !== val)
        : [...d.destinations, val],
    }));
  };

  const counter = (field, delta) => {
    setData((d) => ({ ...d, [field]: Math.max(0, d[field] + delta) }));
  };

  const tripDuration = (() => {
    if (data.arrival && data.departure) {
      const a = new Date(data.arrival);
      const b = new Date(data.departure);
      const diff = Math.round((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
      return diff > 0 ? `${diff} Days` : '';
    }
    return '';
  })();

  const buildMessage = () => {
    const guestParts = [];
    if (data.adults > 0) guestParts.push(`${data.adults} Adult${data.adults > 1 ? 's' : ''}`);
    if (data.children > 0) guestParts.push(`${data.children} Child${data.children > 1 ? 'ren' : ''}`);
    if (data.infants > 0) guestParts.push(`${data.infants} Infant${data.infants > 1 ? 's' : ''}`);

    return `Hello LANKOVA,

I would like to inquire about: ${data.service}${data.packageName ? `\n(Package Reference: ${data.packageName})` : ''}

Service Required:
• ${data.service}

Travel Dates:
${data.arrival || 'Flexible'} to ${data.departure || 'Flexible'} ${tripDuration ? `(${tripDuration})` : ''}

Guests:
${guestParts.join(', ') || 'Not specified'}

Experiences Desired:
${data.interests.length ? data.interests.join(', ') : 'Open to recommendations'}

Destinations of Interest:
${data.recommendDestinations ? 'Please recommend the best route for us' : data.destinations.length ? data.destinations.join(', ') : 'Open to suggestions'}

Accommodation Style:
${data.accommodation || 'Not specified'}

Vehicle Preference:
${data.vehicle || 'Recommend for me'}

Additional Notes:
${data.notes || 'Looking forward to your customized itinerary proposal & quotation.'}`;
  };

  const handleFinish = () => {
    window.open(createWhatsAppLink(buildMessage()), '_blank');
  };

  return (
    <div className="bg-ivory-100 min-h-screen">
      <PageHero
        eyebrow="Trip Planner"
        title="Design Your Custom Sri Lanka Holiday"
        subtitle="Follow our 8-step builder to choose your service and customize your ideal journey. We will curate a tailored quote with dedicated vehicle options and transparent pricing."
        image="/hero/ella-nine-arch-bridge.jpg"
      />

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Progress Tracker Bar */}
          <div className="mb-10 bg-white rounded-2xl p-4 sm:p-6 border border-forest-800/10 shadow-sm">
            <div className="flex items-center justify-between text-xs font-bold text-forest-950 mb-3">
              <span>Step {step} of {steps.length}</span>
              <span className="text-gold-600">{steps[step - 1].title}</span>
            </div>
            <div className="h-2 w-full bg-ivory-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-gold-500 to-gold-400 transition-all duration-300 rounded-full"
                style={{ width: `${(step / steps.length) * 100}%` }}
              />
            </div>

            {/* Quick Step Indicators */}
            <div className="hidden sm:grid grid-cols-8 gap-1.5 mt-4 pt-4 border-t border-forest-800/5 text-center">
              {steps.map((s) => {
                const Icon = s.icon;
                const isCurrent = s.num === step;
                const isDone = s.num < step;

                return (
                  <button
                    key={s.num}
                    onClick={() => setStep(s.num)}
                    className={`flex flex-col items-center gap-1 text-[10px] transition-colors ${
                      isCurrent
                        ? 'text-forest-950 font-bold'
                        : isDone
                        ? 'text-gold-600 font-semibold'
                        : 'text-forest-950/40'
                    }`}
                  >
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs ${
                        isCurrent
                          ? 'bg-forest-950 text-gold-400'
                          : isDone
                          ? 'bg-gold-500/20 text-gold-600'
                          : 'bg-ivory-200 text-forest-950/50'
                      }`}
                    >
                      {isDone ? <Check size={13} strokeWidth={2.5} /> : <Icon size={13} />}
                    </div>
                    <span className="truncate w-full">{s.short || s.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Wizard Card Body */}
          <div className="rounded-3xl bg-white p-6 sm:p-10 border border-forest-800/10 shadow-sm">
            {/* STEP 1: SERVICE SELECTION */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    What service would you like to choose?
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    Select the service that matches your travel requirements across Sri Lanka.
                  </p>
                </div>

                <div className="space-y-3">
                  {serviceOptions.map((srv, index) => {
                    const selected = data.service === srv.title;
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => setData({ ...data, service: srv.title })}
                        className={`w-full flex items-start justify-between p-4 sm:p-5 rounded-2xl border text-left transition-all group ${
                          selected
                            ? 'border-gold-500 bg-forest-950 text-white shadow-md'
                            : 'border-forest-800/15 bg-ivory-50 text-forest-950/90 hover:bg-ivory-200 hover:border-forest-800/30'
                        }`}
                      >
                        <div className="flex items-start gap-3.5 pr-2">
                          <span
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                              selected
                                ? 'bg-gold-500 text-forest-950'
                                : 'bg-forest-950/10 text-forest-950 group-hover:bg-forest-950 group-hover:text-white'
                            }`}
                          >
                            {index + 1}
                          </span>
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span
                                className={`text-sm sm:text-base font-bold ${
                                  selected ? 'text-gold-300' : 'text-forest-950'
                                }`}
                              >
                                {srv.title}
                              </span>
                              {srv.badge && (
                                <span
                                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                                    selected
                                      ? 'bg-gold-500/20 text-gold-300 border border-gold-400/30'
                                      : 'bg-gold-500/15 text-gold-700 border border-gold-500/30'
                                  }`}
                                >
                                  {srv.badge}
                                </span>
                              )}
                            </div>
                            <p
                              className={`text-xs sm:text-sm leading-relaxed ${
                                selected ? 'text-ivory-200/85' : 'text-forest-950/65'
                              }`}
                            >
                              {srv.desc}
                            </p>
                          </div>
                        </div>

                        <div
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all mt-1 ${
                            selected
                              ? 'border-gold-400 bg-gold-400 text-forest-950'
                              : 'border-forest-800/20 bg-white/60 text-transparent'
                          }`}
                        >
                          <Check size={14} className="stroke-[3]" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: DATES */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    When are you planning to visit Sri Lanka?
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    If dates are not yet finalized, provide your estimated travel window.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1.5">
                      Estimated Arrival Date
                    </label>
                    <input
                      type="date"
                      value={data.arrival}
                      onChange={(e) => setData({ ...data, arrival: e.target.value })}
                      className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-4 py-3 text-sm text-forest-950 focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1.5">
                      Estimated Departure Date
                    </label>
                    <input
                      type="date"
                      value={data.departure}
                      onChange={(e) => setData({ ...data, departure: e.target.value })}
                      className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-4 py-3 text-sm text-forest-950 focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                {tripDuration && (
                  <div className="rounded-xl bg-forest-900/5 p-4 border border-forest-800/10 flex items-center gap-2 text-xs font-semibold text-forest-900">
                    <Sparkles size={16} className="text-gold-600" />
                    <span>Calculated Length of Stay: {tripDuration}</span>
                  </div>
                )}
              </div>
            )}

            {/* STEP 3: TRAVELERS */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    Who will be traveling?
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    This helps us recommend vehicle sizing with ample luggage room.
                  </p>
                </div>

                <div className="space-y-4 max-w-md">
                  {/* Adults */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-ivory-50 border border-forest-800/10">
                    <div>
                      <p className="font-serif text-base font-bold text-forest-950">Adults</p>
                      <p className="text-xs text-forest-950/50">Ages 12+</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => counter('adults', -1)}
                        className="h-8 w-8 rounded-full bg-white border border-forest-800/20 font-bold text-forest-950 flex items-center justify-center hover:bg-forest-950 hover:text-white"
                      >
                        -
                      </button>
                      <span className="font-serif text-lg font-bold text-forest-950 w-6 text-center">
                        {data.adults}
                      </span>
                      <button
                        onClick={() => counter('adults', 1)}
                        className="h-8 w-8 rounded-full bg-white border border-forest-800/20 font-bold text-forest-950 flex items-center justify-center hover:bg-forest-950 hover:text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-ivory-50 border border-forest-800/10">
                    <div>
                      <p className="font-serif text-base font-bold text-forest-950">Children</p>
                      <p className="text-xs text-forest-950/50">Ages 2–11</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => counter('children', -1)}
                        className="h-8 w-8 rounded-full bg-white border border-forest-800/20 font-bold text-forest-950 flex items-center justify-center hover:bg-forest-950 hover:text-white"
                      >
                        -
                      </button>
                      <span className="font-serif text-lg font-bold text-forest-950 w-6 text-center">
                        {data.children}
                      </span>
                      <button
                        onClick={() => counter('children', 1)}
                        className="h-8 w-8 rounded-full bg-white border border-forest-800/20 font-bold text-forest-950 flex items-center justify-center hover:bg-forest-950 hover:text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Infants */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-ivory-50 border border-forest-800/10">
                    <div>
                      <p className="font-serif text-base font-bold text-forest-950">Infants</p>
                      <p className="text-xs text-forest-950/50">Under 2 years (Child seat available)</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => counter('infants', -1)}
                        className="h-8 w-8 rounded-full bg-white border border-forest-800/20 font-bold text-forest-950 flex items-center justify-center hover:bg-forest-950 hover:text-white"
                      >
                        -
                      </button>
                      <span className="font-serif text-lg font-bold text-forest-950 w-6 text-center">
                        {data.infants}
                      </span>
                      <button
                        onClick={() => counter('infants', 1)}
                        className="h-8 w-8 rounded-full bg-white border border-forest-800/20 font-bold text-forest-950 flex items-center justify-center hover:bg-forest-950 hover:text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: EXPERIENCES */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    What experiences interest you most?
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    Select all that appeal to your travel style.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {customizerInterests.map((interest) => {
                    const selected = data.interests.includes(interest);
                    return (
                      <button
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`flex items-center justify-between p-3.5 rounded-2xl border text-xs font-semibold tracking-wide transition-all ${
                          selected
                            ? 'border-gold-500 bg-forest-950 text-gold-400 shadow-sm'
                            : 'border-forest-800/15 bg-ivory-50 text-forest-950/80 hover:bg-ivory-200'
                        }`}
                      >
                        <span>{interest}</span>
                        {selected && <Check size={14} className="stroke-[2.5]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 5: DESTINATIONS */}
            {step === 5 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    Where would you like to visit?
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    Choose specific locations or let our experts suggest an optimized route.
                  </p>
                </div>

                <div className="mb-4">
                  <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-bold text-forest-950">
                    <input
                      type="checkbox"
                      checked={data.recommendDestinations}
                      onChange={(e) =>
                        setData({ ...data, recommendDestinations: e.target.checked })
                      }
                      className="h-4 w-4 rounded border-forest-800/30 text-gold-500 focus:ring-gold-400"
                    />
                    <span>I am not sure — please recommend the best route for my timeframe</span>
                  </label>
                </div>

                {!data.recommendDestinations && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {customizerDestinations.map((dest) => {
                      const selected = data.destinations.includes(dest);
                      return (
                        <button
                          key={dest}
                          onClick={() => toggleDestination(dest)}
                          className={`flex items-center justify-between p-3.5 rounded-2xl border text-xs font-semibold tracking-wide transition-all ${
                            selected
                              ? 'border-gold-500 bg-forest-950 text-gold-400 shadow-sm'
                              : 'border-forest-800/15 bg-ivory-50 text-forest-950/80 hover:bg-ivory-200'
                          }`}
                        >
                          <span>{dest}</span>
                          {selected && <Check size={14} className="stroke-[2.5]" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* STEP 6: ACCOMMODATION */}
            {step === 6 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    Preferred Accommodation Comfort Level
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    Choose what level of hotels or retreats you prefer.
                  </p>
                </div>

                <div className="space-y-3">
                  {accommodationOptions.map((opt) => {
                    const selected = data.accommodation === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => setData({ ...data, accommodation: opt })}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl border text-xs sm:text-sm font-semibold tracking-wide text-left transition-all ${
                          selected
                            ? 'border-gold-500 bg-forest-950 text-gold-400 shadow-sm'
                            : 'border-forest-800/15 bg-ivory-50 text-forest-950/80 hover:bg-ivory-200'
                        }`}
                      >
                        <span>{opt}</span>
                        {selected && <Check size={16} className="stroke-[2.5]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 7: VEHICLE */}
            {step === 7 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    Transportation &amp; Vehicle Type
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    All vehicles include professional chauffeur, fuel, expressway tolls, and air conditioning.
                  </p>
                </div>

                <div className="space-y-3">
                  {vehicleOptions.map((veh) => {
                    const selected = data.vehicle === veh;
                    return (
                      <button
                        key={veh}
                        onClick={() => setData({ ...data, vehicle: veh })}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl border text-xs sm:text-sm font-semibold tracking-wide text-left transition-all ${
                          selected
                            ? 'border-gold-500 bg-forest-950 text-gold-400 shadow-sm'
                            : 'border-forest-800/15 bg-ivory-50 text-forest-950/80 hover:bg-ivory-200'
                        }`}
                      >
                        <span>{veh}</span>
                        {selected && <Check size={16} className="stroke-[2.5]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 8: REVIEW & SEND */}
            {step === 8 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    Review Your Custom Tour Request
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    Add any special requests, then send directly via WhatsApp to initiate personalized itinerary design.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1.5">
                    Special Requests / Comments
                  </label>
                  <textarea
                    rows={3}
                    value={data.notes}
                    onChange={(e) => setData({ ...data, notes: e.target.value })}
                    placeholder="e.g. traveling for anniversary, interested in tea factory visit, prefer relaxed morning starts..."
                    className="w-full rounded-2xl border border-forest-800/15 bg-ivory-50 p-4 text-xs sm:text-sm text-forest-950 focus:border-gold-500 focus:outline-none"
                  />
                </div>

                {/* Summary Table */}
                <div className="rounded-2xl bg-ivory-50 p-5 border border-forest-800/10 space-y-2.5 text-xs text-forest-950">
                  <div className="flex justify-between items-center border-b border-forest-800/10 pb-2">
                    <span className="text-forest-950/60 font-semibold">Service Chosen:</span>
                    <span className="font-bold text-forest-950 text-right max-w-[65%]">{data.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-forest-950/60 font-semibold">Travel Window:</span>
                    <span className="font-bold">{data.arrival || 'TBD'} &rarr; {data.departure || 'TBD'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-forest-950/60 font-semibold">Party Size:</span>
                    <span className="font-bold">{data.adults} Adults, {data.children} Children</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-forest-950/60 font-semibold">Destinations:</span>
                    <span className="font-bold text-right max-w-xs truncate">
                      {data.recommendDestinations ? 'Recommend for me' : data.destinations.join(', ') || 'Any'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-forest-950/60 font-semibold">Hotel Style:</span>
                    <span className="font-bold">{data.accommodation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-forest-950/60 font-semibold">Vehicle:</span>
                    <span className="font-bold">{data.vehicle}</span>
                  </div>
                </div>

                <button
                  onClick={handleFinish}
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 py-4 text-sm font-bold uppercase tracking-wider text-forest-950 shadow-lg hover:from-gold-400 hover:to-gold-300 transition-all active:scale-98"
                >
                  <MessageCircle size={18} strokeWidth={2.4} />
                  <span>Send Custom Request on WhatsApp</span>
                </button>
              </div>
            )}

            {/* Navigation Controls */}
            <div className="mt-8 pt-6 border-t border-forest-800/10 flex items-center justify-between">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-forest-800/20 px-5 py-2.5 text-xs font-semibold text-forest-950 hover:bg-ivory-100 transition-colors"
                >
                  <ArrowLeft size={14} />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {step < 8 && (
                <button
                  onClick={() => setStep(step + 1)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-forest-950 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-gold-500 hover:text-forest-950 transition-all shadow-sm"
                >
                  <span>Continue</span>
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomizeTour;
