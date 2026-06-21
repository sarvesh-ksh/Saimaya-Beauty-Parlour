import React, { useState } from 'react';
import { TESTIMONIALS_DATA, Testimonial } from '../types';
import { Star, MessageSquareQuote, ChevronRight, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { label: 'All Reviews', id: 'all' },
    { label: 'Happy Brides', id: 'Bridal' },
    { label: 'Beauty Services', id: 'Beauty Service' },
    { label: 'Academy Students', id: 'Student' },
  ];

  const filteredReviews = activeTab === 'all'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter(t => t.role === activeTab);

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-[#050505] border-t border-white/5">
      {/* Glow */}
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] rounded-full bg-[#3B1C5E]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[350px] h-[350px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-gold-light block mb-3">
            SAIMAYA COMMUNITY VERDICT
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-widest uppercase mb-4">
            Voices of <span className="gradient-text-gold font-normal">Transformation</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold/50 mx-auto my-4" />
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto font-light">
            Real feedback from Sinnar brides who glowed during their pheras, beauty seekers seeking professional skin nourishment, and student grads running their own businesses.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded border text-[10px] sm:text-xs uppercase tracking-widest font-mono transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? 'border-gold bg-gold/10 text-gold shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                  : 'border-white/5 bg-charcoal/40 text-gray-400 hover:text-white hover:border-white/15'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((rev, index) => (
              <motion.div
                layout
                key={rev.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative p-8 rounded-md border border-white/5 bg-[#0A0A0F]/90 hover:border-gold/30 hover:bg-[#111116] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Quote Icon Background ornament */}
                <div className="absolute top-6 right-6 text-gold/10 pointer-events-none">
                  <MessageSquareQuote className="w-10 h-10" />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1.5 mb-5 text-gold">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Core Content */}
                  <blockquote className="text-gray-300 text-xs sm:text-sm font-sans leading-relaxed font-light italic">
                    &ldquo;{rev.content}&rdquo;
                  </blockquote>
                </div>

                {/* Profile Details at footer */}
                <div className="mt-8 pt-6 border-t border-white/5 flex gap-4 items-center">
                  <div className="p-3 bg-purple-dark/50 border border-gold/15 rounded-full text-gold">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-white text-xs font-semibold uppercase tracking-wider font-mono">
                      {rev.name}
                    </h5>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-gold-light uppercase tracking-widest font-mono">
                        {rev.role} Client
                      </span>
                      <span className="text-[9px] text-gray-500 font-mono">
                        | {rev.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Quality Commitment bottom stamp */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-charcoal/40 text-gray-500 text-[10px] uppercase tracking-widest font-mono">
            ★ All ratings are genuine google review and classroom feedback records
          </div>
        </div>

      </div>
    </section>
  );
}
