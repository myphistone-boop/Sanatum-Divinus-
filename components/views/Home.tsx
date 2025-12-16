import React, { useEffect, useState } from 'react';
import Orrery from '../Orrery';
import { Button } from '../ui/Button';
import { Star, CheckCircle, Activity, Moon, Shield, Sparkles, Quote } from 'lucide-react';
import { View } from '../../types';
import { LOGO_URL } from '../../constants';
import BookingView from './BookingView';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [mounted, setMounted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
        title: "Hypnose Régressive",
        subtitle: "Voyage Quantique",
        description: "Un voyage guidé dans les profondeurs de l'inconscient pour dénouer les blocages émotionnels et les traumatismes enfouis.",
        detail: "Libérez-vous des schémas répétitifs en accédant à la source de vos mémoires.",
        icon: <Moon className="w-12 h-12" />,
        steps: ["Induction Profonde", "Exploration Mémorielle", "Libération & Soin"]
    },
    {
        title: "Bio-Résonance",
        subtitle: "Harmonie Vibratoire",
        description: "Analyse et rééquilibrage des fréquences énergétiques de vos organes pour restaurer l'harmonie vitale.",
        detail: "Une technologie quantique pour scanner et corriger votre champ vibratoire.",
        icon: <Activity className="w-12 h-12" />,
        steps: ["Scan Énergétique", "Analyse Fréquentielle", "Ré-Information Cellulaire"]
    },
    {
        title: "Ancrage Somatique",
        subtitle: "Retour au Corps",
        description: "Reconnecter le corps et l'esprit par le mouvement et la respiration consciente pour dissoudre la charge nerveuse.",
        detail: "Habitez pleinement votre corps pour vivre l'instant présent avec sérénité.",
        icon: <Shield className="w-12 h-12" />,
        steps: ["Régulation Nerveuse", "Mouvement Conscient", "Intégration"]
    }
  ];

  const testimonials = [
      { name: "Sophie L.", role: "Entrepreneur", text: "Je ne pensais pas qu'une seule séance pouvait autant changer ma perception de moi-même. Une révélation." },
      { name: "Marc D.", role: "Architecte", text: "Le cercle d'hommes m'a redonné une force que j'avais oubliée. Une fraternité indispensable." },
      { name: "Elodie P.", role: "Artiste", text: "La bio-résonance a débloqué ma créativité de manière spectaculaire. Je recommande les yeux fermés." },
      { name: "Thomas V.", role: "Sportif", text: "L'ancrage somatique m'a permis de gérer mon stress avant les compétitions. Merci Alexandre." },
      { name: "Camille R.", role: "Thérapeute", text: "Une approche d'une justesse incroyable. Alexandre incarne ce qu'il enseigne." },
      { name: "Julien M.", role: "Ingénieur", text: "Sceptique au début, je suis reparti transformé. L'hypnose a été une clé majeure." }
  ];

  return (
    <div className="w-full relative">
      {/* --- HERO SECTION --- */}
      <section className="min-h-screen w-full flex flex-col lg:flex-row items-center relative overflow-hidden pt-40 lg:pt-0">
        
        {/* Left Content */}
        <div className={`
            flex-1 h-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 xl:px-32 z-20 
            transition-all duration-1000 ease-out transform
            ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
          `}>
          
          <div className="w-full max-w-[90rem] bg-sacred-green-dark/60 backdrop-blur-2xl border border-sacred-gold/20 p-16 md:p-28 rounded-[5rem] relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] group transition-all duration-700 hover:shadow-[0_60px_120px_rgba(217,185,94,0.15)] hover:border-sacred-gold/40">
            
            <div className="absolute inset-6 border border-sacred-gold/10 rounded-[4rem] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sacred-gold/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="inline-flex items-center gap-5 px-8 py-4 rounded-full border border-sacred-gold/30 bg-sacred-gold/10 mb-16 shadow-lg">
              <Star size={16} className="text-sacred-gold fill-sacred-gold animate-pulse" />
              <span className="text-sm md:text-base uppercase tracking-[0.4em] text-sacred-gold font-bold">Holistique Premium</span>
            </div>

            <h1 className="font-serif text-7xl md:text-9xl lg:text-[11rem] text-sacred-cream leading-[0.9] tracking-tight mb-16 drop-shadow-2xl">
              L'Éveil de la <br />
              <span className="text-sacred-gold relative inline-block italic pr-8">
                Conscience
                <div className="absolute -bottom-6 left-0 w-full h-[4px] bg-gradient-to-r from-sacred-gold/0 via-sacred-gold/50 to-sacred-gold/0" />
              </span>
            </h1>

            <p className="font-sans text-sacred-cream/90 text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-24 max-w-4xl font-light drop-shadow-lg">
              Sanatum Divinus n'est pas une destination, c'est un retour à soi. 
              Une alchimie silencieuse entre thérapies ancestrales et neurosciences modernes.
            </p>

            <div className="flex flex-col sm:flex-row gap-12 relative z-10">
              <Button onClick={() => onNavigate(View.DISCOVER)} className="animate-breathe shadow-[0_20px_60px_rgba(217,185,94,0.3)] hover:shadow-[0_30px_80px_rgba(217,185,94,0.5)]">
                Commencer le Voyage
              </Button>
              <Button variant="ghost" onClick={() => onNavigate(View.MEN)} className="opacity-90 hover:opacity-100 bg-white/5 backdrop-blur-md border border-white/10 hover:border-sacred-gold/50 rounded-full">
                Espace Hommes
              </Button>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className={`
            flex-1 h-full flex items-center justify-center relative z-10
            transition-all duration-1000 delay-300 ease-out transform
            ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}>
          <div className="transform scale-125 lg:scale-150 origin-center translate-x-10 hover:scale-160 transition-transform duration-[2s]">
             <Orrery />
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE THERAPIES SECTION --- */}
      <section className="py-48 px-8 relative z-10">
        <div className="max-w-[90rem] mx-auto">
            <div className="text-center mb-24">
                <h2 className="font-serif text-6xl md:text-7xl text-sacred-cream mb-8">Les Clés de la <span className="text-sacred-gold italic">Métamorphose</span></h2>
                <p className="text-xl md:text-2xl text-sacred-cream/60 max-w-3xl mx-auto">Découvrez nos piliers thérapeutiques. Cliquez pour explorer le processus.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                {/* Interactive Menu */}
                <div className="space-y-6 flex flex-col justify-center">
                    {features.map((feature, idx) => (
                        <div 
                            key={idx}
                            onClick={() => setActiveFeature(idx)}
                            className={`
                                p-12 rounded-[3rem] cursor-pointer transition-all duration-500 border-2 relative overflow-hidden group
                                ${activeFeature === idx 
                                    ? 'bg-sacred-gold border-sacred-gold shadow-[0_20px_50px_rgba(217,185,94,0.3)] scale-105 z-10' 
                                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-sacred-gold/30 hover:translate-x-4 opacity-70 hover:opacity-100'}
                            `}
                        >
                            <div className="flex items-center gap-8 relative z-10">
                                <div className={`${activeFeature === idx ? 'text-sacred-green-dark' : 'text-sacred-gold'} transition-colors duration-500`}>
                                    {feature.icon}
                                </div>
                                <div>
                                    <span className={`uppercase tracking-widest text-xs font-bold mb-2 block ${activeFeature === idx ? 'text-sacred-green-dark/70' : 'text-sacred-gold/70'}`}>
                                        {feature.subtitle}
                                    </span>
                                    <h3 className={`font-serif text-3xl md:text-4xl font-bold ${activeFeature === idx ? 'text-sacred-green-dark' : 'text-sacred-cream'}`}>
                                        {feature.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Display Panel - Expanded content */}
                <div className="relative min-h-[600px] w-full bg-sacred-green-dark/80 backdrop-blur-xl rounded-[4rem] border border-sacred-gold/20 p-16 flex flex-col justify-center shadow-2xl transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-sacred-gold/10 to-transparent rounded-[4rem] pointer-events-none" />
                    <div className="absolute top-10 right-10 opacity-20 text-sacred-gold">
                        <Sparkles size={100} strokeWidth={0.5} />
                    </div>
                    
                    <div key={activeFeature} className="animate-fade-in-up relative z-10">
                        <div className="flex items-center gap-6 mb-10">
                            <div className="w-20 h-20 bg-sacred-gold/20 rounded-full flex items-center justify-center text-sacred-gold border border-sacred-gold/30">
                                {features[activeFeature].icon}
                            </div>
                            <div>
                                 <h3 className="font-serif text-5xl text-sacred-gold">{features[activeFeature].title}</h3>
                                 <div className="h-1 w-20 bg-sacred-gold/50 mt-4 rounded-full"></div>
                            </div>
                        </div>

                        <p className="font-sans text-2xl text-sacred-cream/90 leading-relaxed mb-12 font-light">
                            {features[activeFeature].description}
                        </p>

                        {/* Steps visualization */}
                        <div className="space-y-6 mb-12">
                            <span className="uppercase text-sm tracking-[0.3em] text-sacred-gold/70 font-bold block mb-4">Le Déroulement</span>
                            {features[activeFeature].steps.map((step, i) => (
                                <div key={i} className="flex items-center gap-6 bg-white/5 p-4 rounded-2xl border border-white/5">
                                    <div className="w-8 h-8 rounded-full bg-sacred-gold text-sacred-green-dark font-bold flex items-center justify-center text-sm shadow-lg">
                                        {i + 1}
                                    </div>
                                    <span className="text-xl text-sacred-cream">{step}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-sacred-gold/10 p-8 rounded-3xl border-l-4 border-sacred-gold">
                            <p className="font-serif text-xl text-sacred-cream/80 italic">"{features[activeFeature].detail}"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- MEN'S GROUP SECTION - IMMERSIVE IMAGE --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden my-20">
         {/* Parallax Background Image */}
         <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-fixed bg-cover bg-center scale-110" 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')" }}>
             </div>
             {/* Heavy Gradients for readability */}
             <div className="absolute inset-0 bg-gradient-to-t from-sacred-green-dark via-sacred-green-dark/80 to-sacred-green-dark/40" />
             <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
         </div>
         
         <div className="max-w-[90rem] mx-auto px-8 relative z-10 w-full text-center">
            <div className="animate-fade-in-up">
                <span className="inline-block py-2 px-6 rounded-full border border-sacred-gold/50 text-sacred-gold uppercase tracking-[0.4em] font-bold text-sm mb-8 bg-sacred-green-dark/50 backdrop-blur-md">
                    Fraternité Sacrée
                </span>
                <h2 className="font-serif text-7xl md:text-9xl text-sacred-cream mb-10 leading-none drop-shadow-2xl">
                    Le Cercle des <br/><span className="text-sacred-gold italic">Hommes</span>
                </h2>
                
                <div className="max-w-4xl mx-auto bg-sacred-green-dark/60 backdrop-blur-xl p-12 md:p-20 rounded-[4rem] border border-white/10 hover:border-sacred-gold/30 transition-colors duration-500 shadow-2xl">
                    <p className="text-sacred-cream/90 text-2xl md:text-3xl leading-relaxed mb-12 font-light">
                        Un espace hors du temps pour déposer les armes, confronter ses ombres et retrouver une puissance saine. 
                        Rejoignez une communauté d'hommes engagés sur la voie de l'excellence intérieure.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
                        {['Dépassement de soi', 'Parole authentique', 'Rites de passage'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-lg md:text-xl text-sacred-gold font-bold uppercase tracking-wider">
                                <CheckCircle className="w-6 h-6" /> {item}
                            </div>
                        ))}
                    </div>

                    <Button variant="primary" onClick={() => onNavigate(View.MEN)} className="scale-125">
                        Rejoindre le Clan
                    </Button>
                </div>
            </div>
         </div>
      </section>

      {/* --- INFINITE SCROLL TESTIMONIALS --- */}
      <section className="py-40 relative overflow-hidden bg-sacred-green-dark/30">
        <div className="text-center mb-24 relative z-10 px-6">
            <h2 className="font-serif text-6xl md:text-7xl text-sacred-cream mb-6">La Voix de la <span className="text-sacred-gold italic">Communauté</span></h2>
            <p className="text-sacred-cream/50 uppercase tracking-[0.3em]">Ils ont franchi le pas</p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden group">
            <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-[#20332a] to-transparent z-10" />
            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-[#20332a] to-transparent z-10" />
            
            <div className="flex gap-12 w-max animate-marquee group-hover:[animation-play-state:paused] px-12">
                {[...testimonials, ...testimonials].map((t, i) => (
                    <div key={i} className="w-[500px] p-12 rounded-[3rem] bg-white/5 border border-white/5 backdrop-blur-md flex-shrink-0 hover:bg-white/10 transition-colors duration-300">
                        <Quote className="w-10 h-10 text-sacred-gold mb-8 opacity-50" />
                        <p className="font-serif text-2xl text-sacred-cream/90 italic leading-relaxed mb-10 h-32 overflow-hidden">
                            "{t.text}"
                        </p>
                        <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                            <div className="w-12 h-12 rounded-full bg-sacred-gold/20 flex items-center justify-center text-sacred-gold font-bold text-lg">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <div className="font-bold text-sacred-cream tracking-wide">{t.name}</div>
                                <div className="text-xs text-sacred-gold uppercase tracking-widest">{t.role}</div>
                            </div>
                            <div className="ml-auto flex gap-1">
                                {[1,2,3,4,5].map(star => <Star key={star} size={14} className="fill-sacred-gold text-sacred-gold" />)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section className="py-48 px-8 relative">
        <div className="max-w-[90rem] mx-auto">
            <div className="text-center mb-32">
                <h2 className="font-serif text-6xl md:text-7xl text-sacred-cream mb-8">Investir en <span className="text-sacred-gold italic">Soi</span></h2>
                <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-sacred-gold to-transparent mx-auto" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                {/* Card 1 */}
                <div className="p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-md text-center hover:-translate-y-4 transition-transform duration-500">
                    <h3 className="font-serif text-3xl text-sacred-cream mb-4">Découverte</h3>
                    <div className="text-5xl font-bold text-sacred-gold mb-8">150€<span className="text-lg font-normal text-sacred-cream/50">/séance</span></div>
                    <p className="text-sacred-cream/60 mb-10 text-lg">Pour initier le mouvement et clarifier une problématique précise.</p>
                    <Button variant="outline" className="w-full text-sm" onClick={() => onNavigate(View.BOOKING)}>Réserver</Button>
                </div>

                {/* Card 2 - Highlighted */}
                <div className="p-16 rounded-[4rem] bg-sacred-green-dark/80 border-2 border-sacred-gold backdrop-blur-xl text-center transform scale-110 shadow-[0_30px_80px_rgba(217,185,94,0.2)] z-10 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sacred-gold text-sacred-green-dark px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg">
                        Recommandé
                    </div>
                    <h3 className="font-serif text-4xl text-sacred-cream mb-4">Renaissance</h3>
                    <div className="text-6xl font-bold text-sacred-gold mb-8">550€<span className="text-lg font-normal text-sacred-cream/50">/mois</span></div>
                    <p className="text-sacred-cream/80 mb-12 text-xl font-light">Accompagnement complet sur 4 séances + suivi WhatsApp illimité.</p>
                    <ul className="text-left space-y-4 mb-12 text-sacred-cream/70 mx-auto max-w-xs">
                        <li className="flex gap-3"><Sparkles size={20} className="text-sacred-gold" /> Bilan Énergétique</li>
                        <li className="flex gap-3"><Sparkles size={20} className="text-sacred-gold" /> 2 Hypnoses</li>
                        <li className="flex gap-3"><Sparkles size={20} className="text-sacred-gold" /> Soin Sonore</li>
                    </ul>
                    <Button className="w-full shadow-xl" onClick={() => onNavigate(View.BOOKING)}>Commencer</Button>
                </div>

                {/* Card 3 */}
                <div className="p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-md text-center hover:-translate-y-4 transition-transform duration-500">
                    <h3 className="font-serif text-3xl text-sacred-cream mb-4">Immersion</h3>
                    <div className="text-5xl font-bold text-sacred-gold mb-8">1200€<span className="text-lg font-normal text-sacred-cream/50">/3 jours</span></div>
                    <p className="text-sacred-cream/60 mb-10 text-lg">Retraite individuelle intensive en nature. Logement inclus.</p>
                    <Button variant="outline" className="w-full text-sm" onClick={() => onNavigate(View.BOOKING)}>En savoir plus</Button>
                </div>
            </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="py-40 px-8 relative bg-sacred-green-light/10">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="relative">
                <div className="h-[800px] w-full rounded-t-full rounded-b-[200px] overflow-hidden border-[3px] border-sacred-gold/30 relative z-10 hover:scale-[1.02] transition-transform duration-1000 shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover filter sepia-[0.2]" alt="Therapist" />
                </div>
                {/* Background Aura */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-sacred-gold/20 blur-[100px] -z-10" />
            </div>

            <div className="space-y-12">
                <span className="text-sacred-gold uppercase tracking-[0.4em] font-bold text-sm">Le Guide</span>
                <h2 className="font-serif text-6xl md:text-7xl text-sacred-cream">
                    Alexandre <br/><span className="text-sacred-gold italic">Valmont</span>
                </h2>
                <p className="text-2xl md:text-3xl font-light text-sacred-cream/80 leading-relaxed">
                    "J'ai traversé l'ombre pour apprendre à servir la lumière. Mon approche ne cherche pas à vous réparer, car vous n'êtes pas cassé. Elle vise à vous souvenir de qui vous êtes."
                </p>
                <div className="space-y-6 text-xl text-sacred-cream/60 font-sans leading-loose">
                    <p>
                        Formé aux neurosciences cognitives puis initié aux traditions chamaniques en Amazonie, 
                        je crée un pont entre la rigueur scientifique et le mystère du sacré.
                    </p>
                    <p>
                        Depuis 10 ans, j'accompagne dirigeants, artistes et chercheurs de vérité dans leur processus d'individuation.
                    </p>
                </div>
                
                <div className="pt-8">
                     <p className="font-serif text-4xl text-sacred-gold italic font-bold opacity-80 rotate-[-5deg]">Alexandre V.</p>
                </div>
            </div>
        </div>
      </section>

       {/* --- CTA / BOOKING --- */}
       <section className="py-40 px-8 text-center relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-sacred-gold/10 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
         
         <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className="font-serif text-7xl md:text-9xl text-sacred-cream mb-12 tracking-tight">Le Voyage Commence</h2>
            <div className="w-[2px] h-32 bg-gradient-to-b from-transparent via-sacred-gold/50 to-transparent mx-auto mb-12"></div>
            <p className="text-sacred-cream/80 max-w-2xl mx-auto mb-20 font-sans text-2xl md:text-3xl font-light tracking-wide">
                Réservez votre séance découverte et franchissez le seuil.
            </p>
            
            {/* Embedded Booking View */}
            <div className="mt-20">
                 <BookingView isEmbedded={true} />
            </div>
         </div>
       </section>

       {/* --- FOOTER --- */}
       <footer className="border-t border-white/5 bg-[#131f19] py-24 px-8">
         <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-12 opacity-70 hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center gap-6">
              <img src={LOGO_URL} className="w-10 h-10 grayscale opacity-50" alt="logo" />
              <span className="font-serif tracking-[0.25em] text-white/50 text-sm font-bold">SANATUM DIVINUS © 2024</span>
            </div>
            <div className="flex gap-16">
              <span className="text-sm uppercase tracking-[0.25em] text-white/50 hover:text-sacred-gold cursor-pointer transition-colors font-semibold">Mentions Légales</span>
              <span className="text-sm uppercase tracking-[0.25em] text-white/50 hover:text-sacred-gold cursor-pointer transition-colors font-semibold">Contact</span>
            </div>
         </div>
       </footer>
    </div>
  );
};

export default Home;