import React from 'react';
import { 
  Briefcase, 
  Mail, 
  Phone, 
  UserCheck, 
  Building2, 
  Target, 
  BookOpen, 
  CheckCircle2, 
  ShieldAlert, 
  Users, 
  GraduationCap
} from 'lucide-react';
import { GIET_INFO } from '../data/gietData';

export const PlacementDashboard: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-blue-900/40 shadow-xl space-y-4">
          <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider bg-cyan-400/20 px-3 py-1 rounded-full border border-cyan-300/30">
            Career Preparation & Campus Drives
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Training & Placement Cell
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed font-light">
            Dedicated to empowering GIET graduates with technical aptitude, soft skills training, industrial internships, and campus recruitment drives.
          </p>
        </div>

        {/* Placement Cell Team Contacts */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-xl font-bold font-serif text-slate-900 flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-900" />
                <span>Placement Cell Contacts</span>
              </h2>
              <p className="text-xs text-slate-500">Official coordinators for campus recruitment & internships</p>
            </div>
            <div className="text-xs font-semibold bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg border border-blue-200 flex items-center space-x-1.5">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>General Placement Email: {GIET_INFO.placementEmail}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GIET_INFO.placementContacts.map((c, idx) => (
              <div key={idx} className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider bg-blue-100 px-2 py-0.5 rounded">
                    {c.role}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">{c.name}</h3>
                </div>

                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <a href={`mailto:${c.email}`} className="hover:underline text-blue-900 font-medium">
                      {c.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <a href={`tel:${c.phone}`} className="hover:underline font-semibold text-slate-900">
                      {c.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recruiters Appearing Section */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-1 border-b border-slate-200 pb-4">
            <h2 className="text-xl font-bold font-serif text-slate-900">
              Recruiters / Organizations Appearing in GIET Placement Material
            </h2>
            <p className="text-xs text-slate-600">
              Leading technical & corporate organizations that have participated in GIET placement drives and recruitment interactions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {GIET_INFO.recruitersList.map((recruiter, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl text-center font-bold text-slate-800 hover:text-blue-950 text-sm transition-colors flex items-center justify-center min-h-[70px]"
              >
                {recruiter}
              </div>
            ))}
          </div>

          <div className="text-[11px] text-slate-500 italic">
            * Note: Listing of companies reflects historical and ongoing corporate recruitment interactions in GIET placement materials. Individual hiring cycles depend on corporate requirements.
          </div>
        </div>

        {/* Training Pillars & Placement Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
            <h3 className="text-lg font-bold font-serif text-slate-900 flex items-center space-x-2">
              <Target className="w-5 h-5 text-blue-900" />
              <span>Career Development & Aptitude Training</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The Placement Cell conducts structured training programs starting from early academic years, focusing on:
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Quantitative aptitude & logical reasoning problem solving</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Technical coding bootcamps in C++, Java, Python, and SQL</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Group discussion, soft skills, and mock interview practice</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Industry domain workshops & resume building sessions</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
            <h3 className="text-lg font-bold font-serif text-slate-900 flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-blue-900" />
              <span>Placement Drive Process</span>
            </h3>
            <ol className="space-y-3 text-xs text-slate-700 list-decimal list-inside leading-relaxed">
              <li><strong className="text-slate-900">Pre-Placement Talks:</strong> Recruiters share job roles, skill expectations, and organizational profile.</li>
              <li><strong className="text-slate-900">Online/Written Aptitude Evaluation:</strong> Assessment of core technical skills and logic.</li>
              <li><strong className="text-slate-900">Technical Interviews:</strong> Problem solving and domain knowledge assessment.</li>
              <li><strong className="text-slate-900">HR Discussion & Offer Letter:</strong> Final offer issuance and onboard counseling.</li>
            </ol>
          </div>

        </div>

        {/* Mandatory Placement Disclaimer */}
        <div className="p-5 bg-amber-50/90 rounded-2xl border border-amber-200 text-xs text-amber-950 space-y-2">
          <div className="flex items-center space-x-2 font-bold text-amber-900 text-sm">
            <ShieldAlert className="w-5 h-5 text-amber-600" />
            <span>Placement Notice & Disclosure</span>
          </div>
          <p className="leading-relaxed">
            Placement statistics are updated periodically. Please contact the Training & Placement Cell for the latest verified figures. GIET provides comprehensive placement assistance, training, and recruitment opportunities; institutional policies do not promise guaranteed jobs, fixed packages, or specific recruiter selections.
          </p>
        </div>

      </div>
    </div>
  );
};
