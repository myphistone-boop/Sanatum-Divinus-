import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { ArrowLeft, Sparkles, CheckCircle, Leaf, Gem, Crown } from 'lucide-react';
import { View } from '../../types';

interface PricingProps {
  onNavigate: (view: View) => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  const [activePrice, setActivePrice] = useState(1);

  const pricingOptions = [
    {
      id: 0,
      title: "Initiation",
      price: "150€",
      period: "/séance",
      desc: "La porte d'entrée.",
      longDesc: "Une séance unique pour clarifier une problématique précise ou découvrir l'approche. C'est le premier pas vers votre vérité intérieure, un moment de clarté fulgurante.",
      includes: [
        "Consultation 1h30",
        "Anamnèse complète",
        "Soin découverte",
        "Compte-rendu oral"
      ],
      icon: <Leaf className="w-6 h-6" />
    },
    {
      id: 1,
      title: "Métamorphose",
      price: "550€",
      period: "/mois",
      tag: "Recommandé",
      desc: "La transformation.",
      longDesc: "Un accompagnement complet sur un mois pour opérer un changement profond et durable. Idéal pour traverser une transition de vie majeure ou dissoudre des blocages anciens.",
      includes: [
        "4 Séances (1h30/semaine)",
        "Bilan Énergétique Bio-Résonance",
        "2 Séances Hypnose Régressive",
        "Suivi WhatsApp illimité 7j/7",
        "Exercices personnalisés"
      ],
      icon: <Gem className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Transcendance",
      price: "1200€",
      period: "/3 jours",
      desc: "L'immersion.",
      longDesc: "Retraite individuelle en nature pour une déconnexion totale et une reconnexion à l'essentiel. Une parenthèse hors du temps pour renaître à soi-même.",
      includes: [
        "Hébergement & Repas Bio",
        "Soins quotidiens intensifs (4h/jour)",
        "Cérémonie du Feu & Rituels",
        "Marche consciente en forêt",
        "Intégration post-séjour (1h)"
      ],
      icon: <Crown className="w-6 h-6" />
    }
  ];

  return (
      <section className="py-32 px-6 relative">
        <div className="max-w-[100rem] mx-auto">
            <div className="text-center mb-20">
                <h2 className="font-serif text-6xl md:text-8xl text-sacred-cream mb-6">Investir en <span className="text-sacred-gold italic">Soi</span></h2>
                <div className="w-32 h-1 bg-sacred-gold/30 mx-auto rounded-full" />
            </div>

            {/* Main Grid: Detail Card (Wide Landscape) on Left, Selector on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                
                {/* LEFT: Dynamic Detailed Card - Explicit Landscape Rectangle (col-span-8) */}
                <div className="lg:col-span-8 order-2 lg:order-1">
                     <div key={activePrice} className="animate-fade-in-up w-full min-h-[600px] bg-[#1A231E] border border-sacred-gold/20 rounded-[3rem] p-12 lg:p-14 relative overflow-hidden shadow-2xl flex flex-col justify-between">
                        
                        {/* Background Flair */}
                        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-sacred-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
                        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sacred-green/20 rounded-full blur-[80px] pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            {/* Header Section of Card */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-white/5 pb-8">
                                <div>
                                    <div className="flex items-center gap-4 mb-3">
                                         <h3 className="font-serif text-5xl md:text-6xl text-sacred-cream">{pricingOptions[activePrice].title}</h3>
                                         {pricingOptions[activePrice].tag && (
                                            <span className="bg-sacred-gold text-sacred-green-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse shadow-[0_0_20px_rgba(217,185,94,0.4)]">
                                                {pricingOptions[activePrice].tag}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sacred-cream/60 text-lg italic font-serif">"{pricingOptions[activePrice].desc}"</p>
                                </div>
                                <div className="mt-6 md:mt-0 text-right bg-white/5 p-6 rounded-3xl border border-white/5 backdrop-blur-sm min-w-[200px]">
                                    <div className="text-4xl md:text-5xl font-bold text-sacred-gold tracking-tight">{pricingOptions[activePrice].price}</div>
                                    <div className="text-sacred-cream/40 uppercase tracking-widest text-xs font-bold text-right mt-1">{pricingOptions[activePrice].period}</div>
                                </div>
                            </div>

                            {/* Middle Content Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <span className="uppercase text-xs tracking-[0.2em] text-sacred-gold font-bold mb-6 block">L'expérience</span>
                                        <p className="text-xl text-sacred-cream/90 font-light leading-relaxed mb-8 text-justify">
                                            {pricingOptions[activePrice].longDesc}
                                        </p>
                                    </div>
                                    
                                    <div className="p-6 bg-sacred-gold/5 rounded-3xl border border-sacred-gold/10 relative mt-auto">
                                        <Sparkles className="text-sacred-gold w-8 h-8 absolute -top-4 -left-4 bg-[#1A231E] rounded-full p-1 border border-sacred-gold/20" />
                                        <p className="text-sm text-sacred-cream/80 italic font-serif">"La valeur ne réside pas dans ce que vous payez, mais dans ce que vous devenez."</p>
                                    </div>
                                </div>

                                <div className="bg-white/[0.02] rounded-[2rem] p-8 border border-white/5 h-full">
                                    <span className="uppercase text-xs tracking-[0.2em] text-sacred-gold font-bold mb-8 block border-b border-white/5 pb-4">Inclusions Exclusives</span>
                                    <ul className="space-y-4">
                                        {pricingOptions[activePrice].includes.map((inc, i) => (
                                            <li key={i} className="flex items-center gap-4 group">
                                                <div className="w-6 h-6 rounded-full bg-sacred-green-dark border border-sacred-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-sacred-gold group-hover:border-sacred-gold transition-all duration-300">
                                                    <CheckCircle size={12} className="text-sacred-gold group-hover:text-sacred-green-dark" />
                                                </div>
                                                <span className="text-sacred-cream/80 text-lg group-hover:text-white transition-colors">{inc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Footer Action Section */}
                            <div className="pt-4 flex items-center justify-between">
                                <span className="text-sacred-cream/30 text-xs uppercase tracking-widest hidden md:inline-block">Places limitées par mois</span>
                                <Button className="w-full md:w-auto px-12 shadow-[0_10px_30px_rgba(217,185,94,0.15)] hover:shadow-[0_20px_50px_rgba(217,185,94,0.3)]" onClick={() => onNavigate(View.BOOKING)}>
                                    Choisir {pricingOptions[activePrice].title}
                                </Button>
                            </div>
                        </div>
                     </div>
                </div>

                {/* RIGHT: Selection List (Vertical Stack) */}
                <div className="lg:col-span-4 flex flex-col gap-4 order-1 lg:order-2 h-full">
                    {pricingOptions.map((opt) => (
                        <div 
                            key={opt.id}
                            onClick={() => setActivePrice(opt.id)}
                            className={`
                                cursor-pointer rounded-[2rem] p-6 border-2 transition-all duration-500 flex items-center justify-between group relative overflow-hidden
                                ${activePrice === opt.id 
                                    ? 'bg-sacred-gold text-sacred-green-dark border-sacred-gold shadow-[0_10px_40px_rgba(217,185,94,0.3)] -translate-x-2 z-20 scale-105' 
                                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-sacred-gold/30 opacity-70 hover:opacity-100'}
                            `}
                        >
                            <div className="relative z-10 flex items-center gap-6 w-full">
                                <div className={`p-4 rounded-2xl flex-shrink-0 ${activePrice === opt.id ? 'bg-sacred-green-dark text-sacred-gold' : 'bg-white/10 text-sacred-gold'} transition-colors`}>
                                    {opt.icon}
                                </div>
                                <div className="flex-grow">
                                    <h4 className={`font-serif text-2xl font-bold mb-0 ${activePrice === opt.id ? 'text-sacred-green-dark' : 'text-sacred-cream'}`}>
                                        {opt.title}
                                    </h4>
                                    <p className={`text-xs uppercase tracking-widest font-bold mt-1 ${activePrice === opt.id ? 'text-sacred-green-dark/60' : 'text-sacred-cream/40'}`}>{opt.period}</p>
                                </div>
                                <ArrowLeft className={`w-5 h-5 flex-shrink-0 transition-transform duration-500 ${activePrice === opt.id ? 'text-sacred-green-dark translate-x-0' : 'text-transparent translate-x-4'}`} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
      </section>
  );
};

export default Pricing;