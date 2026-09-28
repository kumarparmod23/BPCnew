import React from 'react';
import { DOCTORS } from '../data/clinicData';
import { Doctor } from '../types';

interface DoctorsSectionProps {
  onSelectDoctor: (doctor: Doctor) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onSelectDoctor }) => {
  return (
    <section className="py-16 bg-[#f7f9fb] border-b border-slate-200" id="doctors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-[#003675] uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full">
            Our Specialist Doctors
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
            हमारे विशेषज्ञ चिकित्सक
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            उच्च अनुभवी एवं प्रामाणिक आयुर्वेदिक एनोरेक्टल सर्जन जो समर्पित हैं आपकी गरिमा व स्थायी स्वास्थ्य के प्रति।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {DOCTORS.map((doc) => {
            const isFemale = doc.id === 'dr-shivani';
            const badgeBg = isFemale ? 'bg-rose-700' : 'bg-[#003675]';
            const titleColor = isFemale ? 'text-rose-700' : 'text-[#003675]';
            const linkColor = isFemale ? 'text-rose-700' : 'text-[#003675]';

            return (
              <div 
                key={doc.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
              >
                <div className="h-80 bg-slate-100 overflow-hidden relative group">
                  <img 
                    src={doc.image} 
                    alt={`${doc.name} - ${doc.role}`}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <span className={`absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm ${badgeBg}`}>
                    {doc.experienceBadge}
                  </span>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900">
                      {doc.name}
                    </h3>
                    <p className={`font-semibold text-sm ${titleColor}`}>
                      {doc.qualifications}
                    </p>
                    <p className="text-xs text-slate-600 font-medium mt-0.5">
                      {doc.role}
                    </p>
                    <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                      {doc.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">
                      {doc.timings}
                    </span>
                    <button
                      onClick={() => onSelectDoctor(doc)}
                      className={`font-bold hover:underline flex items-center gap-1 cursor-pointer ${linkColor}`}
                    >
                      <span>अपॉइंटमेंट लें</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
