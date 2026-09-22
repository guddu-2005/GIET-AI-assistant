import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, GraduationCap, FileText, Calendar, Building, ChevronRight, Phone } from 'lucide-react';
import { PROGRAMS, DEPARTMENTS, NOTICES, EVENTS, FAQS, GIET_INFO } from '../data/gietData';
import { PageRoute, SearchResult, DepartmentSlug } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: PageRoute, deptSlug?: DepartmentSlug) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Handled externally
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results: SearchResult[] = [];

  if (query.trim().length > 1) {
    const q = query.toLowerCase();

    // Search Programs
    PROGRAMS.forEach(p => {
      if (p.name.toLowerCase().includes(q) || p.code.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) {
        results.push({
          id: `prog-${p.id}`,
          title: `${p.degree} - ${p.name}`,
          category: 'Programs & Courses',
          snippet: `Intake: ${p.intake || 'N/A'} seats | Duration: ${p.duration}. ${p.description}`,
          route: 'academics',
          departmentSlug: p.departmentSlug
        });
      }
    });

    // Search Departments
    Object.values(DEPARTMENTS).forEach(d => {
      if (d.name.toLowerCase().includes(q) || d.shortName.toLowerCase().includes(q) || d.overview.toLowerCase().includes(q)) {
        results.push({
          id: `dept-${d.slug}`,
          title: `Department of ${d.name}`,
          category: 'Department',
          snippet: d.overview,
          route: 'department',
          departmentSlug: d.slug
        });
      }
    });

    // Search Notices
    NOTICES.forEach(n => {
      if (n.title.toLowerCase().includes(q) || n.description.toLowerCase().includes(q)) {
        results.push({
          id: `notice-${n.id}`,
          title: n.title,
          category: `Notice (${n.category})`,
          snippet: n.description,
          route: 'notices'
        });
      }
    });

    // Search Events
    EVENTS.forEach(e => {
      if (e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q)) {
        results.push({
          id: `event-${e.id}`,
          title: e.title,
          category: `Event (${e.category})`,
          snippet: `${e.date} @ ${e.location}. ${e.description}`,
          route: 'events'
        });
      }
    });

    // Search FAQs
    FAQS.forEach(f => {
      if (f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)) {
        results.push({
          id: `faq-${f.id}`,
          title: f.question,
          category: 'FAQ',
          snippet: f.answer,
          route: 'faq'
        });
      }
    });
  }

  const handleSelectResult = (res: SearchResult) => {
    onNavigate(res.route, res.departmentSlug);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Header */}
        <div className="p-4 border-b border-slate-200 flex items-center space-x-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search courses, departments, notices, admissions, placements..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent border-none text-slate-900 placeholder-slate-400 focus:outline-none text-base"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded-md hover:bg-slate-300"
          >
            ESC
          </button>
        </div>

        {/* Results area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {query.trim().length <= 1 ? (
            <div className="text-center py-8 text-slate-500 space-y-3">
              <Search className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-sm">Type a search term (e.g. "CSE", "Hostel", "Placement", "Admissions")</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['B.Tech CSE', 'Admissions', 'Placement Cell', 'Scholarships', 'Hostel Canteen'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-10 text-slate-500">
              <p className="text-sm font-medium text-slate-700">No results found for "{query}"</p>
              <p className="text-xs mt-1">Try searching for branch names like CSE, Mechanical, Admissions or Contact info.</p>
            </div>
          ) : (
            results.map((res) => (
              <div
                key={res.id}
                onClick={() => handleSelectResult(res)}
                className="p-3 bg-white hover:bg-blue-50 border border-slate-100 hover:border-blue-200 rounded-xl cursor-pointer transition-all flex items-start justify-between group"
              >
                <div className="space-y-1 pr-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                      {res.category}
                    </span>
                    <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-900">
                      {res.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {res.snippet}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 mt-1 flex-shrink-0" />
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <span>Search GIET Knowledge Index</span>
          <span className="text-[11px] text-slate-400">Press Ctrl + K anytime</span>
        </div>
      </div>
    </div>
  );
};
