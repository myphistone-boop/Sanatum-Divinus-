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
    <section className="min-h-screen w-full flex flex-col lg:flex-row items-center relative overflow-hidden pt-32 md:pt-40 lg:pt-28">
        {/* Left Content */}
        <div className={`
            flex-1 h-full flex flex-col justify-center items-start px-6 md:px-12 lg:px-16 xl:px-24 z-20 
            transition-all duration-1000 ease-out transform
            ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
          `}>
          
          <div className="w-full max-w-[90rem] bg-sacred-green-dark/60 backdrop-blur-2xl border border-sacred-gold/20 p-8 md:p-12 lg:p-16 xl:p-20 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] group transition-all duration-700 hover:shadow-[0_60px_120px_rgba(217,185,94,0.15)] hover:border-sacred-gold/40">
            
            <div className="absolute inset-6 border border-sacred-gold/10 rounded-[2rem] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-sacred-gold/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

            <div className="inline-flex items-center gap-3 md:gap-5 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full border border-sacred-gold/30 bg-sacred-gold/10 mb-8 md:mb-12 shadow-lg">
              <Star size={14} className="text-sacred-gold fill-sacred-gold animate-pulse" />
              <span className="text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.3em] text-sacred-gold font-bold">Holistique Premium</span>
            </div>

            {/* Typography adjustments: Downscaled for lg/xl laptops, massive sizes pushed to 2xl */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9rem] text-sacred-cream leading-[0.95] tracking-tight mb-8 md:mb-12 drop-shadow-2xl">
              L'Éveil de la <br />
              <span className="text-sacred-gold relative inline-block italic pr-8">
                Conscience
                <div className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[3px] md:h-[4px] bg-gradient-to-r from-sacred-gold/0 via-sacred-gold/50 to-sacred-gold/0" />
              </span>
            </h1>

            <p className="font-sans text-sacred-cream/90 text-base md:text-xl lg:text-2xl leading-relaxed mb-10 md:mb-16 max-w-3xl font-light drop-shadow-lg">
              Sanatum Divinus n'est pas une destination, c'est un retour à soi. 
              Une alchimie silencieuse entre thérapies ancestrales et neurosciences modernes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-8 relative z-10">
              <Button onClick={() => onNavigate(View.DISCOVER)} className="animate-breathe shadow-[0_20px_60px_rgba(217,185,94,0.3)] hover:shadow-[0_30px_80px_rgba(217,185,94,0.5)] text-xs md:text-sm lg:text-base px-8 md:px-12">
                Commencer le Voyage
              </Button>
              <Button variant="ghost" onClick={() => onNavigate(View.MEN)} className="opacity-90 hover:opacity-100 bg-white/5 backdrop-blur-md border border-white/10 hover:border-sacred-gold/50 rounded-full text-xs md:text-sm lg:text-base">
                Espace Hommes
              </Button>
            </div>
          </div>
        </div>

        {/* Right Content - Adjusted scales for laptop screens */}
        <div className={`
            flex-1 h-full flex items-center justify-center relative z-10 mt-10 lg:mt-0
            transition-all duration-1000 delay-300 ease-out transform
            ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}>
          {/* 
             Significant scaling adjustment:
             Mobile: 0.4
             Tablet: 0.55
             Laptop (lg): 0.65 (Fits 1280/1440 width and shorter height)
             Desktop (xl): 0.75
             Large Screen (2xl): 0.9
          */}
          <div className="transform scale-[0.4] md:scale-[0.55] lg:scale-[0.65] xl:scale-[0.75] 2xl:scale-[0.9] origin-center lg:translate-x-10 hover:scale-[0.45] md:hover:scale-[0.6] lg:hover:scale-[0.7] xl:hover:scale-[0.8] transition-transform duration-[2s]">
             <Orrery />
          </div>
        </div>
      </section>
  );
};

export default Hero;