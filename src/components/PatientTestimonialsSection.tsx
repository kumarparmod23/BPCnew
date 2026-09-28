import React, { useState } from 'react';
import { PATIENT_TESTIMONIALS } from '../data/testimonialsData';
import { Testimonial } from '../types';
import { triggerWhatsAppAppointment } from '../utils/whatsapp';

interface PatientTestimonialsSectionProps {
  onOpenAppointmentModal?: (doctor?: string, condition?: string) => void;
}

export const PatientTestimonialsSection: React.FC<PatientTestimonialsSectionProps> = ({
  onOpenAppointmentModal
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');

  const filteredTestimonials = activeFilter === 'all'
    ? PATIENT_TESTIMONIALS
    : PATIENT_TESTIMONIALS.filter(t => t.conditionCategory === activeFilter);

  // Carousel controls
  const totalSlides = filteredTestimonials.length;
  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalSlides);
  };
  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold text-[#003675] uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full">
            Patient Success Stories
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
            संतुष्ट मरीजों की जुबानी — दर्द से मुक्ति की सच्ची कहानियां
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            5,000+ से अधिक सफल क्षार सूत्र उपचार एवं 98% संतुष्टि दर के साथ बिजनौर पाइल्स सेंटर पर मरीजों का अटूट विश्वास।
          </p>
        </div>

        {/* Aggregate Trust Metrics Bar */}
        <div className="bg-[#f7f9fb] rounded-2xl border border-slate-200 p-4 sm:p-5 mb-10 shadow-2xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="pt-2 md:pt-0">
              <div className="flex items-center justify-center gap-1 text-amber-500 mb-1">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i} className="text-base sm:text-lg leading-none">★</span>
                ))}
              </div>
              <span className="font-heading font-extrabold text-xl text-slate-900 block tabular-nums">4.9 / 5.0</span>
              <span className="text-xs text-slate-500">मरीज संतुष्टि रेटिंग</span>
            </div>

            <div className="pt-2 md:pt-0">
              <span className="font-heading font-extrabold text-xl text-[#003675] block tabular-nums">5,000+</span>
              <span className="text-xs text-slate-500">सफल डे-केयर प्रोसीजर्स</span>
            </div>

            <div className="pt-2 md:pt-0">
              <span className="font-heading font-extrabold text-xl text-emerald-700 block tabular-nums">98%</span>
              <span className="text-xs text-slate-500">स्थायी सफलता दर</span>
            </div>

            <div className="pt-2 md:pt-0">
              <span className="font-heading font-extrabold text-xl text-rose-700 block tabular-nums">100%</span>
              <span className="text-xs text-slate-500">महिला गोपनीयता मानक</span>
            </div>
          </div>
        </div>

        {/* Interactive Filter Bar & View Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-xs">
            <button
              onClick={() => { setActiveFilter('all'); setCurrentPage(0); }}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-white text-[#003675] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              सभी अनुभव ({PATIENT_TESTIMONIALS.length})
            </button>
            <button
              onClick={() => { setActiveFilter('piles'); setCurrentPage(0); }}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                activeFilter === 'piles'
                  ? 'bg-white text-[#003675] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              बवासीर (Piles)
            </button>
            <button
              onClick={() => { setActiveFilter('fissure'); setCurrentPage(0); }}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                activeFilter === 'fissure'
                  ? 'bg-white text-[#003675] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              फिशर (Fissure)
            </button>
            <button
              onClick={() => { setActiveFilter('fistula'); setCurrentPage(0); }}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                activeFilter === 'fistula'
                  ? 'bg-white text-[#003675] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              भगन्दर (Fistula)
            </button>
            <button
              onClick={() => { setActiveFilter('sinus'); setCurrentPage(0); }}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                activeFilter === 'sinus'
                  ? 'bg-white text-[#003675] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              नाड़ी व्रण (Sinus)
            </button>
            <button
              onClick={() => { setActiveFilter('female'); setCurrentPage(0); }}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                activeFilter === 'female'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-rose-700 hover:bg-rose-50'
              }`}
            >
              महिला विंग (Female Care)
            </button>
          </div>

          {/* View mode toggle */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md flex items-center gap-1 transition-all cursor-pointer ${
                viewMode === 'grid' ? 'bg-white text-[#003675] shadow-xs font-semibold' : 'text-slate-500 hover:text-slate-800'
              }`}
              title="Grid View"
            >
              <span className="material-symbols-outlined text-base">grid_view</span>
              <span className="hidden sm:inline">ग्रिड</span>
            </button>
            <button
              onClick={() => setViewMode('carousel')}
              className={`p-1.5 rounded-md flex items-center gap-1 transition-all cursor-pointer ${
                viewMode === 'carousel' ? 'bg-white text-[#003675] shadow-xs font-semibold' : 'text-slate-500 hover:text-slate-800'
              }`}
              title="Carousel View"
            >
              <span className="material-symbols-outlined text-base">view_carousel</span>
              <span className="hidden sm:inline">स्लाइडर</span>
            </button>
          </div>
        </div>

        {/* Content Display: Grid or Carousel */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((t) => (
              <TestimonialCard 
                key={t.id} 
                testimonial={t} 
                onBookConsultation={() => {
                  if (onOpenAppointmentModal) {
                    onOpenAppointmentModal(t.doctorTreated, t.condition);
                  } else {
                    triggerWhatsAppAppointment({
                      doctorPreference: t.doctorTreated,
                      condition: t.condition,
                      source: `Patient Story: ${t.patientName}`
                    });
                  }
                }}
              />
            ))}
          </div>
        ) : (
          /* Carousel View */
          <div className="relative">
            <div className="max-w-2xl mx-auto">
              {filteredTestimonials[currentPage] && (
                <TestimonialCard 
                  testimonial={filteredTestimonials[currentPage]} 
                  featured={true}
                  onBookConsultation={() => {
                    const current = filteredTestimonials[currentPage];
                    if (onOpenAppointmentModal) {
                      onOpenAppointmentModal(current.doctorTreated, current.condition);
                    } else {
                      triggerWhatsAppAppointment({
                        doctorPreference: current.doctorTreated,
                        condition: current.condition,
                        source: `Patient Story: ${current.patientName}`
                      });
                    }
                  }}
                />
              )}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-slate-300 hover:border-[#003675] hover:bg-blue-50 text-slate-700 hover:text-[#003675] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous story"
              >
                <span className="material-symbols-outlined text-xl">arrow_back</span>
              </button>

              <div className="flex items-center gap-1.5">
                {filteredTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentPage === idx ? 'w-6 bg-[#003675]' : 'w-2 bg-slate-300'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-slate-300 hover:border-[#003675] hover:bg-blue-50 text-slate-700 hover:text-[#003675] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next story"
              >
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
          </div>
        )}

        {/* Bottom Reassurance & WhatsApp CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 via-indigo-50/50 to-emerald-50 rounded-2xl border border-blue-200/70 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900">
              क्या आप भी गुदा रोग के असहनीय दर्द या संकोच में जी रहे हैं?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              संकोच छोड़ें! आज ही हमारे अनुभवी सर्जनों से सीधा व गोपनीय परामर्श प्राप्त करें।
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {onOpenAppointmentModal ? (
              <button
                onClick={() => onOpenAppointmentModal()}
                className="bg-[#003675] hover:bg-blue-900 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-sm cursor-pointer"
              >
                अपॉइंटमेंट स्लॉट बुक करें
              </button>
            ) : null}

            <button
              onClick={() => triggerWhatsAppAppointment({ source: 'Testimonials Bottom CTA' })}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>WhatsApp पर परामर्श लें</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  featured?: boolean;
  onBookConsultation: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  featured = false,
  onBookConsultation
}) => {
  const isFemale = testimonial.conditionCategory === 'female';

  return (
    <div className={`bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group ${
      featured ? 'ring-2 ring-[#003675]/20 shadow-md' : ''
    }`}>
      {/* Top Header: Star rating & Quote mark */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-0.5 text-amber-500">
            {'★★★★★'.split('').map((s, i) => (
              <span key={i} className="text-sm leading-none">★</span>
            ))}
          </div>

          <span className="material-symbols-outlined text-slate-300 group-hover:text-blue-200 transition-colors text-2xl">
            format_quote
          </span>
        </div>

        {/* Condition treated & Recovery badge */}
        <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
          <span className="font-bold text-[#003675]">
            {testimonial.condition}
          </span>
          <span className="text-slate-300">·</span>
          <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
            {testimonial.recoveryTime}
          </span>
        </div>

        {/* Patient Story Quote */}
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-5 italic">
          "{testimonial.story}"
        </p>
      </div>

      {/* Patient Bio & Doctor Attribution */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          {/* Avatar initial circle */}
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-xs ${
            isFemale 
              ? 'bg-gradient-to-tr from-rose-500 to-pink-600' 
              : 'bg-gradient-to-tr from-[#003675] to-[#006398]'
          }`}>
            {testimonial.patientName.charAt(0)}
          </div>

          <div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-slate-900">{testimonial.patientName}</span>
              {testimonial.age && (
                <span className="text-slate-400 font-normal">({testimonial.age} वर्ष)</span>
              )}
              {testimonial.verified && (
                <span className="material-symbols-outlined text-emerald-600 text-sm" title="सत्यापित मरीज (Verified Patient)">
                  verified
                </span>
              )}
            </div>
            <div className="text-[11px] text-slate-500 flex items-center gap-1">
              <span>{testimonial.location}</span>
              <span>·</span>
              <span className="text-slate-400">{testimonial.date}</span>
            </div>
          </div>
        </div>

        {/* Action Link */}
        <button
          type="button"
          onClick={onBookConsultation}
          className="text-[#006398] hover:text-[#003675] font-semibold text-xs flex items-center gap-0.5 hover:underline cursor-pointer ml-2 shrink-0"
        >
          <span>सलाह लें</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};
