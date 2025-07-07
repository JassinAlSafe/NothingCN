"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PixelWeatherCardProps {
  temperature?: number;
  condition?: "showers" | "sunny" | "cloudy" | "stormy";
  className?: string;
  showRain?: boolean;
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

// Static rain drop positions for showers condition
const staticRainDrops = [
  { x: 40, y: 20 },
  { x: 80, y: 35 },
  { x: 120, y: 25 },
  { x: 160, y: 40 },
  { x: 200, y: 30 },
  { x: 240, y: 45 }
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
  className,
  showRain = true 
}: PixelWeatherCardProps) {
  const tempString = temperature.toString();

  return (
    <div className={cn(
      "bg-card border border-border rounded-2xl p-8 w-80 h-96 flex flex-col items-center justify-center relative overflow-hidden",
      className
    )}>
      {/* Cloud using original SVG */}
      <div className="mb-6">
        <svg
          width="120"
          height="80"
          viewBox="0 0 300 300"
          className="text-accent"
          fill="currentColor"
        >
          <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)">
            <path d="M1629 2345 c-83 -45 -30 -170 63 -150 69 16 81 117 17 150 -34 18 -47 18 -80 0z m94 -22 c27 -25 22 -78 -9 -102 -15 -12 -34 -21 -44 -21 -34 0 -70 39 -70 75 0 65 72 93 123 48z"/>
            <path d="M1825 2350 c-33 -13 -49 -39 -48 -78 1 -43 39 -82 79 -82 34 0 84 51 84 85 0 31 -49 85 -77 84 -10 0 -27 -4 -38 -9z m88 -32 c24 -28 21 -65 -8 -93 -27 -28 -45 -31 -78 -14 -30 16 -37 28 -37 66 0 65 80 92 123 41z"/>
            <path d="M2014 2350 c-26 -10 -54 -48 -54 -72 0 -30 21 -65 47 -77 39 -18 63 -13 95 19 25 26 29 36 24 63 -11 55 -64 87 -112 67z m60 -11 c60 -28 53 -114 -11 -132 -83 -24 -130 101 -51 133 31 12 33 12 62 -1z"/>
            <path d="M869 2141 c-34 -35 -37 -68 -8 -105 15 -19 30 -26 54 -26 47 0 64 8 81 41 18 36 10 73 -23 99 -36 28 -70 25 -104 -9z m100 1 c48 -38 19 -122 -43 -122 -37 0 -49 7 -65 37 -17 33 -14 51 14 78 28 29 64 32 94 7z"/>
            <path d="M1073 2160 c-47 -19 -58 -92 -20 -128 52 -49 137 -13 137 57 0 60 -57 95 -117 71z m81 -21 c50 -40 24 -119 -40 -119 -69 0 -101 78 -48 119 15 12 34 21 44 21 10 0 29 -9 44 -21z"/>
            <path d="M1445 2158 c-49 -28 -59 -78 -24 -122 15 -19 30 -26 55 -26 47 0 70 14 83 50 24 71 -49 135 -114 98z m85 -18 c24 -24 26 -77 3 -102 -23 -25 -77 -24 -103 4 -27 29 -25 64 5 93 29 30 68 32 95 5z"/>
            <path d="M1616 2149 c-33 -26 -37 -88 -6 -119 29 -29 90 -27 118 3 69 74 -32 179 -112 116z m98 -10 c51 -40 21 -119 -46 -119 -42 0 -68 25 -68 66 0 38 32 74 66 74 12 0 33 -9 48 -21z"/>
            <path d="M1805 2145 c-32 -31 -34 -86 -5 -115 31 -31 93 -27 119 6 25 31 26 55 6 93 -24 48 -81 56 -120 16z m100 -10 c47 -46 19 -115 -47 -115 -42 0 -68 25 -68 66 0 66 69 96 115 49z"/>
            <path d="M2005 2158 c-49 -28 -59 -78 -24 -122 16 -20 29 -26 59 -26 53 0 84 27 84 75 0 64 -65 104 -119 73z m83 -15 c52 -44 24 -123 -44 -123 -68 0 -97 68 -49 115 28 29 65 32 93 8z"/>
            <path d="M2194 2158 c-23 -11 -44 -48 -44 -77 0 -10 9 -30 21 -45 38 -48 136 -26 140 32 3 40 -3 58 -27 80 -27 24 -56 27 -90 10z m94 -25 c17 -24 15 -73 -5 -95 -22 -24 -77 -24 -103 2 -27 27 -25 66 6 97 20 20 31 24 57 19 18 -3 38 -14 45 -23z"/>
          </g>
        </svg>
      </div>

      {/* Static Rain Drops */}
      {showRain && condition === "showers" && (
        <div className="mb-6">
          <div className="relative w-64 h-16">
            {staticRainDrops.map((drop, index) => (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `${drop.x}px`,
                  top: `${drop.y}px`
                }}
              >
                <Dot size={4} className="bg-accent opacity-80" />
              </div>
            ))}
          </div>
        </div>
      )}

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