
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { OptimizedChart } from '../presentation/OptimizedChart';
import { SlideProps } from './SlideTypes';

const CaseStudyTesla: React.FC<SlideProps> = ({ className = '', isActive }) => {
  return (
    <section className={`space-y-12 ${className}`}>
      <div className="backdrop-blur-lg bg-gradient-to-r from-gray-900/95 to-black/95 text-white dark:text-white dark:text-gray-100 p-12 rounded-3xl mb-12 border border-white/10 dark:border-gray-700/30 shadow-2xl">
        <div className="text-center text-gray-800 dark:text-gray-100 mb-12">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            🏆 SUCCESS STORY: TESLA
          </h2>
          <p className="text-2xl text-gray-700 dark:text-gray-200 max-w-5xl mx-auto">
            Precision Automotive Transport Excellence • Luxury Vehicle Transport • White-Glove Service • $1.8M Annual Contract
          </p>
        </div>
      </div>

      <div className="backdrop-blur-lg bg-white/95 dark:bg-gray-800/95 p-10 rounded-3xl border border-white/30 dark:border-gray-600/30 shadow-2xl">
        <div className="bg-gradient-to-r from-[#E31937] to-[#CC1530] p-8 rounded-2xl text-white dark:text-white mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <span className="text-5xl text-white dark:text-white mr-6">⚡</span>
              <div>
                <h3 className="text-4xl text-white dark:text-white font-bold mb-2">Tesla: Precision Automotive Transport Excellence</h3>
                <p className="text-xl text-white dark:text-white opacity-90 font-medium">Luxury Vehicle Transport • White-Glove Service • $1.8M Annual Contract</p>
              </div>
            </div>
            <div className="text-right text-white dark:text-white">
              <div className="text-lg text-white dark:text-white font-bold mb-1">3-year exclusive partnership (2021-2024)</div>
              <div className="text-sm text-white dark:text-white opacity-80">Chicago hub serving 8-state distribution network</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { key: 'Vehicles/Month', value: '356 avg' },
              { key: 'Avg Vehicle Value', value: '$87,000' },
              { key: 'Damage Rate', value: '0.03%' },
              { key: 'Insurance Claims', value: '$4,200 total' }
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
              <p className="text-red-100 dark:text-red-200 leading-relaxed">Tesla required zero-damage transport for high-value vehicles ($40K-$150K each) from their Chicago distribution center to 47 dealer locations across the Midwest. Any damage, scratches, or delays would result in massive financial losses and brand reputation damage. Required specialized equipment, insurance, and meticulous documentation.</p>
            </div>
            <div className="backdrop-blur-sm bg-blue-500/30 p-6 rounded-xl">
              <h4 className="font-bold text-2xl text-gray-800 dark:text-gray-100 mb-3 flex items-center">
                <span className="mr-3">⚙️</span>Solution
              </h4>
              <p className="text-blue-100 dark:text-blue-200 leading-relaxed">Recruited and trained 25 elite automotive transport specialists with clean 10-year driving records. Invested in specialized enclosed trailers, GPS tracking systems, and comprehensive photo documentation protocols. Implemented Tesla-specific loading/unloading procedures, battery safety protocols, and real-time damage prevention systems.</p>
            </div>
            <div className="backdrop-blur-sm bg-[#E31937]/20 p-6 rounded-xl">
              <h4 className="font-bold text-2xl text-gray-800 dark:text-gray-100 mb-3 flex items-center">
                <span className="mr-3">🎯</span>Results
              </h4>
              <ul className="text-gray-800 dark:text-gray-200 space-y-2">
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
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{result}</span>
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
              { name: 'Q1 2021', value: 850, quarter: 'Q1 2021', vehicles: 850, damageRate: 0.08, satisfaction: 4.7 },
              { name: 'Q3 2021', value: 1050, quarter: 'Q3 2021', vehicles: 1050, damageRate: 0.05, satisfaction: 4.8 },
              { name: 'Q1 2022', value: 1180, quarter: 'Q1 2022', vehicles: 1180, damageRate: 0.03, satisfaction: 4.9 },
              { name: 'Q4 2023', value: 1285, quarter: 'Q4 2023', vehicles: 1285, damageRate: 0.02, satisfaction: 4.9 }
            ]}>
              {(chartData) => (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                    <XAxis dataKey="quarter" stroke="#4b5563" fontSize={12} />
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
                      dataKey="vehicles" 
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
    </section>
  );
};

export default CaseStudyTesla;
