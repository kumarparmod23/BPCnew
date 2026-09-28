import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SaturdayCampSection } from './components/SaturdayCampSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { FemaleCareSection } from './components/FemaleCareSection';
import { DoctorsSection } from './components/DoctorsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CampTokenModal } from './components/CampTokenModal';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { SymptomCheckerModal } from './components/SymptomCheckerModal';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { Treatment, Doctor, BookingFormData } from './types';

export default function App() {
  const [isCampModalOpen, setIsCampModalOpen] = useState(false);
  const [isSymptomCheckerOpen, setIsSymptomCheckerOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  // When a user selects a condition or doctor from another section, scroll to form or trigger WhatsApp
  const handleSelectTreatmentForBooking = (treatmentName: string) => {
    // Scroll smoothly to home form and prefill if desired
    const el = document.getElementById('home');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    const diseaseInput = document.getElementById('pDisease') as HTMLSelectElement | null;
    if (diseaseInput) {
      // Find matching option or default
      for (let i = 0; i < diseaseInput.options.length; i++) {
        if (diseaseInput.options[i].text.includes(treatmentName) || diseaseInput.options[i].value.includes(treatmentName)) {
          diseaseInput.selectedIndex = i;
          break;
        }
      }
    }
  };

  const handleBookDoctor = (doc: Doctor) => {
    const isFemale = doc.id === 'dr-shivani';
    const el = document.getElementById('home');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    // Select radio button in form
    const radios = document.getElementsByName('docChoice') as NodeListOf<HTMLInputElement>;
    radios.forEach((r) => {
      if (isFemale && r.value.includes('Shivani')) {
        r.checked = true;
      } else if (!isFemale && r.value.includes('Pramod')) {
        r.checked = true;
      }
    });
  };

  const handleBookFemaleDoctor = () => {
    const el = document.getElementById('home');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    const radios = document.getElementsByName('docChoice') as NodeListOf<HTMLInputElement>;
    radios.forEach((r) => {
      if (r.value.includes('Shivani')) {
        r.checked = true;
      }
    });
  };

  const handleConditionFromSymptomChecker = (conditionName: string) => {
    handleSelectTreatmentForBooking(conditionName);
  };

  return (
    <div className="bg-[#f7f9fb] text-slate-800 antialiased min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900 pb-14 lg:pb-0">
      {/* Top Announcement Bar */}
      <TopBar onOpenCampModal={() => setIsCampModalOpen(true)} />

      {/* Main Header / Sticky Navbar */}
      <Navbar 
        onOpenSymptomChecker={() => setIsSymptomCheckerOpen(true)}
        onOpenCampModal={() => setIsCampModalOpen(true)}
      />

      {/* Main Body */}
      <main className="flex-grow">
        {/* Hero Section with Live Booking Card */}
        <HeroSection 
          onOpenSymptomChecker={() => setIsSymptomCheckerOpen(true)}
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
      <FloatingMobileBar />
    </div>
  );
}
