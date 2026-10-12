import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TERRITORY_DESTINATIONS } from '../data/propertyData';
import { MapPin, Mountain, Compass, ExternalLink, ChevronRight, Maximize2, Footprints } from 'lucide-react';

interface TerritoryGuideProps {
  onSelectPhoto: (index: number) => void;
}

export const TerritoryGuide: React.FC<TerritoryGuideProps> = ({ onSelectPhoto }) => {
  const { t } = useLanguage();
  const [filterTag, setFilterTag] = useState<'all' | 'borgo' | 'natura' | 'cultura' | 'escursione'>('all');

  const filteredPlaces = filterTag === 'all'
    ? TERRITORY_DESTINATIONS
    : TERRITORY_DESTINATIONS.filter(p => p.tag === filterTag);

  return (
    <div id="territorio" className="bg-[#FAF8F2] text-[#242823]">
      {/* SECTION 06 — LA VALLE DEL MENOTRE */}
      <section className="py-20 sm:py-28 border-b border-[#DFDBD1]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-[#687258] text-xs uppercase tracking-[0.22em] font-medium">
                <Mountain className="w-3.5 h-3.5" />
                <span>{t('IL TERRITORIO', 'THE REGION & VALLEY')}</span>
              </div>

              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-[#242823]">
                {t("L'UMBRIA PIÙ AUTENTICA, DA ESPLORARE CON CALMA.", "AUTHENTIC UMBRIA, TO BE SAVORED UNHURRIED.")}
              </h2>

              <div className="w-12 h-px bg-[#747B62]" />

              <div className="space-y-4 text-base sm:text-lg text-[#4E544C] font-light leading-relaxed">
                <p>
                  {t(
                    "La Valle del Menotre cambia colore con le stagioni: il verde brillante della primavera e dell'estate lascia spazio ai toni caldi, rossi, gialli e arancioni dell'autunno nei castagneti.",
                    "The Menotre Valley shifts hues with the passing seasons: vivid emerald greens in spring and summer yield to warm golden, copper, and fiery amber foliage in autumn among chestnut groves."
                  )}
                </p>
                <p>
                  {t(
                    "Tra corsi d'acqua trasparenti, cascate, mulini secolari e piccoli borghi di pietra aggrappati alla roccia, questo angolo di Umbria invita a uscire all'aria aperta e a ritrovare il piacere di camminare senza fretta.",
                    "Between pellucid mountain streams, waterfalls, stone hamlets, and historic mills perched upon cliffs, this pristine pocket of Umbria invites you to step outside and rediscover the pure joy of unhurried exploration."
                  )}
                </p>
              </div>
            </div>

            {/* Landscape Visual */}
            <div className="lg:col-span-5">
              <div 
                className="group relative cursor-pointer overflow-hidden rounded-xs border border-[#DFDBD1] shadow-md bg-stone-100"
                onClick={() => onSelectPhoto(9)} // photo_10.jpg
              >
                <img
                  src="/images/casa-in-umbria/photo_10.jpg"
                  alt="La natura incontaminata e i sentieri della Valle del Menotre"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/95 text-[#293A30] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-xs">
                  {t('Valle del Menotre', 'Menotre Valley')}
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

          {/* SECTION 07 — CAMMINA (Trekking & Natura) */}
          <div className="mb-16 p-8 sm:p-10 bg-[#293A30] text-[#F7F5EE] rounded-xs shadow-sm">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 text-[#DFDBD1] text-xs uppercase tracking-[0.22em] font-medium">
                <Footprints className="w-4 h-4 text-[#DFDBD1]" />
                <span>{t('TREKKING & NATURA', 'HIKING & OUTDOORS')}</span>
              </div>
              <h3 className="font-serif-display text-3xl sm:text-4xl font-normal text-white">
                {t('PARTI DALLA CASA. SEGUI IL SENTIERO.', 'START AT THE DOORSTEP. FOLLOW THE TRAIL.')}
              </h3>
              <p className="text-sm sm:text-base text-stone-200 font-light leading-relaxed">
                {t(
                  "La posizione della struttura permette di partire direttamente alla scoperta dei sentieri del territorio. Zaino in spalla e scarponi ai piedi: scegli il percorso in base alla stagione, al tempo a disposizione e al tuo ritmo.",
                  "The house's prime mountain setting lets you step straight onto scenic trailheads. Backpack on and hiking boots laced: select your route to match the season, your available hours, and your natural rhythm."
                )}
              </p>
              <div className="pt-2 flex items-center space-x-2 text-xs text-[#DFDBD1]">
                <Compass className="w-4 h-4" />
                <span>
                  {t(
                    "L host mette a disposizione consigli personalizzati per itinerari trekking, cascate nascoste e borghi d arte da non perdere.",
                    "The host gladly shares personalized recommendations for loop trails, secluded waterfalls, and historic hill towns."
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Filter Bar for Destination Cards */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h3 className="font-serif-display text-2xl font-medium text-[#242823]">
              {t('Luoghi da Visitare nelle Vicinanze', 'Recommended Places to Discover')}
            </h3>

            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setFilterTag('all')}
                className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                  filterTag === 'all'
                    ? 'bg-[#293A30] text-white font-medium'
                    : 'bg-white border border-[#DFDBD1] text-[#4E544C] hover:text-[#242823]'
                }`}
              >
                {t('Tutti i Luoghi', 'All Places')}
              </button>
              <button
                onClick={() => setFilterTag('borgo')}
                className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                  filterTag === 'borgo'
                    ? 'bg-[#293A30] text-white font-medium'
                    : 'bg-white border border-[#DFDBD1] text-[#4E544C] hover:text-[#242823]'
                }`}
              >
                {t('Borghi Storici', 'Historic Villages')}
              </button>
              <button
                onClick={() => setFilterTag('natura')}
                className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                  filterTag === 'natura'
                    ? 'bg-[#293A30] text-white font-medium'
                    : 'bg-white border border-[#DFDBD1] text-[#4E544C] hover:text-[#242823]'
                }`}
              >
                {t('Natura & Cascate', 'Nature & Waterfalls')}
              </button>
              <button
                onClick={() => setFilterTag('cultura')}
                className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                  filterTag === 'cultura'
                    ? 'bg-[#293A30] text-white font-medium'
                    : 'bg-white border border-[#DFDBD1] text-[#4E544C] hover:text-[#242823]'
                }`}
              >
                {t('Arte & Cultura', 'Art & Culture')}
              </button>
            </div>
          </div>

          {/* Places Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlaces.map((place) => (
              <div
                key={place.id}
                className="bg-white border border-[#DFDBD1] rounded-xs p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#687258] mb-3">
                    <span className="uppercase tracking-wider font-semibold">
                      {place.tag === 'borgo' ? t('Borgo', 'Village') : place.tag === 'natura' ? t('Natura', 'Nature') : t('Cultura', 'Culture')}
                    </span>
                    <span className="font-mono bg-[#FAF8F2] px-2 py-0.5 border border-[#DFDBD1] rounded-xs">
                      {t(place.distanceIt, place.distanceEn)}
                    </span>
                  </div>

                  <h4 className="font-serif-display text-2xl font-medium text-[#242823] mb-1">
                    {place.name}
                  </h4>
                  <div className="text-xs text-[#747B62] font-medium mb-3">
                    {t(place.subtitleIt, place.subtitleEn)}
                  </div>

                  <p className="text-xs sm:text-sm text-[#4E544C] font-light leading-relaxed mb-4">
                    {t(place.descriptionIt, place.descriptionEn)}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DFDBD1]/60 text-xs text-[#293A30] flex items-center space-x-1.5">
                  <span className="font-semibold">{t('Punto forte:', 'Highlight:')}</span>
                  <span className="text-[#4E544C]">{t(place.highlightIt, place.highlightEn)}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
