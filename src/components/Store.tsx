import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../i18n/LanguageContext';
 
const Store: React.FC = () => { 
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 }); 
  const { t } = useLanguage(); // Get translation function 
 
  // Store items (expanded with new cameras)
  const storeItems = [ 
    { 
      image: '/camera1.jpg', 
      title: t('store.camera1.title'), 
      description: t('store.camera1.desc'), 
      buyPrice: t('store.camera1.price'), 
      borrowPrice: t('store.camera1.borrowPrice'), 
      buttonText: t('store.camera.getButton'), 
      whatsappLink: 'https://wa.me/212605921443', 
    },
    { 
      image: '/camera2.jpg', 
      title: t('store.camera2.title'), 
      description: t('store.camera2.desc'), 
      buyPrice: t('store.camera2.price'), 
      borrowPrice: t('store.camera2.borrowPrice'), 
      buttonText: t('store.camera.getButton'), 
      whatsappLink: 'https://wa.me/212605921443', 
    },
    { 
      image: '/camera3.jpg', 
      title: t('store.camera3.title'), 
      description: t('store.camera3.desc'), 
      buyPrice: t('store.camera3.price'), 
      borrowPrice: t('store.camera3.borrowPrice'), 
      buttonText: t('store.camera.getButton'), 
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
    <section id="store" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"> 
      <div className="container mx-auto px-4 text-center"> 
        {/* Section Title and Subtitle */} 
        <h2 className="section-title dark:text-white">{t('store.title')}</h2> 
        <p className="section-subtitle mb-16 dark:text-gray-300">{t('store.subtitle')}</p>
 
        {/* Store Items Grid */} 
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          ref={ref} 
          variants={containerVariants} 
          initial="hidden" 
          animate={inView ? 'visible' : 'hidden'} 
        > 
          {storeItems.map((item, index) => (            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-colors duration-300" 
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
                <h3 className="text-2xl font-bold text-center mb-4 font-serif text-secondary dark:text-white"> 
                  {item.title} 
                </h3> 
 
                {/* Product Description */} 
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4">{item.description}</p>
 
                {/* Prices Container */}                <div className="flex justify-center gap-6 mb-6"> 
                  {/* Buy Price */} 
                  <div> 
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('store.camera.buyLabel')}</p> 
                    <p className="text-lg font-semibold text-primary">{item.buyPrice}</p> 
                  </div> 
                  {/* Borrow Price */} 
                  <div> 
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('store.camera.borrowLabel')}</p> 
                    <p className="text-lg font-semibold text-primary">{item.borrowPrice}</p> 
                  </div> 
                </div> 
 
                {/* Combined Button */} 
                <a 
                  href={item.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-center bg-secondary hover:bg-primary dark:bg-gray-600 dark:hover:bg-primary text-white font-medium py-3 px-6 rounded-md transition-colors duration-300" 
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