import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Search, 
  Sparkles, 
  Bot, 
  ChevronDown, 
  GraduationCap, 
  ExternalLink,
  BookOpen,
  Award,
  Users
} from 'lucide-react';
import { GIET_INFO } from '../data/gietData';
import { PageRoute, DepartmentSlug } from '../types';

interface NavbarProps {
  activeRoute: PageRoute;
  activeDeptSlug?: DepartmentSlug;
  onNavigate: (route: PageRoute, deptSlug?: DepartmentSlug) => void;
  onOpenAI: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeRoute,
  activeDeptSlug,
  onNavigate,
  onOpenAI,
  onOpenSearch
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicsDropdown, setAcademicsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; route: PageRoute; hasDropdown?: boolean }[] = [
    { label: 'Home', route: 'home' },
    { label: 'About', route: 'about' },
    { label: 'Academics', route: 'academics', hasDropdown: true },
    { label: 'Admissions', route: 'admissions' },
    { label: 'Campus Life', route: 'campus-life' },
    { label: 'Placements', route: 'placements' },
    { label: 'Research & Innovation', route: 'research' },
    { label: 'Student Services', route: 'student-services' },
    { label: 'Notices', route: 'notices' },
    { label: 'Events', route: 'events' },
    { label: 'Gallery', route: 'gallery' },
    { label: 'Contact', route: 'contact' }
  ];

  const handleNavClick = (route: PageRoute, deptSlug?: DepartmentSlug) => {
    onNavigate(route, deptSlug);
    setMobileMenuOpen(false);
    setAcademicsDropdown(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm transition-all duration-200">
      
      {/* Top Banner Contact Strip */}
      <div className="bg-slate-950 text-slate-300 py-1.5 px-4 text-xs border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Baniatangi, Bhubaneswar, Khordha, Odisha – 752060</span>
            </span>
            <span className="flex items-center space-x-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Admissions: +91-9437117259 | Main: 06755-243600</span>
            </span>
            <span className="flex items-center space-x-1.5 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>info@giet.edu.in</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://admission.giet.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold flex items-center space-x-1 transition-colors"
            >
              <span>Admission Portal 2026</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={() => handleNavClick('faq')}
              className="hover:text-white transition-colors"
            >
              FAQs
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-200 ${isScrolled ? 'py-2 bg-white/95 backdrop-blur-md shadow-md' : 'py-3 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 flex items-center justify-center text-white font-bold text-xl shadow-md border border-blue-800/40 group-hover:scale-105 transition-transform">
              <span className="tracking-tighter font-serif text-blue-100">GIET</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="font-bold text-slate-900 text-base sm:text-lg tracking-tight font-serif group-hover:text-blue-900 transition-colors">
                  GIET BHUBANESWAR
                </h1>
                <span className="hidden xl:inline-block bg-blue-100 text-blue-950 text-[10px] font-bold px-2 py-0.5 rounded border border-blue-200">
                  AUTONOMOUS
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                Gandhi Institute for Education and Technology
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeRoute === link.route && !activeDeptSlug;

              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.route}
                    className="relative group"
                    onMouseEnter={() => setAcademicsDropdown(true)}
                    onMouseLeave={() => setAcademicsDropdown(false)}
                  >
                    <button
                      onClick={() => handleNavClick('academics')}
                      className={`px-2.5 py-2 rounded-lg text-xs font-semibold flex items-center space-x-1 transition-colors ${
                        isActive ? 'text-blue-900 bg-blue-50 font-bold' : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-900" />
                    </button>

                    {/* Academics Mega Dropdown */}
                    {academicsDropdown && (
                      <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="px-3 py-1.5 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Departments & Programs
                        </div>
                        <button
                          onClick={() => handleNavClick('academics')}
                          className="w-full text-left px-4 py-2 text-xs font-semibold text-blue-900 hover:bg-blue-50 flex items-center justify-between"
                        >
                          <span>All Programs & Intakes</span>
                          <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-blue-600" />
                        </button>
                        <div className="border-t border-slate-100 my-1" />
                        <button
                          onClick={() => handleNavClick('department', 'cse')}
                          className="w-full text-left px-4 py-1.5 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-900"
                        >
                          Computer Science & Engineering
                        </button>
                        <button
                          onClick={() => handleNavClick('department', 'aiml')}
                          className="w-full text-left px-4 py-1.5 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-900"
                        >
                          Artificial Intelligence & ML
                        </button>
                        <button
                          onClick={() => handleNavClick('department', 'ece')}
                          className="w-full text-left px-4 py-1.5 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-900"
                        >
                          Electronics & Communication (ECE)
                        </button>
                        <button
                          onClick={() => handleNavClick('department', 'mech')}
                          className="w-full text-left px-4 py-1.5 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-900"
                        >
                          Mechanical Engineering
                        </button>
                        <button
                          onClick={() => handleNavClick('department', 'civil')}
                          className="w-full text-left px-4 py-1.5 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-900"
                        >
                          Civil Engineering
                        </button>
                        <button
                          onClick={() => handleNavClick('department', 'ee')}
                          className="w-full text-left px-4 py-1.5 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-900"
                        >
                          Electrical Engineering
                        </button>
                        <button
                          onClick={() => handleNavClick('department', 'mba')}
                          className="w-full text-left px-4 py-1.5 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-900"
                        >
                          MBA & Management Studies
                        </button>
                        <button
                          onClick={() => handleNavClick('department', 'mca')}
                          className="w-full text-left px-4 py-1.5 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-900"
                        >
                          MCA & BCA Applications
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.route}
                  onClick={() => handleNavClick(link.route)}
                  className={`px-2.5 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    isActive 
                      ? 'text-blue-950 bg-blue-50 font-bold' 
                      : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:text-blue-900 hover:bg-slate-100 rounded-xl transition-colors"
              title="Search (Ctrl + K)"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* AI Assistant Button */}
            <button
              onClick={onOpenAI}
              className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-900 hover:from-blue-900 hover:to-indigo-800 text-white px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 shadow-sm transition-all hover:shadow-md border border-blue-700/30"
            >
              <Bot className="w-4 h-4 text-cyan-300 animate-pulse" />
              <span className="hidden sm:inline">Talk to GIET AI</span>
              <span className="sm:hidden">GIET AI</span>
            </button>

            {/* Apply Now Button */}
            <a
              href="https://admission.giet.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm hover:shadow flex items-center space-x-1"
            >
              <span>Apply Now</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-xl max-h-[80vh] overflow-y-auto">
          
          {/* Quick contact banner inside drawer */}
          <div className="bg-slate-100 p-3 rounded-xl text-xs space-y-1 text-slate-700">
            <div className="font-semibold text-slate-900">Dean Admission Office</div>
            <div>Phone: +91-9437117259 / +91-9337217151</div>
            <div>Email: info@giet.edu.in</div>
          </div>

          <div className="space-y-1 pt-1">
            {navLinks.map((link) => (
              <button
                key={link.route}
                onClick={() => handleNavClick(link.route)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  activeRoute === link.route 
                    ? 'bg-blue-900 text-white' 
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-60" />}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <a
              href="https://admission.giet.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-amber-500 text-slate-950 text-center font-bold py-2.5 rounded-xl text-sm shadow-sm"
            >
              Go to Admission Portal (admission.giet.edu.in)
            </a>
            <button
              onClick={() => {
                onOpenAI();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-blue-950 text-white font-semibold py-2.5 rounded-xl text-sm flex items-center justify-center space-x-2"
            >
              <Bot className="w-4 h-4 text-cyan-300" />
              <span>Talk to GIET AI Assistant</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
