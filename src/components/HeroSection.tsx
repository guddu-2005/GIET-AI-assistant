import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Bot, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Award,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { GIET_INFO } from '../data/gietData';
import { PageRoute } from '../types';

interface HeroSectionProps {
  onNavigate: (route: PageRoute) => void;
  onOpenAI: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenAI }) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden py-16 lg:py-24 border-b border-blue-900/40">
      
      {/* Background Decorative Mesh Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      
      {/* Ambient Radial Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-900/50 border border-blue-500/30 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Admissions Open for B.Tech & Post-Graduate 2026-27</span>
              <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white font-serif leading-tight">
              Gandhi Institute for <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-amber-200 to-cyan-300">
                Education & Technology
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
              Empowering students through quality education, technology, innovation, and industry-oriented learning.
            </p>

            {/* Location Tag */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-slate-300 font-medium">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Baniatangi, Bhubaneswar, Khordha, Odisha – 752060</span>
            </div>

            {/* Hero CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
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
                className="bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 font-semibold px-5 py-3.5 rounded-xl text-sm flex items-center space-x-2 backdrop-blur-sm transition-all"
              >
                <Bot className="w-4 h-4 text-cyan-300" />
                <span>Talk to GIET AI</span>
              </button>
            </div>

            {/* Accreditation Badges list */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-300 text-xs">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>AICTE Approved</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>BPUT Affiliated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>NAAC Accredited</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Autonomous</span>
              </div>
            </div>

          </div>

          {/* Right Visual Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 bg-slate-900">
              
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200"
                alt="GIET Campus Bhubaneswar"
                className="w-full h-[360px] sm:h-[420px] object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Float Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Institutional Excellence
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-medium border border-emerald-500/30">
                    Est. 2009
                  </span>
                </div>
                <p className="text-xs text-slate-200 leading-snug">
                  15+ Years of shaping technical leaders in B.Tech, M.Tech, MBA, and MCA.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
