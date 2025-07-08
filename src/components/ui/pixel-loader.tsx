"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface PixelLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  variant?: "dots" | "bars" | "blocks" | "spinner";
  color?: "green" | "blue" | "red" | "purple" | "orange" | "yellow" | "white";
}

const PixelLoader = React.forwardRef<HTMLDivElement, PixelLoaderProps>(
  ({ className, size = "md", variant = "dots", color = "green", ...props }, ref) => {
    const sizeClasses = {
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8"
    };
    
    const pixelSize = {
      sm: "w-1 h-1",
      md: "w-1.5 h-1.5", 
      lg: "w-2 h-2"
    };
    
    const colorClasses = {
      green: "bg-green-500",
      blue: "bg-blue-500",
      red: "bg-red-500", 
      purple: "bg-purple-500",
      orange: "bg-orange-500",
      yellow: "bg-yellow-500",
      white: "bg-white"
    };

    if (variant === "dots") {
      return (
        <div 
          ref={ref}
          className={cn("flex items-center justify-center gap-1", className)}
          {...props}
        >
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={cn(
                "rounded-none animate-pulse bg-foreground",
                pixelSize[size]
              )}
              style={{
                animationDelay: `${index * 0.3}s`,
                animationDuration: '1.2s'
              }}
            />
          ))}
        </div>
      );
    }

    if (variant === "bars") {
      return (
        <div 
          ref={ref}
          className={cn("flex items-end justify-center gap-0.5", className)}
          {...props}
        >
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="w-0.5 rounded-none animate-pulse bg-foreground"
              style={{
                height: `${(index % 3 + 1) * (size === "sm" ? 3 : size === "md" ? 4 : 5)}px`,
                animationDelay: `${index * 0.15}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      );
    }

    if (variant === "blocks") {
      return (
        <div 
          ref={ref}
          className={cn("grid grid-cols-3 gap-0.5", sizeClasses[size], className)}
          {...props}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div
              key={index}
              className={cn(
                "rounded-none animate-pulse aspect-square",
                colorClasses[color]
              )}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: '1.2s'
              }}
            />
          ))}
        </div>
      );
    }

    if (variant === "spinner") {
      return (
        <div 
          ref={ref}
          className={cn("relative", sizeClasses[size], className)}
          {...props}
        >
          <div className={cn(
            "absolute inset-0 border-2 border-transparent rounded-none animate-spin",
            `border-t-${color}-500 border-r-${color}-500`
          )} 
          style={{ 
            animationDuration: '1s',
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 50% 50%, 50% 100%, 0 100%)'
          }} />
          
          {/* Pixel corners */}
          <div className={cn("absolute top-0 left-0 w-1 h-1", colorClasses[color])} />
          <div className={cn("absolute top-0 right-0 w-1 h-1", colorClasses[color])} />
          <div className={cn("absolute bottom-0 left-0 w-1 h-1", colorClasses[color])} />
          <div className={cn("absolute bottom-0 right-0 w-1 h-1", colorClasses[color])} />
        </div>
      );
    }

    return null;
  }
);

PixelLoader.displayName = "PixelLoader";

export { PixelLoader };