import React from 'react';
import { SlideProps } from './SlideTypes';

const ServiceIntegration: React.FC<SlideProps> = ({ 
  className = '', 
  isActive, 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext, 
  currentSlide, 
  totalSlides 
}) => {
  // Service tier options data
  const serviceTiers = [
    {
      tier: 'Essential',
      price: 'Base Rate',
      features: ['Standard delivery', 'Basic tracking', '24hr support', 'Standard insurance'],
      color: 'border-gray-300',
      bgColor: 'bg-gray-500/10'
    },
    {
      tier: 'Professional',
      price: '+15%',
      features: ['Priority dispatch', 'Real-time GPS', 'White-glove service', 'Enhanced insurance'],
      color: 'border-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      tier: 'Enterprise',
      price: '+30%',
      features: ['Dedicated drivers', 'Custom protocols', 'Account manager', 'Premium insurance'],
      color: 'border-purple-400',
      bgColor: 'bg-purple-500/10'
    }
  ];

  return (
    <section className={`min-h-screen flex flex-col justify-center space-y-20 ${className}`}>
      {/* Hero Section */}
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#276EF1] to-indigo-600 dark:from-blue-700 dark:to-indigo-700 text-white dark:text-gray-50 rounded-full font-semibold text-lg">
            Seamless Integration
          </div>
          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            Perfect
            <br />
            <span className="text-[#276EF1] dark:text-blue-400">Harmony</span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Your Uber Freight platform + Our driver network
            <br />
            <strong className="text-[#276EF1] dark:text-blue-400">Seamless integration from day one</strong>
          </p>
        </div>
      </div>

      {/* Integration Details */}
      <div className="backdrop-blur-lg bg-white/95 dark:bg-gray-800/95 p-8 rounded-3xl border border-white/30 dark:border-gray-600/30 shadow-2xl">
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Integration Architecture */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">🏗️ Technical Integration</h3>
            <div className="space-y-6">
              <div className="backdrop-blur-sm bg-blue-500/20 p-6 rounded-2xl border border-blue-300/30">
                <div className="flex items-center mb-4">
                  <span className="text-3xl text-gray-800 dark:text-gray-100 mr-3">📡</span>
                  <h4 className="text-xl font-bold text-blue-800 dark:text-blue-200">API Integration</h4>
                </div>
                <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                  <li>• Real-time order dispatch and tracking</li>
                  <li>• Automatic driver assignment and routing</li>
                  <li>• Live status updates and proof of delivery</li>
                  <li>• 99.9% API uptime guarantee</li>
                </ul>
              </div>
              
              <div className="backdrop-blur-sm bg-green-500/20 p-6 rounded-2xl border border-green-300/30">
                <div className="flex items-center mb-4">
                  <span className="text-3xl text-gray-800 dark:text-gray-100 mr-3">🔄</span>
                  <h4 className="text-xl font-bold text-green-800 dark:text-green-200">Workflow Automation</h4>
                </div>
                <ul className="space-y-2 text-green-700 dark:text-green-300">
                  <li>• Seamless handoff from Uber Freight platform</li>
                  <li>• Automated driver matching based on location/skills</li>
                  <li>• Dynamic pricing and capacity management</li>
                  <li>• Exception handling and escalation protocols</li>
                </ul>
              </div>
              
              <div className="backdrop-blur-sm bg-purple-500/20 p-6 rounded-2xl border border-purple-300/30">
                <div className="flex items-center mb-4">
                  <span className="text-3xl text-gray-800 dark:text-gray-100 mr-3">📊</span>
                  <h4 className="text-xl font-bold text-purple-800 dark:text-purple-200">Data Analytics</h4>
                </div>
                <ul className="space-y-2 text-purple-700 dark:text-purple-300">
                  <li>• Performance metrics and KPI dashboards</li>
                  <li>• Predictive analytics for demand planning</li>
                  <li>• Custom reporting and business intelligence</li>
                  <li>• Data-driven optimization recommendations</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Service Tiers */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">🎯 Service Tier Options</h3>
            <div className="space-y-4">
              {serviceTiers.map((tier, index) => (
                <div key={index} className={`backdrop-blur-sm ${tier.bgColor} p-6 rounded-2xl border ${tier.color}`}>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">{tier.tier}</h4>
                    <div className="text-lg font-bold text-gray-700 dark:text-gray-200">{tier.price}</div>
                  </div>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    {tier.features.map((feature, fi) => (
                      <li key={fi} className="flex items-center">
                        <span className="text-green-500 dark:text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-[#276EF1]/20 to-indigo-500/20 rounded-xl border border-blue-300/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">💡 Custom Solutions Available</h4>
              <p className="text-blue-700 dark:text-blue-300 text-sm">Bespoke service packages tailored to specific Uber Freight requirements and volume commitments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntegration;