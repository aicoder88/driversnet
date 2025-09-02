import React from 'react';
import { SlideProps } from './SlideTypes';
import SlideNavigation from '../shared/SlideNavigation';

const AgendaOverview: React.FC<SlideProps> = ({ 
  className = '', 
  isActive, 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext, 
  currentSlide, 
  totalSlides 
}) => {
  return (
    <section className={`min-h-screen flex flex-col space-y-16 ${className}`}>
      {/* Scroll Down Indicator - Above the fold */}
      <div className="text-center pt-8 pb-4">
        <div className="animate-bounce text-gray-500 dark:text-gray-400">
          <div className="text-sm mb-2">Scroll down to explore</div>
          <div className="text-2xl">⬇️</div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center space-y-8 flex-1 flex flex-col justify-center">
        <div className="space-y-6">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 text-white dark:text-gray-50 rounded-full font-semibold text-lg">
            Strategic Partnership Opportunity
          </div>
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent leading-tight">
            The Last Mile
            <br />
            <span className="text-blue-600 dark:text-blue-400">Solved</span>
          </h1>
          <p className="text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            How Driver Network Inc. delivers what others promise
            <br />
            <strong className="text-gray-900 dark:text-gray-100">1,000+ drivers. 19 markets. Zero excuses.</strong>
          </p>
        </div>
        
        {/* Visual Impact Stats */}
        <div className="flex justify-center items-center space-x-16 mt-16">
          <div className="text-center">
            <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
            <div className="text-xl text-gray-600 dark:text-gray-300">On-time delivery</div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 dark:text-green-400 mb-2">$50M+</div>
            <div className="text-xl text-gray-600 dark:text-gray-300">Value delivered</div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-purple-600 dark:text-purple-400 mb-2">0</div>
            <div className="text-xl text-gray-600 dark:text-gray-300">Major incidents</div>
          </div>
        </div>
      </div>
      
      {/* Problem Preview */}
      <div className="backdrop-blur-lg bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-16 rounded-3xl border border-red-200/50 dark:border-red-700/50 shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-800 dark:text-red-200 mb-6">
            The $2.8 Trillion Problem
          </h2>
          
          {/* Graphic illustration */}
          <div className="mb-8 mx-auto max-w-2xl">
            <div className="relative bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 p-8 rounded-2xl border border-red-300/50 dark:border-red-600/50">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="text-6xl">📦</div>
                <div className="text-4xl animate-pulse">💸</div>
                <div className="text-6xl">🚛</div>
                <div className="text-4xl animate-pulse">📉</div>
                <div className="text-6xl">😤</div>
              </div>
              <div className="text-sm text-red-700 dark:text-red-300 font-medium">
                Customer Orders → Lost Revenue → Failed Delivery → Declining Market Share → Frustrated Stakeholders
              </div>
            </div>
          </div>
          
          <p className="text-xl text-red-600 dark:text-red-300 max-w-3xl mx-auto">
            Every day, freight companies lose millions because they can't deliver what customers expect
          </p>
        </div>
        
        {/* Cost of Inaction Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white/80 dark:bg-gray-800/80 rounded-2xl border border-red-200 dark:border-red-700">
            <div className="text-5xl font-bold text-red-600 dark:text-red-400 mb-4">73%</div>
            <div className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Fail Within 2 Years</div>
            <div className="text-red-600 dark:text-red-300">Companies attempting to build logistics networks</div>
          </div>
          
          <div className="text-center p-8 bg-white/80 dark:bg-gray-800/80 rounded-2xl border border-red-200 dark:border-red-700">
            <div className="text-5xl font-bold text-red-600 dark:text-red-400 mb-4">18mo</div>
            <div className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Average Build Time</div>
            <div className="text-red-600 dark:text-red-300">While competitors capture market share</div>
          </div>
          
          <div className="text-center p-8 bg-white/80 dark:bg-gray-800/80 rounded-2xl border border-red-200 dark:border-red-700">
            <div className="text-5xl font-bold text-red-600 dark:text-red-400 mb-4">$2M+</div>
            <div className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Minimum Investment</div>
            <div className="text-red-600 dark:text-red-300">Before seeing any meaningful results</div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 pt-8 border-t border-red-200 dark:border-red-700">
          <p className="text-2xl font-bold text-red-800 dark:text-red-200 mb-6">
            But there's a different path...
          </p>
          <p className="text-lg text-red-600 dark:text-red-300 mb-8">
            One that doesn't require years of building, millions in investment, or prayers that it works
          </p>
          
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 text-white dark:text-gray-50 px-8 py-4 rounded-full font-semibold text-xl">
            <span>See the solution</span>
            <span className="text-2xl">→</span>
          </div>
        </div>
      </div>
      
      {/* Slide Navigation */}
      <SlideNavigation
        onPrevious={onPrevious}
        onNext={onNext}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
      />
    </section>
  );
};

export default AgendaOverview;