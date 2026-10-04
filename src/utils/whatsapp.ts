import { CLINIC_INFO } from '../data/clinicData';

export interface WhatsAppAppointmentParams {
  patientName?: string;
  phone?: string;
  condition?: string;
  doctorPreference?: string;
  preferredDate?: string;
  preferredTime?: string;
  notes?: string;
  source?: string;
}

/**
 * Clean phone number for WhatsApp international standard
 * Bijnor Piles Centre official clinic WhatsApp: 917017790760
 */
export const CLINIC_WA_NUMBER = '917017790760';

/**
 * Builds a structured, respectful pre-filled Hindi & English message
 * optimized for clinic staff to immediately triage and schedule the patient.
 */
export const buildAppointmentWhatsAppMessage = (params: WhatsAppAppointmentParams): string => {
  const {
    patientName,
    phone,
    condition = 'बवासीर / फिशर / भगन्दर परामर्श',
    doctorPreference = 'उपलब्ध वरिष्ठ विशेषज्ञ',
    preferredDate,
    preferredTime,
    notes,
    source = 'Bijnor Piles Centre Website'
  } = params;

  let message = `🏥 *Bijnor Piles Centre - नया परामर्श अपॉइंटमेंट अनुरोध*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `नमस्ते डॉक्टर/क्लिनिक टीम, मुझे परामर्श हेतु अपॉइंटमेंट स्लॉट बुक करना है।\n\n`;

  if (patientName && patientName.trim()) {
    message += `👤 *मरीज का नाम (Patient):* ${patientName.trim()}\n`;
  } else {
    message += `👤 *मरीज का नाम:* [कृपया अपना नाम यहाँ लिखें]\n`;
  }

  if (phone && phone.trim()) {
    message += `📞 *संपर्क नंबर (Mobile):* ${phone.trim()}\n`;
  }

  message += `🩺 *समस्या/बीमारी (Condition):* ${condition}\n`;
  message += `👨‍⚕️ *डॉक्टर प्राथमिकता (Doctor):* ${doctorPreference}\n`;

  if (preferredDate) {
    message += `📅 *पसंदीदा दिनांक (Date):* ${preferredDate}\n`;
  }
  if (preferredTime) {
    message += `⏰ *समय स्लॉट (Preferred Time):* ${preferredTime}\n`;
  }
  if (notes && notes.trim()) {
    message += `📝 *लक्षण विवरण (Notes):* ${notes.trim()}\n`;
  }

  message += `\n📍 *क्लिनिक पता:* सामने श्री हॉस्पिटल, किरतपुर रोड, बिजनौर\n`;
  message += `🌐 *स्रोत:* ${source}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `कृपया आगामी उपलब्ध समय स्लॉट एवं परामर्श की पुष्टि करने की कृपा करें। धन्यवाद! 🙏`;

  return message;
};

/**
 * Generates direct WhatsApp click-to-chat URL
 */
export const getWhatsAppUrl = (params: WhatsAppAppointmentParams = {}): string => {
  const text = buildAppointmentWhatsAppMessage(params);
  // Using https://api.whatsapp.com/send which handles mobile intent dispatch cleanly
  return `https://api.whatsapp.com/send?phone=${CLINIC_WA_NUMBER}&text=${encodeURIComponent(text)}`;
};

/**
 * Utility to immediately trigger opening WhatsApp on mobile or desktop
 */
export const triggerWhatsAppAppointment = (params: WhatsAppAppointmentParams = {}): void => {
  // Track Meta Pixel Conversion Event
  if (typeof window !== 'undefined') {
    try {
      const win = window as unknown as { fbq?: (...args: unknown[]) => void };
      if (typeof win.fbq === 'function') {
        win.fbq('track', 'Lead', {
          content_name: params.condition || 'Consultation',
          content_category: params.doctorPreference || 'Specialist',
          source: params.source || 'Website'
        });
        win.fbq('track', 'Contact');
      }
    } catch {
      // Ignore tracking errors to never block user action
    }
    
    const url = getWhatsAppUrl(params);
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};
