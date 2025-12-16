import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Activity, Moon, Shield, Clock, Brain, Check } from 'lucide-react';
import { View } from '../../types';

interface MetamorphosisProps {
  onNavigate: (view: View) => void;
}

const Metamorphosis: React.FC<MetamorphosisProps> = ({ onNavigate }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
        title: "Hypnose Régressive",
        subtitle: "Voyage Quantique",
        description: "Un voyage guidé dans les profondeurs de l'inconscient pour dénouer les blocages émotionnels et les traumatismes enfouis. Nous accédons aux ondes Thêta pour reprogrammer les croyances limitantes à la racine.",
        detail: "Libérez-vous des schémas répétitifs en accédant à la source de vos mémoires.",
        icon: <Moon className="w-10 h-10" />,
        steps: ["Induction Thêta", "Régression Mémorielle", "Transmutation", "Ancrage Futur"],
        duration: "1h30",
        science: "Neuroplasticité",
        target: "Traumatismes, Phobies"
    },
    {
        title: "Bio-Résonance",
        subtitle: "Harmonie Vibratoire",
        description: "Analyse et rééquilibrage des fréquences énergétiques de vos organes. Le corps est un orchestre ; quand un organe joue faux, la symphonie s'effondre. Nous utilisons la technologie quantique pour réaccorder votre instrument.",
        detail: "Une technologie quantique pour scanner et corriger votre champ vibratoire.",
        icon: <Activity className="w-10 h-10" />,
        steps: ["Scan Bio-Champs", "Décodage Pathogène", "Harmonisation", "Imprégnation Eau"],
        duration: "1h00",
        science: "Physique Quantique",
        target: "Fatigue, Douleurs"
    },
    {
        title: "Ancrage Somatique",
        subtitle: "Retour au Corps",
        description: "Reconnecter le corps et l'esprit par le mouvement et la respiration consciente. Le traumatisme n'est pas dans l'événement, mais dans le système nerveux. Nous déchargeons l'énergie figée pour retrouver la fluidité.",
        detail: "Habitez pleinement votre corps pour vivre l'instant présent avec sérénité.",
        icon: <Shield className="w-10 h-10" />,
        steps: ["Régulation Vagale", "Mouvement Primordial", "Libération Fascias", "Intégration"],
        duration: "1h15",
        science: "Théorie Polyvagale",
        target: "Anxiété, Burn-out"
    }
  ];

  return (
      <section className="py-20 lg:py-32 px-6 relative z-10 overflow-hidden">
        <div className="max-w-[100rem] mx-auto">
            <div className="text-center mb-16 lg:mb-20">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-sacred-cream mb-6">Les Clés de la <span className="text-sacred-gold italic">Métamorphose</span></h2>
                <div className="w-24 lg:w-32 h-1 bg-sacred-gold/30 mx-auto rounded-full"></div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch h-auto lg:h-[600px] xl:h-[700px]">
                
                {/* Left: Navigation Menu (Narrower) */}
                <div className="lg:w-1/4 flex flex-col gap-4 justify-center">
                    {features.map((feature, idx) => (
                        <div 
                            key={idx}
                            onClick={() => setActiveFeature(idx)}
                            className={`
                                p-6 lg:p-8 rounded-[2rem] cursor-pointer transition-all duration-500 border relative overflow-hidden group
                                ${activeFeature === idx 
                                    ? 'bg-sacred-gold text-sacred-green-dark border-sacred-gold shadow-[0_10px_40px_rgba(217,185,94,0.3)] translate-x-4' 
                                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-sacred-gold/30 opacity-60 hover:opacity-100'}
                            `}
                        >
                            <div className="flex items-center gap-4 lg:gap-6 relative z-10">
                                <div className={`scale-90 transition-transform duration-500 group-hover:scale-110`}>
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl lg:text-2xl font-bold leading-none">{feature.title}</h3>
                                    <span className="text-[10px] lg:text-xs uppercase tracking-widest opacity-60 mt-2 block font-sans font-semibold">{feature.subtitle}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right: Massive Content Card (Wider) */}
                <div className="lg:w-3/4 relative">
                    <div 
                        key={activeFeature}
                        className="animate-fade-in-up w-full h-full bg-[#1A2B22]/90 backdrop-blur-2xl rounded-[2.5rem] lg:rounded-[3rem] border border-sacred-gold/20 p-8 lg:p-12 xl:p-16 relative overflow-hidden shadow-2xl group"
                    >
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sacred-gold/5 rounded-full blur-[100px] pointer-events-none transition-all duration-1000 group-hover:bg-sacred-gold/10" />
                        
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 h-full">
                            
                            {/* Column 1: Text & Context */}
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-4 mb-6 lg:mb-8">
                                        <div className="p-3 bg-sacred-gold/10 rounded-full text-sacred-gold border border-sacred-gold/20">
                                            {features[activeFeature].icon}
                                        </div>
                                        <div className="text-sacred-gold uppercase tracking-[0.3em] text-xs lg:text-sm font-bold">Thérapie Sacrée</div>
                                    </div>

                                    <h3 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-sacred-cream mb-6 lg:mb-8 leading-[1.1]">
                                        {features[activeFeature].title}
                                    </h3>
                                    
                                    <p className="font-sans text-lg lg:text-xl text-sacred-cream/80 leading-relaxed mb-8 lg:mb-10 font-light text-justify border-l-2 border-sacred-gold/30 pl-6">
                                        {features[activeFeature].description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 lg:gap-6 mb-8">
                                        <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                                            <div className="flex items-center gap-2 text-sacred-gold mb-2">
                                                <Brain size={18} />
                                                <span className="text-xs uppercase tracking-wider font-bold">Science</span>
                                            </div>
                                            <span className="text-sacred-cream text-base lg:text-lg">{features[activeFeature].science}</span>
                                        </div>
                                        <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                                            <div className="flex items-center gap-2 text-sacred-gold mb-2">
                                                <Clock size={18} />
                                                <span className="text-xs uppercase tracking-wider font-bold">Durée</span>
                                            </div>
                                            <span className="text-sacred-cream text-base lg:text-lg">{features[activeFeature].duration}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <Button variant="outline" onClick={() => onNavigate(View.DISCOVER)} className="w-max text-sm lg:text-base">
                                    Explorer en détail
                                </Button>
                            </div>

                            {/* Column 2: Process & Visuals */}
                            <div className="bg-sacred-green-dark rounded-[2rem] p-6 lg:p-10 border border-white/5 relative overflow-hidden flex flex-col justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-sacred-gold/5 to-transparent"></div>
                                
                                <h4 className="font-serif text-2xl lg:text-3xl text-sacred-cream mb-8 lg:mb-10 relative z-10">Le Protocole</h4>
                                
                                <div className="space-y-6 lg:space-y-8 relative z-10">
                                    {features[activeFeature].steps.map((step, i) => (
                                        <div key={i} className="flex items-center gap-6 group/step">
                                            <div className="relative">
                                                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-sacred-gold/40 bg-sacred-green-dark flex items-center justify-center text-sacred-gold font-bold shadow-[0_0_15px_rgba(217,185,94,0.2)] group-hover/step:scale-110 transition-transform">
                                                    {i + 1}
                                                </div>
                                                {i !== features[activeFeature].steps.length - 1 && (
                                                    <div className="absolute top-10 lg:top-12 left-1/2 w-[1px] h-6 lg:h-8 bg-sacred-gold/20 -ml-[0.5px]"></div>
                                                )}
                                            </div>
                                            <div className="flex-1 p-3 lg:p-4 rounded-xl bg-white/5 border border-white/5 group-hover/step:border-sacred-gold/30 transition-colors">
                                                <span className="text-base lg:text-lg text-sacred-cream/90 font-light tracking-wide">{step}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 lg:mt-10 flex items-center gap-3 text-sacred-gold/60 text-sm justify-center border-t border-white/5 pt-6">
                                    <Check size={16} />
                                    <span>Approche non-invasive et respectueuse</span>
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

export default Metamorphosis;