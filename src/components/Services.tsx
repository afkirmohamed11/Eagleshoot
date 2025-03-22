import React, { useState } from 'react';  
import { motion } from 'framer-motion';  
import { useInView } from 'react-intersection-observer';  
import { 
  Users, 
  Heart, 
  Building, 
  User, 
  Camera, 
  Calendar, 
  Scissors, 
  Globe, 
  Share2, 
  ShoppingBag 
} from 'lucide-react';  
import { useLanguage } from '../i18n/LanguageContext';

const Services: React.FC = () => {  
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });  
  const [showAll, setShowAll] = useState(false);
  const { t, language } = useLanguage(); // Assuming `language` is provided by your context
  
  const services = [  
    { 
      icon: <Heart className="w-12 h-12 text-primary mb-4" />, 
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
      icon: <Users className="w-12 h-12 text-primary mb-4" />, 
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
      icon: <Building className="w-12 h-12 text-primary mb-4" />, 
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
      icon: <Calendar className="w-12 h-12 text-primary mb-4" />, 
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
      icon: <User className="w-12 h-12 text-primary mb-4" />, 
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
      icon: <Globe className="w-12 h-12 text-primary mb-4" />, 
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
      icon: <Camera className="w-12 h-12 text-primary mb-4" />, 
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
      icon: <Scissors className="w-12 h-12 text-primary mb-4" />, 
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
      icon: <Share2 className="w-12 h-12 text-primary mb-4" />, 
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
      icon: <ShoppingBag className="w-12 h-12 text-primary mb-4" />, 
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

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };  
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };  

  return (  
    <section id="services" className="py-20 bg-gray-50">  
      <div className="container mx-auto px-4 text-center">  
        <h2 className="section-title">{t('services.title')}</h2>  
        <p className="section-subtitle mb-16">{t('services.subtitle')}</p>  
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref} variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>  
          {(showAll ? services : services.slice(0, 6)).map((service, index) => (  
            <motion.div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden service-card" variants={itemVariants}>  
              <div className="p-8">  
                <div className="flex justify-center">{service.icon}</div>  
                <h3 className="text-2xl font-bold text-center mb-4 font-serif text-secondary">{service.title}</h3>  
                <p className="text-gray-600 text-center mb-6">{service.description}</p>  
                <ul className={`space-y-3 mb-8 ${language === 'ar' ? 'text-right' : 'text-left'}`}>  
                  {service.features.map((feature, idx) => (  
                    <li key={idx} className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>  
                    <span className={`w-2 h-2 bg-primary rounded-full ${language === 'ar' ? 'ml-3' : 'mr-3'}`}></span>  
                    <span className="text-gray-700">{feature}</span>  
                  </li>  
                  ))}  
                </ul>  
                <a href="https://wa.me/212605921443" className="block text-center bg-secondary hover:bg-primary text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
                  {t('services.bookNow')}
                </a>  
              </div>  
            </motion.div>  
          ))}  
        </motion.div>  
        <div className="mt-10">  
          <button onClick={() => setShowAll(!showAll)} className="bg-primary text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">  
            {showAll ? t('services.showLess') : t('services.showMore')}  
          </button>  
        </div>  
      </div>  
    </section>  
  );  
};  

export default Services;