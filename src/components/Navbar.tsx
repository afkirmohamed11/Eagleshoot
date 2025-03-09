import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
        
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white shadow-md' : 'py-4 bg-white'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <img src="/eagle-icon.svg" alt="Eagle Shoot Logo" className="w-10 h-10" />
          <span className="text-red-500 font-serif font-bold text-2xl">Eagle Shoot</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-red-500 font-medium transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Hamburger Menu Button that transforms to X */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none relative"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <>
              {/* X icon when menu is open */}
              <span className="absolute block w-6 h-0.5 bg-black transform rotate-45"></span>
              <span className="absolute block w-6 h-0.5 bg-black transform -rotate-45"></span>
            </>
          ) : (
            <>
              {/* Hamburger icon when menu is closed */}
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </>
          )}
        </button>
      </div>
      
      {/* Full-width Mobile Menu Dropdown */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-full left-0 right-0 bg-red-500 z-50"
        >
          <div className="container mx-auto px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-white hover:bg-red-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
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