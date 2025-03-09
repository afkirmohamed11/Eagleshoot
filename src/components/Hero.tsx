import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="/our_story2.jpg" 
          alt="Photography background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Capture Your Perfect Moments</h1>
            <p className="text-xl mb-8 max-w-lg">
              Eagle Shoot Photography brings your vision to life with stunning professional photography services tailored to your needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn-primary">
                Our Services
              </a>
              <a href="#contact" className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-secondary transition-colors duration-300">
                Contact Us
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center logo-3d"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;