import React from 'react';
import { motion } from 'motion/react';
import { FileSpreadsheet, TrendingUp, Award, Database, BarChart3, CheckCircle } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-4 select-none">
      {/* Subtle burgundy ambient glow backdrop */}
      <div 
        className="absolute inset-4 rounded-3xl opacity-25 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #9e174f 0%, #db2777 30%, transparent 70%)' }}
      />

      {/* Main abstract business & data interface frame */}
      <div className="relative w-full bg-white/95 border border-slate-200/90 rounded-2xl shadow-xl shadow-slate-200/50 p-5 md:p-6 backdrop-blur-md">
        
        {/* Top interface header bar */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-200 border border-rose-300 inline-block" />
            <span className="w-3 h-3 rounded-full bg-slate-200 inline-block" />
            <span className="w-3 h-3 rounded-full bg-slate-100 inline-block" />
            <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Workspace • Commerce & Tech
            </span>
          </div>
          <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-rose-50 text-[#9e174f] border border-rose-100">
            Active Study • B.Com
          </span>
        </div>

        {/* Abstract spreadsheet header with fx bar */}
        <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-2.5 mb-4">
          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-slate-500">
            <span className="font-bold text-[#9e174f] bg-white px-1.5 py-0.5 rounded border border-slate-200">fx</span>
            <span className="text-slate-700 font-sans text-xs">=SUM(COMMERCE_SKILLS + TECH_APPLICATIONS)</span>
          </div>
          
          {/* Spreadsheet-like grid preview */}
          <div className="grid grid-cols-4 gap-1 text-[11px] font-mono text-slate-600">
            <div className="bg-white p-1.5 rounded border border-slate-200/70 font-semibold text-slate-800 text-center">
              A1: Course
            </div>
            <div className="bg-white p-1.5 rounded border border-slate-200/70 font-semibold text-slate-800 text-center">
              B1: Semester
            </div>
            <div className="bg-white p-1.5 rounded border border-slate-200/70 font-semibold text-slate-800 text-center">
              C1: Focus
            </div>
            <div className="bg-rose-50/80 p-1.5 rounded border border-rose-200 font-semibold text-[#9e174f] text-center">
              D1: Metric
            </div>

            <div className="bg-white/80 p-1.5 rounded border border-slate-100 text-center text-slate-700">
              B.Com (Comp)
            </div>
            <div className="bg-white/80 p-1.5 rounded border border-slate-100 text-center text-slate-700">
              Sem 1 Done
            </div>
            <div className="bg-white/80 p-1.5 rounded border border-slate-100 text-center text-slate-700">
              Excel & Acct
            </div>
            <div className="bg-white p-1.5 rounded border border-rose-100 text-center font-bold text-[#9e174f]">
              9.0 / 10
            </div>
          </div>
        </div>

        {/* Data Growth Chart & Metrics Section */}
        <div className="grid grid-cols-5 gap-3 items-end bg-slate-900 rounded-xl p-4 text-white shadow-inner mb-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#9e174f]/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="col-span-3">
            <div className="flex items-center gap-1.5 text-xs text-rose-300 font-medium mb-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Skill Progression & Growth</span>
            </div>
            <div className="text-lg font-bold tracking-tight text-white flex items-baseline gap-2">
              Foundation Built
              <span className="text-xs font-normal text-slate-400">2025–2028</span>
            </div>

            {/* Geometric growth line SVG */}
            <div className="mt-2 h-14 w-full flex items-end">
              <svg className="w-full h-12 overflow-visible" viewBox="0 0 160 48" fill="none">
                <path
                  d="M 0 42 Q 40 38, 70 26 T 120 18 T 160 6"
                  stroke="#fb7185"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 0 42 Q 40 38, 70 26 T 120 18 T 160 6 L 160 48 L 0 48 Z"
                  fill="url(#burgundyGradient)"
                  opacity="0.25"
                />
                <defs>
                  <linearGradient id="burgundyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9e174f" />
                    <stop offset="100%" stopColor="#9e174f" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <circle cx="160" cy="6" r="4" fill="#f43f5e" stroke="#ffffff" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {/* Abstract Bar Chart Columns */}
          <div className="col-span-2 flex items-end justify-between h-20 gap-1.5 pt-2">
            <div className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full bg-slate-700/80 rounded-t h-8" />
              <span className="text-[10px] text-slate-400 font-mono">COM</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full bg-slate-700/80 rounded-t h-12" />
              <span className="text-[10px] text-slate-400 font-mono">OPS</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full bg-rose-600/90 rounded-t h-16 shadow-sm" />
              <span className="text-[10px] text-rose-300 font-mono font-bold">XLS</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full bg-[#be185d] rounded-t h-20 shadow-md" />
              <span className="text-[10px] text-rose-200 font-mono font-bold">MKT</span>
            </div>
          </div>
        </div>

        {/* Floating Badges Strip */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200/80">
            <div className="w-7 h-7 rounded-md bg-rose-100 flex items-center justify-center text-[#9e174f]">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-slate-800">Academic Score</div>
              <div className="text-[11px] text-slate-500">9.0 / 10 Sem 1</div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200/80">
            <div className="w-7 h-7 rounded-md bg-rose-100 flex items-center justify-center text-[#9e174f]">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-slate-800">MS Excel & Data</div>
              <div className="text-[11px] text-slate-500">Certified Course</div>
            </div>
          </div>
        </div>

      </div>

      {/* Floating interactive satellite chip: Hyderabad */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-3 -right-2 bg-white border border-slate-200 rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5 text-xs font-semibold text-slate-800"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Hyderabad, India</span>
      </motion.div>

      {/* Floating interactive satellite chip: Open for Internships */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-3 -left-2 bg-slate-900 border border-slate-800 text-white rounded-full px-3.5 py-1.5 shadow-xl flex items-center gap-2 text-xs font-medium"
      >
        <CheckCircle className="w-3.5 h-3.5 text-rose-400" />
        <span>Internship Ready</span>
      </motion.div>
    </div>
  );
};
