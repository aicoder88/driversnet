import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Clock, Phone, CheckCircle } from "lucide-react";
import Slide from "./Slide";

interface ImmediateActionSlideProps {
  onRestart?: () => void;
}

export default function ImmediateActionSlide({
  onRestart,
}: ImmediateActionSlideProps) {
  return (
    <Slide background="gradient">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            THE TIME IS <span className="text-drivers-orange">NOW</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
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

        {/* Call to Action */}
        <div className="text-center space-y-8">
          <Card className="glassmorphic-dark p-8 inline-block">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to{" "}
              <span className="text-drivers-orange">Dominate Freight?</span>
            </h3>
            <div className="flex justify-center space-x-6">
              <Button
                size="lg"
                className="bg-drivers-orange hover:bg-drivers-orange/90 text-white px-8 py-4 text-xl font-semibold rounded-xl"
              >
                <Phone className="mr-2 w-6 h-6" />
                Call Now: 1-800-FREIGHT
              </Button>
              <Button
                onClick={onRestart}
                size="lg"
                variant="outline"
                className="border-drivers-orange text-drivers-orange hover:bg-drivers-orange hover:text-white px-8 py-4 text-xl font-semibold rounded-xl"
              >
                <Rocket className="mr-2 w-6 h-6" />
                Review Presentation
              </Button>
            </div>
          </Card>

          <div className="text-gray-300 text-lg">
            <strong className="text-white">Contact:</strong>{" "}
            partnerships@driversnet.com |
            <strong className="text-white">Direct Line:</strong> +1 (555)
            123-FREIGHT
          </div>
        </div>
      </div>
    </Slide>
  );
}
