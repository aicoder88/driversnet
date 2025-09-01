import React, { Suspense, lazy, useMemo } from 'react';
import { SlideProps } from '../slides/SlideTypes';

// Lazy load all slide components
const slideComponents = {
  'agenda-overview': lazy(() => import('../slides/AgendaOverview').then(m => ({ default: m.AgendaOverview }))),
  'performance-metrics': lazy(() => import('../slides/PerformanceMetrics').then(m => ({ default: m.PerformanceMetrics }))),
  // Additional slides will be added here as they're created
};

interface SlideManagerProps extends SlideProps {
  activeSlideId: string;
  slideTransition: string;
  fallbackToOriginal?: boolean;
}

const SlideLoadingFallback: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      <p className="text-gray-600 dark:text-gray-300">Loading slide...</p>
    </div>
  </div>
);

const SlideNotFound: React.FC<{ slideId: string }> = ({ slideId }) => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="text-6xl">🚧</div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Slide Under Construction</h2>
      <p className="text-gray-600 dark:text-gray-300">
        The slide "{slideId}" hasn't been split into a component yet.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        This is part of the performance optimization process.
      </p>
    </div>
  </div>
);

export const SlideManager: React.FC<SlideManagerProps> = ({
  activeSlideId,
  slideTransition,
  fallbackToOriginal = true,
  ...props
}) => {
  const SlideComponent = useMemo(() => {
    return slideComponents[activeSlideId as keyof typeof slideComponents];
  }, [activeSlideId]);

  const slideClassName = useMemo(() => {
    const baseClassName = 'slide-content';
    const transitionClassName = slideTransition ? `transition-${slideTransition}` : '';
    return `${baseClassName} ${transitionClassName} ${props.className || ''}`.trim();
  }, [slideTransition, props.className]);

  // If no component exists and fallbackToOriginal is true, return null to let original content show
  if (!SlideComponent) {
    if (fallbackToOriginal) {
      return null;
    }
    return <SlideNotFound slideId={activeSlideId} />;
  }

  return (
    <Suspense fallback={<SlideLoadingFallback />}>
      <SlideComponent {...props} className={slideClassName} />
    </Suspense>
  );
};