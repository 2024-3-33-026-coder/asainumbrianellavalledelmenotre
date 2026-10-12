import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AVAILABILITY_PERIODS } from '../data/propertyData';
import { Calendar, CheckCircle2, Clock, Sparkles, ArrowRight } from 'lucide-react';

interface AvailabilityCalendarProps {
  onSelectPeriod: (checkIn: string, checkOut: string) => void;
  onOpenBooking: () => void;
}

export const AvailabilityCalendar: React.FC<AvailabilityCalendarProps> = ({
  onSelectPeriod,
  onOpenBooking
}) => {
  const { t } = useLanguage();

  const handlePeriodClick = (periodId: string) => {
    if (periodId === 'autumn-2026') {
      onSelectPeriod('2026-11-09', '2026-11-22');
    } else if (periodId === 'december-2026') {
      onSelectPeriod('2026-12-05', '2026-12-12');
    } else if (periodId === 'holidays-2026') {
      onSelectPeriod('2026-12-24', '2027-01-02');
    } else {
      onSelectPeriod('2027-04-10', '2027-04-17');
    }
  };

  return (
    <section id="disponibilita" className="py-20 sm:py-28 bg-[#F7F5EE] border-b border-[#DFDBD1]/60 text-[#242823]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-[#687258] text-xs uppercase tracking-[0.22em] font-medium mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>{t('IL TUO PROSSIMO SOGGIORNO', 'YOUR NEXT GETAWAY')}</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-[#242823] mb-4">
            {t('QUANDO VUOI PARTIRE?', 'WHEN WOULD YOU LIKE TO ARRIVE?')}
          </h2>

          <p className="text-base text-[#4E544C] font-light max-w-2xl mx-auto leading-relaxed">
            {t(
              "Consulta le finestre di disponibilità comunicate direttamente dal proprietario. Seleziona il periodo desiderato per preparare la tua richiesta senza intermediari.",
              "Review the seasonal availability windows communicated directly by the host. Choose your preferred dates to initiate a direct booking inquiry."
            )}
          </p>
        </div>

        {/* Periods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {AVAILABILITY_PERIODS.map((period) => {
            const isConfirmed = period.statusType === 'available';

            return (
              <div
                key={period.id}
                className={`p-6 sm:p-8 rounded-xs border transition-all duration-200 flex flex-col justify-between ${
                  isConfirmed
                    ? 'bg-white border-[#293A30] shadow-md ring-1 ring-[#293A30]/10'
                    : 'bg-white border-[#DFDBD1] shadow-xs hover:border-[#747B62]'
                }`}
              >
                <div>
                  {/* Status header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#687258]">
                      {t(period.titleIt, period.titleEn)}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex items-center space-x-1 ${
                        isConfirmed
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-[#FAF8F2] text-[#4E544C] border border-[#DFDBD1]'
                      }`}
                    >
                      {isConfirmed ? (
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <Clock className="w-3 h-3 text-[#747B62]" />
                      )}
                      <span>{t(period.statusIt, period.statusEn)}</span>
                    </span>
                  </div>

                  {/* Dates Display */}
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#242823] mb-3">
                    {t(period.datesIt, period.datesEn)}
                  </h3>

                  {/* Notes */}
                  <p className="text-xs sm:text-sm text-[#4E544C] font-light leading-relaxed mb-6">
                    {t(period.notesIt, period.notesEn)}
                  </p>
                </div>

                {/* Action button */}
                <button
                  type="button"
                  onClick={() => handlePeriodClick(period.id)}
                  className={`w-full py-3 px-4 rounded-xs text-xs uppercase tracking-[0.12em] font-semibold flex items-center justify-center space-x-2 transition-all ${
                    isConfirmed
                      ? 'bg-[#293A30] text-[#F7F5EE] hover:bg-[#1E2B23]'
                      : 'bg-[#F7F5EE] border border-[#DFDBD1] text-[#293A30] hover:bg-[#FAF8F2]'
                  }`}
                >
                  <span>{t('Richiedi questo periodo', 'Inquire for this period')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Dynamic Booking Clarification Note */}
        <div className="p-6 bg-[#FAF8F2] border border-[#DFDBD1] rounded-xs text-center text-xs text-[#4E544C] max-w-2xl mx-auto">
          <span>
            {t(
              'Tutte le richieste vengono verificate personalmente dal proprietario in base al calendario effettivo. Nessun pagamento anticipato richiesto sul sito web.',
              'All reservation inquiries are verified directly by the owner against the actual schedule. Zero online pre-payments or hidden booking commissions.'
            )}
          </span>
        </div>

      </div>
    </section>
  );
};
