export interface Vehicle {
  id: string;
  name: string;
  category: string;
  models: string;
  seats: number;
  bags: number;
  ac: boolean;
  idealFor: string;
  image: string;
  startingRateNote: string;
}

export interface RouteInfo {
  id: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  highlight: string;
  tripType: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  icon: string;
}

export const BUSINESS_INFO = {
  name: 'SS Cab',
  tagline: 'Your Journey, Our Responsibility',
  phone: '7823085693',
  phoneFormatted: '+91 7823085693',
  whatsappUrl: 'https://wa.me/917823085693',
  location: 'Tiruttani, Tamil Nadu, India',
  address: 'Tiruttani, Thiruvallur District, Tamil Nadu – 631209, India',
  email: 'bookings@sscabtiruttani.com',
  workingHours: '24 Hours / 7 Days a Week',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31086.136364024474!2d79.59300329068412!3d13.177196024185203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52a38b1f727827%3A0xaec17e089d84bf25!2sTiruttani%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
};

import sedanImage from '../assets/images/cab_sedan_dzire_1793411795979.jpg';
import suvImage from '../assets/images/cab_suv_innova_1793411797468.jpg';
import highwayImage from '../assets/images/hero_sscab_highway_1793411795438.jpg';

export const FLEET_DATA: Vehicle[] = [
  {
    id: 'sedan',
    name: 'Prime Sedan',
    category: 'Most Popular',
    models: 'Swift Dzire / Toyota Etios / Hyundai Aura',
    seats: 4,
    bags: 3,
    ac: true,
    idealFor: 'Couples, small families, business & airport transfers',
    image: sedanImage,
    startingRateNote: 'Best value for 1-way & round-trip highway drives',
  },
  {
    id: 'suv',
    name: 'Premium Family SUV',
    category: 'Spacious & Comfortable',
    models: 'Toyota Innova / Maruti Ertiga / Marazzo',
    seats: 6,
    bags: 4,
    ac: true,
    idealFor: 'Family temple pilgrimages, group travel & luggage',
    image: suvImage,
    startingRateNote: 'Extra legroom, smooth hill ride for Tirupati ghats',
  },
  {
    id: 'hatchback',
    name: 'Compact Hatchback',
    category: 'Budget-Friendly',
    models: 'Maruti Swift / WagonR / Celerio',
    seats: 4,
    bags: 2,
    ac: true,
    idealFor: 'Local Tiruttani town travel, quick hospital & station drops',
    image: sedanImage,
    startingRateNote: 'Economical city rides with quick pickup',
  },
  {
    id: 'tempo',
    name: 'Group Tempo Traveller',
    category: 'Group & Tour Circuit',
    models: 'Force Traveller (12 / 16 / 20 Seater)',
    seats: 16,
    bags: 10,
    ac: true,
    idealFor: 'Large family functions, wedding parties & temple circuits',
    image: highwayImage,
    startingRateNote: 'Pushback luxury seats, high roof, ample luggage boot',
  },
];

export const POPULAR_ROUTES: RouteInfo[] = [
  {
    id: 'tirupati',
    from: 'Tiruttani',
    to: 'Tirupati / Tirumala',
    distance: '~65 km',
    duration: '1 hr 30 mins',
    highlight: 'Pilgrim darshan, Alipiri / ghat road drops, same-day return',
    tripType: 'Pilgrimage Circuit',
  },
  {
    id: 'chennai-airport',
    from: 'Tiruttani',
    to: 'Chennai Airport (MAA)',
    distance: '~85 km',
    duration: '2 hrs 00 mins',
    highlight: '24/7 on-time terminal drop, midnight & early morning pickup',
    tripType: 'Airport Transfer',
  },
  {
    id: 'vellore',
    from: 'Tiruttani',
    to: 'Vellore CMC & Sripuram',
    distance: '~70 km',
    duration: '1 hr 45 mins',
    highlight: 'CMC Hospital visits, Golden Temple darshan, medical drops',
    tripType: 'Health & Spiritual',
  },
  {
    id: 'kanchipuram',
    from: 'Tiruttani',
    to: 'Kanchipuram Silk City',
    distance: '~45 km',
    duration: '1 hr 00 mins',
    highlight: 'Ekambareswarar, Kamakshi Amman temple & silk saree shopping',
    tripType: 'Culture & Tour',
  },
  {
    id: 'bengaluru',
    from: 'Tiruttani',
    to: 'Bengaluru / Electronic City',
    distance: '~260 km',
    duration: '5 hrs 15 mins',
    highlight: 'Direct highway expressway route, doorstep drop anywhere in BLR',
    tripType: 'Interstate Outstation',
  },
  {
    id: 'sricity',
    from: 'Tiruttani',
    to: 'Sri City SEZ / Tada',
    distance: '~60 km',
    duration: '1 hr 30 mins',
    highlight: 'Industrial visits, corporate business meetings & employee commutes',
    tripType: 'Business Mobility',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'local-taxi',
    title: 'Local Taxi Services',
    category: 'Town Commute',
    shortDesc: 'Punctual, doorstep cab pickups anywhere within Tiruttani and neighboring taluks.',
    fullDesc: 'Quick and dependable rides for local station connections, temple visits, shopping, bank errands, and clinic appointments with zero cancellation hassles.',
    features: [
      'Tiruttani Railway Station pickup & drop',
      'Hourly package rentals for town visits',
      'Short-notice dispatch across Tiruttani',
    ],
    icon: 'MapPin',
  },
  {
    id: 'outstation-trips',
    title: 'Outstation Trips',
    category: 'Intercity Travel',
    shortDesc: 'Safe, stress-free highway journeys to destinations across South India.',
    fullDesc: 'Long-distance travel made comfortable. Travel across Tamil Nadu, Andhra Pradesh, Karnataka, and Puducherry with licensed highway drivers.',
    features: [
      'Experienced highway chauffeurs',
      'Flexible halt & refreshment breaks',
      'All-inclusive or per-km transparent quotes',
    ],
    icon: 'Compass',
  },
  {
    id: 'one-way-round-trip',
    title: 'One-Way & Round-Trip Travel',
    category: 'Budget Flexibility',
    shortDesc: 'Pay only for what you travel without paying return empty-trip fares.',
    fullDesc: 'Opt for one-way drops to Chennai, Tirupati, or Vellore and save up to 40% compared to traditional round-trip billing.',
    features: [
      'Zero return charges on select 1-way routes',
      'Round-trips with flexible waiting windows',
      'No surprise driver allowance claims',
    ],
    icon: 'ArrowLeftRight',
  },
  {
    id: 'airport-transfers',
    title: 'Airport Transfers',
    category: 'Flight Connectivity',
    shortDesc: 'Reliable, 24/7 transfers to Chennai (MAA) and Tirupati (TIR) airports.',
    fullDesc: 'Never miss a flight. We track your flight schedule, arrive early, help with heavy luggage, and provide seamless terminal drop-offs.',
    features: [
      'Midnight & dawn pickup assurance',
      'Live flight schedule monitoring',
      'Air-conditioned quiet ride for pre-flight rest',
    ],
    icon: 'Plane',
  },
  {
    id: 'family-tourist',
    title: 'Family & Tourist Travel',
    category: 'Pilgrimage & Holidays',
    shortDesc: 'Customized spiritual temple packages and relaxing family vacations.',
    fullDesc: 'Specialized tour itineraries for Tiruttani Murugan Temple, Tirupati Balaji, Kanchipuram, and Vellore Golden Temple with patient, courteous service for elders.',
    features: [
      'Elder-friendly, courteous chauffeurs',
      'Spacious boots for temple offerings & bags',
      'Customized multi-temple circuits',
    ],
    icon: 'Users',
  },
  {
    id: 'corporate-industrial',
    title: 'Corporate & Business Travel',
    category: 'Executive Transport',
    shortDesc: 'Executive travel for factories, industrial parks, and business delegates.',
    fullDesc: 'Clean, professional transport connecting Tiruttani to industrial corridors in Sri City (SEZ), Arakkonam, Ranipet, and Sriperumbudur.',
    features: [
      'Polite, professionally dressed drivers',
      'Assistance with GST bills upon request',
      'Monthly corporate contract options',
    ],
    icon: 'Briefcase',
  },
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Tiruttani to Tirupati Trip',
    stars: 5,
    text: 'We booked an Innova from SS Cab for our family pilgrimage to Tirupati from Tiruttani. The car was spotless, the driver drove very calmly through the ghat road, and was extremely respectful to our elderly parents.',
    avatarLetter: 'R',
    isSample: true,
  },
  {
    id: 2,
    name: 'S. Venkatesh',
    location: 'Chennai Airport Transfer',
    stars: 5,
    text: 'Needed an emergency 3:30 AM drop to Chennai International Airport. Contacted SS Cab at 7823085693 and they dispatched a Dzire promptly. Reached 30 minutes before time without any stress. Highly recommended!',
    avatarLetter: 'S',
    isSample: true,
  },
  {
    id: 3,
    name: 'Priya Dharshini',
    location: 'One-Way Drop to Vellore',
    stars: 5,
    text: 'Genuine pricing without any surprise toll arguments. Booked a one-way cab to Vellore CMC hospital. The booking process via WhatsApp was fast, and the driver helped with patient luggage smoothly.',
    avatarLetter: 'P',
    isSample: true,
  },
];

export const FAQS_DATA = [
  {
    q: 'How do I book a cab with SS Cab?',
    a: 'You can simply call our direct number 7823085693 or tap the WhatsApp button on this website with your pickup point, destination, date, and preferred car. Our dispatch team confirms your vehicle within minutes.',
  },
  {
    q: 'Are outstation toll charges and driver allowances included?',
    a: 'We provide completely transparent quotes. You can choose an all-inclusive package (cab + toll + parking) or standard base fare where tolls are settled as per actual FASTag receipts. No hidden fees.',
  },
  {
    q: 'Do you operate late-night or early-morning airport drops?',
    a: 'Yes, SS Cab operates 24 hours a day, 7 days a week. For early morning pickups (between 12:00 AM and 6:00 AM), we advise booking in advance to ensure prompt driver assignment.',
  },
  {
    q: 'Can I book a one-way trip without paying return fare?',
    a: 'Yes! For major sectors like Tiruttani to Chennai, Tiruttani to Vellore, or Tiruttani to Tirupati, dedicated one-way drops are offered so you only pay for the distance travelled.',
  },
  {
    q: 'What types of cars are available in your fleet?',
    a: 'We maintain clean Hatchbacks (Swift, WagonR), Sedans (Dzire, Etios), 6–7 seater SUVs (Innova, Ertiga), and 12–20 seater Tempo Travellers for larger group tours.',
  },
];
