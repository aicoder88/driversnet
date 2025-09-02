
import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { OptimizedChart } from '../presentation/OptimizedChart';
import { SlideProps } from './SlideTypes';

const CompanyEvolution: React.FC<SlideProps> = ({ 
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
      {/* Solution Hero */}
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 text-white dark:text-gray-50 rounded-full font-semibold text-lg">
            The Solution Already Exists
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            We Built
            <br />
            <span className="text-green-600 dark:text-green-400">What You Need</span>
            <br />
            <span className="text-gray-600 dark:text-gray-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">12 Years Ago</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed px-4">
            While others struggle to build logistics networks, we perfected one
            <br />
            <strong className="text-green-600 dark:text-green-400">1,000+ drivers. 19 markets. Battle-tested and ready.</strong>
          </p>
        </div>
      </div>
      
      {/* Interactive Growth Visualization */}
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Growth That Compounds
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-4">
            12 years of relentless execution, not promises
          </p>
        </div>
        
        {/* Growth Metrics Visual */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="text-center space-y-4">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              85x
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">Revenue Growth</div>
            <div className="text-gray-600 dark:text-gray-300">From $100K to $8.5M annually</div>
          </div>
          
          <div className="text-center space-y-4">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
              200x
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">Driver Network</div>
            <div className="text-gray-600 dark:text-gray-300">From 5 to 1,000+ drivers</div>
          </div>
          
          <div className="text-center space-y-4">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 dark:from-purple-400 dark:to-violet-400 bg-clip-text text-transparent">
              19
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">Major Markets</div>
            <div className="text-gray-600 dark:text-gray-300">Coast-to-coast coverage</div>
          </div>
        </div>
        
        {/* Visual Growth Chart */}
        <div className="h-80 w-full mb-12">
          <OptimizedChart data={[
            { name: '2012', value: 100, revenue: 100, drivers: 5, markets: 1, year: '2012' },
            { name: '2015', value: 350, revenue: 350, drivers: 25, markets: 3, year: '2015' },
            { name: '2018', value: 2100, revenue: 2100, drivers: 150, markets: 8, year: '2018' },
            { name: '2020', value: 3800, revenue: 3800, drivers: 400, markets: 12, year: '2020' },
            { name: '2024', value: 8500, revenue: 8500, drivers: 1000, markets: 19, year: '2024' }
          ]}>
            {(chartData) => (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-600" />
                  <XAxis dataKey="year" stroke="#6b7280" className="dark:stroke-gray-400" />
                  <YAxis stroke="#6b7280" className="dark:stroke-gray-400" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                      border: 'none', 
                      borderRadius: '12px',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                      backdropFilter: 'blur(10px)',
                      padding: '16px 20px'
                    }}
                    labelStyle={{ color: '#1f2937', fontWeight: 'bold', marginBottom: '8px', fontSize: '16px' }}
                    formatter={(value: number, name: string) => {
                      if (name === 'revenue') return [`$${value}K`, 'Annual Revenue'];
                      if (name === 'drivers') return [value, 'Active Drivers'];
                      if (name === 'markets') return [value, 'Major Markets'];
                      return [value, name];
                    }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#10B981" fillOpacity={1} fill="url(#growthGradient)" strokeWidth={4} />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </OptimizedChart>
        </div>
        
        {/* Key Insight */}
        <div className="text-center p-6 sm:p-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-700">
          <h3 className="text-2xl sm:text-3xl font-bold text-green-800 dark:text-green-200 mb-4">
            The Insight That Changes Everything
          </h3>
          <p className="text-lg sm:text-xl text-green-600 dark:text-green-300 max-w-3xl mx-auto px-4">
            Every company building from scratch makes the same mistakes we made 12 years ago. 
            <strong className="font-bold"> You don't have to. </strong>
            Our infrastructure, expertise, and network are available today.
          </p>
        </div>
      </div>

      {/* Slide Navigation */}
    </section>
  );
};

export default CompanyEvolution;
