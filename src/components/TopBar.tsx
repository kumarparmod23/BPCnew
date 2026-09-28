import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

interface TopBarProps {
  onOpenCampModal: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenCampModal }) => {
  return (
    <aside aria-label="Announcement" className="bg-[#003675] text-white text-xs sm:text-sm py-2 px-4 border-b border-blue-900/40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4 flex-wrap">
          <a 
            href={`tel:${CLINIC_INFO.phone}`} 
            className="flex items-center gap-1.5 hover:text-sky-200 font-semibold transition-colors"
          >
            <span className="material-symbols-outlined text-sm text-sky-200">call</span>
            <span>हेल्पलाइन: {CLINIC_INFO.displayPhone}</span>
          </a>
          <span className="hidden md:inline-block text-blue-300/60">•</span>
          <span className="hidden md:flex items-center gap-1 text-slate-200">
            <span className="material-symbols-outlined text-sm text-sky-200">location_on</span>
            <span>{CLINIC_INFO.address}</span>
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCampModal}
            className="inline-flex items-center gap-1.5 bg-[#b85d00] hover:bg-amber-600 text-white px-3 py-1 rounded-full font-bold text-xs tracking-wide uppercase transition-all shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm animate-pulse">event_available</span>
            <span>शनिवार निःशुल्क परामर्श शिविर</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
