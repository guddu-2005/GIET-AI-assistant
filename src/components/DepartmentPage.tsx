import React from 'react';
import { 
  Building2, 
  BookOpen, 
  Cpu, 
  Code, 
  Terminal, 
  Briefcase, 
  Users, 
  CheckCircle2, 
  ArrowLeft, 
  Phone, 
  Mail, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { DEPARTMENTS, GIET_INFO } from '../data/gietData';
import { PageRoute, DepartmentSlug } from '../types';

interface DepartmentPageProps {
  slug: DepartmentSlug;
  onNavigate: (route: PageRoute) => void;
}

export const DepartmentPage: React.FC<DepartmentPageProps> = ({ slug, onNavigate }) => {
  const dept = DEPARTMENTS[slug] || DEPARTMENTS['cse'];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Department Banner Header */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto space-y-4">
          <button
            onClick={() => onNavigate('academics')}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-300 hover:text-white bg-white/10 px-3 py-1.5 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Academic Departments</span>
          </button>

          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider bg-amber-400/20 px-2.5 py-1 rounded border border-amber-300/30">
              {dept.degreeType} Program
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight">
              Department of {dept.name}
            </h1>
            <p className="text-sm sm:text-base text-blue-200 font-medium">
              {dept.intakeText}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Overview & Key Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6 shadow-xs">
            <div className="space-y-3">
              <h2 className="text-xl font-bold font-serif text-slate-900 flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-blue-900" />
                <span>Department Overview</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {dept.overview}
              </p>
            </div>

            {/* Department Highlights */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-900">
                Key Department Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                {dept.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Software / Environment Setup */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-900 flex items-center space-x-1.5">
                <Terminal className="w-4 h-4 text-blue-600" />
                <span>Computing Environments & Software Tools</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {dept.softwareEnvironments.map((env, idx) => (
                  <span key={idx} className="text-xs bg-blue-50 text-blue-900 font-semibold px-3 py-1.5 rounded-lg border border-blue-100">
                    {env}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info & Admission Contact */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Faculty Section (Verified Rule: No invented faculty names) */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <h3 className="text-sm font-bold font-serif text-slate-900 uppercase tracking-wider text-blue-900 flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Department Faculty</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                "{dept.facultyNote}"
              </p>
            </div>

            {/* Student Clubs */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <h3 className="text-sm font-bold font-serif text-slate-900 uppercase tracking-wider text-blue-900 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Department Clubs & Activities</span>
              </h3>
              <div className="space-y-2">
                {dept.studentClubs.map((club, idx) => (
                  <div key={idx} className="text-xs font-semibold text-slate-800 bg-blue-50/60 px-3 py-2 rounded-xl border border-blue-100">
                    {club}
                  </div>
                ))}
              </div>
            </div>

            {/* Department Admission Contact */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-4 shadow-md">
              <h3 className="font-bold font-serif text-base text-white">
                Department Admission Inquiry
              </h3>
              <p className="text-xs text-slate-300">
                To confirm seat availability and counseling schedules for {dept.shortName}:
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center space-x-2 text-amber-300">
                  <Phone className="w-4 h-4" />
                  <span>+91-9437117259 / +91-9337217151</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>info@giet.edu.in</span>
                </div>
              </div>
              <a
                href="https://admission.giet.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center space-x-1 transition-colors"
              >
                <span>Apply via Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Laboratories Section */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6 shadow-xs">
          <div className="space-y-1">
            <h2 className="text-xl font-bold font-serif text-slate-900 flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-blue-900" />
              <span>Laboratories & Infrastructure</span>
            </h2>
            <p className="text-xs text-slate-600">
              Equipped with high-performance workstations, licensed engineering tools, and hardware kits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dept.laboratories.map((lab, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1 hover:border-blue-300 transition-colors">
                <div className="text-xs font-bold text-blue-950 flex items-center space-x-1.5">
                  <Code className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Lab {idx + 1}</span>
                </div>
                <p className="text-xs font-semibold text-slate-800 leading-snug">
                  {lab}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6 shadow-xs">
          <div className="space-y-1">
            <h2 className="text-xl font-bold font-serif text-slate-900 flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-blue-900" />
              <span>Career Paths & Industry Roles</span>
            </h2>
            <p className="text-xs text-slate-600">
              Graduates from {dept.shortName} pursue rewarding careers in software, core engineering, research, and technical consulting.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {dept.careerOpportunities.map((role, idx) => (
              <span key={idx} className="bg-slate-100 hover:bg-blue-100 text-slate-800 hover:text-blue-950 text-xs font-semibold px-3.5 py-2 rounded-xl border border-slate-200 transition-colors">
                {role}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
