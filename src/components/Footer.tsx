import React from 'react';
import { MapPin, Phone, Mail, Globe, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { GIET_INFO } from '../data/gietData';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: GIET Overview & Accreditation */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center text-white font-serif font-bold text-lg border border-blue-700">
                GIET
              </div>
              <div>
                <h3 className="font-serif font-bold text-white text-base tracking-tight">
                  GIET BHUBANESWAR
                </h3>
                <p className="text-[11px] text-slate-400 font-medium">
                  Gandhi Institute for Education and Technology
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering students through quality education, technology, innovation, and industry-oriented learning in Bhubaneswar, Odisha.
            </p>

            <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-900 space-y-1">
              <div className="font-semibold text-slate-300">Management Trust:</div>
              <div>Satya Panda Basanta Manjari Foundation Trust / SPBM Foundation</div>
              <div className="text-amber-400/90 pt-1">
                Approved by AICTE | Affiliated to BPUT | NAAC Accredited
              </div>
            </div>
          </div>

          {/* Column 2: GIET Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-white text-sm tracking-wide border-b border-slate-800 pb-2">
              GIET Institutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-400 transition-colors">
                  About GIET
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('academics')} className="hover:text-amber-400 transition-colors">
                  Academics & B.Tech Programs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('admissions')} className="hover:text-amber-400 transition-colors">
                  Admissions Process
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('campus-life')} className="hover:text-amber-400 transition-colors">
                  Campus Facilities & Hostels
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('placements')} className="hover:text-amber-400 transition-colors">
                  Training & Placement Cell
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('research')} className="hover:text-amber-400 transition-colors">
                  Research & Idea Lab
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links & Services */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-white text-sm tracking-wide border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://admission.giet.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center space-x-1"
                >
                  <span>Apply Now Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate('notices')} className="hover:text-amber-400 transition-colors">
                  Official Notices & Announcements
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('events')} className="hover:text-amber-400 transition-colors">
                  Upcoming Events & TechFest
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-amber-400 transition-colors">
                  Campus Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('student-services')} className="hover:text-amber-400 transition-colors">
                  Student Services (Moodle / ERP)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-amber-400 transition-colors">
                  Frequently Asked Questions (FAQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact Addresses */}
          <div className="space-y-3 text-xs">
            <h4 className="font-serif font-semibold text-white text-sm tracking-wide border-b border-slate-800 pb-2">
              Official Contact
            </h4>

            <div className="space-y-2">
              <div>
                <p className="font-semibold text-slate-200">Main Campus:</p>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {GIET_INFO.mainCampus.address}
                </p>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Phone: 06755-243600 / +91-9937860139
                </p>
              </div>

              <div className="pt-2 border-t border-slate-900">
                <p className="font-semibold text-slate-200">Administrative Office:</p>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {GIET_INFO.adminOffice.address}
                </p>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Phone: 0674-2912242 / +91-9437092059
                </p>
              </div>

              <div className="pt-2 border-t border-slate-900">
                <p className="text-[11px] text-slate-300">
                  Email: <a href="mailto:info@giet.edu.in" className="hover:underline text-blue-400">info@giet.edu.in</a>
                </p>
                <p className="text-[11px] text-slate-300">
                  Portal: <a href="https://giet.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">https://giet.edu.in/</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
          <span className="font-semibold text-slate-300">Institutional Notice: </span>
          GIET's academic programs, affiliations and institutional activities are supported by relevant approvals from AICTE, BPUT, SCTE&VT and NAAC. Fees, scholarship eligibility, admission dates, and seat availability are subject to official confirmation at the GIET Admission Office.
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} GIET — Gandhi Institute for Education and Technology. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-300 transition-colors">
              Terms of Service
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-300 transition-colors">
              Grievance Redressal
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
