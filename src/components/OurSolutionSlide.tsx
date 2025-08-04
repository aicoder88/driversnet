import { Card } from "@/components/ui/card";
import { Zap, Brain, Network, Shield } from "lucide-react";
import Slide from "./Slide";

export default function OurSolutionSlide() {
  return (
    <Slide background="gradient">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            DRIVER'S NET: THE{" "}
            <span className="text-drivers-orange">GAME CHANGER</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Revolutionary AI-powered freight optimization that transforms
            inefficiency into profit
          </p>
        </div>

        {/* Core Features */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          <Card className="glassmorphic-dark p-8">
            <div className="flex items-center mb-6">
              <Brain className="w-12 h-12 text-drivers-orange mr-4" />
              <h3 className="text-2xl font-bold text-white">
                AI-Powered Matching
              </h3>
            </div>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>• Real-time load-to-driver optimization</li>
              <li>• Predictive demand forecasting</li>
              <li>• Dynamic pricing algorithms</li>
              <li>• 99.7% matching accuracy</li>
            </ul>
          </Card>

          <Card className="glassmorphic-dark p-8">
            <div className="flex items-center mb-6">
              <Network className="w-12 h-12 text-drivers-orange mr-4" />
              <h3 className="text-2xl font-bold text-white">
                Network Intelligence
              </h3>
            </div>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>• 47% reduction in empty miles</li>
              <li>• Automated route optimization</li>
              <li>• Cross-docking coordination</li>
              <li>• Multi-modal integration</li>
            </ul>
          </Card>

          <Card className="glassmorphic-dark p-8">
            <div className="flex items-center mb-6">
              <Zap className="w-12 h-12 text-drivers-orange mr-4" />
              <h3 className="text-2xl font-bold text-white">Lightning Speed</h3>
            </div>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>• Sub-second load matching</li>
              <li>• Instant driver notifications</li>
              <li>• Real-time tracking & updates</li>
              <li>• 24/7 automated operations</li>
            </ul>
          </Card>

          <Card className="glassmorphic-dark p-8">
            <div className="flex items-center mb-6">
              <Shield className="w-12 h-12 text-drivers-orange mr-4" />
              <h3 className="text-2xl font-bold text-white">
                Enterprise Security
              </h3>
            </div>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>• SOC 2 Type II compliance</li>
              <li>• End-to-end encryption</li>
              <li>• Fraud detection systems</li>
              <li>• 99.99% uptime guarantee</li>
            </ul>
          </Card>
        </div>

        {/* Value Proposition */}
        <Card className="glassmorphic-dark p-8 border-drivers-orange/50">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              The{" "}
              <span className="text-drivers-orange">
                Driver's Net Advantage
              </span>
            </h3>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-drivers-orange mb-2">
                  10x
                </div>
                <div className="text-white text-lg">Faster Implementation</div>
                <div className="text-gray-400">vs. building in-house</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-drivers-orange mb-2">
                  $47M
                </div>
                <div className="text-white text-lg">Annual Savings</div>
                <div className="text-gray-400">for Uber Freight scale</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-drivers-orange mb-2">
                  18mo
                </div>
                <div className="text-white text-lg">Full ROI</div>
                <div className="text-gray-400">guaranteed payback</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Slide>
  );
}
