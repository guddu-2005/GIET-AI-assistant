import React from 'react';
import { Building2, User, Clock, MapPin, Award, BookOpen, Lightbulb, Target, Users, ShieldCheck } from 'lucide-react';
import { GIET_INFO } from '../data/gietData';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            About GIET Bhubaneswar
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
            Gandhi Institute for Education and Technology
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A premier autonomous institute dedicated to academic rigor, technological advancement, research, and holistic career preparation.
          </p>
        </div>

        {/* Info Grid & Leadership Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Institutional Data Box */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
            <h3 className="text-xl font-bold font-serif text-slate-900 border-b border-slate-200 pb-3">
              Institutional Profile
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="space-y-1 bg-white p-3.5 rounded-xl border border-slate-200">
                <span className="text-slate-500 text-[11px] font-semibold uppercase block">Full Name</span>
                <span className="font-semibold text-slate-900">{GIET_INFO.fullName}</span>
              </div>

              <div className="space-y-1 bg-white p-3.5 rounded-xl border border-slate-200">
                <span className="text-slate-500 text-[11px] font-semibold uppercase block">Established</span>
                <span className="font-semibold text-slate-900">{GIET_INFO.established}</span>
              </div>

              <div className="space-y-1 bg-white p-3.5 rounded-xl border border-slate-200 sm:col-span-2">
                <span className="text-slate-500 text-[11px] font-semibold uppercase block">Campus Location</span>
                <span className="font-semibold text-slate-900">{GIET_INFO.location}</span>
              </div>

              <div className="space-y-1 bg-white p-3.5 rounded-xl border border-slate-200 sm:col-span-2">
                <span className="text-slate-500 text-[11px] font-semibold uppercase block">Management Trust</span>
                <span className="font-semibold text-slate-900">{GIET_INFO.management}</span>
              </div>

              <div className="space-y-1 bg-white p-3.5 rounded-xl border border-slate-200">
                <span className="text-slate-500 text-[11px] font-semibold uppercase block">Institution Type</span>
                <span className="font-semibold text-slate-900">{GIET_INFO.institutionType}</span>
              </div>

              <div className="space-y-1 bg-white p-3.5 rounded-xl border border-slate-200">
                <span className="text-slate-500 text-[11px] font-semibold uppercase block">Office Hours</span>
                <span className="font-semibold text-slate-900">{GIET_INFO.officeHours}</span>
              </div>
            </div>

            {/* Principal Banner */}
            <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white p-4 sm:p-5 rounded-xl flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0 text-white font-bold">
                <User className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-blue-300 tracking-wider">Principal Leadership</span>
                <h4 className="font-bold text-base text-white">{GIET_INFO.principal}</h4>
                <p className="text-xs text-slate-300">Leading GIET towards excellence in engineering, research, and student mentorship.</p>
              </div>
            </div>
          </div>

          {/* Academic Focus Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-bold font-serif text-slate-900">
                Core Institutional Focus
              </h3>
              
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-3">
                  <BookOpen className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Engineering Education:</strong> Rigorous academic curriculum in B.Tech & M.Tech disciplines.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Lightbulb className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Research & Innovation:</strong> Hands-on prototyping at the GIET Idea Lab and computing centers.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Industry Interaction:</strong> Active collaboration via Industry Institute Partnership Cell (IIPC).
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Career Preparation:</strong> Training in quantitative aptitude, coding, communication, and soft skills.
                  </div>
                </li>
              </ul>
            </div>

            {/* Accreditation Note */}
            <div className="bg-amber-50/80 p-5 rounded-2xl border border-amber-200 text-xs text-amber-950 space-y-2">
              <div className="flex items-center space-x-2 font-bold text-amber-900">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
                <span>Accreditations & Affiliations</span>
              </div>
              <p className="leading-relaxed">
                {GIET_INFO.accreditationText}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
