import React from 'react';
import { Users, Tent, Recycle, Share2 } from 'lucide-react';
import { TranslationData } from '../types';

interface Props {
  content: TranslationData['operations'];
}

const OperationsSection: React.FC<Props> = ({ content }) => {
  const icons = [
    <Users className="w-6 h-6 text-emerald-600" />,
    <Tent className="w-6 h-6 text-emerald-600" />,
    <Recycle className="w-6 h-6 text-emerald-600" />,
    <Share2 className="w-6 h-6 text-emerald-600" />,
  ];

  return (
    <div className="bg-emerald-50 rounded-xl shadow-inner p-6 md:p-8 border border-emerald-100">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <h3 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-1">{content.title}</h3>
          <h2 className="text-2xl font-black text-slate-800 uppercase">{content.subtitle}</h2>
        </div>
        <p className="text-slate-500 text-sm md:text-right mt-2 md:mt-0 max-w-md">
          {content.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {content.items.map((item, idx) => (
          <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border-b-4 border-emerald-500 hover:-translate-y-1 transition-transform">
            <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              {icons[idx]}
            </div>
            <h4 className="font-bold text-slate-800 mb-2 min-h-[48px] flex items-center">{item.title}</h4>
            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OperationsSection;