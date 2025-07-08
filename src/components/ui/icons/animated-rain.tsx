"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedRainProps {
  className?: string;
  width?: number;
  height?: number;
  animate?: boolean;
  animationType?: "drip" | "pulse" | "bounce" | "spin" | "ping" | "none";
  speed?: "slow" | "normal" | "fast";
  variant?: "normal" | "dim";
  hover?: boolean;
}

export const AnimatedRain: React.FC<AnimatedRainProps> = ({
  className = "",
  width = 120,
  height = 100,
  animate = true,
  animationType = "drip",
  speed = "normal",
  variant = "normal",
  hover = false,
}) => {
  const getAnimationClass = () => {
    if (!animate || animationType === "none") return "";

    switch (animationType) {
      case "drip":
        return "animate-bounce";
      case "pulse":
        return "animate-pulse";
      case "bounce":
        return "animate-bounce";
      case "spin":
        return "animate-spin";
      case "ping":
        return "animate-ping";
      default:
        return "";
    }
  };

  const getVariantStyles = () => {
    return variant === "dim" 
      ? "opacity-60" 
      : "opacity-100";
  };

  const getHoverStyles = () => {
    return hover 
      ? "hover:scale-110 transition-transform duration-300" 
      : "";
  };

  const getRainColor = () => {
    return variant === "dim" ? "#9CA3AF" : "currentColor";
  };

  // Cloud pixels (same as cloudy icon)
  const cloudPixels = [
    // Top row
    { cx: 24, cy: 10 }, { cx: 38, cy: 10 }, { cx: 52, cy: 10 }, { cx: 66, cy: 10 },
    { cx: 17, cy: 10 }, { cx: 45, cy: 10 }, { cx: 59, cy: 10 },
    // Second row
    { cx: 24, cy: 17 }, { cx: 38, cy: 17 }, { cx: 52, cy: 17 }, { cx: 66, cy: 17 },
    { cx: 73, cy: 17 }, { cx: 10, cy: 17 }, { cx: 17, cy: 17 }, { cx: 31, cy: 17 },
    { cx: 45, cy: 17 }, { cx: 59, cy: 17 },
    // Third row (24)
    { cx: 38, cy: 24 }, { cx: 52, cy: 24 }, { cx: 66, cy: 24 }, { cx: 73, cy: 24 },
    { cx: 24, cy: 24 }, { cx: 10, cy: 24 }, { cx: 31, cy: 24 }, { cx: 45, cy: 24 },
    { cx: 59, cy: 24 }, { cx: 17, cy: 24 }, { cx: 3, cy: 24 },
    // Fourth row (31)
    { cx: 38, cy: 31 }, { cx: 52, cy: 31 }, { cx: 66, cy: 31 }, { cx: 73, cy: 31 },
    { cx: 10, cy: 31 }, { cx: 24, cy: 31 }, { cx: 31, cy: 31 }, { cx: 45, cy: 31 },
    { cx: 59, cy: 31 }, { cx: 17, cy: 31 }, { cx: 3, cy: 31 },
    // Bottom row (38)
    { cx: 38, cy: 38 }, { cx: 52, cy: 38 }, { cx: 66, cy: 38 }, { cx: 10, cy: 38 },
    { cx: 24, cy: 38 }, { cx: 31, cy: 38 }, { cx: 45, cy: 38 }, { cx: 59, cy: 38 },
    { cx: 17, cy: 38 },
    // Top edge pixels
    { cx: 52, cy: 3 }, { cx: 45, cy: 3 }, { cx: 59, cy: 3 }
  ];

  // Rain drops pixels
  const rainDrops = [
    { cx: 9, cy: 61 }, { cx: 31, cy: 61 }, { cx: 53, cy: 61 },
    { cx: 17, cy: 54 }, { cx: 39, cy: 54 }, { cx: 61, cy: 54 }
  ];

  return (
    <div 
      className={cn(
        "relative inline-block",
        getVariantStyles(),
        getHoverStyles(),
        className
      )}
      style={{ 
        width: `${width}px`, 
        height: `${height}px`
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 76 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Cloud part (static) */}
        {cloudPixels.map((pixel, index) => (
          <circle
            key={`cloud-${index}`}
            cx={pixel.cx}
            cy={pixel.cy}
            r="3"
            fill={getRainColor()}
          />
        ))}
        
        {/* Rain drops (animated) */}
        {rainDrops.map((drop, index) => (
          <circle
            key={`rain-${index}`}
            cx={drop.cx}
            cy={drop.cy}
            r="3"
            fill={getRainColor()}
            className={cn(
              animationType === "drip" ? "animate-bounce" : getAnimationClass()
            )}
            style={{
              animationDelay: animationType === "drip" ? `${index * 200}ms` : undefined,
              animationDuration: animate ? {
                slow: "2s",
                normal: "1s", 
                fast: "0.5s"
              }[speed] : undefined
            }}
          />
        ))}
      </svg>
    </div>
  );
};