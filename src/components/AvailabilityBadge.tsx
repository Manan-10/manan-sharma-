import React from 'react';

interface AvailabilityBadgeProps {
  className?: string;
}

export const AvailabilityBadge: React.FC<AvailabilityBadgeProps> = ({ className = '' }) => {
  return (
    <div
      id="availability-badge"
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-rose-50 text-[#9e174f] border border-rose-200/80 shadow-xs ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9e174f]" />
      </span>
      <span>OPEN TO INTERNSHIP & ENTRY-LEVEL OPPORTUNITIES</span>
    </div>
  );
};
