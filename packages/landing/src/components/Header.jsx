import React, { useState, useEffect, useCallback } from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-md py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer relative">
            <img src={logo} alt="RE-LIFE Logo" className="h-12 group-hover:scale-110 transition-all duration-300" />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-lg bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Bottom accent line animation */}
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-transparent group-hover:w-32 transition-all duration-500"></span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: 'Features', id: 'features' },
              { label: 'How it works', id: 'how-it-works' },
              { label: 'Technology', id: 'technology' },
              { label: 'contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-5 py-2.5 text-white/80 hover:text-white font-medium text-sm transition-all duration-300 group/btn overflow-hidden rounded-lg"
              >
                {/* Hover background */}
                <span className="absolute inset-0 bg-white/5 scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>
                <span className="relative z-10">{item.label}</span>
                {/* Bottom accent line */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover/btn:w-full transition-all duration-300"></span>
              </button>
            ))}
            
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('hero')}
              className="ml-4 relative px-6 py-2.5 text-white font-semibold text-sm overflow-hidden rounded-lg border border-white/30 group/cta"
            >
              {/* Gradient background */}
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 group-hover/cta:from-white/20 group-hover/cta:to-white/10 transition-all duration-300"></span>
              {/* Shimmer effect */}
              <span className="absolute inset-0 translate-x-[-100%] group-hover/cta:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700"></span>
              <span className="relative z-10">Get started</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;