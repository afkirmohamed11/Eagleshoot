import { motion } from 'framer-motion';
import {
    Building,
    Calendar,
    Camera,
    Globe,
    Heart,
    Scissors,
    Share2,
    ShoppingBag,
    User,
    Users
} from 'lucide-react';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../i18n/LanguageContext';

const Services: React.FC = () => {  
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });  
  const [showAll, setShowAll] = useState(false);
  const { t, language } = useLanguage(); // Assuming `language` is provided by your context
  
  const services = [  
    { 
      icon: <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />, 
      title: t('services.wedding.title'),
      description: t('services.wedding.desc'),
      features: [
        t('services.wedding.features.coverage'), 
        t('services.wedding.features.photos'), 
        t('services.wedding.features.album'), 
        t('services.wedding.features.engagement')
      ] 
    },  
    { 
      icon: <Users className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />, 
      title: t('services.family.title'),
      description: t('services.family.desc'),
      features: [
        t('services.family.features.session'), 
        t('services.family.features.photos'), 
        t('services.family.features.delivery'), 
        t('services.family.features.print')
      ] 
    },  
    { 
      icon: <Building className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />, 
      title: t('services.commercial.title'),
      description: t('services.commercial.desc'),
      features: [
        t('services.commercial.features.product'), 
        t('services.commercial.features.brand'), 
        t('services.commercial.features.license'), 
        t('services.commercial.features.turnaround')
      ] 
    },  
    { 
      icon: <Calendar className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />, 
      title: t('services.event.title'),
      description: t('services.event.desc'),
      features: [
        t('services.event.features.coverage'), 
        t('services.event.features.previews'), 
        t('services.event.features.editing'), 
        t('services.event.features.gallery')
      ] 
    },  
    { 
      icon: <User className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />, 
      title: t('services.portrait.title'), 
      description: t('services.portrait.desc'),
      features: [
        t('services.portrait.features.session'), 
        t('services.portrait.features.photos'), 
        t('services.portrait.features.delivery'), 
        t('services.portrait.features.outfit')
      ] 
    },  
    { 
      icon: <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />, 
      title: t('services.website.title'), 
      description: t('services.website.desc'),
      features: [
        t('services.website.features.responsive'), 
        t('services.website.features.seo'), 
        t('services.website.features.cms'), 
        t('services.website.features.ecommerce')
      ] 
    },  
    { 
      icon: <Camera className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />, 
      title: t('services.basic.title'), 
      description: t('services.basic.desc'),
      features: [
        t('services.basic.features.session'), 
        t('services.basic.features.photos'), 
        t('services.basic.features.delivery'), 
        t('services.basic.features.location')
      ] 
    },  
    { 
      icon: <Scissors className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />, 
      title: t('services.editing.title'), 
      description: t('services.editing.desc'),
      features: [
        t('services.editing.features.retouching'), 
        t('services.editing.features.video'), 
        t('services.editing.features.color'), 
        t('services.editing.features.custom')
      ] 
    },  
    { 
      icon: <Share2 className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />, 
      title: t('services.social.title'), 
      description: t('services.social.desc'),
      features: [
        t('services.social.features.content'), 
        t('services.social.features.posting'), 
        t('services.social.features.tracking'), 
        t('services.social.features.campaign')
      ] 
    },  
    { 
      icon: <ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />, 
      title: t('services.equipment.title'), 
      description: t('services.equipment.desc'),
      features: [
        t('services.equipment.features.cameras'), 
        t('services.equipment.features.lenses'), 
        t('services.equipment.features.lighting'), 
        t('services.equipment.features.tripods')
      ] 
    }  
  ];  

  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    } 
  };  

  const itemVariants = { 
    hidden: { opacity: 0, y: 20 }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    } 
  };  

  return (  
    <section id="services" className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">  
      <div className="container text-center">  
        <h2 className="section-title dark:text-white">{t('services.title')}</h2>  
        <p className="section-subtitle mb-12 sm:mb-16 dark:text-gray-300">{t('services.subtitle')}</p>  
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" 
          ref={ref} 
          variants={containerVariants} 
          initial="hidden" 
          animate={inView ? 'visible' : 'hidden'}
        >  
          {(showAll ? services : services.slice(0, 6)).map((service, index) => (  
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden service-card h-full transition-colors duration-300" 
              variants={itemVariants}
            >  
              <div className="p-6 sm:p-8">  
                <div className="flex justify-center">{service.icon}</div>  
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4 font-serif text-secondary dark:text-white">
                  {service.title}
                </h3>  
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4 sm:mb-6 text-sm sm:text-base">
                  {service.description}
                </p>  
                <ul className={`space-y-2 sm:space-y-3 mb-6 sm:mb-8 ${language === 'ar' ? 'text-right' : 'text-left'}`}>  
                  {service.features.map((feature, idx) => (  
                    <li 
                      key={idx} 
                      className={`flex items-center text-sm sm:text-base ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}
                    >  
                      <span className={`w-2 h-2 bg-primary rounded-full ${language === 'ar' ? 'ml-3' : 'mr-3'}`}></span>  
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>  
                    </li>  
                  ))}  
                </ul>  
                <a 
                  href="https://wa.me/212605921443" 
                  className="block text-center bg-secondary hover:bg-primary dark:bg-gray-600 dark:hover:bg-primary text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-md transition-colors duration-300 text-sm sm:text-base"
                >
                  {t('services.bookNow')}
                </a>  
              </div>  
            </motion.div>  
          ))}  
        </motion.div>  
        
        <div className="mt-8 sm:mt-10">  
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="bg-primary text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-md transition-colors duration-300 text-sm sm:text-base hover:bg-opacity-90"
          >  
            {showAll ? t('services.showLess') : t('services.showMore')}  
          </button>  
        </div>  
      </div>  
    </section>  
  );  
};  

export default Services;