// Data for Sri Lanka Accommodations (3-Star, 4-Star, 5-Star)
// Lankova arranges handpicked 3-star, 4-star, and 5-star hotels across Sri Lanka
// tailored to each traveler's comfort preference, route, and budget.

export const hotelTiers = [
  {
    id: '3-star',
    stars: 3,
    badge: 'Smart Value Choice',
    name: '3-Star Hotel Arrangements',
    shortTitle: '3-Star Comfort',
    tagline: 'Spotless cleanliness, warm Sri Lankan hospitality & dependable comfort',
    budgetLabel: 'Budget-Friendly & Smart Value',
    boardOptions: 'Half Board (Dinner & Breakfast) or Bed & Breakfast',
    roomStandard: 'Clean Modern A/C En-Suite Rooms',
    description:
      'We arrange verified 3-star hotels and boutique guesthouses for travelers seeking genuine Sri Lankan warmth, pristine rooms, and reliable modern amenities at an affordable budget.',
    features: [
      'Private en-suite modern bathroom with 24/7 hot water shower',
      'Whisper-quiet individual air conditioning & climate control',
      'Daily breakfast & dinner available (Half Board arrangement)',
      'Complimentary high-speed Wi-Fi in guest rooms and lounges',
      'Safe, convenient locations near cultural landmarks & towns',
      'Attentive local hospitality & 24-hour front desk support',
      'Flexible room setups: Double, Twin, Triple, or Family rooms',
      'Dedicated chauffeur coordination & luggage handling included',
    ],
    idealFor:
      'Budget-conscious couples, solo travelers, friends, and families who want clean, safe, and comfortable stays every night without overspending.',
    sampleStyles: [
      'Verified 3-Star Town Hotels',
      'Charming Boutique Guesthouses',
      'Scenic Nature & Eco-Lodges',
    ],
    diningStyle: 'Freshly prepared Sri Lankan & Continental breakfast and dinner.',
    facilityHighlight: 'Comfortable en-suite A/C rooms, peaceful gardens & selected courtyard pools.',
  },
  {
    id: '4-star',
    stars: 4,
    popular: true,
    badge: 'Most Popular Choice',
    name: '4-Star Hotel Arrangements',
    shortTitle: '4-Star Superior',
    tagline: 'Spacious deluxe rooms, refreshing swimming pools & scenic views',
    budgetLabel: 'Superior Comfort & Resort Facilities',
    boardOptions: 'Half Board (Dinner & Breakfast) or Full Board',
    roomStandard: 'Spacious Deluxe Rooms with Balcony / Terrace',
    description:
      'Our most requested hotel arrangement tier. We book handpicked 4-star hotels and resorts offering the ideal balance between resort-style relaxation, scenic surroundings, and great value.',
    features: [
      'Full-size outdoor swimming pools with sun loungers & towel service',
      'Spacious deluxe rooms with private balcony or garden terrace',
      'Lavish Half Board buffet or chef-prepared dinner & breakfast daily',
      'Scenic views of misty hill country peaks, lakes, or the ocean',
      'In-room mini-fridge, Ceylon tea/coffee station & digital safe',
      'Interconnecting family rooms and upgraded deluxe suites available',
      'Landscaped tropical gardens, lounge bars & wellness facilities',
      'Seamless priority check-in coordinated by your chauffeur',
    ],
    idealFor:
      'Couples, families with children, honeymooners, and travelers who love unwinding by a swimming pool with scenic views after daily sightseeing.',
    sampleStyles: [
      '4-Star Hill Country Resorts',
      'Beachfront Resort Hotels',
      'Lakefront & Cultural Retreats',
    ],
    diningStyle: 'Multi-cuisine restaurants with generous breakfast & dinner buffets.',
    facilityHighlight: 'Outdoor swimming pools, scenic balconies, lounge spaces & room service.',
  },
  {
    id: '5-star',
    stars: 5,
    badge: 'Ultimate Luxury & Heritage',
    name: '5-Star Hotel Arrangements',
    shortTitle: '5-Star Luxury',
    tagline: 'World-class luxury resorts, heritage tea bungalows & private villas',
    budgetLabel: 'Five-Star Luxury & Bespoke Stays',
    boardOptions: 'Half Board, Full Board, or Bespoke Fine Dining',
    roomStandard: 'Luxury Suites, Heritage Bungalows & Private Villas',
    description:
      'For guests seeking the finest hospitality in Sri Lanka, we arrange prestigious 5-star luxury resorts, restored colonial tea planter bungalows, and private beachfront pool villas.',
    features: [
      'Panoramic infinity pools or private plunge pools with dramatic views',
      'World-class luxury spas offering authentic Ayurveda & wellness rituals',
      'Gourmet fine dining, international buffets & private candlelit dinners',
      'Personalized butler service & dedicated guest experience hosts',
      'Iconic colonial heritage estates & five-star architectural resorts',
      'Opulent suites with premium linens, lounge areas & soaking tubs',
      'Direct private beachfront access or secluded hill-country sanctuaries',
      'VIP welcome reception, priority check-in & white-glove service',
    ],
    idealFor:
      'Luxury travelers, honeymooners, anniversary celebrations, VIP guests, and families seeking world-class comfort and exclusivity.',
    sampleStyles: [
      '5-Star Oceanfront Luxury Resorts',
      'Colonial Tea Planter Bungalows',
      'Private Luxury Pool Villas',
    ],
    diningStyle: 'Signature gourmet dining, curated wine lists & grand international buffets.',
    facilityHighlight: 'Infinity pools, luxury Ayurvedic spas, private beaches & butler care.',
  },
];

export const tierComparison = [
  {
    feature: 'Room Standard & Space',
    star3: 'Spotless modern en-suite room with quiet A/C & hot water shower',
    star4: 'Spacious deluxe room with private balcony/patio, mini-fridge & safe',
    star5: 'Luxury suites, colonial bungalows, or villas with deep soaking tubs',
  },
  {
    feature: 'Meal Plan (Half Board)',
    star3: 'Daily freshly prepared dinner & breakfast at the hotel',
    star4: 'Daily multi-cuisine dinner & breakfast buffets included',
    star5: 'Gourmet fine-dining or grand international dinner & breakfast',
  },
  {
    feature: 'Swimming Pool & Leisure',
    star3: 'Tranquil tropical gardens (courtyard pool at select properties)',
    star4: 'Full-size outdoor swimming pool with loungers & pool towels',
    star5: 'Infinity pools, private plunge pools, fitness suite & luxury spa',
  },
  {
    feature: 'Location & Atmosphere',
    star3: 'Safe, convenient locations close to major sights and towns',
    star4: 'Prime scenic settings overlooking mountains, lakes, or beaches',
    star5: 'Exclusive beachfronts, private tea estates & iconic sanctuaries',
  },
  {
    feature: 'Guest Support & Service',
    star3: 'Warm Sri Lankan hosts & 24/7 reception desk assistance',
    star4: 'Full concierge desk, room service, and bellhop luggage care',
    star5: 'Personalized butler service, VIP check-in & bespoke hospitality',
  },
  {
    feature: 'Chauffeur & Logistics',
    star3: 'Chauffeur coordinates check-in, bags & stays in driver quarters',
    star4: 'Chauffeur coordinates check-in, bags & stays in driver quarters',
    star5: 'Chauffeur coordinates check-in, bags & stays in driver quarters',
  },
  {
    feature: 'Best Suited Budget',
    star3: 'Smart value & budget-conscious comfort',
    star4: 'Balanced mid-to-upper comfort with full resort amenities',
    star5: 'Uncompromising 5-star luxury & special celebrations',
  },
];

export const whyBookWithLankova = [
  {
    title: 'Personally Inspected Standards',
    description:
      'We verify cleanliness, quiet air conditioning, hot water pressure, linen quality, and food hygiene before arranging any 3-star, 4-star, or 5-star stay for our guests.',
  },
  {
    title: 'Direct Corporate Hotel Rates',
    description:
      'Through our established local partnerships across Sri Lanka, we secure preferential Half Board (Dinner & Breakfast) and Bed & Breakfast rates tailored to your budget.',
  },
  {
    title: 'Tailored to Your Exact Budget',
    description:
      'Tell us your preferred star rating and target budget. We match you with the best-performing hotels on your route so every dollar delivers maximum comfort.',
  },
  {
    title: 'Mix & Match Across Your Route',
    description:
      'Choose practical 3-star or 4-star hotels during active sightseeing days in Sigiriya and Kandy, then upgrade to a 5-star beachfront resort on the South Coast.',
  },
  {
    title: 'Chauffeur & Check-In Coordination',
    description:
      'Your English-speaking chauffeur communicates arrival times with each hotel, assists with luggage, and has separate driver accommodation arranged automatically.',
  },
  {
    title: 'All Taxes & Meals Clearly Stated',
    description:
      'No hidden check-out surprises. All hotel taxes, service charges, and your selected meal plan (Breakfast or Half Board Dinner & Breakfast) are included upfront.',
  },
];

export const accommodationRegions = [
  {
    name: 'Cultural Triangle',
    places: 'Sigiriya • Dambulla • Habarana • Polonnaruwa',
    description:
      'We arrange peaceful nature resorts, garden hotels, and luxury eco-sanctuaries within minutes of Sigiriya Lion Rock and ancient heritage capitals.',
    availableTiers: ['3-Star Comfort', '4-Star Superior', '5-Star Luxury'],
  },
  {
    name: 'Kandy & Central Highlands',
    places: 'Kandy • Nuwara Eliya • Ella • Hatton',
    description:
      'From scenic hillside hotels overlooking Kandy Lake to colonial-style tea country retreats and misty mountain resorts in Ella and Nuwara Eliya.',
    availableTiers: ['3-Star Comfort', '4-Star Superior', '5-Star Luxury'],
  },
  {
    name: 'South & West Coast Beaches',
    places: 'Bentota • Galle • Unawatuna • Mirissa • Tangalle',
    description:
      'Relax in oceanfront 3-star boutique stays, 4-star palm-fringed beach resorts with expansive pools, or 5-star private coastal villas.',
    availableTiers: ['3-Star Comfort', '4-Star Superior', '5-Star Luxury'],
  },
  {
    name: 'Wildlife & Safari Zones',
    places: 'Yala • Udawalawe • Minneriya • Wilpattu',
    description:
      'Stay close to national park gates in comfortable safari hotels, riverside lodges, or luxury wilderness retreats ready for early-morning game drives.',
    availableTiers: ['3-Star Comfort', '4-Star Superior', '5-Star Luxury'],
  },
  {
    name: 'Colombo & Negombo Transit',
    places: 'Colombo City • Negombo Beach • Airport Vicinity',
    description:
      'Convenient, restful first-night and final-night hotels near Bandaranaike International Airport or in the heart of Colombo’s oceanfront promenade.',
    availableTiers: ['3-Star Comfort', '4-Star Superior', '5-Star Luxury'],
  },
  {
    name: 'East & Northern Coasts',
    places: 'Trincomalee • Nilaveli • Pasikudah • Jaffna',
    description:
      'Seasonal calm-water beach resorts and well-appointed city hotels curated for east-coast sun seekers and northern cultural explorers.',
    availableTiers: ['3-Star Comfort', '4-Star Superior', '5-Star Luxury'],
  },
];

export const accommodationFaqs = [
  {
    question: 'Do you arrange 3-star, 4-star, and 5-star hotels across all of Sri Lanka?',
    answer:
      'Yes! We arrange verified 3-star, 4-star, and 5-star hotels in every major destination across Sri Lanka—including Colombo, Negombo, Sigiriya, Kandy, Nuwara Eliya, Ella, Yala, Udawalawe, Galle, Bentota, Mirissa, and Trincomalee.',
  },
  {
    question: 'What is included in your Half Board hotel arrangement?',
    answer:
      'Half Board means your hotel stay includes both Daily Dinner and Daily Breakfast at the hotel, alongside your private air-conditioned transport and English-speaking chauffeur. Our Half Board package rates start from $75/person (3 Days), $70/person (5 Days), $68/person (7 Days), $60/person (10 Days), and $55/person (14 Days).',
  },
  {
    question: 'Can we combine 3-star, 4-star, and 5-star hotels in a single trip?',
    answer:
      'Absolutely. Many guests choose 3-star or 4-star hotels during busy sightseeing days in the Cultural Triangle and Hill Country, and then upgrade to a 5-star beachfront resort for the final days of relaxation. We tailor every night to your preference.',
  },
  {
    question: 'Will we know which specific hotels are booked before confirming?',
    answer:
      'Yes. Once you share your travel dates, route, and preferred star tier (3-star, 4-star, or 5-star), our team sends you a personalized itinerary proposal listing the exact recommended hotels for your review and approval before any reservation is finalized.',
  },
  {
    question: 'Can we book our own hotels and only use Lankova for transport?',
    answer:
      'Yes! If you prefer to book your own accommodations, you can choose our Transport-Only option ($33/person for 3 Days, $30 for 5 Days, $27 for 7 Days, or $25 for 10 Days) and we will provide seamless door-to-door private vehicle and chauffeur service.',
  },
  {
    question: 'Can you arrange family rooms, twin beds, or special dietary meals?',
    answer:
      'Yes. Whether you need interconnecting family rooms, triple occupancy, twin beds, baby cots, or specific meal requirements (Halal, Vegetarian, Vegan, Gluten-Free), we coordinate directly with every hotel in advance.',
  },
];

export default hotelTiers;
