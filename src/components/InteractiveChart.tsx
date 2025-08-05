"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";

interface InteractiveChartProps {
  title: string;
  value: string;
  percentage: number;
  color: string;
  description: string;
  icon?: React.ReactNode;
  details?: string[];
}

export default function InteractiveChart({
  title,
  value,
  percentage,
  color,
  description,
  icon,
  details = [],
}: InteractiveChartProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const circumference = 2 * Math.PI * 30;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <Card
        className={`glassmorphic-enhanced p-6 text-center hover-glow cursor-pointer transition-all duration-500 border-2 ${color}/30 relative overflow-hidden`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Background Glow Effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${color}/10 to-transparent`}
          animate={{
            opacity: isHovered ? 0.3 : 0.1,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon */}
        {icon && (
          <motion.div
            className="flex justify-center mb-4"
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`p-3 rounded-full bg-gradient-to-r ${color} text-white`}>
              {icon}
            </div>
          </motion.div>
        )}

        {/* Circular Progress */}
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
              <motion.circle
                cx="40"
                cy="40"
                r="30"
                stroke={`url(#gradient-${title.replace(/\s+/g, '')})`}
                strokeWidth="6"
                fill="none"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="drop-shadow-lg"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                className={`font-bold text-sm ${color.includes('orange') ? 'text-drivers-orange' : color.includes('blue') ? 'text-drivers-blue' : 'text-drivers-green'}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                {percentage}%
              </motion.span>
            </div>
          </div>

          {/* SVG Gradients */}
          <svg width="0" height="0">
            <defs>
              <linearGradient id={`gradient-${title.replace(/\s+/g, '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={color.includes('orange') ? '#ff6b35' : color.includes('blue') ? '#2563eb' : '#10b981'} />
                <stop offset="100%" stopColor={color.includes('orange') ? '#f59e0b' : color.includes('blue') ? '#8b5cf6' : '#14b8a6'} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Value */}
        <motion.div
          className={`text-4xl font-bold mb-2 ${color.includes('orange') ? 'text-drivers-orange' : color.includes('blue') ? 'text-drivers-blue' : 'text-drivers-green'}`}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {value}
        </motion.div>

        {/* Description */}
        <div className="text-white text-lg mb-2">{description}</div>

        {/* Progress Bar */}
        <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${color}`}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </div>

        {/* Expand Indicator */}
        <motion.div
          className="mt-4 text-white/50 text-sm"
          animate={{ opacity: isHovered ? 1 : 0.5 }}
        >
          {isExpanded ? "Click to collapse" : "Click for details"}
        </motion.div>

        {/* Expanded Details */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {details.length > 0 && (
            <div className="mt-4 pt-4 border-t border-white/20">
              <ul className="text-left text-white/80 text-sm space-y-2">
                {details.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className={`w-2 h-2 rounded-full ${color} mr-3`} />
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </Card>
    </motion.div>
  );
}
