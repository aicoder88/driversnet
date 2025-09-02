import React from 'react';

interface SlideNavigationProps {
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
  currentSlide?: number;
  totalSlides?: number;
  className?: string;
}

export const SlideNavigation: React.FC<SlideNavigationProps> = ({
  onPrevious,
  onNext,
  hasPrevious = true,
  hasNext = true,
  currentSlide,
  totalSlides,
  className = ''
}) => {
  return (
    <div className={`fixed bottom-6 left-0 right-0 z-50 px-6 ${className}`}>
      <div className="flex items-center justify-between">
        {/* Previous Button */}
        <button
          onClick={() => {
            console.log('Previous button clicked, hasPrevious:', hasPrevious);
            if (onPrevious) onPrevious();
          }}
          disabled={!hasPrevious}
          className={`flex items-center space-x-2 px-5 py-3 rounded-full font-semibold transition-all duration-200 bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg shadow-xl border-2 pointer-events-auto cursor-pointer ${
            hasPrevious
              ? 'border-gray-300/60 dark:border-gray-600/60 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 hover:shadow-2xl hover:scale-105 hover:border-gray-400/80 dark:hover:border-gray-500/80'
              : 'border-gray-200/40 dark:border-gray-700/40 text-gray-400 dark:text-gray-500 cursor-not-allowed pointer-events-none'
          }`}
          title="Previous slide (←)"
        >
          <span className="text-lg">←</span>
          <span className="hidden sm:inline text-base">Previous</span>
        </button>

        {/* Slide Counter */}
        {currentSlide && totalSlides && (
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-full px-5 py-3 shadow-xl border-2 border-gray-300/60 dark:border-gray-600/60">
            <div className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              {currentSlide} / {totalSlides}
            </div>
          </div>
        )}

        {/* Next Button */}
        <button
          onClick={() => {
            console.log('Next button clicked, hasNext:', hasNext);
            if (onNext) onNext();
          }}
          disabled={!hasNext}
          className={`flex items-center space-x-2 px-5 py-3 rounded-full font-semibold transition-all duration-200 backdrop-blur-lg shadow-xl border-2 pointer-events-auto cursor-pointer ${
            hasNext
              ? 'bg-blue-600/95 hover:bg-blue-700 text-white border-blue-500/60 hover:shadow-2xl hover:scale-105 hover:border-blue-400'
              : 'bg-gray-200/95 dark:bg-gray-700/95 border-gray-300/40 dark:border-gray-600/40 text-gray-400 dark:text-gray-500 cursor-not-allowed pointer-events-none'
          }`}
          title="Next slide (→)"
        >
          <span className="hidden sm:inline text-base">Next</span>
          <span className="text-lg">→</span>
        </button>
      </div>

      {/* Scroll to top hint */}
      <div className="text-center mt-3">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Use keyboard arrows, space, or swipe to navigate
        </div>
      </div>
    </div>
  );
};

export default SlideNavigation;