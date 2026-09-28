import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { triggerWhatsAppAppointment } from '../utils/whatsapp';

interface FemaleCareSectionProps {
  onBookFemaleDoctor: () => void;
}

export const FemaleCareSection: React.FC<FemaleCareSectionProps> = ({ onBookFemaleDoctor }) => {
  const handleDirectWhatsAppFemale = () => {
    triggerWhatsAppAppointment({
      doctorPreference: 'Dr. Shivani Chaudhary (Female Specialist - महिला विंग)',
      condition: 'महिला गुदा रोग परामर्श (बवासीर/फिशर/पेल्विक पेन)',
      source: 'Dedicated Female Care Wing Section'
    });
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200" id="femalecare">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-rose-50 via-pink-50/50 to-white rounded-3xl border border-rose-200/70 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Female Specialist Photo Card */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white">
                <img 
                  src={CLINIC_INFO.images.femaleDoctorFeature} 
                  alt="Dr. Shivani Chaudhary - Female Wing Specialist" 
                  className="w-full h-80 sm:h-96 object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-white text-center border-t border-slate-100">
                  <h4 className="font-heading font-bold text-base text-slate-900">Dr. Shivani Chaudhary</h4>
                  <p className="text-xs font-semibold text-rose-700">BAMS, PGCKS (Female Anorectal Specialist)</p>
                  <span className="inline-block mt-2 bg-rose-100 text-rose-800 text-[11px] font-bold px-3 py-0.5 rounded-full">
                    महिला विंग प्रमुख (Female Wing Incharge)
                  </span>
                </div>
              </div>
            </div>

            {/* Female Wing Details */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <span className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <span className="material-symbols-outlined text-xs">female</span> 
                100% संकोच मुक्त एवं सुरक्षित
              </span>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                महिलाओं का इलाज अनुभवी महिला डॉक्टर द्वारा
              </h2>

              <p className="text-rose-900 font-semibold text-sm sm:text-base">
                संकोच छोड़ें, स्वास्थ्य चुनें — Complete Privacy & Specialized Female Anorectal Care
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                महिलाएं अक्सर संकोच और झिझक के कारण बवासीर, फिशर या प्रसव (डिलीवरी) के बाद होने वाली गुदा समस्याओं को छिपाती हैं जिससे बीमारी गंभीर रूप ले लेती है। बिजनौर पाइल्स सेंटर में समर्पित <strong>डॉ. शिवानी चौधरी</strong> द्वारा पृथक जांच कक्ष एवं पूर्ण गोपनीयता के साथ महिला मरीजों का इलाज किया जाता है।
              </p>

              {/* Feature Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-rose-100">
                  <span className="material-symbols-outlined text-rose-600 text-lg shrink-0">verified_user</span>
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">अलग जांच व परामर्श कक्ष</span>
                    <span className="text-slate-500">जहां कोई अन्य व्यक्ति उपस्थित नहीं होता।</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-rose-100">
                  <span className="material-symbols-outlined text-rose-600 text-lg shrink-0">pregnant_woman</span>
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">प्रसव उपरांत पाइल्स उपचार</span>
                    <span className="text-slate-500">Post-pregnancy hemorrhoids safe management.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-rose-100">
                  <span className="material-symbols-outlined text-rose-600 text-lg shrink-0">support_agent</span>
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">महिला नर्सिंग स्टाफ</span>
                    <span className="text-slate-500">प्रत्येक प्रक्रिया में महिला अटेंडेंट मौजूद।</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-rose-100">
                  <span className="material-symbols-outlined text-rose-600 text-lg shrink-0">forum</span>
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">सीधी महिला परामर्श लाइन</span>
                    <span className="text-slate-500">कॉल या व्हाट्सएप पर निसंकोच बात करें।</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleDirectWhatsAppFemale}
                  className="bg-rose-700 hover:bg-rose-800 text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>महिला डॉक्टर से WhatsApp परामर्श बुक करें</span>
                </button>

                <button
                  type="button"
                  onClick={onBookFemaleDoctor}
                  className="bg-white hover:bg-rose-50 text-rose-800 border border-rose-200 font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
                >
                  स्लॉट फॉर्म भरें
                </button>

                <a 
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="text-xs text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm text-slate-400">call</span>
                  <span>हेल्पलाइन: {CLINIC_INFO.displayPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
