import { Card } from "@/components/ui/card";
import { MapPin, Truck, Building, Network } from "lucide-react";
import Slide from "./Slide";

export default function ScaleFootprintSlide() {
  return (
    <Slide>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            MASSIVE{" "}
            <span className="text-drivers-orange">SCALE & FOOTPRINT</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Continental reach, local expertise. Driver's Net operates where
            freight moves.
          </p>
        </div>

        {/* Geographic Coverage */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          <Card className="glassmorphic-dark p-8">
            <div className="flex items-center mb-6">
              <MapPin className="w-12 h-12 text-drivers-orange mr-4" />
              <h3 className="text-2xl font-bold text-white">
                Geographic Reach
              </h3>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-lg">Active States</span>
                <span className="text-3xl font-bold text-drivers-orange">
                  48
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-lg">Major Metro Areas</span>
                <span className="text-3xl font-bold text-drivers-orange">
                  127
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-lg">
                  Distribution Centers
                </span>
                <span className="text-3xl font-bold text-drivers-orange">
                  340
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-lg">Border Crossings</span>
                <span className="text-3xl font-bold text-drivers-orange">
                  23
                </span>
              </div>
            </div>
          </Card>

          <Card className="glassmorphic-dark p-8">
            <div className="flex items-center mb-6">
              <Truck className="w-12 h-12 text-drivers-orange mr-4" />
              <h3 className="text-2xl font-bold text-white">Fleet Network</h3>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-lg">Active Drivers</span>
                <span className="text-3xl font-bold text-drivers-orange">
                  50K+
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-lg">Fleet Partners</span>
                <span className="text-3xl font-bold text-drivers-orange">
                  2,300
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-lg">Owner Operators</span>
                <span className="text-3xl font-bold text-drivers-orange">
                  15K+
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-lg">Equipment Types</span>
                <span className="text-3xl font-bold text-drivers-orange">
                  47
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Infrastructure */}
        <Card className="glassmorphic-dark p-8 mb-12">
          <div className="flex items-center mb-8">
            <Building className="w-12 h-12 text-drivers-orange mr-4" />
            <h3 className="text-3xl font-bold text-white">
              Infrastructure Scale
            </h3>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-drivers-orange mb-2">
                12
              </div>
              <div className="text-white text-lg mb-1">Data Centers</div>
              <div className="text-gray-400 text-sm">99.99% uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-drivers-orange mb-2">
                847TB
              </div>
              <div className="text-white text-lg mb-1">Data Processed</div>
              <div className="text-gray-400 text-sm">daily average</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-drivers-orange mb-2">
                2.3M
              </div>
              <div className="text-white text-lg mb-1">API Calls</div>
              <div className="text-gray-400 text-sm">per hour</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-drivers-orange mb-2">
                24/7
              </div>
              <div className="text-white text-lg mb-1">Operations</div>
              <div className="text-gray-400 text-sm">global support</div>
            </div>
          </div>
        </Card>

        {/* Network Effects */}
        <Card className="glassmorphic-dark p-8 border-drivers-orange/50">
          <div className="flex items-center mb-8">
            <Network className="w-12 h-12 text-drivers-orange mr-4" />
            <h3 className="text-3xl font-bold text-white">
              Network Effects at Scale
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-drivers-orange mb-3">
                89%
              </div>
              <div className="text-white text-xl mb-2">Load Fill Rate</div>
              <div className="text-gray-300">vs. 52% industry average</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-drivers-orange mb-3">
                3.2min
              </div>
              <div className="text-white text-xl mb-2">Average Match Time</div>
              <div className="text-gray-300">vs. 47min industry average</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-drivers-orange mb-3">
                $2.1B
              </div>
              <div className="text-white text-xl mb-2">
                Annual Freight Value
              </div>
              <div className="text-gray-300">managed through platform</div>
            </div>
          </div>
        </Card>
      </div>
    </Slide>
  );
}
