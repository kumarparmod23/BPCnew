import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

interface SaturdayCampSectionProps {
  onOpenCampModal: () => void;
}

export const SaturdayCampSection: React.FC<SaturdayCampSectionProps> = ({ onOpenCampModal }) => {
  return (
    <section className="py-12 bg-white border-b border-slate-200" id="camp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-orange-700 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[260px]">campaign</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                <span className="material-symbols-outlined text-sm">celebration</span>
                <span>विशेष जनसेवा पहल (COMMUNITY CARE)</span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
                हर शनिवार निःशुल्क परामर्श शिविर (Free Consultation Camp)
              </h2>

              <p className="text-amber-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                प्रत्येक शनिवार को बिजनौर एवं निकटवर्ती क्षेत्रों के मरीजों के लिए ओपीडी कंसल्टेशन, प्राथमिक जांच एवं विशेषज्ञ मार्गदर्शन पूर्णतः निःशुल्क (₹0 रजिस्ट्रेशन फीस) उपलब्ध कराया जाता है।
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/15">
                  <span className="text-xs text-amber-200 block font-medium">शिविर समय</span>
                  <span className="font-bold text-sm">प्रातः 10:00 से रात्रि 08:00</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/15">
                  <span className="text-xs text-amber-200 block font-medium">परामर्श शुल्क</span>
                  <span className="font-bold text-sm text-amber-200">₹0 (बिल्कुल मुफ्त)</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/15">
                  <span className="text-xs text-amber-200 block font-medium">स्थान</span>
                  <span className="font-bold text-sm">बिजनौर पाइल्स सेंटर, किरतपुर रोड</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenCampModal}
                className="bg-white text-amber-800 hover:bg-amber-50 font-bold px-6 py-3.5 rounded-xl text-center text-sm shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined">confirmation_number</span>
                <span>शनिवार कैम्प टोकन बुक करें</span>
              </button>

              <a
                href={`https://wa.me/917017790760?text=${encodeURIComponent('नमस्ते Bijnor Piles Centre, मुझे शनिवार निःशुल्क परामर्श शिविर (फ्री कैम्प) हेतु टोकन बुक करना है।\nस्रोत: Website Saturday Camp')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-900/60 hover:bg-amber-900/80 text-white font-semibold px-4 py-2.5 rounded-xl text-center text-xs flex items-center justify-center gap-1.5 border border-white/20 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>सीधे व्हाट्सएप से टोकन मांगें</span>
              </a>

              <span className="text-center text-xs text-amber-200">
                *सीमित संख्या में टोकन उपलब्ध — अग्रिम बुकिंग मान्य
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
