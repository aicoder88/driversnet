import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Truck,
  Target,
  TrendingUp,
  Users,
  Globe,
  Zap,
} from "lucide-react";
import Slide from "./Slide";
import Image from "next/image";

interface CoverSlideProps {
  onNext?: () => void;
}

export default function CoverSlide({ onNext }: CoverSlideProps) {
  return (
    <Slide background="gradient">
      <div className="text-center space-y-12 relative">
        {/* Background Images */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
            alt="Freight trucks"
            fill
            className="object-cover rounded-3xl"
          />
        </div>

        {/* Animated Logo Section */}
        <div className="flex items-center justify-center space-x-8 mb-16 relative z-10">
          <div className="glassmorphic-dark rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 border-2 border-drivers-orange/50">
            <Truck className="w-16 h-16 text-drivers-orange animate-pulse" />
            <p className="text-white font-bold text-xl mt-2">Driver's Net</p>
            <div className="flex space-x-1 mt-2">
              <div className="w-2 h-2 bg-drivers-green rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-drivers-blue rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-2 h-2 bg-drivers-purple rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
          <div className="text-6xl text-white font-thin animate-pulse">×</div>
          <div className="glassmorphic-dark rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 border-2 border-drivers-blue/50">
            <Target className="w-16 h-16 text-drivers-blue animate-pulse" />
            <p className="text-white font-bold text-xl mt-2">Uber Freight</p>
            <div className="flex space-x-1 mt-2">
              <div className="w-2 h-2 bg-drivers-teal rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-drivers-yellow rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-2 h-2 bg-drivers-pink rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Main Title with Interactive Elements */}
        <Card className="glassmorphic-dark border-drivers-orange/30 p-12 relative z-10 transform hover:scale-[1.02] transition-all duration-500">
          <div className="absolute top-4 right-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-drivers-green rounded-full animate-ping"></div>
              <div
                className="w-3 h-3 bg-drivers-blue rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-3 h-3 bg-drivers-purple rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            THE FREIGHT
            <span className="text-drivers-orange block bg-gradient-to-r from-drivers-orange to-drivers-yellow bg-clip-text text-transparent animate-pulse">
              REVOLUTION
            </span>
            STARTS HERE
          </h1>
          <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            How Driver's Net will transform Uber Freight's network into the most
            powerful, efficient, and profitable freight ecosystem in North
            America
          </p>

          {/* Interactive Chart Preview */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 relative">
                <div className="absolute inset-0 bg-drivers-green rounded-full animate-pulse"></div>
                <TrendingUp className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="text-drivers-green font-bold">Growth</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 relative">
                <div
                  className="absolute inset-0 bg-drivers-blue rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <Users className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="text-drivers-blue font-bold">Network</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 relative">
                <div
                  className="absolute inset-0 bg-drivers-purple rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
                <Globe className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="text-drivers-purple font-bold">Scale</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 relative">
                <div
                  className="absolute inset-0 bg-drivers-yellow rounded-full animate-pulse"
                  style={{ animationDelay: "0.6s" }}
                ></div>
                <Zap className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="text-drivers-yellow font-bold">Speed</div>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="flex justify-center space-x-6">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-drivers-orange hover:bg-drivers-orange/90 text-white px-8 py-4 text-xl font-semibold rounded-xl"
          >
            Begin Presentation
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>

        {/* Enhanced Stats Preview with Charts */}
        <div className="grid grid-cols-3 gap-8 mt-16 relative z-10">
          <Card className="glassmorphic p-6 text-center transform hover:scale-105 transition-all duration-300 border-2 border-drivers-green/30">
            <div className="relative mb-4">
              <div className="w-20 h-20 mx-auto relative">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="#374151"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="#10b981"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="188"
                    strokeDashoffset="47"
                    className="animate-pulse"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-drivers-green font-bold text-sm">
                    75%
                  </span>
                </div>
              </div>
            </div>
            <div className="text-4xl font-bold text-drivers-green mb-2 animate-pulse">
              $2.1B
            </div>
            <div className="text-white text-lg">Market Opportunity</div>
            <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-drivers-green to-drivers-teal w-3/4 animate-pulse"></div>
            </div>
          </Card>
          <Card className="glassmorphic p-6 text-center transform hover:scale-105 transition-all duration-300 border-2 border-drivers-blue/30">
            <div className="relative mb-4">
              <div className="w-20 h-20 mx-auto relative">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="#374151"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="#2563eb"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="188"
                    strokeDashoffset="100"
                    className="animate-pulse"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-drivers-blue font-bold text-sm">
                    47%
                  </span>
                </div>
              </div>
            </div>
            <div className="text-4xl font-bold text-drivers-blue mb-2 animate-pulse">
              47%
            </div>
            <div className="text-white text-lg">Efficiency Increase</div>
            <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-drivers-blue to-drivers-purple w-1/2 animate-pulse"></div>
            </div>
          </Card>
          <Card className="glassmorphic p-6 text-center transform hover:scale-105 transition-all duration-300 border-2 border-drivers-orange/30">
            <div className="relative mb-4">
              <div className="w-20 h-20 mx-auto relative">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="#374151"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="#ff6b35"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="188"
                    strokeDashoffset="125"
                    className="animate-pulse"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-drivers-orange font-bold text-sm">
                    18
                  </span>
                </div>
              </div>
            </div>
            <div className="text-4xl font-bold text-drivers-orange mb-2 animate-pulse">
              18mo
            </div>
            <div className="text-white text-lg">ROI Timeline</div>
            <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-drivers-orange to-drivers-yellow w-2/3 animate-pulse"></div>
            </div>
          </Card>
        </div>
      </div>
    </Slide>
  );
}
