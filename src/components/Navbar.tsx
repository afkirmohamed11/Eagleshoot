import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();
  
  // Optimized click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && 
          !target.closest('.mobile-menu') && 
          !target.closest('.menu-button') &&
          !target.closest('.language-selector')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside, { passive: true });
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Optimized toggle function
  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(prev => !prev);
  };

  // Optimized close function
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.activities'), href: '#activities' },
    { name: t('nav.store'), href: '#store' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.contact'), href: '#contact' },
  ];
  
  return (    <nav
      className={`navbar fixed w-full z-50 transition-all duration-300 bg-white dark:bg-gray-900 ${
        scrolled ? 'py-2 shadow-md' : 'py-4'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"          className={`flex items-center gap-2 text-primary font-serif font-bold text-xl sm:text-2xl ${
            language === 'ar' ? 'flex-row-reverse' : ''
          }`}
          onClick={closeMenu}
        >
          <img src="/eagle-icon.svg" alt="Eagle Shoot Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
          <span>Eagle Shoot</span>
        </a>
        
        {/* Desktop Navigation */}        <div className={`hidden md:flex items-center gap-8 ${
          language === 'ar' ? 'flex-row-reverse' : ''
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
          <LanguageSelector />
        </div>
        
        {/* Mobile Navigation Toggle Button */}        <div className={`md:hidden flex items-center gap-4 ${
          language === 'ar' ? 'flex-row-reverse' : ''
        }`}>
          <ThemeToggle />
          <LanguageSelector />          <button
            className="menu-button text-secondary dark:text-gray-300 z-50 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-200"
            onClick={toggleMenu}
            onTouchStart={(e) => e.preventDefault()}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div        className={`mobile-menu md:hidden fixed top-[60px] left-0 right-0 bg-white dark:bg-gray-900 shadow-lg w-full h-auto transition-transform duration-200 ease-out ${
          isOpen ? 'open' : ''
        }`}
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className={`flex flex-col py-4 px-6 ${
          language === 'ar' ? 'items-end' : 'items-start'
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}              className={`text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200 py-3 w-full block ${
                language === 'ar' ? 'text-right' : 'text-left'
              }`}
              onClick={closeMenu}
              onTouchStart={(e) => e.stopPropagation()}
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