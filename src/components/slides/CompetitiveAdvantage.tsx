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
  // Competitive advantage matrix data
  const competitiveMatrix = [
    { capability: 'Market Entry Speed', us: '7 days', traditional: '3-6 months', gig: '2-4 weeks' },
    { capability: 'Driver Quality Control', us: '68% referral-based', traditional: 'Variable', gig: 'Minimal screening' },
    { capability: 'Multi-Industry Coverage', us: '3 active verticals', traditional: '1-2 specialties', gig: 'Limited scope' },
    { capability: 'Technology Integration', us: 'API-first, 99.9% uptime', traditional: 'Legacy systems', gig: 'Platform-dependent' },
    { capability: 'Geographic Reach', us: '19+ markets', traditional: '5-10 markets', gig: 'Major cities only' },
    { capability: 'Damage-Free Rate', us: '99.9%', traditional: '94-96%', gig: '88-92%' }
  ];

  return (
    <section className={`space-y-12 ${className}`}>
      <div className="backdrop-blur-lg bg-white/95 dark:bg-gray-800/95 p-8 rounded-3xl border border-white/30 dark:border-gray-600/30 shadow-2xl">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#276EF1] to-indigo-600 bg-clip-text text-transparent">
          ⚡ Competitive Advantage Matrix
        </h2>
        
        <div className="overflow-x-auto mb-8">
          <table className="w-full bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl">
            <thead>
              <tr className="bg-gradient-to-r from-[#276EF1] to-indigo-600 text-white dark:text-white dark:text-gray-100">
                <th className="p-4 text-left text-gray-100 dark:text-gray-50 font-bold">Capability</th>
                <th className="p-4 text-center text-gray-100 dark:text-gray-50 font-bold">Driver Network</th>
                <th className="p-4 text-center text-gray-100 dark:text-gray-50 font-bold">Traditional 3PL</th>
                <th className="p-4 text-center text-gray-100 dark:text-gray-50 font-bold">Gig Platforms</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 dark:text-gray-100">
              {competitiveMatrix.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700/30' : 'bg-white dark:bg-gray-800/30'}>
                  <td className="p-4 font-semibold text-gray-900 dark:text-gray-100">{row.capability}</td>
                  <td className="p-4 text-center">
                    <div className="bg-green-500/20 px-3 py-2 rounded-lg">
                      <span className="font-bold text-green-800 dark:text-green-200">{row.us}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="bg-yellow-500/20 px-3 py-2 rounded-lg">
                      <span className="font-medium text-yellow-800 dark:text-yellow-200">{row.traditional}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="bg-red-500/20 px-3 py-2 rounded-lg">
                      <span className="font-medium text-red-800 dark:text-red-200">{row.gig}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="backdrop-blur-sm bg-green-500/20 p-6 rounded-2xl border border-green-300/30 text-center text-gray-800 dark:text-gray-100">
            <div className="text-4xl text-gray-800 dark:text-gray-100 mb-3">🏆</div>
            <h4 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">Market Leadership</h4>
            <p className="text-green-700 dark:text-green-300">Superior performance across all key metrics</p>
          </div>
          <div className="backdrop-blur-sm bg-blue-500/20 p-6 rounded-2xl border border-blue-300/30 text-center text-gray-800 dark:text-gray-100">
            <div className="text-4xl text-gray-800 dark:text-gray-100 mb-3">⚡</div>
            <h4 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">Speed Advantage</h4>
            <p className="text-blue-700 dark:text-blue-300">10x faster market entry than traditional solutions</p>
          </div>
          <div className="backdrop-blur-sm bg-purple-500/20 p-6 rounded-2xl border border-purple-300/30 text-center text-gray-800 dark:text-gray-100">
            <div className="text-4xl text-gray-800 dark:text-gray-100 mb-3">🎯</div>
            <h4 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-2">Quality Edge</h4>
            <p className="text-purple-700 dark:text-purple-300">Highest damage-free and satisfaction rates</p>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
    </section>
  );
};

export default CompetitiveAdvantage;