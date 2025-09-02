
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { OptimizedChart } from '../presentation/OptimizedChart';
import { SlideProps } from './SlideTypes';
import SlideNavigation from '../shared/SlideNavigation';

const DriverExcellence: React.FC<SlideProps> = ({ 
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
    <section className={`space-y-12 ${className}`}>
      <div className="backdrop-blur-lg bg-gradient-to-r from-gray-900/95 to-black/95 text-white dark:text-white dark:text-gray-100 p-12 rounded-3xl mb-12 border border-white/10 dark:border-gray-700/30 shadow-2xl">
        <div className="text-center text-gray-800 dark:text-gray-100 mb-12">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            🏆 DRIVER EXCELLENCE
          </h2>
          <p className="text-2xl text-gray-700 dark:text-gray-200 max-w-5xl mx-auto">
            Our drivers are not just contractors, they are brand ambassadors.
          </p>
        </div>
      </div>

      <div className="backdrop-blur-lg bg-white/95 dark:bg-gray-800/95 p-10 rounded-3xl border border-white/30 dark:border-gray-600/30 shadow-2xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Our Investment in Human Capital</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We invest heavily in our drivers to ensure they are the best in the industry. Our training program is rigorous and comprehensive, covering everything from safety protocols to customer service.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="w-6 h-6 rounded-full bg-green-500 text-white dark:text-white flex items-center justify-center">✓</span>
                <span>80-hour mandatory training program</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-6 h-6 rounded-full bg-green-500 text-white dark:text-white flex items-center justify-center">✓</span>
                <span>Quarterly performance reviews</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-6 h-6 rounded-full bg-green-500 text-white dark:text-white flex items-center justify-center">✓</span>
                <span>Annual background checks</span>
              </li>
            </ul>
          </div>
          <div className="h-80">
            <OptimizedChart data={[
              { name: 'Industry Avg.', value: 20, 'Training Hours': 20, 'Retention Rate': 45 },
              { name: 'DriverNetwork', value: 80, 'Training Hours': 80, 'Retention Rate': 92 }
            ]}>
              {(chartData) => (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Training Hours" fill="#276EF1" />
                    <Bar dataKey="Retention Rate" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </OptimizedChart>
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

export default DriverExcellence;
