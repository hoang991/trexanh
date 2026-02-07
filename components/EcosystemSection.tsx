import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { TranslationData } from '../types';

interface Props {
  content: TranslationData['ecosystem'];
}

const EcosystemSection: React.FC<Props> = ({ content }) => {
  const data = content.chartLabels.map((label, index) => ({
    subject: label,
    A: [85, 75, 60, 90, 70][index],
    fullMark: 100,
  }));

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="mb-8 border-l-4 border-emerald-600 pl-4">
        <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-wider">{content.title}</h3>
        <p className="text-slate-600 mt-2">{content.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-center justify-center h-80 lg:h-auto">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: '#475569' }} />
              <Radar
                name="Revenue Strength"
                dataKey="A"
                stroke="#059669"
                strokeWidth={2}
                fill="#10b981"
                fillOpacity={0.4}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-6">
          {content.pillars.map((pillar, idx) => (
            <div key={idx} className="flex items-start">
              <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0 shadow-md">
                {idx + 1}
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">{pillar.title}</h4>
                <p className="text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcosystemSection;