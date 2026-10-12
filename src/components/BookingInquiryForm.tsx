import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROPERTY_INFO } from '../data/propertyData';
import { BookingFormData } from '../types';
import { 
  Calendar as CalendarIcon, 
  Users, 
  Dog, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  Mail, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft,
  Clock,
  ShieldCheck
} from 'lucide-react';

interface BookingInquiryFormProps {
  initialDates?: { checkIn: string; checkOut: string } | null;
}

export const BookingInquiryForm: React.FC<BookingInquiryFormProps> = ({ initialDates }) => {
  const { lang, t } = useLanguage();
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [requestRefCode, setRequestRefCode] = useState('');

  // Form State
  const [formData, setFormData] = useState<BookingFormData>({
    checkIn: initialDates?.checkIn || '2026-11-09',
    checkOut: initialDates?.checkOut || '2026-11-16',
    guests: 2,
    pets: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    hasSpecialPetNeeds: false
  });

  // Errors state
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialDates?.checkIn && initialDates?.checkOut) {
      setFormData(prev => ({
        ...prev,
        checkIn: initialDates.checkIn,
        checkOut: initialDates.checkOut
      }));
    }
  }, [initialDates]);

  // Calculate nights
  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const nights = calculateNights();

  // Validate Step 1
  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.checkIn) newErrors.checkIn = t('Seleziona la data di arrivo', 'Select check-in date');
    if (!formData.checkOut) newErrors.checkOut = t('Seleziona la data di partenza', 'Select check-out date');
    if (formData.checkIn && formData.checkOut && new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      newErrors.checkOut = t('La data di partenza deve essere successiva all arrivo', 'Check-out must be after check-in');
    }
    if (formData.guests < 1 || formData.guests > 4) {
      newErrors.guests = t('Massimo 4 ospiti come da capienza dell alloggio', 'Maximum 4 guests capacity');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate Step 2
  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = t('Inserisci il nome', 'First name is required');
    if (!formData.lastName.trim()) newErrors.lastName = t('Inserisci il cognome', 'Last name is required');
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = t('Inserisci un indirizzo email valido', 'Valid email address required');
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t('Inserisci un recapito telefonico', 'Phone number is required');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (validateStep1()) setCurrentStep(2);
    } else if (currentStep === 2) {
      if (validateStep2()) setCurrentStep(3);
    }
  };

  const handleSubmitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate real local transmission / persist
    await new Promise(res => setTimeout(res, 900));
    
    const randomCode = 'UMB-' + Math.floor(100000 + Math.random() * 900000);
    setRequestRefCode(randomCode);
    setIsSubmitting(false);
    setSubmissionSuccess(true);
    setCurrentStep(4);
  };

  // Generate WhatsApp message string pre-filled
  const whatsappPreFillMessage = encodeURIComponent(
    lang === 'it'
      ? `Buongiorno! Vorrei richiedere disponibilità per Casa in Umbria (Frazione Scopoli).
Date richieste: dal ${formData.checkIn} al ${formData.checkOut} (${nights} notti).
Ospiti: ${formData.guests} persone.
Animali: ${formData.pets} ${formData.pets === 1 ? 'animale' : 'animali'}.
Nome: ${formData.firstName} ${formData.lastName}.
Note: ${formData.message || 'Nessuna nota aggiuntiva'}.`
      : `Hello! I would like to inquire about availability for Casa in Umbria (Scopoli).
Requested dates: from ${formData.checkIn} to ${formData.checkOut} (${nights} nights).
Guests: ${formData.guests}.
Pets: ${formData.pets}.
Name: ${formData.firstName} ${formData.lastName}.
Notes: ${formData.message || 'No additional notes'}.`
  );

  const whatsappUrl = `https://wa.me/${PROPERTY_INFO.phoneClean}?text=${whatsappPreFillMessage}`;

  return (
    <section id="prenotazione" className="py-20 sm:py-28 bg-[#FAF8F2] border-b border-[#DFDBD1]/60 text-[#242823]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-[#687258] text-xs uppercase tracking-[0.22em] font-medium mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>{t('SEMPLICE, DIRETTO, PERSONALE', 'SIMPLE, DIRECT, PERSONAL')}</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-[#242823] mb-4">
            {t('LA TUA PROSSIMA PAUSA COMINCIA QUI.', 'YOUR NEXT RESPITE BEGINS HERE.')}
          </h2>

          <p className="text-sm sm:text-base text-[#4E544C] font-light leading-relaxed">
            {t(
              "Compila il modulo per verificare la disponibilità delle tue date preferite direttamente con il proprietario, senza commissioni o sovrapprezzi.",
              "Fill out the inquiry form to check availability for your dates directly with the host, completely free of commissions or booking markups."
            )}
          </p>
        </div>

        {/* Multi-Step Indicator */}
        <div className="mb-10 max-w-xl mx-auto">
          <div className="flex items-center justify-between text-xs font-medium text-[#4E544C]">
            <div className={`flex items-center space-x-2 ${currentStep >= 1 ? 'text-[#293A30] font-semibold' : 'opacity-60'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${currentStep >= 1 ? 'bg-[#293A30] text-white' : 'bg-[#DFDBD1]'}`}>1</span>
              <span>{t('Date & Ospiti', 'Dates & Guests')}</span>
            </div>
            <div className="w-12 h-px bg-[#DFDBD1]" />
            <div className={`flex items-center space-x-2 ${currentStep >= 2 ? 'text-[#293A30] font-semibold' : 'opacity-60'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${currentStep >= 2 ? 'bg-[#293A30] text-white' : 'bg-[#DFDBD1]'}`}>2</span>
              <span>{t('Dati Contatto', 'Contact Info')}</span>
            </div>
            <div className="w-12 h-px bg-[#DFDBD1]" />
            <div className={`flex items-center space-x-2 ${currentStep >= 3 ? 'text-[#293A30] font-semibold' : 'opacity-60'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${currentStep >= 3 ? 'bg-[#293A30] text-white' : 'bg-[#DFDBD1]'}`}>3</span>
              <span>{t('Riepilogo', 'Summary')}</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white border border-[#DFDBD1] rounded-xs p-6 sm:p-10 shadow-sm">
          
          {/* STEP 1: DATE & GUESTS */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="font-serif-display text-2xl font-medium text-[#242823] border-b border-[#DFDBD1]/60 pb-3">
                {t('Passo 1: Scegli le Date e gli Ospiti', 'Step 1: Choose Dates & Guests')}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="checkIn" className="block text-xs font-semibold uppercase tracking-wider text-[#4E544C] mb-2">
                    {t('Data di Arrivo (Check-in)', 'Arrival Date (Check-in)')} *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="checkIn"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full bg-[#FAF8F2] border border-[#DFDBD1] rounded-xs px-3.5 py-2.5 text-sm text-[#242823] focus:border-[#293A30] focus:ring-1 focus:ring-[#293A30] outline-none"
                    />
                  </div>
                  {errors.checkIn && <p className="text-xs text-red-600 mt-1">{errors.checkIn}</p>}
                </div>

                <div>
                  <label htmlFor="checkOut" className="block text-xs font-semibold uppercase tracking-wider text-[#4E544C] mb-2">
                    {t('Data di Partenza (Check-out)', 'Departure Date (Check-out)')} *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="checkOut"
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full bg-[#FAF8F2] border border-[#DFDBD1] rounded-xs px-3.5 py-2.5 text-sm text-[#242823] focus:border-[#293A30] focus:ring-1 focus:ring-[#293A30] outline-none"
                    />
                  </div>
                  {errors.checkOut && <p className="text-xs text-red-600 mt-1">{errors.checkOut}</p>}
                </div>
              </div>

              {/* Nights Calculated */}
              <div className="p-3 bg-[#FAF8F2] border border-[#DFDBD1] rounded-xs flex items-center justify-between text-xs text-[#4E544C]">
                <span>{t('Durata del soggiorno stimata:', 'Estimated length of stay:')}</span>
                <span className="font-semibold text-[#293A30]">
                  {nights > 0 ? `${nights} ${nights === 1 ? t('notte', 'night') : t('notti', 'nights')}` : t('Date non valide', 'Invalid dates')}
                </span>
              </div>

              {/* Guests and Pets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <label htmlFor="guests" className="block text-xs font-semibold uppercase tracking-wider text-[#4E544C] mb-2 flex items-center justify-between">
                    <span>{t('Numero di Ospiti', 'Number of Guests')} *</span>
                    <span className="text-[11px] text-[#687258] font-normal">{t('Max 4 persone', 'Max 4 guests')}</span>
                  </label>
                  <select
                    id="guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full bg-[#FAF8F2] border border-[#DFDBD1] rounded-xs px-3.5 py-2.5 text-sm text-[#242823] focus:border-[#293A30] focus:ring-1 focus:ring-[#293A30] outline-none"
                  >
                    <option value={1}>1 {t('ospite', 'guest')}</option>
                    <option value={2}>2 {t('ospiti', 'guests')}</option>
                    <option value={3}>3 {t('ospiti', 'guests')}</option>
                    <option value={4}>4 {t('ospiti (Capienza massima)', 'guests (Max capacity)')}</option>
                  </select>
                  <p className="text-[11px] text-[#687258] mt-1">
                    {t('La casa offre 4 posti letto reali (inclusa la camera mansardata)', 'The home offers 4 beds in two separate rooms')}
                  </p>
                </div>

                <div>
                  <label htmlFor="pets" className="block text-xs font-semibold uppercase tracking-wider text-[#4E544C] mb-2 flex items-center justify-between">
                    <span>{t('Animali Domestici', 'Pets Accompanying')}</span>
                    <span className="text-[11px] text-emerald-700 font-semibold">{t('Gratis / Nessun costo', 'Free / No fee')}</span>
                  </label>
                  <select
                    id="pets"
                    value={formData.pets}
                    onChange={(e) => setFormData({ ...formData, pets: Number(e.target.value) })}
                    className="w-full bg-[#FAF8F2] border border-[#DFDBD1] rounded-xs px-3.5 py-2.5 text-sm text-[#242823] focus:border-[#293A30] focus:ring-1 focus:ring-[#293A30] outline-none"
                  >
                    <option value={0}>{t('Nessun animale', 'No pets')}</option>
                    <option value={1}>1 {t('cane o gatto', 'dog or cat')}</option>
                    <option value={2}>2 {t('animali', 'pets')}</option>
                    <option value={3}>3+ {t('animali (da concordare con host)', 'pets (inquire with host)')}</option>
                  </select>
                  <p className="text-[11px] text-[#687258] mt-1">
                    {t('Pet Welcome Kit incluso all arrivo per ogni animale', 'Pet Welcome Kit included for each guest')}
                  </p>
                </div>
              </div>

              {/* Next Step Button */}
              <div className="pt-6 border-t border-[#DFDBD1]/60 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-[#293A30] text-[#F7F5EE] py-3 px-8 rounded-xs text-xs uppercase tracking-[0.14em] font-semibold flex items-center space-x-2 hover:bg-[#1E2B23] transition-colors"
                >
                  <span>{t('Continua ai Dati di Contatto', 'Continue to Contact Info')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: CONTACT DETAILS & MESSAGE */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="font-serif-display text-2xl font-medium text-[#242823] border-b border-[#DFDBD1]/60 pb-3">
                {t('Passo 2: I Tuoi Dati di Contatto', 'Step 2: Your Contact Details')}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-semibold uppercase tracking-wider text-[#4E544C] mb-2">
                    {t('Nome', 'First Name')} *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Mario"
                    className="w-full bg-[#FAF8F2] border border-[#DFDBD1] rounded-xs px-3.5 py-2.5 text-sm text-[#242823] focus:border-[#293A30] focus:ring-1 focus:ring-[#293A30] outline-none"
                  />
                  {errors.firstName && <p className="text-xs text-red-600 mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-xs font-semibold uppercase tracking-wider text-[#4E544C] mb-2">
                    {t('Cognome', 'Last Name')} *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Rossi"
                    className="w-full bg-[#FAF8F2] border border-[#DFDBD1] rounded-xs px-3.5 py-2.5 text-sm text-[#242823] focus:border-[#293A30] focus:ring-1 focus:ring-[#293A30] outline-none"
                  />
                  {errors.lastName && <p className="text-xs text-red-600 mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#4E544C] mb-2">
                    {t('Email', 'Email Address')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="mario.rossi@example.com"
                    className="w-full bg-[#FAF8F2] border border-[#DFDBD1] rounded-xs px-3.5 py-2.5 text-sm text-[#242823] focus:border-[#293A30] focus:ring-1 focus:ring-[#293A30] outline-none"
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#4E544C] mb-2">
                    {t('Telefono / WhatsApp', 'Phone / WhatsApp')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+39 333 1234567"
                    className="w-full bg-[#FAF8F2] border border-[#DFDBD1] rounded-xs px-3.5 py-2.5 text-sm text-[#242823] focus:border-[#293A30] focus:ring-1 focus:ring-[#293A30] outline-none"
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#4E544C] mb-2">
                  {t('Messaggio o Richieste Particolari', 'Notes or Special Requests')}
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t(
                    'Es: Viaggiamo con un cane di media taglia, saremmo interessati a consigli per i sentieri...',
                    'E.g.: Traveling with a medium dog, interested in trail suggestions...'
                  )}
                  className="w-full bg-[#FAF8F2] border border-[#DFDBD1] rounded-xs px-3.5 py-2.5 text-sm text-[#242823] focus:border-[#293A30] focus:ring-1 focus:ring-[#293A30] outline-none"
                />
              </div>

              <div className="pt-6 border-t border-[#DFDBD1]/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="text-xs uppercase tracking-wider font-semibold text-[#4E544C] hover:text-[#242823] flex items-center space-x-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{t('Indietro', 'Back')}</span>
                </button>

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-[#293A30] text-[#F7F5EE] py-3 px-8 rounded-xs text-xs uppercase tracking-[0.14em] font-semibold flex items-center space-x-2 hover:bg-[#1E2B23] transition-colors"
                >
                  <span>{t('Riepilogo Richiesta', 'Review Summary')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SUMMARY & CONFIRMATION */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="font-serif-display text-2xl font-medium text-[#242823] border-b border-[#DFDBD1]/60 pb-3">
                {t('Passo 3: Riepilogo della Richiesta', 'Step 3: Inquiry Summary')}
              </h3>

              <div className="p-5 bg-[#FAF8F2] border border-[#DFDBD1] rounded-xs space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-[#687258] block mb-0.5">{t('Arrivo', 'Check-in')}</span>
                    <strong className="text-[#242823] font-semibold">{formData.checkIn}</strong>
                  </div>
                  <div>
                    <span className="text-[#687258] block mb-0.5">{t('Partenza', 'Check-out')}</span>
                    <strong className="text-[#242823] font-semibold">{formData.checkOut}</strong>
                  </div>
                  <div>
                    <span className="text-[#687258] block mb-0.5">{t('Durata', 'Nights')}</span>
                    <strong className="text-[#242823] font-semibold">{nights} {t('notti', 'nights')}</strong>
                  </div>
                  <div>
                    <span className="text-[#687258] block mb-0.5">{t('Ospiti & Animali', 'Guests & Pets')}</span>
                    <strong className="text-[#242823] font-semibold">
                      {formData.guests} {t('ospiti', 'guests')}, {formData.pets} {t('animali', 'pets')}
                    </strong>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#DFDBD1]/60 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[#687258] block mb-0.5">{t('Richiedente', 'Guest Name')}</span>
                    <span className="text-[#242823]">{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div>
                    <span className="text-[#687258] block mb-0.5">{t('Contatti', 'Contact')}</span>
                    <span className="text-[#242823]">{formData.email} · {formData.phone}</span>
                  </div>
                </div>

                {formData.message && (
                  <div className="pt-3 border-t border-[#DFDBD1]/60 text-xs">
                    <span className="text-[#687258] block mb-0.5">{t('Note aggiuntive:', 'Notes:')}</span>
                    <p className="text-[#4E544C] italic">"{formData.message}"</p>
                  </div>
                )}
              </div>

              {/* Booking Process Explanation */}
              <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xs text-xs text-emerald-900 space-y-1">
                <div className="font-semibold flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>{t('Come funziona il processo:', 'How our inquiry process works:')}</span>
                </div>
                <p className="text-[#4E544C] leading-relaxed">
                  {t(
                    '1. Invii la richiesta → 2. L host verifica la disponibilità delle date → 3. Ricevi risposta diretta con conferma e condizioni → 4. Nessun anticipo su carta di credito.',
                    '1. You send inquiry → 2. Host checks calendar → 3. You receive a direct reply with conditions → 4. No upfront payment required online.'
                  )}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#DFDBD1]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="text-xs uppercase tracking-wider font-semibold text-[#4E544C] hover:text-[#242823] flex items-center space-x-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{t('Modifica Dati', 'Edit Details')}</span>
                </button>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  {/* Option to send via WhatsApp directly */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 px-5 rounded-xs text-xs uppercase tracking-[0.12em] font-semibold flex items-center justify-center space-x-2 transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t('Invia Subito su WhatsApp', 'Send via WhatsApp')}</span>
                  </a>

                  {/* Standard Web Submission */}
                  <button
                    type="button"
                    onClick={handleSubmitInquiry}
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#293A30] text-[#F7F5EE] py-3 px-6 rounded-xs text-xs uppercase tracking-[0.14em] font-semibold flex items-center justify-center space-x-2 hover:bg-[#1E2B23] transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>{t('Invio in corso...', 'Sending...')}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t('Invia Richiesta di Disponibilità', 'Submit Availability Request')}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: SUCCESS CONFIRMATION */}
          {currentStep === 4 && (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono text-[#687258] uppercase tracking-widest block mb-1">
                  {t('CODICE RICHIESTA:', 'INQUIRY CODE:')} {requestRefCode}
                </span>
                <h3 className="font-serif-display text-3xl font-medium text-[#242823] mb-2">
                  {t('GRAZIE PER LA TUA RICHIESTA.', 'THANK YOU FOR YOUR INQUIRY.')}
                </h3>
                <p className="text-sm text-[#4E544C] max-w-lg mx-auto font-light leading-relaxed">
                  {t(
                    'La richiesta è stata preparata correttamente. La disponibilità e le condizioni del soggiorno dovranno essere confermate dal proprietario.',
                    'Your inquiry was compiled successfully. Dates availability and stay terms will be confirmed personally by the property host.'
                  )}
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F2] border border-[#DFDBD1] rounded-xs max-w-md mx-auto text-xs text-[#4E544C] text-left space-y-1.5">
                <div><strong>{t('Periodo:', 'Period:')}</strong> {formData.checkIn} → {formData.checkOut} ({nights} {t('notti', 'nights')})</div>
                <div><strong>{t('Ospiti:', 'Guests:')}</strong> {formData.guests} {t('persone', 'guests')} · {formData.pets} {t('animali', 'pets')}</div>
                <div><strong>{t('Contatto:', 'Contact:')}</strong> {formData.email} · {formData.phone}</div>
              </div>

              {/* Fast Direct Channels */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#25D366] text-white px-5 py-2.5 rounded-xs text-xs font-semibold tracking-wider uppercase hover:bg-[#1EBE5D]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('Apri chat WhatsApp con l host', 'Open WhatsApp chat with host')}</span>
                </a>

                <a
                  href={`tel:${PROPERTY_INFO.phoneClean}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-[#DFDBD1] bg-white text-[#293A30] px-5 py-2.5 rounded-xs text-xs font-semibold tracking-wider uppercase hover:bg-[#FAF8F2]"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t('Chiama: +39 353 484 9640', 'Call: +39 353 484 9640')}</span>
                </a>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setCurrentStep(1);
                    setSubmissionSuccess(false);
                  }}
                  className="text-xs text-[#687258] hover:text-[#242823] underline"
                >
                  {t('Invia una nuova richiesta per date diverse', 'Submit another inquiry for different dates')}
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Host Contacts Direct Bar */}
        <div className="mt-8 text-center text-xs text-[#4E544C] flex flex-wrap items-center justify-center gap-6">
          <span>{t('Preferisci parlare subito con noi?', 'Prefer to speak with us right now?')}</span>
          <a
            href={`tel:${PROPERTY_INFO.phoneClean}`}
            className="font-semibold text-[#293A30] hover:underline flex items-center space-x-1"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{PROPERTY_INFO.phone}</span>
          </a>
          <span>·</span>
          <a
            href={`mailto:${PROPERTY_INFO.email}`}
            className="font-semibold text-[#293A30] hover:underline flex items-center space-x-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{PROPERTY_INFO.email}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
