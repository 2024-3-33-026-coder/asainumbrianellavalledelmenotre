import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Trees, Sun, Flame, ShieldAlert, Maximize2, Wind } from 'lucide-react';

interface OutdoorLifeProps {
  onSelectPhoto: (index: number) => void;
}

export const OutdoorLife: React.FC<OutdoorLifeProps> = ({ onSelectPhoto }) => {
  const { t } = useLanguage();

  return (
    <section id="outdoor" className="py-20 sm:py-28 bg-[#F7F5EE] border-b border-[#DFDBD1]/60 text-[#242823]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-[#687258] text-xs uppercase tracking-[0.22em] font-medium mb-3">
            <Trees className="w-3.5 h-3.5" />
            <span>{t('RESPIRA', 'BREATHE')}</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-[#242823] mb-6">
            {t('PIÙ VERDE. PIÙ SPAZIO. MENO FRETTA.', 'MORE GREEN. MORE SPACE. LESS RUSH.')}
          </h2>

          <p className="text-base sm:text-lg text-[#4E544C] font-light leading-relaxed">
            {t(
              "Un prato ampio e un piccolo terrazzino accompagnano il soggiorno con la possibilità di trascorrere tempo all'aperto, giocare o semplicemente godersi il ritmo tranquillo del borgo e i boschi circostanti.",
              "An open green lawn and a sunny small terrace accompany your stay, inviting you to spend unhurried hours outside, play, or simply savor the slow mountain village rhythm."
            )}
          </p>
        </div>

        {/* 2-Column Visual & Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Card 1: Prato & Terrazzino */}
          <div className="bg-white border border-[#DFDBD1] rounded-xs overflow-hidden flex flex-col justify-between shadow-xs">
            <div 
              className="relative aspect-[16/10] overflow-hidden cursor-pointer group bg-stone-100"
              onClick={() => onSelectPhoto(5)} // photo_6.jpg
            >
              <img
                src="/images/casa-in-umbria/photo_6.jpg"
                alt="Prato verde ampio a disposizione degli ospiti a Casa in Umbria"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-white/90 text-[#293A30] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-xs">
                {t('Il Prato Esterno', 'The Country Lawn')}
              </div>
              <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1">
                <Maximize2 className="w-3 h-3" />
                <span>{t('Ingrandisci', 'Zoom')}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <h3 className="font-serif-display text-2xl font-medium text-[#242823]">
                {t('Spazio Libero per Rilassarsi', 'Open Space for Pure Respite')}
              </h3>
              <p className="text-sm text-[#4E544C] font-light leading-relaxed">
                {t(
                  "Il prato ampio è ideale per stendersi al sole, leggere all'ombra degli alberi o far sgranchire le zampe al proprio cane dopo un viaggio in auto.",
                  "The open lawn provides the perfect setting to stretch out in the sun, read beneath tree shade, or let your dog stretch its legs after the drive."
                )}
              </p>

              {/* Crucial Transparency Callout: Non-fenced */}
              <div className="p-4 bg-[#FAF8F2] border-l-2 border-[#747B62] text-xs text-[#4E544C] flex items-start space-x-3">
                <ShieldAlert className="w-4 h-4 text-[#747B62] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-medium text-[#242823] block mb-0.5">
                    {t('Nota trasparenza: Prato non recintato', 'Transparency note: Unfenced lawn')}
                  </strong>
                  <span>
                    {t(
                      "Il prato si fonde con la natura del borgo e non dispone di recinzione perimetrale. Per cani con tendenza all allontanamento, mettiamo a disposizione apposite lunghine nel Pet Welcome Kit.",
                      "The meadow blends seamlessly with the surrounding landscape and is not fenced. For dogs with a wandering spirit, long training leashes are provided in our Pet Welcome Kit."
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Barbecue & Divanetti a 50m */}
          <div className="bg-white border border-[#DFDBD1] rounded-xs overflow-hidden flex flex-col justify-between shadow-xs">
            <div 
              className="relative aspect-[16/10] overflow-hidden cursor-pointer group bg-stone-100"
              onClick={() => onSelectPhoto(7)} // photo_8.jpg
            >
              <img
                src="/images/casa-in-umbria/photo_8.jpg"
                alt="Area barbecue e divanetti all aperto nel borgo a circa 50 metri"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-white/90 text-[#293A30] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-xs">
                {t('A circa 50m dalla Casa', '~50m from the House')}
              </div>
              <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1">
                <Maximize2 className="w-3 h-3" />
                <span>{t('Ingrandisci', 'Zoom')}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center space-x-2 text-[#747B62] text-xs font-semibold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5" />
                <span>{t('Convivialità nel Borgo', 'Village Conviviality')}</span>
              </div>
              <h3 className="font-serif-display text-2xl font-medium text-[#242823]">
                {t('Area Barbecue & Divanetti all Aperto', 'Barbecue & Outdoor Sofas Area')}
              </h3>
              <p className="text-sm text-[#4E544C] font-light leading-relaxed">
                {t(
                  "A brevissima distanza (circa 50 metri dall abitazione), gli ospiti possono usufruire di una caratteristica postazione con barbecue e divanetti per godersi grigliate all aperto o un calice di vino locale sotto le stelle dell Appennino.",
                  "Just a few paces away (~50 meters from the front door), guests have access to a pleasant setting featuring a barbecue and outdoor sofas for open-air grilling and starlit evening conversations."
                )}
              </p>

              <div className="pt-2 text-xs text-[#687258] flex items-center space-x-2">
                <Wind className="w-4 h-4 text-[#747B62]" />
                <span>{t('Aria fresca e serate estive fresche a 600m di quota', 'Crisp mountain breeze and cool summer nights at 600m altitude')}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
