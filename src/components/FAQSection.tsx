import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, Mail, Phone } from 'lucide-react';
import { FAQS } from '../data/gietData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [query, setQuery] = useState('');

  const filteredFaqs = FAQS.filter(
    f => f.question.toLowerCase().includes(query.toLowerCase()) || f.answer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen py-12 space-y-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-blue-900/40 shadow-xl space-y-3 text-center">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-wider bg-amber-400/20 px-3 py-1 rounded-full border border-amber-300/30">
            Frequently Asked Questions
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
            GIET Help & FAQs
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Find quick answers to common questions regarding GIET programs, admissions, hostels, and contacts.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search FAQs (e.g. 'hostel', 'admission', 'CSE', 'placement')..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-xs"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base hover:text-blue-900"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-blue-900' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 mt-1">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-3">
          <h3 className="font-bold text-slate-900 text-base font-serif">Have more questions?</h3>
          <p className="text-xs text-slate-600">Contact the GIET Administration or Admission Counseling Desk directly.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-1 text-xs">
            <a
              href="tel:+919937860139"
              className="px-4 py-2 bg-blue-900 text-white font-semibold rounded-xl"
            >
              Call +91-9937860139
            </a>
            <a
              href="mailto:info@giet.edu.in"
              className="px-4 py-2 bg-slate-100 text-slate-800 font-semibold rounded-xl hover:bg-slate-200"
            >
              Email info@giet.edu.in
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
