import React from 'react';
import { SlideProps } from './SlideTypes';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const RoiProjection: React.FC<SlideProps> = ({ 
  className = '', 
  isActive, 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext, 
  currentSlide, 
  totalSlides 
}) => {
  // ROI projection data for 5-year cost comparison
  const costComparisonData = [
    { year: 'Year 1', inHouse: 2800, partnership: 1680, savings: 1120 },
    { year: 'Year 2', inHouse: 3200, partnership: 1920, savings: 1280 },
    { year: 'Year 3', inHouse: 3800, partnership: 2280, savings: 1520 },
    { year: 'Year 4', inHouse: 4500, partnership: 2700, savings: 1800 },
    { year: 'Year 5', inHouse: 5200, partnership: 3120, savings: 2080 }
  ];

  // Financial benefits data
  const financialBenefits = [
    { 
      category: 'Avoided Capital Investment', 
      amount: '$4.2M', 
      description: 'Vehicle fleet, technology, infrastructure',
      color: 'bg-red-500/20 border-red-300/30',
      textColor: 'text-red-800 dark:text-red-200'
    },
    { 
      category: 'Operational Cost Savings', 
      amount: '$8.8M', 
      description: 'Hiring, training, management overhead',
      color: 'bg-green-500/20 border-green-300/30',
      textColor: 'text-green-800 dark:text-green-200'
    },
    { 
      category: 'Risk Mitigation Value', 
      amount: '$2.1M', 
      description: 'Insurance, compliance, liability coverage',
      color: 'bg-blue-500/20 border-blue-300/30',
      textColor: 'text-blue-800 dark:text-blue-200'
    },
    { 
      category: 'Faster Market Entry', 
      amount: '$1.5M', 
      description: 'Revenue acceleration vs. internal build',
      color: 'bg-purple-500/20 border-purple-300/30',
      textColor: 'text-purple-800 dark:text-purple-200'
    }
  ];

  return (
    <section className={`min-h-screen flex flex-col justify-center space-y-20 ${className}`}>
      {/* Hero Section */}
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 text-white dark:text-gray-50 rounded-full font-semibold text-lg">
            Financial Impact
          </div>
          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            Smart
            <br />
            <span className="text-green-600 dark:text-green-400">Investment</span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Partnership delivers $16.6M in value over 5 years
            <br />
            <strong className="text-green-600 dark:text-green-400">Why build when you can partner?</strong>
          </p>
        </div>
      </div>

      {/* ROI Analysis */}
      <div className="backdrop-blur-lg bg-white/95 dark:bg-gray-800/95 p-8 rounded-3xl border border-white/30 dark:border-gray-600/30 shadow-2xl">
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Cost Savings Chart */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center">📊 5-Year Cost Comparison</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={costComparisonData}>
                  <defs>
                    <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0.2}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                  <XAxis dataKey="year" stroke="#4b5563" />
                  <YAxis stroke="#4b5563" label={{ value: 'Cost ($K)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                      border: 'none', 
                      borderRadius: '12px',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }} 
                  />
                  <Area type="monotone" dataKey="inHouse" stackId="1" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="partnership" stackId="2" stroke="#276EF1" fill="#276EF1" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="savings" stroke="#10B981" fillOpacity={1} fill="url(#savingsGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Financial Benefits */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center">💸 Financial Benefits</h3>
            <div className="space-y-4">
              {financialBenefits.map((benefit, index) => (
                <div key={index} className={`backdrop-blur-sm ${benefit.color} p-6 rounded-2xl border`}>
                  <div className="flex justify-between items-start mb-3">
                    <h4 className={`text-lg font-bold ${benefit.textColor}`}>{benefit.category}</h4>
                    <div className={`text-2xl font-bold ${benefit.textColor}`}>{benefit.amount}</div>
                  </div>
                  <p className={`text-sm ${benefit.textColor} opacity-80`}>{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-300/30">
              <div className="text-center text-gray-800 dark:text-gray-100">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">$16.6M</div>
                <div className="text-xl font-bold text-green-800 dark:text-green-200 mb-1">Total 5-Year Value</div>
                <div className="text-green-700 dark:text-green-300">Partnership vs. In-House Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiProjection;