'use client';

import { Language, translations } from '@/lib/translations';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language];

  return (
    <footer id="download" className="py-16 px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl shadow-lg">
            <div className="text-3xl">🪙</div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            {language === 'zh' ? '伟大的我' : 'The Great Me'}
          </h3>
          <p className="text-gray-400 mb-8">{t.footer.tagline}</p>

          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full hover:shadow-2xl transition-all hover:scale-105"
          >
            {t.hero.downloadButton}
          </a>

          <p className="text-gray-500 text-sm mt-4">{t.hero.comingSoon}</p>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
