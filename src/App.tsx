import React from 'react';
import { motion } from 'framer-motion';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import TrustMarquee from './components/TrustMarquee';
import IconTiles from './components/IconTiles';
import Outcomes from './components/Outcomes';
import FeaturedStudy from './components/FeaturedStudy';
import TechIdeas from './components/TechIdeas';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <HeaderNav />
      
      <main>
        <Hero />
        <TrustMarquee />
        <IconTiles />
        <Outcomes />
        <FeaturedStudy />
        <TechIdeas />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;