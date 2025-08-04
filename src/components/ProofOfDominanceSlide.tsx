import { Card } from "@/components/ui/card";
import { Trophy, TrendingUp, Users, Star } from "lucide-react";
import Slide from "./Slide";

export default function ProofOfDominanceSlide() {
  return (
    <Slide>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            PROVEN <span className="text-drivers-orange">MARKET DOMINANCE</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Real results from real clients. Driver's Net doesn't just promise—we
            deliver.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          <Card className="glassmorphic-dark p-6 text-center">
            <Trophy className="w-12 h-12 text-drivers-orange mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">47%</div>
            <div className="text-gray-300">Efficiency Increase</div>
          </Card>
          <Card className="glassmorphic-dark p-6 text-center">
            <TrendingUp className="w-12 h-12 text-drivers-orange mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">$890M</div>
            <div className="text-gray-300">Revenue Generated</div>
          </Card>
          <Card className="glassmorphic-dark p-6 text-center">
            <Users className="w-12 h-12 text-drivers-orange mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-300">Active Drivers</div>
          </Card>
          <Card className="glassmorphic-dark p-6 text-center">
            <Star className="w-12 h-12 text-drivers-orange mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </Card>
        </div>

        {/* Client Success Stories */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          <Card className="glassmorphic-dark p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Fortune 500 Logistics Giant
              </h3>
              <div className="text-drivers-orange font-semibold">
                $2.3B Annual Revenue
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Empty Miles Reduction</span>
                <span className="text-2xl font-bold text-drivers-orange">
                  52%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Cost Savings (Annual)</span>
                <span className="text-2xl font-bold text-drivers-orange">
                  $47M
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">ROI Timeline</span>
                <span className="text-2xl font-bold text-drivers-orange">
                  14mo
                </span>
              </div>
            </div>
          </Card>

          <Card className="glassmorphic-dark p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Regional Freight Network
              </h3>
              <div className="text-drivers-orange font-semibold">
                $890M Annual Revenue
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Load Matching Speed</span>
                <span className="text-2xl font-bold text-drivers-orange">
                  89% Faster
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Driver Retention</span>
                <span className="text-2xl font-bold text-drivers-orange">
                  +34%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Profit Margin Increase</span>
                <span className="text-2xl font-bold text-drivers-orange">
                  +23%
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Industry Recognition */}
        <Card className="glassmorphic-dark p-8">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Industry <span className="text-drivers-orange">Recognition</span>
          </h3>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-drivers-orange mb-2">
                #1 Freight Tech
              </div>
              <div className="text-gray-300">FreightWaves Awards 2024</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-drivers-orange mb-2">
                Top 10 AI
              </div>
              <div className="text-gray-300">Transport Topics Innovation</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-drivers-orange mb-2">
                Best ROI
              </div>
              <div className="text-gray-300">Logistics Management</div>
            </div>
          </div>
        </Card>
      </div>
    </Slide>
  );
}
