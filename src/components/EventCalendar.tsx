import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Tag, CheckCircle2, User, Sparkles } from 'lucide-react';
import { EVENTS } from '../data/gietData';
import { EventItem } from '../types';

export const EventCalendar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeEventModal, setActiveEventModal] = useState<EventItem | null>(null);

  const categories = ['ALL', 'Technical', 'Cultural', 'Sports', 'Workshop', 'Seminar', 'Hackathon', 'Placement'];

  const filteredEvents = selectedCategory === 'ALL'
    ? EVENTS
    : EVENTS.filter(e => e.category === selectedCategory);

  return (
    <div className="bg-slate-50 min-h-screen py-12 space-y-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-blue-900/40 shadow-xl space-y-4">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-wider bg-amber-400/20 px-3 py-1 rounded-full border border-amber-300/30">
            Campus Life & Activities
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Upcoming Events & Symposia
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed font-light">
            Hackathons, annual cultural celebrations, sports tournaments, and technical workshops at GIET Bhubaneswar.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Image Showcase */}
                <div className="relative h-48 bg-slate-900 overflow-hidden">
                  <img
                    src={event.imageUrl || "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold bg-blue-900/90 backdrop-blur-md text-white px-2.5 py-1 rounded-md border border-blue-400/30 uppercase">
                    {event.category}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-900">
                    {event.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span>{event.date} {event.time ? `(${event.time})` : ''}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed pt-1">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => setActiveEventModal(event)}
                  className="w-full py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-xl text-xs transition-colors shadow-xs"
                >
                  Register & View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Event Details Modal */}
      {activeEventModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden space-y-4 p-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold uppercase bg-blue-100 text-blue-900 px-2.5 py-1 rounded">
                {activeEventModal.category} Event
              </span>
              <button onClick={() => setActiveEventModal(null)} className="text-slate-400 hover:text-slate-600 text-sm font-bold">
                ✕
              </button>
            </div>

            <h3 className="text-lg font-bold text-slate-900 font-serif">
              {activeEventModal.title}
            </h3>

            <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div><strong>Date & Time:</strong> {activeEventModal.date} {activeEventModal.time ? `(${activeEventModal.time})` : ''}</div>
              <div><strong>Location:</strong> {activeEventModal.location}</div>
              {activeEventModal.organizer && <div><strong>Organizer:</strong> {activeEventModal.organizer}</div>}
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {activeEventModal.description}
            </p>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => {
                  alert(`Thank you for registering for ${activeEventModal.title}! Confirmation details sent to student services.`);
                  setActiveEventModal(null);
                }}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl"
              >
                Register For Event
              </button>
              <button
                onClick={() => setActiveEventModal(null)}
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
