import React, { useState } from 'react';
import { GraduationCap, ArrowRight, BookOpen, Users, Clock, ShieldAlert, CheckCircle } from 'lucide-react';
import { PROGRAMS } from '../data/gietData';
import { PageRoute, DepartmentSlug } from '../types';

interface ProgramsOverviewProps {
  onNavigate: (route: PageRoute, deptSlug?: DepartmentSlug) => void;
}

export const ProgramsOverview: React.FC<ProgramsOverviewProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'UG' | 'PG' | 'Management' | 'Computer Applications'>('ALL');

  const filteredPrograms = activeTab === 'ALL' 
    ? PROGRAMS 
    : PROGRAMS.filter(p => p.category === activeTab);

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-blue-900 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
              Academic Offerings
            </span>
            <h2 className="text-3xl font-bold font-serif text-slate-900 tracking-tight">
              Degree Programs & Approved Seat Intakes
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Explore undergraduate and postgraduate degrees at GIET Bhubaneswar. Click any program to view full department details.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-white p-1.5 rounded-xl border border-slate-200">
            {(['ALL', 'UG', 'PG', 'Management', 'Computer Applications'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab === 'UG' ? 'B.Tech (UG)' : tab === 'PG' ? 'M.Tech (PG)' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              onClick={() => onNavigate('department', prog.departmentSlug)}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md hover:border-blue-300 cursor-pointer transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                
                {/* Degree & Category Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold bg-blue-100 text-blue-900 px-2.5 py-1 rounded-md">
                    {prog.degree}
                  </span>
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                    <Users className="w-3.5 h-3.5 text-blue-600" />
                    <span>Intake: {prog.intake ? `${prog.intake} Seats` : 'Contact Office'}</span>
                  </div>
                </div>

                {/* Name & Code */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                    {prog.name}
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Duration: {prog.duration}
                  </span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {prog.description}
                </p>

              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900 group-hover:text-blue-700">
                <span>View Department & Syllabus</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Official Disclaimer Note */}
        <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start space-x-3">
          <ShieldAlert className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-800">Admission Notice: </span>
            Please confirm the latest intake, eligibility criteria, and official fee structures directly with the GIET admission office (+91-9437117259 / info@giet.edu.in).
          </div>
        </div>

      </div>
    </section>
  );
};
