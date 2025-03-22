import React, { useEffect, useState } from 'react'; 
import Navbar from './components/Navbar'; 
import Hero from './components/Hero'; 
import About from './components/About'; 
import Services from './components/Services'; 
import Portfolio from './components/Portfolio'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer'; 
import FloatingButtons from './components/FloatingButtons'; 
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
        <Portfolio /> 
        <Contact /> 
        <Footer /> 
        <FloatingButtons showScrollTop={showScrollTop} /> 
      </div> 
    </LanguageProvider>
  ); 
} 
 
export default App;
