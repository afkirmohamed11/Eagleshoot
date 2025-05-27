import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../i18n/LanguageContext';

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const { t, language } = useLanguage();

  const categories = [
    { id: 'all', name: t('portfolio.categories.all') },
    { id: 'wedding', name: t('portfolio.categories.wedding') },
    { id: 'portrait', name: t('portfolio.categories.portrait') },
    { id: 'event', name: t('portfolio.categories.event') },
    { id: 'commercial', name: t('portfolio.categories.commercial') },
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'wedding',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: t('portfolio.items.wedding'),
    },
    {
      id: 10,
      category: 'portrait',
      image: '/portrait1.jpg',
      title: t('portfolio.items.portrait'),
    },
    {
      id: 3,
      category: 'event',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: t('portfolio.items.corporate'),
    },
    {
      id: 4,
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: t('portfolio.items.product'),
    },
    {
      id: 7,
      category: 'event',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      title: t('portfolio.items.concert'),
    },
    {
      id: 9,
      category: 'portrait',
      image: '/portrait2.jpg',
      title: t('portfolio.items.portrait'),
    },
    {
      id: 2,
      category: 'portrait',
      image: '/portrait3.jpg',
      title: t('portfolio.items.portrait'),
    },
    {
      id: 11,
      category: 'commercial',
      image: '/food1.jpg',
      title: t('portfolio.items.product'),
    },
    {
      id: 12,
      category: 'commercial',
      image: '/food2.jpg',
      title: t('portfolio.items.product'),
    },
    {
      id: 13,
      category: 'commercial',
      image: '/food3.jpg',
      title: t('portfolio.items.product'),
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-12 sm:py-20">
      <div className="container">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="section-title">{t('portfolio.title')}</h2>
          <p className="section-subtitle">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 sm:px-6 py-1.5 sm:py-2 rounded-full transition-colors duration-300 text-sm sm:text-base ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="gallery-item rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              layout
            >
              <div className="relative aspect-square">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                  <h3 className={`text-white font-semibold text-base sm:text-lg ${language === 'ar' ? 'text-right w-full' : ''}`}>
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;