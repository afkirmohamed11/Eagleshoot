import { motion } from 'framer-motion';
import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center hero-gradient w-full overflow-x-hidden"
      style={{ marginTop: 0, paddingTop: '4rem' }}
    >      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-900">
        {/* Mobile version - eyes2.jpg */}
        <img
          src="/eyes2.jpg"
          alt="Eagle Shoot Background"
          className="w-full h-full object-cover object-center md:hidden"
        />
        {/* Desktop/Laptop version - eyes.png */}
        <img
          src="/eyes.png"
          alt="Eagle Shoot Background"
          className="hidden md:block w-full h-full object-contain object-center"
        />
      </div>
      
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