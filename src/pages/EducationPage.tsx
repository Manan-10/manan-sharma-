import React from 'react';
import { PageId } from '../types';
import { EDUCATION_LIST, PERSONAL_INFO } from '../data/portfolioData';
import {
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  MapPin,
  CheckCircle2,
  FileDown,
  ArrowRight,
} from 'lucide-react';

interface EducationPageProps {
  onNavigate: (page: PageId) => void;
}

export const EducationPage: React.FC<EducationPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================
            PAGE HEADER
        ============================================================ */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9e174f] mb-2 block">
            ACADEMIC CREDENTIALS
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            My Education
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A consistent record of academic dedication, discipline, and active collegiate involvement from school through undergraduate commerce and computer studies.
          </p>
        </div>

        {/* ============================================================
            VERTICAL TIMELINE
        ============================================================ */}
        <div className="relative max-w-4xl mx-auto py-6">
          
          {/* Vertical spine line */}
          <div className="absolute left-4 sm:left-8 top-8 bottom-8 w-0.5 bg-slate-200" />

          <div className="space-y-12">
            {EDUCATION_LIST.map((edu, index) => {
              const stepNumber = `0${index + 1}`;
              return (
                <div
                  key={edu.id}
                  className="relative pl-12 sm:pl-20 group"
                >
                  {/* Timeline circular node */}
                  <div
                    className={`absolute left-0 sm:left-4 top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-mono font-bold transition-all ${
                      edu.isCurrent
                        ? 'bg-[#9e174f] border-rose-300 text-white shadow-md shadow-rose-200'
                        : 'bg-white border-slate-300 text-slate-600 group-hover:border-[#9e174f]'
                    }`}
                  >
                    {stepNumber}
                  </div>

                  {/* Main Card Content */}
                  <div
                    className={`rounded-2xl p-6 sm:p-8 transition-all ${
                      edu.isCurrent
                        ? 'bg-white border-2 border-[#9e174f] shadow-md relative'
                        : 'bg-white border border-slate-200/90 shadow-xs hover:border-slate-300'
                    }`}
                  >
                    {edu.isCurrent && (
                      <span className="absolute -top-3 right-6 bg-[#9e174f] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs">
                        Current Enrollment
                      </span>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#9e174f]">
                          {edu.period}
                        </span>
                        <h2 className="font-display font-extrabold text-2xl text-slate-900 mt-0.5">
                          {edu.degree}
                        </h2>
                      </div>

                      {/* Score Badge */}
                      <div className="flex items-center gap-2 bg-rose-50 border border-rose-100 rounded-lg px-3 py-1.5 w-fit">
                        <Award className="w-4 h-4 text-[#9e174f]" />
                        <div className="text-right">
                          <span className="text-[10px] font-bold text-slate-500 uppercase block">
                            {edu.scoreLabel}
                          </span>
                          <span className="text-base font-extrabold text-[#9e174f] leading-none">
                            {edu.scoreValue}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-4">
                      <GraduationCap className="w-4 h-4 text-[#9e174f]" />
                      <span>{edu.institution}</span>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {edu.description}
                    </p>

                    {edu.highlights && edu.highlights.length > 0 && (
                      <div className="pt-4 border-t border-slate-100 space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Key Highlights & Academic Focus
                        </span>
                        {edu.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#9e174f] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Academic Synthesis Banner */}
        <div className="mt-16 max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-display font-bold text-lg text-slate-900">
              Verified Academic Credentials
            </h3>
            <p className="text-xs text-slate-600 max-w-lg">
              Official semester mark sheets, junior college transcripts, and verification documents are available upon request for recruitment review.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-lg bg-[#9e174f] text-white text-xs font-bold hover:bg-[#831843] transition-colors cursor-pointer"
            >
              Request Mark Sheets
            </button>
            <button
              onClick={() => onNavigate('resume')}
              className="px-5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
            >
              View Resume
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
