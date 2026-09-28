import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { BookingFormData } from '../types';

interface HeroSectionProps {
  onSuccessBooking?: (data: BookingFormData) => void;
  onOpenSymptomChecker?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSuccessBooking, onOpenSymptomChecker }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    patientName: '',
    phone: '',
    condition: 'बवासीर (Piles / Hemorrhoids)',
    doctorPreference: 'Dr. Pramod Chaudhary (Senior Proctologist & Surgeon)',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const cleanName = formData.patientName.trim();
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');

    if (!cleanName) {
      setErrorMessage('कृपया मरीज का पूरा नाम दर्ज करें।');
      return;
    }

    if (cleanPhone.length < 10) {
      setErrorMessage('कृपया एक वैध 10-अंकों का मोबाइल नंबर दर्ज करें।');
      return;
    }

    setIsSubmitting(true);
    setShowSuccessToast(true);

    const formattedMessage =
      `🏥 *Bijnor Piles Centre - नया अपॉइंटमेंट स्लॉट अनुरोध*\n\n` +
      `नमस्ते डॉक्टर, मुझे परामर्श हेतु अपॉइंटमेंट स्लॉट बुक करना है। मरीज का विवरण निम्नवत है:\n\n` +
      `👤 *मरीज का नाम (Patient Name):* ${cleanName}\n` +
      `📞 *मोबाइल नंबर (Mobile No):* ${formData.phone}\n` +
      `🩺 *समस्या (Condition):* ${formData.condition}\n` +
      `👨‍⚕️ *डॉक्टर प्राथमिकता (Doctor Preference):* ${formData.doctorPreference}\n` +
      `🌐 *स्रोत (Source):* Bijnor Piles Centre Website Slot Booking\n\n` +
      `कृपया स्लॉट एवं समय की पुष्टि करने की कृपा करें। धन्यवाद!`;

    const waUrl = `https://wa.me/917017790760?text=${encodeURIComponent(formattedMessage)}`;

    if (onSuccessBooking) {
      onSuccessBooking(formData);
    }

    setTimeout(() => {
      window.open(waUrl, '_blank');
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-[#f7f9fb] pt-8 pb-16 lg:py-20 border-b border-slate-200" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Hero Left Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#003675] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                बिना चीर-फाड़
              </span>
              <span className="bg-blue-100 text-[#003675] text-xs font-bold px-3 py-1 rounded-full">
                बिना ऑपरेशन
              </span>
              <span className="bg-slate-200 text-slate-800 text-xs font-bold px-3 py-1 rounded-full">
                बिना भर्ती (Day Care)
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">verified</span> 
                98% सफलता दर
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
                बवासीर, भगन्दर एवं फिशर का <br className="hidden sm:inline" />
                <span className="text-[#003675]">स्थायी एवं दर्द-रहित इलाज</span>
              </h1>
              <p className="text-base sm:text-lg text-[#006398] font-semibold">
                {CLINIC_INFO.motto}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-base leading-relaxed max-w-2xl">
              बिजनौर पाइल्स सेंटर में आधुनिक चिकित्सा जांच और पारंपरिक आयुर्वेदिक क्षार सूत्र सर्जरी द्वारा बवासीर (Piles), फिशर (Fissure), भगन्दर (Fistula) एवं नाड़ी व्रण (Pilonidal Sinus) का जड़ से सुरक्षित उपचार किया जाता है। अस्पताल में बिना रुके केवल कुछ घंटों में सामान्य दिनचर्या में वापसी।
            </p>

            {/* Key Metric Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm text-center hover:border-blue-300 transition-colors">
                <span className="material-symbols-outlined text-[#006398] text-2xl">healing</span>
                <p className="font-heading font-bold text-slate-900 text-sm mt-1">क्षार सूत्र पद्धति</p>
                <p className="text-[11px] text-slate-500 font-medium">दोबारा होने का खतरा नगण्य</p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm text-center hover:border-pink-300 transition-colors">
                <span className="material-symbols-outlined text-rose-600 text-2xl">female</span>
                <p className="font-heading font-bold text-slate-900 text-sm mt-1">महिला डॉक्टर</p>
                <p className="text-[11px] text-slate-500 font-medium">100% महिला गोपनीयता</p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm text-center hover:border-blue-300 transition-colors">
                <span className="material-symbols-outlined text-[#003675] text-2xl">schedule</span>
                <p className="font-heading font-bold text-slate-900 text-sm mt-1">1 घंटे में छुट्टी</p>
                <p className="text-[11px] text-slate-500 font-medium">कोई लंबा बेड रेस्ट नहीं</p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm text-center hover:border-emerald-300 transition-colors">
                <span className="material-symbols-outlined text-emerald-600 text-2xl">mood</span>
                <p className="font-heading font-bold text-slate-900 text-sm mt-1">दर्द-रहित प्रक्रिया</p>
                <p className="text-[11px] text-slate-500 font-medium">संतुष्ट मरीज अनुभव</p>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a 
                href={`https://wa.me/917017790760?text=${encodeURIComponent('नमस्ते, मुझे Bijnor Piles Centre में अपॉइंटमेंट/परामर्श के लिए स्लॉट बुक करना है।')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all active:scale-95 text-sm sm:text-base cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>व्हाट्सएप पर तुरंत समय लें</span>
              </a>

              <a 
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold px-5 py-3 rounded-xl shadow-sm transition-all active:scale-95 text-sm sm:text-base"
              >
                <span className="material-symbols-outlined text-lg text-[#003675]">call</span>
                <span>{CLINIC_INFO.displayPhone} पर कॉल करें</span>
              </a>

              {onOpenSymptomChecker && (
                <button
                  type="button"
                  onClick={onOpenSymptomChecker}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm text-amber-600">help</span>
                  <span>लक्षण समझ नहीं आ रहे? जाँचें</span>
                </button>
              )}
            </div>

            {/* Clinic Notice */}
            <p className="text-xs text-slate-500 flex items-center gap-1.5 pt-1">
              <span className="material-symbols-outlined text-sm text-slate-400">pin_drop</span>
              <span>स्थान: {CLINIC_INFO.address}</span>
            </p>
          </div>

          {/* Hero Right Column: Fast-Track Registration Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-7 relative">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#003675] via-[#006398] to-emerald-500"></div>
              
              <div className="flex items-center justify-between mb-5">
                <div>
                  <span className="text-xs font-bold text-[#006398] uppercase tracking-wider">Fast-Track Registration</span>
                  <h3 className="font-heading font-extrabold text-xl text-slate-900">परामर्श स्लॉट बुक करें</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#003675] flex items-center justify-center">
                  <span className="material-symbols-outlined">calendar_today</span>
                </div>
              </div>

              {errorMessage && (
                <div className="mb-4 p-2.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-lg flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-rose-600">error</span>
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Fast-Track Booking Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="pName">
                    मरीज का नाम (Patient's Full Name) <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="pName" 
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    placeholder="अपना नाम दर्ज करें" 
                    required 
                    className="w-full text-sm rounded-lg border border-slate-300 focus:border-[#003675] focus:ring-1 focus:ring-[#003675] py-2 px-3 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="pPhone">
                      मोबाइल नंबर (Phone) <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="pPhone" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10 अंक का फोन नंबर" 
                      required 
                      className="w-full text-sm rounded-lg border border-slate-300 focus:border-[#003675] focus:ring-1 focus:ring-[#003675] py-2 px-3 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="pDisease">
                      समस्या (Condition)
                    </label>
                    <select 
                      id="pDisease" 
                      value={formData.condition}
                      onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                      className="w-full text-sm rounded-lg border border-slate-300 focus:border-[#003675] focus:ring-1 focus:ring-[#003675] py-2 px-3 bg-white outline-none"
                    >
                      <option value="बवासीर (Piles / Hemorrhoids)">बवासीर (Piles)</option>
                      <option value="फिशर (Anal Fissure)">फिशर (Fissure)</option>
                      <option value="भगन्दर (Fistula-in-Ano)">भगन्दर (Fistula)</option>
                      <option value="नाड़ी व्रण (Pilonidal Sinus)">नाड़ी व्रण (Sinus)</option>
                      <option value="शनिवार निशुल्क कैम्प परामर्श">शनिवार फ्री कैम्प</option>
                      <option value="अन्य गुदा रोग परामर्श">अन्य समस्या (Other)</option>
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
                        formData.doctorPreference.includes('Pramod') 
                          ? 'border-[#003675] bg-blue-50/50 text-[#003675] font-semibold' 
                          : 'border-slate-200 hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="docChoice" 
                        value="Dr. Pramod Chaudhary (Senior Proctologist & Surgeon)"
                        checked={formData.doctorPreference.includes('Pramod')}
                        onChange={(e) => setFormData({ ...formData, doctorPreference: e.target.value })}
                        className="text-[#003675] focus:ring-[#003675]"
                      />
                      <span>वरिष्ठ सर्जन</span>
                    </label>

                    <label 
                      className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-all ${
                        formData.doctorPreference.includes('Shivani') 
                          ? 'border-rose-500 bg-rose-50/50 text-rose-800 font-semibold' 
                          : 'border-slate-200 hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="docChoice" 
                        value="Dr. Shivani Chaudhary (Female Specialist)"
                        checked={formData.doctorPreference.includes('Shivani')}
                        onChange={(e) => setFormData({ ...formData, doctorPreference: e.target.value })}
                        className="text-rose-600 focus:ring-rose-600"
                      />
                      <span>महिला डॉक्टर</span>
                    </label>
                  </div>
                </div>

                <div className="bg-blue-50/70 p-3 rounded-lg flex items-start gap-2 text-xs text-slate-600">
                  <span className="material-symbols-outlined text-[#006398] text-base shrink-0 mt-0.5">lock</span>
                  <span>आपकी जानकारी 100% सुरक्षित है। सबमिट करने पर भरा हुआ विवरण सीधे क्लिनिक के आधिकारिक WhatsApp पर प्रेषित होगा।</span>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#003675] hover:bg-blue-900 active:scale-[0.99] text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  <span className="material-symbols-outlined text-base">send</span>
                  <span>{isSubmitting ? 'व्हाट्सएप पर भेजा जा रहा है...' : 'अपॉइंटमेंट पुष्टि करें (Book Online)'}</span>
                </button>

                {showSuccessToast && (
                  <div className="text-xs font-medium text-center py-2 px-3 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center gap-1.5 animate-in fade-in">
                    <span className="material-symbols-outlined text-sm text-emerald-600">check_circle</span>
                    <span>विवरण तैयार है, WhatsApp पर स्लॉट अनुरोध भेजा जा रहा है...</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
