import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2, Building2, User, HelpCircle } from 'lucide-react';
import { GIET_INFO } from '../data/gietData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'B.Tech CSE',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-blue-900/40 shadow-xl space-y-4">
          <span className="text-xs font-bold text-blue-300 uppercase tracking-wider bg-blue-400/20 px-3 py-1 rounded-full border border-blue-300/30">
            Reach Out To GIET
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Contact Information & Campus Map
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed font-light">
            Get in touch with GIET Bhubaneswar main campus, administrative office, admission counseling desk, or submit an online inquiry.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Main Campus */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="p-3 bg-blue-50 text-blue-900 rounded-xl w-fit">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg font-serif">Main Campus</h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                {GIET_INFO.mainCampus.address}
              </p>
            </div>
            <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <a href="tel:06755243600" className="hover:underline font-semibold">06755-243600</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <a href="tel:+919937860139" className="hover:underline font-semibold">+91-9937860139</a>
              </div>
            </div>
          </div>

          {/* Card 2: Administrative Office */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="p-3 bg-amber-50 text-amber-800 rounded-xl w-fit">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg font-serif">Administrative Office</h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                {GIET_INFO.adminOffice.address}
              </p>
            </div>
            <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <a href="tel:06742912242" className="hover:underline font-semibold">0674-2912242</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <a href="tel:+919437092059" className="hover:underline font-semibold">+91-9437092059</a>
              </div>
            </div>
          </div>

          {/* Card 3: General & Dean Admission */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="p-3 bg-purple-50 text-purple-900 rounded-xl w-fit">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg font-serif">General & Admissions</h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Dean Admission Office & General Institutional Queries
              </p>
            </div>
            <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <a href="mailto:info@giet.edu.in" className="hover:underline font-medium text-blue-900">info@giet.edu.in</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <a href="tel:+919437117259" className="hover:underline font-semibold">+91-9437117259 / +91-9337217151</a>
              </div>
            </div>
          </div>

        </div>

        {/* Contact Form & Google Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inquiry Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold font-serif text-slate-900">
                Online Campus Inquiry Form
              </h3>
              <p className="text-xs text-slate-600">
                Fill out your details and our admission counselor will respond shortly.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-900 text-base">Inquiry Submitted Successfully!</h4>
                <p className="text-xs text-emerald-800">
                  Thank you for reaching out to GIET. The Dean Admission Office will review your message and contact you.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-xl"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Program Interested In</label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="B.Tech CSE">B.Tech Computer Science & Engineering</option>
                    <option value="B.Tech AI & ML">B.Tech Artificial Intelligence & ML</option>
                    <option value="B.Tech ECE">B.Tech Electronics & Communication</option>
                    <option value="B.Tech Mechanical">B.Tech Mechanical Engineering</option>
                    <option value="B.Tech Civil">B.Tech Civil Engineering</option>
                    <option value="MBA">MBA / MBA Agri Business / BBA</option>
                    <option value="MCA">MCA / BCA</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Message or Question</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Ask about admissions, counseling, hostel, scholarships..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to GIET</span>
                </button>
              </form>
            )}
          </div>

          {/* Google Maps Location Frame */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold font-serif text-slate-900 flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-900" />
                <span>GIET Main Campus Location</span>
              </h3>
              <p className="text-xs text-slate-600">
                Baniatangi, Bhubaneswar, Khordha, Odisha – 752060
              </p>
            </div>

            <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
              <iframe
                title="GIET Campus Map"
                src="https://maps.google.com/maps?q=Gandhi%20Institute%20for%20Education%20and%20Technology%20Baniatangi%20Bhubaneswar&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
