import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROPERTY_INFO } from '../data/propertyData';
import { Phone, Mail, MapPin, MessageCircle, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenGallery: () => void;
  onOpenFaq: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenGallery, onOpenFaq }) => {
  const { lang, t } = useLanguage();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#1E2B23] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-stone-800">
          
          {/* Brand & Statement */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="font-serif-display text-2xl tracking-[0.16em] font-semibold text-[#FAF8F2] block">
                {PROPERTY_INFO.brand}
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-stone-400 block font-medium">
                {PROPERTY_INFO.sublabel}
              </span>
            </div>

            <p className="font-serif-display text-xl text-stone-300 italic font-normal">
              "{t(PROPERTY_INFO.taglineIt, PROPERTY_INFO.taglineEn)}"
            </p>

            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              {t(
                "Appartamento vacanze accogliente per 4 ospiti nel borgo montano di Scopoli (Foligno). Natura, silenzio e accoglienza per animali domestici senza supplementi.",
                "Peaceful holiday home for up to 4 guests in Scopoli (Foligno, Umbria). Restorative nature and thoughtful pet-friendly hospitality with zero fees."
              )}
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>CIN: {PROPERTY_INFO.cin}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white block mb-4">
              {t('NAVIGAZIONE', 'NAVIGATION')}
            </span>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a
                  href="#la-casa"
                  onClick={(e) => handleNavClick(e, '#la-casa')}
                  className="hover:text-white transition-colors"
                >
                  {t('La Casa', 'The House')}
                </a>
              </li>
              <li>
                <a
                  href="#gli-spazi"
                  onClick={(e) => handleNavClick(e, '#gli-spazi')}
                  className="hover:text-white transition-colors"
                >
                  {t('Gli Spazi & Mansarda', 'Spaces & Loft')}
                </a>
              </li>
              <li>
                <a
                  href="#outdoor"
                  onClick={(e) => handleNavClick(e, '#outdoor')}
                  className="hover:text-white transition-colors"
                >
                  {t("Vita all'Aperto & Prato", 'Outdoor Life & Lawn')}
                </a>
              </li>
              <li>
                <a
                  href="#pet-friendly"
                  onClick={(e) => handleNavClick(e, '#pet-friendly')}
                  className="hover:text-white transition-colors"
                >
                  {t('A Misura di Zampa', 'Pet-Friendly Welcome')}
                </a>
              </li>
              <li>
                <a
                  href="#territorio"
                  onClick={(e) => handleNavClick(e, '#territorio')}
                  className="hover:text-white transition-colors"
                >
                  {t('La Valle del Menotre', 'Menotre Valley')}
                </a>
              </li>
              <li>
                <a
                  href="#disponibilita"
                  onClick={(e) => handleNavClick(e, '#disponibilita')}
                  className="hover:text-white transition-colors"
                >
                  {t('Disponibilità Stagionali', 'Seasonal Dates')}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenGallery}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('Galleria Foto (10 foto reali)', 'Photo Gallery (10 real photos)')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenFaq}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('Domande Frequenti (FAQ)', 'FAQ')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white block mb-4">
              {t('CONTATTI DIRETTI', 'DIRECT CONTACT')}
            </span>

            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <span>{PROPERTY_INFO.address.fullString}</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                <a href={`tel:${PROPERTY_INFO.phoneClean}`} className="hover:text-white">
                  {PROPERTY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                <a href={`mailto:${PROPERTY_INFO.email}`} className="hover:text-white break-all">
                  {PROPERTY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="w-full bg-[#FAF8F2] text-[#293A30] font-semibold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xs hover:bg-white transition-colors"
              >
                {t('Richiedi Disponibilità', 'Inquire for Stay')}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()} {PROPERTY_INFO.fullName}. {t('Tutti i diritti riservati.', 'All rights reserved.')}
          </div>

          <div className="flex items-center space-x-4">
            <span>CIN: {PROPERTY_INFO.cin}</span>
            <span>·</span>
            <button
              onClick={onOpenFaq}
              className="hover:text-stone-300 transition-colors"
            >
              FAQ
            </button>
            <span>·</span>
            <span>Frazione Scopoli · Foligno (Umbria)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
