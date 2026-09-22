import React from 'react';
import { Cpu, Handshake, Lightbulb, Target, Users, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import { WHY_GIET_REASONS } from '../data/gietData';

export const WhyGIETSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-blue-900 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
            Institutional Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
            Why Choose GIET Bhubaneswar?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Delivering industry-aligned engineering, management, and computer applications education supported by state-of-the-art campus facilities.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_GIET_REASONS.map((r, idx) => (
            <div key={idx} className="p-6 bg-slate-50 hover:bg-blue-50/50 rounded-2xl border border-slate-200/80 hover:border-blue-200 transition-all space-y-3 group">
              <div className="p-3 bg-white text-blue-900 rounded-xl w-fit shadow-xs group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-950">
                {r.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
