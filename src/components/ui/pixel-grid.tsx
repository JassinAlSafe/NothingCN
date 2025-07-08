"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface PixelGridProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  opacity?: "low" | "medium" | "high";
  animated?: boolean;
  color?: "slate" | "green" | "blue" | "purple";
}

const PixelGrid = React.forwardRef<HTMLDivElement, PixelGridProps>(
  ({ 
    className, 
    size = "md", 
    opacity = "low", 
    animated = false, 
    color = "slate",
    children,
    ...props 
  }, ref) => {
    const gridSizes = {
      sm: "8px",
      md: "12px", 
      lg: "16px"
    };
    
    const opacityValues = {
      low: "0.05",
      medium: "0.1",
      high: "0.2"
    };
    
    const colorValues = {
      slate: "rgb(71, 85, 105)",
      green: "rgb(34, 197, 94)",
      blue: "rgb(59, 130, 246)",
      purple: "rgb(147, 51, 234)"
    };

    const gridSize = gridSizes[size];
    const gridOpacity = opacityValues[opacity];
    const gridColor = colorValues[color];

    return (
      <div 
        ref={ref}
        className={cn("relative", className)}
        {...props}
      >
        {/* Main content */}
        {children}
        
        {/* Grid overlay */}
        <div 
          className={cn(
            "absolute inset-0 pointer-events-none",
            animated && "animate-pulse"
          )}
          style={{
            backgroundImage: `
              linear-gradient(${gridColor} 1px, transparent 1px),
              linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
            `,
            backgroundSize: `${gridSize} ${gridSize}`,
            opacity: gridOpacity,
            animationDuration: animated ? "3s" : undefined
          }}
        />
        
        {/* Corner pixels for retro feel */}
        <div className="absolute top-0 left-0 w-1 h-1 bg-current opacity-20" />
        <div className="absolute top-0 right-0 w-1 h-1 bg-current opacity-20" />
        <div className="absolute bottom-0 left-0 w-1 h-1 bg-current opacity-20" />
        <div className="absolute bottom-0 right-0 w-1 h-1 bg-current opacity-20" />
      </div>
    );
  }
);

PixelGrid.displayName = "PixelGrid";

export { PixelGrid };