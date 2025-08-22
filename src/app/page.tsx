"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Play, Users, Truck, MapPin, BarChart3, Phone, Mail, DollarSign, TrendingUp, Target, AlertTriangle, Clock, Zap, Globe } from "lucide-react";

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-purple-50">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              Driver<span className="text-red-500">Net</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#problem" className="text-gray-600 hover:text-gray-900 transition-colors">Problem</a>
              <a href="#solution" className="text-gray-600 hover:text-gray-900 transition-colors">Solution</a>
              <a href="#investment" className="text-gray-600 hover:text-gray-900 transition-colors">Investment</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-all duration-300 hover:shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Driver's Net:
                  <span className="block text-transparent bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text">
                    The Uber Freight Partnership
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Revolutionary AI-powered freight optimization that will transform Uber Freight into the most dominant logistics network in North America.
                </p>
              </div>

              {/* Updated Stats from Original */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-red-500">347%</div>
                  <div className="text-gray-600">Revenue Growth</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-600">50K+</div>
                  <div className="text-gray-600">Active Drivers</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-red-500">2.1M</div>
                  <div className="text-gray-600">Shipments/Month</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-600">4.2min</div>
                  <div className="text-gray-600">Match Time</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-red-500 text-white px-8 py-4 rounded-full hover:bg-red-600 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2">
                  <span className="font-semibold">Begin Presentation</span>
                  <ChevronDown className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-purple-500 hover:text-purple-600 transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span className="font-semibold">Watch Demo</span>
                </button>
              </div>
            </motion.div>

            {/* Right Column - Market Opportunity Display */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-red-500 to-purple-600 rounded-3xl p-8 h-96 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                
                {/* Market Opportunity Content */}
                <div className="h-full flex flex-col items-center justify-center text-center text-white space-y-4">
                  <div className="text-6xl font-bold">$2.1B</div>
                  <div className="text-xl font-semibold">Market Opportunity</div>
                  <div className="text-sm opacity-80">Total freight market size with 23% annual growth</div>
                  <div className="grid grid-cols-2 gap-4 mt-6 w-full">
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-2xl font-bold">96%</div>
                      <div className="text-xs">On-time Delivery</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-2xl font-bold">47%</div>
                      <div className="text-xs">Efficiency Increase</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Opportunity Section */}
      <section id="problem" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-16"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                The <span className="text-red-500">$47 Billion</span> Problem
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Freight inefficiencies are costing the industry billions. Here's your opportunity to lead the solution.
              </p>
            </div>

            {/* Problem Statistics */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Current Pain Points */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border border-red-200">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-12 h-12 text-red-500 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Current Pain Points</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Empty miles: 35% of all freight miles</span>
                    <span className="text-red-500 font-bold">$15B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Driver shortage: 80,000+ unfilled positions</span>
                    <span className="text-yellow-600 font-bold">$12B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Inefficient routing costs annually</span>
                    <span className="text-orange-500 font-bold">$87B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Manual processes slow operations by 40%</span>
                    <span className="text-pink-500 font-bold">$8B</span>
                  </div>
                </div>
              </div>

              {/* Market Opportunity */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-12 h-12 text-green-500 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Market Opportunity</h3>
                </div>
                <div className="space-y-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-green-600 mb-2">$2.1T</div>
                    <div className="text-gray-700">Total Freight Market Size</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-teal-600 mb-2">23%</div>
                    <div className="text-gray-700">Annual Growth Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">$47B</div>
                    <div className="text-gray-700">Efficiency Savings Potential</div>
                  </div>
                </div>
              </div>
            </div>

            {/* What This Means for Uber Freight */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
                What This Means for <span className="text-orange-500">Uber Freight</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-500 mb-2">$890M</div>
                  <div className="text-gray-700">Annual Revenue Opportunity</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-teal-500 mb-2">47%</div>
                  <div className="text-gray-700">Faster Load Matching</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-green-500 mb-2">3.2x</div>
                  <div className="text-gray-700">Network Efficiency Gain</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Growth Trajectory & Proof Section */}
      <section id="solution" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Growth Trajectory & Proof of Dominance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform delivers measurable results with proven growth milestones and market dominance indicators.
              </p>
            </div>

            {/* Growth Milestones */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">$12M</div>
                  <div className="text-gray-600 mb-4">Year 1 Revenue</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-1/4"></div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">$89M</div>
                  <div className="text-gray-600 mb-4">Year 2 Revenue</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500 mb-2">$450M</div>
                  <div className="text-gray-600 mb-4">Year 3 Revenue</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Advantage */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technology Advantage</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800">AI-Powered Optimization</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Real-time route optimization algorithms</li>
                    <li>• Deep learning for demand prediction and pricing optimization</li>
                    <li>• Machine learning driver-load matching</li>
                    <li>• Predictive maintenance scheduling</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800">Competitive Moat</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Proprietary algorithms with 5+ years development</li>
                    <li>• $200M+ investment required to replicate</li>
                    <li>• Network effects strengthen with scale</li>
                    <li>• Patent-protected technology stack</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment & ROI Section */}
      <section id="investment" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Guaranteed <span className="text-orange-500">ROI</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every dollar invested returns $4.70 within 18 months. Here's the math.
              </p>
            </div>

            {/* Investment Breakdown */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Investment Required */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center mb-6">
                  <DollarSign className="w-12 h-12 text-orange-500 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Investment Required</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Platform Integration</span>
                    <span className="text-xl font-bold text-gray-900">$12M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Technology License</span>
                    <span className="text-xl font-bold text-gray-900">$8M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Implementation</span>
                    <span className="text-xl font-bold text-gray-900">$5M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Training & Support</span>
                    <span className="text-xl font-bold text-gray-900">$3M</span>
                  </div>
                  <div className="border-t border-orange-300 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-bold text-xl">Total Investment</span>
                      <span className="text-3xl font-bold text-orange-500">$28M</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Annual Returns */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-12 h-12 text-green-500 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Annual Returns</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Efficiency Savings</span>
                    <span className="text-xl font-bold text-gray-900">$47M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Revenue Increase</span>
                    <span className="text-xl font-bold text-gray-900">$89M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Cost Reduction</span>
                    <span className="text-xl font-bold text-gray-900">$34M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Market Share Gains</span>
                    <span className="text-xl font-bold text-gray-900">$23M</span>
                  </div>
                  <div className="border-t border-green-300 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-bold text-xl">Total Annual Return</span>
                      <span className="text-3xl font-bold text-green-500">$193M</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROI Timeline */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">ROI Timeline</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500 mb-2">Month 6</div>
                  <div className="text-gray-900 text-lg mb-1">Break Even</div>
                  <div className="text-gray-600 text-sm">Initial savings realized</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500 mb-2">Month 12</div>
                  <div className="text-gray-900 text-lg mb-1">2.3x ROI</div>
                  <div className="text-gray-600 text-sm">$64M return</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500 mb-2">Month 18</div>
                  <div className="text-gray-900 text-lg mb-1">4.7x ROI</div>
                  <div className="text-gray-600 text-sm">$131M return</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500 mb-2">Month 24</div>
                  <div className="text-gray-900 text-lg mb-1">6.9x ROI</div>
                  <div className="text-gray-600 text-sm">$193M return</div>
                </div>
              </div>
            </div>

            {/* Bottom Line Guarantee */}
            <div className="text-center bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Bottom Line Guarantee</h3>
              <div className="space-y-4">
                <div className="text-5xl font-bold">690%</div>
                <div className="text-2xl">ROI in 24 Months</div>
                <div className="text-lg opacity-90">Or we refund the difference</div>
                <div className="mt-6 p-4 bg-white/20 rounded-lg">
                  <div className="text-xl font-bold">$28M Investment → $193M Return</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-16"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Ready to Transform Your Logistics?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join the revolution in freight optimization. Let's discuss how DriversNet can transform Uber Freight's operations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Schedule Partnership Call</span>
              </button>
              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-purple-500 hover:text-purple-600 transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Request Detailed Proposal</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold">
                Driver<span className="text-red-500">Net</span>
              </div>
              <p className="text-gray-400">
                Revolutionary AI-powered freight optimization transforming logistics networks.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Partnership</h3>
              <div className="space-y-2 text-gray-400">
                <div>Uber Freight Integration</div>
                <div>Technology Licensing</div>
                <div>Revenue Sharing</div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Technology</h3>
              <div className="space-y-2 text-gray-400">
                <div>AI Optimization</div>
                <div>Route Planning</div>
                <div>Load Matching</div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Investment</h3>
              <div className="space-y-2 text-gray-400">
                <div>ROI Calculator</div>
                <div>Financial Projections</div>
                <div>Partnership Terms</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © 2025 DriversNet Inc. All rights reserved. Partnership opportunity with Uber Freight.
          </div>
        </div>
      </footer>
    </div>
  );
}