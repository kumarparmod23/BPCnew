import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { CampToken } from '../types';

interface CampTokenModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CampTokenModal: React.FC<CampTokenModalProps> = ({ isOpen, onClose }) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [condition, setCondition] = useState('बवासीर (Piles)');
  const [slot, setSlot] = useState('सुबह 10:00 AM - 01:00 PM (Morning Slot)');
  const [doctorPref, setDoctorPref] = useState('Dr. Pramod Chaudhary (Senior Surgeon)');
  const [generatedToken, setGeneratedToken] = useState<CampToken | null>(null);

  if (!isOpen) return null;

  // Calculate upcoming Saturday date
  const getNextSaturday = () => {
    const d = new Date();
    const day = d.getDay();
    const diff = (6 - day + 7) % 7;
    d.setDate(d.getDate() + (diff === 0 ? 0 : diff));
    return d.toLocaleDateString('hi-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) {
      alert('कृपया मरीज का नाम दर्ज करें।');
      return;
    }
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      alert('कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें।');
      return;
    }

    const randomNum = Math.floor(100 + Math.random() * 900);
    const newToken: CampToken = {
      tokenNumber: `BPC-SAT-${randomNum}`,
      patientName: patientName.trim(),
      phone: phone.trim(),
      date: getNextSaturday(),
      slot,
      condition,
      doctorPreference: doctorPref,
      generatedAt: new Date().toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' })
    };

    setGeneratedToken(newToken);
  };

  const handleSendToWhatsApp = () => {
    if (!generatedToken) return;
    const msg = 
      `🎫 *Bijnor Piles Centre - शनिवार निःशुल्क परामर्श शिविर टोकन*\n\n` +
      `नमस्ते डॉक्टर, मैंने आगामी शनिवार फ्री कैम्प हेतु टोकन जनरेट किया है:\n\n` +
      `🔢 *टोकन नंबर (Token No):* ${generatedToken.tokenNumber}\n` +
      `👤 *मरीज का नाम (Name):* ${generatedToken.patientName}\n` +
      `📞 *मोबाइल नंबर:* ${generatedToken.phone}\n` +
      `📅 *दिनांक (Date):* ${generatedToken.date}\n` +
      `⏰ *समय स्लॉट (Slot):* ${generatedToken.slot}\n` +
      `🩺 *समस्या (Condition):* ${generatedToken.condition}\n` +
      `👨‍⚕️ *डॉक्टर (Doctor):* ${generatedToken.doctorPreference}\n` +
      `💰 *परामर्श शुल्क:* ₹0 (बिल्कुल निशुल्क)\n\n` +
      `कृपया मेरा यह टोकन दर्ज करने की कृपा करें।`;

    window.open(`https://wa.me/917017790760?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">confirmation_number</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-amber-200 font-bold block">
                Free Consultation Pass
              </span>
              <h3 className="font-heading font-extrabold text-lg">
                शनिवार निःशुल्क कैम्प टोकन
              </h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {!generatedToken ? (
            <form onSubmit={handleGenerate} className="space-y-4">
              <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                <p className="font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-amber-700">info</span>
                  प्रत्येक शनिवार: ₹0 रजिस्ट्रेशन एवं विशेषज्ञ परामर्श
                </p>
                <p className="text-amber-800">
                  आगामी शिविर: <strong>{getNextSaturday()}</strong> (प्रातः 10:00 से रात्रि 08:00)
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  मरीज का नाम (Patient Name) *
                </label>
                <input 
                  type="text" 
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="अपना नाम लिखें" 
                  required
                  className="w-full text-sm rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 py-2 px-3 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  मोबाइल नंबर (Mobile No) *
                </label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10 अंकों का फोन नंबर" 
                  required
                  className="w-full text-sm rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 py-2 px-3 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    रोग/समस्या
                  </label>
                  <select 
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full text-sm rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 py-2 px-3 bg-white outline-none"
                  >
                    <option value="बवासीर (Piles)">बवासीर (Piles)</option>
                    <option value="फिशर (Anal Fissure)">फिशर (Fissure)</option>
                    <option value="भगन्दर (Fistula)">भगन्दर (Fistula)</option>
                    <option value="नाड़ी व्रण (Pilonidal Sinus)">नाड़ी व्रण (Sinus)</option>
                    <option value="अन्य गुदा समस्या">अन्य परामर्श</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    पसंदीदा समय स्लॉट
                  </label>
                  <select 
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    className="w-full text-sm rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 py-2 px-3 bg-white outline-none"
                  >
                    <option value="सुबह 10:00 AM - 01:00 PM">सुबह 10:00 - 01:00 PM</option>
                    <option value="दोपहर 01:00 PM - 04:00 PM">दोपहर 01:00 - 04:00 PM</option>
                    <option value="शाम 04:00 PM - 08:00 PM">शाम 04:00 - 08:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  डॉक्टर प्राथमिकता
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <label className={`p-2.5 rounded-lg border cursor-pointer flex items-center gap-1.5 ${doctorPref.includes('Pramod') ? 'border-amber-600 bg-amber-50 text-amber-900 font-semibold' : 'border-slate-200'}`}>
                    <input 
                      type="radio" 
                      name="campDoc" 
                      value="Dr. Pramod Chaudhary (Senior Surgeon)"
                      checked={doctorPref.includes('Pramod')}
                      onChange={(e) => setDoctorPref(e.target.value)}
                      className="text-amber-600"
                    />
                    <span>वरिष्ठ सर्जन</span>
                  </label>

                  <label className={`p-2.5 rounded-lg border cursor-pointer flex items-center gap-1.5 ${doctorPref.includes('Shivani') ? 'border-rose-600 bg-rose-50 text-rose-900 font-semibold' : 'border-slate-200'}`}>
                    <input 
                      type="radio" 
                      name="campDoc" 
                      value="Dr. Shivani Chaudhary (Female Specialist)"
                      checked={doctorPref.includes('Shivani')}
                      onChange={(e) => setDoctorPref(e.target.value)}
                      className="text-rose-600"
                    />
                    <span>महिला डॉक्टर</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span className="material-symbols-outlined text-base">check_circle</span>
                <span>निशुल्क टोकन जनरेट करें</span>
              </button>
            </form>
          ) : (
            /* Digital Token Pass Result */
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border-2 border-dashed border-amber-300 relative text-slate-800">
                <div className="flex items-center justify-between pb-3 border-b border-amber-200">
                  <div>
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-widest block">
                      OFFICIAL CAMP PASS
                    </span>
                    <h4 className="font-heading font-extrabold text-base text-slate-900">
                      Bijnor Piles Centre
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 block">टोकन संख्या</span>
                    <span className="font-mono font-black text-xl text-amber-700">
                      {generatedToken.tokenNumber}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 py-3 text-xs border-b border-amber-200">
                  <div>
                    <span className="text-slate-500 block">मरीज का नाम</span>
                    <span className="font-bold text-slate-900 text-sm">{generatedToken.patientName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">फोन नंबर</span>
                    <span className="font-bold text-slate-900">{generatedToken.phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">दिनांक (Date)</span>
                    <span className="font-semibold text-slate-800">{generatedToken.date}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">समय स्लॉट</span>
                    <span className="font-semibold text-slate-800">{generatedToken.slot}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">समस्या</span>
                    <span className="font-semibold text-slate-800">{generatedToken.condition}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">परामर्श शुल्क</span>
                    <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded text-[11px]">
                      ₹0 (निःशुल्क)
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-600 flex items-center justify-between">
                  <span>स्थान: {CLINIC_INFO.address}</span>
                  <span className="text-[10px] text-slate-400">Gen: {generatedToken.generatedAt}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-all"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>WhatsApp पर टोकन कन्फर्म करें</span>
                </button>

                <button
                  type="button"
                  onClick={() => setGeneratedToken(null)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors cursor-pointer"
                >
                  नया टोकन
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-500">
                कृपया क्लिनिक पहुँचते समय रिसेप्शन पर यह टोकन नंबर प्रदर्शित करें।
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
