import React, { useState, useEffect } from 'react';
import { PageId, NavItem } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'skills', label: 'Skills', path: '/skills' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'education', label: 'Education', path: '/education' },
  { id: 'achievements', label: 'Achievements', path: '/achievements' },
  { id: 'activities', label: 'Activities', path: '/activities' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when escape key pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-white/70 backdrop-blur-xs border-b border-slate-200/40 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Brand Identity */}
        <button
          id="nav-brand-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#9e174f] rounded-lg p-1 -ml-1"
        >
          <div className="w-8 h-8 rounded-lg bg-[#9e174f] flex items-center justify-center text-white font-bold text-sm shadow-xs group-hover:bg-[#831843] transition-colors">
            MS
          </div>
          <div>
            <div className="font-display font-extrabold text-slate-900 tracking-tight text-base group-hover:text-[#9e174f] transition-colors">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
              B.Com (Computers) Student
            </div>
          </div>
        </button>

        {/* Center / Right: Desktop Navigation Links */}
        <nav
          id="desktop-nav"
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1 xl:gap-1.5"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  isActive
                    ? 'text-[#9e174f] bg-rose-50/80'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#9e174f] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Rightmost Button: Download Resume */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            id="nav-resume-btn"
            onClick={() => handleNavClick('resume')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg text-white bg-[#9e174f] hover:bg-[#831843] active:bg-[#701036] transition-all shadow-xs hover:shadow-md cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-menu-toggle-btn"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#9e174f]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer / Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-slate-900/40 backdrop-blur-xs z-50 flex flex-col"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-nav-panel"
            className="bg-white border-b border-slate-200 px-5 pt-3 pb-6 shadow-xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                Navigate Portfolio
              </span>
              <span className="text-xs font-bold text-[#9e174f]">
                {PERSONAL_INFO.shortName} Sharma
              </span>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-rose-50 text-[#9e174f]'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#9e174f]" />}
                  </button>
                );
              })}

              {/* Mobile Resume Link */}
              <button
                id="mobile-nav-resume"
                onClick={() => handleNavClick('resume')}
                className={`flex items-center justify-between w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  currentPage === 'resume'
                    ? 'bg-rose-50 text-[#9e174f]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Resume (Viewer & PDF)</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Resume CTA inside mobile menu */}
            <div className="mt-5 pt-4 border-t border-slate-100">
              <button
                id="mobile-download-resume-btn"
                onClick={() => handleNavClick('resume')}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#9e174f] text-white font-bold text-sm shadow-xs hover:bg-[#831843]"
              >
                <FileDown className="w-4 h-4" />
                <span>Download / Print Resume</span>
              </button>
              
              <div className="mt-3 text-center text-xs text-slate-500">
                {PERSONAL_INFO.email} • {PERSONAL_INFO.phone}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
