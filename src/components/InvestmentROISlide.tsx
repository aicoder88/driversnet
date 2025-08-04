import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp, Calculator, Target } from "lucide-react";
import Slide from "./Slide";

export default function InvestmentROISlide() {
  return (
    <Slide background="gradient">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            GUARANTEED <span className="text-drivers-orange">ROI</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Every dollar invested returns $4.70 within 18 months. Here's the
            math.
          </p>
        </div>

        {/* Investment Breakdown */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          <Card className="glassmorphic-dark p-8">
            <div className="flex items-center mb-6">
              <DollarSign className="w-12 h-12 text-drivers-orange mr-4" />
              <h3 className="text-2xl font-bold text-white">
                Investment Required
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Platform Integration</span>
                <span className="text-xl font-bold text-white">$12M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Technology License</span>
                <span className="text-xl font-bold text-white">$8M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Implementation</span>
                <span className="text-xl font-bold text-white">$5M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Training & Support</span>
                <span className="text-xl font-bold text-white">$3M</span>
              </div>
              <div className="border-t border-drivers-orange/30 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold text-xl">
                    Total Investment
                  </span>
                  <span className="text-3xl font-bold text-drivers-orange">
                    $28M
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="glassmorphic-dark p-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-12 h-12 text-drivers-orange mr-4" />
              <h3 className="text-2xl font-bold text-white">Annual Returns</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Efficiency Savings</span>
                <span className="text-xl font-bold text-white">$47M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Revenue Increase</span>
                <span className="text-xl font-bold text-white">$89M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Cost Reduction</span>
                <span className="text-xl font-bold text-white">$34M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Market Share Gains</span>
                <span className="text-xl font-bold text-white">$23M</span>
              </div>
              <div className="border-t border-drivers-orange/30 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold text-xl">
                    Total Annual Return
                  </span>
                  <span className="text-3xl font-bold text-drivers-orange">
                    $193M
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* ROI Timeline */}
        <Card className="glassmorphic-dark p-8 mb-12">
          <div className="flex items-center mb-8">
            <Calculator className="w-12 h-12 text-drivers-orange mr-4" />
            <h3 className="text-3xl font-bold text-white">ROI Timeline</h3>
          </div>
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-drivers-orange mb-2">
                Month 6
              </div>
              <div className="text-white text-lg mb-1">Break Even</div>
              <div className="text-gray-300 text-sm">
                Initial savings realized
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-drivers-orange mb-2">
                Month 12
              </div>
              <div className="text-white text-lg mb-1">2.3x ROI</div>
              <div className="text-gray-300 text-sm">$64M return</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-drivers-orange mb-2">
                Month 18
              </div>
              <div className="text-white text-lg mb-1">4.7x ROI</div>
              <div className="text-gray-300 text-sm">$131M return</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-drivers-orange mb-2">
                Month 24
              </div>
              <div className="text-white text-lg mb-1">6.9x ROI</div>
              <div className="text-gray-300 text-sm">$193M return</div>
            </div>
          </div>
        </Card>

        {/* Risk Mitigation */}
        <div className="grid grid-cols-2 gap-8">
          <Card className="glassmorphic-dark p-8">
            <div className="flex items-center mb-6">
              <Target className="w-12 h-12 text-drivers-orange mr-4" />
              <h3 className="text-2xl font-bold text-white">Risk Mitigation</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li>• Performance guarantees with penalties</li>
              <li>• Phased implementation reduces risk</li>
              <li>• Proven technology with track record</li>
              <li>• 24/7 support and monitoring</li>
              <li>• Insurance coverage for downtime</li>
            </ul>
          </Card>

          <Card className="glassmorphic-dark p-8 border-drivers-orange/50">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Bottom Line <span className="text-drivers-orange">Guarantee</span>
            </h3>
            <div className="text-center space-y-4">
              <div className="text-5xl font-bold text-drivers-orange">690%</div>
              <div className="text-2xl text-white">ROI in 24 Months</div>
              <div className="text-gray-300">Or we refund the difference</div>
              <div className="mt-6 p-4 bg-drivers-orange/20 rounded-lg">
                <div className="text-white font-bold">
                  $28M Investment → $193M Return
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Slide>
  );
}
