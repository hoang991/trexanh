import React from 'react';
import { Sun, Minimize2, HeartHandshake, Eye } from 'lucide-react';
import { TranslationData } from '../types';

interface Props {
  content: TranslationData['culture'];
}

const CultureSection: React.FC<Props> = ({ content }) => {
  const icons = [
    <Sun className="w-8 h-8 text-amber-500" />,           // Thiên Nhân Địa
    <Minimize2 className="w-8 h-8 text-teal-500" />,      // Tánh Rỗng
    <HeartHandshake className="w-8 h-8 text-rose-500" />, // Biết Ơn
    <Eye className="w-8 h-8 text-indigo-500" />           // Chánh Kiến
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-amber-500">
      <div className="mb-8 text-center">
        <h3 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-1">{content.title}</h3>
        <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">{content.subtitle}</h2>
        <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full"></div>
        <p className="text-slate-600 max-w-2xl mx-auto italic">"{content.description}"</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.items.map((item, idx) => (
          <div key={idx} className="flex items-start p-4 bg-orange-50/50 rounded-xl border border-orange-100 hover:bg-orange-50 transition-colors">
            <div className="bg-white p-3 rounded-full shadow-sm mr-4 flex-shrink-0">
              {icons[idx]}
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-lg mb-1">{item.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CultureSection;