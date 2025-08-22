import { Card } from "@/components/ui/card";
import { Brain, Zap, Shield, Cpu } from "lucide-react";
import Slide from "./Slide";
import Image from "next/image";

export default function TechnologyAdvantageSlide() {
  return (
    <Slide background="gradient">
      <div className="space-y-12 relative">
        {/* LARGE Technology Dashboard Screenshots */}
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1920&q=90"
            alt="Advanced AI brain and neural network visualization"
            fill
            className="object-cover"
          />
        </div>

        {/* Route Optimization Maps Overlay */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=90"
            alt="Route optimization and connected device ecosystem"
            fill
            className="object-cover mix-blend-overlay"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h1 className="text-6xl font-bold text-white mb-6">
            CUTTING-EDGE{" "}
            <span className="text-drivers-orange bg-gradient-to-r from-drivers-orange to-drivers-yellow bg-clip-text text-transparent animate-pulse">
              TECHNOLOGY
            </span>
          </h1>
          <p className="text-3xl text-gray-200 max-w-5xl mx-auto font-light">
            Proprietary AI algorithms and infrastructure that competitors can't
            match
          </p>
        </div>

        {/* Tech Stack */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          <Card className="glassmorphic-dark p-8">
            <div className="flex items-center mb-6">
              <Brain className="w-12 h-12 text-drivers-orange mr-4" />
              <h3 className="text-2xl font-bold text-white">
                AI & Machine Learning
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Predictive Accuracy</span>
                <span className="text-xl font-bold text-drivers-orange">
                  99.7%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Training Data Points</span>
                <span className="text-xl font-bold text-drivers-orange">
                  2.3B+
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Model Updates</span>
                <span className="text-xl font-bold text-drivers-orange">
                  Real-time
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Processing Speed</span>
                <span className="text-xl font-bold text-drivers-orange">
                  0.3s
                </span>
              </div>
            </div>
          </Card>

          <Card className="glassmorphic-dark p-8">
            <div className="flex items-center mb-6">
              <Zap className="w-12 h-12 text-drivers-orange mr-4" />
              <h3 className="text-2xl font-bold text-white">
                Real-Time Processing
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Data Ingestion Rate</span>
                <span className="text-xl font-bold text-drivers-orange">
                  847TB/day
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">API Response Time</span>
                <span className="text-xl font-bold text-drivers-orange">
                  12ms
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Concurrent Users</span>
                <span className="text-xl font-bold text-drivers-orange">
                  100K+
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">System Uptime</span>
                <span className="text-xl font-bold text-drivers-orange">
                  99.99%
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Core Technologies */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <Card className="glassmorphic-dark p-6 text-center">
            <Cpu className="w-12 h-12 text-drivers-orange mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Quantum Optimization
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Advanced route optimization using quantum-inspired algorithms
            </p>
            <div className="text-2xl font-bold text-drivers-orange">
              47% Faster
            </div>
          </Card>

          <Card className="glassmorphic-dark p-6 text-center">
            <Brain className="w-12 h-12 text-drivers-orange mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Neural Networks
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Deep learning for demand prediction and pricing optimization
            </p>
            <div className="text-2xl font-bold text-drivers-orange">
              23% More Profit
            </div>
          </Card>

          <Card className="glassmorphic-dark p-6 text-center">
            <Shield className="w-12 h-12 text-drivers-orange mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Blockchain Security
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Immutable transaction records and smart contract automation
            </p>
            <div className="text-2xl font-bold text-drivers-orange">
              Zero Fraud
            </div>
          </Card>
        </div>

        {/* Competitive Advantage */}
        <Card className="glassmorphic-dark p-8 border-drivers-orange/50">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Why Our Tech{" "}
            <span className="text-drivers-orange">Can't Be Replicated</span>
          </h3>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">
                Proprietary Advantages
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li>• 47 patents pending in freight optimization</li>
                <li>• 5+ years of proprietary training data</li>
                <li>• Custom silicon for AI processing</li>
                <li>• Exclusive partnerships with major carriers</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-4">
                Development Timeline
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li>• Competitors need 3-5 years to catch up</li>
                <li>• $200M+ investment required to replicate</li>
                <li>• Network effects create insurmountable moat</li>
                <li>• First-mover advantage in AI freight matching</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </Slide>
  );
}
