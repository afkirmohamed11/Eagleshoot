import React, { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white shadow-md' : 'py-4 bg-white bg-opacity-90'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 text-primary font-serif font-bold text-2xl">
          <img src="/eagle-icon.svg" alt="Eagle Shoot Logo" className="w-10 h-10" />
          {/* <span>Eagle Shoot</span> */}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-secondary hover:text-primary font-medium transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Styled Hamburger Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span 
            className={`block w-6 h-0.5 bg-secondary transition-all duration-300 ${
              isOpen ? 'transform rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span 
            className={`block w-6 h-0.5 bg-secondary transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span 
            className={`block w-6 h-0.5 bg-secondary transition-all duration-300 ${
              isOpen ? 'transform -rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-secondary hover:text-primary font-medium transition-colors duration-300 py-2 border-b border-gray-100"
              onClick={toggleMenu}
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