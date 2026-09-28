import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Location Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#003675] uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full">
                Visit Our Centre
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mt-2">
                क्लिनिक का पता एवं संपर्क
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                बिजनौर के मध्य में स्थित, आसानी से सुलभ स्थान एवं पार्किंग सुविधा के साथ।
              </p>
            </div>

            {/* Address Card */}
            <div className="bg-[#f7f9fb] p-5 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#003675] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-lg">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">पता (Address)</h4>
                  <p className="text-sm text-slate-700 mt-0.5 leading-snug">
                    {CLINIC_INFO.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{CLINIC_INFO.addressEnglish}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-lg">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">हेल्पलाइन एवं व्हाट्सएप</h4>
                  <a 
                    href={`tel:${CLINIC_INFO.phone}`} 
                    className="text-sm font-bold text-[#003675] hover:underline block"
                  >
                    {CLINIC_INFO.displayPhone}
                  </a>
                  <span className="text-xs text-slate-500">24x7 आपातकालीन व सामान्य पूछताछ</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-lg">schedule</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">क्लिनिक परामर्श समय</h4>
                  <p className="text-xs text-slate-700 mt-0.5">{CLINIC_INFO.hours.weekdays}</p>
                  <p className="text-xs font-bold text-amber-800">{CLINIC_INFO.hours.saturday}</p>
                  <p className="text-xs text-slate-500">{CLINIC_INFO.hours.sunday}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-lg">language</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">ऑफिशियल वेबसाइट</h4>
                  <a 
                    href={CLINIC_INFO.websiteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#006398] hover:underline"
                  >
                    {CLINIC_INFO.website}
                  </a>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href={CLINIC_INFO.mapsUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#003675] hover:bg-blue-900 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-sm transition-all flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base">directions</span>
                <span>गूगल मैप्स पर रूट देखें</span>
              </a>

              <a 
                href={`tel:${CLINIC_INFO.phone}`}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base">call</span>
                <span>डायरेक्ट कॉल</span>
              </a>
            </div>
          </div>

          {/* Live Google Maps Embed */}
          <div className="lg:col-span-7">
            <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-md">
              <iframe
                title="Bijnor Piles Centre Location Map"
                src={CLINIC_INFO.mapEmbedSrc}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="rounded-xl shadow-inner border border-slate-200 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
