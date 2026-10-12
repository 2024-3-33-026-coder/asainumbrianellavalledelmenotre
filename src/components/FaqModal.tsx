import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FAQS } from '../data/propertyData';
import { X, HelpCircle } from 'lucide-react';

interface FaqModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FaqModal: React.FC<FaqModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={t('Domande frequenti', 'Frequently Asked Questions')}
    >
      <div className="bg-[#FAF8F2] border border-[#DFDBD1] w-full max-w-2xl rounded-xs shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-[#DFDBD1] flex items-center justify-between bg-white">
          <div className="flex items-center space-x-2.5">
            <HelpCircle className="w-5 h-5 text-[#293A30]" />
            <h3 className="font-serif-display text-2xl font-medium text-[#242823]">
              {t('Domande Frequenti (FAQ)', 'Frequently Asked Questions')}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#687258] hover:text-[#242823] rounded-xs"
            aria-label={t('Chiudi', 'Close')}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {FAQS.map((faq, index) => (
            <div key={index} className="border-b border-[#DFDBD1]/60 pb-5 last:border-0 last:pb-0">
              <h4 className="font-serif-display text-xl font-medium text-[#242823] mb-1.5">
                {t(faq.qIt, faq.qEn)}
              </h4>
              <p className="text-xs sm:text-sm text-[#4E544C] font-light leading-relaxed">
                {t(faq.aIt, faq.aEn)}
              </p>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F7F5EE] border-t border-[#DFDBD1] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#293A30] text-[#F7F5EE] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#1E2B23]"
          >
            {t('Chiudi', 'Close')}
          </button>
        </div>
      </div>
    </div>
  );
};
