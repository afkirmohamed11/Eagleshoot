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
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <a href="#home" className="flex items-center gap-2">
          <img src="/eagle-icon.svg" alt="Eagle Shoot Logo" className="w-10 h-10" />
          <span className="text-red-500 font-serif font-bold text-2xl">Eagle Shot</span>
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

        {/* Simple Hamburger Menu Button - Just three lines */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-navy-blue"></span>
          <span className="block w-6 h-0.5 bg-navy-blue"></span>
          <span className="block w-6 h-0.5 bg-navy-blue"></span>
        </button>

        {/* Inline Mobile Menu Dropdown */}
        {isOpen && (
          <div 
            ref={menuRef}
            className="absolute top-full right-4 mt-2 w-48 bg-white rounded-lg shadow-lg md:hidden z-50 overflow-hidden"
          >
            <div className="py-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;