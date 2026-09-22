import React from 'react';
import { 
  CheckCircle2, 
  ExternalLink, 
  Phone, 
  Mail, 
  FileCheck, 
  ShieldAlert, 
  Award, 
  UserCheck, 
  BookOpen, 
  ClipboardList,
  Sparkles
} from 'lucide-react';
import { GIET_INFO, SCHOLARSHIPS_INFO } from '../data/gietData';
import { PageRoute } from '../types';

interface AdmissionsSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({ onNavigate }) => {
  const processSteps = [
    { step: '01', title: 'Explore Programs', desc: 'Review B.Tech, M.Tech, MBA, and MCA offerings and intake seats.' },
    { step: '02', title: 'Check Eligibility', desc: 'Verify 10+2 / Graduation qualification as per BPUT and state JEE guidelines.' },
    { step: '03', title: 'Submit Application', desc: 'Complete the official online form at admission.giet.edu.in portal.' },
    { step: '04', title: 'Document Verification', desc: 'Submit academic transcripts, marksheets, and category certificates for verification.' },
    { step: '05', title: 'Admission Confirmation', desc: 'Receive seat allotment and institutional confirmation letter.' },
    { step: '06', title: 'Reporting & Enrollment', desc: 'Complete physical reporting, hostel allocation, and academic registration.' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-blue-900/40 shadow-xl space-y-6 text-center sm:text-left">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider bg-amber-400/20 px-3 py-1 rounded-full border border-amber-300/30">
              Session 2026-27 Enrollment
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
              GIET Admissions & Counseling
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Join Odisha’s premier autonomous engineering institution. Simple, transparent 6-step admission procedure.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
            <a
              href="https://admission.giet.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-amber-500/20 transition-transform hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <span>Apply Now on Official Portal</span>
              <ExternalLink className="w-5 h-5" />
            </a>

            <a
              href="tel:+919437117259"
              className="bg-blue-800/80 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-xl text-sm border border-blue-600/60 flex items-center space-x-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-cyan-300" />
              <span>Call Dean Admission (+91-9437117259)</span>
            </a>
          </div>
        </div>

        {/* Admission Step Process */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
              6-Step Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              Step-by-Step Admission Process
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Follow these straightforward steps to confirm your admission at GIET Bhubaneswar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((s, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs relative space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-serif text-blue-900/30">
                    {s.step}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Admission Contact Cards */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <h2 className="text-xl font-bold font-serif text-slate-900 border-b border-slate-200 pb-3">
            Dean Admission & Office Contacts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-base">Dean Admission Office</h4>
              <p className="text-xs text-slate-600">Direct admission counseling hotline:</p>
              <div className="space-y-1 text-xs font-semibold text-blue-950">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>+91-9437117259</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>+91-9337217151</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-base">Official Admission Portal</h4>
              <p className="text-xs text-slate-600">Online registration & application form:</p>
              <a
                href={GIET_INFO.admissionPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-blue-700 hover:underline flex items-center space-x-1"
              >
                <span>https://admission.giet.edu.in/</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-base">Main Administrative Desk</h4>
              <p className="text-xs text-slate-600">Main Campus, Baniatangi:</p>
              <div className="text-xs font-semibold text-slate-800 space-y-1">
                <div>Phone: 06755-243600 / +91-9937860139</div>
                <div>Email: info@giet.edu.in</div>
              </div>
            </div>

          </div>
        </div>

        {/* Scholarships Section */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Financial Assistance
            </span>
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              Scholarship Schemes & Fee Waivers
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Eligible GIET students can apply for central and state government scholarship assistance programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SCHOLARSHIPS_INFO.map((s, idx) => (
              <div key={idx} className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-base flex items-center space-x-2">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>{s.name}</span>
                  </h3>
                  <span className="text-[10px] font-bold bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                    {s.authority}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          {/* Scholarship Mandatory Disclaimer */}
          <div className="p-4 bg-amber-50/90 rounded-xl border border-amber-200 text-xs text-amber-950 flex items-start space-x-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Scholarship Disclaimer: </strong>
              Scholarship eligibility, availability, documentation requirements and deadlines may change. Students should confirm the latest information with the institution or relevant scholarship authority.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
