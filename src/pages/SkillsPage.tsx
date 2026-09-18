import React, { useState } from 'react';
import { PageId } from '../types';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { IconRenderer } from '../components/IconRenderer';
import { Check, Sparkles, Search, Filter } from 'lucide-react';

interface SkillsPageProps {
  onNavigate: (page: PageId) => void;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) {
      return null;
    }
    const filteredSkills = cat.skills.filter(
      (skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tools?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    if (filteredSkills.length === 0) return null;
    return {
      ...cat,
      skills: filteredSkills,
    };
  }).filter(Boolean);

  return (
    <div className="w-full py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================
            PAGE HEADER
        ============================================================ */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9e174f] mb-2 block">
            PRACTICAL & ACADEMIC TOOLSET
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Skills & Expertise
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            My current skills combine commerce knowledge, computer applications, digital marketing fundamentals, and professional abilities.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 text-xs font-medium text-slate-600 border border-slate-200">
            <span>Realistic competencies based on coursework, hands-on practice, and verified certifications.</span>
          </div>
        </div>

        {/* ============================================================
            FILTERING & SEARCH CONTROLS
        ============================================================ */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#9e174f] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Skills ({SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#9e174f] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.title} ({cat.skills.length})
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill, tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#9e174f]"
            />
          </div>
        </div>

        {/* ============================================================
            SKILLS GRID BY CATEGORY
        ============================================================ */}
        <div className="space-y-14">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-200 text-slate-500 text-sm">
              No skills match your search for "{searchQuery}". Try a different keyword or reset filters.
            </div>
          ) : (
            filteredCategories.map((cat) => {
              if (!cat) return null;
              return (
                <section key={cat.id} id={`cat-${cat.id}`} className="scroll-mt-24">
                  {/* Category Header */}
                  <div className="border-b border-slate-200 pb-3 mb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#9e174f] mr-2">
                        {cat.number}
                      </span>
                      <h2 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 inline">
                        {cat.title}
                      </h2>
                    </div>
                    <span className="text-xs text-slate-500">
                      {cat.subtitle}
                    </span>
                  </div>

                  {/* Skills Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-[#9e174f]/40 hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-lg bg-rose-50 text-[#9e174f] flex items-center justify-center shrink-0">
                              <IconRenderer name={skill.iconName} className="w-5 h-5" />
                            </div>
                            <h3 className="font-display font-bold text-base text-slate-900">
                              {skill.name}
                            </h3>
                          </div>

                          <p className="text-xs text-slate-600 leading-relaxed mb-4">
                            {skill.description}
                          </p>
                        </div>

                        {skill.tools && skill.tools.length > 0 && (
                          <div className="pt-3 border-t border-slate-100">
                            <div className="flex flex-wrap gap-1.5">
                              {skill.tools.map((t) => (
                                <span
                                  key={t}
                                  className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
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
                </section>
              );
            })
          )}
        </div>

        {/* Bottom Context Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-rose-50/70 border border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-display font-bold text-slate-900 text-sm">
              Looking for practical evidence of these skills?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Review my completed certifications, academic records, and upcoming practical projects.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onNavigate('projects')}
              className="px-4 py-2 rounded-lg bg-[#9e174f] text-white text-xs font-bold hover:bg-[#831843] transition-colors cursor-pointer"
            >
              View Upcoming Projects
            </button>
            <button
              onClick={() => onNavigate('achievements')}
              className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
            >
              View Certifications
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
