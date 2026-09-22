import React, { useState } from 'react';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gietData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['ALL', 'Campus', 'Labs', 'Events', 'Sports', 'Cultural', 'Workshops'];

  const filteredGallery = selectedCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(g => g.category === selectedCategory);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === 0 ? filteredGallery.length - 1 : prev! - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === filteredGallery.length - 1 ? 0 : prev! + 1));
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 space-y-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-blue-900/40 shadow-xl space-y-4">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-wider bg-amber-400/20 px-3 py-1 rounded-full border border-amber-300/30">
            Campus Visual Tour
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            GIET Photo Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed font-light">
            Explore GIET Bhubaneswar’s academic infrastructure, high-tech computer labs, sports complex, and cultural celebrations.
          </p>
        </div>

        {/* Category Pills */}
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

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-200 shadow-xs hover:shadow-md transition-all"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                <span className="text-[10px] font-bold uppercase bg-blue-600/80 px-2 py-0.5 rounded text-blue-100 backdrop-blur-xs">
                  {item.category}
                </span>
                <h4 className="text-xs font-bold leading-tight line-clamp-1">
                  {item.title}
                </h4>
              </div>

              <div className="absolute top-3 right-3 p-2 bg-slate-900/60 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-2 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center space-y-3">
            <img
              src={filteredGallery[lightboxIndex].imageUrl}
              alt={filteredGallery[lightboxIndex].title}
              className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl border border-slate-800"
            />
            <div className="text-center text-white space-y-1 max-w-lg">
              <span className="text-xs font-bold uppercase text-amber-400 bg-amber-400/20 px-2.5 py-0.5 rounded">
                {filteredGallery[lightboxIndex].category}
              </span>
              <h3 className="text-base font-bold">{filteredGallery[lightboxIndex].title}</h3>
              {filteredGallery[lightboxIndex].caption && (
                <p className="text-xs text-slate-300">{filteredGallery[lightboxIndex].caption}</p>
              )}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};
