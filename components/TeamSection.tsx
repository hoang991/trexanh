import React from 'react';
import { TranslationData } from '../types';

interface Props {
  content: TranslationData['team'];
}

const TeamSection: React.FC<Props> = ({ content }) => {
  return (
    <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white rounded-xl shadow-2xl p-6 md:p-8">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-lime-400 uppercase tracking-wider">{content.title}</h3>
        <p className="text-emerald-100 mt-2 max-w-2xl mx-auto">{content.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {content.members.map((member, idx) => (
          <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 text-center hover:bg-white/10 transition-colors group">
            <div className="text-lime-400 font-black text-[10px] uppercase mb-1 leading-tight group-hover:text-lime-300 tracking-wider">
              {member.role}
            </div>
            <div className="text-white font-bold text-sm mb-2">
              {member.name}
            </div>
            <div className="text-emerald-200 text-[10px] leading-tight opacity-80">
              {member.exp}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;