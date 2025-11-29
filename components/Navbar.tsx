'use client';

import { Language, translations } from '@/lib/translations';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Navbar({ language, onLanguageChange }: NavbarProps) {
  const t = translations[language];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg"></div>
            <span className="text-xl font-semibold text-gray-900">
              {language === 'zh' ? '伟大的我' : 'The Great Me'}
            </span>
          </div>

          <div className="flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t.nav.features}
            </a>
            <a
              href="#download"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t.nav.download}
            </a>
            <button
              onClick={() => onLanguageChange(language === 'en' ? 'zh' : 'en')}
              className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              {language === 'en' ? '中文' : 'EN'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
