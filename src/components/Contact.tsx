import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t } = useLanguage();

  return (
    <section id="contact" className="py-12 sm:py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary font-serif mb-3 sm:mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 max-w-5xl mx-auto">
          <motion.div 
            className="lg:w-1/2"
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-secondary font-serif">
              {t('contact.getintouch')}
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              {t('contact.message')}
            </p>

            <div className="space-y-6 sm:space-y-8">
              <a 
                href="tel:+212605921443" 
                className="flex items-center gap-4 sm:gap-6 group cursor-pointer"
                aria-label="Call us"
              >
                <div className="p-3 sm:p-4 bg-white rounded-full shadow-md flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-secondary">{t('contact.phone')}</h4>
                  <p className="text-gray-600 text-base sm:text-lg">+212 60-5921443</p>
                </div>
              </a>
              
              <a 
                href="mailto:eagleshot.photographer@gmail.com" 
                className="flex items-center gap-4 sm:gap-6 group cursor-pointer"
                aria-label="Email us"
              >
                <div className="p-3 sm:p-4 bg-white rounded-full shadow-md flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-secondary">{t('contact.email')}</h4>
                  <p className="text-gray-600 text-base sm:text-lg">eagleshot.photographer@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://www.google.com/maps/place/eagle+shoot/@35.1422385,-3.8579007,267m/data=!3m1!1e3!4m14!1m7!3m6!1s0xd75d3006d8c4d15:0xcee7a0fcac4e73ed!2seagle+shoot!8m2!3d35.1427992!4d-3.8568977!16s%2Fg%2F11x5yg442g!3m5!1s0xd75d3006d8c4d15:0xcee7a0fcac4e73ed!8m2!3d35.1427992!4d-3.8568977!16s%2Fg%2F11x5yg442g?entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 sm:gap-6 group cursor-pointer"
                aria-label="View our location"
              >
                <div className="p-3 sm:p-4 bg-white rounded-full shadow-md flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-secondary">{t('contact.address')}</h4>
                  <p className="text-gray-600 text-base sm:text-lg">Imzouren, Al Hoceima</p>
                </div>
              </a>
            </div>

            <div className="mt-8 sm:mt-12">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-secondary">{t('contact.followus')}</h4>
              <div className="flex gap-3 sm:gap-4">
                <a 
                  href="https://web.facebook.com/profile.php?id=100068582700441&locale=fr_FR" 
                  className="p-2.5 sm:p-3 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/eagleshoot_photographer?igsh=czV0a2Vtc2h2anV5" 
                  className="p-2.5 sm:p-3 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@Eagleshoot_photographer" 
                  className="p-2.5 sm:p-3 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="YouTube"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 flex flex-col justify-center" 
            initial={{ opacity: 0, y: 30 }} 
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
          > 
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-secondary font-serif">
                {t('contact.title')}
              </h3>
              
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                {t('contact.message')}
              </p>
              
              <a 
                href="https://wa.me/212605921443" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-green-500 text-white font-semibold text-base sm:text-lg rounded-lg shadow-md hover:bg-green-600 transition duration-300 w-full"
              > 
                <Send className="w-5 h-5 sm:w-6 sm:h-6" /> {t('contact.whatsapp')}
              </a>
              
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="text-base sm:text-lg font-semibold mb-3 text-secondary">{t('contact.hours')}</h4>
                <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                  <li className="flex justify-between">
                    <span>{t('contact.hours.weekdays')}:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('contact.hours.saturday')}:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('contact.hours.sunday')}:</span>
                    <span>{t('contact.hours.closed')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;