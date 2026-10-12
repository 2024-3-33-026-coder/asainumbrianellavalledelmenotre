import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROPERTY_INFO } from '../data/propertyData';
import { Bed, Home, Maximize2, Sparkles, Compass, Users, CheckCircle2 } from 'lucide-react';

interface AboutPropertyProps {
  onSelectPhoto: (index: number) => void;
  onOpenBooking: () => void;
}

export const AboutProperty: React.FC<AboutPropertyProps> = ({ onSelectPhoto, onOpenBooking }) => {
  const { t } = useLanguage();
  const [activeSpaceTab, setActiveSpaceTab] = useState<'all' | 'bedrooms' | 'living' | 'terrace'>('all');

  const spaces = [
    {
      id: 'bed-master',
      photoIndex: 0, // photo_1.jpg
      src: '/images/casa-in-umbria/photo_1.jpg',
      titleIt: 'La Camera Padronale',
      titleEn: 'Master Bedroom',
      category: 'bedrooms',
      badgeIt: 'Camera 1',
      badgeEn: 'Bedroom 1',
      descIt: 'Spaziosa, luminosa e arredata con essenzialità e calore. Letto matrimoniale confortevole e silenzio totale garantito dal borgo montano.',
      descEn: 'Spacious, luminous, and appointed with warm understatement. Comfortable double bed and deep mountain village quiet.'
    },
    {
      id: 'bed-attic',
      photoIndex: 3, // photo_4.jpg
      src: '/images/casa-in-umbria/photo_4.jpg',
      titleIt: 'La Camera Mansardata',
      titleEn: 'Attic Bedroom',
      category: 'bedrooms',
      badgeIt: 'Camera 2 · Mansarda',
      badgeEn: 'Bedroom 2 · Attic',
      descIt: 'Caratteristica camera nel sottotetto con travi in legno a vista, particolarmente amata dai bambini per la sua atmosfera raccolta e intima.',
      descEn: 'Charming loft room with exposed timber beams, especially beloved by children for its cozy and private sanctuary vibe.'
    },
    {
      id: 'living',
      photoIndex: 2, // photo_3.jpg
      src: '/images/casa-in-umbria/photo_3.jpg',
      titleIt: 'Zona Giorno & Salotto',
      titleEn: 'Living Room & Dining',
      category: 'living',
      badgeIt: 'Zona Giorno',
      badgeEn: 'Living Area',
      descIt: 'Ambiente dedicato alla convivialità, alla lettura e al relax dopo le escursioni sui sentieri. Arredi funzionali per sentirsi come a casa propria.',
      descEn: 'Welcoming space dedicated to sharing meals, slow reading, and unwinding after trail hikes. Functional furnishings to make you feel right at home.'
    },
    {
      id: 'terrace',
      photoIndex: 4, // photo_5.jpg
      src: '/images/casa-in-umbria/photo_5.jpg',
      titleIt: 'Il Terrazzino Panoramico',
      titleEn: 'Scenic Small Terrace',
      category: 'terrace',
      badgeIt: 'Esterno Privato',
      badgeEn: 'Private Terrace',
      descIt: 'Un piccolo terrazzo all aperto per sorseggiare un caffè al mattino ammirando il profilo verdeggiante delle colline e respirando aria pura.',
      descEn: 'A charming outdoor terrace to sip morning espresso overlooking green hill silhouettes and taking in pure mountain breeze.'
    }
  ];

  const filteredSpaces = activeSpaceTab === 'all' 
    ? spaces 
    : spaces.filter(s => s.category === activeSpaceTab);

  return (
    <div className="bg-[#FAF8F2] text-[#242823]">
      {/* SECTION 01 — LA CASA */}
      <section id="la-casa" className="py-20 sm:py-28 border-b border-[#DFDBD1]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-2 text-[#687258] text-xs uppercase tracking-[0.22em] font-medium">
                <Compass className="w-3.5 h-3.5" />
                <span>{t('BENVENUTI NELLA VALLE DEL MENOTRE', 'WELCOME TO VALLE DEL MENOTRE')}</span>
              </div>

              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-[#242823]">
                {t('UN LUOGO PER RITROVARE IL TUO TEMPO.', 'A HAVEN TO REDISCOVER YOUR TIME.')}
              </h2>

              <div className="w-12 h-px bg-[#747B62]" />

              <div className="space-y-4 text-base sm:text-lg text-[#4E544C] font-light leading-relaxed">
                <p>
                  {t(
                    "Nel piccolo borgo di Scopoli, immersa nel verde incontaminato dell'Appennino umbro, la nostra casa è pensata per chi desidera una pausa autentica dalla quotidianità, tra natura, silenzio e la libertà di esplorare il territorio.",
                    "In the picturesque mountain village of Scopoli, nestled in the green Apennines of Umbria, our home was conceived for those who yearn for an authentic respite from everyday rush, surrounded by nature, silence, and open exploration."
                  )}
                </p>
                <p>
                  {t(
                    "Qui il tempo scorre con una cadenza diversa: la mattina comincia con il canto degli uccelli e l'aria fresca di montagna. La vivace città di Foligno e tutte le sue comodità urbane (negozi, supermercati, stazione ferroviaria) distano appena 10 minuti di automobile.",
                    "Here time flows to a gentler rhythm: mornings awake to birdsong and crisp mountain air. The historic city of Foligno and all modern conveniences are just a 10-minute drive away."
                  )}
                </p>
              </div>

              {/* Verified Key Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#DFDBD1]/70">
                <div className="p-3 bg-[#F7F5EE] border border-[#DFDBD1] rounded-xs">
                  <div className="font-serif-display text-2xl text-[#293A30]">4</div>
                  <div className="text-xs text-[#687258] font-medium">{t('Posti letto confermati', 'Confirmed guests')}</div>
                </div>
                <div className="p-3 bg-[#F7F5EE] border border-[#DFDBD1] rounded-xs">
                  <div className="font-serif-display text-2xl text-[#293A30]">2</div>
                  <div className="text-xs text-[#687258] font-medium">{t('Camere separate', 'Separate bedrooms')}</div>
                </div>
                <div className="p-3 bg-[#F7F5EE] border border-[#DFDBD1] rounded-xs col-span-2 sm:col-span-1">
                  <div className="font-serif-display text-2xl text-[#293A30]">~10m</div>
                  <div className="text-xs text-[#687258] font-medium">{t('Da Foligno centro', 'Drive to Foligno')}</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center space-x-2 text-xs tracking-[0.14em] uppercase font-semibold text-[#293A30] hover:text-[#1E2B23] border-b border-[#293A30] pb-1"
                >
                  <span>{t('Richiedi disponibilità per il tuo soggiorno', 'Inquire for your stay')}</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Right Photographic Composition */}
            <div className="lg:col-span-5 relative">
              <div 
                className="group relative cursor-pointer overflow-hidden rounded-xs border border-[#DFDBD1] shadow-md bg-stone-100"
                onClick={() => onSelectPhoto(1)} // photo_2.jpg
              >
                <img
                  src="/images/casa-in-umbria/photo_2.jpg"
                  alt="Scorcio in pietra del borgo di Scopoli"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-[#242823] text-xs px-3 py-1.5 rounded-xs flex items-center space-x-1.5 shadow-sm">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{t('Ingrandisci', 'Enlarge')}</span>
                  </span>
                </div>
                <div className="p-3 bg-white text-xs text-[#687258] flex justify-between items-center">
                  <span>{t('Il borgo di Scopoli (Foligno)', 'Scopoli village (Foligno)')}</span>
                  <span className="text-[11px] font-mono text-stone-400">1/10</span>
                </div>
              </div>

              {/* Offset Second Detail Box */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-48 bg-[#F7F5EE] p-4 border border-[#DFDBD1] shadow-lg rounded-xs">
                <div className="text-[10px] uppercase tracking-wider text-[#687258] font-semibold mb-1">
                  {t('Autenticità', 'Authenticity')}
                </div>
                <p className="text-xs text-[#4E544C] leading-snug">
                  {t('Foto reali fornite dal proprietario, nessuna immagine artificiale.', 'Real photos from the host. Zero AI synthetic imagery.')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 02 — GLI SPAZI */}
      <section id="gli-spazi" className="py-20 sm:py-28 border-b border-[#DFDBD1]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 text-[#687258] text-xs uppercase tracking-[0.22em] font-medium mb-3">
              <Home className="w-3.5 h-3.5" />
              <span>{t('LA CASA, DENTRO E FUORI', 'THE HOUSE, INSIDE & OUT')}</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#242823] mb-4">
              {t('IL COMFORT DI UNA CASA. LA LIBERTÀ DELLA NATURA.', 'THE COMFORT OF HOME. THE FREEDOM OF NATURE.')}
            </h2>
            <p className="text-base text-[#4E544C] font-light max-w-2xl mx-auto">
              {t(
                "Un appartamento pensato per ospitare fino a quattro persone in totale serenità: due stanze dedicate al riposo, una zona giorno accogliente e affacci sulla natura.",
                "An apartment designed to host up to four guests in serenity: two restful sleeping quarters, a convivial living room, and views over peaceful greenery."
              )}
            </p>

            {/* Filter buttons for spaces */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8" role="tablist">
              <button
                onClick={() => setActiveSpaceTab('all')}
                className={`text-xs px-4 py-1.5 rounded-full transition-all ${
                  activeSpaceTab === 'all'
                    ? 'bg-[#293A30] text-white shadow-xs font-medium'
                    : 'bg-[#F7F5EE] border border-[#DFDBD1] text-[#4E544C] hover:text-[#242823]'
                }`}
                role="tab"
                aria-selected={activeSpaceTab === 'all'}
              >
                {t('Tutti gli Spazi', 'All Spaces')}
              </button>
              <button
                onClick={() => setActiveSpaceTab('bedrooms')}
                className={`text-xs px-4 py-1.5 rounded-full transition-all ${
                  activeSpaceTab === 'bedrooms'
                    ? 'bg-[#293A30] text-white shadow-xs font-medium'
                    : 'bg-[#F7F5EE] border border-[#DFDBD1] text-[#4E544C] hover:text-[#242823]'
                }`}
                role="tab"
                aria-selected={activeSpaceTab === 'bedrooms'}
              >
                {t('Camere da Letto (2)', 'Bedrooms (2)')}
              </button>
              <button
                onClick={() => setActiveSpaceTab('living')}
                className={`text-xs px-4 py-1.5 rounded-full transition-all ${
                  activeSpaceTab === 'living'
                    ? 'bg-[#293A30] text-white shadow-xs font-medium'
                    : 'bg-[#F7F5EE] border border-[#DFDBD1] text-[#4E544C] hover:text-[#242823]'
                }`}
                role="tab"
                aria-selected={activeSpaceTab === 'living'}
              >
                {t('Zona Giorno', 'Living Room')}
              </button>
              <button
                onClick={() => setActiveSpaceTab('terrace')}
                className={`text-xs px-4 py-1.5 rounded-full transition-all ${
                  activeSpaceTab === 'terrace'
                    ? 'bg-[#293A30] text-white shadow-xs font-medium'
                    : 'bg-[#F7F5EE] border border-[#DFDBD1] text-[#4E544C] hover:text-[#242823]'
                }`}
                role="tab"
                aria-selected={activeSpaceTab === 'terrace'}
              >
                {t('Terrazzino', 'Terrace')}
              </button>
            </div>
          </div>

          {/* Spaces Cards Grid with Real Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredSpaces.map((space) => (
              <div
                key={space.id}
                className="group bg-white border border-[#DFDBD1] rounded-xs overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Photo with zoom trigger */}
                <div
                  className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-stone-100"
                  onClick={() => onSelectPhoto(space.photoIndex)}
                >
                  <img
                    src={space.src}
                    alt={t(space.titleIt, space.titleEn)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#293A30] text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-xs">
                    {t(space.badgeIt, space.badgeEn)}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1">
                    <Maximize2 className="w-3 h-3" />
                    <span>{t('Ingrandisci', 'Zoom')}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-display text-2xl font-medium text-[#242823] mb-2.5">
                      {t(space.titleIt, space.titleEn)}
                    </h3>
                    <p className="text-sm text-[#4E544C] font-light leading-relaxed">
                      {t(space.descIt, space.descEn)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Children & Family Feature Highlight: Mansarda */}
          <div className="mt-12 p-6 sm:p-8 bg-[#F7F5EE] border border-[#DFDBD1] rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-[#293A30] text-white rounded-xs">
                <Bed className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif-display text-xl font-medium text-[#242823] mb-1">
                  {t('Camera Mansardata: Il Nido dei Più Piccoli', 'Attic Bedroom: A Cozy Nest for Kids')}
                </h4>
                <p className="text-xs sm:text-sm text-[#4E544C] max-w-2xl font-light">
                  {t(
                    'Come descritto dal proprietario, la camera ricavata nel sottotetto con travi in legno a vista esercita un fascino particolare sui bambini, trasformando il soggiorno in un avventura indimenticabile.',
                    'As highlighted by the host, the loft bedroom under wooden beams is a magical favorite for children, turning family vacation into a storybook adventure.'
                  )}
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectPhoto(3)} // photo_4.jpg
              className="text-xs uppercase tracking-wider font-semibold text-[#293A30] hover:underline whitespace-nowrap"
            >
              {t('Vedi Foto Mansarda →', 'View Attic Photo →')}
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
