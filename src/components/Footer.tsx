import { Camera, MapPin, Phone } from 'lucide-react';
import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage(); // Access language and translation function
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className={language === 'ar' ? 'text-right' : 'text-left'}>
            <div className={`flex items-center ${language === 'ar' ? 'justify-end' : 'justify-start'} gap-2 mb-6`}>
              {language === 'ar' ? (
                <>
                  <span className="font-serif font-bold text-2xl">Eagle Shoot</span>
                  <Camera size={28} />
                </>
              ) : (
                <>
                  <Camera size={28} />
                  <span className="font-serif font-bold text-2xl">Eagle Shoot</span>
                </>
              )}
            </div>
            <p className="text-gray-300 mb-6">{t('footer.description')}</p>
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
          <div className={language === 'ar' ? 'text-right' : 'text-left'}>
            <h3 className="text-xl font-semibold mb-6">{t('footer.quickLinks.title')}</h3>
            <ul className="space-y-3">
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
          <div className={language === 'ar' ? 'text-right' : 'text-left'}>
            <h3 className="text-xl font-semibold mb-6">{t('footer.services.title')}</h3>
            <ul className="space-y-3">
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

          {/* Contact Info Section - Added responsive width for Arabic */}
          <div className={`mb-8 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <h3 className="text-xl font-semibold mb-8">{t('footer.contactInfo.title')}</h3>
            <ul className="space-y-5">
              <li className={`flex items-start ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'} gap-4`}>
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <a href="tel:+212605921443" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  +212 60-5921443
                </a>
              </li>
              <li className={`flex items-start ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'} gap-4`}>
                <a
                  href="https://wa.me/212605921443"
                  className={`inline-flex items-center gap-2 text-gray-300 hover:text-primary transition-colors duration-300 ${
                    language === 'ar' ? 'flex-row-reverse' : 'flex-row'
                  } w-full`}
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
                    className="flex-shrink-0"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <span className="break-all">{t('footer.contactInfo.whatsapp')}</span>
                </a>
              </li>
              <li className={`flex items-start ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'} gap-4`}>
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300 break-words">
                  {language === 'ar' ? 'إمزورن، المغرب' : language === 'fr' ? 'Imzouren, Maroc' : 'Imzouren, Morocco'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-8">
          <p className={`text-center text-gray-400 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
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