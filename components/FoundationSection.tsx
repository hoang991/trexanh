import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { TranslationData } from '../types';

interface Props {
  content: TranslationData['foundation'];
}

const COLORS = ['#059669', '#84cc16', '#0ea5e9'];

const FoundationSection: React.FC<Props> = ({ content }) => {
  const data = [
    { name: content.chartLabels[0], value: 150 },
    { name: content.chartLabels[1], value: 30 },
    { name: content.chartLabels[2], value: 20 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transition-transform hover:shadow-xl">
      <div className="mb-6 border-l-4 border-emerald-600 pl-4">
        <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-wider">{content.title}</h3>
        <p className="text-slate-600 mt-2">{content.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { val: 250, label: content.stats.land },
            { val: 5, label: content.stats.pillars },
            { val: 3, label: content.stats.yearsToIpo },
            { val: "6+", label: content.stats.exp }
          ].map((stat, idx) => (
            <div key={idx} className="bg-emerald-50 p-4 rounded-lg text-center border border-emerald-100 flex flex-col justify-center items-center h-32">
              <div className="text-3xl font-black text-emerald-600">{stat.val}</div>
              <div className="text-xs uppercase font-bold text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="flex flex-col items-center">
          <h4 className="text-center font-bold text-slate-700 mb-4">{content.chartTitle}</h4>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationSection;