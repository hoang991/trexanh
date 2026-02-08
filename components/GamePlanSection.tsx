import React, { useState } from 'react';
import { 
  Gamepad2, Trees, Smartphone, Gift, Star, 
  Wind, Hammer, Leaf, Palette, Heart, CloudSun, Target 
} from 'lucide-react';
import { TranslationData } from '../types';

interface Props {
  content: TranslationData['gamePlan'];
}

const GamePlanSection: React.FC<Props> = ({ content }) => {
  const [activeTab, setActiveTab] = useState<'offline' | 'online' | 'rewards'>('offline');

  const getIcon = (title: string) => {
    if (title.includes('Săn') || title.includes('Hunter')) return <Leaf />;
    if (title.includes('Kiến Trúc') || title.includes('Architect')) return <Hammer />;
    if (title.includes('Trà') || title.includes('Tea')) return <CloudSun />;
    if (title.includes('Chuông') || title.includes('Wind') || title.includes('Vang')) return <Wind />;
    if (title.includes('Đan') || title.includes('Weaving')) return <Heart />;
    if (title.includes('Diều') || title.includes('Kite')) return <Wind />;
    if (title.includes('Họa Sĩ') || title.includes('Artist')) return <Palette />;
    return <Star />;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
      {/* Header */}
      <div className="bg-slate-900 text-white p-8 md:p-12 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>
        
        <div className="relative z-10">
          <Gamepad2 className="w-12 h-12 text-lime-400 mx-auto mb-4" />
          <h3 className="text-lime-400 font-bold uppercase tracking-widest text-sm mb-2">{content.title}</h3>
          <h2 className="text-3xl md:text-5xl font-black mb-6">{content.subtitle}</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {content.principles.map((p, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <span className="text-lime-300 font-bold mr-2">{p.title}:</span>
                <span className="text-slate-300 text-sm">{p.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-100 bg-slate-50">
        <button 
          onClick={() => setActiveTab('offline')}
          className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider flex items-center justify-center transition-colors ${activeTab === 'offline' ? 'bg-white text-emerald-600 border-t-4 border-emerald-600' : 'text-slate-400 hover:text-slate-600'}`}
        >
          <Trees className="w-4 h-4 mr-2" />
          Offline (Forest)
        </button>
        <button 
          onClick={() => setActiveTab('online')}
          className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider flex items-center justify-center transition-colors ${activeTab === 'online' ? 'bg-white text-blue-600 border-t-4 border-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
        >
          <Smartphone className="w-4 h-4 mr-2" />
          Online (App)
        </button>
        <button 
          onClick={() => setActiveTab('rewards')}
          className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider flex items-center justify-center transition-colors ${activeTab === 'rewards' ? 'bg-white text-amber-600 border-t-4 border-amber-600' : 'text-slate-400 hover:text-slate-600'}`}
        >
          <Gift className="w-4 h-4 mr-2" />
          Rewards
        </button>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 bg-white min-h-[400px]">
        
        {/* OFFLINE TAB */}
        {activeTab === 'offline' && (
          <div className="animate-fadeIn">
            <div className="mb-6 text-center">
               <h3 className="text-2xl font-black text-slate-800">{content.stages.offline.title}</h3>
               <p className="text-emerald-600 font-medium">{content.stages.offline.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.stages.offline.games.map((game, idx) => (
                <div key={idx} className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
                  <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm mb-3 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    {getIcon(game.title)}
                  </div>
                  <h4 className="font-bold text-slate-800 mb-1">{game.title}</h4>
                  {game.target && <div className="text-xs font-bold text-emerald-600 uppercase mb-2">{game.target}</div>}
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed min-h-[48px]">{game.content}</p>
                  <div className="pt-3 border-t border-emerald-100">
                    <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Giá trị:</div>
                    <p className="text-xs text-slate-500 italic">{game.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ONLINE TAB */}
        {activeTab === 'online' && (
          <div className="animate-fadeIn max-w-4xl mx-auto">
            <div className="mb-8 text-center">
               <h3 className="text-2xl font-black text-slate-800">{content.stages.online.title}</h3>
               <p className="text-blue-600 font-medium">{content.stages.online.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.stages.online.games.map((game, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col md:flex-row items-start gap-4">
                   <div className="bg-blue-100 p-4 rounded-xl text-blue-600 shrink-0">
                      {idx === 0 ? <Smartphone size={32} /> : <Target size={32} />}
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">{game.title}</h4>
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-md mb-2">{game.target}</span>
                      <p className="text-slate-600 text-sm mb-3">{game.content}</p>
                      <div className="text-xs text-slate-500 italic border-l-2 border-blue-300 pl-3">
                        "{game.value}"
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REWARDS TAB */}
        {activeTab === 'rewards' && (
          <div className="animate-fadeIn max-w-5xl mx-auto">
            <div className="mb-8 text-center">
               <h3 className="text-2xl font-black text-slate-800">{content.stages.rewards.title}</h3>
               <p className="text-amber-600 font-medium">{content.stages.rewards.subtitle}</p>
               <p className="text-slate-500 text-sm mt-2">{content.stages.rewards.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.stages.rewards.items.map((item, idx) => (
                <div key={idx} className="relative overflow-hidden bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100 hover:shadow-md transition-shadow">
                   <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Gift size={64} className="text-amber-600" />
                   </div>
                   <h4 className="font-bold text-slate-800 text-lg mb-2 relative z-10">{item.title}</h4>
                   <p className="text-slate-600 text-sm relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default GamePlanSection;