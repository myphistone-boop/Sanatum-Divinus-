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

  const handleNavClick = (item: NavItem) => {
    // Si on change de vue principale (ex: Home vers Men ou Men vers Home)
    if (item.view !== currentView) {
        onNavigate(item.view);
        // Si il y a une ancre, on attend un peu que la vue se charge avant de scroller
        if (item.sectionId) {
            setTimeout(() => {
                const element = document.getElementById(item.sectionId!);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    } else {
        // Si on est déjà sur la bonne vue, on scroll juste
        if (item.sectionId) {
            const element = document.getElementById(item.sectionId);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-4 md:top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-in-out
          ${scrolled ? 'w-[95%] max-w-[1400px] py-2 lg:py-3' : 'w-[95%] max-w-[1600px] py-3 lg:py-5'}
        `}
      >
        <div className={`
          relative w-full h-full rounded-full flex items-center justify-between px-6 lg:px-10 transition-all duration-700
          backdrop-blur-xl border-2 border-white/10 shadow-2xl
          ${scrolled ? 'bg-sacred-green-dark/95' : 'bg-sacred-green/60'}
        `}>
          
          {/* Logo Area */}
          <div 
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => handleNavClick({ label: 'Home', view: View.HOME })}
          >
            <div className={`
                relative z-50 flex items-center justify-center overflow-hidden bg-sacred-green-dark rounded-full 
                border-2 border-sacred-gold/30 shadow-lg transition-all duration-500 group-hover:border-sacred-gold
                -ml-2
                ${scrolled 
                  ? 'w-12 h-12 lg:w-14 lg:h-14 -my-4' 
                  : 'w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 -my-6 lg:-my-8'}
            `}>
              <img 
                src={LOGO_URL} 
                alt="SD" 
                className={`
                  object-contain opacity-100 group-hover:scale-110 transition-transform duration-700
                  ${scrolled ? 'w-8 h-8 lg:w-10 lg:h-10' : 'w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14'}
                `} 
              />
            </div>
            
            <span className={`font-serif tracking-widest text-sacred-gold text-base lg:text-lg font-bold hidden lg:block opacity-0 ${scrolled ? 'opacity-0 w-0' : 'opacity-100 w-auto'} transition-all duration-500 overflow-hidden whitespace-nowrap pl-2`}>
              SANATUM DIVINUS
            </span>
          </div>

          {/* Desktop Nav - Now hidden on MD, visible on LG+ */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`
                  uppercase tracking-[0.2em] text-[10px] xl:text-xs font-bold transition-all duration-500 relative py-4
                  hover:text-sacred-gold hover:scale-105 whitespace-nowrap
                  ${currentView === item.view && !item.sectionId ? 'text-sacred-gold' : 'text-sacred-cream/90'}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile/Tablet Toggle - Visible up to LG */}
          <button 
            className="lg:hidden text-sacred-gold p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-sacred-green-dark/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 lg:hidden animate-fade-in-up">
           {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`
                  text-2xl font-serif font-bold text-sacred-cream hover:text-sacred-gold transition-colors duration-300
                  ${currentView === item.view && !item.sectionId ? 'text-sacred-gold italic' : ''}
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