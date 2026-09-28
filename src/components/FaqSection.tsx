import React, { useState } from 'react';
import { CLINIC_FAQS } from '../data/clinicData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-[#f7f9fb] border-b border-slate-200" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-bold text-[#003675] uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full">
            Patient Support & FAQs
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
            मरीजों द्वारा पूछे जाने वाले सामान्य प्रश्न
          </h2>
          <p className="text-slate-600 text-sm">
            गुदा रोग एवं आयुर्वेदिक क्षार सूत्र उपचार से जुड़ी आवश्यक जानकारियां।
          </p>
        </div>

        <div className="space-y-3">
          {CLINIC_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-heading font-semibold text-slate-900 hover:text-[#003675] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base leading-snug">{faq.q}</span>
                  <span className={`material-symbols-outlined text-xl shrink-0 text-[#006398] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    keyboard_arrow_down
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
