import React from 'react';
import { Treatment } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { triggerWhatsAppAppointment } from '../utils/whatsapp';

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookTreatment: (treatmentName: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
  onBookTreatment
}) => {
  if (!treatment) return null;

  const handleWhatsAppBooking = () => {
    triggerWhatsAppAppointment({
      condition: treatment.titleHindi,
      source: `Treatment Modal: ${treatment.titleEnglish}`
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#003675] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-bold text-lg text-sky-200">
              {treatment.number}
            </span>
            <div>
              <span className="text-[11px] text-sky-200 uppercase tracking-wider font-semibold block">
                {treatment.titleEnglish}
              </span>
              <h3 className="font-heading font-extrabold text-lg text-white">
                {treatment.titleHindi}
              </h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-5 text-slate-700 text-sm">
          {/* Main Description */}
          <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100">
            <span className="text-xs font-bold text-[#006398] block mb-1">
              रोग का स्वरूप ({treatment.subtitle})
            </span>
            <p className="leading-relaxed text-slate-800">
              {treatment.description}
            </p>
          </div>

          {/* Common Symptoms */}
          <div>
            <h4 className="font-heading font-bold text-slate-900 text-sm mb-2.5 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base text-rose-600">emergency</span>
              <span>प्रमुख लक्षण (Key Symptoms)</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {treatment.symptoms.map((symptom, i) => (
                <li key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="text-[#006398] font-bold mt-0.5">•</span>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ayurvedic Kshar Sutra Solution */}
          <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-100">
            <h4 className="font-heading font-bold text-emerald-900 text-sm mb-1.5 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base text-emerald-700">healing</span>
              <span>प्रामाणिक आयुर्वेदिक समाधान (Treatment Approach)</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {treatment.ayurvedicSolution}
            </p>
          </div>

          {/* Advantages */}
          <div>
            <h4 className="font-heading font-bold text-slate-900 text-sm mb-2">
              बिजनौर पाइल्स सेंटर में उपचार के मुख्य लाभ:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {treatment.advantages.map((adv, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-slate-50 rounded-md border border-slate-100">
                  <span className="material-symbols-outlined text-emerald-600 text-base">check</span>
                  <span className="font-medium text-slate-800">{adv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm text-[#003675]">call</span>
            <span>डॉक्टर से बात करें: {CLINIC_INFO.displayPhone}</span>
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onBookTreatment(treatment.titleHindi);
              }}
              className="bg-[#003675] hover:bg-blue-900 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-xl transition-all shadow-sm cursor-pointer"
            >
              परामर्श स्लॉट बुक करें
            </button>
            <button
              type="button"
              onClick={handleWhatsAppBooking}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-3.5 py-2 rounded-xl flex items-center gap-1 shadow-sm transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              <span>WhatsApp पर पूछें</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
