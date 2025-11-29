'use client';

import { Language, translations } from '@/lib/translations';
import Image from 'next/image';

interface ScreenshotsProps {
  language: Language;
}

const screenshots = [
  'https://aibuilder.oss-cn-hangzhou.aliyuncs.com/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-11-28%20at%2000.44.08.png',
  'https://aibuilder.oss-cn-hangzhou.aliyuncs.com/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-11-28%20at%2020.18.58.png',
  'https://aibuilder.oss-cn-hangzhou.aliyuncs.com/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-11-28%20at%2020.19.05.png',
  'https://aibuilder.oss-cn-hangzhou.aliyuncs.com/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-11-28%20at%2020.20.20.png',
  'https://aibuilder.oss-cn-hangzhou.aliyuncs.com/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-11-28%20at%2020.20.25.png',
];

export default function Screenshots({ language }: ScreenshotsProps) {
  const t = translations[language];

  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            {t.screenshots.title}
          </h2>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide">
            {screenshots.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-center"
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
                  <div className="relative">
                    <Image
                      src={src}
                      alt={t.screenshots.captions[index] || `Screenshot ${index + 1}`}
                      width={300}
                      height={650}
                      className="rounded-3xl shadow-2xl"
                      unoptimized
                    />
                    <div className="mt-4 text-center">
                      <p className="text-gray-300 text-sm">
                        {t.screenshots.captions[index]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
