import React from 'react';
import { SlideProps } from './SlideTypes';
import { CONTACTS, CALENDLY_URL, CONTACT_EMAIL } from '@/lib/contact';

const NextSteps: React.FC<SlideProps> = ({ 
  className = '', 
  isActive, 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext, 
  currentSlide, 
  totalSlides 
}) => {
  const immediateActions = [
    {
      action: 'Schedule Partnership Meeting',
      description: 'Discuss strategic alignment and partnership terms',
      timeline: 'Within 48 hours',
      stakeholders: ['Partnership Team', 'Technical Leadership'],
      icon: '📅',
      color: 'blue'
    },
    {
      action: 'Technical Assessment',
      description: 'Review integration requirements and technical specifications',
      timeline: 'Week 1',
      stakeholders: ['Engineering Teams', 'DevOps'],
      icon: '⚙️',
      color: 'purple'
    },
    {
      action: 'Pilot Program Design',
      description: 'Define scope, metrics, and success criteria for initial deployment',
      timeline: 'Week 1-2',
      stakeholders: ['Operations', 'Product Management'],
      icon: '🧪',
      color: 'orange'
    },
    {
      action: 'Legal & Commercial Terms',
      description: 'Finalize partnership agreement and commercial framework',
      timeline: 'Week 2-3',
      stakeholders: ['Legal', 'Business Development'],
      icon: '📋',
      color: 'green'
    }
  ];

  const implementationPhases = [
    {
      phase: 'Phase 1: Partnership Agreement',
      duration: '1-2 weeks',
      deliverables: [
        'Signed partnership agreement',
        'Technical integration plan',
        'Success metrics definition',
        'Communication protocols'
      ],
      icon: '🤝',
      color: 'emerald'
    },
    {
      phase: 'Phase 2: Pilot Deployment',
      duration: '2-4 weeks',
      deliverables: [
        'Limited market pilot launch',
        'API integration completion',
        'Driver onboarding (pilot group)',
        'Performance monitoring setup'
      ],
      icon: '🚀',
      color: 'blue'
    },
    {
      phase: 'Phase 3: Scale & Optimize',
      duration: '4-8 weeks',
      deliverables: [
        'Full market deployment',
        'Complete driver network activation',
        'Performance optimization',
        'Long-term partnership roadmap'
      ],
      icon: '📈',
      color: 'purple'
    }
  ];

  const keyDecisionPoints = [
    {
      decision: 'Partnership Model Selection',
      options: ['Strategic Partnership', 'Service Integration', 'Pilot Program'],
      impact: 'Defines scope and commitment level',
      timeline: 'This week',
      owner: 'Executive Leadership'
    },
    {
      decision: 'Geographic Scope',
      options: ['Select Markets', 'Regional Focus', 'National Deployment'],
      impact: 'Determines initial capacity and investment',
      timeline: 'Week 1',
      owner: 'Operations Team'
    },
    {
      decision: 'Technology Integration Level',
      options: ['API Only', 'Full Platform', 'Custom Development'],
      impact: 'Affects implementation timeline and complexity',
      timeline: 'Week 1-2',
      owner: 'Engineering Leadership'
    }
  ];

  const successMetrics = [
    { metric: 'Partnership Launch', target: '30 days', category: 'Timeline' },
    { metric: 'API Integration', target: '2-3 days', category: 'Technical' },
    { metric: 'Driver Onboarding', target: '500+ drivers', category: 'Capacity' },
    { metric: 'Service Performance', target: '99%+ reliability', category: 'Quality' },
    { metric: 'Client Satisfaction', target: '95%+ rating', category: 'Experience' },
    { metric: 'Revenue Impact', target: '25%+ increase', category: 'Business' }
  ];

  const contacts = CONTACTS;

  return (
    <section className={`min-h-screen flex flex-col justify-center space-y-20 ${className}`}>
      {/* Hero Section */}
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 text-white dark:text-gray-50 rounded-full font-semibold text-lg">
            Ready to Begin
          </div>
          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            Next
            <br />
            <span className="text-green-600 dark:text-green-400">Steps</span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            From this conversation to full partnership in 30 days
            <br />
            <strong className="text-green-600 dark:text-green-400">Let's make it happen</strong>
          </p>
        </div>
      </div>

      {/* Immediate Actions */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Immediate Action Items
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Critical next steps to move forward with the partnership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {immediateActions.map((action, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br from-${action.color}-50 to-${action.color}-100 dark:from-${action.color}-900/20 dark:to-${action.color}-800/20 p-8 rounded-3xl border border-${action.color}-200 dark:border-${action.color}-700 shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 bg-${action.color}-600 rounded-full flex items-center justify-center text-xl text-white`}>
                  {action.icon}
                </div>
                <div className="flex-grow">
                  <h3 className={`text-xl font-bold text-${action.color}-800 dark:text-${action.color}-200 mb-2`}>
                    {action.action}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {action.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Timeline:</span>
                      <span className={`text-sm font-bold text-${action.color}-600 dark:text-${action.color}-400`}>
                        {action.timeline}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 block mb-1">Stakeholders:</span>
                      <div className="flex flex-wrap gap-2">
                        {action.stakeholders.map((stakeholder, stakeholderIndex) => (
                          <span 
                            key={stakeholderIndex}
                            className={`text-xs px-2 py-1 rounded-full bg-${action.color}-200 dark:bg-${action.color}-800 text-${action.color}-800 dark:text-${action.color}-200`}
                          >
                            {stakeholder}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Phases */}
      <div className="backdrop-blur-lg bg-white/95 dark:bg-gray-800/95 p-16 rounded-3xl shadow-2xl border border-white/30 dark:border-gray-600/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Implementation Roadmap
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Three-phase approach to full partnership deployment
          </p>
        </div>

        <div className="space-y-8">
          {implementationPhases.map((phase, index) => (
            <div 
              key={index}
              className="flex items-start space-x-6 p-6 rounded-2xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
            >
              <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br from-${phase.color}-500 to-${phase.color}-600 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg`}>
                {phase.icon}
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center space-x-4 mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    {phase.phase}
                  </h3>
                  <div className={`bg-${phase.color}-100 dark:bg-${phase.color}-900/30 text-${phase.color}-800 dark:text-${phase.color}-200 px-4 py-2 rounded-full font-semibold text-sm`}>
                    {phase.duration}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {phase.deliverables.map((deliverable, deliverableIndex) => (
                    <div 
                      key={deliverableIndex}
                      className={`bg-white dark:bg-gray-800 p-4 rounded-lg border border-${phase.color}-200 dark:border-${phase.color}-700`}
                    >
                      <div className="flex items-start space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-${phase.color}-500 mt-2`}></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          {deliverable}
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

      {/* Key Decision Points */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Key Decision Points
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Critical decisions needed to move forward
          </p>
        </div>

        <div className="space-y-6">
          {keyDecisionPoints.map((decision, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-8 rounded-3xl border border-yellow-200 dark:border-yellow-700 shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-200 text-lg mb-2">
                    {decision.decision}
                  </h3>
                  <p className="text-yellow-600 dark:text-yellow-400 text-sm font-semibold">
                    Due: {decision.timeline}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Options:</h4>
                  <ul className="space-y-1">
                    {decision.options.map((option, optionIndex) => (
                      <li key={optionIndex} className="text-sm text-gray-700 dark:text-gray-300 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                        <span>{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Impact:</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{decision.impact}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Decision Owner:</h4>
                  <p className="text-sm font-medium text-orange-600 dark:text-orange-400">{decision.owner}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Metrics */}
      <div className="backdrop-blur-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-16 rounded-3xl border border-green-200 dark:border-green-700 shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 dark:text-green-200 mb-6">
            Success Metrics & Targets
          </h2>
          <p className="text-xl text-green-600 dark:text-green-300">
            How we'll measure the success of our partnership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {successMetrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl border border-green-200 dark:border-green-600 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {metric.target}
              </div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                {metric.metric}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {metric.category}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Your Partnership Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Direct contacts for immediate next steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{contact.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {contact.name}
              </h3>
              <div className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                {contact.role}
              </div>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                <div>{contact.email}</div>
                {contact.phone ? (
                  <div>{contact.phone}</div>
                ) : (
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-blue-600 dark:text-blue-400 underline"
                  >
                    Schedule a call
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                {contact.focus}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Final Call to Action with Visual Impact */}
      <div className="relative overflow-hidden text-center space-y-8 backdrop-blur-lg bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-700 dark:via-purple-700 dark:to-indigo-800 p-16 rounded-3xl text-white border border-blue-400/30 dark:border-blue-500/30 shadow-2xl">
        {/* Background Graphics */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/15 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/25 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 space-y-8">
          {/* Compelling Header with Graphics */}
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl animate-bounce">
                🚀
              </div>
              <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                READY TO TRANSFORM LOGISTICS?
              </h2>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl animate-bounce delay-300">
                ⚡
              </div>
            </div>
            
            {/* Visual Impact Elements */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 transform hover:scale-105 transition-all">
                <div className="text-4xl mb-3">🌐</div>
                <div className="text-2xl font-bold mb-2">1,000+</div>
                <div className="text-sm opacity-90">Drivers Ready</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 transform hover:scale-105 transition-all">
                <div className="text-4xl mb-3">📍</div>
                <div className="text-2xl font-bold mb-2">19</div>
                <div className="text-sm opacity-90">Markets Active</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 transform hover:scale-105 transition-all">
                <div className="text-4xl mb-3">⏱️</div>
                <div className="text-2xl font-bold mb-2">48hrs</div>
                <div className="text-sm opacity-90">To Launch</div>
              </div>
            </div>
            
            <p className="text-2xl max-w-5xl mx-auto opacity-90 leading-relaxed">
              Every day of delay costs you <strong className="text-yellow-200">$2.3M in missed opportunities</strong>. 
              <br />
              Our network is ready, our technology is proven, and our team is waiting.
              <br />
              <span className="text-3xl font-bold text-yellow-200">The question isn't if, but when.</span>
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-blue-600 px-12 py-6 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            Schedule Partnership Meeting
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-transparent border-2 border-white text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Schedule a Call
          </a>
        </div>
        
        <div className="pt-8 opacity-75">
          <p>Available for partnership discussions • {CONTACT_EMAIL}</p>
        </div>
      </div>

      {/* Slide Navigation */}
    </section>
  );
};

export default NextSteps;
