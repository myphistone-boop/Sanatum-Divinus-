import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { View } from '../../types';
import { Sparkles, Activity, Anchor, Moon, Fingerprint, Compass, X, ChevronRight } from 'lucide-react';

interface DiscoverSectionProps {
    onNavigate: (view: View) => void;
}

const DiscoverSection: React.FC<DiscoverSectionProps> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);
    const [selectedMobileCard, setSelectedMobileCard] = useState<number | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const approaches = [
        {
            icon: <Sparkles className="w-6 h-6 lg:w-12 lg:h-12" />,
            title: "Hypnose Transpersonnelle",
            subtitle: "Voyage Intérieur",
            desc: "Explorez vos vies antérieures et l'entre-vies pour comprendre votre mission d'âme."
        },
        {
            icon: <Activity className="w-6 h-6 lg:w-12 lg:h-12" />,
            title: "Bio-Résonance",
            subtitle: "Fréquences Sacrées",
            desc: "Harmonisation des fréquences corporelles pour une santé optimale."
        },
        {
            icon: <Anchor className="w-6 h-6 lg:w-12 lg:h-12" />,
            title: "Ancrage Somatique",
            subtitle: "Corps Conscient",
            desc: "Reconnectez le corps à l'esprit pour dissoudre les tensions chroniques."
        },
        {
            icon: <Moon className="w-6 h-6 lg:w-12 lg:h-12" />,
            title: "Rêve Éveillé",
            subtitle: "Inconscient Libre",
            desc: "Voyage guidé dans l'inconscient pour débloquer la créativité."
        },
        {
            icon: <Fingerprint className="w-6 h-6 lg:w-12 lg:h-12" />,
            title: "Design Humain",
            subtitle: "Architecture de l'Âme",
            desc: "Cartographie de votre unicité énergétique pour des décisions alignées."
        },
        {
            icon: <Compass className="w-6 h-6 lg:w-12 lg:h-12" />,
            title: "Coaching Existentiel",
            subtitle: "Sens & Direction",
            desc: "Donner du sens à l'épreuve et transformer le plomb en or."
        }
    ];

    const handleBook = () => {
        setSelectedMobileCard(null); // Close modal if open
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="discover" className="w-full py-20 lg:py-28 px-4 lg:px-8 relative bg-sacred-green-dark/20">
            <div className="max-w-[90rem] mx-auto">
                {/* Header */}
                <div className={`text-center mb-10 lg:mb-20 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl text-sacred-cream mb-4 lg:mb-8">Nos Voies de <span className="text-sacred-gold">Guérison</span></h2>
                    <p className="text-sacred-cream/70 max-w-4xl mx-auto font-sans text-sm md:text-xl lg:text-2xl font-light leading-relaxed px-4">
                        <span className="hidden lg:inline">Chaque âme est unique, chaque chemin l'est aussi. Survolez une carte pour dévoiler l'essence de chaque pratique.</span>
                        <span className="lg:hidden">Touchez une carte pour découvrir l'essence de la pratique.</span>
                    </p>
                </div>

                {/* --- MOBILE VIEW (Compact Grid + Modal) --- */}
                <div className="lg:hidden">
                    {/* Compact Grid */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                        {approaches.map((item, index) => (
                            <div 
                                key={index}
                                onClick={() => setSelectedMobileCard(index)}
                                className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-3 active:scale-95 transition-transform duration-200 shadow-lg cursor-pointer h-40"
                            >
                                <div className="text-sacred-gold bg-sacred-green-dark p-3 rounded-full border border-sacred-gold/20 shadow-md">
                                    {item.icon}
                                </div>
                                <h3 className="font-serif text-sm font-bold text-sacred-cream leading-tight">{item.title}</h3>
                                <div className="text-sacred-gold/50">
                                    <ChevronRight size={16} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Modal Overlay */}
                    {selectedMobileCard !== null && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in-up">
                            {/* Backdrop */}
                            <div 
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                                onClick={() => setSelectedMobileCard(null)}
                            />
                            
                            {/* Modal Content (The "Back" Face) */}
                            <div className="relative w-full max-w-sm bg-sacred-green-dark border-2 border-sacred-gold/50 rounded-[2rem] p-8 text-center shadow-[0_0_50px_rgba(217,185,94,0.2)]">
                                <button 
                                    onClick={() => setSelectedMobileCard(null)}
                                    className="absolute top-4 right-4 text-sacred-cream/50 hover:text-sacred-gold p-2"
                                >
                                    <X size={24} />
                                </button>

                                <div className="mb-6 flex justify-center">
                                    <div className="w-16 h-16 rounded-full bg-sacred-green border border-sacred-gold/30 flex items-center justify-center text-sacred-gold shadow-xl">
                                        {approaches[selectedMobileCard].icon}
                                    </div>
                                </div>

                                <h3 className="font-serif text-2xl text-sacred-gold mb-2">{approaches[selectedMobileCard].title}</h3>
                                <span className="text-xs uppercase tracking-[0.2em] text-sacred-cream/60 font-bold block mb-6">
                                    {approaches[selectedMobileCard].subtitle}
                                </span>
                                
                                <p className="font-sans text-base text-sacred-cream/90 leading-relaxed font-light mb-8">
                                    {approaches[selectedMobileCard].desc}
                                </p>
                                
                                <Button variant="outline" onClick={handleBook} className="w-full py-4 text-sm">
                                    Réserver cette séance
                                </Button>
                            </div>
                        </div>
                    )}
                </div>

                {/* --- DESKTOP VIEW (Original Flip Cards) --- */}
                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {approaches.map((item, index) => (
                        <div 
                            key={index}
                            className={`
                                group relative h-[400px] perspective-1000
                                ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                            `}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {/* Inner Flipper */}
                            <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl group-hover:shadow-[0_20px_50px_rgba(217,185,94,0.15)] rounded-[2.5rem]">
                                
                                {/* FRONT FACE */}
                                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white/5 border-2 border-white/5 backdrop-blur-md rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-sacred-gold/5 rounded-bl-full rounded-tr-[2.5rem] transition-all duration-500 group-hover:bg-sacred-gold/10" />
                                    
                                    <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-sacred-green border-2 border-sacred-gold/20 flex items-center justify-center text-sacred-gold mb-6 lg:mb-8 shadow-lg group-hover:scale-110 transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    
                                    <h3 className="font-serif text-2xl md:text-3xl text-sacred-cream mb-3">{item.title}</h3>
                                    <span className="text-sacred-gold uppercase tracking-[0.2em] text-[10px] lg:text-xs font-bold">{item.subtitle}</span>
                                    
                                    <div className="mt-8 opacity-50 text-[10px] uppercase tracking-widest text-sacred-cream">
                                        Survoler pour découvrir
                                    </div>
                                </div>

                                {/* BACK FACE */}
                                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-sacred-green-dark border-2 border-sacred-gold/50 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center">
                                    <div className="absolute inset-0 bg-gradient-to-br from-sacred-gold/10 to-transparent pointer-events-none rounded-[2.5rem]"></div>
                                    
                                    <h3 className="font-serif text-xl lg:text-2xl text-sacred-gold mb-6">{item.title}</h3>
                                    <p className="font-sans text-base lg:text-lg text-sacred-cream/90 leading-relaxed font-light mb-8">
                                        {item.desc}
                                    </p>
                                    
                                    <Button variant="outline" onClick={handleBook} className="w-full text-sm py-3">
                                        Réserver
                                    </Button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DiscoverSection;