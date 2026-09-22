import React, { useState } from 'react';
import { FileText, Download, Calendar, Filter, Search, Tag, ExternalLink, ShieldCheck, Info } from 'lucide-react';
import { NOTICES } from '../data/gietData';
import { Notice } from '../types';

export const NoticeBoard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNoticeModal, setActiveNoticeModal] = useState<Notice | null>(null);

  const categories = ['ALL', 'Admission', 'Examination', 'Placement', 'Academic', 'Events', 'Scholarships', 'General'];

  const filteredNotices = NOTICES.filter((n) => {
    const matchesCat = selectedCategory === 'ALL' || n.category === selectedCategory;
    const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) || n.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12 space-y-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-blue-900/40 shadow-xl space-y-4">
          <span className="text-xs font-bold text-blue-300 uppercase tracking-wider bg-blue-400/20 px-3 py-1 rounded-full border border-blue-300/30">
            Official Bulletin
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Notices & Announcements
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed font-light">
            Stay informed with current institutional circulars, exam schedules, placement alerts, and scholarship deadlines.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row gap-4 items-center justify-between">
          
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search notices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

        </div>

        {/* Notice List Cards */}
        <div className="space-y-4">
          {filteredNotices.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500">
              <FileText className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-semibold">No notices matching filter parameters.</p>
            </div>
          ) : (
            filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-300 transition-all space-y-3 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold bg-blue-100 text-blue-900 px-2.5 py-0.5 rounded uppercase">
                      {notice.category}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{notice.date}</span>
                    </span>
                    {notice.isImportant && (
                      <span className="text-[10px] font-bold bg-rose-100 text-rose-800 px-2 py-0.5 rounded">
                        Urgent
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 hover:text-blue-900 cursor-pointer" onClick={() => setActiveNoticeModal(notice)}>
                    {notice.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {notice.description}
                  </p>
                </div>

                <div className="flex items-center space-x-2 flex-shrink-0">
                  <button
                    onClick={() => setActiveNoticeModal(notice)}
                    className="px-3.5 py-2 bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold rounded-xl transition-colors"
                  >
                    View Details
                  </button>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Notice PDF Document Download requested for: ${notice.title}`);
                    }}
                    className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors"
                    title="Download Official Notice PDF"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

      </div>

      {/* Notice Details Modal */}
      {activeNoticeModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden space-y-4 p-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold uppercase bg-blue-100 text-blue-900 px-2.5 py-1 rounded">
                {activeNoticeModal.category}
              </span>
              <button onClick={() => setActiveNoticeModal(null)} className="text-slate-400 hover:text-slate-600 text-sm font-bold">
                ✕
              </button>
            </div>

            <h3 className="text-lg font-bold text-slate-900 font-serif leading-snug">
              {activeNoticeModal.title}
            </h3>

            <div className="text-xs text-slate-500 font-medium">
              Published: {activeNoticeModal.date} | GIET Bhubaneswar
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
              {activeNoticeModal.description}
            </p>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => alert(`Downloading PDF circular for ${activeNoticeModal.title}`)}
                className="px-4 py-2 bg-blue-900 text-white text-xs font-bold rounded-xl flex items-center space-x-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official PDF</span>
              </button>
              <button
                onClick={() => setActiveNoticeModal(null)}
                className="px-4 py-2 bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
