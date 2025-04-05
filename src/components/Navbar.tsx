import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSelector from './LanguageSelector';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, currentLanguage } = useLanguage(); // Assuming currentLanguage provides the active language
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.store'), href: '#store' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.contact'), href: '#contact' },
  ];
  
  return (
    <nav
      className={`navbar fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-md' : 'py-4'
      } bg-white`} // Ensure the navbar has a background to avoid transparency issues
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-primary font-serif font-bold text-2xl"
        >
          <img src="/eagle-icon.svg" alt="Eagle Shoot Logo" className="w-10 h-10" />
          <span>Eagle Shoot</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-secondary hover:text-primary font-medium transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <LanguageSelector />
        </div>
        
        {/* Mobile Navigation Toggle Button (Hamburger) */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSelector />
          <button className="text-secondary z-50" onClick={toggleMenu}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-[60px] left-0 right-0 bg-white shadow-lg w-full h-auto">
          <div className={`flex flex-col space-y-4 items-${currentLanguage === 'ar' ? 'end' : 'start'} py-4 px-6`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-secondary hover:text-primary font-medium transition-colors duration-300 py-2 w-full ${
                  currentLanguage === 'ar' ? 'text-right' : 'text-left'
                }`}
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;