"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  AlertTriangle,
  Lightbulb,
  Trophy,
  TrendingUp,
  Globe,
  Zap,
  Handshake,
  DollarSign,
  Rocket,
  Play,
  Pause,
  RotateCcw,
  Maximize,
  HelpCircle,
  Search,
} from "lucide-react";
import { useState, useEffect } from "react";

interface SideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
  onRestart: () => void;
  slideData: Array<{ title: string; component: any }>;
}

const slideIcons = [
  Home,
  AlertTriangle,
  Lightbulb,
  Trophy,
  TrendingUp,
  Globe,
  Zap,
  Handshake,
  DollarSign,
  Rocket,
];

const slideColors = [
  "from-drivers-orange to-drivers-yellow",
  "from-red-500 to-orange-500",
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-green-500 to-teal-500",
  "from-indigo-500 to-purple-500",
  "from-yellow-500 to-orange-500",
  "from-pink-500 to-rose-500",
  "from-emerald-500 to-green-500",
  "from-violet-500 to-purple-500",
];

export default function SideNavigation({
  currentSlide,
  totalSlides,
  onSlideChange,
  onNext,
  onPrev,
  onRestart,
  slideData,
}: SideNavigationProps) {
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      if (currentSlide < totalSlides - 1) {
        onNext();
      } else {
        setIsAutoPlay(false);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, currentSlide, totalSlides, onNext]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault();
          if (currentSlide < totalSlides - 1) onNext();
          break;
        case "ArrowLeft":
          e.preventDefault();
          if (currentSlide > 0) onPrev();
          break;
        case "Home":
          e.preventDefault();
          onSlideChange(0);
          break;
        case "End":
          e.preventDefault();
          onSlideChange(totalSlides - 1);
          break;
        case "r":
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            onRestart();
          }
          break;
        case "p":
          e.preventDefault();
          setIsAutoPlay(!isAutoPlay);
          break;
        case "f":
          e.preventDefault();
          toggleFullscreen();
          break;
        case "?":
          e.preventDefault();
          setShowHelp(!showHelp);
          break;
        case "/":
          e.preventDefault();
          setShowSearch(!showSearch);
          break;
        case "Escape":
          setShowHelp(false);
          setShowSearch(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide, totalSlides, onNext, onPrev, onSlideChange, onRestart, isAutoPlay, showHelp, showSearch]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  // Handle window width for SSR safety
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);
    
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  const filteredSlides = slideData.filter((slide, index) =>
    slide.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Mobile Menu Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-[60] glassmorphic-dark rounded-xl p-3 border border-drivers-orange/30"
      >
        <motion.div
          animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-6 h-0.5 bg-white mb-1.5 transition-all duration-200"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5 transition-all duration-200"></div>
          <div className="w-6 h-0.5 bg-white transition-all duration-200"></div>
        </motion.div>
      </motion.button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Side Navigation Panel */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ 
          x: isMobileMenuOpen || windowWidth >= 1024 ? 0 : -300, 
          opacity: 1 
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed left-0 top-0 h-full w-80 z-50 pointer-events-auto lg:translate-x-0"
      >
        <div className="h-full glassmorphic-dark border-r-2 border-drivers-orange/30 p-6 flex flex-col">
          {/* Header */}
          <div className="mb-8">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-white mb-2"
            >
              Presentation
            </motion.h2>
            <div className="text-drivers-orange font-semibold">
              {currentSlide + 1} of {totalSlides}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-white/70 mb-2">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-drivers-orange to-drivers-yellow"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Control Buttons */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            <Button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              variant="ghost"
              size="sm"
              className={`text-white hover:text-drivers-orange ${
                isAutoPlay ? "bg-drivers-orange/20" : ""
              }`}
            >
              {isAutoPlay ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {isAutoPlay ? "Pause" : "Auto"}
            </Button>
            <Button
              onClick={toggleFullscreen}
              variant="ghost"
              size="sm"
              className="text-white hover:text-drivers-orange"
            >
              <Maximize className="w-4 h-4 mr-2" />
              Full
            </Button>
            <Button
              onClick={onRestart}
              variant="ghost"
              size="sm"
              className="text-white hover:text-drivers-orange"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
            <Button
              onClick={() => setShowHelp(!showHelp)}
              variant="ghost"
              size="sm"
              className="text-white hover:text-drivers-orange"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              Help
            </Button>
          </div>

          {/* Search */}
          <div className="mb-4">
            <Button
              onClick={() => setShowSearch(!showSearch)}
              variant="ghost"
              size="sm"
              className="w-full text-white hover:text-drivers-orange justify-start"
            >
              <Search className="w-4 h-4 mr-2" />
              Search Slides
            </Button>
            <AnimatePresence>
              {showSearch && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-2"
                >
                  <input
                    type="text"
                    placeholder="Search slides..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-drivers-orange focus:outline-none"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Slide Navigation */}
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-2">
              {(() => {
                // Process slides with original indices for cleaner mapping
                const processedSlides = searchQuery 
                  ? filteredSlides.map((slide) => {
                      const originalIndex = slideData.findIndex(s => s.title === slide.title);
                      return { ...slide, originalIndex };
                    })
                  : slideData.map((slide, index) => ({ ...slide, originalIndex: index }));
                
                return processedSlides.map((slide, index) => {
                  const IconComponent = slideIcons[slide.originalIndex] || Home;
                  const isActive = currentSlide === slide.originalIndex;
                  
                  return (
                    <motion.div
                      key={slide.originalIndex}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card
                        className={`p-4 cursor-pointer transition-all duration-300 hover:scale-105 ${
                          isActive
                            ? "glassmorphic border-2 border-drivers-orange bg-drivers-orange/20"
                            : "glassmorphic-dark border border-gray-600 hover:border-drivers-orange/50"
                        }`}
                        onClick={() => onSlideChange(slide.originalIndex)}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-r ${
                              slideColors[slide.originalIndex % slideColors.length]
                            }`}
                          >
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-medium text-sm truncate">
                              {slide.title}
                            </div>
                            <div className="text-gray-400 text-xs">
                              Slide {slide.originalIndex + 1}
                            </div>
                          </div>
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-3 h-3 bg-drivers-orange rounded-full"
                            />
                          )}
                        </div>
                      </Card>
                    </motion.div>
                  );
                });
              })()}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-6 flex space-x-2">
            <Button
              onClick={onPrev}
              disabled={currentSlide === 0}
              variant="ghost"
              size="sm"
              className="flex-1 text-white hover:text-drivers-orange disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <Button
              onClick={onNext}
              disabled={currentSlide === totalSlides - 1}
              variant="ghost"
              size="sm"
              className="flex-1 text-white hover:text-drivers-orange disabled:opacity-30"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Help Modal */}
      <AnimatePresence>
        {showHelp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
            onClick={() => setShowHelp(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glassmorphic-dark rounded-2xl p-8 max-w-md w-full border-2 border-drivers-orange/50"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Keyboard Shortcuts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Next slide</span>
                  <span className="text-drivers-orange font-mono">→ / Space</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Previous slide</span>
                  <span className="text-drivers-orange font-mono">←</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">First slide</span>
                  <span className="text-drivers-orange font-mono">Home</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Last slide</span>
                  <span className="text-drivers-orange font-mono">End</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Auto-play</span>
                  <span className="text-drivers-orange font-mono">P</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Fullscreen</span>
                  <span className="text-drivers-orange font-mono">F</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Search</span>
                  <span className="text-drivers-orange font-mono">/</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Help</span>
                  <span className="text-drivers-orange font-mono">?</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Restart</span>
                  <span className="text-drivers-orange font-mono">Ctrl+R</span>
                </div>
              </div>
              <Button
                onClick={() => setShowHelp(false)}
                className="w-full mt-6 bg-drivers-orange hover:bg-drivers-orange/80"
              >
                Got it!
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
