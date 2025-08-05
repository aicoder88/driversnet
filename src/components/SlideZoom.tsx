"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, X, Move } from "lucide-react";

interface SlideZoomProps {
  children: React.ReactNode;
  isZoomable?: boolean;
}

export default function SlideZoom({ children, isZoomable = true }: SlideZoomProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ width: 1920, height: 1080 });

  // Handle container size for boundary calculations
  useEffect(() => {
    const updateContainerSize = () => {
      setContainerSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);
    
    return () => window.removeEventListener('resize', updateContainerSize);
  }, []);

  // Calculate pan boundaries based on zoom level and container size
  const calculateBoundaries = () => {
    const scaledWidth = containerSize.width * zoomLevel;
    const scaledHeight = containerSize.height * zoomLevel;
    const maxX = Math.max(0, (scaledWidth - containerSize.width) / 2);
    const maxY = Math.max(0, (scaledHeight - containerSize.height) / 2);
    
    return {
      minX: -maxX,
      maxX: maxX,
      minY: -maxY,
      maxY: maxY,
    };
  };

  // Constrain position within boundaries
  const constrainPosition = (newPosition: { x: number; y: number }) => {
    if (!isZoomed) return newPosition;
    
    const boundaries = calculateBoundaries();
    return {
      x: Math.max(boundaries.minX, Math.min(boundaries.maxX, newPosition.x)),
      y: Math.max(boundaries.minY, Math.min(boundaries.maxY, newPosition.y)),
    };
  };

  // Keyboard shortcuts for zoom
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isZoomable) return;
      
      switch (e.key) {
        case "z":
          if (e.altKey) {
            e.preventDefault();
            setIsZoomed(!isZoomed);
            if (!isZoomed) {
              setZoomLevel(1.5);
              setPosition({ x: 0, y: 0 });
            } else {
              setZoomLevel(1);
              setPosition({ x: 0, y: 0 });
            }
          }
          break;
        case "=":
        case "+":
          if (isZoomed && zoomLevel < 3) {
            setZoomLevel(prev => Math.min(prev + 0.2, 3));
          }
          break;
        case "-":
          if (isZoomed && zoomLevel > 0.5) {
            setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
          }
          break;
        case "Escape":
          if (isZoomed) {
            setIsZoomed(false);
            setZoomLevel(1);
            setPosition({ x: 0, y: 0 });
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isZoomed, zoomLevel, isZoomable, containerSize]);

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
    if (!isZoomed) {
      setZoomLevel(1.5);
      setPosition({ x: 0, y: 0 });
    } else {
      setZoomLevel(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isZoomed) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !isZoomed) return;
    const newPosition = {
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    };
    setPosition(constrainPosition(newPosition));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!isZoomed) return;
    e.preventDefault();
    
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoomLevel(prev => Math.max(0.5, Math.min(3, prev + delta)));
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Zoom Controls */}
      {isZoomable && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-20 right-6 z-50 flex flex-col space-y-2"
        >
          <Button
            onClick={handleZoomToggle}
            variant="ghost"
            size="sm"
            className={`glassmorphic-dark border border-drivers-orange/30 text-white hover:text-drivers-orange ${
              isZoomed ? "bg-drivers-orange/20" : ""
            }`}
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </Button>
          
          {isZoomed && (
            <>
              <Button
                onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 3))}
                variant="ghost"
                size="sm"
                className="glassmorphic-dark border border-drivers-orange/30 text-white hover:text-drivers-orange"
              >
                +
              </Button>
              <Button
                onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.5))}
                variant="ghost"
                size="sm"
                className="glassmorphic-dark border border-drivers-orange/30 text-white hover:text-drivers-orange"
              >
                -
              </Button>
              <Button
                onClick={() => {
                  setIsZoomed(false);
                  setZoomLevel(1);
                  setPosition({ x: 0, y: 0 });
                }}
                variant="ghost"
                size="sm"
                className="glassmorphic-dark border border-drivers-orange/30 text-white hover:text-drivers-orange"
              >
                <X className="w-4 h-4" />
              </Button>
            </>
          )}
        </motion.div>
      )}

      {/* Zoom Level Indicator */}
      {isZoomed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="glassmorphic-dark rounded-xl px-4 py-2 border border-drivers-orange/30">
            <div className="flex items-center space-x-3 text-white">
              <Move className="w-4 h-4 text-drivers-orange" />
              <span className="text-sm">
                {Math.round(zoomLevel * 100)}% • Drag to pan
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Zoomable Content */}
      <motion.div
        animate={{
          scale: isZoomed ? zoomLevel : 1,
          x: isZoomed ? position.x : 0,
          y: isZoomed ? position.y : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className={`w-full h-full ${
          isZoomed ? "cursor-move" : "cursor-default"
        } ${isDragging ? "cursor-grabbing" : ""}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        style={{
          transformOrigin: "center center",
        }}
      >
        {children}
      </motion.div>

      {/* Zoom Overlay */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-30 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
