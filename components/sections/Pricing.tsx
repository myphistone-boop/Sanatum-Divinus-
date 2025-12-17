import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { ArrowLeft, Sparkles, CheckCircle, Clock, Gem, Infinity, ChevronDown, ChevronUp } from 'lucide-react';
import { View } from '../../types';

interface PricingProps {
  onNavigate: (view: View) => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  const [activePrice, setActivePrice] = useState(1);
  // Separate state for mobile expansion to allow toggling
  const [mobileExpandedId, setMobileExpandedId] = useState<number | null>(null);

  const pricingOptions = [
    {
      id: 0,
      title: "Séance Unitaire",
      price: "60.-",
      period: "/1 heure",
      desc: "Découverte & Clarté.",
      longDesc: "Une séance ponctuelle pour découvrir l'approche thérapeutique ou traiter une question spécifique. C'est un espace de parole libre et de soin pour retrouver de la clarté immédiate.",
      includes: [
        "Consultation 1h",
        "Écoute active & Soin",
        "Outils pratiques",
        "Sans engagement"
      ],
      icon: <Clock className="w-5 h-5 lg:w-6 lg:h-6" />
    },
    {
      id: 1,
      title: "Parcours Évolution",
      price: "250.-",
      period: "/5 heures",
      tag: "Populaire",
      desc: "L'approfondissement.",
      longDesc: "Un pack de 5 heures pour engager un travail de fond. Idéal pour instaurer de nouvelles habitudes, traverser une période de transition et ancrer le changement dans la durée.",
      includes: [
        "5 Heures de consultation",
        "Suivi personnalisé",
        "Exercices inter-séances",
        "Priorité de réservation",
        "Bilan intermédiaire"
      ],
      icon: <Gem className="w-5 h-5 lg:w-6 lg:h-6" />
    },
    {
      id: 2,
      title: "Transformation",
      price: "500.-",
      period: "/10 heures",
      desc: "L'engagement total.",
      longDesc: "Un accompagnement complet de 10 heures pour une métamorphose profonde. Ce format permet d'explorer toutes les facettes de votre être et de stabiliser durablement votre bien-être.",
      includes: [
        "10 Heures de consultation",
        "Accès à toutes les thérapies",
        "Support WhatsApp 5j/7",
        "Bilan énergétique offert",
        "Plan d'autonomie final"
      ],
      icon: <Infinity className="w-5 h-5 lg:w-6 lg:h-6" />
    }
  ];

  const toggleMobile = (id: number) => {
      setMobileExpandedId(mobileExpandedId === id ? null : id);
  };

  return (
      <section className="py-16 lg:py-24 px-6 relative">
        <div className="max-w-[100rem] mx-auto">
            <div className="text-center mb-10 lg:mb-14">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-sacred-cream mb-4 lg:mb-6">Investir en <span className="text-sacred-gold italic">Soi</span></h2>
                <div className="w-16 lg:w-24 h-0.5 lg:h-1 bg-sacred-gold/30 mx-auto rounded-full" />
            </div>

            {/* --- MOBILE VIEW: ACCORDION LIST --- */}
            <div className="lg:hidden flex flex-col gap-4">
                {pricingOptions.map((opt) => {
                    const isExpanded = mobileExpandedId === opt.id;
                    return (
                        <div 
                            key={opt.id}
                            className={`
                                rounded-[2rem] border-2 overflow-hidden transition-all duration-500
                                ${isExpanded 
                                    ? 'bg-sacred-green-dark border-sacred-gold shadow-[0_10px_30px_rgba(217,185,94,0.2)]' 
                                    : 'bg-white/5 border-white/5'}
                            `}
                        >
                            {/* Card Header (Always Visible) */}
                            <div 
                                onClick={() => toggleMobile(opt.id)}
                                className="p-6 flex items-center justify-between cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl ${isExpanded ? 'bg-sacred-gold text-sacred-green-dark' : 'bg-white/10 text-sacred-gold'}`}>
                                        {opt.icon}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h4 className={`font-serif text-xl font-bold ${isExpanded ? 'text-sacred-gold' : 'text-sacred-cream'}`}>{opt.title}</h4>
                                            {opt.tag && !isExpanded && (
                                                <span className="bg-sacred-gold text-sacred-green-dark px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest">
                                                    {opt.tag}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-[10px] uppercase tracking-widest font-bold mt-1 text-sacred-cream/40">{opt.period}</p>
                                    </div>
                                </div>
                                <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180 text-sacred-gold' : 'text-sacred-cream/50'}`}>
                                    <ChevronDown />
                                </div>
                            </div>

                            {/* Expanded Content */}
                            {isExpanded && (
                                <div className="px-6 pb-6 animate-fade-in-up">
                                    <div className="border-t border-white/10 my-4 pt-4 flex justify-between items-center">
                                        <div className="text-3xl font-bold text-sacred-cream">{opt.price}</div>
                                        {opt.tag && <span className="text-sacred-gold text-xs font-bold uppercase tracking-widest">{opt.tag}</span>}
                                    </div>

                                    <p className="text-sm text-sacred-cream/80 font-light leading-relaxed mb-6">
                                        {opt.longDesc}
                                    </p>

                                    <div className="bg-white/5 rounded-xl p-4 mb-6">
                                        <span className="uppercase text-[10px] tracking-[0.2em] text-sacred-gold font-bold mb-3 block border-b border-white/5 pb-2">Inclus</span>
                                        <ul className="space-y-2">
                                            {opt.includes.map((inc, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <CheckCircle size={14} className="text-sacred-gold flex-shrink-0" />
                                                    <span className="text-sacred-cream/80 text-sm">{inc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Button className="w-full text-sm py-4" onClick={() => onNavigate(View.BOOKING)}>
                                        Sélectionner
                                    </Button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>


            {/* --- DESKTOP VIEW: SPLIT GRID --- */}
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* LEFT: Dynamic Detailed Card */}
                <div className="lg:col-span-8 order-2 lg:order-1">
                     <div key={activePrice} className="animate-fade-in-up w-full min-h-[420px] lg:min-h-[480px] xl:min-h-[550px] bg-[#1A231E] border border-sacred-gold/20 rounded-[2rem] lg:rounded-[2.5rem] xl:rounded-[3rem] p-6 lg:p-8 xl:p-12 relative overflow-hidden shadow-2xl flex flex-col justify-between">
                        
                        {/* Background Flair */}
                        <div className="absolute -top-20 -left-20 w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] bg-sacred-gold/5 rounded-full blur-[80px] lg:blur-[100px] pointer-events-none"></div>
                        <div className="absolute bottom-0 right-0 w-40 lg:w-60 h-40 lg:h-60 bg-sacred-green/20 rounded-full blur-[60px] lg:blur-[80px] pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            {/* Header Section of Card */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 lg:mb-8 border-b border-white/5 pb-4 lg:pb-6">
                                <div>
                                    <div className="flex items-center gap-3 lg:gap-4 mb-2 lg:mb-3">
                                         <h3 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-sacred-cream">{pricingOptions[activePrice].title}</h3>
                                         {pricingOptions[activePrice].tag && (
                                            <span className="bg-sacred-gold text-sacred-green-dark px-2 py-0.5 lg:px-4 lg:py-1 rounded-full text-[9px] lg:text-xs font-bold uppercase tracking-widest animate-pulse shadow-[0_0_20px_rgba(217,185,94,0.4)]">
                                                {pricingOptions[activePrice].tag}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sacred-cream/60 text-sm lg:text-base italic font-serif">"{pricingOptions[activePrice].desc}"</p>
                                </div>
                                <div className="mt-4 md:mt-0 text-right bg-white/5 p-3 lg:p-5 rounded-2xl lg:rounded-3xl border border-white/5 backdrop-blur-sm min-w-[140px] lg:min-w-[180px]">
                                    <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-sacred-gold tracking-tight">{pricingOptions[activePrice].price}</div>
                                    <div className="text-sacred-cream/40 uppercase tracking-widest text-[9px] lg:text-xs font-bold text-right mt-1">{pricingOptions[activePrice].period}</div>
                                </div>
                            </div>

                            {/* Middle Content Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6">
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <span className="uppercase text-[10px] lg:text-xs tracking-[0.2em] text-sacred-gold font-bold mb-3 block">Le Forfait</span>
                                        <p className="text-sm lg:text-base xl:text-lg text-sacred-cream/90 font-light leading-relaxed mb-4 text-justify">
                                            {pricingOptions[activePrice].longDesc}
                                        </p>
                                    </div>
                                    
                                    <div className="p-3 lg:p-4 bg-sacred-gold/5 rounded-2xl lg:rounded-3xl border border-sacred-gold/10 relative mt-auto">
                                        <Sparkles className="text-sacred-gold w-5 h-5 lg:w-6 lg:h-6 absolute -top-2.5 -left-2.5 bg-[#1A231E] rounded-full p-1 border border-sacred-gold/20" />
                                        <p className="text-xs lg:text-sm text-sacred-cream/80 italic font-serif">"La valeur ne réside pas dans ce que vous payez, mais dans ce que vous devenez."</p>
                                    </div>
                                </div>

                                <div className="bg-white/[0.02] rounded-[1.5rem] lg:rounded-[2rem] p-5 lg:p-6 border border-white/5 h-full">
                                    <span className="uppercase text-[10px] lg:text-xs tracking-[0.2em] text-sacred-gold font-bold mb-3 lg:mb-5 block border-b border-white/5 pb-2">Ce qui est inclus</span>
                                    <ul className="space-y-2 lg:space-y-3">
                                        {pricingOptions[activePrice].includes.map((inc, i) => (
                                            <li key={i} className="flex items-center gap-3 group">
                                                <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-sacred-green-dark border border-sacred-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-sacred-gold group-hover:border-sacred-gold transition-all duration-300">
                                                    <CheckCircle size={10} className="text-sacred-gold group-hover:text-sacred-green-dark lg:w-3 lg:h-3" />
                                                </div>
                                                <span className="text-sacred-cream/80 text-sm lg:text-base group-hover:text-white transition-colors">{inc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Footer Action Section */}
                            <div className="pt-2 flex items-center justify-between">
                                <span className="text-sacred-cream/30 text-[9px] lg:text-xs uppercase tracking-widest hidden md:inline-block">Tarif horaire moyen : 60.-</span>
                                <Button className="w-full md:w-auto px-8 lg:px-10 py-3 lg:py-4 shadow-[0_10px_30px_rgba(217,185,94,0.15)] hover:shadow-[0_20px_50px_rgba(217,185,94,0.3)] text-xs lg:text-sm" onClick={() => onNavigate(View.BOOKING)}>
                                    Choisir {pricingOptions[activePrice].title}
                                </Button>
                            </div>
                        </div>
                     </div>
                </div>

                {/* RIGHT: Selection List */}
                <div className="lg:col-span-4 flex flex-col gap-3 lg:gap-3 order-1 lg:order-2 h-full">
                    {pricingOptions.map((opt) => (
                        <div 
                            key={opt.id}
                            onClick={() => setActivePrice(opt.id)}
                            className={`
                                cursor-pointer rounded-[1.5rem] lg:rounded-[2rem] p-4 lg:p-5 border-2 transition-all duration-500 flex items-center justify-between group relative overflow-hidden
                                ${activePrice === opt.id 
                                    ? 'bg-sacred-gold text-sacred-green-dark border-sacred-gold shadow-[0_10px_40px_rgba(217,185,94,0.3)] -translate-x-1 lg:-translate-x-2 z-20 scale-100 lg:scale-105' 
                                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-sacred-gold/30 opacity-70 hover:opacity-100'}
                            `}
                        >
                            <div className="relative z-10 flex items-center gap-4 lg:gap-5 w-full">
                                <div className={`p-3 rounded-xl lg:rounded-2xl flex-shrink-0 ${activePrice === opt.id ? 'bg-sacred-green-dark text-sacred-gold' : 'bg-white/10 text-sacred-gold'} transition-colors`}>
                                    {opt.icon}
                                </div>
                                <div className="flex-grow">
                                    <h4 className={`font-serif text-lg lg:text-xl font-bold mb-0 ${activePrice === opt.id ? 'text-sacred-green-dark' : 'text-sacred-cream'}`}>
                                        {opt.title}
                                    </h4>
                                    <p className={`text-[9px] lg:text-xs uppercase tracking-widest font-bold mt-1 ${activePrice === opt.id ? 'text-sacred-green-dark/60' : 'text-sacred-cream/40'}`}>{opt.period}</p>
                                </div>
                                <ArrowLeft className={`w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 transition-transform duration-500 ${activePrice === opt.id ? 'text-sacred-green-dark translate-x-0' : 'text-transparent translate-x-4'}`} />
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