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
        {/* MASSIVE Background Hero Image */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=90"
            alt="Massive freight network visualization"
            fill
            className="object-cover"
          />
        </div>

        {/* Secondary Network Overlay */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=90"
            alt="Trucking logistics network"
            fill
            className="object-cover mix-blend-overlay"
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

        {/* MASSIVE Glassmorphic Title Treatment */}
        <Card className="glassmorphic-dark border-drivers-orange/50 p-16 relative z-10 transform hover:scale-[1.02] transition-all duration-500 shadow-2xl">
          <div className="absolute top-6 right-6">
            <div className="flex space-x-3">
              <div className="w-4 h-4 bg-drivers-green rounded-full animate-ping"></div>
              <div
                className="w-4 h-4 bg-drivers-blue rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-4 h-4 bg-drivers-purple rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
          <h1 className="text-8xl font-bold text-white mb-8 leading-tight">
            DRIVER'S NET:
            <span className="text-drivers-orange block bg-gradient-to-r from-drivers-orange via-drivers-yellow to-drivers-orange bg-clip-text text-transparent animate-pulse">
              THE GAME CHANGER
            </span>
          </h1>
          <p className="text-3xl text-gray-200 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            Revolutionary AI-powered freight optimization that will transform
            Uber Freight into the most dominant logistics network in North
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

        {/* MASSIVE CTA Section */}
        <div className="flex justify-center space-x-8 relative z-10">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-gradient-to-r from-drivers-orange to-drivers-yellow hover:from-drivers-orange/90 hover:to-drivers-yellow/90 text-white px-16 py-8 text-3xl font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-drivers-orange/50"
          >
            BEGIN PRESENTATION
            <ArrowRight className="ml-4 w-8 h-8" />
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
