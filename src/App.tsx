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
import { ThemeProvider } from './i18n/ThemeContext';
 
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 10);
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App min-h-screen w-full overflow-x-hidden dark:bg-gray-900 transition-colors duration-300" style={{ margin: 0, padding: 0 }}>
          <Navbar scrolled={scrolled} />
          <main className="w-full overflow-x-hidden">
            <Hero />
            <About />
            <Services />
            <Activities />
            <Store />
            <Portfolio />
            <Contact />
          </main>
          <Footer />
          <FloatingButtons showScrollTop={showScrollTop} />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
} 
 
export default App;
