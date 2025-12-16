import React, { useEffect, useState } from 'react';
import Orrery from '../Orrery';
import { Button } from '../ui/Button';
import { Star } from 'lucide-react';
import { View } from '../../types';

interface HeroProps {
  onNavigate: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row items-center relative overflow-hidden pt-40 lg:pt-0">
        {/* Left Content */}
        <div className={`
            flex-1 h-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-20 xl:px-32 z-20 
            transition-all duration-1000 ease-out transform
            ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
          `}>
          
          <div className="w-full max-w-[90rem] bg-sacred-green-dark/60 backdrop-blur-2xl border border-sacred-gold/20 p-10 md:p-16 lg:p-20 xl:p-28 rounded-[3rem] md:rounded-[5rem] relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] group transition-all duration-700 hover:shadow-[0_60px_120px_rgba(217,185,94,0.15)] hover:border-sacred-gold/40">
            
            <div className="absolute inset-6 border border-sacred-gold/10 rounded-[4rem] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sacred-gold/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="inline-flex items-center gap-5 px-6 py-3 md:px-8 md:py-4 rounded-full border border-sacred-gold/30 bg-sacred-gold/10 mb-10 md:mb-16 shadow-lg">
              <Star size={16} className="text-sacred-gold fill-sacred-gold animate-pulse" />
              <span className="text-xs md:text-sm lg:text-base uppercase tracking-[0.4em] text-sacred-gold font-bold">Holistique Premium</span>
            </div>

            {/* Typography adjustments for scalability */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] 2xl:text-[10rem] text-sacred-cream leading-[0.9] tracking-tight mb-10 md:mb-16 drop-shadow-2xl">
              L'Éveil de la <br />
              <span className="text-sacred-gold relative inline-block italic pr-8">
                Conscience
                <div className="absolute -bottom-6 left-0 w-full h-[4px] bg-gradient-to-r from-sacred-gold/0 via-sacred-gold/50 to-sacred-gold/0" />
              </span>
            </h1>

            <p className="font-sans text-sacred-cream/90 text-lg md:text-2xl lg:text-3xl leading-relaxed mb-16 md:mb-24 max-w-4xl font-light drop-shadow-lg">
              Sanatum Divinus n'est pas une destination, c'est un retour à soi. 
              Une alchimie silencieuse entre thérapies ancestrales et neurosciences modernes.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 md:gap-12 relative z-10">
              <Button onClick={() => onNavigate(View.DISCOVER)} className="animate-breathe shadow-[0_20px_60px_rgba(217,185,94,0.3)] hover:shadow-[0_30px_80px_rgba(217,185,94,0.5)]">
                Commencer le Voyage
              </Button>
              <Button variant="ghost" onClick={() => onNavigate(View.MEN)} className="opacity-90 hover:opacity-100 bg-white/5 backdrop-blur-md border border-white/10 hover:border-sacred-gold/50 rounded-full">
                Espace Hommes
              </Button>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className={`
            flex-1 h-full flex items-center justify-center relative z-10 mt-10 lg:mt-0
            transition-all duration-1000 delay-300 ease-out transform
            ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}>
          {/* Reduced scale to prevent overflow on standard laptops */}
          <div className="transform scale-75 md:scale-90 lg:scale-100 xl:scale-125 origin-center lg:translate-x-10 hover:scale-95 lg:hover:scale-130 transition-transform duration-[2s]">
             <Orrery />
          </div>
        </div>
      </section>
  );
};

export default Hero;