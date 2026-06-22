import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Academy', target: 'academy' },
    { label: 'Why Us', target: 'why-us' },
    { label: 'Gallery', target: 'gallery' },
    { label: 'Reviews', target: 'testimonials' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 85; // header height
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-luxury-black/90 backdrop-blur-xl border-[#D4AF37]/20 py-3 shadow-lg'
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <div 
              onClick={() => handleScrollTo('home')}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <Logo className="w-11 h-11 transition-transform duration-300 group-hover:scale-105" variant="gold" showText={false} />
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl tracking-widest text-[#FFF] uppercase group-hover:text-gold transition-colors duration-300 leading-tight">
                  Saimaya
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-widest font-mono text-gold-light uppercase leading-none">
                  Makeup Parlour &amp; Academy
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => handleScrollTo(item.target)}
                  className={`text-xs uppercase tracking-widest transition-colors duration-300 font-medium cursor-pointer relative py-2 ${
                    activeSection === item.target
                      ? 'text-gold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.target && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Social handles in header */}
            <div className="hidden lg:flex items-center gap-4 border-l border-white/10 pl-6">
              <a
                href="https://www.instagram.com/saimaya_parlour_sinnar/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-gray-400 hover:text-gold transition-colors duration-300"
                aria-label="Instagram Page"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/people/Saimaya-Parlour-Academy-Nashik/61587230048611/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-gray-400 hover:text-gold transition-colors duration-300"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 px-2 rounded-md border border-[#D4AF37]/30 bg-purple-dark/20 text-gold hover:bg-purple-dark/50 hover:text-white transition-all duration-300"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Luxury Overlay Style) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-luxury-black/98 backdrop-blur-2xl flex flex-col justify-center lg:hidden"
          >
            {/* Elegant corner glowing patterns */}
            <div className="absolute top-1/4 right-[10%] w-[300px] h-[300px] rounded-full bg-[#7A33FF]/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-[10%] w-[300px] h-[300px] rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

            <div className="max-w-lg mx-auto w-full px-6 flex flex-col items-center">
              <div className="flex flex-col items-center mb-10 text-center">
                <Logo className="w-28 h-28 mb-3" variant="gold" showText={true} />
                <div className="w-16 h-[1px] bg-gold/30 mt-4" />
              </div>

              <div className="flex flex-col items-center gap-6 w-full mb-12">
                {navItems.map((item, index) => (
                  <motion.button
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.target}
                    onClick={() => handleScrollTo(item.target)}
                    className="text-sm tracking-widest uppercase font-medium text-gray-200 hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-6">
                <a
                  href="https://www.instagram.com/saimaya_parlour_sinnar/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-3 rounded-full border border-gold/20 bg-charcoal text-gold hover:text-white transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/people/Saimaya-Parlour-Academy-Nashik/61587230048611/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-3 rounded-full border border-gold/20 bg-charcoal text-gold hover:text-white transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
