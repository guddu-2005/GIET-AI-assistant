import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  HeartHandshake, 
  BookOpen, 
  Laptop, 
  Trophy, 
  Sparkles, 
  ShieldAlert, 
  HelpCircle,
  CheckCircle2
} from 'lucide-react';

export const StudentServicesSection: React.FC = () => {
  const services = [
    {
      title: "Faculty Mentoring System",
      desc: "Every GIET student is assigned a dedicated faculty mentor providing personalized academic guidance, performance tracking, and career counselling.",
      icon: Users
    },
    {
      title: "Anti-Ragging Committee & Squad",
      desc: "Zero-tolerance campus policy against ragging. Strict compliance with Supreme Court of India, AICTE, and UGC anti-ragging directives.",
      icon: ShieldAlert
    },
    {
      title: "Internal Complaints Committee (ICC)",
      desc: "Dedicated cell ensuring a safe, supportive, and respectful campus environment for female students and women employees.",
      icon: HeartHandshake
    },
    {
      title: "Grievance Redressal Portal",
      desc: "Transparent mechanism for students to register academic, hostel, or administrative grievances with timely resolution.",
      icon: HelpCircle
    },
    {
      title: "Moodle Learning & ERP Portal",
      desc: "24/7 online access to lecture notes, assignment submissions, class timetables, semester marks, and attendance reports.",
      icon: Laptop
    },
    {
      title: "Student Clubs & Societies",
      desc: "Technical, coding, robotics, literary, music, photography, and drama clubs enriching holistic personality development.",
      icon: Sparkles
    },
    {
      title: "Sports & Fitness Infrastructure",
      desc: "Annual athletic meets, inter-college tournaments, cricket ground, basketball court, and indoor game zones.",
      icon: Trophy
    },
    {
      title: "National Cadet Corps (NCC)",
      desc: "Disciplined NCC cadet wing conducting outdoor camps, republic day parades, and social service initiatives.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-blue-900/40 shadow-xl space-y-4">
          <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider bg-emerald-400/20 px-3 py-1 rounded-full border border-emerald-300/30">
            Student Support System
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Student Welfare & Services
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed font-light">
            Providing comprehensive mentoring, safety cells, digital learning portals, anti-ragging oversight, and student activity clubs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-900 w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Anti-Ragging Mandate Notice */}
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center space-x-2 font-bold text-slate-900 text-base font-serif">
            <ShieldAlert className="w-5 h-5 text-rose-600" />
            <span>Anti-Ragging Undertaking Mandate</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            In compliance with AICTE/UGC regulations, all admitted students and parents must submit anti-ragging undertakings at the time of reporting. GIET Bhubaneswar enforces strict disciplinary measures to maintain a safe and welcoming campus for every student.
          </p>
        </div>

      </div>
    </div>
  );
};
