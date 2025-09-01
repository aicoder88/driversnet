import React, { useMemo } from 'react';
import { SlideManager } from './SlideManager';
import { SlideProps } from '../slides/SlideTypes';

interface SlideRendererProps extends SlideProps {
  activeSlideId: string;
  slideTransition: string;
  children: React.ReactNode; // Original slide content as fallback
}

// List of slides that have been converted to components
const convertedSlides = new Set([
  'agenda-overview',
  'executive-summary',
  'company-evolution',
  'service-divisions',
  'performance-metrics',
  'case-study-instacart',
  'case-study-tesla',
  'case-study-medical',
  'case-study-bmw',
  'driver-excellence',
  'technology-integration',
  'client-portfolio',
  'rapid-deployment',
  'geographic-coverage',
  'partnership-proposal',
  'competitive-advantage',
  'service-integration',
  'roi-projection',
  'next-steps'
]);

export const SlideRenderer: React.FC<SlideRendererProps> = ({
  activeSlideId,
  slideTransition,
  children,
  ...props
}) => {
  const isConverted = useMemo(() => {
    return convertedSlides.has(activeSlideId);
  }, [activeSlideId]);

  if (isConverted) {
    return (
      <SlideManager
        activeSlideId={activeSlideId}
        slideTransition={slideTransition}
        fallbackToOriginal={false}
        {...props}
      />
    );
  }

  // Return original content for non-converted slides
  return <>{children}</>;
};