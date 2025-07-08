"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedSunProps {
  className?: string;
  width?: number;
  height?: number;
  animate?: boolean;
  animationType?: "float" | "pulse" | "bounce" | "spin" | "ping" | "none";
  speed?: "slow" | "normal" | "fast";
  variant?: "normal" | "dim";
  hover?: boolean;
}

export const AnimatedSun: React.FC<AnimatedSunProps> = ({
  className = "",
  width = 120,
  height = 120,
  animate = true,
  animationType = "pulse",
  speed = "normal",
  variant = "normal",
  hover = false,
}) => {
  const getAnimationClass = () => {
    if (!animate || animationType === "none") return "";

    switch (animationType) {
      case "float":
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
      ? "hover:scale-110 hover:rotate-12 transition-transform duration-300" 
      : "";
  };

  const getSunColor = () => {
    return variant === "dim" ? "#9CA3AF" : "currentColor";
  };

  // Sun pixel positions from the new SVG
  const sunPixels = [
    // Outer rays
    { cx: 32, cy: 3 }, { cx: 53, cy: 11 }, { cx: 61, cy: 32 }, { cx: 53, cy: 53 },
    { cx: 32, cy: 61 }, { cx: 11, cy: 53 }, { cx: 3, cy: 32 }, { cx: 10, cy: 11 },
    // Sun body - left column
    { cx: 25, cy: 18 }, { cx: 25, cy: 25 }, { cx: 18, cy: 25 }, { cx: 18, cy: 32 }, 
    { cx: 18, cy: 39 }, { cx: 25, cy: 32 }, { cx: 25, cy: 39 }, { cx: 25, cy: 46 },
    // Sun body - center column
    { cx: 32, cy: 18 }, { cx: 32, cy: 25 }, { cx: 32, cy: 32 }, { cx: 32, cy: 39 }, { cx: 32, cy: 46 },
    // Sun body - right column
    { cx: 46, cy: 25 }, { cx: 46, cy: 32 }, { cx: 46, cy: 39 }, { cx: 39, cy: 18 }, 
    { cx: 39, cy: 25 }, { cx: 39, cy: 32 }, { cx: 39, cy: 39 }, { cx: 39, cy: 46 }
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
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "w-full h-full",
          getAnimationClass()
        )}
        style={{
          animationDuration: animate ? {
            slow: "6s",
            normal: "3s", 
            fast: "1.5s"
          }[speed] : undefined
        }}
      >
        {sunPixels.map((pixel, index) => (
          <circle
            key={index}
            cx={pixel.cx}
            cy={pixel.cy}
            r="3"
            fill={getSunColor()}
          />
        ))}
      </svg>
    </div>
  );
};