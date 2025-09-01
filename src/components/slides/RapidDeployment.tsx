import React from 'react';
import { SlideProps } from './SlideTypes';

const RapidDeployment: React.FC<SlideProps> = ({ className = '', isActive }) => {
  const deploymentTimeline = [
    {
      phase: 'Day 1',
      title: 'Initial Assessment',
      tasks: ['Requirements gathering', 'Route analysis', 'Volume projections', 'Integration planning'],
      icon: '🔍',
      color: 'blue'
    },
    {
      phase: 'Day 2-3',
      title: 'System Integration',
      tasks: ['API setup', 'Testing environment', 'Data migration', 'User training'],
      icon: '⚙️',
      color: 'purple'
    },
    {
      phase: 'Day 4-5',
      title: 'Driver Onboarding',
      tasks: ['Driver recruitment', 'Background checks', 'Training completion', 'Fleet assignment'],
      icon: '👥',
      color: 'green'
    },
    {
      phase: 'Day 6-7',
      title: 'Pilot Launch',
      tasks: ['Limited market test', 'Performance monitoring', 'Issue resolution', 'Optimization'],
      icon: '🚀',
      color: 'orange'
    },
    {
      phase: 'Week 2+',
      title: 'Full Deployment',
      tasks: ['Market expansion', 'Capacity scaling', 'Performance optimization', 'Continuous support'],
      icon: '📈',
      color: 'emerald'
    }
  ];

  const deploymentStats = [
    { label: 'Average Setup Time', value: '48hrs', icon: '⚡', description: 'From contract to live operations' },
    { label: 'Markets Deployed', value: '19', icon: '🌍', description: 'Across multiple regions' },
    { label: 'Success Rate', value: '100%', icon: '✅', description: 'Zero failed deployments' },
    { label: 'Client Satisfaction', value: '98%', icon: '⭐', description: 'Post-deployment rating' }
  ];

  const scalingCapabilities = [
    {
      capability: 'Instant Driver Network',
      description: '1,000+ pre-vetted drivers ready to deploy',
      benefit: 'No recruitment delays',
      icon: '👥',
      color: 'blue'
    },
    {
      capability: 'Plug-and-Play Technology',
      description: 'Pre-built APIs and integration tools',
      benefit: 'Hours, not months to integrate',
      icon: '🔌',
      color: 'purple'
    },
    {
      capability: 'Proven Operations Framework',
      description: '12 years of refined processes',
      benefit: 'Zero learning curve',
      icon: '⚙️',
      color: 'green'
    },
    {
      capability: 'Elastic Scaling',
      description: 'Auto-scale up or down based on demand',
      benefit: 'Pay only for what you use',
      icon: '📊',
      color: 'orange'
    }
  ];

  const comparisonData = [
    {
      approach: 'Build In-House',
      timeline: '18-24 months',
      cost: '$2M+ initial',
      risk: 'High failure rate',
      maintenance: 'Ongoing overhead',
      icon: '🏗️',
      color: 'red'
    },
    {
      approach: 'Driver Network',
      timeline: '48 hours',
      cost: 'Zero upfront',
      risk: 'Proven success',
      maintenance: 'Fully managed',
      icon: '🚀',
      color: 'green'
    }
  ];

  return (
    <section className={`min-h-screen flex flex-col justify-center space-y-20 ${className}`}>
      {/* Hero Section */}
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-700 dark:to-red-700 text-white dark:text-gray-50 rounded-full font-semibold text-lg">
            Speed of Implementation
          </div>
          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            Rapid
            <br />
            <span className="text-orange-600 dark:text-orange-400">Deployment</span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            While others spend months building, we deliver results in days
            <br />
            <strong className="text-orange-600 dark:text-orange-400">48 hours to full operations</strong>
          </p>
        </div>
      </div>

      {/* Deployment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {deploymentStats.map((stat, index) => (
          <div 
            key={index}
            className="text-center bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-5xl mb-4">{stat.icon}</div>
            <div className="text-5xl font-bold text-orange-600 dark:text-orange-400 mb-3">
              {stat.value}
            </div>
            <div className="font-bold mb-2 text-lg text-gray-800 dark:text-gray-200">
              {stat.label}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {stat.description}
            </div>
          </div>
        ))}
      </div>

      {/* Deployment Timeline */}
      <div className="bg-white dark:bg-gray-800 p-16 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            7-Day Deployment Timeline
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            From handshake to full operations in one week
          </p>
        </div>

        <div className="space-y-8">
          {deploymentTimeline.map((phase, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br from-${phase.color}-500 to-${phase.color}-600 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg`}>
                {phase.icon}
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`bg-${phase.color}-100 dark:bg-${phase.color}-900/30 text-${phase.color}-800 dark:text-${phase.color}-200 px-4 py-2 rounded-full font-semibold`}>
                    {phase.phase}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    {phase.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {phase.tasks.map((task, taskIndex) => (
                    <div 
                      key={taskIndex}
                      className={`bg-${phase.color}-50 dark:bg-${phase.color}-900/20 p-4 rounded-lg border border-${phase.color}-200 dark:border-${phase.color}-700`}
                    >
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-${phase.color}-500`}></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                          {task}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scaling Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {scalingCapabilities.map((capability, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-br from-${capability.color}-50 to-${capability.color}-100 dark:from-${capability.color}-900/20 dark:to-${capability.color}-800/20 p-8 rounded-3xl border border-${capability.color}-200 dark:border-${capability.color}-700 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
          >
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{capability.icon}</div>
              <h3 className={`text-2xl font-bold text-${capability.color}-800 dark:text-${capability.color}-200 mb-2`}>
                {capability.capability}
              </h3>
              <p className={`text-${capability.color}-600 dark:text-${capability.color}-300 text-lg mb-4`}>
                {capability.description}
              </p>
              <div className={`bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl border border-${capability.color}-200 dark:border-${capability.color}-600`}>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  Benefit: {capability.benefit}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Build vs Deploy Comparison */}
      <div className="bg-gradient-to-r from-gray-50 to-orange-50 dark:from-gray-900/50 dark:to-orange-900/20 p-16 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Build vs Deploy: The Reality Check
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Side-by-side comparison of approaches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {comparisonData.map((approach, index) => (
            <div 
              key={index}
              className={`${
                approach.color === 'green' 
                  ? 'bg-green-100 dark:bg-green-900/20 border-green-300 dark:border-green-700' 
                  : 'bg-red-100 dark:bg-red-900/20 border-red-300 dark:border-red-700'
              } p-8 rounded-3xl border-2 shadow-xl`}
            >
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{approach.icon}</div>
                <h3 className={`text-3xl font-bold ${
                  approach.color === 'green' 
                    ? 'text-green-800 dark:text-green-200' 
                    : 'text-red-800 dark:text-red-200'
                } mb-4`}>
                  {approach.approach}
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-xl">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Timeline:</span>
                  <span className={`font-bold ${
                    approach.color === 'green' 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {approach.timeline}
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-xl">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Initial Cost:</span>
                  <span className={`font-bold ${
                    approach.color === 'green' 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {approach.cost}
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-xl">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Risk Level:</span>
                  <span className={`font-bold ${
                    approach.color === 'green' 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {approach.risk}
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-xl">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Maintenance:</span>
                  <span className={`font-bold ${
                    approach.color === 'green' 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {approach.maintenance}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-3xl font-bold text-orange-800 dark:text-orange-200 mb-4">
            The Choice is Clear
          </h3>
          <p className="text-xl text-orange-600 dark:text-orange-300 max-w-4xl mx-auto">
            Don't spend 18 months building what we perfected in 12 years. 
            <strong className="font-bold"> Deploy today, scale tomorrow. </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RapidDeployment;