"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CoverSlide from "@/components/CoverSlide";
import ProblemOpportunitySlide from "@/components/ProblemOpportunitySlide";
import OurSolutionSlide from "@/components/OurSolutionSlide";
import ProofOfDominanceSlide from "@/components/ProofOfDominanceSlide";
import GrowthTrajectorySlide from "@/components/GrowthTrajectorySlide";
import ScaleFootprintSlide from "@/components/ScaleFootprintSlide";
import TechnologyAdvantageSlide from "@/components/TechnologyAdvantageSlide";
import PerfectPartnershipSlide from "@/components/PerfectPartnershipSlide";
import InvestmentROISlide from "@/components/InvestmentROISlide";
import ImmediateActionSlide from "@/components/ImmediateActionSlide";

const slides = [
  { component: CoverSlide, title: "Cover" },
  { component: ProblemOpportunitySlide, title: "Problem & Opportunity" },
  { component: OurSolutionSlide, title: "Our Solution" },
  { component: ProofOfDominanceSlide, title: "Proof of Dominance" },
  { component: GrowthTrajectorySlide, title: "Growth Trajectory" },
  { component: ScaleFootprintSlide, title: "Scale & Footprint" },
  { component: TechnologyAdvantageSlide, title: "Technology Advantage" },
  { component: PerfectPartnershipSlide, title: "Perfect Partnership" },
  { component: InvestmentROISlide, title: "Investment & ROI" },
  { component: ImmediateActionSlide, title: "Immediate Action" },
];

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const restartPresentation = () => {
    setCurrentSlide(0);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative">
      {/* Slide Content */}
      <CurrentSlideComponent
        onNext={currentSlide === 0 ? nextSlide : undefined}
        onRestart={
          currentSlide === slides.length - 1 ? restartPresentation : undefined
        }
      />

      {/* Navigation Controls - Moved to center */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
        <div className="glassmorphic-dark rounded-2xl p-4 flex items-center space-x-4 pointer-events-auto">
          {/* Previous Button */}
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="ghost"
            size="sm"
            className="text-white hover:text-drivers-orange disabled:opacity-30"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-drivers-orange scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                title={slides[index].title}
              />
            ))}
          </div>

          {/* Next Button */}
          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            variant="ghost"
            size="sm"
            className="text-white hover:text-drivers-orange disabled:opacity-30"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 z-50">
        <div className="glassmorphic-dark rounded-xl px-4 py-2">
          <span className="text-white font-semibold">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>

      {/* Keyboard Navigation */}
      <div
        className="fixed inset-0 pointer-events-none"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" && currentSlide < slides.length - 1)
            nextSlide();
          if (e.key === "ArrowLeft" && currentSlide > 0) prevSlide();
        }}
        tabIndex={0}
      />
    </div>
  );
}
