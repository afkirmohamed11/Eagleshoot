import React from 'react';
import { Camera } from 'lucide-react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Camera size={28} />
              <span className="font-serif font-bold text-2xl">Eagle Shoot</span>
            </div>
            <p className="text-gray-300 mb-6">
              Professional photography services capturing life's precious moments with an eagle's precision and artistic vision.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://web.facebook.com/profile.php?id=100068582700441&locale=fr_FR" 
                className="text-white hover:text-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/eagleshoot_photographer?igsh=czV0a2Vtc2h2anV5" 
                className="text-white hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://wa.me/212605921443" 
                className="text-white hover:text-primary transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
                      </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors duration-300">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors duration-300">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-primary transition-colors duration-300">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors duration-300">Wedding Photography</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors duration-300">Portrait Photography</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors duration-300">Event Photography</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors duration-300">Commercial Photography</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors duration-300">Family Photography</a></li>
            </ul>
          </div>
          

          <div className="mb-8">
  <h3 className="text-xl font-semibold mb-8">Contact Info</h3>
  <ul className="space-y-5">
    <li className="flex items-start gap-4">
      <Phone size={20} className="mt-1 flex-shrink-0" />
      <span className="text-gray-300">+212 60-5921443</span>
    </li>
    <li className="flex items-start gap-4">
      <Mail size={20} className="mt-1 flex-shrink-0" />
      <span className="text-gray-300 break-words">eagleshot.photographer@gmail.com</span>
    </li>
    <li className="flex items-start gap-4">
      <MapPin size={20} className="mt-1 flex-shrink-0" />
      <span className="text-gray-300">Imzouren, Morocco</span>
    </li>
  </ul>
</div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            &copy; {currentYear} Eagle Shoot Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;