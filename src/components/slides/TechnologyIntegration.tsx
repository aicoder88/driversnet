import React from 'react';
import { SlideProps } from './SlideTypes';

const TechnologyIntegration: React.FC<SlideProps> = ({ 
  className = '', 
  isActive, 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext, 
  currentSlide, 
  totalSlides 
}) => {
  const techStack = [
    {
      category: '3rd‑Party APIs & Webhooks',
      technologies: [
        { name: 'Onfleet', description: 'Routing, dispatch, driver app', icon: '🧭', status: 'Live' },
        { name: 'Dropcar', description: 'Vehicle logistics orchestration', icon: '🚘', status: 'Live' },
        { name: 'Webhooks', description: 'Instant status updates', icon: '⚡', status: 'Live' }
      ]
    },
    {
      category: 'Real-time Tracking',
      technologies: [
        { name: 'GPS Tracking', description: 'Sub-meter accuracy', icon: '📍', status: 'Live' },
        { name: 'Mobile SDKs', description: 'iOS & Android ready', icon: '📱', status: 'Live' },
        { name: 'Geofencing', description: 'Automated notifications', icon: '🎯', status: 'Live' }
      ]
    },
    {
      category: 'Data & Analytics',
      technologies: [
        { name: 'Real-time Analytics', description: 'Performance insights', icon: '📊', status: 'Live' },
        { name: 'Historical Reporting', description: 'Audit trails and KPIs', icon: '🗄️', status: 'Live' }
      ]
    }
  ];

  const integrationFeatures = [
    {
      title: 'Real-time Visibility',
      description: 'Every package, every second',
      features: ['Live GPS tracking', 'Status notifications', 'ETA predictions', 'Exception alerts'],
      icon: '👁️',
      color: 'green'
    },
    {
      title: 'Operational Reliability',
      description: 'Vendor-backed SLAs and redundancy',
      features: ['SLA-backed uptime', 'Redundant dispatch workflows', 'Proven incident response', 'Audit trails & alerts'],
      icon: '⚡',
      color: 'purple'
    },
    {
      title: 'Advanced Analytics',
      description: 'Data-driven optimization',
      features: ['Performance metrics', 'Cost analysis', 'Route optimization', 'Predictive insights'],
      icon: '📊',
      color: 'orange'
    }
  ];

  return (
    <section className={`min-h-screen flex flex-col space-y-16 ${className}`}>
      {/* Hero Section */}
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 text-white dark:text-gray-50 rounded-full font-semibold text-lg">
            Technology That Works With Partners
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            Seamless
            <br />
            <span className="text-blue-600 dark:text-blue-400">Integration</span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            We orchestrate best‑in‑class platforms like Onfleet and Dropcar
            <br />
            <strong className="text-blue-600 dark:text-blue-400">Deploy in hours, not months</strong>
          </p>
        </div>
      </div>

      {/* Technology Stack Overview */}
      <div className="bg-white dark:bg-gray-800 p-12 md:p-16 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Enterprise-Grade Technology Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Built for scale, designed for simplicity
          </p>
        </div>

        <div className="space-y-12">
          {techStack.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600 pb-3">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-3xl">{tech.icon}</div>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">
                        {tech.status}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {tech.name}
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto w-full">
        {integrationFeatures.map((feature, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-br from-${feature.color}-50 to-${feature.color}-100 dark:from-${feature.color}-900/20 dark:to-${feature.color}-800/20 p-8 rounded-3xl border border-${feature.color}-200 dark:border-${feature.color}-700 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full`}
          >
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className={`text-2xl font-bold text-${feature.color}-800 dark:text-${feature.color}-200 mb-2`}>
                {feature.title}
              </h3>
              <p className={`text-${feature.color}-600 dark:text-${feature.color}-300 text-lg`}>
                {feature.description}
              </p>
            </div>
            
            <ul className="space-y-3">
              {feature.features.map((featureItem, featureIndex) => (
                <li key={featureIndex} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full bg-${feature.color}-500`}></div>
                  <span className="text-gray-700 dark:text-gray-300">{featureItem}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Vendor Integrations Summary */}
      <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 max-w-3xl mx-auto w-full">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Vendor Integrations</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
          We configure and operate Onfleet and Dropcar to deliver real-time visibility and operational reliability. 
          Integrations are managed via vendor APIs and webhooks; no proprietary SDKs or custom code required from your team.
        </p>
      </div>

      {/* Slide Navigation */}
    </section>
  );
};

export default TechnologyIntegration;
