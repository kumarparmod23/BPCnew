import React from 'react';
import { TREATMENTS, CLINIC_INFO } from '../data/clinicData';
import { Treatment } from '../types';

interface TreatmentsSectionProps {
  onSelectTreatment: (treatment: Treatment) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onSelectTreatment }) => {
  return (
    <section className="py-16 bg-[#f7f9fb] border-b border-slate-200" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-[#003675] uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full">
            Specialized Treatments
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
            प्रमुख गुदा रोग एवं उनका स्थायी आयुर्वेदिक समाधान
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            बिना बड़े कट, बिना दर्द और बिना अस्पताल में भर्ती हुए क्षार सूत्र तकनीक द्वारा जड़ से निवारण।
          </p>
        </div>

        {/* 4 Disease Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TREATMENTS.map((treatment) => {
            const isBlue = treatment.id === 'piles';
            const isAmber = treatment.id === 'fissure';
            const isRose = treatment.id === 'fistula';
            const isPurple = treatment.id === 'sinus';

            const numBg = isBlue
              ? 'bg-blue-50 text-[#003675]'
              : isAmber
              ? 'bg-amber-50 text-amber-700'
              : isRose
              ? 'bg-rose-50 text-rose-700'
              : 'bg-purple-50 text-purple-700';

            const footerColor = isBlue
              ? 'text-[#003675]'
              : isAmber
              ? 'text-amber-700'
              : isRose
              ? 'text-rose-700'
              : 'text-purple-700';

            return (
              <div
                key={treatment.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg mb-4 ${numBg}`}>
                    {treatment.number}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-[#003675] transition-colors">
                    {treatment.titleHindi}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mb-3">
                    {treatment.subtitle}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {treatment.description}
                  </p>
                </div>

                <div className={`pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold ${footerColor}`}>
                  <span>{treatment.badge}</span>
                  <button
                    onClick={() => onSelectTreatment(treatment)}
                    className="hover:underline flex items-center gap-0.5 cursor-pointer font-bold"
                  >
                    सलाह लें →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Banner: Modern Kshar Sutra vs Traditional Blade Surgery */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Clinical Evidence
              </span>
              <h3 className="font-heading font-extrabold text-xl text-slate-900">
                पारंपरिक सर्जरी बनाम क्षार सूत्र तकनीक
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                पारंपरिक सर्जरी में बड़ा कट, अत्यधिक दर्द और 20-30% मामलों में दोबारा बीमारी होने का जोखिम रहता है। वहीं क्षार सूत्र में न कोई टांके, न लंबा बेड रेस्ट, और 98% स्थायी सफलता दर मिलती है।
              </p>
              <div className="pt-2">
                <a 
                  href={`tel:${CLINIC_INFO.phone}`} 
                  className="inline-flex items-center gap-1.5 text-[#003675] font-bold text-sm hover:underline"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  <span>डॉक्टर से उपचार प्रक्रिया समझें: {CLINIC_INFO.displayPhone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-red-50/70 p-4 rounded-xl border border-red-100">
                <p className="text-xs font-bold text-red-700 uppercase mb-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">cancel</span> 
                  पुरानी चीरा सर्जरी
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5">
                  <li>• बड़ा कट और गहरे टांके (Stitches)</li>
                  <li>• 4 से 7 दिनों तक अस्पताल में भर्ती</li>
                  <li>• हफ्तों तक असहनीय ड्रेसिंग का दर्द</li>
                  <li>• बीमारी दोबारा होने की काफी संभावना</li>
                </ul>
              </div>

              <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-100">
                <p className="text-xs font-bold text-emerald-800 uppercase mb-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">check_circle</span> 
                  बिजनौर पाइल्स सेंटर पद्धति
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5">
                  <li>• बिना चीर-फाड़, नो स्टिचेस</li>
                  <li>• 1 घंटे में डिस्चार्ज (Day-care)</li>
                  <li>• अगले दिन से सामान्य दिनचर्या संभव</li>
                  <li>• 98% स्थायी सफलता एवं न्यूनतम रिकरेंस</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
