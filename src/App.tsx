import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SaturdayCampSection } from './components/SaturdayCampSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { FemaleCareSection } from './components/FemaleCareSection';
import { DoctorsSection } from './components/DoctorsSection';
import { PatientTestimonialsSection } from './components/PatientTestimonialsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CampTokenModal } from './components/CampTokenModal';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { SymptomCheckerModal } from './components/SymptomCheckerModal';
import { AppointmentModal } from './components/AppointmentModal';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { Treatment, Doctor, BookingFormData } from './types';
import { triggerWhatsAppAppointment } from './utils/whatsapp';

export default function App() {
  const [isCampModalOpen, setIsCampModalOpen] = useState(false);
  const [isSymptomCheckerOpen, setIsSymptomCheckerOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [modalDoctor, setModalDoctor] = useState<string>('');
  const [modalCondition, setModalCondition] = useState<string>('');
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  // When a user selects a condition or doctor from another section
  const handleOpenAppointmentWithContext = (doctor?: string, condition?: string) => {
    if (doctor) setModalDoctor(doctor);
    if (condition) setModalCondition(condition);
    setIsAppointmentModalOpen(true);
  };

  const handleSelectTreatmentForBooking = (treatmentName: string) => {
    handleOpenAppointmentWithContext(undefined, treatmentName);
  };

  const handleBookDoctor = (doc: Doctor) => {
    handleOpenAppointmentWithContext(doc.name);
  };

  const handleBookFemaleDoctor = () => {
    handleOpenAppointmentWithContext('Dr. Shivani Chaudhary (Female Specialist)');
  };

  const handleConditionFromSymptomChecker = (conditionName: string) => {
    handleOpenAppointmentWithContext(undefined, conditionName);
  };

  return (
    <div className="bg-[#f7f9fb] text-slate-800 antialiased min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900 pb-16 lg:pb-0">
      {/* Top Announcement Bar */}
      <TopBar onOpenCampModal={() => setIsCampModalOpen(true)} />

      {/* Main Header / Sticky Navbar */}
      <Navbar 
        onOpenSymptomChecker={() => setIsSymptomCheckerOpen(true)}
        onOpenCampModal={() => setIsCampModalOpen(true)}
        onOpenAppointmentModal={() => handleOpenAppointmentWithContext()}
      />

      {/* Main Body */}
      <main className="flex-grow">
        {/* Hero Section with Live Booking Card */}
        <HeroSection 
          onOpenSymptomChecker={() => setIsSymptomCheckerOpen(true)}
          onOpenAppointmentModal={(doc, cond) => handleOpenAppointmentWithContext(doc, cond)}
          onSuccessBooking={(data: BookingFormData) => {
            console.log('Booking initiated for:', data.patientName);
          }}
        />

        {/* Saturday Free Consultation Camp Spotlight */}
        <SaturdayCampSection onOpenCampModal={() => setIsCampModalOpen(true)} />

        {/* Core Diseases Treated & Kshar Sutra Benefits */}
        <TreatmentsSection onSelectTreatment={(t) => setSelectedTreatment(t)} />

        {/* Dedicated Female Care Wing */}
        <FemaleCareSection onBookFemaleDoctor={handleBookFemaleDoctor} />

        {/* Expert Doctors Section */}
        <DoctorsSection onSelectDoctor={handleBookDoctor} />

        {/* Patient Success Stories & Testimonials */}
        <PatientTestimonialsSection 
          onOpenAppointmentModal={(doc, cond) => handleOpenAppointmentWithContext(doc, cond)} 
        />

        {/* Clinic Location & Live Google Maps */}
        <LocationSection />

        {/* Patient FAQs */}
        <FaqSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer 
        onOpenCampModal={() => setIsCampModalOpen(true)}
        onOpenSymptomChecker={() => setIsSymptomCheckerOpen(true)}
      />

      {/* Dedicated Book Appointment Modal with direct WhatsApp integration */}
      <AppointmentModal 
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        initialDoctor={modalDoctor}
        initialCondition={modalCondition}
      />

      {/* Saturday Free Camp Token Generator Modal */}
      <CampTokenModal 
        isOpen={isCampModalOpen}
        onClose={() => setIsCampModalOpen(false)}
      />

      {/* Treatment In-Depth Detail Modal */}
      <TreatmentDetailModal 
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        onBookTreatment={handleSelectTreatmentForBooking}
      />

      {/* Symptom Self-Assessment Checker Modal */}
      <SymptomCheckerModal 
        isOpen={isSymptomCheckerOpen}
        onClose={() => setIsSymptomCheckerOpen(false)}
        onSelectCondition={handleConditionFromSymptomChecker}
      />

      {/* Mobile Sticky Action Bar */}
      <FloatingMobileBar 
        onOpenAppointmentModal={() => handleOpenAppointmentWithContext()}
      />
    </div>
  );
}
