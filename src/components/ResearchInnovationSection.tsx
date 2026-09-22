import React from 'react';
import { Lightbulb, Cpu, Handshake, Rocket, BookOpen, Users, Award, CheckCircle2 } from 'lucide-react';

export const ResearchInnovationSection: React.FC = () => {
  const iipcActivities = [
    "Industrial Internships & Field Exposure",
    "Expert Talks by Industry Leaders & Architects",
    "Technical Bootcamps & Hands-On Workshops",
    "Seminars on Emerging Technology Trends",
    "Specialized Skill Training Programs",
    "Industry-Institute Collaborative Projects"
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-blue-900/40 shadow-xl space-y-4">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-wider bg-amber-400/20 px-3 py-1 rounded-full border border-amber-300/30">
            R&D, Incubation & Idea Lab
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Research & Innovation Hub
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed font-light">
            Fostering an ecosystem of invention, product prototyping, interdisciplinary research, and industry collaboration at GIET Bhubaneswar.
          </p>
        </div>

        {/* Core Wings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="p-3 bg-blue-50 text-blue-900 rounded-xl w-fit">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-slate-900">
              GIET Idea Lab
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipped with modern rapid prototyping tools, 3D printers, sensor electronics, microcontroller kits, and testing stations empowering students to turn creative concepts into functional physical prototypes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="p-3 bg-amber-50 text-amber-800 rounded-xl w-fit">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-slate-900">
              Industry Institute Partnership Cell (IIPC)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Acts as a vital bridge between GIET academic departments and industrial organizations, facilitating knowledge transfer, joint research, and practical student internships.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="p-3 bg-emerald-50 text-emerald-900 rounded-xl w-fit">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-slate-900">
              Student Incubation & Entrepreneurship
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Provides technical mentoring, seed idea guidance, and business communication training for aspiring student entrepreneurs building tech start-ups.
            </p>
          </div>

        </div>

        {/* IIPC Activities Detail */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold font-serif text-slate-900">
              Industry Institute Partnership Cell (IIPC) Activities
            </h2>
            <p className="text-xs text-slate-600">
              The IIPC at GIET actively supports students and faculty through structured programs:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {iipcActivities.map((act, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-800 leading-snug">{act}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
