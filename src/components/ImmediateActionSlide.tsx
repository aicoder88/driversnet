import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Clock, Phone, CheckCircle } from "lucide-react";
import Slide from "./Slide";
import Image from "next/image";

interface ImmediateActionSlideProps {
  onRestart?: () => void;
}

export default function ImmediateActionSlide({
  onRestart,
}: ImmediateActionSlideProps) {
  return (
    <Slide background="gradient">
      <div className="space-y-12 relative">
        {/* Urgency Imagery - Clocks, Calendars, Countdown */}
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1501139083538-0139583c060f?w=1920&q=90"
            alt="Urgency imagery with clocks and countdown timers"
            fill
            className="object-cover"
          />
        </div>

        {/* Action Steps Visual Hierarchy */}
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=90"
            alt="Clear action steps with visual hierarchy"
            fill
            className="object-cover mix-blend-screen"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h1 className="text-7xl font-bold text-white mb-6">
            THE TIME IS{" "}
            <span className="text-drivers-orange bg-gradient-to-r from-drivers-orange to-drivers-red bg-clip-text text-transparent animate-pulse">
              NOW
            </span>
          </h1>
          <p className="text-3xl text-gray-200 max-w-5xl mx-auto font-light">
            Every day you wait, competitors get closer. Secure your freight
            dominance today.
          </p>
        </div>

        {/* Urgency Factors */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <Card className="glassmorphic-dark p-6 text-center">
            <Clock className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Market Window</h3>
            <div className="text-3xl font-bold text-drivers-orange mb-2">
              6 Months
            </div>
            <div className="text-gray-300 text-sm">
              Before competitors catch up
            </div>
          </Card>

          <Card className="glassmorphic-dark p-6 text-center">
            <Rocket className="w-12 h-12 text-drivers-orange mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">First Mover</h3>
            <div className="text-3xl font-bold text-drivers-orange mb-2">
              47%
            </div>
            <div className="text-gray-300 text-sm">
              Advantage in market share
            </div>
          </Card>

          <Card className="glassmorphic-dark p-6 text-center">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Ready Now</h3>
            <div className="text-3xl font-bold text-drivers-orange mb-2">
              90 Days
            </div>
            <div className="text-gray-300 text-sm">To full implementation</div>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="glassmorphic-dark p-8 mb-12 border-drivers-orange/50">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Your <span className="text-drivers-orange">Next Steps</span>
          </h3>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">
                Immediate Actions
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-drivers-orange rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      Executive Decision
                    </div>
                    <div className="text-gray-300 text-sm">
                      Approve partnership within 48 hours
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-drivers-orange rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <div>
                    <div className="text-white font-semibold">Legal Review</div>
                    <div className="text-gray-300 text-sm">
                      Contract terms and integration plan
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-drivers-orange rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      Technical Integration
                    </div>
                    <div className="text-gray-300 text-sm">
                      API setup and data pipeline
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Timeline</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Decision</span>
                  <span className="text-drivers-orange font-bold">
                    48 hours
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Contract Signing</span>
                  <span className="text-drivers-orange font-bold">1 week</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Integration Start</span>
                  <span className="text-drivers-orange font-bold">2 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Full Deployment</span>
                  <span className="text-drivers-orange font-bold">90 days</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* MASSIVE Call to Action */}
        <div className="text-center space-y-12 relative z-10">
          <Card className="glassmorphic-dark p-16 inline-block border-2 border-drivers-orange/50 shadow-2xl">
            <h3 className="text-5xl font-bold text-white mb-8">
              Ready to{" "}
              <span className="text-drivers-orange bg-gradient-to-r from-drivers-orange to-drivers-yellow bg-clip-text text-transparent">
                Dominate Freight?
              </span>
            </h3>

            {/* DOMINANT Call-to-Action Button */}
            <div className="flex flex-col items-center space-y-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-drivers-orange to-drivers-red hover:from-drivers-orange/90 hover:to-drivers-red/90 text-white px-20 py-10 text-4xl font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-drivers-orange/50"
              >
                <Phone className="mr-4 w-10 h-10" />
                SCHEDULE DEMO NOW
              </Button>

              {/* Contact Information - Large and Readable */}
              <div className="space-y-4">
                <div className="text-3xl font-bold text-drivers-orange">
                  1-800-FREIGHT
                </div>
                <div className="text-2xl text-white">
                  partnerships@driversnet.com
                </div>
                <div className="text-xl text-drivers-yellow font-semibold">
                  30 Days to Launch • Guaranteed ROI
                </div>
              </div>

              <Button
                onClick={onRestart}
                size="lg"
                variant="outline"
                className="border-2 border-drivers-orange text-drivers-orange hover:bg-drivers-orange hover:text-white px-12 py-6 text-2xl font-semibold rounded-xl"
              >
                <Rocket className="mr-3 w-8 h-8" />
                Review Presentation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Slide>
  );
}
