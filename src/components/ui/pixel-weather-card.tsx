"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedCloud, AnimatedSun, AnimatedClearNight, AnimatedRain } from "./icons";

interface PixelWeatherCardProps {
  temperature?: number;
  condition?: "showers" | "sunny" | "cloudy" | "clear" | "stormy" | "clear-night";
  className?: string;
}

// Dot matrix patterns for numbers 0-9
const numberPatterns: Record<string, boolean[][]> = {
  "0": [
    [false, true, true, true, false],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, false]
  ],
  "1": [
    [false, false, true, false, false],
    [false, true, true, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, true, true, true, false]
  ],
  "2": [
    [false, true, true, true, false],
    [true, false, false, false, true],
    [false, false, false, false, true],
    [false, false, false, true, false],
    [false, false, true, false, false],
    [false, true, false, false, false],
    [true, true, true, true, true]
  ],
  "3": [
    [false, true, true, true, false],
    [true, false, false, false, true],
    [false, false, false, false, true],
    [false, false, true, true, false],
    [false, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, false]
  ],
  "4": [
    [false, false, false, true, false],
    [false, false, true, true, false],
    [false, true, false, true, false],
    [true, false, false, true, false],
    [true, true, true, true, true],
    [false, false, false, true, false],
    [false, false, false, true, false]
  ],
  "5": [
    [true, true, true, true, true],
    [true, false, false, false, false],
    [true, false, false, false, false],
    [true, true, true, true, false],
    [false, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, false]
  ],
  "6": [
    [false, true, true, true, false],
    [true, false, false, false, true],
    [true, false, false, false, false],
    [true, true, true, true, false],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, false]
  ],
  "7": [
    [true, true, true, true, true],
    [false, false, false, false, true],
    [false, false, false, true, false],
    [false, false, true, false, false],
    [false, true, false, false, false],
    [false, true, false, false, false],
    [false, true, false, false, false]
  ],
  "8": [
    [false, true, true, true, false],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, false],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, false]
  ],
  "9": [
    [false, true, true, true, false],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, true],
    [false, false, false, false, true],
    [true, false, false, false, true],
    [false, true, true, true, false]
  ]
};

// Degree symbol pattern
const degreePattern: boolean[][] = [
  [false, true, true, false],
  [true, false, false, true],
  [true, false, false, true],
  [false, true, true, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false]
];



interface DotProps {
  size?: number;
  className?: string;
}

const Dot: React.FC<DotProps> = ({ size = 8, className = "" }) => (
  <div 
    className={cn("rounded-full", className)}
    style={{ width: size, height: size }}
  />
);

interface DotMatrixNumberProps {
  number: string;
  dotSize?: number;
  gap?: number;
}

const DotMatrixNumber: React.FC<DotMatrixNumberProps> = ({ 
  number, 
  dotSize = 4, 
  gap = 2
}) => {
  const pattern = numberPatterns[number];
  if (!pattern) return null;

  return (
    <div 
      className="grid gap-1"
      style={{ 
        gridTemplateColumns: `repeat(5, ${dotSize}px)`,
        gap: `${gap}px`
      }}
    >
      {pattern.flat().map((hasDot, index) => (
        <div key={index}>
          {hasDot && <Dot size={dotSize} className="bg-foreground" />}
        </div>
      ))}
    </div>
  );
};

const DotMatrixDegree: React.FC<{ dotSize?: number; gap?: number }> = ({ 
  dotSize = 4, 
  gap = 2
}) => {
  
  return (
    <div 
      className="grid gap-1"
      style={{ 
        gridTemplateColumns: `repeat(4, ${dotSize}px)`,
        gap: `${gap}px`
      }}
    >
      {degreePattern.flat().map((hasDot, index) => (
        <div key={index}>
          {hasDot && <Dot size={dotSize} className="bg-foreground" />}
        </div>
      ))}
    </div>
  );
};


export function PixelWeatherCard({ 
  temperature = 14, 
  condition = "showers", 
  className
}: PixelWeatherCardProps) {
  const tempString = temperature.toString();

  return (
    <div 
      className={cn(
        "rounded-2xl p-8 w-80 h-96 relative overflow-hidden transition-all duration-300",
        "bg-card text-card-foreground border border-border",
        className
      )}
      role="article"
      aria-label={`Weather card showing ${temperature}° ${condition}`}
    >
      {/* Weather Icon - Centered */}
      <div className="flex items-center justify-center h-3/5" role="img" aria-label={`Weather icon showing ${condition} conditions`}>
        {condition === "clear-night" ? (
          <AnimatedClearNight 
            width={160}
            height={110}
            animate={true}
            animationType="twinkle"
            speed="normal"
            className="text-accent"
          />
        ) : (condition === "sunny" || condition === "clear") ? (
          <AnimatedSun 
            width={160}
            height={110}
            animate={true}
            animationType="pulse"
            speed="normal"
            className="text-accent"
          />
        ) : condition === "showers" ? (
          <AnimatedRain 
            width={160}
            height={110}
            animate={true}
            animationType="drip"
            speed="normal"
            className="text-accent"
          />
        ) : (
          <AnimatedCloud 
            width={160}
            height={110}
            animate={true}
            animationType="pulse"
            speed="normal"
            className="text-accent"
          />
        )}
      </div>

      {/* Temperature and Text - Bottom Left */}
      <div className="absolute bottom-8 left-8">
        {/* Temperature Display */}
        <div className="flex items-start gap-2 mb-2" role="text" aria-label={`Temperature: ${temperature} degrees`}>
          {tempString.split('').map((digit, index) => (
            <DotMatrixNumber key={index} number={digit} dotSize={4} gap={2} />
          ))}
          <DotMatrixDegree dotSize={4} gap={2} />
        </div>
        
        {/* Condition Text - Below Temperature with same width */}
        <div className="text-lg font-mono tracking-wider uppercase opacity-80" style={{ width: `${(tempString.length * 5 + 4) * 4 + (tempString.length + 1 - 1) * 2}px` }}>
          {condition === "showers"
            ? "SHOWERS"
            : condition === "sunny"
            ? "SUNNY"
            : condition === "clear"
            ? "CLEAR"
            : condition === "clear-night"
            ? "NIGHT"
            : condition === "cloudy"
            ? "CLOUDY"
            : condition === "stormy"
            ? "STORMY"
            : String(condition).toUpperCase()}
        </div>
      </div>
    </div>
  );
}