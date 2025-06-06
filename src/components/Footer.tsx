import { Camera, MapPin, Phone } from 'lucide-react';
import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className={`${language === 'ar' ? 'text-right sm:col-span-2 lg:col-span-1' : 'text-left'}`}>
            <div className={`flex items-center ${language === 'ar' ? 'justify-end' : 'justify-start'} gap-2 mb-6`}>
              {language === 'ar' ? (
                <>
                  <span className="font-serif font-bold text-xl sm:text-2xl">Eagle Shoot</span>
                  <Camera size={28} />
                </>
              ) : (
                <>
                  <Camera size={28} />
                  <span className="font-serif font-bold text-xl sm:text-2xl">Eagle Shoot</span>
                </>
              )}
            </div>
            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">{t('footer.description')}</p>
            <div className={`flex gap-4 ${language === 'ar' ? 'justify-end' : 'justify-start'}`}>
              <a
                href="https://web.facebook.com/profile.php?id=100068582700441&locale=fr_FR"
                className="text-white hover:text-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/eagleshoot_photographer?igsh=czV0a2Vtc2h2anV5"
                className="text-white hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@Eagleshoot_photographer"
                className="text-white hover:text-primary transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a
                href="https://wa.me/212605921443"
                className="text-white hover:text-primary transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{t('footer.quickLinks.title')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#store" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('nav.store')}
                </a>
              </li>
              <li>
                <a href="#activities" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('nav.activities')}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('nav.portfolio')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{t('footer.services.title')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('services.wedding.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('services.portrait.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('services.event.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('services.commercial.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('services.family.title')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className={`${language === 'ar' ? 'text-right sm:col-span-2 lg:col-span-1' : 'text-left'}`}>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{t('footer.contactInfo.title')}</h3>
            <ul className="space-y-4 sm:space-y-5">
              <li className={`flex items-start ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'} gap-3 sm:gap-4`}>
                <Phone size={18} className="mt-1 flex-shrink-0 sm:w-5 sm:h-5" />
                <a href="tel:+212605921443" className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm sm:text-base">
                  +212 60-5921443
                </a>
              </li>
              <li className={`flex items-start ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'} gap-3 sm:gap-4`}>
                <MapPin size={18} className="mt-1 flex-shrink-0 sm:w-5 sm:h-5" />
                <span className="text-gray-300 break-words text-sm sm:text-base">
                  {language === 'ar' ? 'إمزورن، المغرب' : language === 'fr' ? 'Imzouren, Maroc' : 'Imzouren, Morocco'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <p className={`text-center text-gray-400 text-sm sm:text-base ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            {language === 'ar' 
              ? `© ${currentYear} إيجل شوت للتصوير. جميع الحقوق محفوظة.`
              : language === 'fr'
                ? `© ${currentYear} Eagle Shoot Photography. Tous droits réservés.`
                : `© ${currentYear} Eagle Shoot Photography. All rights reserved.`
            }
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;