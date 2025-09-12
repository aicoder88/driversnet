
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { OptimizedChart } from '../presentation/OptimizedChart';
import { SlideProps } from './SlideTypes';

const CaseStudyTesla: React.FC<SlideProps> = ({ 
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
      <div className="backdrop-blur-lg bg-gradient-to-r from-gray-900/95 to-black/95 text-white dark:text-white dark:text-gray-100 p-6 sm:p-8 md:p-12 rounded-3xl mb-12 border border-white/10 dark:border-gray-700/30 shadow-2xl">
        <div className="text-center text-white dark:text-gray-100 mb-12">
          {/* Logo Partnership in Header Section */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            <img src="/driversnet logo.jpeg" alt="Driver Network" className="w-20 h-20 rounded-2xl object-contain bg-white p-3 shadow-lg" />
            <div className="text-4xl">🤝</div>
            <img 
              src="/Tesla_logo.png" 
              alt="Tesla Logo" 
              className="w-20 h-20 rounded-2xl object-contain bg-white p-3 shadow-lg" 
            />
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              ⚡ ELECTRIC PRECISION
            </h2>
            <h3 className="text-2xl font-medium text-gray-300 dark:text-gray-300">
              Moving Innovation Forward
            </h3>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 dark:text-gray-200 max-w-5xl mx-auto px-4">
            Tesla's remarkable growth: $97.6B revenue (2024), 1.78M vehicles delivered
            <br/>Strong foundation for specialized transport partnerships
          </p>
        </div>
      </div>

      <div className="backdrop-blur-lg bg-white/95 dark:bg-gray-800/95 p-10 rounded-3xl border border-white/30 dark:border-gray-600/30 shadow-2xl">
        <div className="bg-gradient-to-r from-[#E31937] to-[#CC1530] p-8 rounded-2xl text-white dark:text-white mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <img src="/Tesla_logo.png" alt="Tesla" className="w-16 h-16 mr-6 rounded-lg object-contain bg-white p-2" />
              <div>
                <h3 className="text-4xl text-white dark:text-white font-bold mb-2">Tesla: Precision Automotive Transport Excellence</h3>
                <p className="text-xl text-white dark:text-white opacity-90 font-medium">Luxury Vehicle Transport • White-Glove Service • $1.8M Annual Contract</p>
              </div>
            </div>
            <div className="text-right text-white dark:text-white">
              <div className="text-lg text-white dark:text-white font-bold mb-1">Partnership since 2018–present</div>
              <div className="text-sm text-white dark:text-white opacity-80">Launched in 13+ cities across the US & Canada</div>
              <div className="text-sm text-white dark:text-white opacity-80">Hundreds of vehicles per city/day on 24–48 hrs notice</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { key: '2024 Revenue', value: '$97.6B' },
              { key: 'Vehicles Delivered', value: '1.78M' },
              { key: 'Market Position', value: 'EV Leader' },
              { key: 'Manufacturing', value: '1.77M' }
            ].map(({ key, value }, i) => (
              <div key={i} className="text-center text-gray-800 dark:text-gray-100 backdrop-blur-sm bg-white/95 dark:bg-gray-800/95 p-3 rounded-lg">
                <div className="text-2xl text-gray-800 dark:text-gray-100 font-bold">{value}</div>
                <div className="text-xs text-gray-600 dark:text-gray-300 opacity-80">{key}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="backdrop-blur-sm bg-red-500/30 p-6 rounded-xl">
              <h4 className="font-bold text-2xl text-white dark:text-gray-100 mb-3 flex items-center">
                <span className="mr-3">⚠️</span>Challenge
              </h4>
              <p className="text-red-100 dark:text-red-200 leading-relaxed">Tesla required zero-damage transport for high-value vehicles ($40K-$150K each) from their Chicago distribution center to 47 dealer locations across the Midwest. Any damage, scratches, or delays would result in massive financial losses and brand reputation damage. Required specialized equipment, insurance, and meticulous documentation.</p>
            </div>
            <div className="backdrop-blur-sm bg-blue-500/30 p-6 rounded-xl">
              <h4 className="font-bold text-2xl text-white dark:text-gray-100 mb-3 flex items-center">
                <span className="mr-3">⚙️</span>Solution
              </h4>
              <p className="text-blue-100 dark:text-blue-200 leading-relaxed">Recruited and trained 25 elite automotive transport specialists with clean 10-year driving records. Invested in specialized enclosed trailers, GPS tracking systems, and comprehensive photo documentation protocols. Implemented Tesla-specific loading/unloading procedures, battery safety protocols, and real-time damage prevention systems.</p>
            </div>
            <div className="backdrop-blur-sm bg-[#E31937]/20 p-6 rounded-xl">
              <h4 className="font-bold text-2xl text-white dark:text-gray-100 mb-3 flex items-center">
                <span className="mr-3">🎯</span>Results
              </h4>
              <ul className="text-white dark:text-gray-200 space-y-2">
                {[
                  '99.97% damage-free delivery record (3 minor incidents in 12,000+ transports)',
                  '$2.1M+ in damage prevention vs. industry standard performance',
                  '100% on-schedule delivery performance over 36 months',
                  'Tesla "Preferred Partner" status achieved in Month 8',
                  'Contract renewed for additional 3 years with 40% scope expansion',
                  '12,847 vehicles transported safely with full documentation'
                ].map((result, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#E31937] dark:text-[#E31937] mr-2 text-lg">•</span>
                    <span className="text-sm text-gray-200 dark:text-gray-300 leading-relaxed">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl">
          <h4 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">
            📊 Performance Analytics & Growth Trajectory
          </h4>
          <div className="h-80">
            <OptimizedChart data={[
              { name: '2019', value: 24.6, year: '2019', revenue: 24.6, deliveries: 0.37, margin: 1.1 },
              { name: '2020', value: 31.5, year: '2020', revenue: 31.5, deliveries: 0.50, margin: 2.0 },
              { name: '2021', value: 53.8, year: '2021', revenue: 53.8, deliveries: 0.94, margin: 7.5 },
              { name: '2022', value: 81.5, year: '2022', revenue: 81.5, deliveries: 1.31, margin: 15.0 },
              { name: '2023', value: 96.8, year: '2023', revenue: 96.8, deliveries: 1.81, margin: 15.5 },
              { name: '2024', value: 97.6, year: '2024', revenue: 97.6, deliveries: 1.78, margin: 7.3 }
            ]}>
              {(chartData) => (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                    <XAxis dataKey="year" stroke="#4b5563" fontSize={12} />
                    <YAxis stroke="#4b5563" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.98)', 
                        border: 'none', 
                        borderRadius: '16px',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        fontSize: '14px',
                        padding: '12px'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#276EF1" 
                      strokeWidth={4}
                      dot={{ r: 8, fill: '#276EF1', strokeWidth: 2, stroke: '#fff' }}
                      activeDot={{ r: 10, fill: '#276EF1' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="deliveries" 
                      stroke="#10B981" 
                      strokeWidth={4}
                      dot={{ r: 8, fill: '#10B981', strokeWidth: 2, stroke: '#fff' }}
                      activeDot={{ r: 10, fill: '#10B981' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="margin" 
                      stroke="#F59E0B" 
                      strokeWidth={4}
                      dot={{ r: 8, fill: '#F59E0B', strokeWidth: 2, stroke: '#fff' }}
                      activeDot={{ r: 10, fill: '#F59E0B' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </OptimizedChart>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
    </section>
  );
};

export default CaseStudyTesla;
