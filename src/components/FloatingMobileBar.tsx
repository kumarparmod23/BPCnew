import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

export const FloatingMobileBar: React.FC = () => {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 lg:hidden">
      <div className="bg-slate-900/95 backdrop-blur-md p-1.5 rounded-2xl shadow-xl border border-slate-700/80 flex items-center gap-2">
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="flex-1 bg-white hover:bg-slate-100 text-[#003675] font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-base">call</span>
          <span>कॉल करें</span>
        </a>

        <a
          href={`https://wa.me/917017790760?text=${encodeURIComponent('नमस्ते Bijnor Piles Centre, मुझे परामर्श स्लॉट बुक करना है।')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-base">chat</span>
          <span>WhatsApp चैट</span>
        </a>
      </div>
    </div>
  );
};
