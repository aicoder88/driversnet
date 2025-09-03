import React, { Suspense, lazy, useMemo } from 'react';
import { SlideProps } from '../slides/SlideTypes';

// Lazy load all slide components
const slideComponents = {
  'agenda-overview': lazy(() => import('../slides/AgendaOverview')),
  'executive-summary': lazy(() => import('../slides/ExecutiveSummary')),
  'company-evolution': lazy(() => import('../slides/CompanyEvolution')),
  'service-divisions': lazy(() => import('../slides/ServiceDivisions')),
  'performance-metrics': lazy(() => import('../slides/PerformanceMetrics')),
  'case-study-instacart': lazy(() => import('../slides/CaseStudyInstacart')),
  'case-study-tesla': lazy(() => import('../slides/CaseStudyTesla')),
  'case-study-medical': lazy(() => import('../slides/CaseStudyMedical')),
  'case-study-bmw': lazy(() => import('../slides/CaseStudyBmw')),
  'driver-excellence': lazy(() => import('../slides/DriverExcellence')),
  'technology-integration': lazy(() => import('../slides/TechnologyIntegration')),
  'client-portfolio': lazy(() => import('../slides/ClientPortfolio')),
  'rapid-deployment': lazy(() => import('../slides/RapidDeployment')),
  'geographic-coverage': lazy(() => import('../slides/GeographicCoverage')),
  'partnership-proposal': lazy(() => import('../slides/PartnershipProposal')),
  'competitive-advantage': lazy(() => import('../slides/CompetitiveAdvantage')),
  'service-integration': lazy(() => import('../slides/ServiceIntegration')),
  'roi-projection': lazy(() => import('../slides/RoiProjection')),
  'next-steps': lazy(() => import('../slides/NextSteps'))
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
    const baseClassName = 'slide-content presentation-slide';
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
      <SlideComponent 
        {...props} 
        className={slideClassName}
        onNext={props.onNext}
        onPrevious={props.onPrevious}
        hasPrevious={props.hasPrevious}
        hasNext={props.hasNext}
        currentSlide={props.currentSlide}
        totalSlides={props.totalSlides}
      />
    </Suspense>
  );
};