import React, { useState } from 'react';
import { PageId } from '../types';
import {
  PERSONAL_INFO,
  EDUCATION_LIST,
  CERTIFICATIONS,
  ACHIEVEMENTS,
  SKILL_CATEGORIES,
  ACTIVITIES,
} from '../data/portfolioData';
import {
  Printer,
  FileDown,
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  ExternalLink,
  GraduationCap,
  Award,
  Sparkles,
} from 'lucide-react';

interface ResumePageProps {
  onNavigate: (page: PageId) => void;
}

export const ResumePage: React.FC<ResumePageProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyContact = () => {
    const text = `Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.primaryTitle}
College: ${PERSONAL_INFO.college}
Phone: ${PERSONAL_INFO.phone}
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadText = () => {
    const textResume = `============================================================
${PERSONAL_INFO.name}
${PERSONAL_INFO.primaryTitle} | ${PERSONAL_INFO.secondaryTitle}
============================================================

CONTACT:
Phone: ${PERSONAL_INFO.phone}
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}

PROFESSIONAL SUMMARY:
${PERSONAL_INFO.heroDescription}

EDUCATION:
1. B.Com (Computers) | St. Joseph's Degree and PG College, Hyderabad
   Period: 2025 – 2028 | Status: 1st Semester SGPA 9.0/10
2. Intermediate – IPE | St. Francis Xavier Junior College
   Period: 2023 – 2025 | Score: 643
3. SSC | St. Paul's High School
   Period: 2022 – 2023 | GPA: 8.0/10

CERTIFICATIONS:
- Digital Marketing Course: Completed a digital marketing course covering SEO basics, social media marketing, and online promotion strategies.
- MS Excel Certification: Completed MS Excel certification focused on data handling and productivity tools.

SKILLS:
- Computer & Productivity: Microsoft Excel, Microsoft Word, Microsoft PowerPoint, Computer Operations, Data Handling, Email Communication, Internet Research
- Business & Commerce: Basic Accounting Concepts, Business Understanding, Analytical Thinking
- Digital Marketing: SEO Basics, Social Media Marketing, Online Promotion Strategies
- Professional Skills: Communication, Problem Solving, Leadership, Teamwork, Adaptability, Understanding

ACHIEVEMENTS & ACTIVITIES:
- Academic: Achieved 9.0/10 in the first semester of B.Com (Computers).
- Basketball: Represented school and college in basketball competitions.
- Volunteering: Participated in college and NSS events.
============================================================`;

    const blob = new Blob([textResume], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Manan_Sharma_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full py-8 md:py-14 bg-slate-100/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* ============================================================
            ACTION TOOLBAR (Hidden in Print)
        ============================================================ */}
        <div className="no-print bg-white rounded-xl border border-slate-200 p-4 mb-8 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9e174f] block">
              Official Resume Viewer
            </span>
            <h1 className="font-display font-bold text-lg text-slate-900">
              {PERSONAL_INFO.name} — Curriculum Vitae
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#9e174f] hover:bg-[#831843] text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              id="resume-download-txt-btn"
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors cursor-pointer"
              title="Download ATS-friendly text version"
            >
              <FileDown className="w-4 h-4 text-slate-500" />
              <span>Download .TXT</span>
            </button>

            <button
              id="resume-copy-contact-btn"
              onClick={handleCopyContact}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
              <span>{copied ? 'Copied!' : 'Copy Contact'}</span>
            </button>
          </div>
        </div>

        {/* ============================================================
            THE RESUME CANVAS (Designed matching Burgundy Visual Theme)
        ============================================================ */}
        <article
          id="printable-resume"
          className="bg-white rounded-xl sm:rounded-2xl border border-slate-300/80 p-8 sm:p-12 shadow-sm text-slate-800 space-y-8 print:border-none print:shadow-none print:p-0 print:m-0"
        >
          {/* Header Block with Burgundy Accent Banner */}
          <div className="border-b-2 border-[#9e174f] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {PERSONAL_INFO.name}
                </h2>
                <div className="text-sm font-bold text-[#9e174f] mt-1">
                  {PERSONAL_INFO.primaryTitle} | {PERSONAL_INFO.secondaryTitle}
                </div>
              </div>
            </div>

            {/* Contact Strip */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#9e174f]" />
                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-slate-900">
                  {PERSONAL_INFO.phone}
                </a>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#9e174f]" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#9e174f]">
                  {PERSONAL_INFO.email}
                </a>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#9e174f]" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </div>
          </div>

          {/* Professional Objective / Summary */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#9e174f] border-b border-slate-200 pb-1 mb-2.5">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Motivated B.Com (Computers) student with a foundation in commerce, computer applications, MS Excel, basic accounting, and digital marketing. Actively building practical skills and seeking internship or entry-level opportunities to gain industry experience and contribute effectively.
            </p>
          </section>

          {/* Education Section */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#9e174f] border-b border-slate-200 pb-1 mb-3">
              Education
            </h3>
            <div className="space-y-4">
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                  <div>
                    <div className="font-bold text-slate-900 text-sm sm:text-base">
                      {edu.degree}
                    </div>
                    <div className="text-slate-600 font-medium">
                      {edu.institution}
                    </div>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <div className="font-semibold text-slate-700">
                      {edu.period}
                    </div>
                    <div className="text-[#9e174f] font-bold">
                      {edu.scoreLabel}: {edu.scoreValue}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#9e174f] border-b border-slate-200 pb-1 mb-3">
              Certifications & Training
            </h3>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.title} className="text-xs sm:text-sm">
                  <div className="font-bold text-slate-900">
                    • {cert.title}
                  </div>
                  <p className="text-slate-600 text-xs ml-3 mt-0.5">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Skills Section */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#9e174f] border-b border-slate-200 pb-1 mb-3">
              Skills & Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="space-y-1">
                  <div className="font-bold text-slate-800 uppercase text-[11px] tracking-wide text-[#9e174f]">
                    {cat.title}
                  </div>
                  <div className="text-slate-600 text-xs leading-relaxed">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements & Extracurricular Activities */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#9e174f] border-b border-slate-200 pb-1 mb-3">
              Achievements & Extracurricular Activities
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li>
                <span className="font-semibold text-slate-900">Academic Excellence:</span> Achieved 9.0/10 SGPA in the first semester of B.Com (Computers).
              </li>
              <li>
                <span className="font-semibold text-slate-900">Athletics & Team Sports:</span> Represented school and college in basketball competitions, fostering teamwork and discipline.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Volunteering & NSS:</span> Participated actively in college events and National Service Scheme (NSS) social initiatives.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Continuous Upskilling:</span> Regularly studying Excel workflows, digital marketing strategies, and accounting principles.
              </li>
            </ul>
          </section>

          {/* Target Interests */}
          <section className="border-t border-slate-100 pt-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#9e174f] mb-1.5">
              Career Interests (Fresher Target Roles)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Business Operations • Data & Excel Handling • Digital Marketing & SEO Support • Business Administration • Customer / Client Support • Computer & Commerce Functions.
            </p>
          </section>

        </article>

        {/* Quick Contact Footer under Resume (Hidden in Print) */}
        <div className="no-print mt-8 text-center">
          <p className="text-xs text-slate-500 mb-3">
            Interested in scheduling an interview or discussing an internship opening?
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#9e174f] hover:bg-[#831843] text-white font-bold text-xs transition-colors cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Manan Sharma Directly</span>
          </button>
        </div>

      </div>
    </div>
  );
};
