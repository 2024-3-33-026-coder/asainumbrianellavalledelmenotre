import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PET_WELCOME_KIT } from '../data/propertyData';
import { Heart, Package, AlertTriangle, Check, Sparkles, Footprints, Maximize2 } from 'lucide-react';

interface PetFriendlyProps {
  onSelectPhoto: (index: number) => void;
  onOpenBooking: () => void;
}

export const PetFriendly: React.FC<PetFriendlyProps> = ({ onSelectPhoto, onOpenBooking }) => {
  const { t } = useLanguage();

  return (
    <section id="pet-friendly" className="py-20 sm:py-28 bg-[#FAF8F2] border-b border-[#DFDBD1]/60 text-[#242823]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 text-[#687258] text-xs uppercase tracking-[0.22em] font-medium">
              <Footprints className="w-3.5 h-3.5 text-[#747B62]" />
              <span>{t('A MISURA DI ZAMPA', 'PET-FRIENDLY HOSPITALITY')}</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-[#242823]">
              {t('LA VACANZA È PIÙ BELLA INSIEME.', 'VACATION IS SWEETER TOGETHER.')}
            </h2>

            <div className="w-12 h-px bg-[#747B62]" />

            <p className="text-base sm:text-lg text-[#4E544C] font-light leading-relaxed">
              {t(
                "Anche il tuo migliore amico a quattro zampe fa parte della famiglia e merita di vivere la vacanza con te. A Casa in Umbria gli animali sono i benvenuti senza alcun supplemento economico e senza limitazioni di taglia o razza.",
                "Your four-legged best friend is an essential part of the family and deserves to experience vacations alongside you. At Casa in Umbria, pets are genuinely welcome with zero additional fees and no size restrictions."
              )}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center space-x-2 text-xs font-medium text-[#293A30] bg-[#F7F5EE] border border-[#DFDBD1] px-3.5 py-2 rounded-xs">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t('Zero supplementi soggiorno', 'No pet surcharge')}</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-[#293A30] bg-[#F7F5EE] border border-[#DFDBD1] px-3.5 py-2 rounded-xs">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t('Nessun limite di peso o taglia', 'All sizes & breeds welcome')}</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-[#293A30] bg-[#F7F5EE] border border-[#DFDBD1] px-3.5 py-2 rounded-xs">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t('Pet Welcome Kit in omaggio', 'Complimentary Welcome Kit')}</span>
              </div>
            </div>
          </div>

          {/* Authentic Pet Photo */}
          <div className="lg:col-span-5">
            <div 
              className="group relative cursor-pointer overflow-hidden rounded-xs border border-[#DFDBD1] shadow-md bg-stone-100"
              onClick={() => onSelectPhoto(6)} // photo_7.jpg
            >
              <img
                src="/images/casa-in-umbria/photo_7.jpg"
                alt="Ospite a quattro zampe rilassato a Casa in Umbria"
                className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-white/95 text-[#293A30] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-xs">
                {t('Foto Reale Ospiti', 'Real Guest Moment')}
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-[#242823] text-xs px-3 py-1.5 rounded-xs flex items-center space-x-1.5 shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{t('Ingrandisci', 'Zoom')}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pet Welcome Kit Showcase */}
        <div className="bg-white border border-[#DFDBD1] rounded-xs p-6 sm:p-10 mb-12 shadow-xs">
          <div className="flex items-center space-x-3 mb-6">
            <Package className="w-5 h-5 text-[#747B62]" />
            <h3 className="font-serif-display text-2xl font-medium text-[#242823]">
              {t('Il Nostro Pet Welcome Kit', 'Our Complimentary Pet Welcome Kit')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PET_WELCOME_KIT.map((item, idx) => (
              <div key={idx} className="p-4 bg-[#FAF8F2] border border-[#DFDBD1]/60 rounded-xs">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#293A30] uppercase tracking-wider mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#DFDBD1] text-[#242823] flex items-center justify-center text-[10px] font-mono">
                    {idx + 1}
                  </span>
                  <span>{t(item.nameIt, item.nameEn)}</span>
                </div>
                <p className="text-xs text-[#4E544C] font-light leading-relaxed">
                  {t(item.descIt, item.descEn)}
                </p>
              </div>
            ))}
            
            {/* 6th Tile: Host Tips for Pet Walks */}
            <div className="p-4 bg-[#293A30] text-[#F7F5EE] rounded-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-stone-200 uppercase tracking-wider mb-1.5">
                  <Sparkles className="w-4 h-4 text-[#DFDBD1]" />
                  <span>{t('Sentieri Dog-Friendly', 'Dog-Friendly Trails')}</span>
                </div>
                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  {t(
                    'I percorsi naturalistici della Valle del Menotre offrono corsi d acqua limpidi e boschi ombreggiati perfetti per camminare in ogni stagione.',
                    'The natural trails of the Menotre Valley feature crystal-clear streams and shaded forests perfect for all-season dog walks.'
                  )}
                </p>
              </div>
              <button
                onClick={onOpenBooking}
                className="mt-3 text-[11px] text-white underline underline-offset-4 font-medium text-left"
              >
                {t('Segnala la presenza del tuo animale →', 'Note your pet in booking inquiry →')}
              </button>
            </div>
          </div>
        </div>

        {/* Transparency Box: New Year's & Village Life Honest Disclosure */}
        <div className="bg-[#FAF8F2] border-l-4 border-amber-600 p-6 sm:p-8 rounded-xs space-y-3">
          <div className="flex items-center space-x-2.5 text-amber-900 font-semibold text-sm">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
            <span>{t('Nota Trasparenza & Sicurezza: Periodo di Capodanno', 'Transparency & Safety Note: New Year’s Period')}</span>
          </div>

          <p className="text-xs sm:text-sm text-[#4E544C] leading-relaxed">
            {t(
              "Come precisato onestamente dal proprietario: la casa è situata in un piccolo borgo montano abitato (circa 200 persone), dove vivono famiglie del posto e altri cani. Durante la notte di San Silvestro e i festeggiamenti di Capodanno non possiamo garantire il silenzio assoluto né l assenza totale di fuochi d artificio o petardi. Se hai un cane particolarmente sensibile o fobico rispetto ai rumori dei botti, desideriamo informarti con massima sincerità.",
              "As transparently stated by the host: the house is set in an inhabited mountain village (~200 residents) with local families and dogs. During New Year's Eve festivities, total silence or complete absence of fireworks cannot be guaranteed. If you travel with a dog who suffers severe noise phobias, we want to inform you in complete honesty before booking."
            )}
          </p>
        </div>

      </div>
    </section>
  );
};
