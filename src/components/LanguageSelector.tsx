import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const languages = [
    { 
      code: 'ar', 
      name: 'العربية', 
      flagSrc: 'https://flagcdn.com/ma.svg'  // Morocco flag
    },
    { 
      code: 'fr', 
      name: 'Français', 
      flagSrc: 'https://flagcdn.com/fr.svg'  // France flag
    },
    { 
      code: 'en', 
      name: 'English', 
      flagSrc: 'https://flagcdn.com/us.svg'  // USA flag
    },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
        aria-label="Select language"
      >
        <img 
          src={currentLanguage?.flagSrc} 
          alt={`${currentLanguage?.name} flag`}
          className="w-6 h-4 object-cover"
        />
        <span className="hidden md:inline text-secondary">{currentLanguage?.name}</span>
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code as 'ar' | 'fr' | 'en')}
            className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-100 transition-colors duration-300 ${
              language === lang.code ? 'bg-gray-50 text-primary' : 'text-secondary'
            }`}
          >
            <img 
              src={lang.flagSrc} 
              alt={`${lang.name} flag`}
              className="w-6 h-4 object-cover"
            />
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;