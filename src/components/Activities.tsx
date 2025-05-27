import { motion } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../i18n/LanguageContext';

const Activities: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t, language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Exhibition images
  const exhibitionImages = [
    '/hoceima1.jpg',
    '/hoceima2.jpg',
    '/hoceima3.jpg',
    '/hoceima4.jpg',
    '/hoceima5.jpg',
    '/hoceima6.jpg',
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? exhibitionImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      (prev + 1) % exhibitionImages.length
    );
  };

  return (
    <section id="activities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('activities.title')}</h2>
          <p className="section-subtitle">
            {t('activities.subtitle')}
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative">
              {/* Image carousel - Adjusted height and object-fit to prevent cut-off */}
              <div className="relative h-96 lg:h-full">
                {exhibitionImages.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Exhibition image ${index + 1}`}
                      className="w-full h-full object-contain" // Changed from object-cover to object-contain
                    />
                  </div>
                ))}
                
                {/* Navigation buttons */}
                <button 
                  onClick={handlePrevImage} 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full text-secondary hover:bg-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={handleNextImage} 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full text-secondary hover:bg-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Dots indicator */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {exhibitionImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full ${
                        index === currentImageIndex ? 'bg-primary' : 'bg-white/70'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className={`lg:w-1/2 p-8 ${language === 'ar' ? 'text-right' : ''}`}>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-primary w-6 h-6" />
                <span className="text-gray-500 text-sm">
                  {t('activities.exhibition.date')}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-secondary mb-4 font-serif">
                {t('activities.exhibition.title')}
              </h3>
              
              <div className="space-y-4 text-gray-700">
                {t('activities.exhibition.content')
                  .split('\n\n')
                  .map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
