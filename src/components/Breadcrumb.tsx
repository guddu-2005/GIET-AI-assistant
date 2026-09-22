import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageRoute } from '../types';

interface BreadcrumbProps {
  route: PageRoute;
  deptName?: string;
  onNavigate: (route: PageRoute) => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ route, deptName, onNavigate }) => {
  if (route === 'home') return null;

  const routeLabels: Record<PageRoute, string> = {
    home: 'Home',
    about: 'About GIET',
    academics: 'Academics & Programs',
    admissions: 'Admissions 2026',
    'campus-life': 'Campus Life & Facilities',
    placements: 'Training & Placements',
    research: 'Research & Idea Lab',
    'student-services': 'Student Services',
    notices: 'Notices & Circulars',
    events: 'Events & Symposia',
    gallery: 'Photo Gallery',
    contact: 'Contact Us',
    faq: 'FAQs',
    department: deptName ? `Department of ${deptName}` : 'Department Details'
  };

  return (
    <div className="bg-slate-100 border-b border-slate-200 py-2.5 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-slate-600">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-1 hover:text-blue-900 transition-colors font-medium"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>

        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />

        <span className="font-semibold text-slate-900">
          {routeLabels[route]}
        </span>
      </div>
    </div>
  );
};
