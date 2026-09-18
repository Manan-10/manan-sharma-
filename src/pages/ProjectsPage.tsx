import React from 'react';
import { PageId } from '../types';
import { PLANNED_PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import {
  Clock,
  Code,
  FileSpreadsheet,
  Briefcase,
  Globe,
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  ExternalLink,
  Github,
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================
            PAGE HEADER
        ============================================================ */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9e174f] mb-2 block">
            PRACTICAL APPLICATION ROADMAP
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Projects
          </h1>
          <p className="text-lg sm:text-xl font-medium text-[#9e174f] mb-3">
            Practical work I'm building to turn my skills into experience.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            I'm currently developing practical projects to apply my knowledge of Excel, data handling, business, digital marketing, and computer applications.
          </p>
        </div>

        {/* Informative Notice Badge */}
        <div className="mb-12 p-4 sm:p-5 rounded-xl bg-slate-100/90 border border-slate-200 flex items-start gap-3.5 text-xs text-slate-700">
          <Clock className="w-5 h-5 text-[#9e174f] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-slate-900 block text-sm">
              Current Project Status: In Active Development (Coming Soon)
            </span>
            <p>
              As a fresher and B.Com (Computers) student, I prioritize genuine representation over inflated claims. Below are the three targeted practical projects currently being developed, showing their tools, planned scope, and learning goals.
            </p>
          </div>
        </div>

        {/* ============================================================
            PLANNED PROJECT CARDS
        ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PLANNED_PROJECTS.map((proj) => (
            <div
              key={proj.number}
              className="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 shadow-xs flex flex-col justify-between hover:border-[#9e174f]/50 hover:shadow-md transition-all relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9e174f] to-rose-400" />

              <div>
                {/* Badge & Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {proj.number}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wide bg-amber-50 text-amber-800 border border-amber-200">
                    <Clock className="w-3 h-3 text-amber-600" />
                    <span>{proj.status}</span>
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#9e174f] uppercase tracking-wider mb-1">
                  {proj.category}
                </div>

                <h3 className="font-display font-extrabold text-xl text-slate-900 mb-3">
                  {proj.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Planned Objectives */}
                <div className="mb-6 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Planned Key Features
                  </span>
                  {proj.plannedObjectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9e174f] shrink-0 mt-1.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>

                {/* What I Will Learn */}
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/70 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Learning Focus
                  </span>
                  <p className="text-xs text-slate-700 font-medium">
                    {proj.learningFocus}
                  </p>
                </div>
              </div>

              {/* Tools & Future Links Footer */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Tools & Technologies
                </div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.plannedTools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Ready Placeholders for future links */}
                <div className="flex items-center justify-between text-xs text-slate-400 border-t border-dashed border-slate-200 pt-3">
                  <span className="flex items-center gap-1">
                    <Github className="w-3.5 h-3.5" />
                    <span>Repo: Under dev</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Demo: Pending release</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Roadmap & Next Steps Card */}
        <div className="mt-16 bg-slate-900 rounded-2xl text-white p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#9e174f]/25 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-300 mb-2 block">
              COLLABORATION & FEEDBACK
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              Have a problem dataset or internship project?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              I am actively seeking mentors and internship coordinators with real operational, data entry, Excel analysis, or digital marketing assignments where I can contribute while learning.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-2.5 rounded-lg bg-[#9e174f] hover:bg-[#831843] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                Discuss an Opportunity
              </button>
              <button
                onClick={() => onNavigate('skills')}
                className="px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all cursor-pointer"
              >
                Explore Current Skills
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
