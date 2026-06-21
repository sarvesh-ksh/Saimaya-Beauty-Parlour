import React, { useState } from 'react';
import { COURSES_DATA, Course } from '../types';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Briefcase, 
  Gift, 
  Camera, 
  CheckCircle2, 
  Calendar, 
  Users, 
  Clock, 
  Globe2 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Academy() {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);

  const perks = [
    {
      title: 'Govt & ISO-Friendly Certification',
      icon: Award,
      description: 'Acquire standard valid credentials highly recognized across Maharashtra state beauty chambers.',
    },
    {
      title: 'Full Free Professional Starter Kit',
      icon: Gift,
      description: 'Receive eyeshadow palettes, premium contour kits, brush sleeves, and lash setups worth ₹15,000.',
    },
    {
      title: '100% Practical Sessions',
      icon: BookOpen,
      description: 'Zero theoretical bloat. Learn by touching, blending, mapping, and styling real live clients.',
    },
    {
      title: 'Portfolio Development support',
      icon: Camera,
      description: 'Graduate with professional, high-definition model shoots directed with Maya Salke\'s supervision.',
    },
    {
      title: 'Placement & Internship Assistance',
      icon: Briefcase,
      description: 'Gain immediate opportunities to shadow senior artists at real high-budget wedding venues.',
    },
    {
      title: 'Business Setup Mentorship',
      icon: Globe2,
      description: 'Complete lessons on licensing, initial product sourcing wholesalers, and social branding.',
    },
  ];

  const currentCourse = COURSES_DATA[selectedCourseIndex];

  return (
    <section id="academy" className="relative py-24 sm:py-32 bg-[#08080C] border-t border-white/5">
      {/* Decorative Orbs */}
      <div className="absolute top-[30%] left-0 w-[450px] h-[450px] rounded-full bg-[#7A33FF]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-0 w-[400px] h-[405px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Metric banner featuring Student achievements */}
        <div className="relative overflow-hidden rounded-md border-glow-gold bg-gradient-to-r from-purple-dark via-purple-deep to-luxury-black p-8 sm:p-12 mb-20">
          <div className="absolute inset-0 bg-luxury-noise opacity-30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[60px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-mono uppercase tracking-widest mb-4">
                <Users className="w-3.5 h-3.5 animate-pulse" /> Saimaya Academy Ecosystem
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white tracking-widest uppercase">
                Empowering Next-Gen beauty leaders
              </h3>
              <p className="text-gray-300 text-sm font-light leading-relaxed mt-4 max-w-2xl">
                We believe beauty education shouldn&apos;t be a luxury. With over <strong className="text-gold font-normal">500+ successful female students trained</strong> from Sinnar, Nashik, and Sangamner, we help turn domestic passion into powerful financial independence. Certified, structured, and entirely hands-on.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex justify-center text-center">
              <div className="relative p-6 px-10 rounded border border-white/10 bg-luxury-black/60 shadow-lg min-w-[200px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-[#7A33FF]/20 blur-[30px] rounded-full -z-10" />
                <div className="text-4xl sm:text-5xl font-mono font-bold text-gold-light tracking-tight">500+</div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-gray-400 mt-2">Graduated Stylists</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-gold-light block mb-3">
            ACADEMY CURRICULUM &amp; ENROLLMENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-widest uppercase">
            Signature <span className="gradient-text-gold font-normal">Certification Tracks</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold/50 mx-auto my-4" />
        </div>

        {/* Courses selector and Course Detail Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Course select menu (sidebar) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {COURSES_DATA.map((course, idx) => (
              <button
                key={course.id}
                onClick={() => setSelectedCourseIndex(idx)}
                className={`w-full p-6 text-left rounded-md border transition-all duration-300 flex flex-col justify-between relative cursor-pointer overflow-hidden ${
                  selectedCourseIndex === idx
                    ? 'border-gold bg-[#120F24] border-glow-purple'
                    : 'border-white/5 bg-[#0C0C10] hover:bg-charcoal hover:border-white/10'
                }`}
              >
                {/* Custom top corner glowing block */}
                {selectedCourseIndex === idx && (
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gold" />
                )}

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-gold-light uppercase bg-purple-dark/80 px-2.5 py-0.5 rounded border border-gold/20">
                    Duration: {course.duration}
                  </span>
                  <Clock className="w-4 h-4 text-gold/60" />
                </div>
                
                <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-mono mt-4 leading-snug">
                  {course.title}
                </h4>
                
                <p className="text-gray-400 text-xs mt-2 line-clamp-2 font-light">
                  {course.description}
                </p>
                
                <div className="mt-4 flex items-center justify-end text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] hover:text-gold">
                  <span>View Full Syllabus &rarr;</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Course detailed view */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCourse.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="rounded-md border border-white/10 bg-[#0E0E14] overflow-hidden"
              >
                {/* Banner with course representation overlay */}
                <div className="relative h-48 sm:h-64 object-cover overflow-hidden">
                  <img
                    src={currentCourse.bannerImage}
                    alt={currentCourse.title}
                    className="w-full h-full object-cover filter brightness-[0.4] scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E14] via-[#0E0E14]/70 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-dark/80 to-transparent pointer-events-none" />
                  
                  {/* Floating duration tag */}
                  <div className="absolute bottom-6 left-6 sm:left-8 flex items-center gap-2">
                    <div className="p-2 bg-gold/20 border border-gold/40 rounded text-gold backdrop-blur-md">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-widest text-gold-light">Enrolment Slot Open</div>
                      <div className="text-sm font-semibold text-white tracking-wider uppercase font-mono">{currentCourse.duration} Immersive Program</div>
                    </div>
                  </div>
                </div>

                {/* Main detail specifications */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-serif text-2xl uppercase tracking-widest text-white mb-4">
                    {currentCourse.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-sans mb-8 leading-relaxed font-light">
                    {currentCourse.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/5 pt-8">
                    {/* Topics covered */}
                    <div>
                      <h5 className="text-xs uppercase tracking-wider text-gold-light font-bold font-mono mb-4 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Comprehensive Syllabus Electives
                      </h5>
                      <ul className="space-y-3 font-sans text-xs text-gray-400">
                        {currentCourse.topics.map((topic, i) => (
                          <li key={i} className="flex gap-2.5 items-start">
                            <span className="text-purple-royal flex-shrink-0 mt-0.5">•</span>
                            <span className="leading-snug">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Course highlights */}
                    <div className="bg-purple-dark/20 p-5 rounded border border-white/5">
                      <h5 className="text-xs uppercase tracking-wider text-gold-light font-bold font-mono mb-4 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Program Benefits &amp; Perks
                      </h5>
                      <ul className="space-y-3 font-sans text-xs text-gray-300">
                        {currentCourse.features.map((feat, i) => (
                          <li key={i} className="flex gap-2.5 items-start">
                            <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Core Perks & Benefits grid board */}
        <div className="border-t border-white/5 pt-20">
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono uppercase tracking-widest text-gold-light block mb-2">Student Benefits Bundle</span>
            <h4 className="font-serif text-xl tracking-wider text-white uppercase">Why Our Students Excel</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => {
              const IconComp = perk.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-md border border-white/5 bg-[#0A0A0E] hover:border-gold/25 transition-all duration-300 group"
                >
                  <div className="p-3 bg-purple-dark/50 border border-gold/15 group-hover:border-gold/40 text-gold rounded-md w-fit mb-5">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h5 className="text-white text-xs font-semibold uppercase tracking-wider font-mono">
                    {perk.title}
                  </h5>
                  <p className="text-gray-400 text-xs mt-3 leading-relaxed font-light">
                    {perk.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
