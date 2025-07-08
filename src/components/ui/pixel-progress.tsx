"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface PixelProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0-100
  size?: "sm" | "md" | "lg";
  color?: "green" | "blue" | "red" | "purple" | "orange" | "yellow";
  animated?: boolean;
  showPercentage?: boolean;
}

const PixelProgress = React.forwardRef<HTMLDivElement, PixelProgressProps>(
  ({ 
    className, 
    value = 0, 
    size = "md", 
    color = "green", 
    animated = false,
    showPercentage = false,
    ...props 
  }, ref) => {
    const clampedValue = Math.min(100, Math.max(0, value));
    
    const sizeClasses = {
      sm: "h-1.5",
      md: "h-2", 
      lg: "h-2.5"
    };
    
    const colorClasses = {
      green: "bg-foreground",
      blue: "bg-foreground", 
      red: "bg-foreground",
      purple: "bg-foreground",
      orange: "bg-foreground",
      yellow: "bg-foreground"
    };

    return (
      <div 
        ref={ref}
        className={cn("relative w-full", className)}
        {...props}
      >
        {/* Container - Nothing OS minimal style */}
        <div className={cn(
          "relative bg-muted/30 border border-border/50 rounded-none overflow-hidden",
          sizeClasses[size]
        )}>
          {/* Subtle dot matrix pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, 
                transparent 0px, 
                transparent 1px, 
                currentColor 1px, 
                currentColor 1.5px
              )`
            }}
          />
          
          {/* Progress fill - clean and minimal */}
          <div 
            className={cn(
              "h-full transition-all duration-700 ease-out relative",
              colorClasses[color],
              animated && "animate-pulse"
            )}
            style={{ width: `${clampedValue}%` }}
          >
            {/* Subtle highlight - Nothing OS style */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          </div>
        </div>
        
        {/* Percentage display - minimal typography */}
        {showPercentage && (
          <div className="absolute right-0 top-0 -translate-y-full mb-1">
            <span className="text-xs font-mono text-muted-foreground/60">
              {clampedValue}%
            </span>
          </div>
        )}
      </div>
    );
  }
);

PixelProgress.displayName = "PixelProgress";

export { PixelProgress };