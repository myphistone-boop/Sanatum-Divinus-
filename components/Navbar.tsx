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
      setScrolled(window.scrollY > 30);
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
        className={`fixed top-4 md:top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-in-out
          ${scrolled ? 'w-[95%] max-w-[1200px] py-2 md:py-3' : 'w-[95%] max-w-[1400px] py-3 md:py-5 lg:py-6'}
        `}
      >
        <div className={`
          relative w-full h-full rounded-full flex items-center justify-between px-6 md:px-8 lg:px-10 transition-all duration-700
          backdrop-blur-xl border-2 border-white/10 shadow-2xl
          ${scrolled ? 'bg-sacred-green-dark/95' : 'bg-sacred-green/60'}
        `}>
          
          {/* Logo Area */}
          <div 
            className="flex items-center gap-4 md:gap-6 cursor-pointer group"
            onClick={() => handleNavClick(View.HOME)}
          >
            {/* 
               Responsive Logo Size Optimized for Laptops: 
               Mobile: w-16 h-16
               Laptop (lg): w-20 h-20 (Reduced from 28/32)
               Desktop (xl/2xl): w-28 h-28
            */}
            <div className={`
                relative z-50 flex items-center justify-center overflow-hidden bg-sacred-green-dark rounded-full 
                border-2 border-sacred-gold/30 shadow-lg transition-all duration-500 group-hover:border-sacred-gold
                -ml-2 md:-ml-4
                ${scrolled 
                  ? 'w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 -my-4' 
                  : 'w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-24 xl:h-24 -my-6 md:-my-8'}
            `}>
              <img 
                src={LOGO_URL} 
                alt="SD" 
                className={`
                  object-contain opacity-100 group-hover:scale-110 transition-transform duration-700
                  ${scrolled ? 'w-8 h-8 md:w-10 md:h-10' : 'w-12 h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16'}
                `} 
              />
            </div>
            
            <span className={`font-serif tracking-widest text-sacred-gold text-base md:text-lg font-bold hidden md:block opacity-0 ${scrolled ? 'opacity-0 w-0' : 'opacity-100 w-auto'} transition-all duration-500 overflow-hidden whitespace-nowrap pl-2`}>
              SANATUM DIVINUS
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10 xl:gap-14">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view)}
                className={`
                  uppercase tracking-[0.2em] text-xs lg:text-xs xl:text-sm font-bold transition-all duration-500 relative py-4
                  hover:text-sacred-gold hover:scale-105
                  ${currentView === item.view ? 'text-sacred-gold' : 'text-sacred-cream/90'}
                `}
              >
                {item.label}
                {currentView === item.view && (
                  <span className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-sacred-gold rounded-full transform -translate-x-1/2 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-sacred-gold p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-sacred-green-dark/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 md:hidden animate-fade-in-up">
           {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view)}
                className={`
                  text-2xl font-serif font-bold text-sacred-cream hover:text-sacred-gold transition-colors duration-300
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