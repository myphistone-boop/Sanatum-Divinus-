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
        icon: <Moon className="w-8 h-8 lg:w-10 lg:h-10" />,
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
        icon: <Activity className="w-8 h-8 lg:w-10 lg:h-10" />,
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
        icon: <Shield className="w-8 h-8 lg:w-10 lg:h-10" />,
        steps: ["Régulation Vagale", "Mouvement Primordial", "Libération Fascias", "Intégration"],
        duration: "1h15",
        science: "Théorie Polyvagale",
        target: "Anxiété, Burn-out"
    }
  ];

  return (
      <section className="py-20 lg:py-24 xl:py-32 px-6 relative z-10 overflow-hidden">
        <div className="max-w-[100rem] mx-auto">
            <div className="text-center mb-12 lg:mb-16">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-sacred-cream mb-4 lg:mb-6">Les Clés de la <span className="text-sacred-gold italic">Métamorphose</span></h2>
                <div className="w-16 lg:w-24 h-0.5 lg:h-1 bg-sacred-gold/30 mx-auto rounded-full"></div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch h-auto lg:h-[550px] xl:h-[700px]">
                
                {/* Left: Navigation Menu (Narrower) */}
                <div className="lg:w-1/4 flex flex-col gap-3 lg:gap-4 justify-center">
                    {features.map((feature, idx) => (
                        <div 
                            key={idx}
                            onClick={() => setActiveFeature(idx)}
                            className={`
                                p-5 lg:p-6 xl:p-8 rounded-[1.5rem] lg:rounded-[2rem] cursor-pointer transition-all duration-500 border relative overflow-hidden group
                                ${activeFeature === idx 
                                    ? 'bg-sacred-gold text-sacred-green-dark border-sacred-gold shadow-[0_10px_40px_rgba(217,185,94,0.3)] translate-x-2 lg:translate-x-4' 
                                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-sacred-gold/30 opacity-60 hover:opacity-100'}
                            `}
                        >
                            <div className="flex items-center gap-3 lg:gap-4 xl:gap-6 relative z-10">
                                <div className={`scale-75 lg:scale-90 transition-transform duration-500 group-hover:scale-110`}>
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="font-serif text-lg lg:text-xl xl:text-2xl font-bold leading-none">{feature.title}</h3>
                                    <span className="text-[9px] lg:text-[10px] xl:text-xs uppercase tracking-widest opacity-60 mt-1 lg:mt-2 block font-sans font-semibold">{feature.subtitle}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right: Massive Content Card (Wider) */}
                <div className="lg:w-3/4 relative">
                    <div 
                        key={activeFeature}
                        className="animate-fade-in-up w-full h-full bg-[#1A2B22]/90 backdrop-blur-2xl rounded-[2rem] lg:rounded-[2.5rem] xl:rounded-[3rem] border border-sacred-gold/20 p-6 lg:p-10 xl:p-16 relative overflow-hidden shadow-2xl group"
                    >
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-sacred-gold/5 rounded-full blur-[80px] lg:blur-[100px] pointer-events-none transition-all duration-1000 group-hover:bg-sacred-gold/10" />
                        
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 h-full">
                            
                            {/* Column 1: Text & Context */}
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-8">
                                        <div className="p-2 lg:p-3 bg-sacred-gold/10 rounded-full text-sacred-gold border border-sacred-gold/20">
                                            {features[activeFeature].icon}
                                        </div>
                                        <div className="text-sacred-gold uppercase tracking-[0.3em] text-[10px] lg:text-sm font-bold">Thérapie Sacrée</div>
                                    </div>

                                    <h3 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-sacred-cream mb-4 lg:mb-8 leading-[1.1]">
                                        {features[activeFeature].title}
                                    </h3>
                                    
                                    <p className="font-sans text-sm lg:text-base xl:text-lg text-sacred-cream/80 leading-relaxed mb-6 lg:mb-10 font-light text-justify border-l-2 border-sacred-gold/30 pl-4 lg:pl-6">
                                        {features[activeFeature].description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-3 lg:gap-6 mb-6 lg:mb-8">
                                        <div className="bg-white/5 rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/5">
                                            <div className="flex items-center gap-2 text-sacred-gold mb-1 lg:mb-2">
                                                <Brain size={16} className="lg:w-[18px]" />
                                                <span className="text-[10px] lg:text-xs uppercase tracking-wider font-bold">Science</span>
                                            </div>
                                            <span className="text-sacred-cream text-sm lg:text-base">{features[activeFeature].science}</span>
                                        </div>
                                        <div className="bg-white/5 rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/5">
                                            <div className="flex items-center gap-2 text-sacred-gold mb-1 lg:mb-2">
                                                <Clock size={16} className="lg:w-[18px]" />
                                                <span className="text-[10px] lg:text-xs uppercase tracking-wider font-bold">Durée</span>
                                            </div>
                                            <span className="text-sacred-cream text-sm lg:text-base">{features[activeFeature].duration}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <Button variant="outline" onClick={() => onNavigate(View.DISCOVER)} className="w-max px-6 py-3 text-xs lg:text-sm">
                                    Explorer en détail
                                </Button>
                            </div>

                            {/* Column 2: Process & Visuals */}
                            <div className="bg-sacred-green-dark rounded-[1.5rem] lg:rounded-[2rem] p-5 lg:p-8 xl:p-10 border border-white/5 relative overflow-hidden flex flex-col justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-sacred-gold/5 to-transparent"></div>
                                
                                <h4 className="font-serif text-xl lg:text-2xl text-sacred-cream mb-6 lg:mb-10 relative z-10">Le Protocole</h4>
                                
                                <div className="space-y-4 lg:space-y-8 relative z-10">
                                    {features[activeFeature].steps.map((step, i) => (
                                        <div key={i} className="flex items-center gap-4 lg:gap-6 group/step">
                                            <div className="relative">
                                                <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full border border-sacred-gold/40 bg-sacred-green-dark flex items-center justify-center text-sacred-gold text-sm lg:text-base font-bold shadow-[0_0_15px_rgba(217,185,94,0.2)] group-hover/step:scale-110 transition-transform">
                                                    {i + 1}
                                                </div>
                                                {i !== features[activeFeature].steps.length - 1 && (
                                                    <div className="absolute top-8 lg:top-10 xl:top-12 left-1/2 w-[1px] h-4 lg:h-8 bg-sacred-gold/20 -ml-[0.5px]"></div>
                                                )}
                                            </div>
                                            <div className="flex-1 p-2 lg:p-3 xl:p-4 rounded-lg lg:rounded-xl bg-white/5 border border-white/5 group-hover/step:border-sacred-gold/30 transition-colors">
                                                <span className="text-sm lg:text-base xl:text-lg text-sacred-cream/90 font-light tracking-wide">{step}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 lg:mt-10 flex items-center gap-2 lg:gap-3 text-sacred-gold/60 text-xs lg:text-sm justify-center border-t border-white/5 pt-4 lg:pt-6">
                                    <Check size={14} />
                                    <span>Approche non-invasive</span>
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