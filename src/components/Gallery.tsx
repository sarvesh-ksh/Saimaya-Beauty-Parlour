import React, { useState } from 'react';
import { GALLERY_DATA, GalleryItem } from '../types';
import { Sparkles, Eye, Grid } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { label: 'All Works', id: 'all' },
    { label: 'Bridal Looks', id: 'bridal' },
    { label: 'HD Makeup', id: 'hd-makeup' },
    { label: 'Student Training', id: 'training' },
    { label: 'Transformations', id: 'transformations' },
    { label: 'Hair Styling', id: 'hair' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#08080C] border-t border-white/5">
      {/* Decorative Orbs */}
      <div className="absolute top-[40%] left-0 w-[400px] h-[400px] rounded-full bg-[#1A0F2B]/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-0 w-[350px] h-[350px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-gold-light block mb-3">
            SAIMAYA VISUAL EXHIBITION
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-widest uppercase mb-4">
            Aesthetic <span className="gradient-text-gold font-normal">Lookbook</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold/50 mx-auto my-4" />
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto font-light">
            Flip through real client portfolios, traditional makeovers, and intense classroom workshops. Structured to demonstrate honest excellence.
          </p>
        </div>

        {/* Filter List - Centered & Horizontal with smooth scroll on mobile */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex gap-2 p-1.5 rounded-full border border-white/5 bg-charcoal/40 backdrop-blur-md max-w-full overflow-x-auto no-scrollbar scroll-smooth px-4 py-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 rounded-full text-[10px] sm:text-xs uppercase tracking-widest font-mono transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeFilter === filter.id
                    ? 'bg-[#D4AF37] text-luxury-black font-semibold shadow-[0_4px_15px_rgba(212,175,55,0.3)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (Creative Staggered Layout) */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative rounded-md overflow-hidden border border-white/5 bg-charcoal group shadow-lg"
              >
                {/* Image element */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[500px] transition-transform duration-700 group-hover:scale-103 filter brightness-95"
                />

                {/* Ambient dark bottom card display */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6" />

                {/* Overlying Details */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-1 px-2.5 rounded bg-gold/20 border border-gold/40 text-gold text-[8px] uppercase tracking-widest font-mono">
                      {item.category.replace('-', ' ')}
                    </span>
                    <span className="text-[9px] text-gray-400 uppercase tracking-widest font-mono">
                      | Live Look
                    </span>
                  </div>
                  <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-serif">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-[11px] leading-relaxed font-light mt-1.5">
                    {item.description}
                  </p>
                </div>

                {/* Delicate decorative zoom/hover glyph in center */}
                <div className="absolute top-4 right-4 p-2.5 rounded-full border border-white/15 bg-luxury-black/70 text-gold opacity-100 group-hover:bg-[#7A33FF]/30 group-hover:border-gold transition-all duration-300 z-10 cursor-pointer pointer-events-none">
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Ready for real uploads overlay info */}
        <div className="mt-16 bg-[#110C1B]/35 border border-[#D4AF37]/15 p-5 rounded-md flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-md bg-gold/10 text-gold flex-shrink-0">
              <Eye className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-white uppercase tracking-wider block">Portfolios ready for live updates</span>
              <span className="text-[11px] text-gray-400 font-light block mt-0.5">Asset placeholders are easily swappable with authentic raw wedding shoots and student batch certifications.</span>
            </div>
          </div>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                window.scrollTo({
                  top: element.offsetTop - 85,
                  behavior: 'smooth',
                });
              }
            }}
            className="text-[10px] uppercase font-mono tracking-widest px-4 py-2 border border-[#D4AF37]/30 text-gold hover:bg-gold hover:text-black transition-colors duration-300 rounded"
          >
            Request Catalog
          </button>
        </div>

      </div>
    </section>
  );
}
