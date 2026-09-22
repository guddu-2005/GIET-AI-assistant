import React from 'react';
import { ArrowRight, ExternalLink, Bot } from 'lucide-react';
import { PageRoute } from '../types';

interface CTASectionProps {
  onNavigate: (route: PageRoute) => void;
  onOpenAI: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onNavigate, onOpenAI }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden border-b border-blue-900/40">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-600/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <span className="text-xs font-bold text-amber-300 bg-amber-400/20 px-3.5 py-1 rounded-full border border-amber-300/30 uppercase tracking-wider">
          Begin Your Engineering & Tech Journey
        </span>

        <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
          Ready to Begin Your Journey at GIET?
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Explore our academic programs, learn about admissions, and discover opportunities for your future at Gandhi Institute for Education and Technology.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
          <button
            onClick={() => onNavigate('academics')}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl text-sm flex items-center space-x-2 shadow-lg shadow-blue-900/40 transition-all hover:-translate-y-0.5"
          >
            <span>Explore Programs</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://admission.giet.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm flex items-center space-x-2 shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5"
          >
            <span>Apply Now</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenAI}
            className="bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 font-semibold px-5 py-3.5 rounded-xl text-sm flex items-center space-x-2 transition-all"
          >
            <Bot className="w-4 h-4 text-cyan-300" />
            <span>Talk to GIET AI</span>
          </button>
        </div>

      </div>
    </section>
  );
};
