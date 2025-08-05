"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SideNavigation from "@/components/SideNavigation";
import SlideZoom from "@/components/SlideZoom";
import CustomCursor from "@/components/CustomCursor";
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    // Set window dimensions on client side
    const updateDimensions = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const restartPresentation = () => {
    setCurrentSlide(0);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden cursor-none">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-drivers-orange/20 rounded-full"
            initial={{
              x: Math.random() * windowDimensions.width,
              y: Math.random() * windowDimensions.height,
            }}
            animate={{
              x: Math.random() * windowDimensions.width,
              y: Math.random() * windowDimensions.height,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Side Navigation */}
      <SideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onSlideChange={goToSlide}
        onNext={nextSlide}
        onPrev={prevSlide}
        onRestart={restartPresentation}
        slideData={slides}
      />

      {/* Main Content Area */}
      <div className="ml-0 lg:ml-80 relative transition-all duration-300">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <SlideZoom isZoomable={true}>
              <CurrentSlideComponent
                onNext={currentSlide === 0 ? nextSlide : undefined}
                onRestart={
                  currentSlide === slides.length - 1 ? restartPresentation : undefined
                }
              />
            </SlideZoom>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Breadcrumb Navigation */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="fixed top-6 right-6 z-40"
      >
        <div className="glassmorphic-dark rounded-xl px-4 py-2 border border-drivers-orange/30">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-drivers-orange font-semibold">
              {currentSlide + 1}
            </span>
            <span className="text-white/50">/</span>
            <span className="text-white">{slides.length}</span>
            <span className="text-white/30">•</span>
            <span className="text-white/70 max-w-32 truncate">
              {slides[currentSlide].title}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Loading Indicator for Slide Transitions */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <div className="glassmorphic-dark rounded-full p-3 border border-drivers-orange/30">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-drivers-orange border-t-transparent rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Cursor */}
      <CustomCursor />
    </div>
  );
}
