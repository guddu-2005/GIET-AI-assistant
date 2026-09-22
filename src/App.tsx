import React, { useState, useEffect } from 'react';
import { PageRoute, DepartmentSlug } from './types';
import { DEPARTMENTS } from './data/gietData';

// Components
import { Navbar } from './components/Navbar';
import { Breadcrumb } from './components/Breadcrumb';
import { HeroSection } from './components/HeroSection';
import { QuickHighlights } from './components/QuickHighlights';
import { AboutSection } from './components/AboutSection';
import { ProgramsOverview } from './components/ProgramsOverview';
import { WhyGIETSection } from './components/WhyGIETSection';
import { DepartmentPage } from './components/DepartmentPage';
import { AdmissionsSection } from './components/AdmissionsSection';
import { PlacementDashboard } from './components/PlacementDashboard';
import { CampusFacilities } from './components/CampusFacilities';
import { ResearchInnovationSection } from './components/ResearchInnovationSection';
import { StudentServicesSection } from './components/StudentServicesSection';
import { NoticeBoard } from './components/NoticeBoard';
import { EventCalendar } from './components/EventCalendar';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { AIVoiceAssistant } from './components/AIVoiceAssistant';
import { SearchModal } from './components/SearchModal';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [activeDeptSlug, setActiveDeptSlug] = useState<DepartmentSlug>('cse');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isAIOpen, setIsAIOpen] = useState<boolean>(false);

  // Scroll to top on route change
  const handleNavigate = (route: PageRoute, deptSlug?: DepartmentSlug) => {
    if (deptSlug) {
      setActiveDeptSlug(deptSlug);
    }
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut Ctrl + K for search modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeDeptName = DEPARTMENTS[activeDeptSlug]?.name || 'Engineering';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans antialiased selection:bg-blue-900 selection:text-white">
      
      {/* Sticky Navigation Header */}
      <Navbar
        activeRoute={currentRoute}
        activeDeptSlug={activeDeptSlug}
        onNavigate={handleNavigate}
        onOpenAI={() => setIsAIOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Breadcrumb Trail */}
      <Breadcrumb
        route={currentRoute}
        deptName={currentRoute === 'department' ? activeDeptName : undefined}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content Body */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <>
            <HeroSection
              onNavigate={handleNavigate}
              onOpenAI={() => setIsAIOpen(true)}
            />
            <QuickHighlights />
            <AboutSection />
            <ProgramsOverview onNavigate={handleNavigate} />
            <WhyGIETSection />
            <ResearchInnovationSection />
            <PlacementDashboard />
            <NoticeBoard />
            <EventCalendar />
            <GallerySection />
            <FAQSection />
            <CTASection
              onNavigate={handleNavigate}
              onOpenAI={() => setIsAIOpen(true)}
            />
          </>
        )}

        {currentRoute === 'about' && (
          <>
            <AboutSection />
            <WhyGIETSection />
            <CTASection
              onNavigate={handleNavigate}
              onOpenAI={() => setIsAIOpen(true)}
            />
          </>
        )}

        {currentRoute === 'academics' && (
          <>
            <ProgramsOverview onNavigate={handleNavigate} />
            <WhyGIETSection />
          </>
        )}

        {currentRoute === 'department' && (
          <DepartmentPage
            slug={activeDeptSlug}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'admissions' && (
          <AdmissionsSection onNavigate={handleNavigate} />
        )}

        {currentRoute === 'campus-life' && (
          <CampusFacilities />
        )}

        {currentRoute === 'placements' && (
          <PlacementDashboard />
        )}

        {currentRoute === 'research' && (
          <ResearchInnovationSection />
        )}

        {currentRoute === 'student-services' && (
          <StudentServicesSection />
        )}

        {currentRoute === 'notices' && (
          <NoticeBoard />
        )}

        {currentRoute === 'events' && (
          <EventCalendar />
        )}

        {currentRoute === 'gallery' && (
          <GallerySection />
        )}

        {currentRoute === 'contact' && (
          <ContactSection />
        )}

        {currentRoute === 'faq' && (
          <FAQSection />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* GIET AI Assistant Drawer Modal */}
      <AIVoiceAssistant
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Floating Back to Top Button */}
      <ScrollToTop />

    </div>
  );
}
