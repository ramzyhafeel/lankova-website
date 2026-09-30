import { useState, useEffect } from 'react';
import { X, MessageCircle, Calendar, Users, MapPin, Compass, ChevronDown } from 'lucide-react';
import { createWhatsAppLink } from '../../lib/whatsapp';

const TRAVEL_SERVICES = [
  {
    id: '01',
    value: '01. Complete Tour',
    name: '01. Complete Tour',
    badge: 'Vehicle + Hotels + Tours',
    description: 'Vehicle + dedicated private chauffeur + handpicked hotels + curated sightseeing tours.',
  },
  {
    id: '02',
    value: '02. Private Vehicle + Driver Only',
    name: '02. Private Vehicle + Driver Only',
    badge: 'Chauffeur Only',
    description: 'Licensed chauffeur-guide + dedicated air-conditioned vehicle + fuel & tolls.',
  },
  {
    id: '03',
    value: '03. Airport Transfer Only',
    name: '03. Airport Transfer Only',
    badge: 'CMB / BIA Airport Pickup/Drop',
    description: 'Direct airport pickup or drop-off with flight delay monitoring & highway tolls.',
  },
  {
    id: '04',
    value: '04. Hotel-to-Hotel Transfer',
    name: '04. Hotel-to-Hotel Transfer',
    badge: 'Intercity Transfer',
    description: 'Direct door-to-door transfer between Sri Lanka destinations with optional scenic stops.',
  },
  {
    id: '05',
    value: '05. Custom Tailor-Made Holiday',
    name: '05. Custom Tailor-Made Holiday',
    badge: '100% Bespoke',
    description: 'Custom designed around your exact wish list, travel pace, and budget.',
  },
];

export function PlanMyTripModal({ isOpen, onClose, initialService = '01. Complete Tour' }) {
  const [formData, setFormData] = useState({
    serviceType: initialService || '01. Complete Tour',
    customService: '',
    name: '',
    country: '',
    arrivalDate: '',
    duration: '7 Days',
    adults: 2,
    children: 0,
    destinations: 'Sigiriya, Kandy, Ella, Galle',
    message: '',
  });

  // Keep serviceType in sync if initialService changes
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
    }
  }, [initialService, isOpen]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isTransfer = formData.serviceType.includes('Transfer');
    const message = `Hello LANKOVA,

I would like to plan a private Sri Lanka trip.

*Travel Service Required:* ${formData.serviceType}${formData.customService ? `\n*Custom Service Wish:* ${formData.customService}` : ''}
*Name:* ${formData.name || 'Traveler'}
*From:* ${formData.country || 'Not specified'}
*Arrival Date:* ${formData.arrivalDate || 'Flexible'}
*Estimated Duration:* ${formData.duration}
*Travelers:* ${formData.adults} Adult(s)${formData.children > 0 ? `, ${formData.children} Child(ren)` : ''}
*${isTransfer ? 'Pickup & Drop Route' : 'Preferred Places'}:* ${formData.destinations}

*Additional Notes:*
${formData.message || 'Looking forward to your customized itinerary & quote.'}`;

    window.open(createWhatsAppLink(message), '_blank');
    onClose();
  };

  const isTransfer = formData.serviceType.includes('Transfer');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-forest-950/70 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl border border-gold-400/30"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 px-6 py-5 text-white flex items-center justify-between border-b border-gold-400/20">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400/20 text-gold-300 border border-gold-400/40">
              <Compass size={20} strokeWidth={2.2} />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold tracking-wide text-white">Plan My Sri Lanka Trip</h3>
              <p className="text-xs text-gold-300/80">Tailored by LANKOVA Travel Specialists</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* 1. Travel Service Required */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-forest-950 mb-1">
              <span className="flex items-center gap-1.5">
                <Compass size={13} className="text-gold-600" />
                What type of travel service do you require? *
              </span>
            </label>
            <div className="relative">
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full appearance-none rounded-xl border border-forest-800/15 bg-ivory-50 px-3.5 py-2.5 pr-10 text-sm font-semibold text-forest-950 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 cursor-pointer"
              >
                {TRAVEL_SERVICES.map((s) => (
                  <option key={s.id} value={s.value}>
                    {s.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-forest-950/60">
                <ChevronDown size={16} />
              </div>
            </div>

            {/* Helper badge explaining what's included */}
            <div className="mt-1.5 flex items-center gap-2 text-[11px] text-forest-950/70 bg-forest-900/5 px-2.5 py-1.5 rounded-lg border border-forest-800/10">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0" />
              <span>
                {TRAVEL_SERVICES.find((s) => s.value === formData.serviceType)?.description ||
                  'Tailored to your itinerary requirements.'}
              </span>
            </div>

            {/* Custom service specification input (when Custom Tailor-Made Holiday is selected) */}
            {formData.serviceType === '05. Custom Tailor-Made Holiday' && (
              <div className="mt-2.5 rounded-xl bg-gold-400/10 p-3 border border-gold-400/30 animate-fadeIn">
                <label className="block text-xs font-semibold text-forest-950 mb-1">
                  Specify Your Custom Holiday Requirements (Optional)
                </label>
                <input
                  type="text"
                  value={formData.customService}
                  onChange={(e) => setFormData({ ...formData, customService: e.target.value })}
                  placeholder="e.g. Wildlife safari, tea country luxury villas, scenic train ride, beach relaxation..."
                  className="w-full rounded-lg border border-forest-800/15 bg-white px-3 py-2 text-xs text-forest-950 placeholder:text-forest-950/40 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </div>
            )}
          </div>

          {/* 2. Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-forest-950 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. David Miller"
                className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3.5 py-2.5 text-sm text-forest-950 placeholder:text-forest-950/40 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-forest-950 mb-1">
                Country / Nationality
              </label>
              <input
                type="text"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                placeholder="e.g. United Kingdom"
                className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3.5 py-2.5 text-sm text-forest-950 placeholder:text-forest-950/40 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
            </div>
          </div>

          {/* 3. Arrival Date & Trip Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-forest-950 mb-1">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-gold-600" />
                  Expected Arrival Date
                </span>
              </label>
              <input
                type="date"
                value={formData.arrivalDate}
                onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3.5 py-2.5 text-sm text-forest-950 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-forest-950 mb-1">
                Trip Duration
              </label>
              <select
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3.5 py-2.5 text-sm text-forest-950 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
              >
                {isTransfer && (
                  <>
                    <option>One-Way Transfer</option>
                    <option>Round-Trip Transfer</option>
                  </>
                )}
                <option>3 Days</option>
                <option>4 - 5 Days</option>
                <option>7 Days (Popular)</option>
                <option>10 Days</option>
                <option>12 - 14 Days</option>
                <option>Custom Duration</option>
              </select>
            </div>
          </div>

          {/* 4. Travelers */}
          <div className="grid grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-forest-950 mb-1">
                <span className="flex items-center gap-1.5">
                  <Users size={13} className="text-gold-600" />
                  Adults
                </span>
              </label>
              <input
                type="number"
                min="1"
                max="30"
                value={formData.adults}
                onChange={(e) => setFormData({ ...formData, adults: parseInt(e.target.value) || 1 })}
                className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3.5 py-2.5 text-sm text-forest-950 focus:border-gold-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-forest-950 mb-1">
                Children
              </label>
              <input
                type="number"
                min="0"
                max="10"
                value={formData.children}
                onChange={(e) => setFormData({ ...formData, children: parseInt(e.target.value) || 0 })}
                className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3.5 py-2.5 text-sm text-forest-950 focus:border-gold-500 focus:outline-none"
              />
            </div>
          </div>

          {/* 5. Route / Places of Interest */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-forest-950 mb-1">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-gold-600" />
                {isTransfer ? 'Route / Pickup & Drop Locations' : 'Places of Interest'}
              </span>
            </label>
            <input
              type="text"
              value={formData.destinations}
              onChange={(e) => setFormData({ ...formData, destinations: e.target.value })}
              placeholder={
                formData.serviceType.includes('Airport')
                  ? 'e.g. Colombo Airport (CMB) to Bentota Hotel (or vice versa)'
                  : formData.serviceType.includes('Hotel')
                  ? 'e.g. Pick-up: Kandy Hotel → Drop-off: Ella Resort'
                  : 'e.g. Sigiriya, Ella, Kandy, Mirissa'
              }
              className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3.5 py-2.5 text-sm text-forest-950 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
            />
          </div>

          {/* 6. Special Preferences */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-forest-950 mb-1">
              Special Preferences or Questions
            </label>
            <textarea
              rows={2}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Driver only, hotel bookings, safari requests..."
              className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3.5 py-2.5 text-sm text-forest-950 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
            />
          </div>

          {/* CTA Submit Button */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-forest-950 shadow-md transition-all duration-300 hover:from-gold-400 hover:to-gold-300 hover:shadow-lg active:scale-98"
          >
            <MessageCircle size={18} strokeWidth={2.4} />
            <span>Send Details via WhatsApp</span>
          </button>

          <p className="text-center text-[11px] text-forest-950/60">
            Direct connection with your personal LANKOVA travel consultant. No obligations.
          </p>
        </form>
      </div>
    </div>
  );
}

export default PlanMyTripModal;
