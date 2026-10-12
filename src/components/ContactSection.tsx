import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROPERTY_INFO } from '../data/propertyData';
import { Phone, Mail, MapPin, MessageCircle, Navigation, ExternalLink, ShieldCheck, Car } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { lang, t } = useLanguage();

  const whatsappUrl = `https://wa.me/${PROPERTY_INFO.phoneClean}?text=${encodeURIComponent(
    lang === 'it'
      ? 'Buongiorno, vorrei maggiori informazioni su Casa in Umbria (Frazione Scopoli).'
      : 'Hello, I would like more information about Casa in Umbria (Scopoli).'
  )}`;

  return (
    <section id="contatti" className="py-20 sm:py-28 bg-[#F7F5EE] border-b border-[#DFDBD1]/60 text-[#242823]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-[#687258] text-xs uppercase tracking-[0.22em] font-medium mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{t('PARLIAMONE', 'GET IN TOUCH')}</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-[#242823] mb-6">
            {t('OGNI SOGGIORNO COMINCIA CON UN MESSAGGIO.', 'EVERY MEMORABLE STAY BEGINS WITH A NOTE.')}
          </h2>

          <p className="text-base sm:text-lg text-[#4E544C] font-light leading-relaxed">
            {t(
              "Siamo a tua disposizione per qualsiasi curiosità sul borgo di Scopoli, consigli sui sentieri o per verificare le date del tuo soggiorno insieme al tuo animale.",
              "We are at your service for any questions regarding Scopoli village, trail advice, or checking date options for you and your pets."
            )}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: WhatsApp & Phone */}
          <div className="p-6 sm:p-8 bg-white border border-[#DFDBD1] rounded-xs shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#FAF8F2] border border-[#DFDBD1] text-[#293A30] flex items-center justify-center mb-4">
                <Phone className="w-4 h-4 text-[#747B62]" />
              </div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#687258] block mb-1">
                {t('Telefono & WhatsApp', 'Phone & WhatsApp')}
              </span>
              <div className="font-serif-display text-2xl font-medium text-[#242823] mb-2">
                {PROPERTY_INFO.phone}
              </div>
              <p className="text-xs text-[#4E544C] font-light leading-relaxed mb-6">
                {t('Rispondiamo tempestivamente a messaggi e chiamate dirette.', 'We respond promptly to direct messages and calls.')}
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 px-4 rounded-xs text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${PROPERTY_INFO.phoneClean}`}
                className="w-full border border-[#DFDBD1] bg-[#FAF8F2] hover:bg-white text-[#293A30] py-2.5 px-4 rounded-xs text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t('Chiama Ora', 'Call Now')}</span>
              </a>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="p-6 sm:p-8 bg-white border border-[#DFDBD1] rounded-xs shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#FAF8F2] border border-[#DFDBD1] text-[#293A30] flex items-center justify-center mb-4">
                <Mail className="w-4 h-4 text-[#747B62]" />
              </div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#687258] block mb-1">
                {t('Posta Elettronica', 'Direct Email')}
              </span>
              <div className="font-serif-display text-xl sm:text-2xl font-medium text-[#242823] mb-2 break-all">
                {PROPERTY_INFO.email}
              </div>
              <p className="text-xs text-[#4E544C] font-light leading-relaxed mb-6">
                {t('Per richieste dettagliate, preventivi per soggiorni lunghi o festività.', 'For detailed requests, extended stay quotes, or holiday inquiries.')}
              </p>
            </div>

            <a
              href={`mailto:${PROPERTY_INFO.email}`}
              className="w-full bg-[#293A30] text-[#F7F5EE] hover:bg-[#1E2B23] py-2.5 px-4 rounded-xs text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-2 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{t('Invia Email', 'Send Email')}</span>
            </a>
          </div>

          {/* Card 3: Location & CIN */}
          <div className="p-6 sm:p-8 bg-white border border-[#DFDBD1] rounded-xs shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#FAF8F2] border border-[#DFDBD1] text-[#293A30] flex items-center justify-center mb-4">
                <MapPin className="w-4 h-4 text-[#747B62]" />
              </div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#687258] block mb-1">
                {t('Indirizzo & Codice Struttura', 'Address & Property Code')}
              </span>
              <div className="font-serif-display text-xl font-medium text-[#242823] mb-1">
                {PROPERTY_INFO.address.village}
              </div>
              <div className="text-xs text-[#4E544C] mb-2">
                06034 Foligno (PG), Umbria
              </div>
              <div className="text-[11px] font-mono text-[#687258] bg-[#FAF8F2] border border-[#DFDBD1] px-2 py-1 rounded-xs inline-block mb-4">
                CIN: {PROPERTY_INFO.cin}
              </div>
            </div>

            <a
              href={PROPERTY_INFO.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-[#DFDBD1] bg-[#FAF8F2] hover:bg-white text-[#293A30] py-2.5 px-4 rounded-xs text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-2 transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>{t('Apri su Google Maps', 'Open in Google Maps')}</span>
            </a>
          </div>

        </div>

        {/* How to Reach Us / Driving Directions */}
        <div className="p-6 sm:p-8 bg-white border border-[#DFDBD1] rounded-xs">
          <div className="flex items-center space-x-3 mb-4">
            <Car className="w-5 h-5 text-[#747B62]" />
            <h3 className="font-serif-display text-2xl font-medium text-[#242823]">
              {t('Come Raggiungere Scopoli', 'How to Reach Scopoli')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#4E544C] font-light leading-relaxed">
            <div>
              <strong className="text-[#242823] font-semibold block mb-1">
                {t('In Automobile (da Foligno)', 'By Car (from Foligno)')}
              </strong>
              <span>
                {t(
                  'Da Foligno prendere la SS77 della Val di Chienti in direzione Colfiorito/Marche e seguire le indicazioni per Scopoli. Tempo di percorrenza: circa 10 minuti.',
                  'From Foligno follow SS77 Val di Chienti highway toward Colfiorito/Marche and follow signs for Scopoli. Travel time: ~10 minutes.'
                )}
              </span>
            </div>

            <div>
              <strong className="text-[#242823] font-semibold block mb-1">
                {t('Da Roma / Firenze / Ancona', 'From Rome / Florence / Ancona')}
              </strong>
              <span>
                {t(
                  'Facilmente raggiungibile: Roma (~1h 45m), Firenze (~2h 15m), Ancona/Riviera del Conero (~1h 20m).',
                  'Convenient highway access: Rome (~1h 45m), Florence (~2h 15m), Adriatic coast/Ancona (~1h 20m).'
                )}
              </span>
            </div>

            <div>
              <strong className="text-[#242823] font-semibold block mb-1">
                {t('In Treno', 'By Train')}
              </strong>
              <span>
                {t(
                  'Stazione principale di Foligno (snodo ferroviario collegato con Roma e Firenze). Da lì auto o taxi locale (10 min).',
                  'Main rail hub in Foligno (direct lines from Rome Termini & Florence). 10-minute taxi or local drive from station.'
                )}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
