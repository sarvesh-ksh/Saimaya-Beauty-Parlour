import React from 'react';
import { Instagram, Facebook, Mail, ArrowUp } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 85,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative bg-[#050505] border-t border-[#D4AF37]/15 pt-20 pb-10 overflow-hidden">
      {/* Decorative light elements */}
      <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] rounded-full bg-[#7A33FF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-[10%] w-[250px] h-[250px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/5">
          
          {/* Column 1: Editorial description of brand */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <div className="flex items-center gap-2.5 cursor-pointer group mb-6" onClick={() => handleScrollTo('home')}>
              <Logo className="w-12 h-12 transition-transform duration-300 group-hover:scale-105" variant="gold" showText={false} />
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-widest text-white uppercase leading-none">
                  Saimaya
                </span>
                <span className="text-[9px] tracking-widest font-mono text-gold-light uppercase mt-1 leading-none">
                  Makeup Parlour &amp; Academy
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs font-light leading-relaxed mb-6 font-sans">
              The premier beauty atelier and student vocational certification destination in Sinnar. Helping brides achieve luminous, flawless confidence, and mentoring aspiring female beauticians onto profitable, self-reliant business trajectories.
            </p>

            {/* Social Circle Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/saimaya_parlour_sinnar/"
                target="_blank"
                rel="noreferrer noopener"
                className="p-2.5 rounded border border-white/15 hover:border-[#7A33FF] bg-charcoal text-gray-400 hover:text-white transition-all duration-350"
                aria-label="Instagram Page"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/people/Saimaya-Parlour-Academy-Nashik/61587230048611/"
                target="_blank"
                rel="noreferrer noopener"
                className="p-2.5 rounded border border-white/15 hover:border-gold bg-charcoal text-gray-400 hover:text-white transition-all duration-350"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Map */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xs uppercase tracking-widest font-mono text-gold font-bold mb-6">Explore Saimaya</h4>
            <ul className="space-y-3 text-xs text-gray-400 font-sans">
              {[
                { label: 'Introduction', ref: 'about' },
                { label: 'Services Catalogue', ref: 'services' },
                { label: 'Academy Syllabus', ref: 'academy' },
                { label: 'Our Credentials', ref: 'why-us' },
                { label: 'Exhibition Gallery', ref: 'gallery' },
                { label: 'Client Reviews', ref: 'testimonials' },
                { label: 'Consultation', ref: 'contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleScrollTo(link.ref)}
                    className="hover:text-gold hover:translate-x-1 duration-300 transition-all text-left cursor-pointer font-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services catalogue quick list */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs uppercase tracking-widest font-mono text-gold font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-xs text-gray-400 font-sans font-light">
              <li>• Bridal Sig, HD &amp; Airbrush Makeovers</li>
              <li>• Creative Saree Drapings</li>
              <li>• Evening Party &amp; Engagement Looks</li>
              <li>• Chemical Hair Protein Systems</li>
              <li>• Advanced Keratin Treatment</li>
              <li>• Rejuvenating Hydra Facials</li>
              <li>• Nail Aesthetics &amp; Mehendi Art</li>
            </ul>
          </div>

          {/* Column 4: Academics quick links */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs uppercase tracking-widest font-mono text-gold font-bold mb-6">Academy Syllabus</h4>
            <ul className="space-y-3 text-xs text-gray-400 font-sans font-light">
              <li>• Professional Makeup Diploma (3 Months)</li>
              <li>• Bridal Masterclass &amp; Artistry (2 Months)</li>
              <li>• End-to-End Parlour Operations (6 Months)</li>
              <li>• Skin Diagnostics &amp; Facial Therapies</li>
              <li>• Free Student Standard Starter Kits</li>
              <li>• Live Model Portfolio Photoshoots</li>
            </ul>
          </div>

        </div>

        {/* Closing details & Copyright footer credits */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-gray-500 font-mono tracking-wider w-full">
          <div className="text-center md:text-left flex flex-wrap justify-center md:justify-start gap-x-2 gap-y-1">
            <span>&copy; {new Date().getFullYear()} Saimaya Makeup Parlour &amp; Academy.</span>
            <span className="hidden sm:inline">|</span>
            <span>Managed by Maya Salke.</span>
            <span className="hidden md:inline">|</span>
            <span className="text-gold-light">Elegant Human Design Layout.</span>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/5 bg-charcoal hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 font-semibold cursor-pointer"
          >
            TOP
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
