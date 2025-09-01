import React, { Suspense, lazy, ComponentType } from 'react';
import { SlideProps } from '../slides/SlideTypes';

interface LazySlideProps extends SlideProps {
  slideId: string;
  activeSlideId: string;
}

// Slide components mapping for lazy loading
const slideComponents = {
  'agenda-overview': lazy(() => import('../slides/AgendaOverview').then(m => ({ default: m.AgendaOverview }))),
  // Additional slides will be added here as they're created
};

const SlideLoadingFallback: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      <p className="text-gray-600 dark:text-gray-300">Loading slide...</p>
    </div>
  </div>
);

export const LazySlide: React.FC<LazySlideProps> = ({
  slideId,
  activeSlideId,
  ...props
}) => {
  // Only render if this slide is active
  if (slideId !== activeSlideId) {
    return null;
  }

  const SlideComponent = slideComponents[slideId as keyof typeof slideComponents];

  if (!SlideComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">Slide component not found: {slideId}</p>
      </div>
    );
  }

  return (
    <Suspense fallback={<SlideLoadingFallback />}>
      <SlideComponent {...props} />
    </Suspense>
  );
};