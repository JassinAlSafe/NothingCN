"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedCloud } from "./icons";

interface PixelWeatherCardProps {
  temperature?: number;
  condition?: "showers" | "sunny" | "cloudy" | "stormy";
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
    className={cn("bg-accent rounded-full", className)}
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
          {hasDot && <Dot size={dotSize} />}
        </div>
      ))}
    </div>
  );
};

const DotMatrixDegree: React.FC<{ dotSize?: number; gap?: number }> = ({ 
  dotSize = 4, 
  gap = 2 
}) => (
  <div 
    className="grid gap-1"
    style={{ 
      gridTemplateColumns: `repeat(4, ${dotSize}px)`,
      gap: `${gap}px`
    }}
  >
    {degreePattern.flat().map((hasDot, index) => (
      <div key={index}>
        {hasDot && <Dot size={dotSize} />}
      </div>
    ))}
  </div>
);

export function PixelWeatherCard({ 
  temperature = 14, 
  condition = "showers", 
  className
}: PixelWeatherCardProps) {
  const tempString = temperature.toString();

  return (
    <div className={cn(
      "bg-card border border-border rounded-2xl p-8 w-80 h-96 flex flex-col items-center justify-center relative overflow-hidden",
      className
    )}>
      {/* Animated Cloud */}
      <div className="mb-6">
        <AnimatedCloud 
          width={160}
          height={110}
          animate={true}
          animationType={condition === "showers" ? "bounce" : "pulse"}
          speed="normal"
          className="text-accent"
        />
      </div>


      {/* Temperature Display */}
      <div className="flex items-start gap-2 mb-6">
        {tempString.split('').map((digit, index) => (
          <DotMatrixNumber key={index} number={digit} dotSize={4} gap={2} />
        ))}
        <DotMatrixDegree dotSize={4} gap={2} />
      </div>

      {/* Condition Text */}
      <div className="text-foreground text-lg font-mono tracking-wider uppercase">
        {condition}
      </div>
    </div>
  );
}