"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedClearNightProps {
  className?: string;
  width?: number;
  height?: number;
  animate?: boolean;
  animationType?: "twinkle" | "pulse" | "float" | "bounce" | "spin" | "ping" | "none";
  speed?: "slow" | "normal" | "fast";
  variant?: "normal" | "dim";
  hover?: boolean;
}

export const AnimatedClearNight: React.FC<AnimatedClearNightProps> = ({
  className = "",
  width = 120,
  height = 120,
  animate = true,
  animationType = "twinkle",
  speed = "normal",
  variant = "normal",
  hover = false,
}) => {
  const getAnimationClass = () => {
    if (!animate || animationType === "none") return "";

    switch (animationType) {
      case "twinkle":
        return "animate-pulse";
      case "pulse":
        return "animate-pulse";
      case "float":
        return "animate-bounce";
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

  const getStarColor = () => {
    return variant === "dim" ? "#9CA3AF" : "currentColor";
  };

  // Star positions from the original SVG
  const stars = [
    { cx: 25, cy: 5 }, { cx: 17, cy: 5 }, { cx: 17, cy: 12 }, { cx: 17, cy: 19 },
    { cx: 17, cy: 26 }, { cx: 17, cy: 33 }, { cx: 54, cy: 3 }, { cx: 17, cy: 40 },
    { cx: 47, cy: 10 }, { cx: 17, cy: 47 }, { cx: 17, cy: 54 }, { cx: 10, cy: 54 },
    { cx: 10, cy: 47 }, { cx: 24, cy: 54 }, { cx: 24, cy: 61 }, { cx: 24, cy: 47 },
    { cx: 24, cy: 40 }, { cx: 54, cy: 17 }, { cx: 3, cy: 40 }, { cx: 24, cy: 33 },
    { cx: 61, cy: 10 }, { cx: 3, cy: 33 }, { cx: 3, cy: 26 }, { cx: 31, cy: 54 },
    { cx: 31, cy: 61 }, { cx: 31, cy: 47 }, { cx: 31, cy: 40 }, { cx: 10, cy: 40 },
    { cx: 10, cy: 33 }, { cx: 10, cy: 26 }, { cx: 10, cy: 19 }, { cx: 10, cy: 12 },
    { cx: 38, cy: 54 }, { cx: 38, cy: 61 }, { cx: 38, cy: 47 }, { cx: 45, cy: 54 },
    { cx: 45, cy: 47 }, { cx: 52, cy: 54 }, { cx: 52, cy: 47 }, { cx: 59, cy: 47 },
    { cx: 59, cy: 40 }
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
            slow: "4s",
            normal: "2s", 
            fast: "1s"
          }[speed] : undefined
        }}
      >
        {stars.map((star, index) => (
          <circle
            key={index}
            cx={star.cx}
            cy={star.cy}
            r="3"
            fill={getStarColor()}
            className={animationType === "twinkle" ? "animate-pulse" : ""}
            style={{
              animationDelay: animationType === "twinkle" ? `${index * 100}ms` : undefined,
              animationDuration: animationType === "twinkle" ? {
                slow: "3s",
                normal: "2s",
                fast: "1s"
              }[speed] : undefined
            }}
          />
        ))}
      </svg>
    </div>
  );
};