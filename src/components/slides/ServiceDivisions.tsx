import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { OptimizedChart } from '../presentation/OptimizedChart';
import { SlideProps } from './SlideTypes';

const ServiceDivisions: React.FC<SlideProps> = ({ 
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
    <section className={`min-h-screen flex flex-col justify-center space-y-12 ${className}`}>
      <div className="backdrop-blur-lg bg-gradient-to-br from-blue-50/90 via-indigo-50/90 to-purple-50/90 dark:from-gray-800/95 dark:via-gray-800/95 dark:to-gray-700/95 p-6 sm:p-8 md:p-12 rounded-3xl border border-blue-200/50 dark:border-gray-600/30 shadow-2xl">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 text-white rounded-full font-semibold text-lg mb-6 content-fade-in">
            Strategic Service Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#276EF1] to-indigo-600 bg-clip-text text-transparent content-fade-in content-stagger-1">
            🎯 Three Pillars of Excellence
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 content-fade-in content-stagger-2">
            Our diversified service portfolio ensures stability, growth, and unmatched reliability across every sector
          </p>
        </div>
        {/* Interactive Service Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Automotive Transport - Main Revenue Driver */}
          <div className="group relative bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-6 sm:p-8 rounded-2xl border border-green-300/50 dark:border-green-700/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer card-stagger content-stagger-3">
            <div className="text-center mb-6">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4">🚛</div>
              <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-2">40%</div>
              <div className="text-base sm:text-lg font-bold text-green-800 dark:text-green-200 mb-2">Automotive Transport</div>
              <div className="text-green-700 dark:text-green-300 text-sm">Our strongest division</div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-700 dark:text-green-300">100+ vehicles daily</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-700 dark:text-green-300">Real-time GPS tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-700 dark:text-green-300">Full documentation</span>
              </div>
            </div>
          </div>

          {/* Parking, Valet & Traffic Management */}
          <div className="group relative bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 sm:p-8 rounded-2xl border border-blue-300/50 dark:border-blue-700/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer card-stagger content-stagger-4">
            <div className="text-center mb-6">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4">🚗</div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">35%</div>
              <div className="text-base sm:text-lg font-bold text-blue-800 dark:text-blue-200 mb-2">Parking, Valet & Traffic Mgmt</div>
              <div className="text-blue-700 dark:text-blue-300 text-sm">Steady growth sector</div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-blue-700 dark:text-blue-300">24/7 operations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-blue-700 dark:text-blue-300">Accounting services</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-blue-700 dark:text-blue-300">Parking operations & revenue mgmt</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-blue-700 dark:text-blue-300">Traffic control</span>
              </div>
            </div>
          </div>

          {/* Courier & Last-Mile */}
          <div className="group relative bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 p-6 sm:p-8 rounded-2xl border border-amber-300/50 dark:border-amber-700/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer card-stagger content-stagger-5">
            <div className="text-center mb-6">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4">📦</div>
              <div className="text-2xl sm:text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">25%</div>
              <div className="text-base sm:text-lg font-bold text-amber-800 dark:text-amber-200 mb-2">Courier & Last-Mile</div>
              <div className="text-amber-700 dark:text-amber-300 text-sm">Rapid expansion focus</div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-sm text-amber-700 dark:text-amber-300">Same-day delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-sm text-amber-700 dark:text-amber-300">Temperature controlled</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-sm text-amber-700 dark:text-amber-300">Scheduled routes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics Bar */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 sm:p-8 rounded-2xl border border-gray-200/50 dark:border-gray-600/50">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
            📊 Division Performance Metrics
          </h3>
          <OptimizedChart 
            data={[
              { name: 'Automotive', value: 2800, onTime: 99.8, satisfaction: 98.5, safety: 100, revenue: 2800 },
              { name: 'Parking/Valet/Traffic', value: 2450, onTime: 99.2, satisfaction: 97.8, safety: 99.5, revenue: 2450 },
              { name: 'Courier', value: 1750, onTime: 98.9, satisfaction: 98.2, safety: 99.8, revenue: 1750 }
            ]}
          >
            {(chartData) => (
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(107, 114, 128, 0.3)" />
                    <XAxis dataKey="name" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                        border: 'none', 
                        borderRadius: '12px',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        backdropFilter: 'blur(10px)',
                        padding: '16px'
                      }}
                      formatter={(value: number, name: string) => {
                        if (name === 'revenue') return [`$${value}K`, 'Monthly Revenue'];
                        if (name === 'onTime') return [`${value}%`, 'On-Time Delivery'];
                        if (name === 'satisfaction') return [`${value}%`, 'Customer Satisfaction'];
                        if (name === 'safety') return [`${value}%`, 'Safety Score'];
                        return [value, name];
                      }}
                    />
                    <Bar dataKey="onTime" fill="#10B981" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="satisfaction" fill="#276EF1" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="safety" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </OptimizedChart>
          <div className="flex justify-center space-x-8 mt-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span className="text-gray-600 dark:text-gray-300">On-Time Delivery %</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-gray-600 dark:text-gray-300">Customer Satisfaction %</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-amber-500 rounded"></div>
              <span className="text-gray-600 dark:text-gray-300">Safety Score %</span>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="text-center mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-700/20 dark:to-indigo-700/20 rounded-2xl border border-blue-300/30 dark:border-blue-600/30">
          <h4 className="text-xl sm:text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">
            🎯 Strategic Advantage
          </h4>
          <p className="text-base sm:text-lg text-blue-700 dark:text-blue-300 max-w-3xl mx-auto px-4">
            Our diversified portfolio creates stability while automotive transport drives growth. 
            <strong className="font-bold"> This balance ensures consistent performance </strong>
            regardless of market fluctuations in any single sector.
          </p>
        </div>
      </div>

      {/* Slide Navigation */}
    </section>
  );
};

export default ServiceDivisions;
