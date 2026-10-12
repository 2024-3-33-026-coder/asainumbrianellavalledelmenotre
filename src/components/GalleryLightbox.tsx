import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROPERTY_PHOTOS } from '../data/propertyData';
import { PhotoItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera, Filter } from 'lucide-react';

interface GalleryLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  isOpen,
  onClose,
  initialIndex = 0
}) => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [activeCategory, setActiveCategory] = useState<'all' | 'spaces' | 'outdoor' | 'details' | 'territory'>('all');

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const filteredPhotos = activeCategory === 'all'
    ? PROPERTY_PHOTOS
    : PROPERTY_PHOTOS.filter(p => p.category === activeCategory);

  const currentPhoto = PROPERTY_PHOTOS[currentIndex] || PROPERTY_PHOTOS[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PROPERTY_PHOTOS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PROPERTY_PHOTOS.length) % PROPERTY_PHOTOS.length);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between select-none animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={t('Galleria fotografica', 'Photo Gallery')}
    >
      {/* Top Header Bar */}
      <div className="p-4 sm:p-6 flex items-center justify-between text-white border-b border-white/10">
        <div className="flex items-center space-x-3">
          <Camera className="w-5 h-5 text-stone-300" />
          <div>
            <span className="font-serif-display text-lg tracking-wider font-semibold block">
              {t('FOTOGRAFIE AUTENTICHE', 'AUTHENTIC PHOTOGRAPHY')}
            </span>
            <span className="text-xs text-stone-400 font-mono">
              {currentIndex + 1} / {PROPERTY_PHOTOS.length}
            </span>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="p-2 text-stone-300 hover:text-white rounded-xs bg-white/10 hover:bg-white/20 transition-colors"
          aria-label={t('Chiudi galleria', 'Close gallery')}
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Display Area */}
      <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 min-h-0">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-8 z-10 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 hover:scale-105 transition-all"
          aria-label={t('Foto precedente', 'Previous photo')}
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Current Photo Container */}
        <div className="max-w-5xl max-h-full flex flex-col items-center justify-center">
          <img
            src={currentPhoto.src}
            alt={t(currentPhoto.altIt, currentPhoto.altEn)}
            className="max-h-[70vh] max-w-full object-contain rounded-xs shadow-2xl"
          />
          <div className="mt-4 text-center text-stone-200 max-w-xl">
            <h4 className="font-serif-display text-xl sm:text-2xl font-medium text-white">
              {t(currentPhoto.titleIt, currentPhoto.titleEn)}
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 font-light mt-1">
              {t(currentPhoto.altIt, currentPhoto.altEn)}
            </p>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-8 z-10 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 hover:scale-105 transition-all"
          aria-label={t('Foto successiva', 'Next photo')}
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>

      {/* Bottom Thumbnails Navigation */}
      <div className="p-4 bg-black/60 border-t border-white/10 overflow-x-auto">
        <div className="flex items-center justify-center space-x-2 min-w-max mx-auto px-4">
          {PROPERTY_PHOTOS.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xs overflow-hidden shrink-0 border-2 transition-all ${
                index === currentIndex
                  ? 'border-white scale-105 shadow-md'
                  : 'border-transparent opacity-50 hover:opacity-100'
              }`}
            >
              <img
                src={photo.src}
                alt={t(photo.titleIt, photo.titleEn)}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
