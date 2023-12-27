import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}

export default App;
