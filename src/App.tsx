import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutProperty } from './components/AboutProperty';
import { OutdoorLife } from './components/OutdoorLife';
import { PetFriendly } from './components/PetFriendly';
import { ComfortAmenities } from './components/ComfortAmenities';
import { TerritoryGuide } from './components/TerritoryGuide';
import { AvailabilityCalendar } from './components/AvailabilityCalendar';
import { BookingInquiryForm } from './components/BookingInquiryForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GalleryLightbox } from './components/GalleryLightbox';
import { FaqModal } from './components/FaqModal';
import { PROPERTY_INFO } from './data/propertyData';
import { Calendar, MessageCircle } from 'lucide-react';

function MainContent() {
  const { lang, t } = useLanguage();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [faqModalOpen, setFaqModalOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState<{ checkIn: string; checkOut: string } | null>(null);

  const handleOpenBooking = () => {
    const el = document.getElementById('prenotazione');
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectPhoto = (index: number) => {
    setSelectedPhotoIndex(index);
    setGalleryOpen(true);
  };

  const handleSelectPeriod = (checkIn: string, checkOut: string) => {
    setSelectedDates({ checkIn, checkOut });
    handleOpenBooking();
  };

  const whatsappQuickUrl = `https://wa.me/${PROPERTY_INFO.phoneClean}?text=${encodeURIComponent(
    lang === 'it'
      ? 'Buongiorno, vorrei verificare disponibilità per Casa in Umbria.'
      : 'Hello, I would like to check availability for Casa in Umbria.'
  )}`;

  return (
    <div className="min-h-screen bg-[#F7F5EE] text-[#242823] flex flex-col selection:bg-[#293A30] selection:text-[#F7F5EE]">
      {/* Fixed Sticky Header */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenGallery={() => {
          setSelectedPhotoIndex(0);
          setGalleryOpen(true);
        }}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onOpenGallery={() => {
            setSelectedPhotoIndex(0);
            setGalleryOpen(true);
          }}
        />

        {/* Section 01 & 02: La Casa & Gli Spazi */}
        <AboutProperty
          onSelectPhoto={handleSelectPhoto}
          onOpenBooking={handleOpenBooking}
        />

        {/* Section 03: La Vita all'Aperto */}
        <OutdoorLife onSelectPhoto={handleSelectPhoto} />

        {/* Section 04: A Misura di Zampa (Pet-Friendly) */}
        <PetFriendly
          onSelectPhoto={handleSelectPhoto}
          onOpenBooking={handleOpenBooking}
        />

        {/* Section 05: Il Comfort & Dotazioni Reali */}
        <ComfortAmenities />

        {/* Section 06 & 07: Il Territorio & Trekking */}
        <TerritoryGuide onSelectPhoto={handleSelectPhoto} />

        {/* Section 08: Calendario & Disponibilità */}
        <AvailabilityCalendar
          onSelectPeriod={handleSelectPeriod}
          onOpenBooking={handleOpenBooking}
        />

        {/* Section 09: Il Processo di Prenotazione */}
        <BookingInquiryForm initialDates={selectedDates} />

        {/* Section 10: Contatti & Come Raggiungerci */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenGallery={() => {
          setSelectedPhotoIndex(0);
          setGalleryOpen(true);
        }}
        onOpenFaq={() => setFaqModalOpen(true)}
      />

      {/* Modals & Overlays */}
      <GalleryLightbox
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        initialIndex={selectedPhotoIndex}
      />

      <FaqModal
        isOpen={faqModalOpen}
        onClose={() => setFaqModalOpen(false)}
      />

      {/* Floating Mobile Bottom Action Bar (Fixed, unobtrusive, high accessibility) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-[#F7F5EE]/95 backdrop-blur-md border-t border-[#DFDBD1] p-3 flex items-center gap-2">
        <a
          href={whatsappQuickUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white py-2.5 px-3 rounded-xs text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-1.5 shadow-xs"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={handleOpenBooking}
          className="flex-1 bg-[#293A30] text-[#F7F5EE] py-2.5 px-3 rounded-xs text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-1.5 shadow-xs"
        >
          <Calendar className="w-4 h-4" />
          <span>{t('Disponibilità', 'Check Dates')}</span>
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
