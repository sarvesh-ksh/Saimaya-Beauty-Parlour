import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  MapPin, 
  User, 
  Instagram, 
  Facebook, 
  Sparkles,
  Trophy,
  GraduationCap,
  Sparkle,
  Smile,
  ShieldCheck,
  Building
} from 'lucide-react';
import { motion, useInView } from 'motion/react';

// Counter Sub-component for premium animated counters on view
function Counter({ endValue, suffix = '' }: { endValue: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = endValue;
    if (start === end) {
      setCount(end);
      return;
    }

    const totalDuration = 1500; // ms
    const increment = end / (totalDuration / 16); // ~60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, endValue]);

  return (
    <span ref={ref} className="font-mono text-3xl sm:text-4xl md:text-5xl font-extrabold text-gold tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#09090D] border-t border-white/5 py-24 sm:py-32">
      {/* Decorative Blur beacons */}
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] rounded-full bg-[#3B1C5E]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[350px] h-[350px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      {/* 1. Statistics Section (Integrated) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-gold-light block mb-2">Live Milestones Log</span>
          <h3 className="font-serif text-2xl tracking-widest text-[#FFF] uppercase">
            Artistry in <span className="gradient-text-gold font-normal">Quantum Metrics</span>
          </h3>
          <div className="w-12 h-[1px] bg-gold/50 mx-auto my-3" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Stat 1 */}
          <div className="p-6 rounded-md border border-white/5 bg-luxury-black/60 shadow-md text-center group hover:border-[#D4AF37]/35 transition-all duration-300">
            <div className="mx-auto p-3 w-fit rounded-full bg-purple-dark border border-gold/15 mb-4 group-hover:scale-105 transition-transform duration-300">
              <Trophy className="w-5 h-5 text-gold" />
            </div>
            <div className="block mt-1">
              <Counter endValue={5} suffix="+" />
            </div>
            <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 mt-2 font-mono">
              Years Experience
            </div>
          </div>

          {/* Stat 2 */}
          <div className="p-6 rounded-md border border-white/5 bg-luxury-black/60 shadow-md text-center group hover:border-[#D4AF37]/35 transition-all duration-300">
            <div className="mx-auto p-3 w-fit rounded-full bg-purple-dark border border-gold/15 mb-4 group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="w-5 h-5 text-gold" />
            </div>
            <div className="block mt-1">
              <Counter endValue={500} suffix="+" />
            </div>
            <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 mt-2 font-mono">
              Students Trained
            </div>
          </div>

          {/* Stat 3 */}
          <div className="p-6 rounded-md border border-white/5 bg-luxury-black/60 shadow-md text-center group hover:border-[#D4AF37]/35 transition-all duration-300">
            <div className="mx-auto p-3 w-fit rounded-full bg-purple-dark border border-gold/15 mb-4 group-hover:scale-105 transition-transform duration-300">
              <ShieldCheck className="w-5 h-5 text-gold" />
            </div>
            <div className="block mt-1">
              <Counter endValue={100} suffix="%" />
            </div>
            <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 mt-2 font-mono">
              Practical Learning
            </div>
          </div>

          {/* Stat 4 */}
          <div className="p-6 rounded-md border border-white/5 bg-[#121216]/60 shadow-md text-center group hover:border-[#D4AF37]/35 transition-all duration-300">
            <div className="mx-auto p-3 w-fit rounded-full bg-purple-dark border border-gold/15 mb-4 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-gold" />
            </div>
            <div className="block mt-1">
              <Counter endValue={25} suffix="+" />
            </div>
            <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 mt-2 font-mono">
              Premium Services
            </div>
          </div>
        </div>
      </div>

      {/* 2. Contact Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Tags */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-gold-light block mb-3">
            STUDIO LOCATION &amp; HOURS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-widest uppercase mb-4">
            Connect With <span className="gradient-text-gold font-normal">Saimaya</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold/50 mx-auto my-4" />
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto font-light">
            We operate out of Sinnar, Maharashtra. Connect with us on standard channels for bridal consultations, makeup bookings, and academy admissions.
          </p>
        </div>

        {/* Master Showcase Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-md border border-white/10 bg-[#0E0E14] p-8 sm:p-12 shadow-2xl">
            {/* Ambient Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[40px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-royal/5 blur-[60px] pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              
              {/* Company Identity Detail */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 sm:p-2.5 rounded bg-purple-dark border border-gold/30 text-gold">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg tracking-widest text-white uppercase leading-tight">
                      Saimaya Parlour &amp; Academy
                    </h3>
                    <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-gold-light mt-0.5">
                      Sinnar, Maharashtra
                    </p>
                  </div>
                </div>

                {/* Substantive address cards */}
                <div className="space-y-6 pt-4 border-t border-white/5">
                  
                  {/* Lead Operator */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-purple-dark text-gold border border-gold/15 rounded">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 block">Owner / Lead Stylist</span>
                      <strong className="text-white text-sm block mt-0.5 font-normal">Maya Salke</strong>
                      <span className="text-gray-400 text-xs font-light block">Professional Makeup Artist (5+ Years Exp)</span>
                    </div>
                  </div>

                  {/* Telephone details */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-purple-dark text-gold border border-gold/15 rounded">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 block">Direct Enquiries Line</span>
                      <strong className="text-white text-sm block mt-0.5 font-normal">+91 77580 71664</strong>
                      <span className="text-gray-400 text-xs font-light block">9:00 AM - 9:00 PM (Monday - Sunday)</span>
                    </div>
                  </div>

                  {/* Physical location */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-purple-dark text-gold border border-gold/15 rounded">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 block">Physical Atelier Location</span>
                      <strong className="text-white text-sm block mt-0.5 font-normal">Sinner, Maharashtra, India</strong>
                      <span className="text-gray-400 text-xs font-light block">Sinnar Bypass, Nashik District Region</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Operating Hours and active social connections details */}
              <div className="flex flex-col justify-between p-6 sm:p-8 rounded-md bg-purple-dark/20 border border-white/5 relative">
                
                <div>
                  <h4 className="text-white text-xs font-semibold uppercase tracking-wider font-mono flex items-center gap-2 mb-4">
                    <Sparkle className="w-4 h-4 text-gold" style={{ animationDuration: '4s' }} /> Operating Timings
                  </h4>
                  <ul className="space-y-2.5 font-sans text-xs text-gray-300">
                    <li className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-gray-400">Regular Days (Mon - Sun):</span>
                      <strong className="text-gold-light font-medium">9:00 AM - 9:00 PM</strong>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-gray-400">Bridal Dressing hours:</span>
                      <strong className="text-gold-light font-medium">Early Mornings (By Appt)</strong>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Course Batches:</span>
                      <strong className="text-purple-royal/20 bg-purple-royal/10 text-white font-mono uppercase text-[9px] px-2 py-0.5 rounded tracking-widest font-semibold border border-[#7A33FF]/30">ACTIVE PROGRAM</strong>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <h4 className="text-white text-xs font-semibold uppercase tracking-wider font-mono mb-4">
                    Official Social Networks
                  </h4>
                  
                  <div className="flex gap-3">
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/saimaya_parlour_sinnar/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex-1 flex justify-center items-center gap-2 py-3 rounded bg-[#1C1226]/50 border border-[#7A33FF]/40 text-gray-300 hover:text-white hover:border-[#7A33FF] transition-all duration-300 hover:scale-[1.02]"
                    >
                      <Instagram className="w-4 h-4 text-[#7A33FF]" />
                      <span className="text-[10px] font-mono uppercase tracking-widest">Instagram</span>
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/people/Saimaya-Parlour-Academy-Nashik/61587230048611/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex-1 flex justify-center items-center gap-2 py-3 rounded bg-[#111116]/80 border border-gold/20 text-gray-300 hover:text-white hover:border-gold transition-all duration-300 hover:scale-[1.02]"
                    >
                      <Facebook className="w-4 h-4 text-gold" />
                      <span className="text-[10px] font-mono uppercase tracking-widest">Facebook</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
