import React from 'react';
import { PageId } from '../types';
import { CERTIFICATIONS, ACHIEVEMENTS, PERSONAL_INFO } from '../data/portfolioData';
import { IconRenderer } from '../components/IconRenderer';
import {
  Award,
  Trophy,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Sparkles,
  FileSpreadsheet,
  Globe,
} from 'lucide-react';

interface AchievementsPageProps {
  onNavigate: (page: PageId) => void;
}

export const AchievementsPage: React.FC<AchievementsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================
            PAGE HEADER
        ============================================================ */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9e174f] mb-2 block">
            RECOGNITION & UPSKILLING
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Certifications & Achievements
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Formal certifications and notable milestones achieved across academics, competitive sports, and community initiatives.
          </p>
        </div>

        {/* ============================================================
            SECTION 1: CERTIFICATIONS
        ============================================================ */}
        <section id="certifications-section" className="mb-16">
          <div className="border-b border-slate-200 pb-3 mb-8 flex items-baseline justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#9e174f] mr-2">
                SECTION 01
              </span>
              <h2 className="font-display font-extrabold text-2xl text-slate-900 inline">
                Certifications
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              Verified Coursework & Skills Training
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="bg-white rounded-2xl border border-slate-200 p-7 shadow-xs hover:border-[#9e174f]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9e174f] bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                      {cert.badge}
                    </span>
                    <Award className="w-5 h-5 text-[#9e174f]" />
                  </div>

                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {cert.category}
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-slate-900 mb-3">
                    {cert.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Competencies Covered
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cert.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="text-xs font-medium bg-slate-50 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/80"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
            SECTION 2: ACHIEVEMENTS
        ============================================================ */}
        <section id="achievements-section" className="mb-16">
          <div className="border-b border-slate-200 pb-3 mb-8 flex items-baseline justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#9e174f] mr-2">
                SECTION 02
              </span>
              <h2 className="font-display font-extrabold text-2xl text-slate-900 inline">
                Achievements
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              Honors in Academics, Sports & Volunteering
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((item) => (
              <div
                key={item.title}
                className="bg-slate-50/70 rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:bg-white hover:border-[#9e174f]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 text-[#9e174f] flex items-center justify-center mb-4 shadow-xs">
                    <IconRenderer name={item.iconName} className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9e174f]">
                    {item.category}
                  </span>

                  <h3 className="font-display font-extrabold text-xl text-slate-900 mt-1 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {item.metric && (
                  <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Record / Scope</span>
                    <span className="text-xs font-extrabold text-[#9e174f] bg-rose-50 px-2.5 py-1 rounded border border-rose-100">
                      {item.metric}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Recruiter Note Banner */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-display font-bold text-slate-900 text-sm">
              Need proof of course completion or academic reports?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Available directly upon request during the interview or screening stage.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 rounded-lg bg-[#9e174f] text-white text-xs font-bold hover:bg-[#831843] transition-colors cursor-pointer shrink-0"
          >
            Contact for Credentials
          </button>
        </div>

      </div>
    </div>
  );
};
