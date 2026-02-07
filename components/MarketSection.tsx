import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TranslationData } from '../types';

interface Props {
  content: TranslationData['market'];
}

const MarketSection: React.FC<Props> = ({ content }) => {
  const leafData = [
    { year: '2020', price: 30 },
    { year: '2022', price: 40 },
    { year: '2024', price: 58 },
    { year: '2026', price: 80 },
  ];

  const carbonData = content.carbonLabels.map((label, idx) => ({
    name: label,
    value: [30000, 50000, 80000][idx]
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-slate-200 shadow-md rounded text-xs">
          <p className="font-bold">{label}</p>
          <p className="text-emerald-600">{payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Leaves Chart */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h4 className="font-bold text-slate-800 mb-2 border-b-2 border-lime-400 inline-block">
          {content.leafTitle}
        </h4>
        <p className="text-xs text-slate-500 mb-6 min-h-[32px]">{content.leafDesc}</p>
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={leafData}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#84cc16" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#84cc16" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="year" tick={{fontSize: 12}} />
              <YAxis tick={{fontSize: 12}} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="price" stroke="#65a30d" fillOpacity={1} fill="url(#colorPrice)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Carbon Chart */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h4 className="font-bold text-slate-800 mb-2 border-b-2 border-teal-400 inline-block">
          {content.carbonTitle}
        </h4>
        <p className="text-xs text-slate-500 mb-6 min-h-[32px]">{content.carbonDesc}</p>
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={carbonData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{fontSize: 10}} interval={0} />
              <YAxis tick={{fontSize: 12}} />
              <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
              <Bar dataKey="value" fill="#0d9488" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MarketSection;