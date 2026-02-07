import React from 'react';
import { TranslationData } from '../types';

interface Props {
  content: TranslationData['culture'];
}

const CultureSection: React.FC<Props> = ({ content }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-emerald-500">
      <div className="mb-8 border-l-4 border-emerald-600 pl-4">
        <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-wider">{content.title}</h3>
        <p className="text-slate-600 mt-2">{content.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {content.items.map((item, idx) => (
          <div key={idx} className="p-4 bg-emerald-50 rounded-xl text-center border border-emerald-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <span className="text-3xl block mb-2">{item.icon}</span>
            <h4 className="font-bold text-slate-800 text-sm mb-2">{item.title}</h4>
            <p className="text-xs text-slate-500 leading-tight">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CultureSection;