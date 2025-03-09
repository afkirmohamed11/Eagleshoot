import React, { useState } from 'react'; 
import { Menu, X } from 'lucide-react'; 

interface NavbarProps { 
  scrolled: boolean; 
} 

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => { 
  const [isOpen, setIsOpen] = useState(false); 

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
    <nav className={`navbar fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-md' : 'py-4'}`}> 
      <div className="container mx-auto px-4 flex justify-between items-center"> 
        {/* Logo */} 
        <a href="#home" className="flex items-center gap-2 text-primary font-serif font-bold text-2xl"> 
          <img src="/eagle-icon.svg" alt="Eagle Shoot Logo" className="w-10 h-10" /> 
          <span>Eagle Shoot</span> 
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

        {/* Mobile Navigation Toggle Button (Hamburger) */} 
        <button className="md:hidden text-secondary relative z-50" onClick={toggleMenu}> 
          {isOpen ? <X size={30} /> : <Menu size={30} />} 
        </button> 
      </div> 

      {/* Mobile Navigation Menu */} 
      {isOpen && ( 
        <div className="md:hidden bg-white shadow-lg absolute top-0 left-0 right-0 py-4 z-40"> 
          <div className="container mx-auto px-4 flex flex-col space-y-4"> 
            {navLinks.map((link) => ( 
              <a 
                key={link.name} 
                href={link.href} 
                className="text-secondary hover:text-primary font-medium transition-colors duration-300 py-2" 
                onClick={toggleMenu} // Close menu when clicking a link 
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
