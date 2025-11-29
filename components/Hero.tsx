'use client';

import { Language, translations } from '@/lib/translations';
import Image from 'next/image';

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language];

  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-amber-50 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl shadow-2xl animate-float">
            <div className="text-4xl">🪙</div>
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
            {t.hero.title}
          </h1>

          <p className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-6">
            {t.hero.subtitle}
          </p>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#download"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gray-900 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">{t.hero.downloadButton}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <span className="text-gray-500 text-sm">{t.hero.comingSoon}</span>
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none"></div>
          <div className="flex justify-center items-center space-x-4 overflow-x-auto pb-8">
            <div className="transform hover:scale-105 transition-transform">
              <Image
                src="https://aibuilder.oss-cn-hangzhou.aliyuncs.com/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-11-28%20at%2000.44.08.png"
                alt="App Screenshot 1"
                width={300}
                height={650}
                className="rounded-3xl shadow-2xl"
                unoptimized
              />
            </div>
            <div className="transform hover:scale-105 transition-transform -mt-8">
              <Image
                src="https://aibuilder.oss-cn-hangzhou.aliyuncs.com/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-11-28%20at%2020.18.58.png"
                alt="App Screenshot 2"
                width={300}
                height={650}
                className="rounded-3xl shadow-2xl"
                unoptimized
              />
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <Image
                src="https://aibuilder.oss-cn-hangzhou.aliyuncs.com/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-11-28%20at%2020.19.05.png"
                alt="App Screenshot 3"
                width={300}
                height={650}
                className="rounded-3xl shadow-2xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
