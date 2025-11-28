import React, { useState, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { geoTranslationService } from '../utils/geoTranslation';

interface Language {
  code: string;
  name: string;
  flag: string;
  currency: string;
}

const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸', currency: 'USD' },
  { code: 'en-GB', name: 'English (UK)', flag: '🇬🇧', currency: 'GBP' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', currency: 'EUR' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', currency: 'EUR' },
  { code: 'es', name: 'Español', flag: '🇪🇸', currency: 'EUR' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', currency: 'EUR' },
  { code: 'pt', name: 'Português', flag: '🇧🇷', currency: 'BRL' },
  { code: 'ja', name: '日本語', flag: '🇯🇵', currency: 'JPY' },
  { code: 'ko', name: '한국어', flag: '🇰🇷', currency: 'KRW' },
  { code: 'zh', name: '中文', flag: '🇨🇳', currency: 'CNY' },
  { code: 'ar', name: 'العربية', flag: '🇦🇪', currency: 'AED' }
];

export const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(SUPPORTED_LANGUAGES[0]);
  const [userLocation, setUserLocation] = useState<string>('');

  useEffect(() => {
    // Auto-detect and set language silently
    const checkAndSetLanguage = async () => {
      // Wait for geo detection to complete
      setTimeout(() => {
        const lang = geoTranslationService.getCurrentLanguage();
        const location = geoTranslationService.getUserLocation();
        
        const selectedLang = SUPPORTED_LANGUAGES.find(l => l.code === lang) || SUPPORTED_LANGUAGES[0];
        setCurrentLanguage(selectedLang);
        
        if (location) {
          setUserLocation(`${location.city}, ${location.country}`);
        }
      }, 1000);
    };

    checkAndSetLanguage();

    // Listen for language changes
    const handleLanguageChangeEvent = (event: CustomEvent) => {
      const { language } = event.detail;
      const newLang = SUPPORTED_LANGUAGES.find(l => l.code === language) || SUPPORTED_LANGUAGES[0];
      setCurrentLanguage(newLang);
    };

    window.addEventListener('languageChanged', handleLanguageChangeEvent as EventListener);
    return () => {
      window.removeEventListener('languageChanged', handleLanguageChangeEvent as EventListener);
    };
  }, []);

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    geoTranslationService.setLanguage(language.code);
    setIsOpen(false);
    
    // Silent language change for better UX and SEO
    // No notifications or overlays
  };

  return (
    <div className="language-selector-container relative" style={{ userSelect: 'none' }}>
      <style dangerouslySetInnerHTML={{
        __html: `
          .language-selector-container .language-button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            color: white;
            cursor: pointer;
            transition: all 0.2s ease;
            backdrop-filter: blur(10px);
          }
          
          .language-selector-container .language-button:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-1px);
          }
          
          .language-selector-container .language-dropdown {
            position: absolute;
            top: 100%;
            right: 0;
            margin-top: 8px;
            background: rgba(30, 41, 59, 0.98);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            backdrop-filter: blur(20px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 50;
            min-width: 200px;
            max-height: 300px;
            overflow-y: auto;
            animation: fadeIn 0.15s ease-out;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .language-selector-container .language-option {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            color: white;
            cursor: pointer;
            transition: background 0.15s ease;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            font-size: 13px;
          }
          
          .language-selector-container .language-option:last-child {
            border-bottom: none;
          }
          
          .language-selector-container .language-option:hover {
            background: rgba(255, 255, 255, 0.1);
          }
          
          .language-selector-container .language-option.active {
            background: rgba(99, 102, 241, 0.3);
          }
          
          .language-selector-container .language-name {
            font-weight: 500;
          }
          
          @media (max-width: 768px) {
            .language-selector-container .language-dropdown {
              right: -10px;
              min-width: 180px;
            }
          }
        `
      }} />
      
      <button
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
      </button>

      {isOpen && (
        <div className="language-dropdown">            
          {SUPPORTED_LANGUAGES.map((language) => (
            <div
              key={language.code}
              className={`language-option ${
                language.code === currentLanguage.code ? 'active' : ''
              }`}
              onClick={() => handleLanguageChange(language)}
            >
              <span>{language.flag}</span>
              <span className="language-name">{language.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};