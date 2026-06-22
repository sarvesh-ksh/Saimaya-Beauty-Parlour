import React, { useState, memo } from 'react';
import { SERVICES_DATA, ServiceCategory } from '../types';
import { 
  Crown, 
  Scissors, 
  Gem, 
  Sparkles, 
  Heart, 
  Wind, 
  Layers, 
  Droplet, 
  Smile, 
  Feather, 
  ArrowRight,
  Clock,
  Coins,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: "What services are included in the Saimaya Signature Bridal Package?",
    answer: "Our signature bridal package offers a full-luxury suite: customized high-definition HD or flawless Airbrush makeup matching your skin undertone, holistic pre-makeup dermal therapies, signature hairstyles with floral/jewelry accent mapping, premium volume eyelashes, couture saree draping, and complete jewelry positioning."
  },
  {
    question: "How early should I book Saimaya for my wedding makeup?",
    answer: "We strongly recommend booking at least 3 to 6 months in advance, especially during the peak wedding calendar. Booking early secures Maya Salke's exclusive dates and allows us to structure professional skin preparation regimens leading up to your celebrations."
  },
  {
    question: "Do you offer trial sessions before the wedding day?",
    answer: "Yes, we offer premium in-studio consultation and styling trials at Saimaya Academy. During your styling trial, we finalize your aesthetic layout and products. When you finalize your booking, a portion of the trial fee is adjusted directly into your final package contract."
  },
  {
    question: "Is Airbrush makeup or HD makeup better for modern bridal portraits?",
    answer: "Both represent exceptionally high-definition, camera-ready systems. HD Makeup is cream-based and blends meticulously to offer a natural, luminous skin finish. Airbrush uses a lightweight compressor-mist that locks the formula to deliver extreme durability against sweat, heat, and emotion for up to 24 hours."
  },
  {
    question: "Can Saimaya's elite bridal team travel to outstation wedding venues?",
    answer: "Absolutely! Our professional bridal squad travels both throughout Sinnar and Nashik districts, as well as state-wide and nationally for destination weddings. Any outstation arrangement includes transparent provisions for travel and lodging."
  }
];

const Services = memo(function Services() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Return appropriate design icons for category cards
  const getCategoryIcon = (id: string, className: string = 'w-5 h-5') => {
    switch (id) {
      case 'bridal-makeup':
        return <Crown className={`${className} text-gold`} />;
      case 'hair-services':
        return <Scissors className={`${className} text-gold`} />;
      case 'beauty-services':
        return <Gem className={`${className} text-gold`} />;
      default:
        return <Sparkles className={`${className} text-gold`} />;
    }
  };

  // Return highly specialized icons for items
  const getItemIcon = (name: string, className: string = 'w-5 h-5 text-gold-light') => {
    const n = name.toLowerCase();
    if (n.includes('bridal')) return <Crown className={className} />;
    if (n.includes('hd')) return <Sparkles className={className} />;
    if (n.includes('airbrush')) return <Wind className={className} />;
    if (n.includes('engagement')) return <Heart className={className} />;
    if (n.includes('party')) return <Smile className={className} />;
    if (n.includes('saree')) return <Layers className={className} />;
    if (n.includes('styling')) return <Scissors className={className} />;
    if (n.includes('spa')) return <Droplet className={className} />;
    if (n.includes('keratin')) return <Sparkles className={className} />;
    if (n.includes('hydra')) return <Droplet className={className} />;
    if (n.includes('nail')) return <Sparkles className={className} />;
    if (n.includes('mehendi')) return <Feather className={className} />;
    return <Gem className={className} />;
  };

  const currentCategory = SERVICES_DATA[activeCategoryIndex];

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-luxury-black border-t border-white/5">
      {/* Immersive Background Decor */}
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] rounded-full bg-[#1A0F2B]/30 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[350px] h-[350px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-gold-light block mb-3">
            SAIMAYA SIGNATURE TREATMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-widest uppercase mb-4">
            Curated <span className="gradient-text-gold font-normal">Aesthetic Care</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold/50 mx-auto my-4" />
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto font-light">
            Indulge in tailored programs, using exclusively tested dermatologist-approved formulations. Tap the tabs below to explore our core categories.
          </p>
        </div>

        {/* Categories Tab Selectors */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 mb-16">
          {SERVICES_DATA.map((category, idx) => (
            <button
              key={category.id}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`flex items-center gap-4 p-5 rounded-md text-left transition-all duration-300 border cursor-pointer ${
                activeCategoryIndex === idx
                  ? 'border-gold bg-[#140E24]/60 border-glow-purple shadow-[0_4px_25px_rgba(122,51,255,0.15)] bg-gradient-to-tr from-purple-dark to-purple-deep'
                  : 'border-white/5 bg-charcoal/40 hover:bg-charcoal/80 hover:border-white/10'
              }`}
            >
              <div className={`p-3 rounded-md flex-shrink-0 ${activeCategoryIndex === idx ? 'bg-gold/15' : 'bg-white/5'}`}>
                {getCategoryIcon(category.id, 'w-6 h-6')}
              </div>
              <div>
                <span className={`text-[10px] uppercase font-mono tracking-widest block leading-tight ${activeCategoryIndex === idx ? 'text-gold' : 'text-gray-500'}`}>
                  Category {idx + 1}
                </span>
                <span className="text-sm font-semibold uppercase tracking-wider text-white mt-1 block">
                  {category.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Category Description & Interactive Directory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Category Banner Panel / Description details */}
          <div className="lg:col-span-4">
            <div className="relative h-full rounded-md overflow-hidden border border-white/10 bg-charcoal min-h-[300px] flex flex-col justify-end p-8 group">
              {/* Image with overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={currentCategory.bgImage}
                  alt={currentCategory.title}
                  className="w-full h-full object-cover filter brightness-[0.4] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-dark/80 via-transparent to-transparent" />
              </div>

              {/* Banner content */}
              <div className="relative z-10">
                <div className="p-3 bg-gold/10 border border-gold/30 rounded-md w-fit mb-4 text-gold">
                  {getCategoryIcon(currentCategory.id, 'w-5 h-5')}
                </div>
                <h3 className="font-serif text-2xl text-white tracking-widest uppercase">
                  {currentCategory.title}
                </h3>
                <div className="w-12 h-[1px] bg-gold/50 my-3" />
                <p className="text-gray-300 text-xs leading-relaxed font-light mb-6">
                  {currentCategory.description}
                </p>
                <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-light hover:text-gold transition-colors duration-200">
                  Premium Experience Guaranteed
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Individual items checklist */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeCategoryIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {currentCategory.services.map((service) => (
                <div
                  key={service.id}
                  className="p-6 rounded-md border border-white/5 bg-[#0C0C10]/80 hover:bg-[#12121A] hover:border-gold/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.06)] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Flex header */}
                    <div className="flex justify-between items-start gap-4">
                      <div className="p-2.5 rounded bg-purple-dark/50 border border-gold/20 text-gold group-hover:bg-gold/15 group-hover:border-gold transition-colors duration-300">
                        {getItemIcon(service.name, 'w-4.5 h-4.5 text-gold-light group-hover:text-gold')}
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37]/50 border border-gold/15 px-2 py-0.5 rounded-full">
                        Verified Saimaya Match
                      </span>
                    </div>

                    {/* Service Details */}
                    <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-mono mt-4 group-hover:text-gold transition-colors duration-200">
                      {service.name}
                    </h4>
                    <p className="text-gray-400 text-xs mt-2.5 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gold/60" />
                      <span>Approx. {service.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gold-light">
                      <Coins className="w-3.5 h-3.5 text-gold/60" />
                      <span>{service.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* Accordion-Style FAQ Component */}
        <div className="mt-28 border-t border-white/5 pt-16 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-widest font-mono text-gold-light block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-white tracking-widest uppercase mb-4">
              Bridal Package <span className="gradient-text-gold font-normal">Inquiries</span>
            </h3>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
            <p className="text-gray-400 text-xs mt-3 max-w-lg mx-auto font-light leading-relaxed">
              Find answers to the most common questions regarding Saimaya&apos;s award-winning wedding makeup and style masterclasses.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border rounded-md overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? 'border-gold/30 bg-[#140E24]/30 shadow-[0_4px_20px_rgba(212,175,55,0.03)]' 
                      : 'border-white/5 bg-charcoal/20 hover:border-white/10 hover:bg-charcoal/30'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left font-sans text-sm font-medium tracking-wide text-white transition-colors focus:outline-none cursor-pointer"
                  >
                    <span className={`text-xs sm:text-sm font-semibold uppercase tracking-wider font-mono transition-colors duration-300 ${isOpen ? "text-gold" : "text-[#F3EFE0]"}`}>
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 ml-4 p-1.5 rounded-full bg-white/5 text-gold group-hover:bg-white/10 transition-transform">
                      <ChevronDown 
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden bg-[#07070B]/50"
                      >
                        <div className="p-5 border-t border-white/5 text-xs sm:text-[13px] text-gray-300 leading-relaxed font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global callout detail */}
        <div className="mt-16 text-center border-t border-white/5 pt-10">
          <p className="text-xs text-gray-500 tracking-wider uppercase font-mono">
            * All booking consultations, custom pricing configurations, or scheduling slots happen directly at our studio or on standard phone lines.
          </p>
        </div>

      </div>
    </section>
  );
});

export default Services;
