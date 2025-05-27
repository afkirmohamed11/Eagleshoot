import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSelector from './LanguageSelector';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, currentLanguage } = useLanguage();
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.activities'), href: '#activities' },
    { name: t('nav.store'), href: '#store' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.contact'), href: '#contact' },
  ];
  
  return (
    <nav
      className={`navbar fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-md' : 'py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className={`flex items-center gap-2 text-primary font-serif font-bold text-xl sm:text-2xl ${
            currentLanguage === 'ar' ? 'flex-row-reverse' : ''
          }`}
        >
          <img src="/eagle-icon.svg" alt="Eagle Shoot Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
          <span>Eagle Shoot</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className={`hidden md:flex items-center ${
          currentLanguage === 'ar' ? 'space-x-reverse space-x-8' : 'space-x-8'
        }`}>
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
        
        {/* Mobile Navigation Toggle Button */}
        <div className={`md:hidden flex items-center ${
          currentLanguage === 'ar' ? 'flex-row-reverse gap-4' : 'gap-4'
        }`}>
          <LanguageSelector />
          <button 
            className="menu-button text-secondary z-50 p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`mobile-menu md:hidden fixed top-[60px] ${
          currentLanguage === 'ar' ? 'right-0 left-0' : 'left-0 right-0'
        } bg-white shadow-lg w-full h-auto transition-transform duration-300 ease-in-out ${
          isOpen ? 'open' : ''
        }`}
        dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className={`flex flex-col py-4 px-6 space-y-0 ${
          currentLanguage === 'ar' ? 'items-end' : 'items-start'
        }`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: currentLanguage === 'ar' ? 'flex-end' : 'flex-start'
        }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-secondary hover:text-primary font-medium transition-colors duration-300 py-3 w-full block ${
                currentLanguage === 'ar' ? 'text-right' : 'text-left'
              }`}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: currentLanguage === 'ar' ? 'right' : 'left'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;