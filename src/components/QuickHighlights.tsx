import React from 'react';
import { Calendar, ShieldCheck, CheckCircle2, Building2, Award, Briefcase } from 'lucide-react';

export const QuickHighlights: React.FC = () => {
  const highlights = [
    { title: "Established in 2009", desc: "15+ Years of Academic Excellence", icon: Calendar, color: "text-blue-600 bg-blue-50" },
    { title: "Autonomous Institution", desc: "Industry-Aligned Curriculum", icon: ShieldCheck, color: "text-amber-600 bg-amber-50" },
    { title: "AICTE Approved", desc: "Apex Technical Body Recognition", icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50" },
    { title: "BPUT Affiliated", desc: "Biju Patnaik University of Technology", icon: Building2, color: "text-indigo-600 bg-indigo-50" },
    { title: "NAAC Accredited", desc: "Quality Higher Education Standards", icon: Award, color: "text-purple-600 bg-purple-50" },
    { title: "Industry-Oriented", desc: "Practical & IIPC Project Learning", icon: Briefcase, color: "text-cyan-600 bg-cyan-50" }
  ];

  return (
    <section className="bg-slate-50 py-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-2 group"
              >
                <div className={`p-2.5 rounded-xl ${item.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
