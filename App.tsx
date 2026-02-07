import React, { useState, useEffect } from 'react';
import { Leaf, Globe, TrendingUp, Anchor, Sprout } from 'lucide-react';
import { TRANSLATIONS } from './constants';
import { Language } from './types';

// Components
import FoundationSection from './components/FoundationSection';
import CultureSection from './components/CultureSection';
import TeamSection from './components/TeamSection';
import EcosystemSection from './components/EcosystemSection';
import MarketSection from './components/MarketSection';
import InvestmentSection from './components/InvestmentSection';
import RoadmapSection from './components/RoadmapSection';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('vi');
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    document.title = lang === 'vi' ? 'Bamboo Legacy: Hệ sinh thái Xanh' : 'Bamboo Legacy: Green Ecosystem';
  }, [lang]);

  return (
    <div className="min-h-screen bg-emerald-50 font-sans text-slate-900 pb-10">
      
      {/* Floating Language Toggle */}
      <div className="fixed top-5 right-5 z-50 flex bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-xl border border-emerald-100">
        <button
          onClick={() => setLang('vi')}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
            lang === 'vi' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          VI
        </button>
        <button
          onClick={() => setLang('en')}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
            lang === 'en' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          EN
        </button>
      </div>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-emerald-900 to-teal-900 text-white pt-20 pb-28 px-4 relative overflow-hidden text-center">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-lime-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
            <div className="flex justify-center mb-4">
                <div className="bg-white/10 p-3 rounded-full border border-white/20">
                    <Sprout size={48} className="text-lime-300" />
                </div>
            </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200">
            {t.hero.title}
          </h1>
          <h2 className="text-xl md:text-3xl font-light text-emerald-100 mb-8">
            {t.hero.subtitle}
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 text-sm md:text-base">
            <span className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Globe className="w-4 h-4 text-lime-300 mr-2" />
              <span className="font-bold text-emerald-50">{t.hero.tags.esg}</span>
            </span>
            <span className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <TrendingUp className="w-4 h-4 text-lime-300 mr-2" />
              <span className="font-bold text-emerald-50">{t.hero.tags.growth}</span>
            </span>
            <span className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Leaf className="w-4 h-4 text-lime-300 mr-2" />
              <span className="font-bold text-emerald-50">{t.hero.tags.carbon}</span>
            </span>
          </div>

          <p className="max-w-2xl mx-auto text-lg text-emerald-100/90 leading-relaxed">
            {t.hero.description}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 space-y-12">
        <FoundationSection content={t.foundation} />
        <CultureSection content={t.culture} />
        <TeamSection content={t.team} />
        <EcosystemSection content={t.ecosystem} />
        <MarketSection content={t.market} />
        <InvestmentSection content={t.investment} />
        <RoadmapSection content={t.roadmap} />
      </main>

      {/* Footer */}
      <footer className="text-center py-16 px-4">
        <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-black text-slate-800 mb-6">{t.footer.cta}</h2>
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-emerald-600 px-8 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:bg-emerald-700 hover:scale-105 hover:shadow-2xl">
                <span className="mr-2">{t.footer.btn}</span>
                <Anchor className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-8 text-sm text-slate-400">
                © {new Date().getFullYear()} Bamboo Legacy Project. All rights reserved.
            </p>
        </div>
      </footer>
    </div>
  );
};

export default App;