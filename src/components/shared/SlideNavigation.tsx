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
  console.log('SlideNavigation props:', { hasPrevious, hasNext, currentSlide, totalSlides, onPrevious: !!onPrevious, onNext: !!onNext });
  
  return (
    <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 ${className}`}>
      <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border p-4">
        {/* Previous Button */}
        <button
          onClick={() => {
            console.log('Previous button clicked, hasPrevious:', hasPrevious);
            if (onPrevious) {
              console.log('Calling onPrevious');
              onPrevious();
            }
          }}
          className={`px-4 py-2 rounded ${
            hasPrevious 
              ? 'bg-blue-500 text-white hover:bg-blue-600' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Previous
        </button>

        {/* Slide Counter */}
        <div className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          {currentSlide} / {totalSlides}
        </div>

        {/* Next Button */}
        <button
          onClick={() => {
            console.log('Next button clicked, hasNext:', hasNext);
            if (onNext) {
              console.log('Calling onNext');
              onNext();
            }
          }}
          className={`px-4 py-2 rounded ${
            hasNext 
              ? 'bg-blue-500 text-white hover:bg-blue-600' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SlideNavigation;