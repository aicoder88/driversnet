import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { OptimizedChart } from '../presentation/OptimizedChart';
import { SlideProps } from './SlideTypes';

const PerformanceMetrics: React.FC<SlideProps> = ({ 
  className = '', 
  isActive, 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext, 
  currentSlide, 
  totalSlides 
}) => {
  const performanceData = [
    { name: 'On-Time Delivery', value: 100, color: '#10B981' },
    { name: 'Damage-Free Rate', value: 99.9, color: '#3B82F6' },
    { name: 'Customer Satisfaction', value: 98.5, color: '#8B5CF6' },
    { name: 'Driver Retention', value: 94.2, color: '#F59E0B' }
  ];

  const valueMetrics = [
    { label: 'Total Value Delivered', value: '$52.7M', icon: '💰', description: 'Without a single major incident' },
    { label: 'Zero Tolerance Events', value: '0', icon: '🛡️', description: '18+ months of perfect safety' },
    { label: 'Client Retention Rate', value: '100%', icon: '🤝', description: 'Every major client renewed' },
    { label: 'Service Availability', value: '99.98%', icon: '⚡', description: '24/7/365 operations' }
  ];

  const industryComparison = [
    { metric: 'On-Time Delivery', us: 100, industry: 85, difference: '+15%' },
    { metric: 'Safety Record', us: 99.9, industry: 92.3, difference: '+7.6%' },
    { metric: 'Client Satisfaction', us: 98.5, industry: 78.2, difference: '+20.3%' },
    { metric: 'Network Reliability', us: 99.98, industry: 89.4, difference: '+10.6%' }
  ];

  return (
    <section className={`min-h-screen flex flex-col justify-center space-y-20 ${className}`}>
      {/* Hero Section */}
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 text-white dark:text-gray-50 rounded-full font-semibold text-lg">
            Performance That Matters
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            Numbers
            <br />
            <span className="text-green-600 dark:text-green-400">Don't Lie</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed px-4">
            While others make promises, we deliver measurable results
            <br />
            <strong className="text-green-600 dark:text-green-400">Every. Single. Day.</strong>
          </p>
        </div>
      </div>

      {/* Core Performance Metrics */}
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Core Performance Metrics
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-4">
            The metrics that define excellence in logistics
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {performanceData.map((metric, index) => (
            <div 
              key={index}
              className="text-center bg-gray-50 dark:bg-gray-700 p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                style={{ color: metric.color }}
              >
                {metric.value}%
              </div>
              <div className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {metric.name}
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div 
                  className="h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${metric.value}%`, 
                    backgroundColor: metric.color 
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Value Delivered Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {valueMetrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 sm:p-8 rounded-2xl border border-blue-200 dark:border-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-4">{metric.icon}</div>
              <div className="text-2xl sm:text-3xl md:text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                {metric.value}
              </div>
              <div className="font-bold mb-2 text-base sm:text-lg text-gray-800 dark:text-gray-200">
                {metric.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Comparison */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl border border-green-200 dark:border-green-700 shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 dark:text-green-200 mb-6">
            Industry Benchmark Comparison
          </h2>
          <p className="text-xl text-green-600 dark:text-green-300">
            We don't just meet industry standards - we redefine them
          </p>
        </div>

        <div className="space-y-8">
          {industryComparison.map((item, index) => (
            <div key={index} className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {item.metric}
                </h3>
                <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">
                  {item.difference}
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Driver Network</span>
                  <span className="font-bold text-green-600 dark:text-green-400">{item.us}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                  <div 
                    className="bg-green-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.us}%` }}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Industry Average</span>
                  <span className="font-bold text-gray-500 dark:text-gray-400">{item.industry}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                  <div 
                    className="bg-gray-400 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.industry}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 pt-8 border-t border-green-200 dark:border-green-700">
          <h3 className="text-2xl sm:text-3xl font-bold text-green-800 dark:text-green-200 mb-4">
            The Driver Network Difference
          </h3>
          <p className="text-xl text-green-600 dark:text-green-300 max-w-4xl mx-auto">
            These aren't just numbers in a spreadsheet. They represent 
            <strong className="font-bold"> real results </strong> 
            for real businesses that trust us with their most critical deliveries.
          </p>
        </div>
      </div>

      {/* Slide Navigation */}
    </section>
  );
};

export default PerformanceMetrics;