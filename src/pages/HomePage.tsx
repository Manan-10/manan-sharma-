import React from 'react';
import { PageId } from '../types';
import {
  PERSONAL_INFO,
  QUICK_STATS,
  SKILL_CATEGORIES,
  EDUCATION_LIST,
  CERTIFICATIONS,
  ACTIVITIES,
  CAREER_INTERESTS,
} from '../data/portfolioData';
import { HeroVisual } from '../components/HeroVisual';
import { AvailabilityBadge } from '../components/AvailabilityBadge';
import { IconRenderer } from '../components/IconRenderer';
import {
  ArrowRight,
  FileDown,
  Mail,
  GraduationCap,
  Award,
  CheckCircle2,
  Briefcase,
  Compass,
  FileSpreadsheet,
  ChevronRight,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* ============================================================
          SECTION 10 & 11: HERO SECTION
      ============================================================ */}
      <section id="hero-section" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
        {/* Subtle decorative background gradient */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-slate-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Availability Badge */}
              <div>
                <AvailabilityBadge />
              </div>

              {/* Eyebrow & Name Heading */}
              <div>
                <span className="block text-xs font-bold tracking-widest text-[#9e174f] uppercase mb-1">
                  HELLO, I'M
                </span>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                  {PERSONAL_INFO.name}
                </h1>
              </div>

              {/* Main & Secondary Titles */}
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-slate-800">
                  {PERSONAL_INFO.primaryTitle}
                </div>
                <div className="text-base sm:text-lg font-medium text-[#9e174f]">
                  {PERSONAL_INFO.secondaryTitle}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                {PERSONAL_INFO.heroDescription}
              </p>

              {/* Action Buttons & Resume link */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  id="hero-explore-btn"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#9e174f] hover:bg-[#831843] active:bg-[#701036] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Explore My Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-contact-btn"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-800 font-semibold text-sm shadow-xs transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>Contact Me</span>
                </button>

                <button
                  id="hero-resume-link"
                  onClick={() => onNavigate('resume')}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9e174f] hover:text-[#701036] transition-colors py-2 px-1 cursor-pointer group ml-1"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume</span>
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>

              {/* College & Location Micro Highlight */}
              <div className="pt-3 border-t border-slate-200/60 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-[#9e174f]" />
                  <span>St. Joseph's Degree and PG College</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9e174f]" />
                  <span>Hyderabad, Telangana, India</span>
                </div>
              </div>

            </div>

            {/* Right Column: Sophisticated Abstract Visual (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <HeroVisual />
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 12: QUICK PROFILE INFORMATION STRIP
      ============================================================ */}
      <section id="quick-profile-strip" className="border-y border-slate-200/80 bg-white py-6 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            
            {/* Stat 1 */}
            <div className="flex flex-col border-l-2 border-[#9e174f] pl-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                B.COM (COMPUTERS)
              </span>
              <span className="text-base font-extrabold text-slate-900 mt-0.5">
                St. Joseph's College
              </span>
              <span className="text-xs text-slate-500 mt-0.5">
                Degree and PG College
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col border-l-2 border-[#9e174f] pl-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                1ST SEMESTER
              </span>
              <span className="text-xl font-extrabold text-[#9e174f] mt-0.5">
                9.0 / 10
              </span>
              <span className="text-xs text-slate-500 mt-0.5">
                Academic Performance
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col border-l-2 border-[#9e174f] pl-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                CURRENT DEGREE
              </span>
              <span className="text-base font-extrabold text-slate-900 mt-0.5">
                2025 – 2028
              </span>
              <span className="text-xs text-slate-500 mt-0.5">
                Undergraduate Batch
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col border-l-2 border-[#9e174f] pl-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                LOCATION
              </span>
              <span className="text-base font-extrabold text-slate-900 mt-0.5">
                Hyderabad
              </span>
              <span className="text-xs text-slate-500 mt-0.5">
                Koti, Telangana, India
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 13: ABOUT PREVIEW
      ============================================================ */}
      <section id="about-preview" className="py-16 md:py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#9e174f]" />

            <span className="text-xs font-bold uppercase tracking-widest text-[#9e174f] mb-2 block">
              ABOUT MANAN SHARMA
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-5">
              Building My Foundation in Business & Technology
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                I am currently pursuing B.Com (Computers) at St. Joseph's Degree and PG College, Hyderabad. My academic background combines commerce and computer applications, while my additional learning has introduced me to MS Excel, basic accounting, data handling, and digital marketing.
              </p>
              <p>
                Alongside academics, I have developed communication, leadership, teamwork, adaptability, and problem-solving skills through college activities, volunteering, and basketball.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">Commerce</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">MS Office & Excel</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">Digital Marketing</span>
              </div>

              <button
                id="about-preview-btn"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#9e174f] hover:text-[#701036] transition-colors cursor-pointer group"
              >
                <span>More About Me</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 14: SKILLS PREVIEW
      ============================================================ */}
      <section id="skills-preview" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9e174f] mb-1 block">
                COMPETENCIES
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Skills I'm Building
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                Combining business knowledge, computer skills, digital awareness, and professional abilities.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <button
                id="view-all-skills-btn"
                onClick={() => onNavigate('skills')}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#9e174f] hover:text-[#701036] transition-colors cursor-pointer group"
              >
                <span>View All Skills</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* 4 Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="bg-slate-50/80 rounded-xl border border-slate-200/80 p-6 flex flex-col justify-between hover:border-rose-200 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#9e174f] bg-rose-50 px-2 py-0.5 rounded border border-rose-200/60">
                      {cat.number}
                    </span>
                    <span className="text-slate-400 group-hover:text-[#9e174f] transition-colors">
                      <IconRenderer name={cat.skills[0]?.iconName || 'Sparkles'} className="w-5 h-5" />
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-slate-900 mb-2 uppercase tracking-wide">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill.name}
                        className="text-[11px] font-medium bg-white text-slate-700 px-2 py-1 rounded border border-slate-200"
                      >
                        {skill.name}
                      </span>
                    ))}
                    {cat.skills.length > 3 && (
                      <span className="text-[11px] font-semibold text-[#9e174f] px-1.5 py-1">
                        +{cat.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 15: EDUCATION PREVIEW
      ============================================================ */}
      <section id="education-preview" className="py-16 md:py-20 bg-slate-50/60 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9e174f] mb-1 block">
                ACADEMIC BACKGROUND
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Education
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Consistent academic record across school, junior college, and undergraduate studies.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <button
                id="view-education-btn"
                onClick={() => onNavigate('education')}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#9e174f] hover:text-[#701036] transition-colors cursor-pointer group"
              >
                <span>View Education</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* Education Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: B.Com (Highlighted) */}
            <div className="bg-white rounded-xl border-2 border-[#9e174f] p-6 shadow-sm relative flex flex-col justify-between">
              <div className="absolute -top-3 right-4 bg-[#9e174f] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                Current Degree
              </div>

              <div>
                <div className="text-xs font-bold text-[#9e174f] uppercase tracking-wider mb-1">
                  2025 – 2028
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  B.Com (Computers)
                </h3>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  St. Joseph's Degree and PG College, Hyderabad
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">1st Semester Score</span>
                <span className="text-base font-extrabold text-[#9e174f] bg-rose-50 px-2.5 py-1 rounded border border-rose-100">
                  9.0 / 10
                </span>
              </div>
            </div>

            {/* Card 2: Intermediate – IPE */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  2023 – 2025
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Intermediate – IPE
                </h3>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  St. Francis Xavier Junior College
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">IPE Score</span>
                <span className="text-base font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded">
                  643
                </span>
              </div>
            </div>

            {/* Card 3: SSC */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  2022 – 2023
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  SSC (10th Standard)
                </h3>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  St. Paul's High School
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Board GPA</span>
                <span className="text-base font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded">
                  8.0 / 10
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 16: CERTIFICATION PREVIEW
      ============================================================ */}
      <section id="certifications-preview" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9e174f] mb-1 block">
                SPECIALIZED TRAINING
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Certifications & Learning
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Practical certifications completed to reinforce computer applications and digital fundamentals.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <button
                id="view-certifications-btn"
                onClick={() => onNavigate('achievements')}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#9e174f] hover:text-[#701036] transition-colors cursor-pointer group"
              >
                <span>View Certifications</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="bg-slate-50 rounded-xl border border-slate-200/80 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9e174f] bg-rose-50 px-2.5 py-0.5 rounded border border-rose-100">
                      {cert.badge}
                    </span>
                    <Award className="w-5 h-5 text-[#9e174f]" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex flex-wrap gap-2">
                  {cert.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="text-xs font-medium bg-white text-slate-700 px-2.5 py-1 rounded border border-slate-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 17: ACTIVITIES PREVIEW
      ============================================================ */}
      <section id="activities-preview" className="py-16 md:py-20 bg-slate-50/60 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9e174f] mb-1 block">
                EXTRACURRICULAR & LEADERSHIP
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Beyond Academics
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Developing interpersonal and teamwork competencies through real sports, events, and community service.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <button
                id="view-activities-btn"
                onClick={() => onNavigate('activities')}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#9e174f] hover:text-[#701036] transition-colors cursor-pointer group"
              >
                <span>View All Activities</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Basketball */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-rose-50 text-[#9e174f] flex items-center justify-center mb-4 font-bold">
                <IconRenderer name="Activity" className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-900 uppercase tracking-wide mb-2">
                BASKETBALL
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Represented school and college in basketball competitions.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-[#9e174f]">
                Teamwork • Discipline • Focus
              </div>
            </div>

            {/* Card 2: College & NSS Volunteering */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-rose-50 text-[#9e174f] flex items-center justify-center mb-4 font-bold">
                <IconRenderer name="HeartHandshake" className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-900 uppercase tracking-wide mb-2">
                COLLEGE & NSS VOLUNTEERING
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Participated in college and NSS events.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-[#9e174f]">
                Civic Duty • Event Coordination • Empathy
              </div>
            </div>

            {/* Card 3: Continuous Learning */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-rose-50 text-[#9e174f] flex items-center justify-center mb-4 font-bold">
                <IconRenderer name="BookOpenCheck" className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-900 uppercase tracking-wide mb-2">
                CONTINUOUS LEARNING
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Continuously developing skills in Excel, digital marketing, accounting, computer applications, and professional communication.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-[#9e174f]">
                Proactive Upskilling • Practical Curiosity
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 18: CAREER INTERESTS
      ============================================================ */}
      <section id="career-interests" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e174f] mb-1 block">
              FUTURE HORIZONS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Where I Want to Grow
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              I am interested in opportunities where I can apply my business and computer knowledge while gaining practical industry experience.
            </p>
            <span className="inline-block mt-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              (Presented as Career Interests & Target Domains)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAREER_INTERESTS.map((interest) => (
              <div
                key={interest.title}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#9e174f]/40 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 text-[#9e174f] flex items-center justify-center group-hover:bg-[#9e174f] group-hover:text-white transition-colors">
                    <IconRenderer name={interest.iconName} className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    {interest.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 19: FINAL CALL TO ACTION
      ============================================================ */}
      <section id="home-cta" className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#9e174f]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase bg-rose-950/80 text-rose-300 border border-rose-800/80 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open to Internships & Fresher Roles</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Let's Connect
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            I'm currently looking for opportunities to learn, contribute, and gain practical industry experience.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              id="cta-contact-btn"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#9e174f] hover:bg-[#831843] active:bg-[#701036] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </button>

            <button
              id="cta-resume-btn"
              onClick={() => onNavigate('resume')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-rose-400" />
              <span>Download Resume</span>
            </button>
          </div>

          <div className="mt-8 text-xs text-slate-400">
            {PERSONAL_INFO.email} • {PERSONAL_INFO.phone} • Hyderabad, India
          </div>
        </div>
      </section>
    </div>
  );
};
