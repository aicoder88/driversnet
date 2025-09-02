import React from 'react';
import { SlideProps } from './SlideTypes';
import SlideNavigation from '../shared/SlideNavigation';

const GeographicCoverage: React.FC<SlideProps> = ({ 
  className = '', 
  isActive, 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext, 
  currentSlide, 
  totalSlides 
}) => {
  const markets = [
    { name: 'Los Angeles', state: 'CA', drivers: 180, status: 'Primary Hub', region: 'West', color: 'blue' },
    { name: 'San Francisco', state: 'CA', drivers: 165, status: 'Primary Hub', region: 'West', color: 'blue' },
    { name: 'San Diego', state: 'CA', drivers: 95, status: 'Active', region: 'West', color: 'green' },
    { name: 'Phoenix', state: 'AZ', drivers: 75, status: 'Active', region: 'West', color: 'green' },
    { name: 'Las Vegas', state: 'NV', drivers: 68, status: 'Active', region: 'West', color: 'green' },
    { name: 'Seattle', state: 'WA', drivers: 85, status: 'Active', region: 'West', color: 'green' },
    { name: 'Portland', state: 'OR', drivers: 52, status: 'Active', region: 'West', color: 'green' },
    { name: 'Denver', state: 'CO', drivers: 64, status: 'Expanding', region: 'Central', color: 'orange' },
    { name: 'Dallas', state: 'TX', drivers: 78, status: 'Expanding', region: 'Central', color: 'orange' },
    { name: 'Austin', state: 'TX', drivers: 56, status: 'Active', region: 'Central', color: 'green' },
    { name: 'Houston', state: 'TX', drivers: 72, status: 'Active', region: 'Central', color: 'green' },
    { name: 'Chicago', state: 'IL', drivers: 89, status: 'Expanding', region: 'Central', color: 'orange' },
    { name: 'Atlanta', state: 'GA', drivers: 67, status: 'Active', region: 'East', color: 'green' },
    { name: 'Miami', state: 'FL', drivers: 74, status: 'Active', region: 'East', color: 'green' },
    { name: 'Orlando', state: 'FL', drivers: 45, status: 'Active', region: 'East', color: 'green' },
    { name: 'New York', state: 'NY', drivers: 125, status: 'Expanding', region: 'East', color: 'orange' },
    { name: 'Boston', state: 'MA', drivers: 58, status: 'Expanding', region: 'East', color: 'orange' },
    { name: 'Philadelphia', state: 'PA', drivers: 62, status: 'Active', region: 'East', color: 'green' },
    { name: 'Washington DC', state: 'DC', drivers: 71, status: 'Active', region: 'East', color: 'green' }
  ];

  const regionalStats = [
    { region: 'West Coast', markets: 7, drivers: 645, coverage: '100%', color: 'blue' },
    { region: 'Central', markets: 6, drivers: 359, coverage: '85%', color: 'orange' },
    { region: 'East Coast', markets: 6, drivers: 457, coverage: '90%', color: 'green' }
  ];

  const coverageMetrics = [
    { label: 'Total Markets', value: '19', icon: '🌍', description: 'Major metropolitan areas' },
    { label: 'Network Drivers', value: '1,000+', icon: '👥', description: 'Active delivery professionals' },
    { label: 'Population Coverage', value: '45M+', icon: '🏙️', description: 'People within delivery range' },
    { label: 'Daily Capacity', value: '25K+', icon: '📦', description: 'Packages per day capacity' }
  ];

  const expansionPlans = [
    {
      timeline: 'Q1 2024',
      markets: ['Sacramento', 'Salt Lake City', 'Kansas City'],
      drivers: '150+',
      focus: 'Regional connector hubs',
      icon: '🎯',
      color: 'purple'
    },
    {
      timeline: 'Q2-Q3 2024',
      markets: ['Nashville', 'Charlotte', 'Minneapolis'],
      drivers: '200+',
      focus: 'Strategic market expansion',
      icon: '🚀',
      color: 'indigo'
    },
    {
      timeline: '2024-2025',
      markets: ['International: Toronto', 'Vancouver', 'Montreal'],
      drivers: '300+',
      focus: 'Cross-border capabilities',
      icon: '🌎',
      color: 'emerald'
    }
  ];

  return (
    <section className={`min-h-screen flex flex-col justify-center space-y-20 ${className}`}>
      {/* Hero Section */}
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white dark:text-gray-50 rounded-full font-semibold text-lg">
            Coast-to-Coast Network
          </div>
          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            Geographic
            <br />
            <span className="text-indigo-600 dark:text-indigo-400">Coverage</span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            From Seattle to Miami, our network spans 19 major markets
            <br />
            <strong className="text-indigo-600 dark:text-indigo-400">1,000+ drivers ready to deliver</strong>
          </p>
        </div>
      </div>

      {/* Coverage Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {coverageMetrics.map((metric, index) => (
          <div 
            key={index}
            className="text-center bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-5xl mb-4">{metric.icon}</div>
            <div className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">
              {metric.value}
            </div>
            <div className="font-bold mb-2 text-lg text-gray-800 dark:text-gray-200">
              {metric.label}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {metric.description}
            </div>
          </div>
        ))}
      </div>

      {/* Regional Breakdown */}
      <div className="bg-white dark:bg-gray-800 p-16 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Regional Network Strength
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Strategic coverage across three major regions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {regionalStats.map((region, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br from-${region.color}-50 to-${region.color}-100 dark:from-${region.color}-900/20 dark:to-${region.color}-800/20 p-8 rounded-3xl border border-${region.color}-200 dark:border-${region.color}-700 shadow-lg`}
            >
              <h3 className={`text-2xl font-bold text-${region.color}-800 dark:text-${region.color}-200 mb-6 text-center`}>
                {region.region}
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Markets:</span>
                  <span className={`font-bold text-${region.color}-600 dark:text-${region.color}-400`}>
                    {region.markets}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Drivers:</span>
                  <span className={`font-bold text-${region.color}-600 dark:text-${region.color}-400`}>
                    {region.drivers}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Coverage:</span>
                  <span className={`font-bold text-${region.color}-600 dark:text-${region.color}-400`}>
                    {region.coverage}
                  </span>
                </div>
              </div>
              
              <div className="mt-4">
                <div className={`w-full bg-${region.color}-200 dark:bg-${region.color}-700 rounded-full h-3`}>
                  <div 
                    className={`bg-${region.color}-600 h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: region.coverage }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Market Grid */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center mb-8">
            Active Markets & Driver Distribution
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {markets.map((market, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-r from-${market.color}-50 to-${market.color}-100 dark:from-${market.color}-900/20 dark:to-${market.color}-800/20 p-6 rounded-xl border border-${market.color}-200 dark:border-${market.color}-700 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 text-lg">
                      {market.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{market.state}</p>
                  </div>
                  <div className={`bg-${market.color}-100 dark:bg-${market.color}-900/30 text-${market.color}-800 dark:text-${market.color}-200 px-3 py-1 rounded-full text-xs font-semibold`}>
                    {market.status}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">👥</span>
                    <span className={`font-bold text-${market.color}-600 dark:text-${market.color}-400`}>
                      {market.drivers} drivers
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expansion Plans */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Expansion Roadmap
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Strategic growth into new markets and international opportunities
          </p>
        </div>

        <div className="space-y-8">
          {expansionPlans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-r from-${plan.color}-50 to-${plan.color}-100 dark:from-${plan.color}-900/20 dark:to-${plan.color}-800/20 p-8 rounded-3xl border border-${plan.color}-200 dark:border-${plan.color}-700 shadow-xl`}
            >
              <div className="flex items-start space-x-6">
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br from-${plan.color}-500 to-${plan.color}-600 rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg`}>
                  {plan.icon}
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`bg-${plan.color}-200 dark:bg-${plan.color}-800 text-${plan.color}-800 dark:text-${plan.color}-200 px-4 py-2 rounded-full font-bold`}>
                      {plan.timeline}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {plan.focus}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Target Markets:</h4>
                      <ul className="space-y-1">
                        {plan.markets.map((market, marketIndex) => (
                          <li key={marketIndex} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full bg-${plan.color}-500`}></div>
                            <span className="text-gray-600 dark:text-gray-400 text-sm">{market}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Driver Capacity:</h4>
                      <div className={`text-2xl font-bold text-${plan.color}-600 dark:text-${plan.color}-400`}>
                        {plan.drivers}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Additional network capacity</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Strategic Value:</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{plan.focus}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coverage Summary */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-16 rounded-3xl border border-indigo-200 dark:border-indigo-700 shadow-2xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-indigo-800 dark:text-indigo-200 mb-6">
            Network Advantage
          </h2>
          <p className="text-xl text-indigo-600 dark:text-indigo-300 max-w-4xl mx-auto mb-8">
            Our geographic coverage isn't just about locations - it's about strategic positioning 
            for maximum efficiency and reliability.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Speed</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Regional hubs enable same-day and next-day delivery across major corridors
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Precision</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Local market knowledge and established driver relationships
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Scalability</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Proven expansion model ready for rapid market entry
              </p>
            </div>
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

export default GeographicCoverage;