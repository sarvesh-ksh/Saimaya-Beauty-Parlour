import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Academy from './components/Academy';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'academy', 'why-us', 'gallery', 'testimonials', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -45% 0px',
      threshold: 0.05,
    };

    const activeSectionsState: { [key: string]: boolean } = {};

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        activeSectionsState[entry.target.id] = entry.isIntersecting;
      });

      // Find the first intersecting section in order
      const firstActive = sections.find((id) => activeSectionsState[id]);
      if (firstActive) {
        setActiveSection(firstActive);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-luxury-black text-[#F3EFE0] font-sans antialiased overflow-x-hidden selection:bg-gold/30 selection:text-white">
      {/* Absolute top glowing backdrop glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[500px] bg-gradient-to-b from-[#7A33FF]/10 via-[#D4AF37]/2 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* 1. Header Navigation Grid */}
      <Header activeSection={activeSection} />

      {/* 2. Main Content Core Stream */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Academy Section */}
        <Academy />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Gallery Section */}
        <Gallery />

        {/* Testimonials Review Board */}
        <Testimonials />

        {/* Statistics & Physical Contact Info */}
        <Contact />
      </main>

      {/* 3. Footer Brand Matrix */}
      <Footer />
    </div>
  );
}
