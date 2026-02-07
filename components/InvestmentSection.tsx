import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TranslationData } from '../types';

interface Props {
  content: TranslationData['investment'];
}

const InvestmentSection: React.FC<Props> = ({ content }) => {
  const data = [
    {
      name: content.labels[0], // Operating Profit
      investor: 70,
      founder: 30,
    },
    {
      name: content.labels[1], // IPO Value
      investor: 30,
      founder: 70,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-lime-400 uppercase tracking-wider">{content.title}</h3>
        <p className="text-slate-300 mt-2">{content.description}</p>
      </div>

      <div className="h-48 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" data={data} margin={{ left: 20, right: 20 }}>
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" width={120} tick={{ fill: '#fff', fontSize: 12 }} />
            <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                itemStyle={{ color: '#fff' }}
            />
            <Legend verticalAlign="top" height={36}/>
            <Bar dataKey="investor" name={content.chartLabels[0]} stackId="a" fill="#a3e635" barSize={30} />
            <Bar dataKey="founder" name={content.chartLabels[1]} stackId="a" fill="#10b981" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        {content.perks.map((perk, idx) => (
          <div key={idx} className="bg-white/10 p-5 rounded-lg border border-white/5 backdrop-blur-sm">
            <h5 className="font-bold text-lime-300 mb-3 text-lg">{perk.title}</h5>
            <ul className="space-y-2">
              {perk.items.map((item, i) => (
                <li key={i} className="flex items-start text-slate-300">
                  <span className="text-emerald-400 mr-2">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentSection;