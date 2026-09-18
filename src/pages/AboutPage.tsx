import React from 'react';
import { PageId } from '../types';
import {
  PERSONAL_INFO,
  HOW_I_DEVELOP,
  CURRENT_FOCUS_POINTS,
  WHAT_I_BRING,
} from '../data/portfolioData';
import { IconRenderer } from '../components/IconRenderer';
import {
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  FileDown,
  ArrowRight,
  CheckCircle,
  Briefcase,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================
            ABOUT HERO & HEADER
        ============================================================ */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9e174f] mb-2 block">
            BIOGRAPHY & PROFESSIONAL PROFILE
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            About Me
          </h1>
          <p className="text-lg sm:text-xl font-medium text-[#9e174f]">
            {PERSONAL_INFO.primaryTitle} | {PERSONAL_INFO.secondaryTitle}
          </p>
        </div>

        {/* ============================================================
            MAIN CONTENT & SIDEBAR CARD
        ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Main Narrative (8 cols) */}
          <div className="lg:col-span-8 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p className="font-medium text-slate-900">
              I am a B.Com (Computers) student at St. Joseph's Degree and PG College, Hyderabad, currently building a strong foundation in commerce, business, computer applications, and digital skills.
            </p>

            <p>
              My academic journey has introduced me to areas such as basic accounting, computer operations, MS Office, data handling, and digital marketing.
            </p>

            <p>
              Beyond academics, I have participated in basketball competitions and college/NSS activities, which have helped me develop teamwork, communication, leadership, discipline, and adaptability.
            </p>

            <p>
              I am currently focused on turning my academic knowledge into practical skills and gaining exposure to the professional environment through internships and entry-level opportunities.
            </p>

            {/* Quick Action Links */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#9e174f] text-white font-bold text-sm shadow-xs hover:bg-[#831843] transition-colors cursor-pointer"
              >
                <span>Connect with Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('resume')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-[#9e174f]" />
                <span>View My Resume</span>
              </button>
            </div>
          </div>

          {/* Quick Snapshot Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 space-y-5 sticky top-24">
              <div className="border-b border-slate-200/80 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Profile Snapshot
                </span>
                <h3 className="font-display font-extrabold text-xl text-slate-900 mt-1">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-[#9e174f] font-semibold mt-0.5">
                  B.Com (Computers) Student
                </p>
              </div>

              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-[#9e174f] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-800">Undergraduate College</div>
                    <div>St. Joseph's Degree and PG College</div>
                    <div className="text-slate-400">Batch of 2025 – 2028</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#9e174f] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-800">Location</div>
                    <div>Koti, Hyderabad, Telangana, India</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#9e174f] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-800">Email</div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#9e174f] hover:underline">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#9e174f] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-800">Phone</div>
                    <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="text-slate-700">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="w-4 h-4 text-[#9e174f] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-800">Target Opportunities</div>
                    <div>Internships & Entry-Level Roles</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="p-3 bg-rose-50/80 border border-rose-100 rounded-xl text-xs text-[#9e174f]">
                  <span className="font-bold block mb-0.5">Fresher Positioning:</span>
                  Dedicated to practical learning, reliable execution, and contributing directly to business tasks.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================
            SECTION: HOW I'M DEVELOPING
        ============================================================ */}
        <section id="how-im-developing" className="py-12 border-t border-slate-200">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e174f] mb-1 block">
              CONTINUOUS GROWTH
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How I'm Developing
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              A structured approach to transforming academic studies into workplace-ready capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_I_DEVELOP.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:border-slate-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-rose-50 text-[#9e174f] flex items-center justify-center mb-4">
                  <IconRenderer name={item.iconName} className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-[#9e174f] mb-3">
                  {item.subtitle}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
            SECTION: MY CURRENT FOCUS
        ============================================================ */}
        <section id="my-current-focus" className="py-12 border-t border-slate-200">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e174f] mb-1 block">
              NEAR-TERM OBJECTIVES
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              My Current Focus
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Concrete areas I am actively prioritizing to enhance my practical value as a student and fresher.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CURRENT_FOCUS_POINTS.map((focus, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#9e174f]/30 transition-all"
              >
                <div className="w-7 h-7 rounded-full bg-rose-100 text-[#9e174f] flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-slate-800">
                  {focus}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
            SECTION 26: WHAT I BRING
        ============================================================ */}
        <section id="what-i-bring" className="py-12 border-t border-slate-200">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e174f] mb-1 block">
              VALUE & ATTITUDE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              What I Bring
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Key professional behaviors and personal strengths I bring to any internship or team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHAT_I_BRING.map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-rose-50 text-[#9e174f] flex items-center justify-center mb-4">
                    <IconRenderer name={val.iconName} className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2 uppercase tracking-wide">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
