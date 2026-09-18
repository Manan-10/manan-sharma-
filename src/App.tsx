import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { EducationPage } from './pages/EducationPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { ResumePage } from './pages/ResumePage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Helper to parse path from window.location
  const getPageFromUrl = (): PageId => {
    // Check hash first (e.g. #/about or #about)
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (hash && isValidPage(hash)) {
      return hash as PageId;
    }

    // Check pathname
    const path = window.location.pathname.replace(/^\//, '').split('/')[0];
    if (path && isValidPage(path)) {
      return path as PageId;
    }

    return 'home';
  };

  const isValidPage = (p: string): boolean => {
    return [
      'home',
      'about',
      'skills',
      'projects',
      'education',
      'achievements',
      'activities',
      'resume',
      'contact',
    ].includes(p);
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromUrl);

  // Listen to browser popstate (back/forward navigation)
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(getPageFromUrl());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    const newPath = page === 'home' ? '/' : `/${page}`;
    
    // Safely update history state
    try {
      window.history.pushState({ page }, '', newPath);
    } catch {
      // Fallback to hash if pushState is restricted in an environment
      window.location.hash = page === 'home' ? '' : `/${page}`;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render current page content
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'skills':
        return <SkillsPage onNavigate={navigateTo} />;
      case 'projects':
        return <ProjectsPage onNavigate={navigateTo} />;
      case 'education':
        return <EducationPage onNavigate={navigateTo} />;
      case 'achievements':
        return <AchievementsPage onNavigate={navigateTo} />;
      case 'activities':
        return <ActivitiesPage onNavigate={navigateTo} />;
      case 'resume':
        return <ResumePage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-[#9e174f] selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Area */}
      <main className="flex-1 w-full flex flex-col">
        {renderPage()}
      </main>

      {/* Shared Global Footer */}
      <div className="no-print">
        <Footer onNavigate={navigateTo} />
      </div>
    </div>
  );
}
