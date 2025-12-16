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
        className={`fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-in-out
          ${scrolled ? 'w-[95%] max-w-[1400px] py-3 md:py-4' : 'w-[95%] max-w-[1800px] py-4 md:py-6 lg:py-8'}
        `}
      >
        <div className={`
          relative w-full h-full rounded-full flex items-center justify-between px-6 md:px-10 lg:px-16 transition-all duration-700
          backdrop-blur-xl border-2 border-white/10 shadow-2xl
          ${scrolled ? 'bg-sacred-green-dark/95' : 'bg-sacred-green/60'}
        `}>
          
          {/* Logo Area */}
          <div 
            className="flex items-center gap-4 md:gap-6 cursor-pointer group"
            onClick={() => handleNavClick(View.HOME)}
          >
            {/* 
               Responsive Logo Size Adjusted for Laptops: 
               Mobile: w-20 h-20
               Tablet/Laptop: w-28 h-28 (was 48/192px)
               Desktop 2xl: w-40 h-40
            */}
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 2xl:w-40 2xl:h-40 -my-8 md:-my-10 lg:-my-12 rounded-full border-2 border-sacred-gold/30 flex items-center justify-center overflow-hidden bg-sacred-green-dark group-hover:border-sacred-gold transition-colors duration-500 shadow-lg -ml-2 md:-ml-4 relative z-50">
              <img src={LOGO_URL} alt="SD" className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 2xl:w-32 2xl:h-32 object-contain opacity-100 group-hover:scale-110 transition-transform duration-700" />
            </div>
            
            <span className={`font-serif tracking-widest text-sacred-gold text-lg md:text-xl font-bold hidden md:block opacity-0 ${scrolled ? 'opacity-0 w-0' : 'opacity-100 w-auto'} transition-all duration-500 overflow-hidden whitespace-nowrap pl-2 md:pl-4`}>
              SANATUM DIVINUS
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-12 xl:gap-16">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view)}
                className={`
                  uppercase tracking-[0.25em] text-xs lg:text-sm xl:text-base font-bold transition-all duration-500 relative py-4
                  hover:text-sacred-gold hover:scale-110
                  ${currentView === item.view ? 'text-sacred-gold' : 'text-sacred-cream/90'}
                `}
              >
                {item.label}
                {currentView === item.view && (
                  <span className="absolute -bottom-2 left-1/2 w-2 h-2 lg:w-3 lg:h-3 bg-sacred-gold rounded-full transform -translate-x-1/2 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-sacred-gold p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-sacred-green-dark/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-10 md:hidden animate-fade-in-up">
           {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view)}
                className={`
                  text-3xl font-serif font-bold text-sacred-cream hover:text-sacred-gold transition-colors duration-300
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