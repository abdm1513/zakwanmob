import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageProvider';
import { Languages } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'am', name: 'አማርኛ', flag: '🇪🇹' },
    { code: 'om', name: 'Afaan Oromoo', flag: '🇪🇹' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (code: 'en' | 'am' | 'om') => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Select language"
      >
        <Languages className="w-5 h-5" />
        <span className="hidden md:inline text-lg">
          {languages.find(l => l.code === language)?.flag}
        </span>
        <span className="md:hidden text-sm">
          {languages.find(l => l.code === language)?.flag}
        </span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code as 'en' | 'am' | 'om')}
              className={`w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-3 transition-colors ${
                language === lang.code ? 'bg-blue-50 text-blue-600' : ''
              } ${lang.code === 'en' ? 'rounded-t-lg' : ''} ${
                lang.code === 'om' ? 'rounded-b-lg' : ''
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="flex-1">{lang.name}</span>
              {language === lang.code && (
                <span className="text-blue-600">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};