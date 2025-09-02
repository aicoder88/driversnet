import React from 'react';
import { SlideProps } from './SlideTypes';

const CompetitiveAdvantage: React.FC<SlideProps> = ({ 
  className = '', 
  isActive, 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext, 
  currentSlide, 
  totalSlides 
}) => {
  const competitiveMatrix = [
    { 
      capability: 'Market Entry Speed', 
      us: '7 days', 
      traditional: '3-6 months', 
      gig: '2-4 weeks',
      icon: '🚀',
      score: { us: 95, traditional: 25, gig: 65 }
    },
    { 
      capability: 'Driver Quality Control', 
      us: '68% referral-based', 
      traditional: 'Variable', 
      gig: 'Minimal screening',
      icon: '⭐',
      score: { us: 95, traditional: 60, gig: 35 }
    },
    { 
      capability: 'Multi-Industry Coverage', 
      us: '3 active verticals', 
      traditional: '1-2 specialties', 
      gig: 'Limited scope',
      icon: '🎯',
      score: { us: 90, traditional: 50, gig: 30 }
    },
    { 
      capability: 'Technology Integration', 
      us: 'API-first, 99.9% uptime', 
      traditional: 'Legacy systems', 
      gig: 'Platform-dependent',
      icon: '⚡',
      score: { us: 98, traditional: 40, gig: 70 }
    },
    { 
      capability: 'Geographic Reach', 
      us: '19+ markets', 
      traditional: '5-10 markets', 
      gig: 'Major cities only',
      icon: '🌍',
      score: { us: 85, traditional: 55, gig: 75 }
    },
    { 
      capability: 'Damage-Free Rate', 
      us: '99.9%', 
      traditional: '94-96%', 
      gig: '88-92%',
      icon: '🛡️',
      score: { us: 99, traditional: 75, gig: 60 }
    }
  ];

  return (
    <section className={`space-y-8 ${className}`}>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#276EF1] via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Competitive Advantage Matrix
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comparing Driver Network's superior performance across key business dimensions
        </p>
      </div>

      {/* Interactive Matrix Cards */}
      <div className="grid gap-8 max-w-7xl mx-auto">
        {competitiveMatrix.map((item, index) => (
          <div 
            key={index}
            className="group backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 rounded-3xl border border-white/30 dark:border-gray-600/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1"
          >
            <div className="p-8">
              {/* Capability Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {item.capability}
                  </h3>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Performance Comparison
                </div>
              </div>

              {/* Comparison Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Driver Network - Winner */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-900/30 dark:to-green-800/30 border-2 border-emerald-200 dark:border-emerald-600/50 p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="absolute top-3 right-3">
                    <div className="bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      LEADER
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-100 mb-2">
                      Driver Network
                    </h4>
                    <div className="text-2xl font-black text-emerald-800 dark:text-emerald-200 mb-2">
                      {item.us}
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full bg-emerald-200 dark:bg-emerald-800/50 rounded-full h-3 mb-2">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-green-400 h-3 rounded-full transition-all duration-1000 delay-300"
                      style={{ width: `${item.score.us}%` }}
                    />
                  </div>
                  <div className="text-emerald-700 dark:text-emerald-300 font-semibold text-sm">
                    Score: {item.score.us}/100
                  </div>
                </div>

                {/* Traditional 3PL */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-800/30 border-2 border-amber-200 dark:border-amber-600/50 p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-amber-900 dark:text-amber-100 mb-2">
                      Traditional 3PL
                    </h4>
                    <div className="text-lg font-bold text-amber-800 dark:text-amber-200 mb-2">
                      {item.traditional}
                    </div>
                  </div>
                  <div className="w-full bg-amber-200 dark:bg-amber-800/50 rounded-full h-3 mb-2">
                    <div 
                      className="bg-gradient-to-r from-amber-500 to-yellow-400 h-3 rounded-full transition-all duration-1000 delay-500"
                      style={{ width: `${item.score.traditional}%` }}
                    />
                  </div>
                  <div className="text-amber-700 dark:text-amber-300 font-semibold text-sm">
                    Score: {item.score.traditional}/100
                  </div>
                </div>

                {/* Gig Platforms */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-900/30 dark:to-pink-800/30 border-2 border-red-200 dark:border-red-600/50 p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-red-900 dark:text-red-100 mb-2">
                      Gig Platforms
                    </h4>
                    <div className="text-lg font-bold text-red-800 dark:text-red-200 mb-2">
                      {item.gig}
                    </div>
                  </div>
                  <div className="w-full bg-red-200 dark:bg-red-800/50 rounded-full h-3 mb-2">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-pink-400 h-3 rounded-full transition-all duration-1000 delay-700"
                      style={{ width: `${item.score.gig}%` }}
                    />
                  </div>
                  <div className="text-red-700 dark:text-red-300 font-semibold text-sm">
                    Score: {item.score.gig}/100
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Insights */}
      <div className="mt-16">
        <div className="backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 rounded-3xl border border-white/30 dark:border-gray-600/30 shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#276EF1] to-purple-600 bg-clip-text text-transparent">
            Key Competitive Insights
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-3xl text-white group-hover:scale-110 transition-transform duration-300">
                🏆
              </div>
              <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                Market Dominance
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Consistently outperforming competitors across all key performance indicators with industry-leading results
              </p>
              <div className="mt-4 text-2xl font-bold text-emerald-500">
                92% Average Score
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-3xl text-white group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                Speed Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Revolutionary 7-day market entry compared to traditional 3-6 month deployment cycles
              </p>
              <div className="mt-4 text-2xl font-bold text-blue-500">
                10x Faster
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-3xl text-white group-hover:scale-110 transition-transform duration-300">
                🚀
              </div>
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                Technology Edge
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                API-first architecture with 99.9% uptime delivering superior reliability and integration capabilities
              </p>
              <div className="mt-4 text-2xl font-bold text-purple-500">
                99.9% Uptime
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Banner */}
      <div className="mt-12 backdrop-blur-lg bg-gradient-to-r from-[#276EF1]/20 to-purple-600/20 rounded-3xl border border-white/30 dark:border-gray-600/30 p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Ready to Experience the Driver Network Advantage?
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Join industry leaders who've already transformed their logistics operations
        </p>
        <div className="flex justify-center items-center gap-2 text-[#276EF1] font-semibold">
          <span>Let's discuss your specific requirements</span>
          <span className="text-2xl">→</span>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantage;