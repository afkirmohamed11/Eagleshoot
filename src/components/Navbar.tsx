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
        
        {/* Toggle Button with Increased Hit Area */}
        <button
          className="md:hidden w-10 h-10 flex justify-center items-center focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-6">
            {isOpen ? (
              <>
                {/* X icon */}
                <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-black transform -translate-y-1/2 rotate-45"></span>
                <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-black transform -translate-y-1/2 -rotate-45"></span>
              </>
            ) : (
              <>
                {/* Hamburger icon */}
                <span className="absolute top-1/4 left-0 w-6 h-0.5 bg-black transform -translate-y-1/2"></span>
                <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-black transform -translate-y-1/2"></span>
                <span className="absolute top-3/4 left-0 w-6 h-0.5 bg-black transform -translate-y-1/2"></span>
              </>
            )}
          </div>
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
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