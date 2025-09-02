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
      {/* Enhanced Hero Section with Clear Value Proposition */}
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-full font-semibold text-lg">
            🔗 Seamless Uber Freight Integration
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            🚀 Uber Freight
            <br />
            <span className="text-black dark:text-white">Integration</span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Instant network expansion without infrastructure investment
            <br />
            <strong className="text-black dark:text-white">Ready to deploy in 48 hours</strong>
          </p>
        </div>
        
        {/* Clear Value Proposition Visual */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-3xl border border-gray-200 dark:border-gray-600 shadow-2xl max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Uber Freight */}
            <div className="text-center">
              <div className="bg-black p-6 rounded-2xl shadow-lg mb-4">
                <img src="/uber-logo.jpg" alt="Uber Freight" className="w-16 h-16 mx-auto object-contain rounded-lg bg-white p-2" />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">UBER FREIGHT</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Your existing platform</p>
            </div>
            
            {/* Integration Arrow */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-1 bg-gradient-to-r from-black to-blue-600"></div>
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs animate-pulse">⚡</div>
                <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-black"></div>
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                48-HOUR INTEGRATION
              </div>
            </div>
            
            {/* Driver Network */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl shadow-lg mb-4">
                <img src="/driversnet logo.jpeg" alt="Driver Network" className="w-16 h-16 mx-auto object-contain rounded-lg bg-white p-2" />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">DRIVER NETWORK</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">1,000+ drivers ready</p>
            </div>
          </div>
          
          {/* Immediate Benefits */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">$0</div>
              <div className="text-xs text-green-800 dark:text-green-200">Infrastructure Investment</div>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
              <div className="text-xs text-blue-800 dark:text-blue-200">API Compatibility</div>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
              <div className="text-xs text-purple-800 dark:text-purple-200">Support Coverage</div>
            </div>
          </div>
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

      {/* Clear Next Steps Section */}
      <div className="bg-gradient-to-r from-black to-gray-800 text-white p-12 rounded-3xl shadow-2xl">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 bg-white/20 rounded-full font-semibold text-lg mb-6">
            🎯 Next Steps
          </div>
          <h2 className="text-4xl font-bold mb-6">Ready to Integrate with Uber Freight?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three simple steps to transform your logistics capacity
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mb-6 mx-auto">
              1
            </div>
            <h3 className="text-xl font-bold mb-4">Schedule Integration Call</h3>
            <p className="text-gray-300 mb-6 text-sm">
              30-minute technical discussion to review your requirements and integration approach
            </p>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition cursor-pointer">
              Book Call Now
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-3xl font-bold mb-6 mx-auto">
              2
            </div>
            <h3 className="text-xl font-bold mb-4">48-Hour Integration</h3>
            <p className="text-gray-300 mb-6 text-sm">
              Our technical team implements the API integration and conducts comprehensive testing
            </p>
            <div className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold">
              Fast Implementation
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-3xl font-bold mb-6 mx-auto">
              3
            </div>
            <h3 className="text-xl font-bold mb-4">Go Live & Scale</h3>
            <p className="text-gray-300 mb-6 text-sm">
              Launch with immediate access to 1,000+ drivers across 19 markets with 24/7 support
            </p>
            <div className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold">
              Launch Ready
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="text-lg text-gray-300 mb-6">
            <strong>Ready to get started?</strong> Our integration specialists are standing by.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition cursor-pointer">
              📞 Schedule Integration Call
            </div>
            <div className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition cursor-pointer">
              📧 Email Integration Team
            </div>
          </div>
          <div className="mt-6 text-sm text-gray-400">
            Questions? Contact our integration team at <strong>integrations@driversnet.io</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntegration;