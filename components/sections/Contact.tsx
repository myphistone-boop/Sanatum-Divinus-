import React from 'react';
import BookingView from '../views/BookingView';
import { Clock, Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
       <section className="py-32 px-6 relative overflow-hidden bg-[#15231c]">
         {/* Background Glows */}
         <div className="absolute -left-40 top-1/2 transform -translate-y-1/2 w-[800px] h-[800px] bg-sacred-gold/5 rounded-full blur-[150px] pointer-events-none" />
         
         <div className="max-w-[100rem] mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-stretch bg-white/5 border border-white/5 rounded-[4rem] overflow-hidden backdrop-blur-sm">
                
                {/* Left: Contact Info & Text (Width 40%) */}
                <div className="lg:w-2/5 p-12 lg:p-20 flex flex-col justify-between relative">
                    <div className="absolute inset-0 bg-sacred-green-dark/80 -z-10"></div>
                    
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-[1px] bg-sacred-gold"></div>
                            <span className="uppercase text-xs tracking-[0.3em] text-sacred-gold font-bold">Contact</span>
                        </div>

                        <h2 className="font-serif text-6xl md:text-7xl text-sacred-cream tracking-tight leading-[1.1] mb-10">
                            Le Voyage <br/> <span className="text-sacred-gold italic">Commence Ici</span>
                        </h2>
                        
                        <p className="text-sacred-cream text-xl leading-relaxed mb-12 border-l-2 border-white/10 pl-6 font-light">
                            Il n'y a pas de hasard, seulement des rendez-vous. Si vous lisez ceci, c'est que l'appel a déjà été entendu.
                            Prenez place.
                        </p>
                    </div>

                    <div className="space-y-10">
                        <div className="flex items-center gap-8 group cursor-pointer bg-white/5 p-6 rounded-3xl border border-transparent hover:border-sacred-gold/30 transition-all">
                            <div className="w-16 h-16 rounded-full border border-sacred-gold/20 flex items-center justify-center text-sacred-gold group-hover:bg-sacred-gold group-hover:text-sacred-green-dark transition-colors duration-300 shadow-lg">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-serif text-lg text-sacred-cream/60 mb-1">Téléphone</h4>
                                <p className="text-sacred-cream text-2xl font-sans font-bold tracking-wide group-hover:text-sacred-gold transition-colors">+33 6 12 34 56 78</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-8 group cursor-pointer bg-white/5 p-6 rounded-3xl border border-transparent hover:border-sacred-gold/30 transition-all">
                            <div className="w-16 h-16 rounded-full border border-sacred-gold/20 flex items-center justify-center text-sacred-gold group-hover:bg-sacred-gold group-hover:text-sacred-green-dark transition-colors duration-300 shadow-lg">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-serif text-lg text-sacred-cream/60 mb-1">Email</h4>
                                <p className="text-sacred-cream text-xl font-sans font-bold tracking-wide group-hover:text-sacred-gold transition-colors break-all">contact@sanatum-divinus.com</p>
                            </div>
                        </div>
                         
                         <div className="flex items-center gap-8 group cursor-pointer bg-white/5 p-6 rounded-3xl border border-transparent hover:border-sacred-gold/30 transition-all">
                            <div className="w-16 h-16 rounded-full border border-sacred-gold/20 flex items-center justify-center text-sacred-gold group-hover:bg-sacred-gold group-hover:text-sacred-green-dark transition-colors duration-300 shadow-lg">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-serif text-lg text-sacred-cream/60 mb-1">Le Cabinet</h4>
                                <p className="text-sacred-cream text-xl font-sans font-bold tracking-wide group-hover:text-sacred-gold transition-colors">12 Rue du Temple, 75003 Paris</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Booking Widget (Width 60%) */}
                <div className="lg:w-3/5 bg-white relative">
                     <BookingView isEmbedded={true} />
                </div>

            </div>
         </div>
       </section>
  );
};

export default Contact;