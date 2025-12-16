import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { View } from '../../types';
import BookingView from '../views/BookingView';

interface ContactProps {
  onNavigate?: (view: View) => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  return (
       <section className="py-24 px-6 relative overflow-hidden bg-[#121c17] border-t border-white/5">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sacred-gold/20 to-transparent"></div>
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sacred-green/10 rounded-full blur-[120px] pointer-events-none" />
         
         <div className="max-w-[90rem] mx-auto relative z-10">
            
            {/* Header Centré */}
            <div className="text-center mb-16 lg:mb-20">
                <span className="uppercase text-[10px] tracking-[0.4em] text-sacred-gold font-bold block mb-4">
                    Le Lieu de Transformation
                </span>
                <h2 className="font-serif text-4xl lg:text-6xl text-sacred-cream">
                    Entrer dans le <span className="text-sacred-gold italic">Cercle</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch h-auto lg:h-[600px]">
                
                {/* COLONNE GAUCHE : CARTE DE CONTACT */}
                <div className="flex flex-col h-full">
                    <div className="bg-[#1A2B22]/60 backdrop-blur-md border border-white/5 p-10 lg:p-14 rounded-[2rem] h-full flex flex-col justify-between relative overflow-hidden group hover:border-sacred-gold/20 transition-all duration-500">
                        {/* Decor */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none"></div>

                        <div>
                            <h3 className="font-serif text-3xl text-sacred-cream mb-8">Informations</h3>
                            
                            <div className="space-y-8">
                                {/* Address */}
                                <div className="flex items-start gap-6 group/item">
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sacred-gold flex-shrink-0 group-hover/item:bg-sacred-gold group-hover/item:text-sacred-green-dark transition-all duration-300">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <span className="text-xs uppercase tracking-widest text-sacred-cream/40 font-bold block mb-1">Le Cabinet</span>
                                        <p className="text-xl text-sacred-cream font-serif">12 Rue des Archives</p>
                                        <p className="text-sacred-cream/60 font-light">75003 Paris, France</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-6 group/item">
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sacred-gold flex-shrink-0 group-hover/item:bg-sacred-gold group-hover/item:text-sacred-green-dark transition-all duration-300">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <span className="text-xs uppercase tracking-widest text-sacred-cream/40 font-bold block mb-1">Téléphone</span>
                                        <p className="text-xl text-sacred-cream font-serif">+33 6 12 34 56 78</p>
                                        <p className="text-sacred-cream/60 font-light">Du Lundi au Vendredi, 9h - 19h</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-6 group/item">
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sacred-gold flex-shrink-0 group-hover/item:bg-sacred-gold group-hover/item:text-sacred-green-dark transition-all duration-300">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <span className="text-xs uppercase tracking-widest text-sacred-cream/40 font-bold block mb-1">Email</span>
                                        <p className="text-xl text-sacred-cream font-serif">contact@sanatum.com</p>
                                        <p className="text-sacred-cream/60 font-light">Réponse sous 24h</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <p className="text-sacred-cream/40 text-sm font-light italic">
                                "Le premier pas vers la guérison est souvent le plus difficile. Nous sommes là pour vous guider."
                            </p>
                        </div>
                    </div>
                </div>

                {/* COLONNE DROITE : WIDGET DE RÉSERVATION */}
                <div className="flex flex-col h-full">
                    <div className="bg-gradient-to-br from-[#D9B95E]/10 to-[#1A2B22]/80 backdrop-blur-md border border-sacred-gold/30 p-8 lg:p-10 rounded-[2rem] h-full relative overflow-hidden shadow-[0_0_50px_rgba(217,185,94,0.05)] group hover:shadow-[0_0_80px_rgba(217,185,94,0.1)] transition-shadow duration-500 flex flex-col">
                        
                        {/* Background Effect */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
                        
                        <div className="relative z-10 w-full h-full flex flex-col">
                            <h3 className="font-serif text-2xl lg:text-3xl text-sacred-cream mb-4 text-center">
                                Réserver une Séance
                            </h3>
                            <div className="flex-grow">
                                <BookingView mode="widget" theme="dark" onNavigate={onNavigate} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
         </div>
       </section>
  );
};

export default Contact;