import React from 'react';
import { View } from '../../types';
import { LOGO_URL } from '../../constants';
import Hero from '../sections/Hero';
import Metamorphosis from '../sections/Metamorphosis';
import Testimonials from '../sections/Testimonials';
import Pricing from '../sections/Pricing';
import About from '../sections/About';
import Contact from '../sections/Contact';
import DiscoverSection from '../sections/DiscoverSection';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="w-full relative">
      <Hero onNavigate={onNavigate} />
      
      {/* 2. Discover (2x3 grid) */}
      <DiscoverSection onNavigate={onNavigate} />
      
      {/* 3. About */}
      <About />
      
      {/* 4. Pricing (Investir en soi) */}
      <Pricing onNavigate={onNavigate} />
      
      {/* 5. Testimonials (Avis clients) */}
      <Testimonials />
      
      {/* 6. Metamorphosis (Clés de la métamorphose) */}
      <Metamorphosis onNavigate={onNavigate} />
      
      {/* 7. Contact (booking inside) - ID added for anchor scrolling */}
      <div id="contact">
          <Contact onNavigate={onNavigate} />
      </div>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/5 bg-[#131f19] py-24 px-8">
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-12 opacity-70 hover:opacity-100 transition-opacity duration-500">
           <div className="flex items-center gap-6">
             <img src={LOGO_URL} className="w-10 h-10 grayscale opacity-50" alt="logo" />
             <span className="font-serif tracking-[0.25em] text-white/50 text-sm font-bold">SANATUM DIVINUS © 2025</span>
           </div>
           <div className="flex gap-16">
             <span className="text-sm uppercase tracking-[0.25em] text-white/50 hover:text-sacred-gold cursor-pointer transition-colors font-semibold">Mentions Légales</span>
             <span className="text-sm uppercase tracking-[0.25em] text-white/50 hover:text-sacred-gold cursor-pointer transition-colors font-semibold">Contact</span>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;