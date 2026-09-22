import React from 'react';
import { 
  Building2, 
  Coffee, 
  CreditCard, 
  BookOpen, 
  Wifi, 
  Cross, 
  Bus, 
  Trophy, 
  Users, 
  Headphones, 
  Laptop, 
  ShieldCheck, 
  Sparkles,
  Heart
} from 'lucide-react';
import { GIET_INFO } from '../data/gietData';

export const CampusFacilities: React.FC = () => {
  const facilities = [
    {
      title: "Separate Boys & Girls Hostels",
      desc: "Secure, supervised residential blocks with Resident Superintendents, caretakers, welfare officers, and regular hostel committee review meetings.",
      icon: Building2,
      tag: "Residential"
    },
    {
      title: "Campus Canteen",
      desc: GIET_INFO.canteenCapacity ? `GIET's campus canteen serves students and staff and is reported by GIET to serve ${GIET_INFO.canteenCapacity}.` : "Serves nutritious meals to students and faculty.",
      icon: Coffee,
      tag: "Dining"
    },
    {
      title: "SBI ATM Facility",
      desc: "State Bank of India ATM located conveniently on campus for instant banking accessibility.",
      icon: CreditCard,
      tag: "Banking"
    },
    {
      title: "Central Digital Library",
      desc: "Expansive collection of engineering textbooks, reference manuals, international research journals, e-books, and quiet study areas.",
      icon: BookOpen,
      tag: "Academic"
    },
    {
      title: "ICT Network & High-Speed Internet",
      desc: "Campus-wide networked computer labs, Wi-Fi connectivity, and high-bandwidth internet infrastructure.",
      icon: Wifi,
      tag: "Infrastructure"
    },
    {
      title: "Medical & Health Support",
      desc: "First-aid medical room, emergency vehicle arrangements, and medical officer assistance on call.",
      icon: Cross,
      tag: "Healthcare"
    },
    {
      title: "Transportation Service",
      desc: "Fleet of institutional buses connecting GIET campus with key Bhubaneswar city hubs, Khordha, and Jatni.",
      icon: Bus,
      tag: "Transport"
    },
    {
      title: "Sports & Athletic Complex",
      desc: "Outdoor grounds for cricket, football, volleyball, along with indoor facilities for badminton, table tennis, and chess.",
      icon: Trophy,
      tag: "Sports"
    },
    {
      title: "Language Communication Lab",
      desc: "Interactive multimedia audio-visual lab designed to enhance English phonetics, vocabulary, and soft skills.",
      icon: Headphones,
      tag: "Skill Development"
    },
    {
      title: "Moodle E-Learning & ERP Portal",
      desc: "Digital learning management system and ERP portal for academic course materials, attendance, and feedback.",
      icon: Laptop,
      tag: "Digital Campus"
    },
    {
      title: "National Cadet Corps (NCC)",
      desc: "Active NCC wing instilling discipline, national service, leadership, and physical fitness among cadets.",
      icon: ShieldCheck,
      tag: "Leadership"
    },
    {
      title: "Counselling & Academic Mentoring",
      desc: "Dedicated faculty mentor assigned to student groups for academic guidance, personal counselling, and encouragement.",
      icon: Heart,
      tag: "Student Welfare"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-blue-900/40 shadow-xl space-y-4">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-wider bg-amber-400/20 px-3 py-1 rounded-full border border-amber-300/30">
            Student Life & Amenities
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Campus Facilities & Infrastructure
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed font-light">
            Designed to foster a safe, healthy, technologically equipped, and vibrant campus community at Baniatangi, Bhubaneswar.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-blue-900">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                      {f.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {f.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hostel Disclosure Note */}
        <div className="p-5 bg-white rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2">
          <h4 className="font-bold text-slate-900 text-sm">Hostel Accommodation Policy Notice:</h4>
          <p className="leading-relaxed">
            Separate hostel accommodation for male and female students is subject to seat allocation guidelines. Please confirm official hostel fees and application procedures with the GIET Hostel Administration office during reporting. Real-time hostel room availability is verified at the admission desk.
          </p>
        </div>

      </div>
    </div>
  );
};
