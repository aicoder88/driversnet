import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Rocket, Globe } from "lucide-react";
import Slide from "./Slide";

export default function GrowthTrajectorySlide() {
  return (
    <Slide background="gradient">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            EXPLOSIVE{" "}
            <span className="text-drivers-orange">GROWTH TRAJECTORY</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            From startup to market leader in 36 months. Here's our roadmap to
            freight dominance.
          </p>
        </div>

        {/* Growth Timeline */}
        <div className="relative mb-12">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-drivers-orange opacity-30"></div>

          <div className="space-y-12">
            {/* Year 1 */}
            <div className="flex items-center">
              <Card className="glassmorphic-dark p-6 w-1/2 mr-8">
                <div className="flex items-center mb-4">
                  <Rocket className="w-8 h-8 text-drivers-orange mr-3" />
                  <h3 className="text-2xl font-bold text-white">
                    Year 1: Foundation
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-drivers-orange font-bold">5,000</div>
                    <div className="text-gray-300">Active Drivers</div>
                  </div>
                  <div>
                    <div className="text-drivers-orange font-bold">$12M</div>
                    <div className="text-gray-300">Revenue</div>
                  </div>
                  <div>
                    <div className="text-drivers-orange font-bold">15</div>
                    <div className="text-gray-300">Major Clients</div>
                  </div>
                  <div>
                    <div className="text-drivers-orange font-bold">3</div>
                    <div className="text-gray-300">States</div>
                  </div>
                </div>
              </Card>
              <div className="w-4 h-4 bg-drivers-orange rounded-full relative z-10"></div>
              <div className="w-1/2 ml-8"></div>
            </div>

            {/* Year 2 */}
            <div className="flex items-center">
              <div className="w-1/2 mr-8"></div>
              <div className="w-4 h-4 bg-drivers-orange rounded-full relative z-10"></div>
              <Card className="glassmorphic-dark p-6 w-1/2 ml-8">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-drivers-orange mr-3" />
                  <h3 className="text-2xl font-bold text-white">
                    Year 2: Expansion
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-drivers-orange font-bold">25,000</div>
                    <div className="text-gray-300">Active Drivers</div>
                  </div>
                  <div>
                    <div className="text-drivers-orange font-bold">$89M</div>
                    <div className="text-gray-300">Revenue</div>
                  </div>
                  <div>
                    <div className="text-drivers-orange font-bold">150</div>
                    <div className="text-gray-300">Major Clients</div>
                  </div>
                  <div>
                    <div className="text-drivers-orange font-bold">12</div>
                    <div className="text-gray-300">States</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Year 3 */}
            <div className="flex items-center">
              <Card className="glassmorphic-dark p-6 w-1/2 mr-8">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-drivers-orange mr-3" />
                  <h3 className="text-2xl font-bold text-white">
                    Year 3: Dominance
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-drivers-orange font-bold">100K+</div>
                    <div className="text-gray-300">Active Drivers</div>
                  </div>
                  <div>
                    <div className="text-drivers-orange font-bold">$450M</div>
                    <div className="text-gray-300">Revenue</div>
                  </div>
                  <div>
                    <div className="text-drivers-orange font-bold">500+</div>
                    <div className="text-gray-300">Major Clients</div>
                  </div>
                  <div>
                    <div className="text-drivers-orange font-bold">48</div>
                    <div className="text-gray-300">States</div>
                  </div>
                </div>
              </Card>
              <div className="w-4 h-4 bg-drivers-orange rounded-full relative z-10"></div>
              <div className="w-1/2 ml-8"></div>
            </div>
          </div>
        </div>

        {/* Key Growth Drivers */}
        <div className="grid grid-cols-3 gap-8">
          <Card className="glassmorphic-dark p-6 text-center">
            <Target className="w-12 h-12 text-drivers-orange mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Market Penetration
            </h4>
            <div className="text-3xl font-bold text-drivers-orange mb-2">
              23%
            </div>
            <div className="text-gray-300">Annual Growth Rate</div>
          </Card>

          <Card className="glassmorphic-dark p-6 text-center">
            <TrendingUp className="w-12 h-12 text-drivers-orange mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Revenue Multiple
            </h4>
            <div className="text-3xl font-bold text-drivers-orange mb-2">
              37x
            </div>
            <div className="text-gray-300">3-Year Growth</div>
          </Card>

          <Card className="glassmorphic-dark p-6 text-center">
            <Globe className="w-12 h-12 text-drivers-orange mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">Market Share</h4>
            <div className="text-3xl font-bold text-drivers-orange mb-2">
              15%
            </div>
            <div className="text-gray-300">By Year 3</div>
          </Card>
        </div>
      </div>
    </Slide>
  );
}
