import React from 'react';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
      <section className="py-16 lg:py-24 px-6 lg:px-8 relative bg-sacred-green-light/5 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-sacred-gold/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left: Portrait Image (4 cols) - Strictly Vertical/Rectangular */}
            <div className="lg:col-span-4 relative group">
                <div className="absolute top-6 -left-6 lg:top-8 lg:-left-8 w-full h-full border border-sacred-gold/30 rounded-[1rem] -z-10 transition-transform duration-700 group-hover:top-4 group-hover:-left-4"></div>
                
                <div className="relative h-[400px] lg:h-[550px] xl:h-[700px] w-full rounded-[1rem] overflow-hidden shadow-2xl filter grayscale-[0.2] contrast-110 group-hover:grayscale-0 transition-all duration-1000">
                    <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[2s]" 
                        alt="Alexandre Valmont" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sacred-green-dark via-transparent to-transparent opacity-80"></div>
                    
                    <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 text-white">
                        <div className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold">Alexandre V.</div>
                        <div className="text-sacred-gold uppercase tracking-[0.3em] text-[9px] lg:text-xs mt-2">Fondateur & Thérapeute</div>
                    </div>
                </div>
            </div>

            {/* Right: Description (8 cols) - Wide text area */}
            <div className="lg:col-span-8 relative">
                <Quote className="absolute -top-6 -left-6 lg:-top-10 lg:-left-10 w-16 h-16 lg:w-24 lg:h-24 text-sacred-gold/5 rotate-180" />
                
                <div className="pl-0 lg:pl-8">
                    <span className="text-sacred-gold uppercase tracking-[0.4em] font-bold text-[10px] lg:text-xs block mb-4 lg:mb-6 flex items-center gap-4">
                        <span className="w-8 lg:w-12 h-[1px] bg-sacred-gold"></span>
                        Le Guide
                    </span>
                    
                    <h2 className="font-serif text-5xl lg:text-6xl xl:text-8xl text-sacred-cream mb-6 lg:mb-10 leading-[0.9]">
                        Le Thérapeute <br/><span className="text-sacred-gold italic pl-10 lg:pl-20">Canal d'Ange</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-8 lg:mb-10">
                         <p className="text-base lg:text-lg xl:text-xl text-sacred-cream/80 font-light leading-loose text-justify">
                            Formé aux neurosciences cognitives à Genève puis initié aux traditions chamaniques en Amazonie péruvienne, 
                            je crée un pont unique entre la rigueur scientifique occidentale et le mystère du sacré. 
                            Mon parcours m'a mené des temples silencieux d'Asie aux laboratoires de recherche sur la conscience.
                        </p>
                        <p className="text-base lg:text-lg xl:text-xl text-sacred-cream/80 font-light leading-loose text-justify">
                            Depuis 10 ans, j'accompagne dirigeants, artistes et chercheurs de vérité. 
                            Je ne suis pas un gourou, mais un miroir. Mon rôle est de vous tenir l'espace pour que vous puissiez 
                            descendre en vous-même en toute sécurité et transmuter le plomb en or.
                        </p>
                    </div>

                    <div className="bg-white/5 border-l-4 border-sacred-gold p-6 lg:p-8 rounded-r-2xl mb-8 lg:mb-10">
                        <p className="font-serif text-xl lg:text-2xl xl:text-3xl text-sacred-gold italic leading-normal">
                            "La guérison n'est pas l'ajout de quelque chose qui vous manque, mais le retrait de tout ce qui n'est pas vous."
                        </p>
                    </div>

                    {/* Stats Horizontal */}
                    <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-6 lg:pt-8">
                        <div>
                            <span className="block text-3xl lg:text-5xl font-serif text-white mb-1 lg:mb-2">10+</span>
                            <span className="text-[9px] lg:text-xs uppercase tracking-widest text-sacred-cream/40">Années Pratique</span>
                        </div>
                        <div>
                            <span className="block text-3xl lg:text-5xl font-serif text-white mb-1 lg:mb-2">2k</span>
                            <span className="text-[9px] lg:text-xs uppercase tracking-widest text-sacred-cream/40">Patients</span>
                        </div>
                        <div>
                            <span className="block text-3xl lg:text-5xl font-serif text-white mb-1 lg:mb-2">∞</span>
                            <span className="text-[9px] lg:text-xs uppercase tracking-widest text-sacred-cream/40">Vies Changées</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
  );
};

export default About;