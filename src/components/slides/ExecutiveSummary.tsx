
import React from 'react';
import { SlideProps } from './SlideTypes';

const ExecutiveSummary: React.FC<SlideProps> = ({ 
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
    <section className={`min-h-screen flex flex-col justify-center space-y-20 ${className}`}>
      {/* Problem Statement Hero */}
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-700 dark:to-orange-700 text-white dark:text-gray-50 rounded-full font-semibold text-lg content-fade-in">
            The Brutal Reality
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-gray-100 leading-tight content-fade-in content-stagger-1">
            Everyone Wants
            <br />
            <span className="text-red-600 dark:text-red-400">Everything</span>
            <br />
            <span className="text-gray-700 dark:text-gray-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Yesterday</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed px-4 content-fade-in content-stagger-2">
            Customers demand same-day delivery, zero damage, perfect tracking, 
            and prices that make no economic sense
            <br />
            <strong className="text-red-600 dark:text-red-400">Welcome to modern logistics</strong>
          </p>
        </div>
        
        {/* Program Highlights (Concise) */}
        <div className="flex justify-center mt-2">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
              <span>🗺️</span>
              <span>13+ cities (US & Canada)</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
              <span>⚡</span>
              <span>Hundreds/day • 24–48 hr notice</span>
            </span>
          </div>
        </div>

        {/* Interactive Pain Point Calculator */}
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto content-fade-in content-stagger-3">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 sm:mb-8 text-center">
            Calculate Your Reality Check
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="space-y-4 card-stagger content-stagger-4">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">Customer Expectations</div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600 dark:text-blue-400">↑ 400%</div>
              <div className="text-gray-600 dark:text-gray-300">Since 2020</div>
            </div>
            <div className="space-y-4 card-stagger content-stagger-5">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">Infrastructure Costs</div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-600 dark:text-red-400">↑ 250%</div>
              <div className="text-gray-600 dark:text-gray-300">Same period</div>
            </div>
            <div className="space-y-4 card-stagger content-stagger-6">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">Your Profit Margin</div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-600 dark:text-orange-400">↓ 60%</div>
              <div className="text-gray-600 dark:text-gray-300">If you're lucky</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* The Math Doesn't Work */}
      <div className="backdrop-blur-lg bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl border border-red-200/50 dark:border-red-700/50 shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-800 dark:text-red-200 mb-6">
            The Math Doesn't Work
          </h2>
          <p className="text-lg sm:text-xl text-red-600 dark:text-red-300 max-w-3xl mx-auto px-4">
            Here's what happens when companies try to solve this themselves
          </p>
        </div>
        
        {/* Failure Metrics with Visual Impact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { 
              label: 'Companies That Fail', 
              value: '73%', 
              description: 'Within first 2 years of expansion',
              icon: '💀',
              color: 'red'
            },
            { 
              label: 'Average Build Time', 
              value: '18mo', 
              description: 'To establish reliable network',
              icon: '⏱️',
              color: 'orange'
            },
            { 
              label: 'Infrastructure Cost', 
              value: '$2M+', 
              description: 'Minimum viable network investment',
              icon: '💸',
              color: 'yellow'
            },
            { 
              label: 'Market Share Lost', 
              value: '45%', 
              description: 'While building internal capabilities',
              icon: '📉',
              color: 'red'
            }
          ].map((metric, index) => (
            <div 
              key={index} 
              className="group text-center bg-white/90 dark:bg-gray-800/90 p-4 sm:p-6 md:p-8 rounded-2xl border border-red-200 dark:border-red-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4">{metric.icon}</div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 dark:text-red-400 mb-3">
                {metric.value}
              </div>
              <div className="font-bold mb-2 text-base sm:text-lg text-gray-800 dark:text-gray-200">{metric.label}</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">{metric.description}</div>
            </div>
          ))}
        </div>
        
        {/* The Bottom Line */}
        <div className="text-center mt-16 pt-12 border-t border-red-200 dark:border-red-700">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-800 dark:text-red-200 mb-6">
            The Bottom Line
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl text-red-600 dark:text-red-300 max-w-4xl mx-auto font-light leading-relaxed px-4">
            Building a logistics network from scratch is like 
            <strong className="font-bold"> reinventing the wheel </strong>
            while your competitors are driving Formula 1 cars
          </p>
          
          <button 
            onClick={onNext}
            className="mt-8 sm:mt-12 inline-flex items-center space-x-4 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 text-white dark:text-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-lg sm:text-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
          >
            <span>But what if there was another way?</span>
            <span className="text-2xl">🤔</span>
          </button>
        </div>
      </div>

      {/* Slide Navigation */}
    </section>
  );
};

export default ExecutiveSummary;
