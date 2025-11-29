'use client';

import { Language, translations } from '@/lib/translations';

interface FeaturesProps {
  language: Language;
}

const featureIcons = {
  missions: '🎯',
  gamified: '🪙',
  ai: '🤖',
  tracking: '📊',
  tts: '🔊',
  bilingual: '🌐',
};

export default function Features({ language }: FeaturesProps) {
  const t = translations[language];

  return (
    <section id="features" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            {t.features.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(t.features.items).map(([key, feature]) => (
            <div
              key={key}
              className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                {featureIcons[key as keyof typeof featureIcons]}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
