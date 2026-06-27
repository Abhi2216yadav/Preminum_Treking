import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

interface LanguageOption {
  code: 'en' | 'hi';
  short: string;
  label: string;
  flag: string;
}

const languages: LanguageOption[] = [
  {
    code: 'en',
    short: 'GB',
    label: 'English',
    flag: '/en.png',
  },
  {
    code: 'hi',
    short: 'IN',
    label: 'हिन्दी',
    flag: '/hi.webp',
  },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguageCode = i18n.language.split('-')[0] as 'en' | 'hi';
  const currentLang = languages.find((lang) => lang.code === currentLanguageCode) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  const handleLanguageSelect = (langCode: 'en' | 'hi') => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative"
      role="listbox"
      aria-label="Language selector"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d79a63] focus:ring-offset-2 focus:ring-offset-[#030303]"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <img src={currentLang.flag} alt={currentLang.label} className="w-5 h-5 rounded-[4px] object-cover" />
        <span className="text-xs font-medium tracking-widest text-white whitespace-nowrap">
          {currentLang.short}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-white/60 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden shadow-2xl z-50"
          role="listbox"
          style={{ animation: 'fadeIn 0.2s ease-out' }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`w-full px-4 py-3 flex items-center gap-3 transition-all duration-200 text-left ${
                currentLang.code === lang.code
                  ? 'bg-[#d79a63]/10 text-[#d79a63] border-l-2 border-[#d79a63]'
                  : 'text-[#9a9a9a] hover:bg-white/5 hover:text-white border-l-2 border-transparent'
              } focus:outline-none focus:bg-white/10`}
              role="option"
              aria-selected={currentLang.code === lang.code}
            >
              <img src={lang.flag} alt={lang.label} className="w-5 h-5 rounded-[4px] object-cover" />
              <span className="text-sm tracking-widest font-medium">{lang.label}</span>
              {currentLang.code === lang.code && (
                <span className="ml-auto text-[#d79a63] text-lg">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
