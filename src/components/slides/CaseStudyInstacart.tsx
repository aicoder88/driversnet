
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { OptimizedChart } from '../presentation/OptimizedChart';
import { SlideProps } from './SlideTypes';

const CaseStudyInstacart: React.FC<SlideProps> = ({ 
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
    { name: '2019', value: 735, month: '2019', revenue: 735, users: 5.5, gmv: 7.5, growth: 0 },
    { name: '2020', value: 1500, month: '2020', revenue: 1500, users: 9.6, gmv: 35, growth: 104 },
    { name: '2021', value: 1830, month: '2021', revenue: 1830, users: 11.1, gmv: 28, growth: 22 }
  ];

  const keyMetrics = [
    { key: 'Revenue 2021', value: '$1.83B' },
    { key: 'Active Users', value: '11.1M' },
    { key: 'Market Share', value: '21.6%' },
    { key: 'Markets', value: '6' }
  ];

  const results = [
    'Revenue growth from $735M (2019) to $1.83B (2021) - 149% total growth',
    'User base expansion: 5.5M to 11.1M active users (+102% growth)',
    'Market leadership: 21.6% online grocery share, 72.5% delivery market share',
    'Scale achievement: extensive coverage across 5,500+ cities',
    'Profitability milestone: Positive unit economics by 2021',
    'Partnership network: 25,000+ stores from 350+ retail partners'
  ];

  return (
    <section className={`space-y-12 ${className}`}>
      <div className="backdrop-blur-lg bg-gradient-to-r from-green-800/90 to-emerald-900/90 dark:from-green-800/95 dark:to-emerald-900/95 text-white dark:text-gray-100 p-12 rounded-3xl mb-12 border border-green-300/30 dark:border-green-600/30 shadow-2xl">
        <div className="text-center mb-12">
          {/* Logo Partnership in Header Section */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            <img src="/driversnet-logo-dn1-512.jpg" alt="Driver Network" className="w-20 h-20 rounded-2xl object-contain bg-white p-3 shadow-lg" />
            <div className="text-4xl">🤝</div>
            <img 
              src="/Instacart-Logo.jpg" 
              alt="Instacart Logo" 
              className="w-20 h-20 rounded-2xl object-contain bg-white p-3 shadow-lg" 
            />
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
            <h3 className="text-3xl font-bold mb-3 text-green-200 dark:text-green-200">
              INSTACART CASE STUDY
            </h3>
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent">
              🚀 THE SOLUTION IN ACTION
            </h2>
          </div>
          
          <p className="text-2xl text-green-100 dark:text-green-200 max-w-5xl mx-auto font-medium">
            Instacart's explosive growth: +104% revenue (2020), 11.1M users (2021)
            <br/><span className="text-green-200 dark:text-green-300">They chose partnership. So can you.</span>
          </p>
        </div>
      </div>

      <div className="backdrop-blur-lg bg-white/95 dark:bg-gray-800/95 p-10 rounded-3xl border border-white/30 dark:border-gray-600/30 shadow-2xl">
        {/* The Solution Story */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-700 dark:from-emerald-700 dark:to-green-800 p-8 rounded-2xl text-white dark:text-gray-50 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <img src="/Instacart-Logo.jpg" alt="Instacart" className="w-16 h-16 mr-6 rounded-lg object-contain bg-white p-2" />
              <div>
                <h3 className="text-4xl text-white dark:text-gray-50 font-bold mb-2">The Day Everything Changed</h3>
                <p className="text-xl text-white dark:text-white opacity-90 font-medium">E-Commerce Logistics Partnership • 6 Metropolitan Areas • $2.3M Annual Contract</p>
              </div>
            </div>
            <div className="text-right text-white dark:text-white">
              <div className="text-lg text-white dark:text-white font-bold mb-1">18-month partnership (2019-2021)</div>
              <div className="text-sm text-white dark:text-white opacity-80">Chicago, Milwaukee, Detroit, Indianapolis, Cleveland, Columbus</div>
            </div>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[keyMetrics.map(({ key, value }, i) => (
              <div key={i} className="text-center text-gray-800 dark:text-gray-100 backdrop-blur-sm bg-white/95 dark:bg-gray-800/95 p-3 rounded-lg">
                <div className="text-2xl text-gray-800 dark:text-gray-100 font-bold">{value}</div>
                <div className="text-xs text-gray-600 dark:text-gray-300 opacity-80">{key}</div>
              </div>
            ))].map((item) => item)}
          </div>

          {/* Challenge/Solution/Results Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="backdrop-blur-sm bg-red-500/30 p-6 rounded-xl">
              <h4 className="font-bold text-2xl text-white dark:text-gray-100 mb-3 flex items-center">
                <span className="mr-3">⚠️</span>Challenge
              </h4>
              <p className="text-red-100 dark:text-red-200 leading-relaxed">Instacart needed to rapidly scale last-mile delivery operations across 6 Midwest markets within 8 months while maintaining their signature delivery speed and reliability. Required 24/7 coverage, peak demand surge capacity (300%+ volume spikes), and seamless integration with their existing dispatch system.</p>
            </div>
            <div className="backdrop-blur-sm bg-blue-500/30 p-6 rounded-xl">
              <h4 className="font-bold text-2xl text-white dark:text-gray-100 mb-3 flex items-center">
                <span className="mr-3">⚙️</span>Solution
              </h4>
              <p className="text-blue-100 dark:text-blue-200 leading-relaxed">Deployed 180+ rigorously trained drivers with Instacart-certified protocols. Implemented real-time API integration with their dispatch system, established dedicated surge capacity pools, and created market-specific operational centers. Each driver underwent 40-hour training on Instacart standards, customer interaction protocols, and temperature-sensitive delivery requirements.</p>
            </div>
            <div className="backdrop-blur-sm bg-[#43B02A]/20 p-6 rounded-xl">
              <h4 className="font-bold text-2xl text-white dark:text-gray-100 mb-3 flex items-center">
                <span className="mr-3">🎯</span>Results
              </h4>
              <ul className="text-white dark:text-gray-200 space-y-2">
                {results.map((result, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#43B02A] dark:text-[#43B02A] mr-2 text-lg">•</span>
                    <span className="text-sm text-gray-200 dark:text-gray-300 leading-relaxed">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Enhanced Performance Analytics Chart */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl">
          <h4 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">
            📊 Performance Analytics & Growth Trajectory
          </h4>
          <div className="h-80">
            <OptimizedChart data={performanceData}>
              {(chartData) => (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <defs>
                      <linearGradient id="gradient-instacart" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#43B02A" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#43B02A" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                    <XAxis dataKey="month" stroke="#4b5563" fontSize={12} />
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
                      dataKey="users" 
                      stroke="#10B981" 
                      strokeWidth={4}
                      dot={{ r: 8, fill: '#10B981', strokeWidth: 2, stroke: '#fff' }}
                      activeDot={{ r: 10, fill: '#10B981' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="gmv" 
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

export default CaseStudyInstacart;
