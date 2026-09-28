import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { triggerWhatsAppAppointment, WhatsAppAppointmentParams } from '../utils/whatsapp';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctor?: string;
  initialCondition?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialDoctor,
  initialCondition
}) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [condition, setCondition] = useState(initialCondition || 'बवासीर (Piles / Hemorrhoids)');
  const [doctorPreference, setDoctorPreference] = useState(
    initialDoctor || 'Dr. Pramod Chaudhary (वरिष्ठ एनोरेक्टल सर्जन)'
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('सुबह 10:00 AM - 01:00 PM');
  const [notes, setNotes] = useState('');
  
  // Submission & Success state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    if (initialDoctor) {
      setDoctorPreference(initialDoctor);
    }
  }, [initialDoctor]);

  useEffect(() => {
    if (initialCondition) {
      setCondition(initialCondition);
    }
  }, [initialCondition]);

  // Reset state when modal is opened
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setIsSubmitting(false);
      setProgressWidth(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentParams: WhatsAppAppointmentParams = {
    patientName: patientName.trim() || undefined,
    phone: phone.trim() || undefined,
    condition,
    doctorPreference,
    preferredDate: preferredDate || undefined,
    preferredTime,
    notes: notes.trim() || undefined,
    source: 'Website Book Appointment Dialog'
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(true);

    // Animate progress bar smoothly
    let p = 0;
    const interval = setInterval(() => {
      p += 10;
      setProgressWidth(p);
      if (p >= 100) {
        clearInterval(interval);
      }
    }, 70);

    // Trigger WhatsApp deep-link after short animation dwell
    setTimeout(() => {
      triggerWhatsAppAppointment(currentParams);
      setIsSubmitting(false);
    }, 850);
  };

  const handleDirectInstantWhatsApp = () => {
    triggerWhatsAppAppointment({
      patientName: patientName.trim() || undefined,
      condition,
      doctorPreference,
      source: 'Quick Mobile Book Appointment'
    });
    onClose();
  };

  const handleManualOpenWhatsApp = () => {
    triggerWhatsAppAppointment(currentParams);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
      <div 
        className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 transition-all max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#003675] text-white p-4 sm:p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 shrink-0">
              <span className="material-symbols-outlined text-xl sm:text-2xl">
                {isSubmitted ? 'task_alt' : 'chat'}
              </span>
            </div>
            <div className="min-w-0">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-sky-200 font-bold block truncate">
                {isSubmitted ? 'Appointment Confirmed' : 'Direct WhatsApp Connect'}
              </span>
              <h3 className="font-heading font-extrabold text-sm sm:text-lg truncate">
                {isSubmitted ? 'अपॉइंटमेंट अनुरोध तैयार है' : 'अपॉइंटमेंट स्लॉट बुक करें'}
              </h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-2"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-grow">
          {!isSubmitted ? (
            <>
              {/* Quick Notice */}
              <div className="mb-4 bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-start gap-2 text-xs text-emerald-900">
                <span className="material-symbols-outlined text-emerald-600 text-base shrink-0 mt-0.5">verified</span>
                <div>
                  <span className="font-bold block">सीधा क्लिनिक मोबाइल व्हाट्सएप कनेक्ट:</span>
                  <span>सबमिट करते ही प्री-फिल्ड संदेश के साथ आधिकारिक क्लिनिक व्हाट्सएप (+91 7017790760) खुलेगा।</span>
                </div>
              </div>

              <form onSubmit={handleSendToWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    मरीज का नाम (Patient's Full Name) <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="उदा. राहुल शर्मा / सीमा देवी" 
                    required
                    className="w-full text-sm rounded-lg border border-slate-300 focus:border-[#003675] focus:ring-1 focus:ring-[#003675] py-2 px-3 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      मोबाइल नंबर (Phone) <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10 अंक का मोबाइल नंबर" 
                      required
                      className="w-full text-sm rounded-lg border border-slate-300 focus:border-[#003675] focus:ring-1 focus:ring-[#003675] py-2 px-3 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      समस्या (Condition)
                    </label>
                    <select 
                      value={condition}
                      onChange={(e) => setCondition(e.target.value)}
                      className="w-full text-sm rounded-lg border border-slate-300 focus:border-[#003675] focus:ring-1 focus:ring-[#003675] py-2 px-3 bg-white outline-none"
                    >
                      <option value="बवासीर (Piles / Hemorrhoids)">बवासीर (Piles)</option>
                      <option value="फिशर (Anal Fissure Pain)">फिशर (Anal Fissure)</option>
                      <option value="भगन्दर (Fistula Pus)">भगन्दर (Fistula-in-Ano)</option>
                      <option value="नाड़ी व्रण (Pilonidal Sinus)">नाड़ी व्रण (Sinus)</option>
                      <option value="शनिवार निःशुल्क कैम्प">शनिवार फ्री कैम्प</option>
                      <option value="अन्य गुदा रोग परामर्श">अन्य सामान्य परामर्श</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    डॉक्टर प्राथमिकता (Doctor Preference)
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <label 
                      className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-all ${
                        doctorPreference.includes('Pramod') || doctorPreference.includes('वरिष्ठ')
                          ? 'border-[#003675] bg-blue-50/50 text-[#003675] font-semibold' 
                          : 'border-slate-200 hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="modalDocChoice" 
                        value="Dr. Pramod Chaudhary (Senior Proctologist & Surgeon)"
                        checked={doctorPreference.includes('Pramod') || doctorPreference.includes('वरिष्ठ')}
                        onChange={(e) => setDoctorPreference(e.target.value)}
                        className="text-[#003675]"
                      />
                      <span>डॉ. प्रमोद चौधरी (वरिष्ठ सर्जन)</span>
                    </label>

                    <label 
                      className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-all ${
                        doctorPreference.includes('Shivani') || doctorPreference.includes('महिला')
                          ? 'border-rose-500 bg-rose-50/50 text-rose-800 font-semibold' 
                          : 'border-slate-200 hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="modalDocChoice" 
                        value="Dr. Shivani Chaudhary (Female Specialist)"
                        checked={doctorPreference.includes('Shivani') || doctorPreference.includes('महिला')}
                        onChange={(e) => setDoctorPreference(e.target.value)}
                        className="text-rose-600"
                      />
                      <span>डॉ. शिवानी चौधरी (महिला विंग)</span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      पसंदीदा दिनांक (Preferred Date)
                    </label>
                    <input 
                      type="date" 
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full text-sm rounded-lg border border-slate-300 focus:border-[#003675] focus:ring-1 focus:ring-[#003675] py-2 px-3 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      पसंदीदा समय (Time Slot)
                    </label>
                    <select 
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full text-sm rounded-lg border border-slate-300 focus:border-[#003675] focus:ring-1 focus:ring-[#003675] py-2 px-3 bg-white outline-none"
                    >
                      <option value="सुबह 10:00 AM - 01:00 PM">सुबह 10:00 AM - 01:00 PM</option>
                      <option value="दोपहर 01:00 PM - 05:00 PM">दोपहर 01:00 PM - 05:00 PM</option>
                      <option value="शाम 05:00 PM - 08:00 PM">शाम 05:00 PM - 08:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    कोई अतिरिक्त लक्षण या प्रश्न (वैकल्पिक)
                  </label>
                  <textarea 
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="उदा. कितने दिनों से समस्या है, रक्तस्राव या दर्द आदि..."
                    rows={2}
                    className="w-full text-xs rounded-lg border border-slate-300 focus:border-[#003675] focus:ring-1 focus:ring-[#003675] py-2 px-3 outline-none resize-none"
                  />
                </div>

                <div className="pt-2 space-y-2">
                  <button 
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-lg">chat</span>
                    <span>WhatsApp पर अपॉइंटमेंट भेजें (Connect via WhatsApp)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectInstantWhatsApp}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm text-slate-500">bolt</span>
                    <span>बिना फॉर्म भरे सीधे WhatsApp चैट खोलें</span>
                  </button>
                </div>
              </form>
            </>
          ) : (
            /* SUBTLE SUCCESS ANIMATION & CONFIRMATION VIEW */
            <div className="py-4 px-2 space-y-5 text-center animate-in fade-in duration-300">
              {/* Checkmark Animation Hero */}
              <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
                {/* Soft pulsing glow halo */}
                <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-30"></div>
                <div className="absolute inset-1.5 rounded-full bg-emerald-50 border-2 border-emerald-200"></div>

                {/* Animated Green Circle */}
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 animate-check-circle">
                  {/* Animated SVG Checkmark */}
                  <svg 
                    className="w-9 h-9" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3.2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" className="animate-checkmark-draw" />
                  </svg>
                </div>
              </div>

              {/* Status Headings */}
              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                  <span className="material-symbols-outlined text-xs">verified</span>
                  सफलतापूर्वक तैयार (Ready to Send)
                </span>
                <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
                  अपॉइंटमेंट संदेश तैयार है!
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                  क्लिनिक स्टाफ से सीधे जुड़ने के लिए आधिकारिक WhatsApp (+91 7017790760) पर संदेश प्रेषित किया जा रहा है...
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="max-w-xs mx-auto space-y-1">
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-emerald-600 h-full transition-all duration-150 ease-out"
                    style={{ width: `${progressWidth}%` }}
                  ></div>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">WhatsApp रीडायरेक्ट...</span>
              </div>

              {/* Patient Details Snapshot Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs space-y-2 shadow-2xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                  <span className="font-bold text-slate-800">मरीज विवरण सारांश</span>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-[10px]">
                    BPC Official
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-600">
                  <div>
                    <span className="text-slate-400 block text-[10px]">मरीज का नाम:</span>
                    <span className="font-semibold text-slate-800 text-xs">{patientName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">मोबाइल:</span>
                    <span className="font-semibold text-slate-800 text-xs">{phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">समस्या:</span>
                    <span className="font-medium text-slate-800">{condition}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">पसंदीदा समय:</span>
                    <span className="font-medium text-slate-800">{preferredTime}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-400 block text-[10px]">डॉक्टर:</span>
                    <span className="font-medium text-slate-800">{doctorPreference}</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={handleManualOpenWhatsApp}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>अभी सीधे WhatsApp खोलें</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-xl text-xs transition-colors cursor-pointer"
                >
                  विवरण बदलें
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-3 text-center border-t border-slate-100 text-[11px] text-slate-500">
          <span>हेल्पलाइन कॉल: </span>
          <a href={`tel:${CLINIC_INFO.phone}`} className="text-[#003675] font-bold hover:underline">
            {CLINIC_INFO.displayPhone}
          </a>
          <span> • स्थान: सामने श्री हॉस्पिटल, बिजनौर</span>
        </div>
      </div>
    </div>
  );
};
