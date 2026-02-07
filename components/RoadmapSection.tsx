import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { TranslationData } from '../types';

interface Props {
  content: TranslationData['roadmap'];
}

const COLORS = ['bg-lime-500', 'bg-teal-500', 'bg-blue-600'];
const BORDER_COLORS = ['border-lime-500', 'border-teal-500', 'border-blue-600'];

const RoadmapSection: React.FC<Props> = ({ content }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-slate-800 border-l-4 border-emerald-600 pl-4 uppercase tracking-wider mb-8">
        {content.title}
      </h3>
      
      <div className="relative border-l-4 border-emerald-100 ml-4 md:ml-6 space-y-12 pb-4">
        {content.steps.map((step, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className={`absolute -left-[14px] md:-left-[14px] top-1 w-6 h-6 rounded-full border-4 border-white ${COLORS[idx]} shadow-sm`}></div>
            
            <h4 className={`text-xl font-bold text-slate-800 mb-3`}>{step.year}</h4>
            
            <div className={`bg-emerald-50/50 p-5 rounded-lg border-l-4 ${BORDER_COLORS[idx]} shadow-sm`}>
              <ul className="space-y-2">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapSection;