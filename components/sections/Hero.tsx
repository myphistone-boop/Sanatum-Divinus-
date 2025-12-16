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
    <section className="min-h-screen w-full flex flex-col lg:flex-row items-center relative overflow-hidden pt-28 md:pt-32 lg:pt-24 xl:pt-28">
        {/* Left Content */}
        <div className={`
            flex-1 h-full flex flex-col justify-center items-start px-6 md:px-12 lg:px-16 xl:px-24 z-20 
            transition-all duration-1000 ease-out transform
            ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
          `}>
          
          <div className="w-full max-w-[80rem] bg-sacred-green-dark/60 backdrop-blur-2xl border border-sacred-gold/20 p-6 md:p-10 lg:p-12 xl:p-16 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)] group transition-all duration-700 hover:shadow-[0_50px_100px_rgba(217,185,94,0.15)] hover:border-sacred-gold/40">
            
            <div className="absolute inset-6 border border-sacred-gold/10 rounded-[2rem] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-sacred-gold/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

            <div className="inline-flex items-center gap-3 md:gap-4 px-4 py-2 md:px-5 md:py-2 rounded-full border border-sacred-gold/30 bg-sacred-gold/10 mb-6 md:mb-8 lg:mb-10 shadow-lg">
              <Star size={12} className="text-sacred-gold fill-sacred-gold animate-pulse" />
              <span className="text-[10px] md:text-[10px] lg:text-xs uppercase tracking-[0.25em] text-sacred-gold font-bold">Holistique Premium</span>
            </div>

            {/* Typography adjustments: Significantly reduced for laptops (lg) to avoid "zoomed in" feel */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-sacred-cream leading-[0.95] tracking-tight mb-6 md:mb-8 lg:mb-10 drop-shadow-2xl">
              L'Éveil de la <br />
              <span className="text-sacred-gold relative inline-block italic pr-4 lg:pr-8">
                Conscience
                <div className="absolute -bottom-2 left-0 w-full h-[2px] md:h-[3px] bg-gradient-to-r from-sacred-gold/0 via-sacred-gold/50 to-sacred-gold/0" />
              </span>
            </h1>

            <p className="font-sans text-sacred-cream/90 text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed mb-8 md:mb-10 lg:mb-12 max-w-2xl font-light drop-shadow-lg">
              Sanatum Divinus n'est pas une destination, c'est un retour à soi. 
              Une alchimie silencieuse entre thérapies ancestrales et neurosciences modernes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <Button onClick={() => onNavigate(View.DISCOVER)} className="animate-breathe shadow-[0_20px_60px_rgba(217,185,94,0.3)] hover:shadow-[0_30px_80px_rgba(217,185,94,0.5)] text-xs md:text-sm px-6 py-4 md:px-10">
                Commencer le Voyage
              </Button>
              <Button variant="ghost" onClick={() => onNavigate(View.MEN)} className="opacity-90 hover:opacity-100 bg-white/5 backdrop-blur-md border border-white/10 hover:border-sacred-gold/50 rounded-full text-xs md:text-sm px-6 py-4">
                Espace Hommes
              </Button>
            </div>
          </div>
        </div>

        {/* Right Content - Adjusted scales for laptop screens */}
        <div className={`
            flex-1 h-full flex items-center justify-center relative z-10 mt-0 lg:mt-0
            transition-all duration-1000 delay-300 ease-out transform
            ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}>
          {/* 
             Significant scaling adjustment for laptops:
             Mobile: 0.4
             Tablet: 0.55
             Laptop (lg): 0.50 (Reduced to fit 13" screens)
             Desktop (xl): 0.65
             Large Screen (2xl): 0.8
          */}
          <div className="transform scale-[0.35] md:scale-[0.5] lg:scale-[0.5] xl:scale-[0.65] 2xl:scale-[0.8] origin-center lg:translate-x-0 hover:scale-[0.4] md:hover:scale-[0.55] lg:hover:scale-[0.55] xl:hover:scale-[0.7] transition-transform duration-[2s]">
             <Orrery />
          </div>
        </div>
      </section>
  );
};

export default Hero;