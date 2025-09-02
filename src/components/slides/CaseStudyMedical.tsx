
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { OptimizedChart } from '../presentation/OptimizedChart';
import { SlideProps } from './SlideTypes';

const CaseStudyMedical: React.FC<SlideProps> = ({ className = '', isActive }) => {
  return (
    <section className={`space-y-12 ${className}`}>
      <div className="backdrop-blur-lg bg-gradient-to-r from-gray-900/95 to-black/95 text-white dark:text-white dark:text-gray-100 p-12 rounded-3xl mb-12 border border-white/10 dark:border-gray-700/30 shadow-2xl">
        <div className="text-center text-gray-800 dark:text-gray-100 mb-12">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            🏆 SUCCESS STORY: SDSRX MEDICAL
          </h2>
          <p className="text-2xl text-gray-700 dark:text-gray-200 max-w-5xl mx-auto">
            Mission-Critical Healthcare Logistics • HIPAA-Compliant Medical Courier • Life-Critical Deliveries • $950K Annual Contract
          </p>
        </div>
      </div>

      <div className="backdrop-blur-lg bg-white/95 dark:bg-gray-800/95 p-10 rounded-3xl border border-white/30 dark:border-gray-600/30 shadow-2xl">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 rounded-2xl text-white dark:text-white dark:text-gray-100 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <img src="/sds logo.svg" alt="SDSRX Medical" className="w-16 h-16 mr-6 rounded-lg object-contain bg-white p-2" />
              <div>
                <h3 className="text-4xl text-gray-900 dark:text-gray-50 font-bold mb-2">SDSRX Medical: Mission-Critical Healthcare Logistics</h3>
                <p className="text-xl text-gray-700 dark:text-gray-200 opacity-90 font-medium">HIPAA-Compliant Medical Courier • Life-Critical Deliveries • $950K Annual Contract</p>
              </div>
            </div>
            <div className="text-right text-gray-800 dark:text-gray-100">
              <div className="text-lg text-gray-600 dark:text-gray-300 font-bold mb-1">4-year ongoing partnership (2020-present)</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 opacity-80">Chicago metro + 6 satellite medical facilities</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { key: 'Daily Deliveries', value: '78 avg' },
              { key: 'Critical Samples', value: '1,200/month' },
              { key: 'Temperature Deviation', value: '0.0%' },
              { key: 'Security Incidents', value: '0' }
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
              <p className="text-red-100 dark:text-red-200 leading-relaxed">SDSRX needed ultra-reliable medical courier services for time-sensitive laboratory samples, temperature-controlled pharmaceuticals, and confidential patient records. Any security breach, temperature deviation, or delivery delay could compromise patient care and result in massive HIPAA violations and litigation.</p>
            </div>
            <div className="backdrop-blur-sm bg-blue-500/30 p-6 rounded-xl">
              <h4 className="font-bold text-2xl text-gray-800 dark:text-gray-100 mb-3 flex items-center">
                <span className="mr-3">⚙️</span>Solution
              </h4>
              <p className="text-blue-100 dark:text-blue-200 leading-relaxed">Implemented military-grade security protocols with HIPAA-certified drivers, real-time temperature monitoring, blockchain-verified chain-of-custody documentation, and redundant delivery systems. All drivers underwent FBI background checks, 80-hour medical courier certification, and quarterly HIPAA compliance audits.</p>
            </div>
            <div className="backdrop-blur-sm bg-green-500/30 p-6 rounded-xl">
              <h4 className="font-bold text-2xl text-gray-800 dark:text-gray-100 mb-3 flex items-center">
                <span className="mr-3">🎯</span>Results
              </h4>
              <ul className="text-green-100 dark:text-green-200 space-y-2">
                {[
                  '22+ months with ZERO security incidents or HIPAA violations',
                  '100% temperature compliance for pharmaceutical deliveries (±2°F tolerance)',
                  '$380K avoided regulatory penalties through perfect compliance record',
                  '99.8% on-time delivery performance for time-critical specimens',
                  '400% expansion of service area due to proven reliability',
                  'Perfect Joint Commission audit scores for logistics compliance'
                ].map((result, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-300 dark:text-green-400 mr-2 text-lg">•</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl">
          <h4 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">
            📊 Compliance & Volume Growth
          </h4>
          <div className="h-80">
            <OptimizedChart data={[
              { name: 'Q1 2020', value: 94, quarter: 'Q1 2020', compliance: 94, incidents: 3, volume: 850 },
              { name: 'Q3 2020', value: 98, quarter: 'Q3 2020', compliance: 98, incidents: 1, volume: 1200 },
              { name: 'Q1 2021', value: 100, quarter: 'Q1 2021', compliance: 100, incidents: 0, volume: 1650 },
              { name: 'Q4 2023', value: 100, quarter: 'Q4 2023', compliance: 100, incidents: 0, volume: 2100 }
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
                      dataKey="compliance" 
                      stroke="#276EF1" 
                      strokeWidth={4}
                      dot={{ r: 8, fill: '#276EF1', strokeWidth: 2, stroke: '#fff' }}
                      activeDot={{ r: 10, fill: '#276EF1' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="volume" 
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

export default CaseStudyMedical;
