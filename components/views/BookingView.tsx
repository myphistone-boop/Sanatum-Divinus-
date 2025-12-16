import React, { useState } from 'react';
import { View } from '../../types';
import { Button } from '../ui/Button';
import { ChevronLeft, ChevronRight, Clock, Globe, Calendar as CalendarIcon } from 'lucide-react';

interface BookingViewProps {
    onNavigate?: (view: View) => void;
    isEmbedded?: boolean;
}

const BookingView: React.FC<BookingViewProps> = ({ onNavigate, isEmbedded = false }) => {
    // Mock Data for the calendar UI
    const days = [
        { day: 'Lun', date: '14' },
        { day: 'Mar', date: '15' },
        { day: 'Mer', date: '16' },
        { day: 'Jeu', date: '17' },
        { day: 'Ven', date: '18' },
    ];
    
    const timeSlots = ['09:00', '10:30', '14:00', '16:30'];
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    return (
      <div className={`flex items-center justify-center relative z-20 ${isEmbedded ? 'w-full py-20' : 'min-h-screen pt-32 pb-20 px-6 animate-fade-in-up'}`}>
          
          <div className={`bg-white text-sacred-green-dark overflow-hidden shadow-2xl w-full flex flex-col lg:flex-row relative ${isEmbedded ? 'rounded-[3rem] max-w-[90rem]' : 'rounded-[2rem] max-w-6xl h-auto lg:h-[800px]'}`}>
              
              {/* Close Button - Only show if not embedded and onNavigate is provided */}
              {!isEmbedded && onNavigate && (
                  <button 
                      onClick={() => onNavigate(View.HOME)} 
                      className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  >
                      ✕
                  </button>
              )}

              {/* Sidebar Info */}
              <div className="lg:w-1/3 bg-gray-50 p-12 border-r border-gray-200 flex flex-col">
                  <div className="w-16 h-16 rounded-full bg-sacred-green-dark text-sacred-gold flex items-center justify-center font-serif text-2xl font-bold mb-8 shadow-md">
                      AV
                  </div>
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">Alexandre Valmont</span>
                  <h2 className="font-serif text-4xl font-bold mb-6 text-sacred-green-dark">Séance Découverte</h2>
                  
                  <div className="space-y-4 text-gray-600 font-sans font-medium">
                      <div className="flex items-center gap-3">
                          <Clock size={20} className="text-gray-400" />
                          <span>45 min</span>
                      </div>
                      <div className="flex items-center gap-3">
                          <Globe size={20} className="text-gray-400" />
                          <span>Visio-conférence (Google Meet)</span>
                      </div>
                      <div className="flex items-center gap-3">
                          <CalendarIcon size={20} className="text-gray-400" />
                          <span>Octobre 2024</span>
                      </div>
                  </div>

                  <p className="mt-10 text-gray-500 leading-relaxed text-sm">
                      Un premier échange pour clarifier votre situation, définir vos objectifs et vérifier si mon approche correspond à vos besoins.
                  </p>
                  
                  <div className="mt-auto pt-8">
                       <div className="text-xs font-bold text-sacred-gold uppercase tracking-widest">Prix</div>
                       <div className="text-2xl font-bold">150.00€</div>
                  </div>
              </div>

              {/* Calendar Area */}
              <div className="lg:w-2/3 p-12 flex flex-col">
                  <h3 className="text-2xl font-bold mb-8">Sélectionnez une date et une heure</h3>
                  
                  {/* Calendar Header */}
                  <div className="flex justify-between items-center mb-8">
                      <span className="text-lg font-medium">Octobre 2024</span>
                      <div className="flex gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-full"><ChevronLeft size={20} /></button>
                          <button className="p-2 hover:bg-gray-100 rounded-full"><ChevronRight size={20} /></button>
                      </div>
                  </div>

                  {/* Calendar Grid (Mock) */}
                  <div className="flex flex-col h-full">
                       {/* Days Row */}
                       <div className="grid grid-cols-5 gap-4 mb-4">
                           {days.map((d, i) => (
                               <div key={i} className="text-center">
                                   <div className="text-xs uppercase font-bold text-gray-400 mb-2">{d.day}</div>
                                   <button 
                                      onClick={() => { setSelectedDate(d.date); setSelectedTime(null); }}
                                      className={`
                                        w-full aspect-square rounded-full flex items-center justify-center font-bold text-lg transition-all
                                        ${selectedDate === d.date 
                                            ? 'bg-sacred-green-dark text-white shadow-lg scale-110' 
                                            : 'bg-gray-50 text-sacred-green-dark hover:bg-sacred-gold/20 hover:text-sacred-green-dark'}
                                      `}
                                   >
                                       {d.date}
                                   </button>
                               </div>
                           ))}
                       </div>

                       {/* Time Slots Area (Conditional) */}
                       <div className="mt-8 flex-1 border-t border-gray-100 pt-8 overflow-y-auto">
                           {selectedDate ? (
                               <div className="animate-fade-in-up">
                                   <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Disponibilités pour le {selectedDate} Octobre</div>
                                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                       {timeSlots.map((time, i) => (
                                           <button 
                                                key={i}
                                                onClick={() => setSelectedTime(time)}
                                                className={`
                                                    py-4 rounded-xl font-bold border-2 transition-all duration-300
                                                    ${selectedTime === time 
                                                        ? 'border-sacred-green-dark bg-sacred-green-dark text-white' 
                                                        : 'border-sacred-green-dark/10 text-sacred-green-dark hover:border-sacred-gold hover:text-sacred-gold'}
                                                `}
                                           >
                                               {time}
                                           </button>
                                       ))}
                                   </div>
                                   
                                   {selectedTime && (
                                       <div className="mt-12 flex justify-end animate-fade-in-up">
                                           <Button onClick={() => alert("Interface démo - Backend requis")} className="shadow-xl">Confirmer</Button>
                                       </div>
                                   )}
                               </div>
                           ) : (
                               <div className="h-full flex items-center justify-center text-gray-300 italic">
                                   Sélectionnez un jour pour voir les horaires
                               </div>
                           )}
                       </div>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default BookingView;