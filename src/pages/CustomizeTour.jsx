import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Compass,
  Car,
  Plane,
  Building2,
  Sparkles,
  Check,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Users,
  Bed,
  Send,
  MessageCircle,
  Mail,
  Plus,
  Trash2,
  Clock,
  Luggage,
  AlertCircle,
  Layers,
  MapPin,
  Utensils,
  DollarSign,
  Globe,
  Navigation,
  ShieldCheck,
} from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { createWhatsAppLink } from '../lib/whatsapp';
import { site } from '../data/site';
import { customizerDestinations } from '../data/destinations';
import { getPackage } from '../data/packages';

/* ==========================================================================
   CONSTANTS & CONFIGURATION
   ========================================================================== */

const servicesList = [
  {
    id: 'complete-tour',
    title: 'Complete Tour',
    subtitle: 'Vehicle + Hotels + Tours',
    badge: 'Most Popular',
    bullets: ['Vehicle + Professional Chauffeur', 'Handpicked Hotels & Resorts', 'Curated Sightseeing & Activities'],
    icon: Compass,
    actionText: 'Request My Tour Plan',
  },
  {
    id: 'vehicle-driver',
    title: 'Private Vehicle + Driver Only',
    subtitle: 'Dedicated Chauffeur Transportation',
    badge: 'Total Flexibility',
    bullets: ['Licensed English-Speaking Driver', 'Fuel, Tolls & Driver Accommodation', 'Your Custom Route & Pacing'],
    icon: Car,
    actionText: 'Request Vehicle & Driver',
  },
  {
    id: 'airport-transfer',
    title: 'Airport Transfer Only',
    subtitle: 'Colombo Airport (CMB / BIA)',
    badge: 'Direct & Fast',
    bullets: ['24/7 Flight Delay Tracking', 'Meet & Greet Inside Terminal Hall', 'Direct Air-Conditioned Highway Ride'],
    icon: Plane,
    actionText: 'Request Airport Transfer',
  },
  {
    id: 'hotel-transfer',
    title: 'Hotel-to-Hotel Transfer',
    subtitle: 'Intercity Connections',
    badge: 'Point-to-Point',
    bullets: ['Punctual Hotel Lobby Pickup', 'Comfortable AC Luggage Fleet', 'Optional Scenic Stops En Route'],
    icon: Navigation,
    actionText: 'Request Transfer',
  },
  {
    id: 'custom-holiday',
    title: 'Custom Tailor-Made Holiday',
    subtitle: '100% Bespoke Island Journey',
    badge: 'Personalized',
    bullets: ['Pick Exactly What You Need', 'Collaborate with Itinerary Planners', 'Built from Scratch for Your Budget'],
    icon: Sparkles,
    actionText: 'Create My Tailor-Made Holiday',
  },
];

const stepsConfig = {
  'complete-tour': [
    { num: 1, title: 'Choose Your Service', short: 'Service', icon: Layers },
    { num: 2, title: 'Travel Dates & Flights', short: 'Dates', icon: Calendar },
    { num: 3, title: 'Destinations & Style', short: 'Tour Style', icon: Compass },
    { num: 4, title: 'Hotels, Rooms & Meals', short: 'Hotels', icon: Bed },
    { num: 5, title: 'Vehicle & Budget', short: 'Vehicle', icon: Car },
    { num: 6, title: 'Traveller Details & Review', short: 'Review & Send', icon: Send },
  ],
  'vehicle-driver': [
    { num: 1, title: 'Choose Your Service', short: 'Service', icon: Layers },
    { num: 2, title: 'Travel Dates & Route', short: 'Route', icon: Calendar },
    { num: 3, title: 'Passengers & Vehicle', short: 'Vehicle', icon: Car },
    { num: 4, title: 'Contact Details & Review', short: 'Review & Send', icon: Send },
  ],
  'airport-transfer': [
    { num: 1, title: 'Choose Your Service', short: 'Service', icon: Layers },
    { num: 2, title: 'Transfer & Flight Details', short: 'Transfer', icon: Plane },
    { num: 3, title: 'Contact Details & Review', short: 'Review & Send', icon: Send },
  ],
  'hotel-transfer': [
    { num: 1, title: 'Choose Your Service', short: 'Service', icon: Layers },
    { num: 2, title: 'Route, Timing & Stops', short: 'Route', icon: Navigation },
    { num: 3, title: 'Passengers & Vehicle', short: 'Vehicle', icon: Car },
    { num: 4, title: 'Contact Details & Review', short: 'Review & Send', icon: Send },
  ],
  'custom-holiday': [
    { num: 1, title: 'Choose Your Service', short: 'Service', icon: Layers },
    { num: 2, title: 'Dates & Services Needed', short: 'Services', icon: Calendar },
    { num: 3, title: 'Destinations, Interests & Budget', short: 'Wishlist', icon: Sparkles },
    { num: 4, title: 'Traveller Details & Review', short: 'Review & Send', icon: Send },
  ],
};

const airportsList = [
  'Bandaranaike International Airport (CMB / BIA) - Katunayake',
  'Mattala Rajapaksa International Airport (HRI) - Hambantota',
  'Colombo International Airport Ratmalana (RML)',
  'Jaffna International Airport (JAF)',
  'Other / Flight Not Booked Yet',
];

const travelStyles = [
  { label: 'Balanced', desc: 'A harmonious blend of cultural sightseeing, scenic drives, and leisure.' },
  { label: 'Relaxed', desc: 'Unrushed morning starts, multi-night hotel stays, and gentle pacing.' },
  { label: 'Cultural', desc: 'UNESCO ancient cities, Buddhist shrines, colonial history, and local heritage.' },
  { label: 'Adventure', desc: 'Jungle safaris, white-water rafting, hiking peaks, and wild thrills.' },
  { label: 'Luxury', desc: 'Boutique heritage villas, fine dining, private guides, and premium comfort.' },
  { label: 'Family', desc: 'Child-friendly pacing, wildlife sanctuaries, pool resorts, and spacious vans.' },
];

const vehicleTypes = [
  { id: 'sedan', label: 'Comfort Sedan', capacity: '1–3 Guests + 3 Bags', note: 'Best for couples or solo travelers' },
  { id: 'suv', label: 'Luxury SUV / Crossover', capacity: '1–4 Guests + 4 Bags', note: 'Extra elevation & hill country comfort' },
  { id: 'van', label: 'Spacious Touring Van', capacity: '4–8 Guests + 8 Bags', note: 'Generous legroom and luggage storage' },
  { id: 'minicoach', label: 'High-Roof Mini Coach', capacity: '8–14 Guests + 14 Bags', note: 'Ideal for larger families and group tours' },
  { id: 'no-pref', label: 'No Preference / Recommend for me', capacity: 'Best match for party size', note: 'Our team assigns the best-fitting vehicle' },
];

const hotelCategories = [
  '3 Star / Comfort Hotels & Guesthouses',
  '4 Star / Boutique & Colonial Resorts',
  '5 Star / Luxury Heritage Villas',
  'Luxury / Boutique Eco-Retreats',
  'Mixed (Heritage in hills, 5-Star at beach)',
  'No Preference / Recommend Best Options',
];

const mealPlanOptions = [
  'Breakfast Only (Bed & Breakfast)',
  'Half Board (Breakfast + Dinner included)',
  'Full Board (Breakfast + Lunch + Dinner)',
  'No Preference / Flexible Dining',
];

const customServicesOptions = [
  'Airport Transfers',
  'Private Vehicle + Driver',
  'Hotel Booking',
  'Tour Planning',
  'Activities & Experiences',
  'Tour Guide',
  'Restaurant Recommendations',
  'Other',
];

const holidayInterestsList = [
  'Culture & Heritage',
  'Wildlife & Safaris',
  'Beaches & Coastal Bays',
  'Mountains & Tea Country',
  'Scenic Train Journey',
  'Ayurvedic Wellness',
  'Adventure & Rafting',
  'Food & Culinary Classes',
  'Photography & Landscapes',
  'Honeymoon Romantic Moments',
  'Family Holiday',
  'Local Village Life',
];

const currencies = ['USD ($)', 'EUR (€)', 'GBP (£)', 'AUD ($)', 'CAD ($)', 'LKR (Rs)', 'SGD ($)', 'CHF'];
const budgetTiers = ['Budget Friendly', 'Mid Range', 'Premium', 'Luxury', 'Not Sure / Need Advice'];

/* ==========================================================================
   HELPER UTILITIES
   ========================================================================== */

function calculateStayDuration(start, end) {
  if (!start || !end) return null;
  const a = new Date(start);
  const b = new Date(end);
  const diffDays = Math.round((b - a) / (1000 * 60 * 60 * 24));
  if (diffDays <= 0) return null;
  const nights = diffDays;
  const days = diffDays + 1;
  return `${days} Days / ${nights} Nights`;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function NumberInput({ value, onChange, min = 0, max = 99, step = 1, className = '' }) {
  const numValue = typeof value === 'number' ? value : parseInt(value, 10) || 0;

  const handleDecrement = () => {
    onChange(Math.max(min, numValue - step));
  };

  const handleIncrement = () => {
    onChange(Math.min(max, numValue + step));
  };

  const handleInputChange = (e) => {
    const raw = e.target.value;
    if (raw === '') {
      onChange('');
      return;
    }
    const parsed = parseInt(raw, 10);
    if (!isNaN(parsed)) {
      onChange(Math.max(min, Math.min(max, parsed)));
    }
  };

  const handleBlur = () => {
    if (value === '' || isNaN(value)) {
      onChange(min);
    }
  };

  return (
    <div className={`inline-flex items-center rounded-xl bg-white border border-forest-800/20 p-0.5 shadow-sm ${className}`}>
      <button
        type="button"
        onClick={handleDecrement}
        disabled={numValue <= min}
        className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-ivory-100 text-forest-950 font-bold text-sm hover:bg-forest-950 hover:text-white transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Decrease"
      >
        -
      </button>

      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className="w-10 sm:w-12 text-center font-bold text-xs sm:text-sm text-forest-950 bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none py-1"
      />

      <button
        type="button"
        onClick={handleIncrement}
        disabled={numValue >= max}
        className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-ivory-100 text-forest-950 font-bold text-sm hover:bg-forest-950 hover:text-white transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Increase"
      >
        +
      </button>
    </div>
  );
}

/* ==========================================================================
   COMPONENT: CUSTOMIZE TOUR
   ========================================================================== */

export function CustomizeTour() {
  const [params] = useSearchParams();
  const presetPackage = params.get('package');
  const presetDest = params.get('destination');
  const presetService = params.get('service');
  const pkg = presetPackage ? getPackage(presetPackage) : undefined;

  // Identify matching service from query param
  const initialService = useMemo(() => {
    if (!presetService) return 'complete-tour';
    const found = servicesList.find(
      (s) =>
        s.id.toLowerCase() === presetService.toLowerCase() ||
        s.title.toLowerCase().includes(presetService.toLowerCase())
    );
    return found ? found.id : 'complete-tour';
  }, [presetService]);

  const [service, setService] = useState(initialService);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

  // Unified dynamic form state
  const [form, setForm] = useState({
    // Contact
    fullName: '',
    email: '',
    phone: '',
    country: '',

    // Passengers & Party
    adults: 2,
    children: 0,
    childrenAges: '',
    infants: 0,
    luggageCount: 2,
    largeBags: 2,
    smallBags: 1,

    // Dates
    arrivalDate: '',
    departureDate: '',
    startDate: '',
    endDate: '',
    transferDate: '',
    pickupTime: '09:30',
    isFlexibleDates: false,
    approxDays: '',

    // Flights
    arrivalAirport: airportsList[0],
    arrivalFlightNumber: '',
    arrivalTime: '',
    departureAirport: airportsList[0],
    departureFlightNumber: '',
    departureTime: '',

    // Airport Transfer Specific
    transferDirection: 'airport-to-hotel', // 'airport-to-hotel' | 'hotel-to-airport'
    airportTransferHotel: '',

    // Hotel-to-Hotel Transfer Specific
    pickupHotel: '',
    pickupCity: '',
    dropoffHotel: '',
    dropoffCity: '',
    hasMultipleStops: false,
    intermediateStops: [''],

    // Vehicle + Driver Specific
    driverPickupLocation: '',
    driverDropoffLocation: '',
    driverLanguage: 'English-speaking driver',
    otherLanguage: '',
    driverTravelPlan: '',

    // Custom Tailor-Made Holiday Specific
    customServices: ['Private Vehicle + Driver', 'Hotel Booking', 'Tour Planning', 'Activities & Experiences'],
    customDestinationInput: '',

    // Common Preferences
    destinations: presetDest ? [presetDest] : ['Sigiriya', 'Kandy', 'Ella', 'Galle'],
    interests: ['Culture & Heritage', 'Wildlife & Safaris', 'Scenic Train Journey'],
    travelStyle: 'Balanced',
    vehicle: vehicleTypes[4].label,
    transmission: 'No Preference',
    childSeatRequired: false,

    // Hotel & Rooms (Complete Tour / Custom Holiday)
    hotelCategory: hotelCategories[1],
    roomCount: 1,
    roomDouble: 1,
    roomTwin: 0,
    roomTriple: 0,
    roomFamily: 0,
    mealPlan: mealPlanOptions[0],

    // Budget
    budgetAmount: '',
    budgetCurrency: currencies[0],
    budgetTier: budgetTiers[1],

    // Additional Notes
    specialRequests: '',
    dietaryRequirements: '',
    accessibilityRequirements: '',
    anythingElse: '',

    // Presets
    packageName: pkg?.name || '',
  });

  const currentSteps = stepsConfig[service] || stepsConfig['complete-tour'];
  const currentServiceObj = servicesList.find((s) => s.id === service) || servicesList[0];

  // Duration calculations
  const completeTourDuration = calculateStayDuration(form.arrivalDate, form.departureDate);
  const driverHireDuration = calculateStayDuration(form.startDate, form.endDate);

  // Field change handler
  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };


  const toggleArrayItem = (field, item) => {
    setForm((prev) => {
      const arr = prev[field] || [];
      const updated = arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item];
      return { ...prev, [field]: updated };
    });
  };

  // Add custom destination tag
  const addCustomDestination = () => {
    const trimmed = form.customDestinationInput.trim();
    if (trimmed && !form.destinations.includes(trimmed)) {
      setForm((prev) => ({
        ...prev,
        destinations: [...prev.destinations, trimmed],
        customDestinationInput: '',
      }));
    }
  };

  // Intermediate stops handlers
  const updateStop = (idx, val) => {
    setForm((prev) => {
      const stops = [...prev.intermediateStops];
      stops[idx] = val;
      return { ...prev, intermediateStops: stops };
    });
  };

  const addStop = () => {
    setForm((prev) => ({
      ...prev,
      intermediateStops: [...prev.intermediateStops, ''],
    }));
  };

  const removeStop = (idx) => {
    setForm((prev) => ({
      ...prev,
      intermediateStops: prev.intermediateStops.filter((_, i) => i !== idx),
    }));
  };

  // Service change handler
  const handleServiceChange = (newServiceId) => {
    if (newServiceId === service) return;
    setService(newServiceId);
    setErrors({});
    // Reset step back to 1 for clean transition
    setStep(1);
  };

  // Step validation
  const validateCurrentStep = () => {
    const errs = {};

    // STEP 1: Always valid since a service is already selected by default
    if (step === 1) return true;

    // VALIDATION FOR COMPLETE TOUR
    if (service === 'complete-tour') {
      if (step === 2) {
        if (!form.arrivalDate) errs.arrivalDate = 'Arrival date is required';
        if (!form.departureDate) errs.departureDate = 'Departure date is required';
        if (form.arrivalDate && form.departureDate) {
          if (new Date(form.departureDate) < new Date(form.arrivalDate)) {
            errs.departureDate = 'Departure date cannot be before arrival date';
          }
        }
      }
      if (step === 6) {
        if (!form.fullName.trim()) errs.fullName = 'Full name is required';
        if (!form.phone.trim()) errs.phone = 'WhatsApp or phone number is required';
        if (!form.email.trim()) {
          errs.email = 'Email address is required';
        } else if (!isValidEmail(form.email)) {
          errs.email = 'Please enter a valid email address';
        }
        if (form.adults < 1) errs.adults = 'At least 1 adult passenger is required';
      }
    }

    // VALIDATION FOR VEHICLE + DRIVER ONLY
    if (service === 'vehicle-driver') {
      if (step === 2) {
        if (!form.startDate) errs.startDate = 'Start date is required';
        if (!form.endDate) errs.endDate = 'End date is required';
        if (form.startDate && form.endDate) {
          if (new Date(form.endDate) < new Date(form.startDate)) {
            errs.endDate = 'End date cannot be before start date';
          }
        }
        if (!form.driverPickupLocation.trim()) errs.driverPickupLocation = 'Pickup location is required';
        if (!form.driverDropoffLocation.trim()) errs.driverDropoffLocation = 'Final drop-off location is required';
      }
      if (step === 3) {
        if (form.adults < 1) errs.adults = 'At least 1 adult passenger is required';
      }
      if (step === 4) {
        if (!form.fullName.trim()) errs.fullName = 'Full name is required';
        if (!form.phone.trim()) errs.phone = 'WhatsApp or phone number is required';
        if (!form.email.trim()) {
          errs.email = 'Email address is required';
        } else if (!isValidEmail(form.email)) {
          errs.email = 'Please enter a valid email address';
        }
      }
    }

    // VALIDATION FOR AIRPORT TRANSFER ONLY
    if (service === 'airport-transfer') {
      if (step === 2) {
        if (form.transferDirection === 'airport-to-hotel') {
          if (!form.arrivalDate) errs.arrivalDate = 'Arrival date is required';
          if (!form.arrivalFlightNumber.trim()) errs.arrivalFlightNumber = 'Flight number is required (e.g. UL 504)';
          if (!form.arrivalTime.trim()) errs.arrivalTime = 'Arrival time is required';
          if (!form.airportTransferHotel.trim()) errs.airportTransferHotel = 'Destination hotel or address is required';
        } else {
          if (!form.pickupHotel.trim()) errs.pickupHotel = 'Pickup hotel or address is required';
          if (!form.transferDate) errs.transferDate = 'Pickup date is required';
          if (!form.pickupTime.trim()) errs.pickupTime = 'Pickup time is required';
        }
        if (form.adults < 1) errs.adults = 'At least 1 passenger is required';
      }
      if (step === 3) {
        if (!form.fullName.trim()) errs.fullName = 'Full name is required';
        if (!form.phone.trim()) errs.phone = 'WhatsApp or phone number is required';
        if (form.email.trim() && !isValidEmail(form.email)) {
          errs.email = 'Please enter a valid email address';
        }
      }
    }

    // VALIDATION FOR HOTEL-TO-HOTEL TRANSFER
    if (service === 'hotel-transfer') {
      if (step === 2) {
        if (!form.pickupHotel.trim()) errs.pickupHotel = 'Pickup hotel or address is required';
        if (!form.pickupCity.trim()) errs.pickupCity = 'Pickup city/location is required';
        if (!form.dropoffHotel.trim()) errs.dropoffHotel = 'Drop-off hotel or address is required';
        if (!form.dropoffCity.trim()) errs.dropoffCity = 'Drop-off city/location is required';
        if (!form.transferDate) errs.transferDate = 'Transfer date is required';
        if (!form.pickupTime.trim()) errs.pickupTime = 'Preferred pickup time is required';
      }
      if (step === 3) {
        if (form.adults < 1) errs.adults = 'At least 1 adult passenger is required';
      }
      if (step === 4) {
        if (!form.fullName.trim()) errs.fullName = 'Full name is required';
        if (!form.phone.trim()) errs.phone = 'WhatsApp or phone number is required';
        if (form.email.trim() && !isValidEmail(form.email)) {
          errs.email = 'Please enter a valid email address';
        }
      }
    }

    // VALIDATION FOR CUSTOM TAILOR-MADE HOLIDAY
    if (service === 'custom-holiday') {
      if (step === 2) {
        if (form.arrivalDate && form.departureDate) {
          if (new Date(form.departureDate) < new Date(form.arrivalDate)) {
            errs.departureDate = 'Departure date cannot be before arrival date';
          }
        }
      }
      if (step === 4) {
        if (!form.fullName.trim()) errs.fullName = 'Full name is required';
        if (!form.phone.trim()) errs.phone = 'WhatsApp or phone number is required';
        if (!form.email.trim()) {
          errs.email = 'Email address is required';
        } else if (!isValidEmail(form.email)) {
          errs.email = 'Please enter a valid email address';
        }
        if (form.adults < 1) errs.adults = 'At least 1 adult passenger is required';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (step < currentSteps.length) {
        setStep((prev) => prev + 1);
        window.scrollTo({ top: 380, behavior: 'smooth' });
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }
  };

  /* ==========================================================================
     WHATSAPP & SUBMISSION MESSAGE BUILDER
     ========================================================================== */

  const buildWhatsAppMessage = () => {
    const guestParts = [];
    if (form.adults > 0) guestParts.push(`${form.adults} Adult${form.adults > 1 ? 's' : ''}`);
    if (form.children > 0) guestParts.push(`${form.children} Child${form.children > 1 ? 'ren' : ''}`);
    if (form.infants > 0) guestParts.push(`${form.infants} Infant${form.infants > 1 ? 's' : ''}`);

    if (service === 'complete-tour') {
      return `🌟 *NEW COMPLETE TOUR INQUIRY* - LANKOVA
----------------------------------------
👤 *Lead Guest:* ${form.fullName || 'Traveler'}
📧 *Email:* ${form.email || 'Not specified'}
📱 *WhatsApp/Phone:* ${form.phone || 'Not specified'}
🌍 *Nationality:* ${form.country || 'Not specified'}
👥 *Party Size:* ${guestParts.join(', ') || '2 Adults'}${form.childrenAges ? ` (Ages: ${form.childrenAges})` : ''}

🗓️ *Travel Dates:* ${form.arrivalDate || 'Flexible'} to ${form.departureDate || 'Flexible'} ${completeTourDuration ? `(${completeTourDuration})` : ''}
🔄 *Dates Flexible:* ${form.isFlexibleDates ? 'Yes' : 'No'}

✈️ *Arrival Flight:* ${form.arrivalAirport}
${form.arrivalFlightNumber ? `   • Flight: ${form.arrivalFlightNumber} @ ${form.arrivalTime || 'TBD'}` : ''}
✈️ *Departure Flight:* ${form.departureAirport}
${form.departureFlightNumber ? `   • Flight: ${form.departureFlightNumber} @ ${form.departureTime || 'TBD'}` : ''}

📍 *Destinations of Interest:*
${form.destinations.length ? form.destinations.join(', ') : 'Open to recommendations'}

✨ *Preferred Travel Style:* ${form.travelStyle}
🎯 *Activities:* ${form.interests.length ? form.interests.join(', ') : 'All highlights'}

🏨 *Accommodation Preference:* ${form.hotelCategory}
🛏️ *Rooms Required:* ${form.roomCount} room(s)${form.roomDouble ? ` (Double: ${form.roomDouble})` : ''}${form.roomTwin ? ` (Twin: ${form.roomTwin})` : ''}${form.roomTriple ? ` (Triple: ${form.roomTriple})` : ''}${form.roomFamily ? ` (Family: ${form.roomFamily})` : ''}
🍽️ *Meal Plan:* ${form.mealPlan}

🚗 *Vehicle Preference:* ${form.vehicle} (${form.transmission})
💰 *Estimated Budget:* ${form.budgetAmount ? `${form.budgetAmount} ${form.budgetCurrency}` : form.budgetTier}

📝 *Special Requests / Notes:*
${form.specialRequests || form.anythingElse || 'Looking forward to your customized itinerary proposal & quotation.'}${form.dietaryRequirements ? `\n• Dietary: ${form.dietaryRequirements}` : ''}${form.accessibilityRequirements ? `\n• Accessibility: ${form.accessibilityRequirements}` : ''}`;
    }

    if (service === 'vehicle-driver') {
      return `🚗 *PRIVATE VEHICLE & DRIVER INQUIRY* - LANKOVA
----------------------------------------------
👤 *Lead Guest:* ${form.fullName || 'Traveler'}
📧 *Email:* ${form.email || 'Not specified'}
📱 *WhatsApp/Phone:* ${form.phone || 'Not specified'}
👥 *Passengers:* ${form.adults} Adult(s)${form.children > 0 ? `, ${form.children} Child(ren)` : ''} (Luggage: ${form.luggageCount} bags)

🗓️ *Hire Window:* ${form.startDate || 'TBD'} to ${form.endDate || 'TBD'} ${driverHireDuration ? `(${driverHireDuration})` : ''}
📍 *Pickup Location:* ${form.driverPickupLocation || 'TBD'}
📍 *Final Drop-off Location:* ${form.driverDropoffLocation || 'TBD'}

🗺️ *Planned Route / Destinations:*
${form.destinations.length ? form.destinations.join(', ') : 'Self-planned itinerary'}

🚗 *Vehicle Preference:* ${form.vehicle}
🗣️ *Driver Language:* ${form.driverLanguage}${form.otherLanguage ? ` (${form.otherLanguage})` : ''}
👶 *Child Seat Required:* ${form.childSeatRequired ? 'Yes' : 'No'}

📝 *Travel Plan / Itinerary Notes:*
${form.driverTravelPlan || form.specialRequests || 'Inquiring about driver hire rates and daily itinerary support.'}`;
    }

    if (service === 'airport-transfer') {
      const isAirportToHotel = form.transferDirection === 'airport-to-hotel';
      return `✈️ *AIRPORT TRANSFER INQUIRY* - LANKOVA
--------------------------------------
👤 *Guest Name:* ${form.fullName || 'Traveler'}
📱 *WhatsApp/Phone:* ${form.phone || 'Not specified'}
📧 *Email:* ${form.email || 'Not specified'}

🔄 *Transfer Direction:* ${isAirportToHotel ? 'Airport → Hotel / Accommodation' : 'Hotel / Accommodation → Airport'}
${isAirportToHotel ? `✈️ *Arrival Airport:* ${form.arrivalAirport}
📅 *Arrival Date:* ${form.arrivalDate || 'TBD'}
🕒 *Arrival Time:* ${form.arrivalTime || 'TBD'}
🛬 *Flight Number:* ${form.arrivalFlightNumber || 'TBD'}
🏨 *Destination Hotel:* ${form.airportTransferHotel || 'TBD'}` : `🏨 *Pickup Hotel/Address:* ${form.pickupHotel || 'TBD'}
📅 *Pickup Date:* ${form.transferDate || 'TBD'}
🕒 *Preferred Pickup Time:* ${form.pickupTime || 'TBD'}
✈️ *Departure Airport:* ${form.departureAirport}
🛫 *Flight Number:* ${form.departureFlightNumber || 'Not specified'} (${form.departureTime || 'TBD'})`}

👥 *Passengers:* ${form.adults + form.children} passenger(s)
🧳 *Baggage:* ${form.largeBags} Large Bag(s), ${form.smallBags} Small Bag(s)
🚗 *Vehicle Preference:* ${form.vehicle}
👶 *Child Seat Required:* ${form.childSeatRequired ? 'Yes' : 'No'}

📝 *Special Notes:*
${form.specialRequests || 'Please provide punctual private airport transfer quote.'}`;
    }

    if (service === 'hotel-transfer') {
      const validStops = form.intermediateStops.filter((s) => s.trim().length > 0);
      return `🏨 *HOTEL-TO-HOTEL TRANSFER INQUIRY* - LANKOVA
---------------------------------------------
👤 *Guest Name:* ${form.fullName || 'Traveler'}
📱 *WhatsApp/Phone:* ${form.phone || 'Not specified'}
📧 *Email:* ${form.email || 'Not specified'}

📍 *Pickup:* ${form.pickupHotel || 'Hotel'} (${form.pickupCity || 'City'})
📍 *Drop-off:* ${form.dropoffHotel || 'Hotel'} (${form.dropoffCity || 'City'})
📅 *Transfer Date:* ${form.transferDate || 'TBD'}
🕒 *Preferred Pickup Time:* ${form.pickupTime || '09:30 AM'}
${validStops.length ? `🛑 *Intermediate Stops:* ${validStops.join(' ➔ ')}` : '🛑 *Intermediate Stops:* Direct transfer'}

👥 *Passengers:* ${form.adults} Adult(s)${form.children > 0 ? `, ${form.children} Child(ren)` : ''}
🧳 *Luggage:* ${form.luggageCount} Bag(s)
🚗 *Vehicle Preference:* ${form.vehicle}
👶 *Child Seat Required:* ${form.childSeatRequired ? 'Yes' : 'No'}

📝 *Special Requests:*
${form.specialRequests || 'Requesting private transfer rate and availability.'}`;
    }

    if (service === 'custom-holiday') {
      return `✨ *CUSTOM TAILOR-MADE HOLIDAY INQUIRY* - LANKOVA
------------------------------------------------
👤 *Lead Guest:* ${form.fullName || 'Traveler'}
📧 *Email:* ${form.email || 'Not specified'}
📱 *WhatsApp/Phone:* ${form.phone || 'Not specified'}
🌍 *Nationality:* ${form.country || 'Not specified'}
👥 *Party Size:* ${guestParts.join(', ') || '2 Adults'}${form.childrenAges ? ` (Ages: ${form.childrenAges})` : ''}

🗓️ *Approx. Dates:* ${form.arrivalDate || 'Flexible'} to ${form.departureDate || 'Flexible'}${form.approxDays ? ` (~${form.approxDays} Days)` : ''}
🔄 *Dates Flexible:* ${form.isFlexibleDates ? 'Yes' : 'No'}

🛠️ *Services Needed:*
${form.customServices.map((s) => `• ${s}`).join('\n')}

📍 *Destinations Wishlist:*
${form.destinations.length ? form.destinations.join(', ') : 'Open to expert advice'}

❤️ *Holiday Interests:*
${form.interests.length ? form.interests.join(', ') : 'Balanced mix'}

${form.customServices.includes('Hotel Booking') ? `🏨 *Accommodation Style:* ${form.hotelCategory} (${form.roomCount} room(s))\n` : ''}${form.customServices.includes('Private Vehicle + Driver') ? `🚗 *Vehicle Preference:* ${form.vehicle}\n` : ''}${form.customServices.includes('Airport Transfers') ? `✈️ *Airport Transfer:* ${form.arrivalAirport}\n` : ''}💰 *Budget:* ${form.budgetAmount ? `${form.budgetAmount} ${form.budgetCurrency}` : form.budgetTier}

🌟 *Dream Holiday Vision:*
${form.specialRequests || form.anythingElse || 'Looking forward to creating an unforgettable custom holiday with Lankova.'}`;
    }

    return `Hello LANKOVA, I would like to inquire about Sri Lanka travel services.`;
  };

  const handleFinalSubmit = () => {
    if (!validateCurrentStep()) return;
    const msg = buildWhatsAppMessage();
    window.open(createWhatsAppLink(msg), '_blank');
  };

  const handleEmailInquiry = () => {
    if (!validateCurrentStep()) return;
    const msg = buildWhatsAppMessage();
    const subject = encodeURIComponent(`LANKOVA Inquiry: ${currentServiceObj.title} (${form.fullName || 'Traveler'})`);
    const body = encodeURIComponent(msg);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  /* ==========================================================================
     RENDER
     ========================================================================== */

  return (
    <div className="bg-ivory-100 min-h-screen text-forest-950">
      <PageHero
        eyebrow="Trip Planner"
        title="Design Your Custom Sri Lanka Holiday"
        subtitle="Select your preferred service below. Our intelligent builder dynamically tailors every question to match your exact travel needs."
        image="/hero/ella-nine-arch-bridge.jpg"
      />

      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">

          {/* Progress Tracker Bar */}
          <div className="mb-8 bg-white rounded-2xl p-4 sm:p-6 border border-forest-800/10 shadow-sm transition-all duration-300">
            <div className="flex items-center justify-between text-xs font-bold text-forest-950 mb-3">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-gold-500 animate-pulse" />
                <span>Step {step} of {currentSteps.length}</span>
                <span className="text-forest-950/40">•</span>
                <span className="text-forest-950/70 font-semibold">{currentServiceObj.title}</span>
              </span>
              <span className="text-gold-600 font-bold">{currentSteps[step - 1]?.title}</span>
            </div>

            <div className="h-2 w-full bg-ivory-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-gold-500 to-gold-400 transition-all duration-300 rounded-full"
                style={{ width: `${(step / currentSteps.length) * 100}%` }}
              />
            </div>

            {/* Step Indicators */}
            <div
              className="hidden sm:grid gap-1.5 mt-4 pt-4 border-t border-forest-800/5 text-center"
              style={{ gridTemplateColumns: `repeat(${currentSteps.length}, minmax(0, 1fr))` }}
            >
              {currentSteps.map((s) => {
                const Icon = s.icon;
                const isCurrent = s.num === step;
                const isDone = s.num < step;

                return (
                  <button
                    key={s.num}
                    type="button"
                    onClick={() => {
                      if (s.num <= step || validateCurrentStep()) {
                        setStep(s.num);
                        window.scrollTo({ top: 380, behavior: 'smooth' });
                      }
                    }}
                    className={`flex flex-col items-center gap-1 text-[10px] transition-all cursor-pointer ${
                      isCurrent
                        ? 'text-forest-950 font-bold scale-105'
                        : isDone
                        ? 'text-gold-700 font-semibold hover:text-forest-950'
                        : 'text-forest-950/40 hover:text-forest-950/70'
                    }`}
                  >
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs transition-colors ${
                        isCurrent
                          ? 'bg-forest-950 text-gold-400 ring-2 ring-gold-400/40 shadow-sm'
                          : isDone
                          ? 'bg-gold-500/20 text-gold-700'
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
          <div className="rounded-3xl bg-white p-6 sm:p-10 border border-forest-800/10 shadow-sm transition-all duration-300">

            {/* ================================================================
                STEP 1: CHOOSE YOUR SERVICE (UNIVERSAL FIRST STEP)
               ================================================================ */}
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/15 text-gold-700 text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles size={13} />
                    <span>Choose Your Service</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mb-1">
                    What type of travel service do you require?
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/65">
                    Select one of our 5 specialized services below. The rest of the builder will instantly adapt to ask only what is needed.
                  </p>
                </div>

                <div className="space-y-3.5 pt-1">
                  {servicesList.map((item, idx) => {
                    const isSelected = service === item.id;
                    const Icon = item.icon;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleServiceChange(item.id)}
                        className={`w-full flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer group ${
                          isSelected
                            ? 'border-gold-500 bg-forest-950 text-white shadow-md ring-1 ring-gold-400/50'
                            : 'border-forest-800/15 bg-ivory-50 text-forest-950 hover:bg-ivory-200/70 hover:border-forest-800/30'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-colors ${
                              isSelected
                                ? 'bg-gold-500 text-forest-950'
                                : 'bg-forest-950/10 text-forest-950 group-hover:bg-forest-950 group-hover:text-white'
                            }`}
                          >
                            <Icon size={20} strokeWidth={2} />
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span className="text-xs font-bold text-gold-500/90">0{idx + 1}.</span>
                              <span className={`text-base font-bold ${isSelected ? 'text-gold-300' : 'text-forest-950'}`}>
                                {item.title}
                              </span>
                              {item.badge && (
                                <span
                                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                                    isSelected
                                      ? 'bg-gold-500/20 text-gold-300 border border-gold-400/30'
                                      : 'bg-gold-500/15 text-gold-700 border border-gold-500/30'
                                  }`}
                                >
                                  {item.badge}
                                </span>
                              )}
                            </div>

                            <p className={`text-xs sm:text-sm ${isSelected ? 'text-ivory-200/90' : 'text-forest-950/65'}`}>
                              {item.subtitle}
                            </p>

                            {/* Bullet Features */}
                            <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1 text-[11px]">
                              {item.bullets.map((b) => (
                                <span
                                  key={b}
                                  className={`inline-flex items-center gap-1 ${
                                    isSelected ? 'text-ivory-200/80' : 'text-forest-950/60'
                                  }`}
                                >
                                  <Check size={11} className={isSelected ? 'text-gold-400' : 'text-emerald-600'} />
                                  <span>{b}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Active Radio Badge */}
                        <div className="mt-3 sm:mt-0 sm:ml-4 flex items-center justify-end">
                          <div
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all ${
                              isSelected
                                ? 'border-gold-400 bg-gold-400 text-forest-950 shadow-sm'
                                : 'border-forest-800/20 bg-white/70 text-transparent'
                            }`}
                          >
                            <Check size={14} className="stroke-[3]" />
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ================================================================
                SERVICE 1: COMPLETE TOUR - STEPS 2 to 6
               ================================================================ */}
            {service === 'complete-tour' && step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    When are you planning to visit Sri Lanka?
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    Provide your estimated travel dates and flight details if available.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1.5">
                      Arrival Date *
                    </label>
                    <input
                      type="date"
                      value={form.arrivalDate}
                      onChange={(e) => updateField('arrivalDate', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-sm text-forest-950 focus:bg-white focus:outline-none transition-colors ${
                        errors.arrivalDate ? 'border-rose-500 focus:border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.arrivalDate && (
                      <p className="text-[11px] font-semibold text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.arrivalDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1.5">
                      Departure Date *
                    </label>
                    <input
                      type="date"
                      value={form.departureDate}
                      onChange={(e) => updateField('departureDate', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-sm text-forest-950 focus:bg-white focus:outline-none transition-colors ${
                        errors.departureDate ? 'border-rose-500 focus:border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.departureDate && (
                      <p className="text-[11px] font-semibold text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.departureDate}
                      </p>
                    )}
                  </div>
                </div>

                {completeTourDuration && (
                  <div className="rounded-xl bg-forest-900/5 p-3.5 border border-forest-800/10 flex items-center gap-2 text-xs font-bold text-forest-900">
                    <Sparkles size={16} className="text-gold-600" />
                    <span>Calculated Length of Stay: {completeTourDuration}</span>
                  </div>
                )}

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-ivory-50 border border-forest-800/10">
                  <input
                    type="checkbox"
                    id="flexibleDates"
                    checked={form.isFlexibleDates}
                    onChange={(e) => updateField('isFlexibleDates', e.target.checked)}
                    className="h-4 w-4 rounded border-forest-800/30 text-gold-500 focus:ring-gold-400"
                  />
                  <label htmlFor="flexibleDates" className="text-xs font-semibold text-forest-950 cursor-pointer">
                    My travel dates are flexible (+/- 3 days)
                  </label>
                </div>

                {/* Arrival Flight Details */}
                <div className="pt-2 border-t border-forest-800/10 space-y-4">
                  <h4 className="font-serif text-lg font-bold text-forest-950">Arrival Flight Information (Optional)</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-3">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-950 mb-1">
                        Arrival Airport
                      </label>
                      <select
                        value={form.arrivalAirport}
                        onChange={(e) => updateField('arrivalAirport', e.target.value)}
                        className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:border-gold-500 focus:bg-white focus:outline-none"
                      >
                        {airportsList.map((a) => (
                          <option key={a} value={a}>{a}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-950 mb-1">
                        Flight Number
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. UL 504, EK 652"
                        value={form.arrivalFlightNumber}
                        onChange={(e) => updateField('arrivalFlightNumber', e.target.value)}
                        className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:border-gold-500 focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-950 mb-1">
                        Arrival Time
                      </label>
                      <input
                        type="time"
                        value={form.arrivalTime}
                        onChange={(e) => updateField('arrivalTime', e.target.value)}
                        className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:border-gold-500 focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Departure Flight Details */}
                <div className="pt-2 border-t border-forest-800/10 space-y-4">
                  <h4 className="font-serif text-lg font-bold text-forest-950">Departure Flight Information (Optional)</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-3">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-950 mb-1">
                        Departure Airport
                      </label>
                      <select
                        value={form.departureAirport}
                        onChange={(e) => updateField('departureAirport', e.target.value)}
                        className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:border-gold-500 focus:bg-white focus:outline-none"
                      >
                        {airportsList.map((a) => (
                          <option key={a} value={a}>{a}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-950 mb-1">
                        Flight Number
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. UL 505"
                        value={form.departureFlightNumber}
                        onChange={(e) => updateField('departureFlightNumber', e.target.value)}
                        className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:border-gold-500 focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-950 mb-1">
                        Departure Time
                      </label>
                      <input
                        type="time"
                        value={form.departureTime}
                        onChange={(e) => updateField('departureTime', e.target.value)}
                        className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:border-gold-500 focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {service === 'complete-tour' && step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    Destinations &amp; Tour Preferences
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    Choose the places and experiences you’d love included in your bespoke itinerary.
                  </p>
                </div>

                {/* Destinations Multi-select */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-2">
                    Destinations You Want to Visit
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {customizerDestinations.map((dest) => {
                      const isSel = form.destinations.includes(dest);
                      return (
                        <button
                          key={dest}
                          type="button"
                          onClick={() => toggleArrayItem('destinations', dest)}
                          className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                            isSel
                              ? 'border-gold-500 bg-forest-950 text-gold-300 shadow-sm'
                              : 'border-forest-800/15 bg-ivory-50 text-forest-950/80 hover:bg-ivory-200'
                          }`}
                        >
                          {dest} {isSel && '✓'}
                        </button>
                      );
                    })}
                  </div>

                  {/* Add Custom Destination */}
                  <div className="flex gap-2 max-w-sm">
                    <input
                      type="text"
                      placeholder="Add another location..."
                      value={form.customDestinationInput}
                      onChange={(e) => updateField('customDestinationInput', e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addCustomDestination();
                        }
                      }}
                      className="flex-1 rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2 text-xs text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={addCustomDestination}
                      className="rounded-xl bg-forest-950 px-3 py-2 text-xs font-bold text-white hover:bg-gold-500 hover:text-forest-950 transition-colors"
                    >
                      Add
                    </button>
                  </div>
                </div>

                {/* Preferred Travel Style */}
                <div className="pt-3 border-t border-forest-800/10">
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-2.5">
                    Preferred Travel Style
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {travelStyles.map((style) => {
                      const isSel = form.travelStyle === style.label;
                      return (
                        <button
                          key={style.label}
                          type="button"
                          onClick={() => updateField('travelStyle', style.label)}
                          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                            isSel
                              ? 'border-gold-500 bg-forest-950 text-white shadow-sm'
                              : 'border-forest-800/15 bg-ivory-50 text-forest-950 hover:bg-ivory-200'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-sm font-bold ${isSel ? 'text-gold-300' : 'text-forest-950'}`}>
                              {style.label}
                            </span>
                            {isSel && <Check size={14} className="text-gold-400 stroke-[2.5]" />}
                          </div>
                          <p className={`text-[11px] leading-relaxed ${isSel ? 'text-ivory-200/80' : 'text-forest-950/60'}`}>
                            {style.desc}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Activities Interested in */}
                <div className="pt-3 border-t border-forest-800/10">
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-2">
                    Activities &amp; Highlights Desired
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {holidayInterestsList.map((act) => {
                      const isSel = form.interests.includes(act);
                      return (
                        <button
                          key={act}
                          type="button"
                          onClick={() => toggleArrayItem('interests', act)}
                          className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                            isSel
                              ? 'border-gold-500 bg-forest-950 text-gold-300 shadow-sm'
                              : 'border-forest-800/15 bg-ivory-50 text-forest-950/80 hover:bg-ivory-200'
                          }`}
                        >
                          {act} {isSel && '✓'}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {service === 'complete-tour' && step === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    Hotels, Rooms &amp; Dining Preferences
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    Let us know what comfort level and room configurations your party requires.
                  </p>
                </div>

                {/* Hotel Category */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-2">
                    Hotel Star Rating / Category
                  </label>
                  <div className="space-y-2">
                    {hotelCategories.map((cat) => {
                      const isSel = form.hotelCategory === cat;
                      return (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => updateField('hotelCategory', cat)}
                          className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-xs sm:text-sm font-semibold text-left transition-all cursor-pointer ${
                            isSel
                              ? 'border-gold-500 bg-forest-950 text-gold-300 shadow-sm'
                              : 'border-forest-800/15 bg-ivory-50 text-forest-950/80 hover:bg-ivory-200'
                          }`}
                        >
                          <span>{cat}</span>
                          {isSel && <Check size={16} className="text-gold-400 stroke-[2.5]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Room Requirements */}
                <div className="pt-3 border-t border-forest-800/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-forest-950">
                        Total Number of Rooms
                      </label>
                      <p className="text-[11px] text-forest-950/60">How many rooms does your party require?</p>
                    </div>
                    <NumberInput
                      min={1}
                      value={form.roomCount}
                      onChange={(val) => updateField('roomCount', val)}
                    />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-ivory-50 border border-forest-800/10 flex flex-col items-center gap-1.5 text-center">
                      <p className="text-xs font-bold text-forest-950">Double Bed</p>
                      <NumberInput min={0} value={form.roomDouble} onChange={(val) => updateField('roomDouble', val)} />
                    </div>
                    <div className="p-3 rounded-xl bg-ivory-50 border border-forest-800/10 flex flex-col items-center gap-1.5 text-center">
                      <p className="text-xs font-bold text-forest-950">Twin Beds</p>
                      <NumberInput min={0} value={form.roomTwin} onChange={(val) => updateField('roomTwin', val)} />
                    </div>
                    <div className="p-3 rounded-xl bg-ivory-50 border border-forest-800/10 flex flex-col items-center gap-1.5 text-center">
                      <p className="text-xs font-bold text-forest-950">Triple Room</p>
                      <NumberInput min={0} value={form.roomTriple} onChange={(val) => updateField('roomTriple', val)} />
                    </div>
                    <div className="p-3 rounded-xl bg-ivory-50 border border-forest-800/10 flex flex-col items-center gap-1.5 text-center">
                      <p className="text-xs font-bold text-forest-950">Family Suite</p>
                      <NumberInput min={0} value={form.roomFamily} onChange={(val) => updateField('roomFamily', val)} />
                    </div>
                  </div>
                </div>

                {/* Meal Preference */}
                <div className="pt-3 border-t border-forest-800/10">
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-2">
                    Meal Plan Preference
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {mealPlanOptions.map((meal) => {
                      const isSel = form.mealPlan === meal;
                      return (
                        <button
                          key={meal}
                          type="button"
                          onClick={() => updateField('mealPlan', meal)}
                          className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                            isSel
                              ? 'border-gold-500 bg-forest-950 text-gold-300 shadow-sm'
                              : 'border-forest-800/15 bg-ivory-50 text-forest-950/80 hover:bg-ivory-200'
                          }`}
                        >
                          {meal} {isSel && '✓'}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {service === 'complete-tour' && step === 5 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    Vehicle Preference &amp; Approximate Budget
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    Every vehicle includes an English-speaking driver, fuel, highway expressway tolls, and air conditioning.
                  </p>
                </div>

                {/* Vehicle Selection */}
                <div className="space-y-2.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950">
                    Vehicle Type
                  </label>
                  {vehicleTypes.map((veh) => {
                    const isSel = form.vehicle === veh.label;
                    return (
                      <button
                        key={veh.id}
                        type="button"
                        onClick={() => updateField('vehicle', veh.label)}
                        className={`w-full flex items-start justify-between p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                          isSel
                            ? 'border-gold-500 bg-forest-950 text-white shadow-sm'
                            : 'border-forest-800/15 bg-ivory-50 text-forest-950 hover:bg-ivory-200'
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm font-bold ${isSel ? 'text-gold-300' : 'text-forest-950'}`}>
                              {veh.label}
                            </span>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${isSel ? 'bg-white/10 text-ivory-200' : 'bg-forest-950/10 text-forest-950/70'}`}>
                              {veh.capacity}
                            </span>
                          </div>
                          <p className={`text-xs mt-0.5 ${isSel ? 'text-ivory-200/80' : 'text-forest-950/60'}`}>
                            {veh.note}
                          </p>
                        </div>
                        {isSel && <Check size={16} className="text-gold-400 mt-1 stroke-[2.5]" />}
                      </button>
                    );
                  })}
                </div>

                {/* Budget */}
                <div className="pt-3 border-t border-forest-800/10 space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950">
                    Approximate Budget (Optional)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <input
                        type="text"
                        placeholder="e.g. 2500 - 3500"
                        value={form.budgetAmount}
                        onChange={(e) => updateField('budgetAmount', e.target.value)}
                        className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-4 py-2.5 text-xs text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <select
                        value={form.budgetCurrency}
                        onChange={(e) => updateField('budgetCurrency', e.target.value)}
                        className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                      >
                        {currencies.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {budgetTiers.map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => updateField('budgetTier', tier)}
                        className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                          form.budgetTier === tier
                            ? 'bg-gold-500 text-forest-950 font-bold'
                            : 'bg-ivory-200 text-forest-950/70 hover:bg-ivory-300'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="pt-3 border-t border-forest-800/10 space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950">
                    Special Inquiries &amp; Accessibility (Optional)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Dietary requirements (e.g. Halal, Vegan)"
                      value={form.dietaryRequirements}
                      onChange={(e) => updateField('dietaryRequirements', e.target.value)}
                      className="rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2 text-xs text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Accessibility requirements (e.g. ground-floor room)"
                      value={form.accessibilityRequirements}
                      onChange={(e) => updateField('accessibilityRequirements', e.target.value)}
                      className="rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2 text-xs text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {service === 'complete-tour' && step === 6 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    Traveller Contact &amp; Request Review
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    Provide your contact details so our team can send your handcrafted itinerary proposal.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={form.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.fullName ? 'border-rose-500 focus:border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +1 555 123 4567"
                      value={form.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.phone ? 'border-rose-500 focus:border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. john@example.com"
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Country / Nationality
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. United Kingdom, Australia"
                      value={form.country}
                      onChange={(e) => updateField('country', e.target.value)}
                      className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Passenger Counters */}
                <div className="p-4 rounded-2xl bg-ivory-50 border border-forest-800/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-forest-950">Adults *</p>
                      <p className="text-[11px] text-forest-950/50">Age 12+</p>
                    </div>
                    <NumberInput
                      min={1}
                      value={form.adults}
                      onChange={(val) => updateField('adults', val)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-forest-950">Children</p>
                      <p className="text-[11px] text-forest-950/50">Age 2–11</p>
                    </div>
                    <NumberInput
                      min={0}
                      value={form.children}
                      onChange={(val) => updateField('children', val)}
                    />
                  </div>

                  {form.children > 0 && (
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-bold text-forest-950 mb-1">Children Ages</label>
                      <input
                        type="text"
                        placeholder="e.g. 5, 9 years old"
                        value={form.childrenAges}
                        onChange={(e) => updateField('childrenAges', e.target.value)}
                        className="w-full rounded-xl border border-forest-800/15 bg-white px-3 py-2 text-xs text-forest-950"
                      />
                    </div>
                  )}
                </div>

                {/* Anything else */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1.5">
                    Anything else we should know?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Special requests, favorite travel paces, anniversary celebration..."
                    value={form.anythingElse}
                    onChange={(e) => updateField('anythingElse', e.target.value)}
                    className="w-full rounded-2xl border border-forest-800/15 bg-ivory-50 p-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* ================================================================
                SERVICE 2: PRIVATE VEHICLE + DRIVER ONLY - STEPS 2 to 4
               ================================================================ */}
            {service === 'vehicle-driver' && step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    Dates &amp; Planned Travel Route
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    No hotel questions needed! Tell us when and where you need private transportation in Sri Lanka.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Start Date *
                    </label>
                    <input
                      type="date"
                      value={form.startDate}
                      onChange={(e) => updateField('startDate', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.startDate ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.startDate && <p className="text-[11px] text-rose-600 mt-1">{errors.startDate}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      End Date *
                    </label>
                    <input
                      type="date"
                      value={form.endDate}
                      onChange={(e) => updateField('endDate', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.endDate ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.endDate && <p className="text-[11px] text-rose-600 mt-1">{errors.endDate}</p>}
                  </div>
                </div>

                {driverHireDuration && (
                  <div className="rounded-xl bg-forest-900/5 p-3.5 border border-forest-800/10 flex items-center gap-2 text-xs font-bold text-forest-900">
                    <Sparkles size={16} className="text-gold-600" />
                    <span>Duration of Chauffeur Hire: {driverHireDuration}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-forest-800/10">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Pickup Location / City *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Colombo BIA Airport, Negombo hotel"
                      value={form.driverPickupLocation}
                      onChange={(e) => updateField('driverPickupLocation', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.driverPickupLocation ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.driverPickupLocation && <p className="text-[11px] text-rose-600 mt-1">{errors.driverPickupLocation}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Final Drop-off Location / City *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Colombo Airport, Galle hotel"
                      value={form.driverDropoffLocation}
                      onChange={(e) => updateField('driverDropoffLocation', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.driverDropoffLocation ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.driverDropoffLocation && <p className="text-[11px] text-rose-600 mt-1">{errors.driverDropoffLocation}</p>}
                  </div>
                </div>

                {/* Destinations chips */}
                <div className="pt-2 border-t border-forest-800/10">
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-2">
                    Key Places You Plan to Visit
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {customizerDestinations.slice(0, 10).map((d) => {
                      const isSel = form.destinations.includes(d);
                      return (
                        <button
                          key={d}
                          type="button"
                          onClick={() => toggleArrayItem('destinations', d)}
                          className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                            isSel
                              ? 'border-gold-500 bg-forest-950 text-gold-300'
                              : 'border-forest-800/15 bg-ivory-50 text-forest-950/80 hover:bg-ivory-200'
                          }`}
                        >
                          {d} {isSel && '✓'}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Travel Plan textarea */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1.5">
                    Tell us briefly where you would like to travel during your stay
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. We have booked hotels in Kandy, Ella, and Yala. Want a dedicated driver for daily sightseeing and stops..."
                    value={form.driverTravelPlan}
                    onChange={(e) => updateField('driverTravelPlan', e.target.value)}
                    className="w-full rounded-2xl border border-forest-800/15 bg-ivory-50 p-3.5 text-xs sm:text-sm text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {service === 'vehicle-driver' && step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    Passengers, Vehicle &amp; Driver Preferences
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    All rentals include dedicated vehicle, private chauffeur, fuel, expressway tolls, and driver lodging.
                  </p>
                </div>

                {/* Passenger Counters */}
                <div className="p-4 rounded-2xl bg-ivory-50 border border-forest-800/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-forest-950">Adults *</p>
                      <p className="text-[11px] text-forest-950/50">Age 12+</p>
                    </div>
                    <NumberInput
                      min={1}
                      value={form.adults}
                      onChange={(val) => updateField('adults', val)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-forest-950">Children</p>
                      <p className="text-[11px] text-forest-950/50">Age 0–11</p>
                    </div>
                    <NumberInput
                      min={0}
                      value={form.children}
                      onChange={(val) => updateField('children', val)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-forest-950">Luggage Bags</p>
                      <p className="text-[11px] text-forest-950/50">Suitcases</p>
                    </div>
                    <NumberInput
                      min={0}
                      value={form.luggageCount}
                      onChange={(val) => updateField('luggageCount', val)}
                    />
                  </div>
                </div>

                {/* Vehicle Selection */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950">
                    Vehicle Preference
                  </label>
                  {vehicleTypes.map((veh) => {
                    const isSel = form.vehicle === veh.label;
                    return (
                      <button
                        key={veh.id}
                        type="button"
                        onClick={() => updateField('vehicle', veh.label)}
                        className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSel
                            ? 'border-gold-500 bg-forest-950 text-white shadow-sm'
                            : 'border-forest-800/15 bg-ivory-50 text-forest-950 hover:bg-ivory-200'
                        }`}
                      >
                        <div>
                          <span className={`text-sm font-bold ${isSel ? 'text-gold-300' : 'text-forest-950'}`}>
                            {veh.label}
                          </span>
                          <span className={`ml-2 text-xs ${isSel ? 'text-ivory-200/70' : 'text-forest-950/60'}`}>
                            ({veh.capacity})
                          </span>
                        </div>
                        {isSel && <Check size={16} className="text-gold-400 stroke-[2.5]" />}
                      </button>
                    );
                  })}
                </div>

                {/* Driver Requirements */}
                <div className="pt-2 border-t border-forest-800/10 space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950">
                    Driver Language Requirements
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => updateField('driverLanguage', 'English-speaking driver')}
                      className={`p-3 rounded-xl border text-xs font-bold text-left ${
                        form.driverLanguage === 'English-speaking driver'
                          ? 'border-gold-500 bg-forest-950 text-gold-300'
                          : 'border-forest-800/15 bg-ivory-50 text-forest-950'
                      }`}
                    >
                      ✓ English-speaking Chauffeur (Standard)
                    </button>
                    <input
                      type="text"
                      placeholder="Other language? (e.g. German, French, Arabic)"
                      value={form.otherLanguage}
                      onChange={(e) => updateField('otherLanguage', e.target.value)}
                      className="rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2 text-xs text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Child seat & requests */}
                <div className="pt-2 border-t border-forest-800/10 space-y-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="childSeat"
                      checked={form.childSeatRequired}
                      onChange={(e) => updateField('childSeatRequired', e.target.checked)}
                      className="h-4 w-4 rounded border-forest-800/30 text-gold-500 focus:ring-gold-400"
                    />
                    <label htmlFor="childSeat" className="text-xs font-semibold text-forest-950 cursor-pointer">
                      Child seat required (available on request)
                    </label>
                  </div>
                </div>
              </div>
            )}

            {service === 'vehicle-driver' && step === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    Contact Details &amp; Request Review
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    We will calculate your mileage and confirm transparent chauffeur hire pricing.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Smith"
                      value={form.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.fullName ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +44 7700 900077"
                      value={form.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.phone ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. sarah@example.com"
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.email ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1.5">
                    Special Requests / Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Any specific scenic stops, flight arrival details, or pickup instructions..."
                    value={form.specialRequests}
                    onChange={(e) => updateField('specialRequests', e.target.value)}
                    className="w-full rounded-2xl border border-forest-800/15 bg-ivory-50 p-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* ================================================================
                SERVICE 3: AIRPORT TRANSFER ONLY - STEPS 2 to 3 (SHORT & SIMPLE)
               ================================================================ */}
            {service === 'airport-transfer' && step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    Airport Transfer Details
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    24/7 flight monitoring, meet &amp; greet arrival service, and direct air-conditioned highway transfer.
                  </p>
                </div>

                {/* Transfer Direction Toggle */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-2">
                    Transfer Direction *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => updateField('transferDirection', 'airport-to-hotel')}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        form.transferDirection === 'airport-to-hotel'
                          ? 'border-gold-500 bg-forest-950 text-white shadow-sm'
                          : 'border-forest-800/15 bg-ivory-50 text-forest-950 hover:bg-ivory-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Plane size={16} className="text-gold-400" />
                        <span className="font-bold text-sm">Airport ➔ Hotel / Accommodation</span>
                      </div>
                      <p className={`text-xs ${form.transferDirection === 'airport-to-hotel' ? 'text-ivory-200/70' : 'text-forest-950/60'}`}>
                        Meet &amp; greet pickup at arrival hall with name paging board.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => updateField('transferDirection', 'hotel-to-airport')}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        form.transferDirection === 'hotel-to-airport'
                          ? 'border-gold-500 bg-forest-950 text-white shadow-sm'
                          : 'border-forest-800/15 bg-ivory-50 text-forest-950 hover:bg-ivory-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Navigation size={16} className="text-gold-400" />
                        <span className="font-bold text-sm">Hotel / Accommodation ➔ Airport</span>
                      </div>
                      <p className={`text-xs ${form.transferDirection === 'hotel-to-airport' ? 'text-ivory-200/70' : 'text-forest-950/60'}`}>
                        Punctual pickup from hotel lobby with ample time before your flight.
                      </p>
                    </button>
                  </div>
                </div>

                {/* Conditional fields for Airport -> Hotel */}
                {form.transferDirection === 'airport-to-hotel' ? (
                  <div className="space-y-4 pt-2 border-t border-forest-800/10">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="sm:col-span-3">
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-950 mb-1">
                          Arrival Airport *
                        </label>
                        <select
                          value={form.arrivalAirport}
                          onChange={(e) => updateField('arrivalAirport', e.target.value)}
                          className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                        >
                          {airportsList.map((a) => (
                            <option key={a} value={a}>{a}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-950 mb-1">
                          Arrival Date *
                        </label>
                        <input
                          type="date"
                          value={form.arrivalDate}
                          onChange={(e) => updateField('arrivalDate', e.target.value)}
                          className={`w-full rounded-xl border bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:bg-white focus:outline-none ${
                            errors.arrivalDate ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                          }`}
                        />
                        {errors.arrivalDate && <p className="text-[11px] text-rose-600 mt-1">{errors.arrivalDate}</p>}
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-950 mb-1">
                          Flight Number *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. UL 504, EK 652"
                          value={form.arrivalFlightNumber}
                          onChange={(e) => updateField('arrivalFlightNumber', e.target.value)}
                          className={`w-full rounded-xl border bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:bg-white focus:outline-none ${
                            errors.arrivalFlightNumber ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                          }`}
                        />
                        {errors.arrivalFlightNumber && <p className="text-[11px] text-rose-600 mt-1">{errors.arrivalFlightNumber}</p>}
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-950 mb-1">
                          Estimated Arrival Time *
                        </label>
                        <input
                          type="time"
                          value={form.arrivalTime}
                          onChange={(e) => updateField('arrivalTime', e.target.value)}
                          className={`w-full rounded-xl border bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:bg-white focus:outline-none ${
                            errors.arrivalTime ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                          }`}
                        />
                        {errors.arrivalTime && <p className="text-[11px] text-rose-600 mt-1">{errors.arrivalTime}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-950 mb-1">
                        Destination Hotel / Accommodation Address *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Cinnamon Grand Colombo, or hotel name & city"
                        value={form.airportTransferHotel}
                        onChange={(e) => updateField('airportTransferHotel', e.target.value)}
                        className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                          errors.airportTransferHotel ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                        }`}
                      />
                      {errors.airportTransferHotel && <p className="text-[11px] text-rose-600 mt-1">{errors.airportTransferHotel}</p>}
                    </div>
                  </div>
                ) : (
                  /* Conditional fields for Hotel -> Airport */
                  <div className="space-y-4 pt-2 border-t border-forest-800/10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-950 mb-1">
                          Pickup Hotel / Address *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Heritance Tea Factory, Nuwara Eliya"
                          value={form.pickupHotel}
                          onChange={(e) => updateField('pickupHotel', e.target.value)}
                          className={`w-full rounded-xl border bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:bg-white focus:outline-none ${
                            errors.pickupHotel ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                          }`}
                        />
                        {errors.pickupHotel && <p className="text-[11px] text-rose-600 mt-1">{errors.pickupHotel}</p>}
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-950 mb-1">
                          Departure Airport *
                        </label>
                        <select
                          value={form.departureAirport}
                          onChange={(e) => updateField('departureAirport', e.target.value)}
                          className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                        >
                          {airportsList.map((a) => (
                            <option key={a} value={a}>{a}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-950 mb-1">
                          Pickup Date *
                        </label>
                        <input
                          type="date"
                          value={form.transferDate}
                          onChange={(e) => updateField('transferDate', e.target.value)}
                          className={`w-full rounded-xl border bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:bg-white focus:outline-none ${
                            errors.transferDate ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                          }`}
                        />
                        {errors.transferDate && <p className="text-[11px] text-rose-600 mt-1">{errors.transferDate}</p>}
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-950 mb-1">
                          Preferred Pickup Time *
                        </label>
                        <input
                          type="time"
                          value={form.pickupTime}
                          onChange={(e) => updateField('pickupTime', e.target.value)}
                          className={`w-full rounded-xl border bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:bg-white focus:outline-none ${
                            errors.pickupTime ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                          }`}
                        />
                        {errors.pickupTime && <p className="text-[11px] text-rose-600 mt-1">{errors.pickupTime}</p>}
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-950 mb-1">
                          Flight Number (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. QR 665"
                          value={form.departureFlightNumber}
                          onChange={(e) => updateField('departureFlightNumber', e.target.value)}
                          className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-950 mb-1">
                          Flight Departure Time (Optional)
                        </label>
                        <input
                          type="time"
                          value={form.departureTime}
                          onChange={(e) => updateField('departureTime', e.target.value)}
                          className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Passengers & Bags */}
                <div className="p-4 sm:p-5 rounded-2xl bg-ivory-50 border border-forest-800/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center justify-between sm:flex-col sm:items-start gap-2">
                    <div>
                      <p className="text-xs font-bold text-forest-950">Passengers *</p>
                      <p className="text-[11px] text-forest-950/50">Total guests</p>
                    </div>
                    <NumberInput
                      min={1}
                      value={form.adults}
                      onChange={(val) => updateField('adults', val)}
                    />
                  </div>

                  <div className="flex items-center justify-between sm:flex-col sm:items-start gap-2">
                    <div>
                      <p className="text-xs font-bold text-forest-950">Large Bags</p>
                      <p className="text-[11px] text-forest-950/50">Check-in luggage</p>
                    </div>
                    <NumberInput
                      min={0}
                      value={form.largeBags}
                      onChange={(val) => updateField('largeBags', val)}
                    />
                  </div>

                  <div className="flex items-center justify-between sm:flex-col sm:items-start gap-2">
                    <div>
                      <p className="text-xs font-bold text-forest-950">Small Bags</p>
                      <p className="text-[11px] text-forest-950/50">Hand luggage</p>
                    </div>
                    <NumberInput
                      min={0}
                      value={form.smallBags}
                      onChange={(val) => updateField('smallBags', val)}
                    />
                  </div>
                </div>

                {/* Vehicle & Child seat */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-forest-800/10">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Vehicle Preference
                    </label>
                    <select
                      value={form.vehicle}
                      onChange={(e) => updateField('vehicle', e.target.value)}
                      className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                    >
                      {vehicleTypes.map((v) => (
                        <option key={v.id} value={v.label}>{v.label} ({v.capacity})</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-3 pt-6">
                    <input
                      type="checkbox"
                      id="airportChildSeat"
                      checked={form.childSeatRequired}
                      onChange={(e) => updateField('childSeatRequired', e.target.checked)}
                      className="h-4 w-4 rounded border-forest-800/30 text-gold-500 focus:ring-gold-400"
                    />
                    <label htmlFor="airportChildSeat" className="text-xs font-semibold text-forest-950 cursor-pointer">
                      Child seat required
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-950 mb-1">
                    Special Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Travelling with surfboard, flight delay notes..."
                    value={form.specialRequests}
                    onChange={(e) => updateField('specialRequests', e.target.value)}
                    className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 p-2.5 text-xs text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {service === 'airport-transfer' && step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    Contact Details &amp; Quick Quote
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    Enter your name and WhatsApp number so we can confirm driver dispatch.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Michael Brown"
                      value={form.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.fullName ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +61 400 123 456"
                      value={form.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.phone ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. michael@example.com"
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.email ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* ================================================================
                SERVICE 4: HOTEL-TO-HOTEL TRANSFER - STEPS 2 to 4
               ================================================================ */}
            {service === 'hotel-transfer' && step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    Transfer Route, Date &amp; Stops
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    Comfortable intercity private door-to-door connections with optional sightseeing stops en route.
                  </p>
                </div>

                {/* Pickup Hotel & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Pickup Hotel / Accommodation *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Heritance Kandalama"
                      value={form.pickupHotel}
                      onChange={(e) => updateField('pickupHotel', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.pickupHotel ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.pickupHotel && <p className="text-[11px] text-rose-600 mt-1">{errors.pickupHotel}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Pickup Location / City *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Dambulla, Sigiriya, Colombo"
                      value={form.pickupCity}
                      onChange={(e) => updateField('pickupCity', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.pickupCity ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.pickupCity && <p className="text-[11px] text-rose-600 mt-1">{errors.pickupCity}</p>}
                  </div>
                </div>

                {/* Drop-off Hotel & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Drop-off Hotel / Accommodation *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Grand Hotel"
                      value={form.dropoffHotel}
                      onChange={(e) => updateField('dropoffHotel', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.dropoffHotel ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.dropoffHotel && <p className="text-[11px] text-rose-600 mt-1">{errors.dropoffHotel}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Drop-off Location / City *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nuwara Eliya, Ella, Kandy"
                      value={form.dropoffCity}
                      onChange={(e) => updateField('dropoffCity', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.dropoffCity ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.dropoffCity && <p className="text-[11px] text-rose-600 mt-1">{errors.dropoffCity}</p>}
                  </div>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Transfer Date *
                    </label>
                    <input
                      type="date"
                      value={form.transferDate}
                      onChange={(e) => updateField('transferDate', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.transferDate ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.transferDate && <p className="text-[11px] text-rose-600 mt-1">{errors.transferDate}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Preferred Pickup Time *
                    </label>
                    <input
                      type="time"
                      value={form.pickupTime}
                      onChange={(e) => updateField('pickupTime', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.pickupTime ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.pickupTime && <p className="text-[11px] text-rose-600 mt-1">{errors.pickupTime}</p>}
                  </div>
                </div>

                {/* Multiple Stops Toggle */}
                <div className="pt-2 border-t border-forest-800/10 space-y-3">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-ivory-50 border border-forest-800/10">
                    <div>
                      <p className="text-xs font-bold text-forest-950">Multiple Stops En Route?</p>
                      <p className="text-[11px] text-forest-950/60">e.g. Spice Garden, Ramboda Falls, Temple visit</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => updateField('hasMultipleStops', false)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold ${
                          !form.hasMultipleStops ? 'bg-forest-950 text-white' : 'bg-ivory-200 text-forest-950'
                        }`}
                      >
                        Direct
                      </button>
                      <button
                        type="button"
                        onClick={() => updateField('hasMultipleStops', true)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold ${
                          form.hasMultipleStops ? 'bg-gold-500 text-forest-950' : 'bg-ivory-200 text-forest-950'
                        }`}
                      >
                        With Stops
                      </button>
                    </div>
                  </div>

                  {form.hasMultipleStops && (
                    <div className="space-y-2.5 p-4 rounded-2xl bg-ivory-50 border border-gold-500/30">
                      <p className="text-xs font-bold text-forest-950">Intermediate Sightseeing Stops</p>
                      {form.intermediateStops.map((stop, idx) => (
                        <div key={idx} className="flex gap-2">
                          <input
                            type="text"
                            placeholder={`Stop ${idx + 1} (e.g. Matale Spice Garden, Tea Factory)`}
                            value={stop}
                            onChange={(e) => updateStop(idx, e.target.value)}
                            className="flex-1 rounded-xl border border-forest-800/15 bg-white px-3 py-2 text-xs text-forest-950 focus:border-gold-500 focus:outline-none"
                          />
                          {form.intermediateStops.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeStop(idx)}
                              className="px-2.5 rounded-xl bg-rose-100 text-rose-700 hover:bg-rose-200"
                            >
                              <Trash2 size={14} />
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={addStop}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-forest-900 hover:text-gold-600 pt-1"
                      >
                        <Plus size={14} /> <span>Add Another Stop</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {service === 'hotel-transfer' && step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    Passengers &amp; Vehicle
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    Ensure generous space for guests and large suitcases.
                  </p>
                </div>

                {/* Passenger Counters */}
                <div className="p-4 rounded-2xl bg-ivory-50 border border-forest-800/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-forest-950">Adults *</p>
                      <p className="text-[11px] text-forest-950/50">Age 12+</p>
                    </div>
                    <NumberInput
                      min={1}
                      value={form.adults}
                      onChange={(val) => updateField('adults', val)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-forest-950">Children</p>
                      <p className="text-[11px] text-forest-950/50">Age 0–11</p>
                    </div>
                    <NumberInput
                      min={0}
                      value={form.children}
                      onChange={(val) => updateField('children', val)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-forest-950">Luggage Bags</p>
                      <p className="text-[11px] text-forest-950/50">Total suitcases</p>
                    </div>
                    <NumberInput
                      min={0}
                      value={form.luggageCount}
                      onChange={(val) => updateField('luggageCount', val)}
                    />
                  </div>
                </div>

                {/* Vehicle Selection */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950">
                    Vehicle Preference
                  </label>
                  {vehicleTypes.map((veh) => {
                    const isSel = form.vehicle === veh.label;
                    return (
                      <button
                        key={veh.id}
                        type="button"
                        onClick={() => updateField('vehicle', veh.label)}
                        className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSel
                            ? 'border-gold-500 bg-forest-950 text-white shadow-sm'
                            : 'border-forest-800/15 bg-ivory-50 text-forest-950 hover:bg-ivory-200'
                        }`}
                      >
                        <div>
                          <span className={`text-sm font-bold ${isSel ? 'text-gold-300' : 'text-forest-950'}`}>
                            {veh.label}
                          </span>
                          <span className={`ml-2 text-xs ${isSel ? 'text-ivory-200/70' : 'text-forest-950/60'}`}>
                            ({veh.capacity})
                          </span>
                        </div>
                        {isSel && <Check size={16} className="text-gold-400 stroke-[2.5]" />}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-forest-800/10">
                  <input
                    type="checkbox"
                    id="hotelChildSeat"
                    checked={form.childSeatRequired}
                    onChange={(e) => updateField('childSeatRequired', e.target.checked)}
                    className="h-4 w-4 rounded border-forest-800/30 text-gold-500 focus:ring-gold-400"
                  />
                  <label htmlFor="hotelChildSeat" className="text-xs font-semibold text-forest-950 cursor-pointer">
                    Child seat required
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                    Special Requests
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Specific route requests, extra photo stops, or timing requirements..."
                    value={form.specialRequests}
                    onChange={(e) => updateField('specialRequests', e.target.value)}
                    className="w-full rounded-2xl border border-forest-800/15 bg-ivory-50 p-3 text-xs text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {service === 'hotel-transfer' && step === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    Contact Details &amp; Request Review
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    We will calculate drive time and confirm your fixed upfront price.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Elena Rostova"
                      value={form.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.fullName ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +49 151 23456789"
                      value={form.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.phone ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. elena@example.com"
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.email ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* ================================================================
                SERVICE 5: CUSTOM TAILOR-MADE HOLIDAY - STEPS 2 to 4
               ================================================================ */}
            {service === 'custom-holiday' && step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    Dates &amp; Services You Need
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    Select exactly what you’d like us to arrange for you in Sri Lanka.
                  </p>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Estimated Arrival Date
                    </label>
                    <input
                      type="date"
                      value={form.arrivalDate}
                      onChange={(e) => updateField('arrivalDate', e.target.value)}
                      className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Estimated Departure Date
                    </label>
                    <input
                      type="date"
                      value={form.departureDate}
                      onChange={(e) => updateField('departureDate', e.target.value)}
                      className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                    />
                    {errors.departureDate && <p className="text-[11px] text-rose-600 mt-1">{errors.departureDate}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Approx. Number of Days
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 10–14 Days"
                      value={form.approxDays}
                      onChange={(e) => updateField('approxDays', e.target.value)}
                      className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-ivory-50 border border-forest-800/10">
                  <input
                    type="checkbox"
                    id="customFlexDates"
                    checked={form.isFlexibleDates}
                    onChange={(e) => updateField('isFlexibleDates', e.target.checked)}
                    className="h-4 w-4 rounded border-forest-800/30 text-gold-500 focus:ring-gold-400"
                  />
                  <label htmlFor="customFlexDates" className="text-xs font-semibold text-forest-950 cursor-pointer">
                    My holiday dates are flexible
                  </label>
                </div>

                {/* What Services Do You Need? (Multi-select) */}
                <div className="pt-3 border-t border-forest-800/10 space-y-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      What Services Do You Need? *
                    </label>
                    <p className="text-[11px] text-forest-950/60">
                      Check all that apply. The form adapts below based on what you select.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {customServicesOptions.map((serv) => {
                      const isSel = form.customServices.includes(serv);
                      return (
                        <button
                          key={serv}
                          type="button"
                          onClick={() => toggleArrayItem('customServices', serv)}
                          className={`p-3 rounded-2xl border text-xs font-semibold text-left transition-all cursor-pointer flex items-center justify-between ${
                            isSel
                              ? 'border-gold-500 bg-forest-950 text-gold-300 shadow-sm'
                              : 'border-forest-800/15 bg-ivory-50 text-forest-950 hover:bg-ivory-200'
                          }`}
                        >
                          <span>{serv}</span>
                          {isSel && <Check size={14} className="text-gold-400 shrink-0 stroke-[2.5]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* DYNAMIC REACTIVE SECTIONS BASED ON SELECTED SERVICES */}

                {/* React: If Hotel Booking selected */}
                {form.customServices.includes('Hotel Booking') && (
                  <div className="p-4 rounded-2xl bg-ivory-50 border border-gold-500/30 space-y-3 animate-fadeIn">
                    <div className="flex items-center gap-2 text-forest-950 font-bold text-xs">
                      <Bed size={15} className="text-gold-600" />
                      <span>Hotel Booking Preferences</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-forest-950/80 mb-1">Hotel Category</label>
                        <select
                          value={form.hotelCategory}
                          onChange={(e) => updateField('hotelCategory', e.target.value)}
                          className="w-full rounded-xl border border-forest-800/15 bg-white px-3 py-2 text-xs text-forest-950"
                        >
                          {hotelCategories.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-forest-950/80 mb-1">Rooms Required</label>
                        <input
                          type="number"
                          min={1}
                          value={form.roomCount}
                          onChange={(e) => updateField('roomCount', parseInt(e.target.value) || 1)}
                          className="w-full rounded-xl border border-forest-800/15 bg-white px-3 py-2 text-xs text-forest-950"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* React: If Private Vehicle + Driver selected */}
                {form.customServices.includes('Private Vehicle + Driver') && (
                  <div className="p-4 rounded-2xl bg-ivory-50 border border-gold-500/30 space-y-3 animate-fadeIn">
                    <div className="flex items-center gap-2 text-forest-950 font-bold text-xs">
                      <Car size={15} className="text-gold-600" />
                      <span>Vehicle Preference</span>
                    </div>
                    <select
                      value={form.vehicle}
                      onChange={(e) => updateField('vehicle', e.target.value)}
                      className="w-full rounded-xl border border-forest-800/15 bg-white px-3 py-2 text-xs text-forest-950"
                    >
                      {vehicleTypes.map((v) => (
                        <option key={v.id} value={v.label}>{v.label} ({v.capacity})</option>
                      ))}
                    </select>
                  </div>
                )}

                {/* React: If Airport Transfers selected */}
                {form.customServices.includes('Airport Transfers') && (
                  <div className="p-4 rounded-2xl bg-ivory-50 border border-gold-500/30 space-y-3 animate-fadeIn">
                    <div className="flex items-center gap-2 text-forest-950 font-bold text-xs">
                      <Plane size={15} className="text-gold-600" />
                      <span>Airport Transfer &amp; Flight Information</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-forest-950/80 mb-1">Airport</label>
                        <select
                          value={form.arrivalAirport}
                          onChange={(e) => updateField('arrivalAirport', e.target.value)}
                          className="w-full rounded-xl border border-forest-800/15 bg-white px-3 py-2 text-xs text-forest-950"
                        >
                          {airportsList.map((a) => (
                            <option key={a} value={a}>{a}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-forest-950/80 mb-1">Flight Number (If booked)</label>
                        <input
                          type="text"
                          placeholder="e.g. UL 504"
                          value={form.arrivalFlightNumber}
                          onChange={(e) => updateField('arrivalFlightNumber', e.target.value)}
                          className="w-full rounded-xl border border-forest-800/15 bg-white px-3 py-2 text-xs text-forest-950"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {service === 'custom-holiday' && step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    Destinations, Interests &amp; Budget
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    Help us understand what an extraordinary Sri Lanka vacation looks like to you.
                  </p>
                </div>

                {/* Destinations wishlist */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-2">
                    What places in Sri Lanka would you like to visit?
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {customizerDestinations.map((d) => {
                      const isSel = form.destinations.includes(d);
                      return (
                        <button
                          key={d}
                          type="button"
                          onClick={() => toggleArrayItem('destinations', d)}
                          className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                            isSel
                              ? 'border-gold-500 bg-forest-950 text-gold-300 shadow-sm'
                              : 'border-forest-800/15 bg-ivory-50 text-forest-950 hover:bg-ivory-200'
                          }`}
                        >
                          {d} {isSel && '✓'}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex gap-2 max-w-sm">
                    <input
                      type="text"
                      placeholder="Add custom place (e.g. Wilpattu, Jaffna)..."
                      value={form.customDestinationInput}
                      onChange={(e) => updateField('customDestinationInput', e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addCustomDestination();
                        }
                      }}
                      className="flex-1 rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2 text-xs text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={addCustomDestination}
                      className="rounded-xl bg-forest-950 px-3 py-2 text-xs font-bold text-white hover:bg-gold-500 hover:text-forest-950"
                    >
                      Add
                    </button>
                  </div>
                </div>

                {/* Holiday Interests */}
                <div className="pt-2 border-t border-forest-800/10">
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-2">
                    Holiday Interests &amp; Experiences
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {holidayInterestsList.map((interest) => {
                      const isSel = form.interests.includes(interest);
                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => toggleArrayItem('interests', interest)}
                          className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                            isSel
                              ? 'border-gold-500 bg-forest-950 text-gold-300 shadow-sm'
                              : 'border-forest-800/15 bg-ivory-50 text-forest-950 hover:bg-ivory-200'
                          }`}
                        >
                          {interest} {isSel && '✓'}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget */}
                <div className="pt-2 border-t border-forest-800/10 space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950">
                    Approximate Budget for Entire Holiday
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <input
                        type="text"
                        placeholder="Estimated budget amount..."
                        value={form.budgetAmount}
                        onChange={(e) => updateField('budgetAmount', e.target.value)}
                        className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-4 py-2.5 text-xs text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <select
                        value={form.budgetCurrency}
                        onChange={(e) => updateField('budgetCurrency', e.target.value)}
                        className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-3 py-2.5 text-xs text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                      >
                        {currencies.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {budgetTiers.map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => updateField('budgetTier', tier)}
                        className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                          form.budgetTier === tier
                            ? 'bg-gold-500 text-forest-950 font-bold'
                            : 'bg-ivory-200 text-forest-950/70 hover:bg-ivory-300'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dream holiday textarea */}
                <div className="pt-2 border-t border-forest-800/10">
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1.5">
                    Tell Us About Your Dream Holiday
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what kind of Sri Lankan holiday you are looking for. Our travel team will create a personalized itinerary for you."
                    value={form.specialRequests}
                    onChange={(e) => updateField('specialRequests', e.target.value)}
                    className="w-full rounded-2xl border border-forest-800/15 bg-ivory-50 p-4 text-xs sm:text-sm text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {service === 'custom-holiday' && step === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                    Traveller Details &amp; Request Review
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-950/60">
                    Provide your contact info to receive your custom holiday proposal and quotation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. David Wilson"
                      value={form.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.fullName ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +1 415 555 2671"
                      value={form.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.phone ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. david@example.com"
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className={`w-full rounded-xl border bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:outline-none ${
                        errors.email ? 'border-rose-500' : 'border-forest-800/15 focus:border-gold-500'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1">
                      Country / Nationality
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Canada, Germany"
                      value={form.country}
                      onChange={(e) => updateField('country', e.target.value)}
                      className="w-full rounded-xl border border-forest-800/15 bg-ivory-50 px-4 py-3 text-xs sm:text-sm text-forest-950 focus:bg-white focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Passenger Counters */}
                <div className="p-4 rounded-2xl bg-ivory-50 border border-forest-800/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-forest-950">Adults *</p>
                      <p className="text-[11px] text-forest-950/50">Age 12+</p>
                    </div>
                    <NumberInput
                      min={1}
                      value={form.adults}
                      onChange={(val) => updateField('adults', val)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-forest-950">Children</p>
                      <p className="text-[11px] text-forest-950/50">Age 0–11</p>
                    </div>
                    <NumberInput
                      min={0}
                      value={form.children}
                      onChange={(val) => updateField('children', val)}
                    />
                  </div>

                  {form.children > 0 && (
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-bold text-forest-950 mb-1">Children Ages</label>
                      <input
                        type="text"
                        placeholder="e.g. 6, 9 years old"
                        value={form.childrenAges}
                        onChange={(e) => updateField('childrenAges', e.target.value)}
                        className="w-full rounded-xl border border-forest-800/15 bg-white px-3 py-2 text-xs text-forest-950"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ================================================================
                DYNAMIC "YOUR REQUEST" SUMMARY CARD (ON FINAL STEP OF ANY SERVICE)
               ================================================================ */}
            {step === currentSteps.length && (
              <div className="mt-8 pt-6 border-t border-forest-800/10 space-y-4">
                <div className="rounded-2xl bg-gradient-to-br from-ivory-50 to-ivory-100 p-5 sm:p-6 border border-forest-800/15 shadow-sm space-y-3">
                  <div className="flex items-center justify-between pb-2.5 border-b border-forest-800/10">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gold-500/20 text-gold-700">
                        <Sparkles size={15} />
                      </div>
                      <div>
                        <h4 className="font-serif text-base font-bold text-forest-950">Your Request Summary</h4>
                        <p className="text-[11px] text-forest-950/60">Review your selected service and details</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-gold-700 bg-gold-500/15 px-3 py-1 rounded-full border border-gold-500/30">
                      {currentServiceObj.title}
                    </span>
                  </div>

                  {/* Summary Rows Dynamic by Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                    {service === 'complete-tour' && (
                      <>
                        <div className="flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Travel Window:</span>
                          <span className="font-bold">{form.arrivalDate || 'Flexible'} &rarr; {form.departureDate || 'Flexible'}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Party Size:</span>
                          <span className="font-bold">{form.adults} Adults{form.children > 0 ? `, ${form.children} Children` : ''}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Hotels / Rooms:</span>
                          <span className="font-bold">{form.hotelCategory.split('/')[0]} ({form.roomCount} Rm)</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Vehicle:</span>
                          <span className="font-bold">{form.vehicle.split('(')[0]}</span>
                        </div>
                        <div className="sm:col-span-2 flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Destinations:</span>
                          <span className="font-bold text-right truncate max-w-sm">{form.destinations.join(', ') || 'Custom'}</span>
                        </div>
                      </>
                    )}

                    {service === 'vehicle-driver' && (
                      <>
                        <div className="flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Dates:</span>
                          <span className="font-bold">{form.startDate || 'TBD'} &rarr; {form.endDate || 'TBD'}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Passengers:</span>
                          <span className="font-bold">{form.adults} Adults ({form.luggageCount} Bags)</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Pickup:</span>
                          <span className="font-bold truncate max-w-[180px]">{form.driverPickupLocation || 'TBD'}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Drop-off:</span>
                          <span className="font-bold truncate max-w-[180px]">{form.driverDropoffLocation || 'TBD'}</span>
                        </div>
                        <div className="sm:col-span-2 flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Vehicle:</span>
                          <span className="font-bold">{form.vehicle} ({form.driverLanguage})</span>
                        </div>
                      </>
                    )}

                    {service === 'airport-transfer' && (
                      <>
                        <div className="flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Transfer Direction:</span>
                          <span className="font-bold">
                            {form.transferDirection === 'airport-to-hotel' ? 'Airport ➔ Hotel' : 'Hotel ➔ Airport'}
                          </span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Passengers:</span>
                          <span className="font-bold">{form.adults + form.children} Guests ({form.largeBags} L / {form.smallBags} S)</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Date &amp; Time:</span>
                          <span className="font-bold">
                            {form.transferDirection === 'airport-to-hotel'
                              ? `${form.arrivalDate || 'TBD'} @ ${form.arrivalTime || 'TBD'}`
                              : `${form.transferDate || 'TBD'} @ ${form.pickupTime || 'TBD'}`}
                          </span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Hotel / Address:</span>
                          <span className="font-bold truncate max-w-[180px]">
                            {form.transferDirection === 'airport-to-hotel'
                              ? form.airportTransferHotel || 'TBD'
                              : form.pickupHotel || 'TBD'}
                          </span>
                        </div>
                      </>
                    )}

                    {service === 'hotel-transfer' && (
                      <>
                        <div className="flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Transfer Route:</span>
                          <span className="font-bold truncate max-w-[180px]">
                            {form.pickupCity || 'Pickup'} &rarr; {form.dropoffCity || 'Drop-off'}
                          </span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Date &amp; Time:</span>
                          <span className="font-bold">{form.transferDate || 'TBD'} @ {form.pickupTime || 'TBD'}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Passengers:</span>
                          <span className="font-bold">{form.adults} Adults ({form.luggageCount} Bags)</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Vehicle:</span>
                          <span className="font-bold">{form.vehicle.split('(')[0]}</span>
                        </div>
                      </>
                    )}

                    {service === 'custom-holiday' && (
                      <>
                        <div className="flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Dates:</span>
                          <span className="font-bold">{form.arrivalDate || 'Flexible'} &rarr; {form.departureDate || 'Flexible'}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Party Size:</span>
                          <span className="font-bold">{form.adults} Adults{form.children > 0 ? `, ${form.children} Children` : ''}</span>
                        </div>
                        <div className="sm:col-span-2 flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Services Requested:</span>
                          <span className="font-bold text-right truncate max-w-sm">{form.customServices.join(', ')}</span>
                        </div>
                        <div className="sm:col-span-2 flex justify-between py-1 border-b border-forest-800/5">
                          <span className="text-forest-950/60 font-semibold">Destinations:</span>
                          <span className="font-bold text-right truncate max-w-sm">{form.destinations.join(', ') || 'Custom'}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Final Submission Buttons */}
                <div className="space-y-3 pt-2">
                  <button
                    type="button"
                    onClick={handleFinalSubmit}
                    className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 py-4 text-sm font-bold uppercase tracking-wider text-forest-950 shadow-lg hover:from-gold-400 hover:to-gold-300 transition-all cursor-pointer active:scale-98"
                  >
                    <MessageCircle size={18} strokeWidth={2.4} />
                    <span>{currentServiceObj.actionText} on WhatsApp</span>
                  </button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={handleEmailInquiry}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-950/70 hover:text-gold-700 transition-colors cursor-pointer"
                    >
                      <Mail size={13} />
                      <span>Prefer email? Click here to submit inquiry via email</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ================================================================
                NAVIGATION CONTROLS (BACK & CONTINUE)
               ================================================================ */}
            <div className="mt-8 pt-6 border-t border-forest-800/10 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-1.5 rounded-full border border-forest-800/20 px-5 py-2.5 text-xs font-semibold text-forest-950 hover:bg-ivory-100 transition-colors cursor-pointer"
                >
                  <ArrowLeft size={14} />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {step < currentSteps.length && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 rounded-full bg-forest-950 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-gold-500 hover:text-forest-950 transition-all shadow-sm cursor-pointer"
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
