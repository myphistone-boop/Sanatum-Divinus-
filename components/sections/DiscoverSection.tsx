import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { View } from '../../types';
import { Sparkles, Activity, Anchor, Moon, Fingerprint, Compass } from 'lucide-react';

interface DiscoverSectionProps {
    onNavigate: (view: View) => void;
}

const DiscoverSection: React.FC<DiscoverSectionProps> = ({ onNavigate }) => {
    // Utilisation d'un simple état pour l'animation au scroll si nécessaire, ou affichage direct
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const approaches = [
        {
            icon: <Sparkles className="w-10 h-10 lg:w-12 lg:h-12" />,
            title: "Hypnose Transpersonnelle",
            subtitle: "Voyage Intérieur",
            desc: "Explorez vos vies antérieures et l'entre-vies pour comprendre votre mission d'âme."
        },
        {
            icon: <Activity className="w-10 h-10 lg:w-12 lg:h-12" />,
            title: "Bio-Résonance",
            subtitle: "Fréquences Sacrées",
            desc: "Harmonisation des fréquences corporelles pour une santé optimale."
        },
        {
            icon: <Anchor className="w-10 h-10 lg:w-12 lg:h-12" />,
            title: "Ancrage Somatique",
            subtitle: "Corps Conscient",
            desc: "Reconnectez le corps à l'esprit pour dissoudre les tensions chroniques."
        },
        {
            icon: <Moon className="w-10 h-10 lg:w-12 lg:h-12" />,
            title: "Rêve Éveillé",
            subtitle: "Inconscient Libre",
            desc: "Voyage guidé dans l'inconscient pour débloquer la créativité."
        },
        {
            icon: <Fingerprint className="w-10 h-10 lg:w-12 lg:h-12" />,
            title: "Design Humain",
            subtitle: "Architecture de l'Âme",
            desc: "Cartographie de votre unicité énergétique pour des décisions alignées."
        },
        {
            icon: <Compass className="w-10 h-10 lg:w-12 lg:h-12" />,
            title: "Coaching Existentiel",
            subtitle: "Sens & Direction",
            desc: "Donner du sens à l'épreuve et transformer le plomb en or."
        }
    ];

    return (
        <section id="discover" className="w-full py-20 lg:py-28 px-6 lg:px-8 relative bg-sacred-green-dark/20">
            <div className="max-w-[90rem] mx-auto">
                {/* Header */}
                <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-sacred-cream mb-4 lg:mb-8">Nos Voies de <span className="text-sacred-gold">Guérison</span></h2>
                    <p className="text-sacred-cream/70 max-w-4xl mx-auto font-sans text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
                        Chaque âme est unique, chaque chemin l'est aussi. Survolez une carte pour dévoiler l'essence de chaque pratique.
                    </p>
                </div>

                {/* Grid with Flip Effect */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
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
                                    
                                    <Button variant="outline" onClick={() => {
                                        const contactSection = document.getElementById('contact');
                                        contactSection?.scrollIntoView({ behavior: 'smooth' });
                                    }} className="w-full text-sm py-3">
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