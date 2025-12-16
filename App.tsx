import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BackgroundCanvas from './components/BackgroundCanvas';
import Home from './components/views/Home';
import Discover from './components/views/Discover';
import Men from './components/views/Men';
import BookingView from './components/views/BookingView';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  return (
    <div className="min-h-screen text-sacred-cream font-sans selection:bg-sacred-gold selection:text-sacred-green-dark">
      <BackgroundCanvas />
      
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="transition-opacity duration-500 ease-in-out">
        {currentView === View.HOME && <Home onNavigate={setCurrentView} />}
        {currentView === View.DISCOVER && <Discover onNavigate={setCurrentView} />}
        {currentView === View.MEN && <Men onNavigate={setCurrentView} />}
        {currentView === View.BOOKING && <BookingView onNavigate={setCurrentView} />}
      </main>
    </div>
  );
};

export default App;