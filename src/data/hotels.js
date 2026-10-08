// Data for Sri Lanka Accommodations (3-Star, 4-Star, 5-Star)
// Lankova arranges handpicked accommodations based on traveler budget and comfort level.
// No specific single hotel brands are hardcoded - properties are curated to match client itinerary.

export const hotelTiers = [
  {
    id: '3-star',
    stars: 3,
    badge: 'Smart Value Choice',
    name: '3-Star Comfort Stays',
    tagline: 'Spotless cleanliness, authentic hospitality & exceptional value',
    budgetLabel: 'Budget-Friendly & Value',
    description:
      'Ideal for travelers seeking genuine Sri Lankan warmth, pristine cleanliness, and dependable amenities without overspending. Every property is hand-vetted for safety, comfort, and convenience.',
    heroImage:
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    features: [
      'Private en-suite modern bathroom with reliable hot water',
      'Whisper-quiet individual climate control / air conditioning',
      'Complimentary high-speed Wi-Fi in rooms and common areas',
      'Fresh daily breakfast included (Sri Lankan or Continental)',
      'Safe, central locations close to sights and dining spots',
      'Attentive local hosts & 24/7 reception desk assistance',
      'Luggage handling and secure premises for peace of mind',
      'Flexible bedding setups (Double, Twin, or Triple rooms)',
    ],
    idealFor:
      'Value-conscious travelers, solo explorers, backpackers upgrading to comfort, and families on a sensible holiday budget.',
    sampleStyles: [
      'Boutique Town Guesthouses',
      'Contemporary Clean City Hotels',
      'Tranquil Scenic Eco-Lodges',
    ],
    diningStyle: 'Fresh traditional Sri Lankan & Continental breakfasts with local tea/coffee.',
    poolStatus: 'Select properties feature cozy courtyard pools or direct garden access.',
  },
  {
    id: '4-star',
    stars: 4,
    popular: true,
    badge: 'Most Popular Choice',
    name: '4-Star Premium Resorts & Hotels',
    tagline: 'Elevated comfort, refreshing swimming pools & panoramic scenic views',
    budgetLabel: 'Moderate & Superior Comfort',
    description:
      'Our most requested accommodation tier. Strike the ideal balance between refined comfort, scenic locations, and sensible expenditure. Enjoy relaxing swimming pools, lush surroundings, and full-service dining.',
    heroImage:
      'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    features: [
      'Expansive swimming pools with sun loungers & pool towel service',
      'Spacious modern guest rooms with private balcony or patio terrace',
      'Multi-cuisine on-site restaurant serving breakfast and dinner buffets',
      'Picturesque views of misty mountains, lush tea hills, or the ocean',
      'In-room mini-fridge, tea/coffee maker & digital safety box',
      'Interconnecting family rooms and deluxe suites available',
      'Fitness centers, manicured gardens, and leisure spaces',
      '24/7 front desk, concierge assistance, and room service',
    ],
    idealFor:
      'Couples, families with children, honeymooners on a balanced budget, and travelers who love to unwind by the pool after sightseeing.',
    sampleStyles: [
      'Hill Country Panoramic Resorts',
      'Coastal Beachfront Hotels',
      'Cultural Garden Retreats',
    ],
    diningStyle: 'Multi-cuisine restaurants with lavish breakfast & dinner buffets, plus à la carte menus.',
    poolStatus: 'Full-size outdoor swimming pools with dedicated children’s sections in most properties.',
  },
  {
    id: '5-star',
    stars: 5,
    badge: 'Ultimate Luxury & Heritage',
    name: '5-Star Luxury Resorts & Heritage Villas',
    tagline: 'World-class opulence, colonial tea bungalows & private coastal villas',
    budgetLabel: 'Premium Luxury / Bespoke',
    description:
      'The pinnacle of Sri Lankan hospitality. Experience restored colonial tea planter estates, private infinity pool villas, renowned five-star beachfront sanctuaries, and architectural masterpieces with white-glove service.',
    heroImage:
      'https://images.pexels.com/photos/14024947/pexels-photo-14024947.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/14024947/pexels-photo-14024947.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/34790496/pexels-photo-34790496.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    features: [
      'Private plunge pools or cliff-edge infinity pools overlooking dramatic vistas',
      'World-class luxury spas offering authentic Ayurvedic and wellness therapies',
      'Gourmet fine dining, chef-curated tastings, private candlelit beach dinners',
      'Personalized butler service & dedicated guest experience manager',
      'Iconic colonial heritage bungalows and award-winning boutique architecture',
      'Lavish master suites with high-thread-count linens & deep soaking tubs',
      'Direct private beach access, secluded tea estate trails, or riverfront serenity',
      'VIP arrival welcome with fresh Ceylon king coconut, priority check-in & gifts',
    ],
    idealFor:
      'Discerning world travelers, luxury honeymoons, executive getaways, milestone anniversaries, and high-end family holidays.',
    sampleStyles: [
      'Colonial Tea Planter Bungalows',
      'Private Oceanfront Villas',
      'Iconic 5-Star Architectural Resorts',
    ],
    diningStyle: 'Signature fine dining, private chef experiences, artisanal wine cellars, and bespoke culinary journeys.',
    poolStatus: 'Infinity pools, private plunge pools, heated hill country pools, and private cabana service.',
  },
];

export const tierComparison = [
  {
    feature: 'Room Standard & Comfort',
    star3: 'Clean, modern en-suite room with quiet AC and hot water shower',
    star4: 'Spacious deluxe room with balcony / terrace, mini-fridge & tea maker',
    star5: 'Opulent suites / villas with high thread count linens & deep soaking tubs',
  },
  {
    feature: 'Swimming Pool & Leisure',
    star3: 'Courtyard splash pool or lovely tropical garden (in select properties)',
    star4: 'Full-size outdoor swimming pool with sun loungers & towel service',
    star5: 'Panoramic infinity pools, private plunge pools & luxury wellness spas',
  },
  {
    feature: 'Dining & Cuisine',
    star3: 'Fresh daily breakfast (authentic Sri Lankan & Continental)',
    star4: 'Multi-cuisine restaurant with buffet and à la carte options',
    star5: 'Gourmet fine dining, private chef options & candlelit settings',
  },
  {
    feature: 'Setting & Views',
    star3: 'Central convenient locations near key attractions and dining',
    star4: 'Scenic settings with lake, mountain, or coastal ocean views',
    star5: 'Secluded prime locations: tea hill peaks, private beaches, heritage estates',
  },
  {
    feature: 'Personalized Service',
    star3: 'Warm, friendly local hosts and 24/7 reception support',
    star4: 'Professional concierge, room service, and luggage assistance',
    star5: 'Dedicated butler service, VIP arrival check-in & personalized care',
  },
  {
    feature: 'Lankova Driver Coordination',
    star3: 'Seamless luggage handling & independent driver quarters arranged',
    star4: 'Seamless luggage handling & independent driver quarters arranged',
    star5: 'Seamless luggage handling & independent driver quarters arranged',
  },
  {
    feature: 'Target Budget Level',
    star3: 'Budget-conscious travelers seeking clean, reliable comfort',
    star4: 'Moderate holiday budget seeking superior relaxation & resort amenities',
    star5: 'Luxury & celebration travel seeking exclusive luxury without compromise',
  },
];

export const whyBookWithLankova = [
  {
    title: 'Personally Vetted & Inspected',
    description:
      'We visit and test properties regularly to ensure impeccable cleanliness, functioning hot water, reliable air conditioning, and outstanding hospitality.',
  },
  {
    title: 'Direct Negotiated Partner Rates',
    description:
      'Benefit from our long-standing relationships with Sri Lankan hoteliers. We secure preferential rates with breakfast included, often beating online booking sites.',
  },
  {
    title: 'Tailored to Your Exact Budget',
    description:
      'Whether you have a fixed per-night limit or want to indulge on special nights, we structure your stays to deliver maximum comfort for every dollar spent.',
  },
  {
    title: 'Flexible "Mix & Match" Stays',
    description:
      'Want 3 or 4-star hotels for busy cultural touring days, and a 5-star beachfront villa to unwind at the end? We easily combine tiers within your custom itinerary.',
  },
  {
    title: 'Seamless Driver Logistics',
    description:
      'Your private chauffeur handles your bags, coordinates arrival times with the front desk, and stays in nearby quarters—zero hassle for you.',
  },
  {
    title: 'Zero Booking Stress or Hidden Fees',
    description:
      'All local government taxes, service fees, and daily breakfasts are included upfront in your tour quote. No hidden surcharges on arrival.',
  },
];

export const accommodationRegions = [
  {
    name: 'Cultural Triangle',
    places: 'Sigiriya • Dambulla • Anuradhapura • Polonnaruwa',
    description: 'Eco-nature lodges, serene lake-view chalets, and lush garden retreats.',
    image: 'https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Central Hill Country',
    places: 'Kandy • Nuwara Eliya • Ella • Hatton',
    description: 'Colonial tea bungalows, mist-shrouded mountain hotels, and valley-view suites.',
    image: 'https://images.pexels.com/photos/14024795/pexels-photo-14024795.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Southern & West Coast',
    places: 'Galle Fort • Bentota • Mirissa • Tangalle',
    description: 'Beachfront resorts, private pool villas, and restored Dutch colonial mansions.',
    image: 'https://images.pexels.com/photos/34790496/pexels-photo-34790496.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Wildlife & Safaris',
    places: 'Yala • Udawalawe • Wilpattu',
    description: 'Comfortable safari camps, river lodges, and eco-retreats near park gates.',
    image: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Capital & Transit',
    places: 'Colombo • Negombo • Airport Vicinity',
    description: 'Boutique transit villas with airport access and modern oceanside hotels.',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'East Coast Havens',
    places: 'Trincomalee • Pasikudah • Nilaveli',
    description: 'Pristine calm-water beach resorts and peaceful coastal retreats.',
    image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const accommodationFaqs = [
  {
    question: 'Can we combine 3-star, 4-star, and 5-star hotels in the same itinerary?',
    answer:
      'Yes, absolutely! This is one of our most popular requests. Many guests choose comfortable 3-star or 4-star hotels while exploring cultural sites and the hill country, and upgrade to a 5-star luxury villa or beachfront resort for their final days of seaside relaxation. We customize every night to match your preferences.',
  },
  {
    question: 'Can we book hotels ourselves and use Lankova only for private transport?',
    answer:
      'Yes! If you have hotel loyalty points, corporate discounts, or specific properties you have already booked, you can hire our licensed English-speaking chauffeur and private air-conditioned vehicle. We will provide seamless door-to-door transportation between your selected hotels.',
  },
  {
    question: 'Are breakfast, taxes, and service fees included in your accommodation prices?',
    answer:
      'Yes. When Lankova arranges your accommodations as part of a tour package, daily breakfast, all Sri Lankan government tourism taxes, and hotel service charges are included upfront in your proposal. There are no surprise fees at the hotel front desk.',
  },
  {
    question: 'How do you verify the quality and safety of the hotels?',
    answer:
      'We do not rely solely on online ratings. Our team and seasoned drivers regularly inspect partner properties across Sri Lanka. We inspect air conditioning efficiency, hot water pressure, linen cleanliness, Wi-Fi reliability, food hygiene, and security to ensure you always experience exceptional comfort.',
  },
  {
    question: 'Where does our private chauffeur stay during the tour?',
    answer:
      'Most hotels in Sri Lanka provide dedicated driver quarters. Where driver quarters are not available at a remote or boutique property, Lankova takes care of arranging comfortable nearby lodging for your driver. You never have to worry about accommodation or meals for your chauffeur.',
  },
  {
    question: 'Can you accommodate families, dietary requirements, or special room requests?',
    answer:
      'Certainly. Whether you require interconnecting family rooms, baby cots, twin single beds, ground-floor accessibility, or specific dietary arrangements (Vegetarian, Vegan, Halal, Gluten-Free), just notify us when planning your trip and we will coordinate everything with the hotels in advance.',
  },
];

export default hotelTiers;
