import React from 'react';
import { SlideProps } from './SlideTypes';

const ClientPortfolio: React.FC<SlideProps> = ({ 
  className = '', 
  isActive, 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext, 
  currentSlide, 
  totalSlides 
}) => {
  const partnerships = [
    { 
      name: 'Instacart', 
      category: 'Gig Economy',
      markets: 6, 
      achievement: '100% on-time delivery',
      logo: '/Instacart-Logo.jpg',
      color: 'green',
      details: {
        volume: '10,000+ orders/month',
        retention: '3+ years',
        expansion: '6 markets and growing'
      }
    },
    { 
      name: 'Tesla', 
      category: 'Automotive',
      achievement: '99.9% damage-free record',
      logo: '/Tesla_logo.png',
      color: 'red',
      details: {
        volume: '$2M+ transported',
        retention: '6+ years',
        expansion: 'US & Canada footprint'
      }
    },
    { 
      name: 'BMW', 
      category: 'Luxury Automotive',
      achievement: 'White-glove service standard',
      logo: '/BMW.svg.png',
      color: 'blue',
      details: {
        volume: '500+ vehicles/month',
        retention: '4+ years',
        expansion: 'National coverage'
      }
    },
    { 
      name: 'SDSRX Medical', 
      category: 'Healthcare',
      achievement: '18+ months zero incidents',
      logo: '/sds logo.svg',
      color: 'purple',
      details: {
        volume: 'Temperature-controlled',
        retention: '1.5+ years',
        expansion: 'Regional expansion'
      }
    }
  ];

  const clientStats = [
    { label: 'Enterprise Clients', value: '50+', icon: '🏢', description: 'Spanning multiple industries' },
    { label: 'Client Retention', value: '98%', icon: '🤝', description: 'Year-over-year renewal rate' },
    { label: 'Average Partnership', value: '3.2yr', icon: '⏱️', description: 'Long-term relationships' },
    { label: 'Portfolio Value', value: '$47.3M', icon: '💎', description: 'Active contracts value' }
  ];

  const industryVerticals = [
    {
      industry: 'E-commerce & Gig Economy',
      clients: ['Instacart', 'DoorDash Partners', 'Local Startups'],
      specialization: 'Last-mile delivery optimization',
      icon: '🛒',
      color: 'emerald'
    },
    {
      industry: 'Automotive & Manufacturing',
      clients: ['Tesla', 'BMW', 'Parts Suppliers'],
      specialization: 'High-value asset transport',
      icon: '🚗',
      color: 'blue'
    },
    {
      industry: 'Healthcare & Medical',
      clients: ['SDSRX Medical', 'Pharmaceutical Companies', 'Medical Device Manufacturers'],
      specialization: 'Temperature-controlled & regulated transport',
      icon: '⚕️',
      color: 'red'
    },
    {
      industry: 'Technology & Electronics',
      clients: ['Tech Startups', 'Hardware Companies', 'Component Distributors'],
      specialization: 'Sensitive equipment handling',
      icon: '💻',
      color: 'purple'
    }
  ];

  const testimonials = [
    {
      quote: "DriversNet's last-mile delivery network helped us scale our grocery operations across 6 metropolitan markets seamlessly.",
      author: "Logistics Director",
      company: "Instacart",
      rating: 5,
      metric: "180+ certified drivers deployed"
    },
    {
      quote: "Their luxury vehicle transport and white-glove service perfectly matches our brand standards for high-end retail deliveries.",
      author: "Supply Chain Manager",
      company: "Burberry",
      rating: 5,
      metric: "100% damage-free luxury shipments"
    },
    {
      quote: "The valet and shuttle services transformed our customer experience at our flagship showrooms nationwide.",
      author: "Operations Manager",
      company: "Divan",
      rating: 5,
      metric: "95% customer satisfaction score"
    },
    {
      quote: "DriversNet's AI-integrated logistics platform optimized our service center operations and parts delivery network.",
      author: "Service Operations Director",
      company: "Tesla",
      rating: 5,
      metric: "24/7 coverage with 99.2% reliability"
    }
  ];

  return (
    <section className={`min-h-screen flex flex-col justify-center space-y-20 ${className}`}>
      {/* Hero Section */}
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 dark:from-purple-700 dark:to-violet-700 text-white dark:text-gray-50 rounded-full font-semibold text-lg">
            Trusted by Industry Leaders
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            Client
            <br />
            <span className="text-purple-600 dark:text-purple-400">Portfolio</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed px-4">
            From startups to Fortune 500 companies, we deliver results that matter
            <br />
            <strong className="text-purple-600 dark:text-purple-400">98% client retention rate</strong>
          </p>
        </div>
      </div>

      {/* Client Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {clientStats.map((stat, index) => (
          <div 
            key={index}
            className="text-center bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl mb-4">{stat.icon}</div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-3">
              {stat.value}
            </div>
            <div className="font-bold mb-2 text-base sm:text-lg text-gray-800 dark:text-gray-200">
              {stat.label}
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              {stat.description}
            </div>
          </div>
        ))}
      </div>

      {/* Featured Partnerships */}
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Featured Partnerships
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-4">
            Success stories that speak for themselves
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {partnerships.map((partner, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br from-${partner.color}-50 to-${partner.color}-100 dark:from-${partner.color}-900/20 dark:to-${partner.color}-800/20 p-6 sm:p-8 rounded-3xl border border-${partner.color}-200 dark:border-${partner.color}-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain rounded-lg bg-white p-2 shadow-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {partner.name}
                    </h3>
                    <p className={`text-${partner.color}-600 dark:text-${partner.color}-300`}>
                      {partner.category}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className={`bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl border border-${partner.color}-200 dark:border-${partner.color}-600`}>
                  <h4 className={`font-semibold text-${partner.color}-800 dark:text-${partner.color}-200 mb-2`}>
                    Key Achievement
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {partner.achievement}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {Object.entries(partner.details).map(([key, value], detailIndex) => (
                    <div key={detailIndex} className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {partner.name === 'Tesla' && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="inline-flex items-center gap-1 bg-red-600/10 text-red-800 dark:text-red-200 px-2.5 py-1 rounded-full text-xs font-semibold">
                      <span>🗺️</span>
                      <span>13+ cities (US & Canada)</span>
                    </span>
                    <span className="inline-flex items-center gap-1 bg-red-600/10 text-red-800 dark:text-red-200 px-2.5 py-1 rounded-full text-xs font-semibold">
                      <span>⚡</span>
                      <span>Hundreds/day • 24–48 hr notice</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Verticals */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Industry Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-4">
            Deep specialization across multiple verticals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {industryVerticals.map((vertical, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-3xl sm:text-4xl">{vertical.icon}</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200">
                    {vertical.industry}
                  </h3>
                  <p className={`text-${vertical.color}-600 dark:text-${vertical.color}-300`}>
                    {vertical.specialization}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300">Key Clients:</h4>
                <ul className="space-y-2">
                  {vertical.clients.map((client, clientIndex) => (
                    <li key={clientIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-${vertical.color}-500`}></div>
                      <span className="text-gray-700 dark:text-gray-300">{client}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900/50 dark:to-blue-900/20 p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-4">
            Real feedback from real partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/90 dark:bg-gray-800/90 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <span key={starIndex} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="space-y-2">
                <div className="font-semibold text-gray-800 dark:text-gray-200">
                  {testimonial.author}
                </div>
                <div className="text-gray-700 dark:text-gray-300">
                  {testimonial.company}
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {testimonial.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Navigation */}
    </section>
  );
};

export default ClientPortfolio;
