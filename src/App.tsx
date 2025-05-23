import { useEffect, useState } from 'react';
import About from './components/About';
import Activities from './components/Activities';
import Contact from './components/Contact';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Store from './components/Store';
import { LanguageProvider } from './i18n/LanguageContext';
 
function App() { 
  const [scrolled, setScrolled] = useState(false); 
  const [showScrollTop, setShowScrollTop] = useState(false); 

  useEffect(() => { 
    const handleScroll = () => { 
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      setShowScrollTop(scrollY > 500);
    }; 
 
    window.addEventListener('scroll', handleScroll); 
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []); 
 
  return ( 
    <LanguageProvider>
      <div className="min-h-screen bg-accent"> 
        <Navbar scrolled={scrolled} /> 
        <Hero /> 
        <About /> 
        <Services /> 
        <Store/>
        <Activities />
        <Portfolio /> 
        <Contact /> 
        <Footer /> 
        <FloatingButtons showScrollTop={showScrollTop} /> 
      </div> 
    </LanguageProvider>
  ); 
} 
 
export default App;
