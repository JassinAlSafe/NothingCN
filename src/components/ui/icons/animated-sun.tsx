"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AnimatedSunProps {
  className?: string;
  width?: number;
  height?: number;
  animate?: boolean;
  animationType?: "float" | "pulse" | "bounce" | "spin" | "ping" | "none";
  speed?: "slow" | "normal" | "fast";
  variant?: "normal" | "compromised";
  hover?: boolean;
}

export const AnimatedSun: React.FC<AnimatedSunProps> = ({
  className = "",
  width = 120,
  height = 80,
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
        return `animate-bounce`;
      case "pulse":
        return `animate-pulse`;
      case "bounce":
        return `animate-bounce`;
      case "spin":
        return `animate-spin`;
      case "ping":
        return `animate-ping`;
      default:
        return "";
    }
  };

  const getVariantStyles = () => {
    return variant === "compromised" 
      ? "opacity-75 saturate-50" 
      : "opacity-100 saturate-100";
  };

  const getHoverStyles = () => {
    return hover 
      ? "hover:scale-110 hover:rotate-12 transition-transform duration-300" 
      : "";
  };

  return (
    <div 
      className={cn(
        "relative inline-block",
        getAnimationClass(),
        getVariantStyles(),
        getHoverStyles(),
        className
      )}
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        animationDuration: animate ? {
          slow: "6s",
          normal: "3s", 
          fast: "1.5s"
        }[speed] : undefined
      }}
    >
      <Image
        src="/icons/sun.png"
        alt="Sun weather icon"
        width={width}
        height={height}
        className="object-contain w-full h-full"
        priority
      />
    </div>
  );
};