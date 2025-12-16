import React, { useState, useEffect } from 'react';
import { View, NavItem } from '../types';
import { NAV_ITEMS, LOGO_URL } from '../constants';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: View) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-in-out
          ${scrolled ? 'w-[98%] md:w-[1400px] py-6' : 'w-[98%] md:w-[1800px] py-10'}
        `}
      >
        <div className={`
          relative w-full h-full rounded-full flex items-center justify-between px-12 md:px-16 transition-all duration-700
          backdrop-blur-xl border-2 border-white/10 shadow-2xl
          ${scrolled ? 'bg-sacred-green-dark/95' : 'bg-sacred-green/60'}
        `}>
          
          {/* Logo Area - MASSIVE ZOOM X4 (relative to original) */}
          <div 
            className="flex items-center gap-8 cursor-pointer group"
            onClick={() => handleNavClick(View.HOME)}
          >
            {/* 
               Increased dimensions to w-48/h-48 (approx 192px). 
               Added -my-12 to prevent the navbar height from expanding. 
               The logo will float/overflow nicely.
            */}
            <div className="w-48 h-48 -my-12 rounded-full border-2 border-sacred-gold/30 flex items-center justify-center overflow-hidden bg-sacred-green-dark group-hover:border-sacred-gold transition-colors duration-500 shadow-lg -ml-8 relative z-50">
              <img src={LOGO_URL} alt="SD" className="w-40 h-40 object-contain opacity-100 group-hover:scale-110 transition-transform duration-700" />
            </div>
            
            <span className={`font-serif tracking-widest text-sacred-gold text-2xl font-bold hidden md:block opacity-0 ${scrolled ? 'opacity-0 w-0' : 'opacity-100 w-auto'} transition-all duration-500 overflow-hidden whitespace-nowrap pl-4`}>
              SANATUM DIVINUS
            </span>
          </div>

          {/* Desktop Nav - text-lg and heavy bold */}
          <div className="hidden md:flex items-center gap-20">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view)}
                className={`
                  uppercase tracking-[0.3em] text-lg font-bold transition-all duration-500 relative py-4
                  hover:text-sacred-gold hover:scale-110
                  ${currentView === item.view ? 'text-sacred-gold' : 'text-sacred-cream/90'}
                `}
              >
                {item.label}
                {currentView === item.view && (
                  <span className="absolute -bottom-2 left-1/2 w-3 h-3 bg-sacred-gold rounded-full transform -translate-x-1/2 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-sacred-gold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-sacred-green-dark/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-14 md:hidden animate-fade-in-up">
           {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view)}
                className={`
                  text-5xl font-serif font-bold text-sacred-cream hover:text-sacred-gold transition-colors duration-300
                  ${currentView === item.view ? 'text-sacred-gold italic' : ''}
                `}
              >
                {item.label}
              </button>
            ))}
        </div>
      )}
    </>
  );
};

export default Navbar;