import React from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, ArrowUpRight, GraduationCap, FileDown } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Identity & Positioning (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#9e174f] flex items-center justify-center text-white font-bold text-sm shadow-xs">
                MS
              </div>
              <div>
                <h3 className="text-white font-display font-bold text-lg tracking-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-rose-300 font-medium">
                  {PERSONAL_INFO.primaryTitle}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Combining commerce fundamentals, MS Excel data handling, computer applications, and digital marketing. Actively seeking opportunities to gain real-world business and technology experience.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/60 w-fit">
              <GraduationCap className="w-4 h-4 text-[#be185d]" />
              <span>{PERSONAL_INFO.college}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-slate-200 tracking-wider uppercase mb-4">
              Portfolio Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <button
                onClick={() => handleNav('home')}
                className="text-left text-slate-400 hover:text-white transition-colors py-1 cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => handleNav('about')}
                className="text-left text-slate-400 hover:text-white transition-colors py-1 cursor-pointer"
              >
                About Me
              </button>
              <button
                onClick={() => handleNav('skills')}
                className="text-left text-slate-400 hover:text-white transition-colors py-1 cursor-pointer"
              >
                Skills
              </button>
              <button
                onClick={() => handleNav('projects')}
                className="text-left text-slate-400 hover:text-white transition-colors py-1 cursor-pointer"
              >
                Projects (Upcoming)
              </button>
              <button
                onClick={() => handleNav('education')}
                className="text-left text-slate-400 hover:text-white transition-colors py-1 cursor-pointer"
              >
                Education
              </button>
              <button
                onClick={() => handleNav('achievements')}
                className="text-left text-slate-400 hover:text-white transition-colors py-1 cursor-pointer"
              >
                Achievements
              </button>
              <button
                onClick={() => handleNav('activities')}
                className="text-left text-slate-400 hover:text-white transition-colors py-1 cursor-pointer"
              >
                Activities
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="text-left text-slate-400 hover:text-white transition-colors py-1 cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Col 3: Direct Contact (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 tracking-wider uppercase mb-4">
              Direct Contact
            </h4>
            
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-rose-300 transition-colors group"
            >
              <Mail className="w-4 h-4 text-[#db2777]" />
              <span className="truncate">{PERSONAL_INFO.email}</span>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-rose-300 transition-colors group"
            >
              <Phone className="w-4 h-4 text-[#db2777]" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>

            <div className="flex items-start gap-2.5 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-[#db2777] shrink-0 mt-0.5" />
              <span>{PERSONAL_INFO.location}</span>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleNav('resume')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 cursor-pointer transition-colors"
              >
                <FileDown className="w-3.5 h-3.5 text-rose-400" />
                <span>View Full Resume</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              Open to Internship & Entry-Level Opportunities
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
