import React from 'react';
import { LOGO_URL } from '../constants';

const Orrery: React.FC = () => {
  // Manual placement for Ring 2 (Middle) to create irregularity
  const ring2Items = [
    { char: '♆', type: 'planet', angle: 0 },   // Neptune
    { char: '✦', type: 'star', angle: 45 },
    { char: '♀', type: 'planet', angle: 100 }, // Venus
    { char: '♅', type: 'planet', angle: 180 }, // Uranus
    { char: '⋆', type: 'star', angle: 230 },
    { char: '✧', type: 'star', angle: 300 },
  ];

  // Manual placement for Ring 3 (Outer)
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

  // Reduced base dimensions from 1100px to 900px for better fit on laptops
  return (
    <div className="relative w-[900px] h-[900px] flex items-center justify-center pointer-events-none select-none">
      
      {/* Deep Center Glow - The Core */}
      <div className="absolute w-[500px] h-[500px] bg-sacred-gold rounded-full blur-[120px] opacity-15 animate-pulse-glow" />

      {/* Center Image */}
      <div className="relative z-20 w-[350px] h-[350px] rounded-full bg-sacred-green-dark border-2 border-sacred-gold/40 flex items-center justify-center shadow-[0_0_100px_rgba(217,185,94,0.25)] animate-float">
        <img src={LOGO_URL} alt="Sanatum" className="w-[280px] h-[280px] object-contain opacity-100" />
      </div>

      {/* --- ORBIT 1: INNER PLANETS --- */}
      <div className="absolute border border-sacred-gold/10 w-[440px] h-[440px] rounded-full animate-spin-slow duration-[30s]">
         {['☉', '☽', '☿', '♂'].map((planet, i) => (
             <div 
                key={i} 
                className="absolute top-1/2 left-1/2 w-6 h-6 -ml-3 -mt-3 flex items-center justify-center text-sacred-gold/80 text-2xl"
                style={{ transform: `rotate(${(i * 90)}deg) translate(220px) rotate(-${(i * 90)}deg)` }}
             >
                 {planet}
             </div>
         ))}
      </div>

      {/* --- ORBIT 2: MIDDLE RING --- */}
      <div className="absolute border border-sacred-gold/20 w-[640px] h-[640px] rounded-full animate-spin-reverse-slow duration-[70s]">
        {ring2Items.map((item, i) => (
             <div 
                key={i} 
                className={`
                    absolute top-1/2 left-1/2 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2
                    ${item.type === 'planet' ? 'text-3xl text-sacred-gold opacity-90 font-serif' : ''}
                    ${item.type === 'star' ? 'text-xl text-white opacity-60' : ''}
                `}
                style={{ transform: `rotate(${item.angle}deg) translate(320px) rotate(-${item.angle}deg)` }}
             >
                 {item.char}
             </div>
        ))}
      </div>

      {/* --- ORBIT 3: OUTER RING --- */}
      <div className="absolute border-[0.5px] border-sacred-cream/10 w-[820px] h-[820px] rounded-full animate-spin-super-slow duration-[140s]">
         {ring3Items.map((item, i) => (
             <div 
                key={i} 
                className={`
                    absolute top-1/2 left-1/2 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2
                    ${item.type === 'planet' ? 'text-4xl text-sacred-cream/80 font-serif' : ''}
                    ${item.type === 'star' ? 'text-lg text-white/50' : ''}
                `}
                style={{ transform: `rotate(${item.angle}deg) translate(410px) rotate(-${item.angle}deg)` }}
             >
                 {item.char}
                 {item.type === 'planet' && (
                     <div className="absolute inset-0 bg-sacred-gold/10 blur-md rounded-full -z-10 w-full h-full scale-150"></div>
                 )}
             </div>
         ))}
      </div>
      
      {/* --- DECORATIVE RINGS --- */}
      <div className="absolute border border-sacred-gold/5 w-[880px] h-[880px] rounded-full opacity-30 animate-pulse-glow" />
      <div className="absolute border border-sacred-gold/10 w-[850px] h-[850px] rounded-full opacity-10 animate-spin-slow duration-[200s]" 
           style={{ transform: 'rotateX(70deg) rotateY(15deg)' }} />
      <div className="absolute border-[1px] border-dashed border-sacred-cream/5 w-[700px] h-[700px] rounded-full opacity-10" 
           style={{ transform: 'rotateX(-60deg) rotateY(-15deg)' }}/>

    </div>
  );
};

export default Orrery;