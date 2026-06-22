import React, { memo } from 'react';
import { Sparkles, Check, Heart, Trophy, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'motion/react';

const About = memo(function About() {
  const highlights = [
    {
      title: 'Passion for Beauty',
      icon: Heart,
      description: 'Striving to reveal every client\'s unique story through exquisite brush precision and aesthetic balance.',
    },
    {
      title: 'Personalized Consultations',
      icon: Sparkles,
      description: 'Analyze skin chemistry, lifestyle, and occasion theme before applying even a single coat of primer.',
    },
    {
      title: 'Quality Within Budget',
      icon: ShieldCheck,
      description: 'Bridging the luxury makeup gap in Sinnar by introducing premium international brands at affordable rates.',
    },
    {
      title: 'Professional Mentorship',
      icon: Trophy,
      description: 'Empowering young local women with job-ready certifications to establish state-approved business setups.',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-[#0A0A0A] border-t border-white/5">
      {/* Decorative blurry purple/gold gradient orbs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-[#3B1C5E]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column 1: Layered Creative Images Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Outer Golden Accents */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold/40 pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold/40 pointer-events-none" />

              {/* Main Image Frame (Maya Salke profile representation) */}
              <div className="relative rounded-md overflow-hidden border border-white/10 shadow-2xl group bg-[#111116]">
                <img
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000"
                  alt="Elite artist Maya Salke at work"
                  className="w-full h-[480px] object-cover filter brightness-[0.95] contrast-[1.05] transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Dark rich overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-transparent opacity-90" />
                
                {/* Corner floating stats badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-md border border-gold/30 bg-purple-dark/80 backdrop-blur-md">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-gold/15 text-gold flex-shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xl font-bold font-serif text-white leading-none">Maya Salke</div>
                      <div className="text-xs text-gold-light tracking-wider font-mono uppercase mt-1">Founder &amp; Chief Creative</div>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-300 mt-3 font-light leading-relaxed">
                    &ldquo;My philosophy is simple: Makeup is not about changing your face; it is about amplifying the art that already sleeps within.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Content & Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            
            {/* Header tags */}
            <span className="text-xs uppercase tracking-widest font-mono text-gold-light mb-3 block">
              ESTABLISHED IN SINNAR | 5+ YEARS OF ARTISTRY
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-widest uppercase leading-tight">
              A Legacy of <br />
              <span className="gradient-text-gold">Sovereign Elegance</span>
            </h2>
            <div className="w-20 h-[1.5px] bg-gold/50 my-6" />

            <p className="text-gray-300 text-sm leading-relaxed font-sans mb-6 font-light">
              Founded by acclaimed stylist <strong>Maya Salke</strong>, Saimaya Makeup Parlour &amp; Academy has stood as a beacon of unmatched cosmetic design in Sinnar, Maharashtra, for over half a decade. 
            </p>
            
            <p className="text-gray-400 text-sm leading-relaxed font-sans mb-10 font-light">
              Whether curating head-turning HD makeups for modern Maharashtrian brides, restoring scalp integrity with professional nano-keratins, or leading our academy of aspiring beauty specialists, Saimaya fuses traditional warmth with international professional grade standards. We believe real luxury exists globally but resonates locally, matching every treatment to your specific budget structure.
            </p>

            {/* Highlights Grid with custom layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-md border border-white/5 bg-[#121217]/60 hover:bg-[#16161E]/80 hover:border-gold/30 transition-all duration-300"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="p-2.5 rounded-md bg-purple-dark border border-gold/15 text-gold flex-shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-white text-xs font-semibold uppercase tracking-wider font-mono">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-xs mt-1.5 leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Academy Quick Stats */}
            <div className="mt-10 p-5 rounded-md border-glow-gold bg-gradient-to-r from-purple-dark/40 to-transparent flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37]/80 block">Looking to secure a stable career?</span>
                <span className="text-sm font-sans font-medium text-white block mt-0.5">Explore our state-recognized professional styling courses.</span>
              </div>
              <button
                onClick={() => {
                  const element = document.getElementById('academy');
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 85,
                      behavior: 'smooth',
                    });
                  }
                }}
                className="px-6 py-2.5 rounded border border-gold bg-gold/10 hover:bg-gold text-white hover:text-black font-semibold uppercase text-[10px] tracking-widest transition-all duration-300"
              >
                Learn to Earn
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
});

export default About;
