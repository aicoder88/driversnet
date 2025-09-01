import React from 'react';
import { SlideProps } from './SlideTypes';

export const PerformanceMetrics: React.FC<SlideProps> = ({ className = '' }) => {
  return (
    <section className={`min-h-screen flex flex-col justify-center space-y-20 ${className}`}>
      {/* Proof Hero */}
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white dark:text-gray-50 rounded-full font-semibold text-lg">
            Battle-Tested Results
          </div>
          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            Numbers
            <br />
            <span className="text-indigo-600 dark:text-indigo-400">Don't Lie</span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            When Fortune 500 companies trust us with their most critical deliveries,
            <br />
            <strong className="text-indigo-600 dark:text-indigo-400">the proof is in the performance</strong>
          </p>
        </div>
      </div>
      
      {/* Social Proof Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 text-center hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
          <div className="text-7xl font-bold text-green-600 dark:text-green-400 mb-4">100%</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Perfect Delivery</div>
          <div className="text-gray-600 dark:text-gray-300 mb-4">6 Markets, 18 Months</div>
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full">
            <span className="text-3xl">🥕</span>
            <span className="text-green-800 dark:text-green-200 font-semibold">Instacart</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 text-center hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
          <div className="text-7xl font-bold text-blue-600 dark:text-blue-400 mb-4">99.9%</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Damage-Free</div>
          <div className="text-gray-600 dark:text-gray-300 mb-4">$2.5M+ Vehicles</div>
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
            <span className="text-3xl">⚡</span>
            <span className="text-blue-800 dark:text-blue-200 font-semibold">Tesla</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 text-center hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
          <div className="text-7xl font-bold text-purple-600 dark:text-purple-400 mb-4">24mo</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Zero Incidents</div>
          <div className="text-gray-600 dark:text-gray-300 mb-4">Critical Medical</div>
          <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full">
            <span className="text-3xl">🏥</span>
            <span className="text-purple-800 dark:text-purple-200 font-semibold">SDSRX</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 text-center hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
          <div className="text-7xl font-bold text-orange-600 dark:text-orange-400 mb-4">$50M+</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Value Delivered</div>
          <div className="text-gray-600 dark:text-gray-300 mb-4">Premium Cargo</div>
          <div className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-full">
            <span className="text-3xl">🚗</span>
            <span className="text-orange-800 dark:text-orange-200 font-semibold">BMW</span>
          </div>
        </div>
      </div>
      
      {/* Interactive Performance Calculator */}
      <div className="bg-white dark:bg-gray-800 p-16 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            What This Means for You
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Calculate your risk reduction with our proven performance
          </p>
        </div>
        
        {/* Risk vs Reward Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-red-600 dark:text-red-400 text-center mb-8">Build Internal Network</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <span className="text-red-800 dark:text-red-200 font-semibold">Time to Market</span>
                <span className="text-red-600 dark:text-red-400 font-bold">18+ months</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <span className="text-red-800 dark:text-red-200 font-semibold">Success Rate</span>
                <span className="text-red-600 dark:text-red-400 font-bold">27%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <span className="text-red-800 dark:text-red-200 font-semibold">Investment Required</span>
                <span className="text-red-600 dark:text-red-400 font-bold">$2M+</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <span className="text-red-800 dark:text-red-200 font-semibold">Reliability Risk</span>
                <span className="text-red-600 dark:text-red-400 font-bold">HIGH</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-green-600 dark:text-green-400 text-center mb-8">Partner with Us</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <span className="text-green-800 dark:text-green-200 font-semibold">Time to Market</span>
                <span className="text-green-600 dark:text-green-400 font-bold">30 days</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <span className="text-green-800 dark:text-green-200 font-semibold">Success Rate</span>
                <span className="text-green-600 dark:text-green-400 font-bold">100%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <span className="text-green-800 dark:text-green-200 font-semibold">Investment Required</span>
                <span className="text-green-600 dark:text-green-400 font-bold">$0</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <span className="text-green-800 dark:text-green-200 font-semibold">Reliability Risk</span>
                <span className="text-green-600 dark:text-green-400 font-bold">NONE</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            The Choice Is Clear
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Why gamble with an 18-month build when you can leverage 12 years of proven infrastructure?
          </p>
          
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white dark:text-gray-50 px-10 py-6 rounded-full font-semibold text-2xl">
            <span>Let's talk partnership</span>
            <span className="text-3xl">🤝</span>
          </div>
        </div>
      </div>
    </section>
  );
};