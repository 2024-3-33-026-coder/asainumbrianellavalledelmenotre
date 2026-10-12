import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROPERTY_INFO } from '../data/propertyData';
import { Calendar, ChevronDown, MapPin, Heart, ShieldCheck, Sparkles, Camera } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenGallery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenGallery }) => {
  const { t } = useLanguage();

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Photography with natural contrast overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/casa-in-umbria/photo_2.jpg"
          alt="Scorcio panoramico in pietra del borgo di Scopoli e Casa in Umbria"
          className="w-full h-full object-cover object-center scale-100 filter brightness-[0.82] contrast-[1.05]"
          loading="eager"
          fetchPriority="high"
        />
        {/* Editorial Gradients for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#242823]/90 via-[#242823]/35 to-black/45" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-24 pb-16 sm:py-32 flex flex-col items-center">
        {/* Location Metadata */}
        <div className="inline-flex items-center space-x-2 text-stone-200 text-xs sm:text-[13px] tracking-[0.25em] uppercase font-medium mb-4 sm:mb-6 drop-shadow-xs">
          <MapPin className="w-3.5 h-3.5 text-[#DFDBD1]" />
          <span>{PROPERTY_INFO.address.village} · {PROPERTY_INFO.address.city} · {PROPERTY_INFO.address.region}</span>
        </div>

        {/* Display Editorial Headline */}
        <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.04em] font-normal leading-[1.05] sm:leading-[1] text-[#FAF8F2] max-w-4xl mb-6 drop-shadow-md">
          {t('IL LUSSO DI RALLENTARE.', 'THE LUXURY OF SLOWING DOWN.')}
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-stone-200 font-light max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow-xs">
          {t(
            'Una casa accogliente nella Valle del Menotre, tra natura, sentieri e borghi umbri. Il luogo giusto per ritrovare il proprio tempo, anche con il tuo fedele amico a quattro zampe.',
            'A welcoming haven in the Menotre Valley, embraced by nature, mountain trails, and historic hamlets. The right sanctuary to reclaim your time, together with your four-legged companion.'
          )}
        </p>

        {/* Seasonal Availability Ribbon Notice */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-stone-100 text-xs sm:text-sm tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-[#DFDBD1]" />
          <span className="font-semibold text-white">
            {t('Autunno / Inverno 2026:', 'Autumn / Winter 2026:')}
          </span>
          <span className="text-stone-200">
            {t('9 – 22 Novembre (Confermato) · Dicembre & 2027 aperte', 'Nov 9 – 22 (Confirmed) · Dec & 2027 open')}
          </span>
        </div>

        {/* Calls to Action */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 bg-[#F7F5EE] text-[#293A30] font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase rounded-xs hover:bg-white hover:shadow-lg transition-all active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4 text-[#293A30]" />
            <span>{t('Verifica Disponibilità', 'Check Availability')}</span>
            <span aria-hidden="true">→</span>
          </button>

          <button
            onClick={() => handleScrollToSection('la-casa')}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 border border-white/40 bg-black/20 text-white font-medium text-xs sm:text-sm tracking-[0.12em] uppercase rounded-xs hover:bg-white/20 transition-all backdrop-blur-xs"
          >
            <span>{t('Scopri la Casa', 'Explore the Home')}</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenGallery}
            className="inline-flex items-center space-x-1.5 text-xs text-stone-200 hover:text-white underline underline-offset-4 decoration-stone-400 py-1"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>{t('Guarda le 10 foto reali', 'View 10 authentic photos')}</span>
          </button>
        </div>

        {/* Key Quick Facts Badges (Unboxed Editorial Typography) */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/15 w-full max-w-3xl flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-stone-200 font-light">
          <div className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>{t('4 Posti Letto Reali', '4 Real Beds')}</span>
          </div>
          <span className="text-stone-400 select-none">·</span>
          <div className="flex items-center space-x-1.5">
            <span>{t('2 Camere Separate (Mansarda)', '2 Separate Bedrooms')}</span>
          </div>
          <span className="text-stone-400 select-none">·</span>
          <div className="flex items-center space-x-1.5">
            <Heart className="w-3.5 h-3.5 text-stone-300" />
            <span>{t('Pet-Friendly Gratuito', 'Pet-Friendly (No Fees)')}</span>
          </div>
          <span className="text-stone-400 select-none">·</span>
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-stone-300" />
            <span>CIN: {PROPERTY_INFO.cin}</span>
          </div>
        </div>
      </div>

      {/* Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:block text-stone-300 opacity-70 animate-bounce">
        <button
          onClick={() => handleScrollToSection('la-casa')}
          aria-label={t('Scorri verso la sezione successiva', 'Scroll to next section')}
          className="p-1"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
