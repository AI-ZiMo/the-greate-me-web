'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Screenshots from '@/components/Screenshots';
import Footer from '@/components/Footer';
import { Language } from '@/lib/translations';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="min-h-screen">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <Features language={language} />
      <Screenshots language={language} />
      <Footer language={language} />
    </div>
  );
}
