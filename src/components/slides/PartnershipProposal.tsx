import React from 'react';
import { SlideProps } from './SlideTypes';

const PartnershipProposal: React.FC<SlideProps> = ({ 
  className = '', 
  isActive, 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext, 
  currentSlide, 
  totalSlides 
}) => {
  const proposalHighlights = [
    {
      title: 'Immediate Network Access',
      description: '1,000+ drivers across 19 markets ready to deploy',
      value: '$50M+ proven capacity',
      icon: '🌐',
      color: 'blue'
    },
    {
      title: 'Zero Infrastructure Investment',
      description: 'No upfront costs, no hiring, no training overhead',
      value: '$2M+ savings vs building',
      icon: '💰',
      color: 'green'
    },
    {
      title: 'Enterprise-Grade Technology',
      description: 'API integration, real-time tracking, analytics dashboard',
      value: '48-hour integration',
      icon: '⚡',
      color: 'purple'
    },
    {
      title: 'Proven Performance',
      description: '100% on-time delivery, 99.9% damage-free record',
      value: '98% client satisfaction',
      icon: '🎯',
      color: 'orange'
    }
  ];

  const partnershipModels = [
    {
      model: 'Strategic Partnership',
      description: 'Full network integration with co-branded service',
      benefits: [
        'Dedicated driver fleet allocation',
        'Custom technology integration',
        'Joint marketing initiatives',
        'Priority capacity access'
      ],
      commitment: 'Multi-year partnership',
      icon: '🤝',
      color: 'blue',
      recommended: true
    },
    {
      model: 'Service Integration',
      description: 'White-label logistics as part of your platform',
      benefits: [
        'Seamless API integration',
        'Your branding throughout',
        'Custom pricing models',
        'Dedicated account management'
      ],
      commitment: 'Flexible terms',
      icon: '🔗',
      color: 'green',
      recommended: false
    },
    {
      model: 'Pilot Program',
      description: 'Limited scope proof-of-concept deployment',
      benefits: [
        'Low-risk market test',
        'Performance validation',
        'Scalable foundation',
        'Quick implementation'
      ],
      commitment: '90-day pilot',
      icon: '🧪',
      color: 'orange',
      recommended: false
    }
  ];

  const mutualBenefits = [
    {
      category: 'For Uber Freight',
      benefits: [
        'Instant capacity expansion without capital investment',
        'Access to specialized driver networks (automotive, medical, etc.)',
        'Reduced operational complexity and overhead',
        'Enhanced service reliability and geographic coverage',
        'Faster market entry in new regions'
      ],
      icon: '📈',
      color: 'blue'
    },
    {
      category: 'For Driver Network',
      benefits: [
        'Access to Uber\'s vast customer base and brand power',
        'Technology platform integration and optimization',
        'Increased driver utilization and revenue streams',
        'Strategic positioning in enterprise logistics market',
        'Accelerated growth through proven sales channels'
      ],
      icon: '🚀',
      color: 'green'
    }
  ];

  const implementationTimeline = [
    {
      phase: 'Week 1',
      title: 'Partnership Agreement',
      tasks: ['Contract finalization', 'Technical requirements', 'Service level agreements'],
      icon: '📋'
    },
    {
      phase: 'Week 2',
      title: 'Technical Integration',
      tasks: ['API development', 'System testing', 'Security validation'],
      icon: '⚙️'
    },
    {
      phase: 'Week 3',
      title: 'Pilot Launch',
      tasks: ['Limited market deployment', 'Performance monitoring', 'Issue resolution'],
      icon: '🚀'
    },
    {
      phase: 'Week 4+',
      title: 'Full Deployment',
      tasks: ['Market expansion', 'Capacity scaling', 'Continuous optimization'],
      icon: '📊'
    }
  ];

  const keyTerms = [
    { term: 'Geographic Scope', detail: '19 major markets, expandable to 30+ by 2025' },
    { term: 'Service Levels', detail: '100% on-time delivery, 99.9% damage-free transport' },
    { term: 'Technology', detail: 'Full API integration with real-time tracking and analytics' },
    { term: 'Pricing', detail: 'Competitive rates with volume discounts and performance bonuses' },
    { term: 'Exclusivity', detail: 'Strategic partnership terms with defined market protections' },
    { term: 'Support', detail: '24/7 operations center with dedicated account management' }
  ];

  return (
    <section className={`min-h-screen flex flex-col justify-center space-y-20 ${className}`}>
      {/* Hero Section */}
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-700 dark:to-teal-700 text-white dark:text-gray-50 rounded-full font-semibold text-lg">
            Strategic Alliance Opportunity
          </div>
          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            Partnership
            <br />
            <span className="text-emerald-600 dark:text-emerald-400">Proposal</span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            A strategic partnership that transforms logistics for both companies
            <br />
            <strong className="text-emerald-600 dark:text-emerald-400">Ready to start today</strong>
          </p>
        </div>
      </div>

      {/* Proposal Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {proposalHighlights.map((highlight, index) => (
          <div 
            key={index}
            className="text-center bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-5xl mb-4">{highlight.icon}</div>
            <h3 className={`text-lg font-bold text-${highlight.color}-600 dark:text-${highlight.color}-400 mb-2`}>
              {highlight.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {highlight.description}
            </p>
            <div className={`text-2xl font-bold text-${highlight.color}-800 dark:text-${highlight.color}-200`}>
              {highlight.value}
            </div>
          </div>
        ))}
      </div>

      {/* Partnership Models */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Partnership Models
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Flexible approaches designed to fit your strategic objectives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnershipModels.map((model, index) => (
            <div 
              key={index}
              className={`${
                model.recommended 
                  ? 'ring-4 ring-emerald-200 dark:ring-emerald-700 bg-emerald-50 dark:bg-emerald-900/20' 
                  : 'bg-white dark:bg-gray-800'
              } p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 relative hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
            >
              {model.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-emerald-600 dark:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-bold">
                    RECOMMENDED
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{model.icon}</div>
                <h3 className={`text-2xl font-bold text-${model.color}-800 dark:text-${model.color}-200 mb-2`}>
                  {model.model}
                </h3>
                <p className={`text-${model.color}-600 dark:text-${model.color}-300`}>
                  {model.description}
                </p>
              </div>
              
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Key Benefits:</h4>
                <ul className="space-y-2">
                  {model.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-${model.color}-500 mt-2`}></div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`bg-${model.color}-100 dark:bg-${model.color}-900/30 p-4 rounded-xl text-center`}>
                <span className={`font-semibold text-${model.color}-800 dark:text-${model.color}-200`}>
                  {model.commitment}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mutual Benefits */}
      <div className="bg-white dark:bg-gray-800 p-16 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Mutual Value Creation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A partnership that creates value for both organizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {mutualBenefits.map((benefitCategory, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br from-${benefitCategory.color}-50 to-${benefitCategory.color}-100 dark:from-${benefitCategory.color}-900/20 dark:to-${benefitCategory.color}-800/20 p-8 rounded-3xl border border-${benefitCategory.color}-200 dark:border-${benefitCategory.color}-700`}
            >
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">{benefitCategory.icon}</div>
                <h3 className={`text-2xl font-bold text-${benefitCategory.color}-800 dark:text-${benefitCategory.color}-200`}>
                  {benefitCategory.category}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {benefitCategory.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start space-x-3">
                    <div className={`w-3 h-3 rounded-full bg-${benefitCategory.color}-500 mt-1.5`}></div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Timeline */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Implementation Timeline
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            From handshake to full deployment in 4 weeks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {implementationTimeline.map((phase, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{phase.icon}</div>
              <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 px-4 py-2 rounded-full text-sm font-bold mb-4">
                {phase.phase}
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
                {phase.title}
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {phase.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Key Terms */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-16 rounded-3xl border border-emerald-200 dark:border-emerald-700 shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-800 dark:text-emerald-200 mb-6">
            Partnership Framework
          </h2>
          <p className="text-xl text-emerald-600 dark:text-emerald-300">
            Key terms and commitments that define our strategic alliance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyTerms.map((item, index) => (
            <div 
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-600 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-bold text-gray-800 dark:text-gray-200 text-lg mb-3">
                {item.term}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-8">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
            Ready to Transform Logistics?
          </h2>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            This partnership opportunity won't wait. Our network, your platform, unlimited potential.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="bg-emerald-600 dark:bg-emerald-700 text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-1">
            Start Strategic Partnership
          </div>
          <div className="bg-white dark:bg-gray-800 border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 px-12 py-6 rounded-full text-xl font-bold hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 cursor-pointer hover:shadow-xl">
            Schedule Pilot Program
          </div>
        </div>
        
        <div className="pt-8 text-gray-500 dark:text-gray-400">
          <p>Questions? Contact our partnership team at <strong>partnerships@drivernetwork.com</strong></p>
        </div>
      </div>

      {/* Slide Navigation */}
    </section>
  );
};

export default PartnershipProposal;