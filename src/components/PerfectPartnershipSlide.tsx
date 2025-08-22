import { Card } from "@/components/ui/card";
import { Handshake, Target, Zap, TrendingUp } from "lucide-react";
import Slide from "./Slide";
import Image from "next/image";

export default function PerfectPartnershipSlide() {
  return (
    <Slide>
      <div className="space-y-12 relative">
        {/* MASSIVE Partnership Handshake Visual */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=90"
            alt="Massive partnership handshake and connection visual"
            fill
            className="object-cover"
          />
        </div>

        {/* Speed/Velocity Imagery Overlay */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=90"
            alt="Speed and velocity imagery with integration diagrams"
            fill
            className="object-cover mix-blend-screen"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h1 className="text-6xl font-bold text-white mb-6">
            THE PERFECT{" "}
            <span className="text-drivers-orange bg-gradient-to-r from-drivers-orange to-drivers-yellow bg-clip-text text-transparent">
              PARTNERSHIP
            </span>
          </h1>
          <p className="text-3xl text-gray-200 max-w-5xl mx-auto font-light">
            Driver's Net + Uber Freight = The most powerful freight network in
            history
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          <Card className="glassmorphic-dark p-8">
            <div className="flex items-center mb-6">
              <Target className="w-12 h-12 text-drivers-orange mr-4" />
              <h3 className="text-2xl font-bold text-white">
                Strategic Alignment
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-drivers-orange rounded-full mt-2 mr-3 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">Shared Vision</div>
                  <div className="text-gray-300 text-sm">
                    Revolutionizing freight through technology
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-drivers-orange rounded-full mt-2 mr-3 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">
                    Complementary Strengths
                  </div>
                  <div className="text-gray-300 text-sm">
                    Uber's scale + Driver's Net's optimization
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-drivers-orange rounded-full mt-2 mr-3 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">
                    Market Leadership
                  </div>
                  <div className="text-gray-300 text-sm">
                    Combined dominance in freight tech
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="glassmorphic-dark p-8">
            <div className="flex items-center mb-6">
              <Zap className="w-12 h-12 text-drivers-orange mr-4" />
              <h3 className="text-2xl font-bold text-white">
                Immediate Impact
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Network Efficiency</span>
                <span className="text-xl font-bold text-drivers-orange">
                  +47%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Cost Reduction</span>
                <span className="text-xl font-bold text-drivers-orange">
                  $890M
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Revenue Increase</span>
                <span className="text-xl font-bold text-drivers-orange">
                  +34%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Market Share</span>
                <span className="text-xl font-bold text-drivers-orange">
                  +23%
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Integration Plan */}
        <Card className="glassmorphic-dark p-8 mb-12">
          <div className="flex items-center mb-8">
            <Handshake className="w-12 h-12 text-drivers-orange mr-4" />
            <h3 className="text-3xl font-bold text-white">
              90-Day Integration Roadmap
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-drivers-orange font-bold text-lg mb-3">
                Days 1-30: Foundation
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• API integration setup</li>
                <li>• Data pipeline establishment</li>
                <li>• Security protocols implementation</li>
                <li>• Initial driver onboarding</li>
              </ul>
            </div>
            <div>
              <div className="text-drivers-orange font-bold text-lg mb-3">
                Days 31-60: Optimization
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• AI model training on Uber data</li>
                <li>• Route optimization deployment</li>
                <li>• Load matching algorithm tuning</li>
                <li>• Performance monitoring setup</li>
              </ul>
            </div>
            <div>
              <div className="text-drivers-orange font-bold text-lg mb-3">
                Days 61-90: Scale
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Full network activation</li>
                <li>• Advanced features rollout</li>
                <li>• Performance optimization</li>
                <li>• Success metrics validation</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Success Metrics */}
        <Card className="glassmorphic-dark p-8 border-drivers-orange/50">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Partnership{" "}
            <span className="text-drivers-orange">Success Metrics</span>
          </h3>
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-drivers-orange mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">$2.1B</div>
              <div className="text-gray-300">Additional Revenue</div>
              <div className="text-drivers-orange text-sm">Year 1 Target</div>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-drivers-orange mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">47%</div>
              <div className="text-gray-300">Efficiency Gain</div>
              <div className="text-drivers-orange text-sm">90-Day Target</div>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-drivers-orange mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">89%</div>
              <div className="text-gray-300">Load Fill Rate</div>
              <div className="text-drivers-orange text-sm">
                Industry Leading
              </div>
            </div>
            <div className="text-center">
              <Handshake className="w-12 h-12 text-drivers-orange mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">#1</div>
              <div className="text-gray-300">Market Position</div>
              <div className="text-drivers-orange text-sm">Guaranteed</div>
            </div>
          </div>
        </Card>
      </div>
    </Slide>
  );
}
