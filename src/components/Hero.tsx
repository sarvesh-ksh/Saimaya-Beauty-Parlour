import React from 'react';
import { Sparkles, ArrowDown, Award, GraduationCap, Calendar, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 85; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#020202]">
      {/* Immersive Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Maharashtrian/Indian Bridal Artistry Background"
          className="w-full h-full object-cover object-center opacity-25 scale-105 filter brightness-[0.6] contrast-[1.15] saturate-[0.8]"
        />
        {/* Layered luxury gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-[#0F0A1C]/60 to-luxury-black" />
        {/* Subtle royal purple beacon in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-[#7A33FF]/10 blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main content column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            {/* Elegant tiny floating tag */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="inline-flex self-center lg:self-start items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-purple-dark/60 backdrop-blur-md text-gold text-xs tracking-widest uppercase mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Sinnar&apos;s Elite Beauty Destination</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-tight uppercase"
            >
              Where Beauty <br className="hidden sm:inline" />
              Meets <span className="gradient-text-gold font-normal">Artistry</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Professional Bridal Makeup, premium beauty treatments, and certified makeup development academy in Sinnar. Nurtured by <span className="text-gold font-normal">Maya Salke</span>, establishing exquisite benchmarks in luxury cosmetic design.
            </motion.p>

            {/* Action buttons with high density visual styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => handleScrollTo('services')}
                className="group relative px-8 py-4 rounded-md overflow-hidden bg-gradient-to-r from-gold/90 to-gold-dark/90 text-luxury-black font-semibold uppercase tracking-widest text-xs transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02]"
              >
                Explore Services
              </button>
              <button
                onClick={() => handleScrollTo('academy')}
                className="px-8 py-4 rounded-md border border-gold/30 bg-purple-dark/20 hover:bg-gold/10 text-white font-semibold uppercase tracking-widest text-xs transition-all duration-300 hover:border-gold"
              >
                Join the Academy
              </button>
            </motion.div>
          </div>

          {/* Elegant Visual Card Display - Right Side */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative w-full max-w-[420px]"
            >
              {/* Outer decorative gold frame */}
              <div className="absolute inset-4 -right-1 -bottom-4 border-2 border-gold/25 rounded-md -z-10 pointer-events-none" />
              
              {/* Main content box */}
              <div className="relative overflow-hidden rounded-md border border-white/10 bg-[#0c0c11]/80 backdrop-blur-md p-6 sm:p-8 shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-royal/10 blur-[40px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/5 blur-[50px] pointer-events-none" />
                
                <h3 className="font-serif text-2xl text-white tracking-wide uppercase mb-6 border-b border-white/5 pb-4">
                  Excellence Ledger
                </h3>

                {/* Vertical features */}
                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 p-3 rounded-md bg-purple-dark border border-gold/30 text-gold">
                      <Star className="w-5 h-5 fill-gold" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-mono">5+ Years Experience</h4>
                      <p className="text-gray-400 text-xs mt-1">Lead by senior designer Maya Salke, trusted by hundreds of families.</p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 p-3 rounded-md bg-purple-dark border border-gold/30 text-gold">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-mono">500+ Students Trained</h4>
                      <p className="text-gray-400 text-xs mt-1">Mentored with practical modern techniques to become independent parlor operators.</p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 p-3 rounded-md bg-purple-dark border border-gold/30 text-gold">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-mono">Certified Academy</h4>
                      <p className="text-gray-400 text-xs mt-1">Syllabus aligning to professional certification standards with complete career starter kits.</p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 p-3 rounded-md bg-purple-dark border border-gold/30 text-gold">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-mono">Certified Courses Available</h4>
                      <p className="text-gray-400 text-xs mt-1">Flexible 2, 3, and 6-month systems optimized for full professional career tracks.</p>
                    </div>
                  </div>
                </div>

                {/* Subtle trust badge */}
                <div className="mt-8 pt-6 border-t border-white/5 text-center flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-wider text-gold-light">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                  AUTHENTIC | HIGHLY TRUSTED BRAND
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Floating scroll down indicator */}
        <div className="mt-16 flex justify-center">
          <motion.button
            onClick={() => handleScrollTo('about')}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37]/60 hover:text-gold transition-colors duration-200 cursor-pointer"
          >
            Scroll to uncover Saimaya
            <ArrowDown className="w-4 h-4 text-gold" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
