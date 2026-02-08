import React from 'react';
import { Compass, Target, Wind, Heart, ShieldCheck, Lightbulb, Quote } from 'lucide-react';
import { TranslationData } from '../types';

interface Props {
  content: TranslationData['visionMission'];
}

const VisionMissionSection: React.FC<Props> = ({ content }) => {
  const valueIcons = [
    <Wind className="w-8 h-8 text-lime-600" />,
    <Heart className="w-8 h-8 text-rose-500" />,
    <ShieldCheck className="w-8 h-8 text-blue-600" />,
    <Lightbulb className="w-8 h-8 text-amber-500" />,
  ];

  const missionIcons = [
    '🌿', '🧑‍🤝‍🧑', '🏢'
  ];

  return (
    <div className="space-y-12">
      {/* Slogan Banner */}
      <div className="relative bg-emerald-900 rounded-2xl p-8 md:p-12 text-center overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <div className="absolute -top-10 -left-10 w-64 h-64 bg-lime-500 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500 rounded-full blur-3xl"></div>
        </div>
        <Quote className="w-10 h-10 text-lime-400 mx-auto mb-4 opacity-50" />
        <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-wide relative z-10 leading-relaxed">
          {content.slogan}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Vision */}
        <div className="bg-gradient-to-br from-white to-emerald-50 rounded-xl shadow-lg p-8 border-l-4 border-lime-500">
          <div className="flex items-center mb-6">
            <div className="bg-lime-100 p-3 rounded-full mr-4">
              <Compass className="w-8 h-8 text-lime-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-wider">{content.vision.title}</h3>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed italic border-l-2 border-lime-200 pl-4">
            "{content.vision.content}"
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-teal-500">
          <div className="flex items-center mb-6">
            <div className="bg-teal-100 p-3 rounded-full mr-4">
              <Target className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-wider">{content.mission.title}</h3>
          </div>
          <div className="space-y-6">
            {content.mission.items.map((item, idx) => (
              <div key={idx} className="flex items-start">
                <span className="text-2xl mr-4 mt-1" role="img" aria-label="icon">{missionIcons[idx]}</span>
                <div>
                  <h4 className="font-bold text-teal-800 text-lg">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
        <div className="text-center mb-10">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">{content.coreValues.title}</h3>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">{content.coreValues.subtitle}</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-lime-400 to-emerald-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.coreValues.items.map((val, idx) => (
            <div key={idx} className="group relative bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-100 rounded-bl-full opacity-50 group-hover:bg-emerald-200 transition-colors"></div>
              
              <div className="mb-4 relative z-10 bg-white inline-block p-3 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                {valueIcons[idx]}
              </div>
              
              <div className="text-4xl font-black text-slate-200 absolute top-4 right-4 select-none opacity-50 group-hover:opacity-100 transition-opacity group-hover:text-emerald-100">
                {val.char}
              </div>

              <h4 className="text-xl font-bold text-slate-800 mb-2 relative z-10">{val.title}</h4>
              <p className="text-sm text-slate-600 mb-4 h-20 overflow-y-auto">{val.content}</p>
              
              <div className="border-t border-slate-200 pt-3">
                <span className="text-xs font-bold text-emerald-600 uppercase block mb-1">Hành động:</span>
                <p className="text-xs text-slate-500 italic">{val.action}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;