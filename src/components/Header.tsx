import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROPERTY_INFO } from '../data/propertyData';
import { Menu, X, MessageCircle, Phone, Calendar, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenGallery: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenGallery }) => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#la-casa', labelIt: 'La Casa', labelEn: 'The House' },
    { href: '#gli-spazi', labelIt: 'Gli Spazi', labelEn: 'Spaces' },
    { href: '#outdoor', labelIt: "Vita all'Aperto", labelEn: 'Outdoor Life' },
    { href: '#pet-friendly', labelIt: 'A Misura di Zampa', labelEn: 'Pet-Friendly' },
    { href: '#territorio', labelIt: 'Il Territorio', labelEn: 'The Valley' },
    { href: '#disponibilita', labelIt: 'Disponibilità', labelEn: 'Availability' },
    { href: '#contatti', labelIt: 'Contatti', labelEn: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const whatsappUrl = `https://wa.me/${PROPERTY_INFO.phoneClean}?text=${encodeURIComponent(
    lang === 'it'
      ? 'Buongiorno, vorrei informazioni e disponibilità per un soggiorno a Casa in Umbria.'
      : 'Hello, I would like information and availability for a stay at Casa in Umbria.'
  )}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F5EE]/95 backdrop-blur-md border-b border-[#DFDBD1] shadow-xs py-3.5'
            : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent text-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Editorial Typography */}
          <a
            href="#"
            className="flex flex-col text-left group focus-visible:outline-2 focus-visible:outline-[#293A30] rounded-xs"
            aria-label="Casa in Umbria - Torna all inizio"
          >
            <span
              className={`font-serif-display text-xl sm:text-2xl tracking-[0.18em] font-semibold transition-colors ${
                isScrolled ? 'text-[#242823] group-hover:text-[#293A30]' : 'text-white drop-shadow-xs'
              }`}
            >
              {PROPERTY_INFO.brand}
            </span>
            <span
              className={`text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-medium transition-colors ${
                isScrolled ? 'text-[#687258]' : 'text-stone-200'
              }`}
            >
              {PROPERTY_INFO.sublabel}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Navigazione principale"
            className="hidden lg:flex items-center space-x-7"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[13px] tracking-[0.08em] font-medium transition-colors hover:opacity-100 ${
                  isScrolled
                    ? 'text-[#4E544C] hover:text-[#293A30]'
                    : 'text-stone-100/90 hover:text-white drop-shadow-xs'
                }`}
              >
                {t(link.labelIt, link.labelEn)}
              </a>
            ))}
          </nav>

          {/* Right Action Controls: Language Toggle, WhatsApp & CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Gallery link button */}
            <button
              onClick={onOpenGallery}
              className={`text-[12px] tracking-[0.06em] font-medium px-2 py-1 transition-colors ${
                isScrolled
                  ? 'text-[#4E544C] hover:text-[#242823]'
                  : 'text-stone-200 hover:text-white'
              }`}
              title={t('Guarda tutte le 10 fotografie reali', 'View all 10 real photos')}
            >
              {t('Foto (10)', 'Photos (10)')}
            </button>

            {/* Language Switcher */}
            <div
              className={`flex items-center text-xs border rounded-sm px-1.5 py-0.5 tracking-wider ${
                isScrolled
                  ? 'border-[#DFDBD1] bg-[#FAF8F2] text-[#4E544C]'
                  : 'border-white/30 bg-black/20 text-white'
              }`}
              role="group"
              aria-label="Selezione lingua / Language selection"
            >
              <button
                onClick={() => setLang('it')}
                className={`px-1.5 py-0.5 rounded-xs transition-colors font-semibold ${
                  lang === 'it'
                    ? isScrolled
                      ? 'text-[#293A30] bg-[#DFDBD1]/60'
                      : 'text-white bg-white/20'
                    : 'opacity-60 hover:opacity-100'
                }`}
                aria-pressed={lang === 'it'}
              >
                IT
              </button>
              <span className="opacity-40 select-none">/</span>
              <button
                onClick={() => setLang('en')}
                className={`px-1.5 py-0.5 rounded-xs transition-colors font-semibold ${
                  lang === 'en'
                    ? isScrolled
                      ? 'text-[#293A30] bg-[#DFDBD1]/60'
                      : 'text-white bg-white/20'
                    : 'opacity-60 hover:opacity-100'
                }`}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>

            {/* WhatsApp Quick Link */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('Contatta su WhatsApp', 'Chat on WhatsApp')}
              className={`p-2 rounded-sm transition-all flex items-center justify-center ${
                isScrolled
                  ? 'text-[#293A30] hover:bg-[#DFDBD1]/50'
                  : 'text-white hover:bg-white/20'
              }`}
              title={t('Scrivi direttamente su WhatsApp', 'Direct WhatsApp contact')}
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenBooking}
              className={`text-[12px] tracking-[0.1em] uppercase font-semibold px-4 py-2.5 rounded-xs transition-all duration-200 flex items-center space-x-1.5 ${
                isScrolled
                  ? 'bg-[#293A30] text-[#F7F5EE] hover:bg-[#1E2B23] shadow-xs active:scale-[0.98]'
                  : 'bg-white text-[#293A30] hover:bg-[#FAF8F2] shadow-sm active:scale-[0.98]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t('Disponibilità', 'Check Dates')}</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center space-x-2">
            {/* Mobile Lang Switch */}
            <button
              onClick={() => setLang(lang === 'it' ? 'en' : 'it')}
              className={`text-xs px-2 py-1 rounded-xs border font-semibold ${
                isScrolled
                  ? 'border-[#DFDBD1] text-[#242823]'
                  : 'border-white/30 text-white bg-black/20'
              }`}
              aria-label="Cambia lingua"
            >
              {lang.toUpperCase()}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 rounded-xs focus-visible:outline-2 focus-visible:outline-[#293A30] ${
                isScrolled ? 'text-[#242823]' : 'text-white'
              }`}
              aria-label={t('Apri menu di navigazione', 'Open navigation menu')}
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Overlay Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label={t('Menu di navigazione mobile', 'Mobile Navigation Menu')}
        >
          <div className="w-full max-w-sm bg-[#F7F5EE] h-full shadow-2xl flex flex-col p-6 overflow-y-auto">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#DFDBD1]">
              <div>
                <span className="font-serif-display text-xl tracking-[0.14em] font-semibold text-[#242823] block">
                  {PROPERTY_INFO.brand}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#687258] block">
                  {PROPERTY_INFO.sublabel}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#4E544C] hover:text-[#242823] rounded-xs"
                aria-label={t('Chiudi menu', 'Close menu')}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-serif-display text-2xl text-[#242823] hover:text-[#293A30] py-1 border-b border-[#DFDBD1]/40 flex items-center justify-between transition-colors"
                >
                  <span>{t(link.labelIt, link.labelEn)}</span>
                  <ArrowRight className="w-4 h-4 text-[#687258]" />
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGallery();
                }}
                className="text-left font-serif-display text-2xl text-[#242823] hover:text-[#293A30] py-1 border-b border-[#DFDBD1]/40 flex items-center justify-between transition-colors"
              >
                <span>{t('Galleria Fotografica (10 foto)', 'Photo Gallery (10 photos)')}</span>
                <ArrowRight className="w-4 h-4 text-[#687258]" />
              </button>
            </nav>

            {/* Bottom Actions */}
            <div className="mt-auto pt-6 border-t border-[#DFDBD1] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#293A30] text-[#F7F5EE] py-3.5 px-4 rounded-xs text-xs tracking-[0.15em] uppercase font-semibold flex items-center justify-center space-x-2 shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>{t('Verifica Disponibilità', 'Check Availability')}</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#DFDBD1] bg-white py-2.5 px-3 rounded-xs text-xs font-medium text-[#293A30] flex items-center justify-center space-x-1.5"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${PROPERTY_INFO.phoneClean}`}
                  className="border border-[#DFDBD1] bg-white py-2.5 px-3 rounded-xs text-xs font-medium text-[#293A30] flex items-center justify-center space-x-1.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t('Chiama', 'Call')}</span>
                </a>
              </div>

              <div className="text-[11px] text-[#687258] pt-2 text-center">
                <span>CIN: {PROPERTY_INFO.cin}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
