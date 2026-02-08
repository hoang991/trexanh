import React from 'react';
import { Gamepad2, Smartphone, Gift, Sprout, MessageCircle, ShoppingBag, Award, Heart, Leaf } from 'lucide-react';
import { TranslationData } from '../types';

interface Props {
  content: TranslationData['digital'];
}

const DigitalLayerSection: React.FC<Props> = ({ content }) => {
  return (
    <div className="space-y-8">
      {/* Game Section */}
      <div className="bg-slate-900 text-white rounded-xl shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-32 bg-emerald-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        
        <div className="p-6 md:p-8 relative z-10">
          <div className="flex items-center mb-6">
            <Gamepad2 className="w-8 h-8 text-lime-400 mr-3" />
            <div>
              <h3 className="text-sm font-bold text-lime-400 uppercase tracking-widest">{content.game.title}</h3>
              <h2 className="text-2xl font-black">{content.game.subtitle}</h2>
            </div>
          </div>
          <p className="text-slate-300 mb-6 border-l-2 border-lime-500 pl-4">{content.game.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.game.items.map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-white/15 transition-colors">
                <div className="mb-2 text-lime-300">
                  {idx === 0 ? <Sprout size={20} /> : idx === 1 ? <Leaf size={20} /> : <Smartphone size={20} />}
                </div>
                <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* App Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <Smartphone className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-black text-xl text-slate-800">{content.app.title}</h3>
          </div>
          <p className="text-sm text-slate-500 mb-6">{content.app.description}</p>
          
          <div className="space-y-4">
            {content.app.items.map((item, idx) => (
              <div key={idx} className="flex items-start">
                <div className="mt-1 mr-3 text-blue-500">
                   {idx === 0 ? <Award size={16} /> : idx === 1 ? <MessageCircle size={16} /> : <ShoppingBag size={16} />}
                </div>
                <div>
                  <h4 className="font-bold text-slate-700 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rewards Section */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-6 border border-amber-100">
          <div className="flex items-center mb-4">
            <div className="bg-amber-100 p-2 rounded-lg mr-3">
              <Gift className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="font-black text-xl text-slate-800">{content.rewards.title}</h3>
              <div className="text-xs font-bold text-amber-600 uppercase tracking-wider">{content.rewards.subtitle}</div>
            </div>
          </div>
          
          <div className="space-y-3 mt-6">
            {content.rewards.items.map((item, idx) => (
              <div key={idx} className="bg-white p-3 rounded-lg shadow-sm border border-amber-100 flex items-center">
                 <div className="bg-amber-50 p-2 rounded-full mr-3 text-amber-500">
                    {idx === 0 ? <Leaf size={14} /> : idx === 1 ? <Heart size={14} /> : <Award size={14} />}
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                   <p className="text-[10px] text-slate-500">{item.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalLayerSection;