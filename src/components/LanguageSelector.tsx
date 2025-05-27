import { ChevronDown } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    setIsOpen(false); // Close dropdown after selection
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

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
      flagSrc: 'https://flagcdn.com/gb.svg'  // UK flag
    },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 text-secondary hover:text-primary transition-colors duration-300 rounded-md"
        aria-label="Select language"
        type="button"
      >
        <img 
          src={currentLanguage?.flagSrc} 
          alt={`${currentLanguage?.name} flag`}
          className="w-6 h-4 object-cover"
        />
        <span className="hidden md:inline text-secondary">{currentLanguage?.name}</span>
        <ChevronDown 
          size={16} 
          className={`transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[120px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-50 transition-colors duration-200 ${
                language === lang.code 
                  ? 'bg-primary text-white hover:bg-primary' 
                  : 'text-secondary'
              } ${
                lang === languages[0] ? 'rounded-t-md' : ''
              } ${
                lang === languages[languages.length - 1] ? 'rounded-b-md' : ''
              }`}
              type="button"
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
      )}
    </div>
  );
};

export default LanguageSelector;