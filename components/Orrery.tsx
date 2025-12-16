import React from 'react';
import { LOGO_URL } from '../constants';

const Orrery: React.FC = () => {
  // Manual placement for Ring 2 (Middle) to create irregularity
  // Replaced Zodiacs with Neptune and Uranus
  const ring2Items = [
    { char: '♆', type: 'planet', angle: 0 },   // Neptune
    { char: '✦', type: 'star', angle: 45 },
    { char: '♀', type: 'planet', angle: 100 }, // Venus
    { char: '♅', type: 'planet', angle: 180 }, // Uranus
    { char: '⋆', type: 'star', angle: 230 },
    { char: '✧', type: 'star', angle: 300 },
  ];

  // Manual placement for Ring 3 (Outer)
  // Replaced Zodiacs with Pluto, Earth, Comet, and decorative stars
  const ring3Items = [
    { char: '♇', type: 'planet', angle: 20 },  // Pluto
    { char: '✴', type: 'star', angle: 60 },
    { char: '♄', type: 'planet', angle: 110 }, // Saturn
    { char: '☄', type: 'planet', angle: 160 }, // Comet
    { char: '✦', type: 'star', angle: 200 },
    { char: '♃', type: 'planet', angle: 250 }, // Jupiter
    { char: '⚝', type: 'planet', angle: 310 }, // Pentagram/Star
    { char: '✧', type: 'star', angle: 350 },
  ];

  return (
    <div className="relative w-[1100px] h-[1100px] flex items-center justify-center pointer-events-none select-none scale-75 md:scale-90">
      
      {/* Deep Center Glow - The Core - EXPANDED */}
      <div className="absolute w-[600px] h-[600px] bg-sacred-gold rounded-full blur-[150px] opacity-15 animate-pulse-glow" />

      {/* Center Image - ZOOMED X2 AGAIN (Total x4 approx) */}
      {/* Was w-64, now w-[450px] (approx 28rem) */}
      <div className="relative z-20 w-[450px] h-[450px] rounded-full bg-sacred-green-dark border-2 border-sacred-gold/40 flex items-center justify-center shadow-[0_0_120px_rgba(217,185,94,0.25)] animate-float">
        {/* Image was w-48, now w-[350px] */}
        <img src={LOGO_URL} alt="Sanatum" className="w-[350px] h-[350px] object-contain opacity-100" />
      </div>

      {/* --- ORBIT 1: INNER PLANETS (Fast, Dense) --- */}
      {/* Expanded diameter from 340px to 540px to fit the massive core */}
      <div className="absolute border border-sacred-gold/10 w-[540px] h-[540px] rounded-full animate-spin-slow duration-[30s]">
         {['☉', '☽', '☿', '♂'].map((planet, i) => (
             <div 
                key={i} 
                className="absolute top-1/2 left-1/2 w-8 h-8 -ml-4 -mt-4 flex items-center justify-center text-sacred-gold/80 text-3xl"
                style={{ transform: `rotate(${(i * 90)}deg) translate(270px) rotate(-${(i * 90)}deg)` }}
             >
                 {planet}
             </div>
         ))}
      </div>

      {/* --- ORBIT 2: MIDDLE RING (Medium Reverse, Mixed Content) --- */}
      {/* Expanded diameter from 580px to 780px */}
      <div className="absolute border border-sacred-gold/20 w-[780px] h-[780px] rounded-full animate-spin-reverse-slow duration-[70s]">
        {ring2Items.map((item, i) => (
             <div 
                key={i} 
                className={`
                    absolute top-1/2 left-1/2 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2
                    ${item.type === 'planet' ? 'text-4xl text-sacred-gold opacity-90 font-serif' : ''}
                    ${item.type === 'star' ? 'text-2xl text-white opacity-60' : ''}
                `}
                style={{ transform: `rotate(${item.angle}deg) translate(390px) rotate(-${item.angle}deg)` }}
             >
                 {item.char}
             </div>
        ))}
      </div>

      {/* --- ORBIT 3: OUTER RING (Slow, Sparse Mixed Content) --- */}
      {/* Expanded diameter from 850px to 1000px */}
      <div className="absolute border-[0.5px] border-sacred-cream/10 w-[1000px] h-[1000px] rounded-full animate-spin-super-slow duration-[140s]">
         {ring3Items.map((item, i) => (
             <div 
                key={i} 
                className={`
                    absolute top-1/2 left-1/2 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2
                    ${item.type === 'planet' ? 'text-5xl text-sacred-cream/80 font-serif' : ''}
                    ${item.type === 'star' ? 'text-xl text-white/50' : ''}
                `}
                style={{ transform: `rotate(${item.angle}deg) translate(500px) rotate(-${item.angle}deg)` }}
             >
                 {item.char}
                 {/* Add a tiny glow dot behind planets */}
                 {item.type === 'planet' && (
                     <div className="absolute inset-0 bg-sacred-gold/10 blur-md rounded-full -z-10 w-full h-full scale-150"></div>
                 )}
             </div>
         ))}
      </div>
      
      {/* --- DECORATIVE RINGS & PARTICLES --- */}
      {/* Elliptical Aura Ring - Adjusted size */}
      <div className="absolute border border-sacred-gold/5 w-[1050px] h-[1050px] rounded-full opacity-30 animate-pulse-glow" />
      
      {/* Tilted Ring 1 */}
      <div className="absolute border border-sacred-gold/10 w-[1020px] h-[1020px] rounded-full opacity-10 animate-spin-slow duration-[200s]" 
           style={{ transform: 'rotateX(70deg) rotateY(15deg)' }} />
           
      {/* Tilted Ring 2 */}
      <div className="absolute border-[1px] border-dashed border-sacred-cream/5 w-[850px] h-[850px] rounded-full opacity-10" 
           style={{ transform: 'rotateX(-60deg) rotateY(-15deg)' }}/>

    </div>
  );
};

export default Orrery;