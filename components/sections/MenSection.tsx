import React from 'react';
import { Button } from '../ui/Button';
import { CheckCircle, Shield, Users, Flame } from 'lucide-react';
import { View } from '../../types';

interface MenSectionProps {
  onNavigate: (view: View) => void;
}

const MenSection: React.FC<MenSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[80vh] lg:min-h-screen py-20 lg:py-24 bg-[#1a2b22] overflow-hidden flex flex-col justify-center">
         {/* Background Subtle Text */}
         <div className="absolute top-20 left-10 text-[6rem] md:text-[8rem] lg:text-[12rem] xl:text-[15rem] font-serif font-bold text-white/[0.02] pointer-events-none select-none leading-none">
             MAN
         </div>

         <div className="max-w-[100rem] mx-auto px-6 lg:px-8 w-full relative z-10">
            
            <div className="flex flex-col gap-8 lg:gap-10">
                
                {/* 1. Landscape Image (Grand Rectangle Paysage) */}
                <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden border-2 border-sacred-gold/40 shadow-[0_0_80px_rgba(217,185,94,0.15)] group">
                    <div className="absolute inset-0 bg-sacred-green-dark/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                        alt="Cercle d'Hommes" 
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[3s] filter sepia-[0.3] contrast-110"
                    />
                    
                    {/* Floating Badge on Image */}
                    <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 bg-sacred-gold/90 text-sacred-green-dark backdrop-blur-md px-4 py-2 lg:px-8 lg:py-4 rounded-full uppercase tracking-[0.2em] font-bold text-[10px] lg:text-sm z-20 shadow-lg flex items-center gap-2 lg:gap-3">
                        <Flame size={14} className="lg:w-[18px] lg:h-[18px]" />
                        <span>Cercle Guerrier • Octobre 2024</span>
                    </div>
                </div>

                {/* 2. Content Card (Below, acting as a dashboard panel) */}
                <div className="w-full">
                    <div className="bg-sacred-green-dark/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] lg:rounded-[2.5rem] xl:rounded-[3rem] p-6 lg:p-10 xl:p-16 shadow-2xl relative overflow-hidden">
                        {/* Decorative Gradient */}
                        <div className="absolute -top-40 -right-40 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-sacred-gold/5 rounded-full blur-[120px] pointer-events-none" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                            
                            {/* Text Content */}
                            <div className="lg:col-span-7">
                                <span className="inline-block py-1.5 px-4 lg:py-2 lg:px-6 rounded-full border border-sacred-gold/30 bg-sacred-gold/10 text-sacred-gold uppercase tracking-[0.4em] font-bold text-[9px] lg:text-xs mb-4 lg:mb-8">
                                    Fraternité Sacrée
                                </span>
                                
                                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-sacred-cream mb-4 lg:mb-8 leading-[0.9]">
                                    Le Cercle des <br/><span className="text-sacred-gold italic">Hommes</span>
                                </h2>
                                
                                <div className="flex flex-col gap-4 lg:gap-6">
                                    <p className="text-sacred-cream/90 text-base lg:text-lg xl:text-xl leading-relaxed font-light text-justify">
                                        Un espace hors du temps pour déposer les armes. Il ne s'agit pas de devenir un "homme fort" au sens archaïque, mais un homme conscient, capable d'intégrer sa puissance comme sa vulnérabilité.
                                    </p>
                                    <div className="flex items-center gap-4 text-sacred-gold font-serif italic text-base lg:text-lg border-l-2 border-sacred-gold/30 pl-4">
                                        "Retrouvez votre axe dans la tempête. Ici, pas de jugement, pas de masque."
                                    </div>
                                </div>
                            </div>
                            
                            {/* Features & CTA */}
                            <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-6">
                                {/* Horizontal Icon Features */}
                                <div className="grid grid-cols-1 gap-3 lg:gap-4">
                                     {[
                                        { icon: <Shield size={20} className="lg:w-6 lg:h-6" />, title: "Protection", desc: "Saine puissance" },
                                        { icon: <Users size={20} className="lg:w-6 lg:h-6" />, title: "Fraternité", desc: "Soutien inconditionnel" }
                                     ].map((item, i) => (
                                        <div key={i} className="bg-white/5 px-5 py-4 lg:px-8 lg:py-6 rounded-[1.2rem] lg:rounded-[1.5rem] border border-white/5 hover:border-sacred-gold/30 hover:bg-white/10 transition-all flex items-center gap-4 lg:gap-6">
                                            <div className="text-sacred-gold">{item.icon}</div>
                                            <div>
                                                <h4 className="font-serif text-lg lg:text-xl text-sacred-cream leading-none mb-1">{item.title}</h4>
                                                <p className="text-[10px] lg:text-xs text-sacred-cream/50 uppercase tracking-widest">{item.desc}</p>
                                            </div>
                                        </div>
                                     ))}
                                </div>

                                <div className="mt-2 lg:mt-4">
                                    <Button variant="primary" onClick={() => onNavigate(View.MEN)} className="w-full shadow-2xl py-4 lg:py-6 text-sm lg:text-base">
                                        Rejoindre le Clan
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
         </div>
    </section>
  );
};

export default MenSection;