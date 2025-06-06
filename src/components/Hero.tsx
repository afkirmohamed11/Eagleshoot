import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/our_story2.jpg', '/our_story3.jpg', '/our_story4.jpg', '/our_story5.jpg'];
  const backgroundImages = ['/our_story2.jpg', '/our_story3.jpg',  '/our_story4.jpg', '/our_story5.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center hero-gradient w-full overflow-x-hidden"
      style={{ marginTop: 0, paddingTop: '4rem' }}
    >
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Background ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            className="w-full md:w-1/2 text-white text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 font-serif">
              {t('hero.title')}
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="#services" 
                className="btn-primary whitespace-nowrap"
              >
                {t('hero.services.button')}
              </a>
              <a 
                href="#contact" 
                className="border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-white hover:text-secondary transition-colors duration-300 whitespace-nowrap"
              >
                {t('hero.contact.button')}
              </a>
            </div>
          </motion.div>
         
          <motion.div
            className="w-full md:w-1/2 flex justify-center logo-3d"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* <img 
              src="/eagle-icon.svg" 
              alt="Eagle Shoot Logo" 
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72"
            /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;