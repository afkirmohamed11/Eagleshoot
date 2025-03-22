import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../i18n/LanguageContext';

const Store: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { t, language } = useLanguage(); // Get translation and language

  // Store items (for now, just one camera)
  const storeItems = [
    {
      image: '/camera.jpg',
      title: t('store.camera.title'),
      description: t('store.camera.desc'),
      buyPrice: t('store.camera.price'), // Price to buy
      borrowPrice: t('store.location.price'), // Price to borrow
      buttonText: t('store.camera.button'), // We'll use this for the combined button (can be changed)
      whatsappLink: 'https://wa.me/212605921443',
    },
  ];

  // Animation variants for the container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="store" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title and Subtitle */}
        <h2 className="section-title">{t('store.title')}</h2>
        <p className="section-subtitle mb-16">{t('store.subtitle')}</p>

        {/* Store Items Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {storeItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              variants={itemVariants}
            >
              <div className="p-8">
                {/* Product Image */}
                <div className="flex justify-center mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>

                {/* Product Title */}
                <h3 className="text-2xl font-bold text-center mb-4 font-serif text-secondary">
                  {item.title}
                </h3>

                {/* Product Description */}
                <p className="text-gray-600 text-center mb-4">{item.description}</p>

                {/* Prices Container */}
                <div className="flex justify-center gap-6 mb-6">
                  {/* Buy Price */}
                  <div>
                    <p className="text-sm text-gray-500">{t('store.camera.buyLabel', { defaultValue: 'Buy Price' })}</p>
                    <p className="text-lg font-semibold text-primary">{item.buyPrice}</p>
                  </div>
                  {/* Borrow Price */}
                  <div>
                    <p className="text-sm text-gray-500">{t('store.camera.borrowLabel', { defaultValue: 'Borrow Price' })}</p>
                    <p className="text-lg font-semibold text-primary">{item.borrowPrice}</p>
                  </div>
                </div>

                {/* Combined Button */}
                <a
                  href={item.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-secondary hover:bg-primary text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                >
                  {item.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Store;