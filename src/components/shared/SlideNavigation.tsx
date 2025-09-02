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
    <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 ${className}`}>
      <div className="flex items-center space-x-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-full px-6 py-3 shadow-xl border border-gray-200/50 dark:border-gray-600/50">
        {/* Previous Button */}
        <button
          onClick={onPrevious}
          disabled={!hasPrevious}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
            hasPrevious
              ? 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200'
              : 'bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed'
          }`}
          title="Previous slide (←)"
        >
          <span className="text-lg">←</span>
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Slide Counter */}
        {currentSlide && totalSlides && (
          <div className="text-sm font-medium text-gray-600 dark:text-gray-300 px-3">
            {currentSlide} / {totalSlides}
          </div>
        )}

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={!hasNext}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
            hasNext
              ? 'bg-blue-600 hover:bg-blue-700 text-white dark:text-white'
              : 'bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed'
          }`}
          title="Next slide (→)"
        >
          <span className="hidden sm:inline">Next</span>
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