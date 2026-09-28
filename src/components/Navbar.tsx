import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { triggerWhatsAppAppointment } from '../utils/whatsapp';

interface NavbarProps {
  onOpenSymptomChecker: () => void;
  onOpenCampModal: () => void;
  onOpenAppointmentModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenSymptomChecker, 
  onOpenCampModal,
  onOpenAppointmentModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4 w-full">
        {/* Clinic Logo & Brand */}
        <a href="#home" className="flex items-center gap-2 sm:gap-3 min-w-0 shrink group">
          <img 
            src={CLINIC_INFO.images.logo} 
            alt="Bijnor Piles Centre Logo" 
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain transition-transform group-hover:scale-105 shrink-0"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="flex flex-col min-w-0">
            <span className="font-heading font-extrabold text-sm sm:text-lg lg:text-xl text-[#003675] leading-tight tracking-tight truncate">
              Bijnor Piles Centre
            </span>
            <span className="text-[10px] sm:text-xs text-[#006398] font-medium tracking-normal truncate hidden sm:block">
              {CLINIC_INFO.taglineHindi}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 font-medium text-xs xl:text-sm text-slate-700">
          <a href="#home" className="text-[#003675] font-semibold hover:text-[#006398] transition-colors">
            होम (Home)
          </a>
          <a href="#services" className="hover:text-[#003675] transition-colors">
            उपचार (Treatments)
          </a>
          <a href="#doctors" className="hover:text-[#003675] transition-colors">
            विशेषज्ञ डॉक्टर्स (Doctors)
          </a>
          <a href="#femalecare" className="hover:text-[#003675] transition-colors">
            महिला विंग (Female Care)
          </a>
          <a href="#camp" className="hover:text-[#003675] transition-colors">
            शनिवार कैम्प (Free Camp)
          </a>
          <a href="#testimonials" className="hover:text-[#003675] transition-colors">
            मरीज अनुभव (Reviews)
          </a>
          <button 
            onClick={onOpenSymptomChecker} 
            className="text-amber-800 hover:text-amber-900 font-medium transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base text-amber-600">stethoscope</span>
            <span>लक्षण जांच</span>
          </button>
          <a href="#location" className="hover:text-[#003675] transition-colors">
            स्थान (Location)
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <button
            onClick={onOpenAppointmentModal}
            className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs md:text-sm font-bold text-white bg-[#003675] hover:bg-blue-900 transition-colors cursor-pointer shadow-xs whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-base">calendar_month</span>
            <span>अपॉइंटमेंट स्लॉट</span>
          </button>

          <a 
            href={`tel:${CLINIC_INFO.phone}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-lg text-xs md:text-sm font-semibold text-[#003675] bg-slate-100 hover:bg-slate-200 transition-colors whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-base">call</span>
            <span>कॉल करें</span>
          </a>

          <button 
            onClick={() => triggerWhatsAppAppointment({ source: 'Navbar WhatsApp Button' })}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs md:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            <span className="hidden sm:inline">WhatsApp परामर्श</span>
            <span className="sm:hidden">WhatsApp</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-slate-700 hover:text-[#003675] focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointmentModal();
              }}
              className="py-2.5 px-3 rounded-lg bg-[#003675] text-white font-bold flex items-center justify-between text-left cursor-pointer"
            >
              <span>अपॉइंटमेंट स्लॉट बुक करें (Book Appointment)</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-blue-50 text-[#003675] font-semibold"
            >
              होम (Home)
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              उपचार (Treatments - बवासीर, फिशर, भगन्दर)
            </a>
            <a 
              href="#doctors" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              विशेषज्ञ डॉक्टर्स (Dr. Pramod & Dr. Shivani)
            </a>
            <a 
              href="#femalecare" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-pink-50 text-rose-800"
            >
              महिला विंग (100% Confidential Female Care)
            </a>
            <a 
              href="#camp" 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCampModal();
              }}
              className="py-2 px-3 rounded-lg bg-amber-50 text-amber-900 font-semibold flex items-center justify-between"
            >
              <span>शनिवार निःशुल्क परामर्श शिविर</span>
              <span className="text-xs bg-amber-200 text-amber-900 px-2 py-0.5 rounded font-bold">Free Token</span>
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span>मरीज अनुभव व सफलता कहानियां (Reviews)</span>
              <span className="text-amber-500 text-xs">★★★★★</span>
            </a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSymptomChecker();
              }}
              className="text-left py-2 px-3 rounded-lg hover:bg-blue-50 text-[#006398] font-semibold flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">stethoscope</span>
              <span>ऑनलाइन लक्षण जांच (Symptom Assessment)</span>
            </button>
            <a 
              href="#location" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              स्थान व रूट मैप (Location & Map)
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                triggerWhatsAppAppointment({ source: 'Mobile Menu WhatsApp Action' });
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>WhatsApp पर सीधे चैट शुरू करें</span>
            </button>
            <a 
              href={`tel:${CLINIC_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-[#003675] bg-blue-50 hover:bg-blue-100"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              <span>हेल्पलाइन पर कॉल करें: {CLINIC_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
