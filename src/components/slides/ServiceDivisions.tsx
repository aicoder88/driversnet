import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { OptimizedChart } from '../presentation/OptimizedChart';
import { SlideProps } from './SlideTypes';

const ServiceDivisions: React.FC<SlideProps> = ({ className = '', isActive }) => {
  return (
    <section className={`space-y-12 ${className}`}>
      <div className="backdrop-blur-lg bg-white/95 dark:bg-gray-800/95 p-8 rounded-3xl border border-white/30 dark:border-gray-600/30 shadow-2xl">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#276EF1] to-indigo-600 bg-clip-text text-transparent">
          🎯 Service Division Distribution
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <OptimizedChart 
            data={[
              { name: 'Valet & Traffic Mgmt', value: 35, color: '#276EF1' },
              { name: 'Automotive Transport', value: 40, color: '#10B981' },
              { name: 'Courier & Last-Mile', value: 25, color: '#F59E0B' }
            ]}
          >
            {(chartData) => (
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                        border: 'none', 
                        borderRadius: '12px',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        backdropFilter: 'blur(10px)',
                        padding: '12px 16px'
                      }}
                      labelStyle={{ color: '#1f2937', fontWeight: 'bold', marginBottom: '8px' }}
                      formatter={(value: number, name: string) => {
                        if (name === 'revenue') return [`$${value}K`, 'Revenue'];
                        if (name === 'drivers') return [value, 'Drivers'];
                        if (name === 'locations') return [value, 'Locations'];
                        if (name === 'onTime') return [`${value}%`, 'On-Time Delivery'];
                        if (name === 'satisfaction') return [`${value}%`, 'Customer Satisfaction'];
                        if (name === 'safety') return [`${value}%`, 'Safety Score'];
                        return [value, name];
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </OptimizedChart>
          <div className="space-y-4">
            <div className="backdrop-blur-sm bg-blue-500/20 p-6 rounded-2xl border border-blue-300/30 dark:border-blue-700/30">
              <h4 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">🚗 Valet & Traffic Management</h4>
              <p className="text-blue-700 dark:text-blue-300">24/7 operations, accounting, traffic control</p>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-200 mt-2">35% Revenue Share</div>
            </div>
            <div className="backdrop-blur-sm bg-green-500/20 p-6 rounded-2xl border border-green-300/30 dark:border-green-700/30">
              <h4 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">🚛 Automotive Transport</h4>
              <p className="text-green-700 dark:text-green-300">100+ vehicles daily, GPS tracking, full documentation</p>
              <div className="text-2xl font-bold text-green-600 dark:text-green-200 mt-2">40% Revenue Share</div>
            </div>
            <div className="backdrop-blur-sm bg-amber-500/20 p-6 rounded-2xl border border-amber-300/30 dark:border-amber-700/30">
              <h4 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-2">📦 Courier & Last-Mile</h4>
              <p className="text-amber-700 dark:text-amber-300">Same-day, scheduled, temperature-controlled delivery</p>
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-200 mt-2">25% Revenue Share</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDivisions;