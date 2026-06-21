import React, { useState } from 'react';
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
  Coins
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Services() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="wait">
                {currentCategory.services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
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
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
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
}
