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
  DollarSign,
  Clock,
} from "lucide-react";
import Slide from "./Slide";
import Image from "next/image";
import InteractiveChart from "./InteractiveChart";

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
        <div className="flex items-center justify-center space-x-12 mb-20 relative z-10">
          <div className="glassmorphic-enhanced rounded-3xl p-8 hover-glow float-animation border-2 border-drivers-orange/50">
            <div className="relative">
              <Truck className="w-20 h-20 text-drivers-orange pulse-glow" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-drivers-green rounded-full animate-ping"></div>
            </div>
            <h3 className="text-white font-bold text-2xl mt-4 gradient-text">Driver's Net</h3>
            <p className="text-white/70 text-sm mt-1">Logistics Platform</p>
            <div className="flex justify-center space-x-1 mt-3">
              <div className="w-3 h-3 bg-drivers-green rounded-full animate-bounce"></div>
              <div
                className="w-3 h-3 bg-drivers-blue rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-3 h-3 bg-drivers-purple rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
          
          <div className="relative">
            <div className="text-8xl text-white font-thin animate-pulse gradient-text rotate-slow">×</div>
            <div className="absolute inset-0 bg-gradient-to-r from-drivers-orange to-drivers-blue opacity-20 blur-xl"></div>
          </div>
          
          <div className="glassmorphic-enhanced rounded-3xl p-8 hover-glow float-animation border-2 border-drivers-blue/50" style={{ animationDelay: "1s" }}>
            <div className="relative">
              <Target className="w-20 h-20 text-drivers-blue pulse-glow" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-drivers-yellow rounded-full animate-ping" style={{ animationDelay: "0.5s" }}></div>
            </div>
            <h3 className="text-white font-bold text-2xl mt-4 gradient-text">Uber Freight</h3>
            <p className="text-white/70 text-sm mt-1">Global Network</p>
            <div className="flex justify-center space-x-1 mt-3">
              <div className="w-3 h-3 bg-drivers-teal rounded-full animate-bounce"></div>
              <div
                className="w-3 h-3 bg-drivers-yellow rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-3 h-3 bg-drivers-pink rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* MASSIVE Glassmorphic Title Treatment */}
        <Card className="glassmorphic-enhanced border-drivers-orange/50 p-20 relative z-10 hover-glow shimmer shadow-2xl">
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
          <h1 className="text-9xl font-black mb-10 leading-tight gradient-text">
            DRIVER'S NET:
            <span className="text-7xl font-black mb-10 leading-tight gradient-text block">
              THE UBER FREIGHT
            </span>
            <span className="text-6xl font-black mb-16 leading-tight gradient-text block">
              PARTNERSHIP
            </span>
          </h1>
          <div className="relative mb-16">
            <p className="text-3xl text-white/95 max-w-5xl mx-auto leading-relaxed font-light">
              Revolutionary AI-powered freight optimization that will transform 
              <span className="gradient-text font-semibold">Uber Freight</span> into the most 
              <span className="gradient-text font-semibold">dominant logistics network</span> in North America
            </p>
            <div className="absolute -inset-4 bg-gradient-to-r from-drivers-orange/10 to-drivers-blue/10 blur-xl -z-10"></div>
          </div>

          {/* Interactive Chart Preview */}
          <div className="grid grid-cols-4 gap-6 mt-12">
            <InteractiveChart
              title="Growth"
              value="347%"
              percentage={85}
              color="from-drivers-green to-drivers-teal"
              description="Revenue Growth"
              icon={<TrendingUp className="w-6 h-6" />}
              details={[
                "Q4 2024: 127% growth",
                "Market expansion: 15 states",
                "Customer retention: 94%"
              ]}
            />
            <InteractiveChart
              title="Network"
              value="50K+"
              percentage={72}
              color="from-drivers-blue to-drivers-purple"
              description="Active Drivers"
              icon={<Users className="w-6 h-6" />}
              details={[
                "Verified drivers: 48,500",
                "Average rating: 4.8/5",
                "Coverage: 48 states"
              ]}
            />
            <InteractiveChart
              title="Scale"
              value="2.1M"
              percentage={91}
              color="from-drivers-purple to-drivers-pink"
              description="Shipments/Month"
              icon={<Globe className="w-6 h-6" />}
              details={[
                "On-time delivery: 96%",
                "Average distance: 847 miles",
                "Load capacity: 99.2%"
              ]}
            />
            <InteractiveChart
              title="Speed"
              value="4.2min"
              percentage={96}
              color="from-drivers-yellow to-drivers-orange"
              description="Match Time"
              icon={<Zap className="w-6 h-6" />}
              details={[
                "AI optimization: 99.7%",
                "Route efficiency: +23%",
                "Fuel savings: $2.1M"
              ]}
            />
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
            <h2 className="text-7xl font-black mb-10 leading-tight">
              <span className="gradient-text">THE UBER FREIGHT</span>18mo
            </h2>
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
