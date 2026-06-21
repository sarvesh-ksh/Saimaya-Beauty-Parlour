export interface Service {
  id: string;
  name: string;
  description: string;
  duration?: string;
  price?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: Service[];
  bgImage: string;
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  description: string;
  topics: string[];
  features: string[];
  bannerImage: string;
}

export interface GalleryItem {
  id: string;
  category: 'bridal' | 'hd-makeup' | 'training' | 'transformations' | 'hair';
  title: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'Bridal' | 'Student' | 'Beauty Service';
  content: string;
  rating: number;
  location?: string;
  date?: string;
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'bridal-makeup',
    title: 'Bridal & Makeup Arts',
    description: 'Bespoke bridal makeovers and stunning cosmetic artistry crafted with premium international brands to make you feel magical on your memorable day.',
    bgImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=1200',
    services: [
      { id: 'b1', name: 'Bridal Makeup', description: 'Complete exquisite signature bridal makeup incorporating custom skin prep, lash art, and hair styling.', price: 'On Consultation', duration: '3 Hours' },
      { id: 'b2', name: 'HD Makeup', description: 'Ultra-high-definition cosmetics engineered to look absolutely flawless under high-tech photography and videography.', price: 'Standard Premium', duration: '2.5 Hours' },
      { id: 'b3', name: 'Airbrush Makeup', description: 'Flawless spray-mist makeup delivering lightweight feel, waterproofing, and extraordinary, radiant 24-hour longevity.', price: 'Luxury Class', duration: '3 Hours' },
      { id: 'b4', name: 'Engagement Makeup', description: 'A soft, luminous look customized to complement your elegant engagement outfit and theme.', price: 'Standard', duration: '2 Hours' },
      { id: 'b5', name: 'Party Makeup', description: 'Trendy, captivating makeup customized for cocktails, sangeet, anniversaries, or gala events.', price: 'Custom', duration: '1.5 Hours' },
      { id: 'b6', name: 'Saree Draping', description: 'Professional, stable, and highly creative draping styles tailored beautifully to secure your aesthetic.', price: 'Accessible', duration: '30 Mins' }
    ]
  },
  {
    id: 'hair-services',
    title: 'Hair Sculpting & Treatments',
    description: 'Transformative hair rituals ranging from classic styling to advanced restoration treatments that bring texture, volume, and exquisite shine.',
    bgImage: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1200',
    services: [
      { id: 'h1', name: 'Hair Styling', description: 'Elegant bridal buns, Hollywood waves, bohemian braids, or contemporary updos tailored for occasion wear.', price: 'Tailored', duration: '45-90 Mins' },
      { id: 'h2', name: 'Hair Spa', description: 'Deeply nourishing thermal steam massage and rich keratin mask designed to target scalp hydration and stress relief.', price: 'Relaxing', duration: '60 Mins' },
      { id: 'h3', name: 'Keratin Treatment', description: 'Advanced protein rebuilding systems to banish protein frizz, seal split-ends, and deliver ultra-smooth, sleek manageable hair.', price: 'Premium Care', duration: '3 Hours' }
    ]
  },
  {
    id: 'beauty-services',
    title: 'Beauty & Skin Aesthetics',
    description: 'Rejuvenating skin facials, intricate custom mehendi designs, and meticulous premium care treatments that accentuate your natural beauty.',
    bgImage: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1200',
    services: [
      { id: 's1', name: 'Signature Facial', description: 'Botanical extracts, deep-pore cleaning, and gentle oxygen infusion for instant cell renewal and cellular brightness.', price: 'Standard', duration: '60 Mins' },
      { id: 's2', name: 'Hydra Facial', description: 'Multi-stage state-of-the-art non-invasive dermal treatment that extracts impurities while infusing intense botanical peptides.', price: 'Luxury Hydra', duration: '75 Mins' },
      { id: 's3', name: 'Nail Art', description: 'Expressive extensions, premium gel polishes, intricate chromes, or crystal details crafted with utmost precision.', price: 'Artisan', duration: '60 Mins' },
      { id: 's4', name: 'Intricate Mehendi', description: 'Premium premium organic mehendi featuring custom Traditional Marwari, Arabic, or modern bridal designs.', price: 'Specialist', duration: 'Flexible' }
    ]
  }
];

export const COURSES_DATA: Course[] = [
  {
    id: 'pro-makeup',
    title: 'Professional Makeup Course',
    duration: '3 Months',
    description: 'Our flagship exhaustive certification. Learn everything from skin molecular structures and basic color corrective layouts to advanced airbrushing, theatrical prosthetics, and business operations.',
    topics: [
      'Basic to Advanced Color Corrective Theory',
      'Understanding Skin Chemistry & Textures',
      'Airbrush & HD Camera-Ready Mapping',
      'The Art of Bridal & Traditional Makeovers',
      'Fashion, Ramp, & Editorial Makeups',
      'Product Kit Architecture & Portfolio Creation',
      'Makeup Business & Social Media Marketing'
    ],
    features: [
      'ISO/Govt-friendly Certified Diploma',
      'Premium Starter Kit Included (Worth ₹15k)',
      '100% Hand-On Practical Lab Hours',
      'Symmetry, Light & Shadow Workshops',
      'Placement & Professional Internship Assistance'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bridal-makeup-training',
    title: 'Bridal Makeup Masterclass',
    duration: '2 Months',
    description: 'A laser-focused master program dedicated fully to the elite business of Bridal aesthetics. Become a sought-after Bridal Makeover artisan capable of commanding premium bookings.',
    topics: [
      'Traditional Maharashtrian & North Indian Bridal Looks',
      'South Indian and Bengali Heritage Makeup Style',
      'Modern Contemporary Christian & Reception Aesthetics',
      'Hair Styling & Accessories Architecture',
      'Saree Draping Techniques (Classic to Modern Stylings)',
      'Sangeet, Haldi & Mehendi Complementary Artistry'
    ],
    features: [
      'Bridal Artistry Specialization Certificate',
      'Access to Premium Bridal Jewelry for Shoots',
      'Live Bride Shadowing Experience with Maya Salke',
      'Step-by-Step Business Pricing Consultation',
      'Student Portfolio Photo Shoots with Real Models'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'beauty-parlour-hair-tech',
    title: 'Beauty Parlour & Skin Care Training',
    duration: '6 Months',
    description: 'A comprehensive, end-to-end curriculum encompassing complete salon management. Ideal for aspiring salon owners seeking deep mastery in skin diagnostics, therapeutic facials, hair transformation chemistry, and wellness treatments.',
    topics: [
      'Skin Anatomy, Types, & Advanced Facial Therapy',
      'Chemical Hair Art: Keratin, Rebonding, Smoothing, and Coloring',
      'Advanced Hair SPA Techniques & Scalp Treatments',
      'Nail Extension, Gel Polishing, and Nail Health',
      'Client Safety, Hygiene Guidelines, and Salon Setup Economics'
    ],
    features: [
      'Master Beautician Diploma Certification',
      'Free Dermocosmetic Starter Kit',
      'Practical Salon Management Internship',
      '1-on-1 Guidance by Maya Salke on Client Retention',
      'Equipment Purchasing & Sourcing Wholesale Support'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    category: 'bridal',
    title: 'Royal Maharashtrian Bride',
    description: 'Traditional heavy gold-accented Nauvari look featuring classic crescent bindi, custom red lip, and flawless HD base.',
    imageUrl: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g2',
    category: 'hd-makeup',
    title: 'Luminous Editorial Glow',
    description: 'Dewy glass-skin texture mapping designed specifically for intense studio strobe lights and high-definition bridal portraits.',
    imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g3',
    category: 'training',
    title: 'Live Workshop Session',
    description: 'Academy students getting hands-on experience under the precision guidance of Maya Salke in the studio.',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g4',
    category: 'transformations',
    title: 'Radiant Dermal Makeover',
    description: 'Bespoke custom corrections for dark spots, pigment evening, and jawline definition showing magnificent differences.',
    imageUrl: 'https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g5',
    category: 'hair',
    title: 'Hollywood Cascading Waves',
    description: 'Timeless cascading hair sculpt detailed with subtle gold leafing for classic evening glamor.',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g6',
    category: 'bridal',
    title: 'Royal North Indian Sheen',
    description: 'Crimson-themed traditional bridal makeover featuring classic double-dupatta framing and dramatic soft smoky eyes.',
    imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g7',
    category: 'training',
    title: 'Course Practical Demonstration',
    description: 'Practical demonstration session regarding premium palettes, structural highlights, and model preps.',
    imageUrl: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Priyanka Deshmukh',
    role: 'Bridal',
    content: 'Maya is a magician! Since Sinner has many beauty parlours, I was initially sceptical, but her signature HD Airbrush Makeup made me feel like an absolute queen. The base remained sweatproof and radiant all night through the pheras. Thank you, Saimaya!',
    rating: 5,
    location: 'Nashik road, Maharashtra',
    date: 'April 2026'
  },
  {
    id: 't2',
    name: 'Anjali Shinde',
    role: 'Student',
    content: 'Enrolling in Saimaya\'s 3-month Professional Makeup Course transformed my career. Maya ma\'am provides practical guidance and hands-on learning with highly premium products. I already received 3 bridal bookings for this wedding season immediately after graduation!',
    rating: 5,
    location: 'Sinnar, Maharashtra',
    date: 'January 2026'
  },
  {
    id: 't3',
    name: 'Snehal Ghige',
    role: 'Beauty Service',
    content: 'Saimaya Parlour is the only place in Sinnar I trust for premium treatments like Hydra Facials and custom Keratin hair smooths. Genuine products, excellent hygiene levels, and very affordable prices for such luxury treatments.',
    rating: 5,
    location: 'Sinnar, Maharashtra',
    date: 'May 2026'
  },
  {
    id: 't4',
    name: 'Rupali Sinnerkar',
    role: 'Bridal',
    content: 'My bridal look was custom curated. Maya salke mam spent 30 mins just during consulting and analyzing my skin type. I looked natural, glowy and traditional exactly like I dreamed of. Strongly suggest Saimaya to all Sinnar brides!',
    rating: 5,
    location: 'Sinnar',
    date: 'February 2026'
  },
  {
    id: 't5',
    name: 'Kshitija Patil',
    role: 'Student',
    content: 'Amazing environment! It does not feel like an ordinary training shop. Ma\'am teaches the chemistry behind skin care, and guides us on client pricing. The free starter kit provided had amazing high quality palettes.',
    rating: 5,
    location: 'Sangamner, Maharashtra',
    date: 'March 2026'
  }
];
