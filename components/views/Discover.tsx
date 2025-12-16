import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { View } from '../../types';
import { Sparkles, Activity, Anchor, Moon, Fingerprint, Compass } from 'lucide-react';

interface DiscoverProps {
    onNavigate: (view: View) => void;
}

const Discover: React.FC<DiscoverProps> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setTimeout(() => setMounted(true), 100);
    }, []);

    const approaches = [
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Hypnose Transpersonnelle",
            desc: "Explorez vos vies antérieures et l'entre-vies pour comprendre votre mission d'âme."
        },
        {
            icon: <Activity className="w-8 h-8" />,
            title: "Bio-Résonance",
            desc: "Harmonisation des fréquences corporelles pour une santé optimale."
        },
        {
            icon: <Anchor className="w-8 h-8" />,
            title: "Ancrage Somatique",
            desc: "Reconnectez le corps à l'esprit pour dissoudre les tensions chroniques."
        },
        {
            icon: <Moon className="w-8 h-8" />,
            title: "Rêve Éveillé",
            desc: "Voyage guidé dans l'inconscient pour débloquer la créativité."
        },
        {
            icon: <Fingerprint className="w-8 h-8" />,
            title: "Design Humain",
            desc: "Cartographie de votre unicité énergétique pour des décisions alignées."
        },
        {
            icon: <Compass className="w-8 h-8" />,
            title: "Coaching Existentiel",
            desc: "Donner du sens à l'épreuve et transformer le plomb en or."
        }
    ];

    return (
        <div className="w-full pt-24 lg:pt-28 pb-16 px-6 lg:px-8 min-h-screen">
            <div className="max-w-[90rem] mx-auto">
                {/* Header */}
                <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl text-sacred-cream mb-4 lg:mb-8">Nos Voies de <span className="text-sacred-gold">Guérison</span></h1>
                    <p className="text-sacred-cream/70 max-w-4xl mx-auto font-sans text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
                        Chaque âme est unique, chaque chemin l'est aussi. Nous tissons ensemble les méthodes les plus adaptées à votre structure énergétique.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                    {approaches.map((item, index) => (
                        <div 
                            key={index}
                            className={`
                                group relative p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] bg-white/5 border-2 border-white/5 backdrop-blur-md 
                                hover:bg-sacred-green-dark hover:border-sacred-gold/50 transition-all duration-700
                                transform hover:-translate-y-2 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]
                                ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                            `}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-sacred-gold/5 rounded-bl-full rounded-tr-[2rem] lg:rounded-tr-[2.5rem] transition-all duration-500 group-hover:bg-sacred-gold/10" />
                            
                            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-sacred-green border-2 border-sacred-gold/20 flex items-center justify-center text-sacred-gold mb-6 lg:mb-8 group-hover:scale-110 group-hover:bg-sacred-gold group-hover:text-sacred-green-dark transition-all duration-500">
                                {item.icon}
                            </div>
                            
                            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-sacred-cream mb-3 lg:mb-5 group-hover:text-sacred-gold transition-colors duration-300">{item.title}</h3>
                            <p className="font-sans text-base md:text-lg lg:text-xl text-sacred-cream/60 leading-relaxed group-hover:text-sacred-cream/80 transition-colors duration-300">{item.desc}</p>
                            
                            <div className="mt-6 lg:mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-sm uppercase tracking-widest text-sacred-gold font-bold">En savoir plus</span>
                                <div className="w-16 h-[2px] bg-sacred-gold" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 lg:mt-24 text-center">
                    <div className="p-10 lg:p-12 rounded-[3rem] bg-gradient-to-b from-sacred-green-dark/80 to-transparent border-2 border-sacred-gold/20 backdrop-blur-xl max-w-4xl mx-auto">
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-sacred-cream mb-6 lg:mb-8">Incertain de la voie à suivre ?</h2>
                        <Button onClick={() => onNavigate(View.BOOKING)}>Réserver un appel clarté offert</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;