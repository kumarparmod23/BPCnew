import React, { useState } from 'react';
import { SYMPTOM_CHECKER_QUESTIONS } from '../data/clinicData';

interface SymptomCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCondition: (conditionName: string) => void;
}

export const SymptomCheckerModal: React.FC<SymptomCheckerModalProps> = ({
  isOpen,
  onClose,
  onSelectCondition
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    piles: 0,
    fissure: 0,
    fistula: 0,
    sinus: 0
  });
  const [result, setResult] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleOptionSelect = (target: string, weight: number) => {
    const newScores = {
      ...scores,
      [target]: (scores[target] || 0) + weight
    };
    setScores(newScores);

    if (currentStep < SYMPTOM_CHECKER_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Determine highest score
      let highestKey = 'piles';
      let highestVal = -1;
      for (const [k, v] of Object.entries(newScores)) {
        if (v > highestVal) {
          highestVal = v;
          highestKey = k;
        }
      }
      setResult(highestKey);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setScores({ piles: 0, fissure: 0, fistula: 0, sinus: 0 });
    setResult(null);
  };

  const getResultInfo = (resKey: string) => {
    switch (resKey) {
      case 'piles':
        return {
          title: 'बवासीर (Piles / Hemorrhoids)',
          desc: 'आपके लक्षणों (जैसे बिना दर्द का ताज़ा रक्तस्राव या मस्सा) के अनुसार यह बवासीर की प्रारंभिक या द्वितीय अवस्था का संकेत हो सकता है।',
          urgency: 'समय पर रबर बैंड लिगेशन अथवा क्षार कर्म से यह बिना ऑपरेशन ठीक हो सकती है।',
          badge: '98% क्षार सूत्र सफलता दर'
        };
      case 'fissure':
        return {
          title: 'फिशर (Anal Fissure)',
          desc: 'मलत्याग के दौरान व बाद में कई घंटों तक तीव्र जलन, कांच चुभने जैसा दर्द और रक्त की लकीर आना फिशर के प्रमुख लक्षण हैं।',
          urgency: 'विशेष आयुर्वेदिक क्षार लेपन व जात्यादि तेल से 24 घंटे में दर्द में भारी आराम मिलता है।',
          badge: '24 घंटे में तीव्र राहत'
        };
      case 'fistula':
        return {
          title: 'भगन्दर (Fistula-in-Ano)',
          desc: 'गुदा के निकट फोड़ा होना, लगातार मवाद व पानी का रिसाव होना भगन्दर का स्पष्ट संकेत है। इसे घरेलू नुस्खों से न टालें।',
          urgency: 'ICMR प्रमाणित क्षार सूत्र तकनीक ही इसका एकमात्र स्थायी व जड़ से समाधान है।',
          badge: 'दोबारा न होने की गारंटी'
        };
      case 'sinus':
      default:
        return {
          title: 'नाड़ी व्रण (Pilonidal Sinus)',
          desc: 'रीढ़ की हड्डी के अंतिम भाग (कूल्हे के जोड़) पर बालों के धंसने से होने वाला संक्रमण और मवाद का बनना नाड़ी व्रण की पहचान है।',
          urgency: 'मिनिमल डे-केयर क्षार सूत्र से बिना लंबे बेडरेस्ट के इसे ठीक किया जाता है।',
          badge: 'डे-केयर न्यूनतम चीरा पद्धति'
        };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#003675] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-2xl text-amber-300">stethoscope</span>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-sky-200 font-bold block">
                30-Second Self Check
              </span>
              <h3 className="font-heading font-extrabold text-base sm:text-lg">
                लक्षण जांच मार्गदर्शिका (Symptom Assessment)
              </h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {!result ? (
            <div>
              {/* Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>प्रश्न {currentStep + 1} / {SYMPTOM_CHECKER_QUESTIONS.length}</span>
                  <span>{Math.round(((currentStep + 1) / SYMPTOM_CHECKER_QUESTIONS.length) * 100)}% पूर्ण</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#006398] h-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / SYMPTOM_CHECKER_QUESTIONS.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <h4 className="font-heading font-bold text-slate-900 text-base mb-4">
                {SYMPTOM_CHECKER_QUESTIONS[currentStep].question}
              </h4>

              <div className="space-y-2.5">
                {SYMPTOM_CHECKER_QUESTIONS[currentStep].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionSelect(opt.target, opt.weight)}
                    className="w-full text-left p-3.5 rounded-xl border border-slate-200 hover:border-[#003675] hover:bg-blue-50/50 transition-all text-xs sm:text-sm text-slate-700 font-medium flex items-center justify-between group cursor-pointer"
                  >
                    <span>{opt.text}</span>
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-[#003675] text-base shrink-0 ml-2">
                      arrow_forward
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="space-y-4">
              {(() => {
                const info = getResultInfo(result);
                return (
                  <>
                    <div className="bg-blue-50 p-4 rounded-2xl border border-blue-200">
                      <span className="text-xs font-bold text-[#006398] uppercase tracking-wider block mb-1">
                        जांच परिणाम (Assessment Indication)
                      </span>
                      <h4 className="font-heading font-extrabold text-xl text-slate-900">
                        {info.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                        {info.desc}
                      </p>
                      <div className="mt-3 pt-3 border-t border-blue-200/60 flex items-center justify-between text-xs">
                        <span className="text-slate-600 font-medium">{info.urgency}</span>
                        <span className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">
                          {info.badge}
                        </span>
                      </div>
                    </div>

                    <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                      <span className="material-symbols-outlined text-sm text-amber-700 shrink-0 mt-0.5">info</span>
                      <span>
                        यह एक प्रारंभिक मार्गदर्शन है। सटीक निदान (Diagnosis) के लिए क्लिनिक में वरिष्ठ डॉक्टर से प्रत्यक्ष जांच आवश्यक है।
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                      <button
                        onClick={() => {
                          onClose();
                          onSelectCondition(info.title);
                        }}
                        className="flex-1 bg-[#003675] hover:bg-blue-900 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm text-center shadow-md transition-all cursor-pointer"
                      >
                        इस समस्या हेतु परामर्श बुक करें
                      </button>

                      <a
                        href={`https://wa.me/917017790760?text=${encodeURIComponent(`नमस्ते डॉक्टर, मैंने वेबसाइट पर लक्षण जांच की है और मुझे ${info.title} के लक्षण महसूस हो रहे हैं। कृपया परामर्श का समय दें।`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-base">chat</span>
                        <span>WhatsApp पर बात करें</span>
                      </a>
                    </div>

                    <div className="text-center pt-1">
                      <button
                        onClick={reset}
                        className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
                      >
                        पुनः लक्षण जांचें
                      </button>
                    </div>
                  </>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
