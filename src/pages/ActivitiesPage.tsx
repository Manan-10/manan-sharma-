import React from 'react';
import { PageId } from '../types';
import { ACTIVITIES, WHAT_I_BRING, PERSONAL_INFO } from '../data/portfolioData';
import { IconRenderer } from '../components/IconRenderer';
import {
  Activity,
  Users,
  HeartHandshake,
  BookOpenCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface ActivitiesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ActivitiesPage: React.FC<ActivitiesPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================
            PAGE HEADER
        ============================================================ */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9e174f] mb-2 block">
            CHARACTER & LEADERSHIP
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Activities & Experiences Beyond the Classroom
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Developing interpersonal strengths, collaborative discipline, and social responsibility through competitive sports, college initiatives, and volunteer service.
          </p>
        </div>

        {/* ============================================================
            ACTIVITIES GRID
        ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {ACTIVITIES.map((act) => (
            <div
              key={act.id}
              className="bg-white rounded-2xl border border-slate-200 p-7 shadow-xs hover:border-[#9e174f]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-rose-50 text-[#9e174f] flex items-center justify-center shrink-0">
                    <IconRenderer name={act.iconName} className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-display font-extrabold text-xl text-slate-900">
                      {act.title}
                    </h2>
                    <span className="text-xs text-[#9e174f] font-semibold">
                      Extracurricular Engagement
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 mb-4">
                  <p className="text-sm font-semibold text-slate-800">
                    "{act.summary}"
                  </p>
                </div>

                {act.professionalFraming && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {act.professionalFraming}
                  </p>
                )}
              </div>

              {act.keyTakeaways && act.keyTakeaways.length > 0 && (
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Core Attributes Developed
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {act.keyTakeaways.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium bg-rose-50 text-[#9e174f] px-2.5 py-1 rounded-md border border-rose-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ============================================================
            SECTION 26: WHAT I BRING (COMPREHENSIVE)
        ============================================================ */}
        <section id="what-i-bring-section" className="py-12 border-t border-slate-200">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e174f] mb-1 block">
              WORK ETHIC & VALUE PROPOSITION
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              What I Bring
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Tangible interpersonal strengths that translate directly into internship dependability and team productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHAT_I_BRING.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-rose-50 text-[#9e174f] flex items-center justify-center mb-4">
                    <IconRenderer name={card.iconName} className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2 uppercase tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Card */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-display font-bold text-lg text-white">
              Ready to meet an enthusiastic, coachable fresher?
            </h3>
            <p className="text-xs text-slate-300 max-w-lg">
              I am eager to contribute my energy, discipline, and computer applications knowledge to your organization.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-2.5 rounded-lg bg-[#9e174f] text-white font-bold text-xs hover:bg-[#831843] transition-colors cursor-pointer shrink-0"
          >
            Get In Touch
          </button>
        </div>

      </div>
    </div>
  );
};
