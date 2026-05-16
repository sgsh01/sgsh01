import React from 'react';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Airlines from './components/Airlines';
import Fleet from './components/Fleet';
import Destinations from './components/Destinations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import SettingsPanel from './components/SettingsPanel';

function App() {
  return (
    <AppProvider>
      <div className="bg-dark min-h-screen">
        <Navbar />
        <Hero />
        <Airlines />
        <Fleet />
        <Destinations />
        <Contact />
        <Footer />
        <BookingModal />
        <SettingsPanel />
      </div>
    </AppProvider>
  );
}

export default App;