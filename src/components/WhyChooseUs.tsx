import React from 'react';
import { 
  Trophy, 
  Coins, 
  Sparkles, 
  GraduationCap, 
  PackageCheck, 
  Users2, 
  HeartHandshake, 
  Layers 
} from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: '5+ Years Experience',
      icon: Trophy,
      description: 'Led by seasoned artist Maya Salke, possessing unparalleled experience in delivering high-fashion bridal designs in Sinner.',
    },
    {
      title: 'Quality Within Budget',
      icon: Coins,
      description: 'Exquisite bridal makeovers and complex skin treatments priced optimization-friendly to deliver high luxury affordably.',
    },
    {
      title: 'Personalized Support',
      icon: Sparkles,
      description: 'Tailoring customized skin analysis, customized styling, and 1-on-1 academy consultation paths.',
    },
    {
      title: 'Professional Training',
      icon: GraduationCap,
      description: 'Structured comprehensive curriculums enabling local women to become self-reliant, certified business owners.',
    },
    {
      title: 'Premium Products',
      icon: PackageCheck,
      description: 'Exclusively authentic, high-end global makeup brands (MAC, Huda Beauty, Forever 52, Kryolan) protecting your skin daily.',
    },
    {
      title: 'Trusted By Students',
      icon: Users2,
      description: 'Fulfilling independent career ambitions for 500+ girls who have established successful parlours.',
    },
    {
      title: 'Trusted By Brides',
      icon: HeartHandshake,
      description: 'Immense satisfaction sheets and flawless, waterproof, transfer-proof memories for hundreds of families.',
    },
    {
      title: 'Practical Environment',
      icon: Layers,
      description: 'A custom, spacious, bright simulation workspace with professional vanity mirrors and studio strobe lights.',
    },
  ];

  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-luxury-black border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-[10%] right-[15%] w-[300px] h-[300px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[15%] w-[350px] h-[350px] rounded-full bg-[#1A0F2B]/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest font-mono text-gold-light block mb-3">
            THE SAIMAYA DIFFERENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-widest uppercase">
            Signature <span className="gradient-text-gold font-normal">Sovereignty Matrix</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold/50 mx-auto my-4" />
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto font-light">
            We don&apos;t just paint faces or hand out diplomas. We foster confidence, teach true professional-grade artistry, and secure local dreams.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative p-6 rounded-md border border-white/5 bg-[#0D0D11]/90 hover:border-gold/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.06)] transition-all duration-500 overflow-hidden"
              >
                {/* Micro corner hover highlight element */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-tr from-transparent via-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Container */}
                <div className="w-12 h-12 flex items-center justify-center rounded-md border border-gold/15 bg-purple-dark text-gold group-hover:border-gold group-hover:bg-gold/15 group-hover:scale-105 transition-all duration-300 mb-6">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h4 className="text-white text-xs font-semibold uppercase tracking-wider font-mono">
                  {reason.title}
                </h4>

                <p className="text-gray-400 text-xs mt-3 leading-relaxed font-light font-sans">
                  {reason.description}
                </p>

                {/* Subtle bottom detail line */}
                <div className="absolute bottom-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/20 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Quote Grid or Footer Stat banner */}
        <div className="mt-20 border border-white/5 bg-[#121218]/40 p-8 rounded-md text-center max-w-4xl mx-auto flex flex-col items-center justify-center relative">
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/30 rounded-tl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/30 rounded-br" />
          
          <p className="font-serif italic text-base sm:text-lg text-gold-light tracking-wide max-w-2xl leading-relaxed">
            &ldquo;There is an immense satisfaction in seeing our brides step into positive marital chapters radiating pure joy, and seeing our student graduates write their own economic destinies.&rdquo;
          </p>
          <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 mt-4">- Maya Salke, Founder</span>
        </div>

      </div>
    </section>
  );
}
