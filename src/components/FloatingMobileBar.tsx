import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { triggerWhatsAppAppointment } from '../utils/whatsapp';

interface FloatingMobileBarProps {
  onOpenAppointmentModal?: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenAppointmentModal }) => {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 lg:hidden">
      <div className="bg-slate-900/95 backdrop-blur-md p-1.5 rounded-2xl shadow-xl border border-slate-700/80 flex items-center gap-2">
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="bg-white hover:bg-slate-100 text-[#003675] font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1 transition-colors shadow-sm shrink-0"
        >
          <span className="material-symbols-outlined text-base">call</span>
          <span>कॉल</span>
        </a>

        {onOpenAppointmentModal ? (
          <button
            type="button"
            onClick={onOpenAppointmentModal}
            className="flex-1 bg-[#003675] hover:bg-blue-900 text-white font-bold text-xs py-2.5 px-2 rounded-xl flex items-center justify-center gap-1 transition-colors shadow-sm cursor-pointer truncate"
          >
            <span className="material-symbols-outlined text-sm">calendar_month</span>
            <span className="truncate">बुक अपॉइंटमेंट</span>
          </button>
        ) : null}

        <button
          type="button"
          onClick={() => triggerWhatsAppAppointment({ source: 'Mobile Floating Bar' })}
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-2.5 rounded-xl flex items-center justify-center gap-1 transition-colors shadow-sm cursor-pointer truncate"
        >
          <span className="material-symbols-outlined text-base">chat</span>
          <span className="truncate">WhatsApp चैट</span>
        </button>
      </div>
    </div>
  );
};
