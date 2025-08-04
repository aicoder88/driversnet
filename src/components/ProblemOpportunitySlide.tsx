import { Card } from "@/components/ui/card";
import {
  AlertTriangle,
  TrendingUp,
  DollarSign,
  Clock,
  BarChart3,
  PieChart,
} from "lucide-react";
import Slide from "./Slide";
import Image from "next/image";

export default function ProblemOpportunitySlide() {
  return (
    <Slide>
      <div className="space-y-12 relative">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
            alt="Freight logistics"
            fill
            className="object-cover"
          />
        </div>

        {/* Header with Interactive Chart */}
        <div className="text-center mb-16 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">
            THE{" "}
            <span className="text-drivers-red bg-gradient-to-r from-drivers-red to-drivers-orange bg-clip-text text-transparent animate-pulse">
              $47 BILLION
            </span>{" "}
            PROBLEM
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Freight inefficiencies are costing the industry billions. Here's
            your opportunity to lead the solution.
          </p>

          {/* Problem Visualization */}
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-64">
              <svg className="w-64 h-64 transform -rotate-90">
                <circle
                  cx="128"
                  cy="128"
                  r="100"
                  stroke="#374151"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="128"
                  cy="128"
                  r="100"
                  stroke="#ef4444"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray="628"
                  strokeDashoffset="220"
                  className="animate-pulse"
                />
                <circle
                  cx="128"
                  cy="128"
                  r="80"
                  stroke="#374151"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="128"
                  cy="128"
                  r="80"
                  stroke="#f59e0b"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="502"
                  strokeDashoffset="150"
                  className="animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-drivers-red">
                  $47B
                </span>
                <span className="text-white text-sm">Lost Annually</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Problem Cards with Charts */}
        <div className="grid grid-cols-2 gap-8 mb-12 relative z-10">
          <Card className="glassmorphic-dark p-8 border-2 border-drivers-red/30 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-12 h-12 text-drivers-red mr-4 animate-pulse" />
              <h3 className="text-2xl font-bold text-white">
                Current Pain Points
              </h3>
            </div>

            {/* Interactive Problem Chart */}
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-2">
                    <svg className="w-16 h-16 transform -rotate-90">
                      <circle
                        cx="32"
                        cy="32"
                        r="24"
                        stroke="#374151"
                        strokeWidth="4"
                        fill="none"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="24"
                        stroke="#ef4444"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="150"
                        strokeDashoffset="97"
                        className="animate-pulse"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-drivers-red font-bold text-xs">
                        35%
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-300">Empty Miles</div>
                </div>
                <div className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-2">
                    <svg className="w-16 h-16 transform -rotate-90">
                      <circle
                        cx="32"
                        cy="32"
                        r="24"
                        stroke="#374151"
                        strokeWidth="4"
                        fill="none"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="24"
                        stroke="#f59e0b"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="150"
                        strokeDashoffset="90"
                        className="animate-pulse"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-drivers-yellow font-bold text-xs">
                        40%
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-300">Inefficiency</div>
                </div>
              </div>
            </div>

            <ul className="space-y-4 text-gray-300 text-lg">
              <li className="flex items-center">
                <div className="w-3 h-3 bg-drivers-red rounded-full mr-3 animate-pulse" />
                Empty miles: 35% of all freight miles
                <div className="ml-auto text-drivers-red font-bold">$15B</div>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-drivers-yellow rounded-full mr-3 animate-pulse" />
                Driver shortage: 80,000+ unfilled positions
                <div className="ml-auto text-drivers-yellow font-bold">
                  $12B
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-drivers-orange rounded-full mr-3 animate-pulse" />
                Inefficient routing costs $87B annually
                <div className="ml-auto text-drivers-orange font-bold">
                  $87B
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-drivers-pink rounded-full mr-3 animate-pulse" />
                Manual processes slow operations by 40%
                <div className="ml-auto text-drivers-pink font-bold">$8B</div>
              </li>
            </ul>
          </Card>

          <Card className="glassmorphic-dark p-8 border-2 border-drivers-green/30 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-12 h-12 text-drivers-green mr-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-white">
                Market Opportunity
              </h3>
            </div>

            {/* Market Growth Visualization */}
            <div className="mb-6">
              <div className="relative h-32">
                <svg className="w-full h-32">
                  <defs>
                    <linearGradient
                      id="growthGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="50%" stopColor="#14b8a6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <polyline
                    fill="none"
                    stroke="url(#growthGradient)"
                    strokeWidth="3"
                    points="0,120 50,100 100,80 150,60 200,40 250,20 300,10"
                    className="animate-pulse"
                  />
                  <circle
                    cx="50"
                    cy="100"
                    r="4"
                    fill="#10b981"
                    className="animate-ping"
                  />
                  <circle
                    cx="150"
                    cy="60"
                    r="4"
                    fill="#14b8a6"
                    className="animate-ping"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <circle
                    cx="250"
                    cy="20"
                    r="4"
                    fill="#06b6d4"
                    className="animate-ping"
                    style={{ animationDelay: "1s" }}
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center relative">
                <div className="text-4xl font-bold text-drivers-green mb-2 animate-pulse">
                  $2.1T
                </div>
                <div className="text-gray-300">Total Freight Market Size</div>
                <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-drivers-green to-drivers-teal w-full animate-pulse"></div>
                </div>
              </div>
              <div className="text-center relative">
                <div className="text-4xl font-bold text-drivers-teal mb-2 animate-pulse">
                  23%
                </div>
                <div className="text-gray-300">Annual Growth Rate</div>
                <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-drivers-teal to-drivers-blue w-1/4 animate-pulse"></div>
                </div>
              </div>
              <div className="text-center relative">
                <div className="text-4xl font-bold text-drivers-blue mb-2 animate-pulse">
                  $47B
                </div>
                <div className="text-gray-300">
                  Efficiency Savings Potential
                </div>
                <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-drivers-blue to-drivers-purple w-1/2 animate-pulse"></div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Enhanced Impact Metrics with Interactive Elements */}
        <Card className="glassmorphic-dark p-8 border-2 border-drivers-orange/50 relative z-10">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            What This Means for{" "}
            <span className="text-drivers-orange bg-gradient-to-r from-drivers-orange to-drivers-yellow bg-clip-text text-transparent">
              Uber Freight
            </span>
          </h3>

          {/* Interactive Dashboard */}
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto relative">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#374151"
                      strokeWidth="6"
                      fill="none"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#ff6b35"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray="251"
                      strokeDashoffset="75"
                      className="animate-pulse"
                    />
                  </svg>
                  <DollarSign className="w-12 h-12 text-drivers-orange absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce" />
                </div>
              </div>
              <div className="text-3xl font-bold text-drivers-orange mb-2 animate-pulse">
                $890M
              </div>
              <div className="text-gray-300 text-lg">
                Annual Revenue Opportunity
              </div>
              <div className="mt-3 flex justify-center space-x-1">
                <div className="w-2 h-8 bg-drivers-orange rounded animate-pulse"></div>
                <div
                  className="w-2 h-6 bg-drivers-orange/70 rounded animate-pulse"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-10 bg-drivers-orange rounded animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-7 bg-drivers-orange/70 rounded animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                ></div>
                <div
                  className="w-2 h-12 bg-drivers-orange rounded animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto relative">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#374151"
                      strokeWidth="6"
                      fill="none"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#14b8a6"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray="251"
                      strokeDashoffset="133"
                      className="animate-pulse"
                    />
                  </svg>
                  <Clock
                    className="w-12 h-12 text-drivers-teal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin"
                    style={{ animationDuration: "3s" }}
                  />
                </div>
              </div>
              <div className="text-3xl font-bold text-drivers-teal mb-2 animate-pulse">
                47%
              </div>
              <div className="text-gray-300 text-lg">Faster Load Matching</div>
              <div className="mt-3 h-3 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-drivers-teal to-drivers-blue w-1/2 animate-pulse"></div>
              </div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto relative">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#374151"
                      strokeWidth="6"
                      fill="none"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#10b981"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray="251"
                      strokeDashoffset="80"
                      className="animate-pulse"
                    />
                  </svg>
                  <TrendingUp className="w-12 h-12 text-drivers-green absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce" />
                </div>
              </div>
              <div className="text-3xl font-bold text-drivers-green mb-2 animate-pulse">
                3.2x
              </div>
              <div className="text-gray-300 text-lg">
                Network Efficiency Gain
              </div>
              <div className="mt-3 grid grid-cols-3 gap-1">
                <div className="h-2 bg-drivers-green rounded animate-pulse"></div>
                <div
                  className="h-2 bg-drivers-green/70 rounded animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="h-2 bg-drivers-green rounded animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Slide>
  );
}
