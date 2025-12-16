import React, { useEffect, useState } from 'react';
import { View } from '../../types';
import { Button } from '../ui/Button';
import { Shield, Users, Flame, Crown } from 'lucide-react';

interface MenProps {
    onNavigate: (view: View) => void;
}

const Men: React.FC<MenProps> = ({ onNavigate }) => {
     const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="w-full min-h-screen pt-28 lg:pt-36 relative">
             {/* Background Image Overlay specifically for this page */}
            <div className="fixed top-0 left-0 w-full h-[70vh] -z-10 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#284033]" />
                <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                    className="w-full h-full object-cover filter grayscale sepia-[.5]"
                    alt="Nature Landscape"
                />
            </div>

            <div className="max-w-[90rem] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Main Editorial Content */}
                <div className={`lg:col-span-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="text-sacred-gold uppercase tracking-[0.4em] text-sm font-bold mb-4 lg:mb-6 block">Cercle Sacré</span>
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl text-sacred-cream mb-10 lg:mb-16 leading-tight">
                        Retrouver la Puissance <br/>du <span className="text-sacred-gold italic">Masculin</span>
                    </h1>

                    <div className="space-y-8 lg:space-y-12 text-sacred-cream/80 font-sans leading-loose">
                        <p className="text-xl md:text-2xl lg:text-3xl font-light">
                            <span className="text-4xl md:text-6xl lg:text-7xl font-serif text-sacred-gold mr-4 float-left mt-[-5px] lg:mt-[-10px]">D</span>
                            ans un monde qui a perdu ses repères initiatiques, l'homme moderne erre souvent sans boussole. 
                            Sanatum Divinus propose un espace de reconstruction pour les hommes prêts à affronter leurs ombres 
                            et à embrasser leur lumière.
                        </p>
                        <p className="text-lg md:text-xl lg:text-2xl font-light">
                            Il ne s'agit pas de rejeter la vulnérabilité, mais de l'intégrer comme une force. 
                            De passer du statut de "guerrier blessé" à celui de "roi bienveillant". 
                            Nos retraites et accompagnements sont conçus pour forger le caractère, apaiser le cœur et clarifier l'esprit.
                        </p>
                        
                        <blockquote className="border-l-4 border-sacred-gold pl-8 lg:pl-10 py-4 my-8 lg:my-12 text-sacred-gold font-serif text-3xl lg:text-4xl italic">
                            "On ne naît pas homme, on le devient par l'épreuve, la fraternité et la conscience."
                        </blockquote>

                        <h3 className="font-serif text-4xl lg:text-5xl text-sacred-cream pt-6 lg:pt-10 mb-8">Les Piliers du Cercle</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 not-prose">
                            {[
                                { icon: <Shield size={32} />, title: "Protection & Force", text: "Développer une puissance saine, au service de soi et des autres." },
                                { icon: <Users size={32} />, title: "Fraternité", text: "Rompre l'isolement. Trouver des frères d'armes sur le chemin spirituel." },
                                { icon: <Flame size={32} />, title: "Alchimie Intérieure", text: "Transmuter la colère en créativité, la peur en courage." },
                                { icon: <Crown size={32} />, title: "Souveraineté & Vision", text: "Incarner sa propre loi, définir sa mission et laisser un héritage." },
                            ].map((val, i) => (
                                <div key={i} className="bg-white/5 p-6 lg:p-10 rounded-[2rem] border-2 border-white/5 hover:border-sacred-gold/30 transition-colors h-full flex flex-col">
                                    <div className="text-sacred-gold mb-4 lg:mb-6">{val.icon}</div>
                                    <h4 className="font-serif text-2xl lg:text-3xl text-sacred-cream mb-2 lg:mb-4">{val.title}</h4>
                                    <p className="text-base lg:text-lg text-sacred-cream/70 leading-relaxed">{val.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sticky Sidebar Booking */}
                <div className="lg:col-span-4 relative">
                    <div className={`sticky top-28 lg:top-40 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="bg-sacred-gold/10 backdrop-blur-xl border-2 border-sacred-gold/30 p-8 lg:p-12 rounded-[2rem] lg:rounded-[3rem] relative overflow-hidden">
                            <div className="absolute -top-20 -right-20 w-48 h-48 bg-sacred-gold/20 rounded-full blur-3xl"></div>
                            
                            <h3 className="font-serif text-3xl lg:text-4xl text-sacred-cream mb-2 lg:mb-4">Rejoindre le Clan</h3>
                            <p className="text-sacred-cream/70 text-base lg:text-lg mb-6 lg:mb-10">Prochaine immersion : "Le Roi Sage" - Octobre 2024</p>
                            
                            <div className="space-y-4 lg:space-y-6 mb-8 lg:mb-12">
                                <div className="flex justify-between items-center text-base lg:text-lg border-b border-white/10 pb-2 lg:pb-4">
                                    <span className="text-sacred-cream/60">Durée</span>
                                    <span className="text-sacred-cream font-bold">3 Jours</span>
                                </div>
                                <div className="flex justify-between items-center text-base lg:text-lg border-b border-white/10 pb-2 lg:pb-4">
                                    <span className="text-sacred-cream/60">Lieu</span>
                                    <span className="text-sacred-cream font-bold">Sanctuaire Privé, Alpes</span>
                                </div>
                                <div className="flex justify-between items-center text-base lg:text-lg border-b border-white/10 pb-2 lg:pb-4">
                                    <span className="text-sacred-cream/60">Places</span>
                                    <span className="text-sacred-gold font-bold">Dernières places</span>
                                </div>
                            </div>

                            <Button className="w-full justify-center text-base lg:text-lg" onClick={() => onNavigate(View.BOOKING)}>Candidater</Button>
                            <p className="text-center text-[10px] lg:text-xs uppercase tracking-widest text-sacred-cream/40 mt-4 lg:mt-6 font-bold">Entretien préalable requis</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Men;