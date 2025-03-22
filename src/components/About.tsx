import React from 'react'; 
import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer'; 
import { Camera, Award, Clock, Users } from 'lucide-react'; 
import { useLanguage } from '../i18n/LanguageContext';
 
const About: React.FC = () => { 
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1, 
  }); 

  const { t } = useLanguage();
 
  const features = [ 
    { 
      icon: <Camera className="w-10 h-10 text-primary" />, 
      title: t('about.equipment.title'),
      description: t('about.equipment.desc'),
    }, 
    { 
      icon: <Award className="w-10 h-10 text-primary" />, 
      title: t('about.award.title'),
      description: t('about.award.desc'),
    }, 
    { 
      icon: <Clock className="w-10 h-10 text-primary" />, 
      title: t('about.delivery.title'),
      description: t('about.delivery.desc'),
    }, 
    { 
      icon: <Users className="w-10 h-10 text-primary" />, 
      title: t('about.client.title'),
      description: t('about.client.desc'),
    }, 
  ]; 
 
  return ( 
    <section id="about" className="py-20"> 
      <div className="container mx-auto px-4"> 
        <div className="text-center mb-16"> 
          <h2 className="section-title">{t('about.title')}</h2> 
          <p className="section-subtitle"> 
            {t('about.subtitle')}
          </p> 
        </div> 
 
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20"> 
          <motion.div 
            className="lg:w-1/2" 
            ref={ref} 
            initial={{ opacity: 0, x: -50 }} 
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} 
            transition={{ duration: 0.8 }} 
          > 
            <img 
              src="/our_story.jpg" 
              alt="About Eagle Shoot Photography" 
              className="rounded-lg shadow-xl" 
            /> 
          </motion.div> 
 
          <motion.div 
            className="lg:w-1/2" 
            initial={{ opacity: 0, x: 50 }} 
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} 
            transition={{ duration: 0.8 }} 
          > 
            <h3 className="text-3xl font-bold mb-6 text-secondary font-serif">{t('about.story.title')}</h3>
            <p className="text-xl font-semibold mb-6 text-primary">
              {t('about.story.headline')}
            </p>
            {t('about.story.content').split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg mb-6 text-gray-700">
                {paragraph}
              </p>
            ))}
            <p className="text-lg mb-8 text-gray-700">
              {t('about.story.specialization')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> 
          {features.map((feature, index) => ( 
            <motion.div  
              key={index} 
              className="flex items-start gap-4" 
              initial={{ opacity: 0, y: 20 }} 
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} 
              transition={{ duration: 0.5, delay: 0.2 * index }} 
            > 
              <div className="mt-1">{feature.icon}</div> 
              <div> 
                <h4 className="text-xl font-semibold mb-2 text-secondary">{feature.title}</h4> 
                <p className="text-gray-600">{feature.description}</p> 
              </div> 
            </motion.div> 
          ))} 
        </div> 
      </div> 
    </section> 
  ); 
}; 
 
export default About;
