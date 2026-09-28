import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onOpenCampModal: () => void;
  onOpenSymptomChecker: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCampModal, onOpenSymptomChecker }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={CLINIC_INFO.images.footerLogo} 
                alt="Bijnor Piles Centre Logo" 
                className="h-12 w-12 object-contain bg-white rounded-lg p-1"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-heading font-extrabold text-lg text-white block">
                  Bijnor Piles Centre
                </span>
                <span className="text-xs text-blue-400">Ayurvedic Proctology Clinic</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              बिजनौर में प्रामाणिक एवं उन्नत आयुर्वेदिक क्षार सूत्र पद्धति द्वारा गुदा रोगों का स्थायी, सुरक्षित और गरिमापूर्ण समाधान। "Come with Pain, Go with Smile".
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              <span>100% Confidential Patient Care</span>
            </div>

            <div>
              <button
                type="button"
                onClick={onOpenSymptomChecker}
                className="text-xs text-amber-300 hover:text-amber-200 underline flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">health_and_safety</span>
                <span>ऑनलाइन लक्षण गाइड (Symptom Assessment)</span>
              </button>
            </div>
          </div>

          {/* Col 2: Treatments */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              प्रमुख उपचार
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">• बवासीर (Piles / Hemorrhoids)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">• फिशर (Anal Fissure Pain & Burning)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">• भगन्दर (Fistula Pus Discharge)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">• नाड़ी व्रण (Pilonidal Sinus)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">• प्रामाणिक क्षार सूत्र थेरेपी</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">• रबर बैंड लिगेशन प्रक्रिया</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Timings & Special Camps */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              समय एवं शिविर
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex justify-between">
                <span>सोमवार - शुक्रवार:</span>
                <span className="text-slate-200">10:00 AM - 08:00 PM</span>
              </li>
              <li className="flex justify-between bg-amber-900/40 text-amber-200 p-1.5 rounded">
                <span className="font-bold">शनिवार (फ्री कैम्प):</span>
                <span className="font-bold">10:00 AM - 08:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>रविवार:</span>
                <span className="text-slate-200">टेलीफोनिक परामर्श</span>
              </li>
            </ul>

            <div className="pt-2 flex flex-col gap-2">
              <a href="#femalecare" className="inline-flex items-center gap-1 text-xs text-pink-300 hover:text-pink-200 font-semibold">
                <span className="material-symbols-outlined text-sm">female</span>
                <span>महिला विंग: डॉ. शिवानी चौधरी</span>
              </a>

              <button
                onClick={onOpenCampModal}
                className="text-left text-xs text-amber-300 hover:text-amber-200 font-medium underline cursor-pointer"
              >
                शनिवार कैम्प टोकन जनरेट करें →
              </button>
            </div>
          </div>

          {/* Col 4: Contact & Directions */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              संपर्क व पता
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {CLINIC_INFO.address}
            </p>
            <div className="space-y-1 text-xs">
              <p className="text-white font-bold">
                हेल्पलाइन:{' '}
                <a href={`tel:${CLINIC_INFO.phone}`} className="text-blue-400 hover:underline">
                  {CLINIC_INFO.displayPhone}
                </a>
              </p>
              <p className="text-slate-400">
                वेबसाइट:{' '}
                <a href={CLINIC_INFO.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  {CLINIC_INFO.website}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <a 
                href={`https://wa.me/917017790760?text=${encodeURIComponent('Hello Bijnor Piles Centre, I need information regarding consultation.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>व्हाट्सएप पर संपर्क करें</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Medical Disclaimer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2025 Bijnor Piles Centre (BPC). All rights reserved. Advanced Anorectal & Ayurvedic Solutions.</p>
          <p className="max-w-xl text-center md:text-right">
            चिकित्सीय अस्वीकरण (Disclaimer): इस वेबसाइट पर दी गई जानकारी केवल जन-जागरूकता एवं परामर्श स्लॉट निर्धारण हेतु है। सटीक उपचार के लिए चिकित्सक से प्रत्यक्ष परीक्षण आवश्यक है।
          </p>
        </div>
      </div>
    </footer>
  );
};
