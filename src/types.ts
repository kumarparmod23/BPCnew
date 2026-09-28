export interface Treatment {
  id: string;
  number: string;
  titleHindi: string;
  titleEnglish: string;
  subtitle: string;
  description: string;
  badge: string;
  accentColor: string;
  symptoms: string[];
  ayurvedicSolution: string;
  advantages: string[];
}

export interface Doctor {
  id: string;
  name: string;
  qualifications: string;
  role: string;
  experienceBadge: string;
  bio: string;
  image: string;
  timings: string;
  specialties: string[];
  waMessage: string;
}

export interface BookingFormData {
  patientName: string;
  phone: string;
  condition: string;
  doctorPreference: string;
  preferredDate?: string;
  preferredTime?: string;
  notes?: string;
}

export interface CampToken {
  tokenNumber: string;
  patientName: string;
  phone: string;
  date: string;
  slot: string;
  condition: string;
  doctorPreference: string;
  generatedAt: string;
}
