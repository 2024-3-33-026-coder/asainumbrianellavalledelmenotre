import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CONFIRMED_AMENITIES } from '../data/propertyData';
import { Sparkles, Check, ShieldCheck, Info } from 'lucide-react';

export const ComfortAmenities: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-[#F7F5EE] border-b border-[#DFDBD1]/60 text-[#242823]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-[#687258] text-xs uppercase tracking-[0.22em] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('TUTTO IL NECESSARIO', 'ALL THE ESSENTIALS')}</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-[#242823] mb-6">
            {t('I DETTAGLI CHE FANNO STARE BENE.', 'DETAILS CRAFTED FOR WELL-BEING.')}
          </h2>

          <p className="text-base sm:text-lg text-[#4E544C] font-light leading-relaxed">
            {t(
              "Nessun lusso artificiale o sfarzo superfluo. Abbiamo curato ogni dotazione reale per garantirti un soggiorno confortevole, intimo e libero da complicazioni.",
              "No synthetic luxury or superficial excess. We have curated genuine essentials to ensure your stay is comfortable, restful, and uncomplicated."
            )}
          </p>
        </div>

        {/* Confirmed Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONFIRMED_AMENITIES.map((amenity, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-[#DFDBD1] rounded-xs flex flex-col justify-between shadow-xs hover:border-[#747B62] transition-colors"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-[#FAF8F2] border border-[#DFDBD1] text-[#293A30] flex items-center justify-center mb-4">
                  <Check className="w-4 h-4 text-[#747B62]" />
                </div>
                <h3 className="font-serif-display text-xl font-medium text-[#242823] mb-2">
                  {t(amenity.titleIt, amenity.titleEn)}
                </h3>
                <p className="text-xs text-[#4E544C] font-light leading-relaxed">
                  {t(amenity.descIt, amenity.descEn)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Authenticity Pledge Callout (Anti-Slop / Anti-Fake amenities) */}
        <div className="mt-12 p-6 bg-[#FAF8F2] border border-[#DFDBD1] rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-xs text-[#4E544C]">
            <ShieldCheck className="w-5 h-5 text-[#293A30] shrink-0" />
            <div>
              <strong className="text-[#242823] font-semibold block">
                {t('Garanzia di Trasparenza & Informazioni Verificate', 'Authenticity & Verified Facts Pledge')}
              </strong>
              <span>
                {t(
                  'Tutte le informazioni, distanze e dotazioni riportate provengono direttamente dalla scheda del proprietario, senza promesse artificiali o servizi inesistenti.',
                  'All details, travel times, and amenities strictly stem from direct owner descriptions, with zero fabricated features or artificial claims.'
                )}
              </span>
            </div>
          </div>
          <div className="text-[11px] font-mono text-[#687258] bg-white px-3 py-1.5 border border-[#DFDBD1] rounded-xs shrink-0">
            CIN: IT054018C2BJ032622
          </div>
        </div>

      </div>
    </section>
  );
};
