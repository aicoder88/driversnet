"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Play, Users, Truck, MapPin, BarChart3, Phone, Mail } from "lucide-react";

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
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
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
                  The Future of
                  <span className="block text-transparent bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text">
                    Logistics Networks
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Connecting drivers, optimizing routes, and revolutionizing freight management with cutting-edge AI technology.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-red-500">50K+</div>
                  <div className="text-gray-600">Active Drivers</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-600">2.1M</div>
                  <div className="text-gray-600">Shipments/Month</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-red-500">96%</div>
                  <div className="text-gray-600">On-time Delivery</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-600">$2.1B</div>
                  <div className="text-gray-600">Market Opportunity</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-red-500 text-white px-8 py-4 rounded-full hover:bg-red-600 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2">
                  <span className="font-semibold">Start Your Journey</span>
                  <ChevronDown className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-purple-500 hover:text-purple-600 transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span className="font-semibold">Watch Demo</span>
                </button>
              </div>
            </motion.div>

            {/* Right Column - Visual */}
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
                
                {/* Content Placeholder */}
                <div className="h-full flex items-center justify-center">
                  <div className="text-center text-white space-y-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                      <Truck className="w-8 h-8" />
                    </div>
                    <div className="text-lg font-semibold">Network Visualization</div>
                    <div className="text-sm opacity-80">Real-time logistics dashboard</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Evolution Section */}
      <section id="about" className="py-20 bg-white">
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
                Company Evolution
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From startup to industry leader, our journey has been marked by innovation, growth, and unwavering commitment to excellence.
              </p>
            </div>

            {/* Timeline */}
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { year: "2019", title: "Foundation", desc: "Founded with vision to revolutionize logistics", icon: Users },
                { year: "2021", title: "Growth", desc: "Expanded to 10,000+ drivers across 5 states", icon: Truck },
                { year: "2023", title: "Scale", desc: "Nationwide network with AI optimization", icon: MapPin },
                { year: "2025", title: "Future", desc: "Industry leader in freight technology", icon: BarChart3 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-red-500 mb-2">{item.year}</div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{item.title}</div>
                    <div className="text-gray-600 text-sm">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
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
                Service Divisions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive suite of logistics solutions designed to optimize every aspect of freight management.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                { 
                  title: "Freight Management", 
                  percentage: "45%", 
                  desc: "End-to-end freight coordination and optimization",
                  color: "from-red-500 to-red-600"
                },
                { 
                  title: "Driver Network", 
                  percentage: "35%", 
                  desc: "Nationwide network of verified professional drivers",
                  color: "from-purple-500 to-purple-600"
                },
                { 
                  title: "Technology Platform", 
                  percentage: "20%", 
                  desc: "AI-powered routing and logistics optimization",
                  color: "from-blue-500 to-blue-600"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className={`text-4xl font-bold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.percentage}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
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
                Join thousands of companies already using DriversNet to optimize their freight operations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Schedule a Call</span>
              </button>
              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-purple-500 hover:text-purple-600 transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Contact Sales</span>
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
                Revolutionizing logistics through technology and innovation.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <div className="space-y-2 text-gray-400">
                <div>About Us</div>
                <div>Careers</div>
                <div>News</div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <div className="space-y-2 text-gray-400">
                <div>Freight Management</div>
                <div>Driver Network</div>
                <div>Technology Platform</div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div>Support</div>
                <div>Sales</div>
                <div>Partnerships</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © 2025 DriversNet Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}