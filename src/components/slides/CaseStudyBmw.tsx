
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { OptimizedChart } from '../presentation/OptimizedChart';
import { SlideProps } from './SlideTypes';

const CaseStudyBmw: React.FC<SlideProps> = ({ 
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
          {/* Logo Partnership in Header Section */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            <img src="/driversnet logo.jpeg" alt="Driver Network" className="w-20 h-20 rounded-2xl object-contain bg-white p-3 shadow-lg" />
            <div className="text-4xl text-white">🤝</div>
            <img 
              src="/BMW.svg.png" 
              alt="BMW Logo" 
              className="w-20 h-20 rounded-2xl object-contain bg-white p-3 shadow-lg" 
            />
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              🏅 ULTIMATE PRECISION
            </h2>
            <h3 className="text-2xl font-medium text-gray-300 dark:text-gray-300">
              The Art of Flawless Delivery
            </h3>
          </div>
          
          <p className="text-2xl text-gray-300 dark:text-gray-200 max-w-5xl mx-auto">
            Where luxury meets logistics, perfection is the only standard
          </p>
        </div>
      </div>

      <div className="backdrop-blur-lg bg-white/95 dark:bg-gray-800/95 p-10 rounded-3xl border border-white/30 dark:border-gray-600/30 shadow-2xl">
        <div className="bg-gradient-to-r from-gray-800 to-black p-8 rounded-2xl text-white dark:text-white dark:text-gray-100 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <img src="/BMW.svg.png" alt="BMW" className="w-16 h-16 mr-6 rounded-lg object-contain bg-white p-2" />
              <div>
                <h3 className="text-4xl text-white dark:text-gray-50 font-bold mb-2">BMW Group: Premium Automotive Logistics</h3>
                <p className="text-xl text-gray-200 dark:text-gray-200 opacity-90 font-medium">White-Glove Transport • Event & Dealership Services • $1.2M Annual Contract</p>
              </div>
            </div>
            <div className="text-right text-white dark:text-gray-100">
              <div className="text-lg text-gray-200 dark:text-gray-300 font-bold mb-1">5-year partnership (2019-present)</div>
              <div className="text-sm text-gray-300 dark:text-gray-300 opacity-80">Illinois, Wisconsin, Indiana</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { key: 'Vehicles Moved', value: '8,200+' },
              { key: 'Event Support', value: '45 events' },
              { key: 'Damage-Free Rate', value: '99.98%' },
              { key: 'Avg. Vehicle Value', value: '$78,000' }
            ].map(({ key, value }, i) => (
              <div key={i} className="text-center text-gray-800 dark:text-gray-100 backdrop-blur-sm bg-white/95 dark:bg-gray-800/95 p-3 rounded-lg">
                <div className="text-2xl text-gray-800 dark:text-gray-100 font-bold">{value}</div>
                <div className="text-xs text-gray-600 dark:text-gray-300 opacity-80">{key}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="backdrop-blur-sm bg-red-500/30 p-6 rounded-xl">
              <h4 className="font-bold text-2xl text-gray-800 dark:text-gray-100 mb-3 flex items-center">
                <span className="mr-3">⚠️</span>Challenge
              </h4>
              <p className="text-red-100 dark:text-red-200 leading-relaxed">BMW required a logistics partner that could provide flawless, white-glove transport for their high-end vehicles to dealerships, auto shows, and exclusive customer events. This demanded absolute precision, discretion, and a level of service that matched the BMW brand. Any logistical error could damage brand perception and jeopardize multi-million dollar events.</p>
            </div>
            <div className="backdrop-blur-sm bg-blue-500/30 p-6 rounded-xl">
              <h4 className="font-bold text-2xl text-gray-800 dark:text-gray-100 mb-3 flex items-center">
                <span className="mr-3">⚙️</span>Solution
              </h4>
              <p className="text-blue-100 dark:text-blue-200 leading-relaxed">Established a dedicated BMW "Brand Ambassador" driver team, each with 100+ hours of training in BMW product knowledge and customer interaction. Utilized unmarked, climate-controlled, fully-enclosed transporters with real-time GPS and video monitoring. Developed a proprietary event logistics playbook for auto shows, including on-site detailing and vehicle preparation.</p>
            </div>
            <div className="backdrop-blur-sm bg-green-500/30 p-6 rounded-xl">
              <h4 className="font-bold text-2xl text-gray-800 dark:text-gray-100 mb-3 flex items-center">
                <span className="mr-3">🎯</span>Results
              </h4>
              <ul className="text-green-100 dark:text-green-200 space-y-2">
                {[
                  '99.98% damage-free record across 8,200+ vehicle movements',
                  '100% on-time performance for all 45 marketing events and auto shows',
                  '$1.5M+ in potential damage claims avoided vs. industry average',
                  'Recognized as "Logistics Partner of the Year" for BMW North America in 2022',
                  'Seamless support for the launch of 8 new BMW models',
                  'Customer satisfaction score of 4.98/5.0 from dealership network'
                ].map((result, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-300 dark:text-green-400 mr-2 text-lg">•</span>
                    <span className="text-sm text-gray-100 dark:text-gray-300 leading-relaxed">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl">
          <h4 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">
            📊 Event Success & Damage-Free Rate
          </h4>
          <div className="h-80">
            <OptimizedChart data={[
              { name: '2019', value: 5, year: '2019', events: 5, damageRate: 0.12, satisfaction: 4.8 },
              { name: '2020', value: 8, year: '2020', events: 8, damageRate: 0.08, satisfaction: 4.9 },
              { name: '2021', value: 12, year: '2021', events: 12, damageRate: 0.05, satisfaction: 4.95 },
              { name: '2023', value: 15, year: '2023', events: 15, damageRate: 0.02, satisfaction: 4.98 }
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
                      dataKey="events" 
                      stroke="#276EF1" 
                      strokeWidth={4}
                      dot={{ r: 8, fill: '#276EF1', strokeWidth: 2, stroke: '#fff' }}
                      activeDot={{ r: 10, fill: '#276EF1' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="satisfaction" 
                      stroke="#10B981" 
                      strokeWidth={4}
                      dot={{ r: 8, fill: '#10B981', strokeWidth: 2, stroke: '#fff' }}
                      activeDot={{ r: 10, fill: '#10B981' }}
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

export default CaseStudyBmw;
