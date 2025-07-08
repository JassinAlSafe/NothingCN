"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface NothingProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0-100
  size?: "sm" | "md" | "lg";
  variant?: "minimal" | "dotted" | "segmented";
  showValue?: boolean;
}

const NothingProgress = React.forwardRef<HTMLDivElement, NothingProgressProps>(
  ({ 
    className, 
    value = 0, 
    size = "md", 
    variant = "minimal",
    showValue = false,
    ...props 
  }, ref) => {
    const clampedValue = Math.min(100, Math.max(0, value));
    
    const sizeClasses = {
      sm: "h-0.5",
      md: "h-1", 
      lg: "h-1.5"
    };

    if (variant === "minimal") {
      return (
        <div 
          ref={ref}
          className={cn("relative w-full", className)}
          {...props}
        >
          {/* Container - ultra minimal */}
          <div className={cn(
            "relative bg-border/20 overflow-hidden",
            sizeClasses[size]
          )}>
            {/* Progress fill */}
            <div 
              className="h-full bg-foreground transition-all duration-500 ease-out"
              style={{ width: `${clampedValue}%` }}
            />
          </div>
          
          {/* Value display */}
          {showValue && (
            <span className="absolute right-0 top-0 -translate-y-full mb-0.5 text-xs font-ndot text-muted-foreground/60">
              {clampedValue}%
            </span>
          )}
        </div>
      );
    }

    if (variant === "dotted") {
      const dots = 20;
      const filledDots = Math.round((clampedValue / 100) * dots);
      
      return (
        <div 
          ref={ref}
          className={cn("flex items-center gap-0.5", className)}
          {...props}
        >
          {Array.from({ length: dots }, (_, index) => (
            <div
              key={index}
              className={cn(
                "w-0.5 h-0.5 transition-all duration-300",
                index < filledDots ? "bg-foreground" : "bg-border/30"
              )}
              style={{
                transitionDelay: `${index * 20}ms`
              }}
            />
          ))}
          
          {showValue && (
            <span className="ml-2 text-xs font-ndot text-muted-foreground/60">
              {clampedValue}%
            </span>
          )}
        </div>
      );
    }

    if (variant === "segmented") {
      const segments = 10;
      const filledSegments = Math.round((clampedValue / 100) * segments);
      
      return (
        <div 
          ref={ref}
          className={cn("flex items-center gap-0.5", className)}
          {...props}
        >
          {Array.from({ length: segments }, (_, index) => (
            <div
              key={index}
              className={cn(
                "flex-1 transition-all duration-300",
                sizeClasses[size],
                index < filledSegments ? "bg-foreground" : "bg-border/30"
              )}
              style={{
                transitionDelay: `${index * 50}ms`
              }}
            />
          ))}
          
          {showValue && (
            <span className="ml-2 text-xs font-ndot text-muted-foreground/60">
              {clampedValue}%
            </span>
          )}
        </div>
      );
    }

    return null;
  }
);

NothingProgress.displayName = "NothingProgress";

export { NothingProgress };