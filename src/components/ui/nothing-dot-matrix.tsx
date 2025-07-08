"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface NothingDotMatrixProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  opacity?: "subtle" | "medium" | "bold";
  animated?: boolean;
  pattern?: "grid" | "diagonal" | "random";
}

const NothingDotMatrix = React.forwardRef<HTMLDivElement, NothingDotMatrixProps>(
  ({ 
    className, 
    size = "md", 
    opacity = "subtle", 
    animated = false, 
    pattern = "grid",
    children,
    ...props 
  }, ref) => {
    const dotSizes = {
      sm: "0.5px",
      md: "1px",
      lg: "1.5px"
    };
    
    const spacings = {
      sm: "6px",
      md: "8px", 
      lg: "12px"
    };
    
    const opacityValues = {
      subtle: "0.03",
      medium: "0.06",
      bold: "0.1"
    };

    const dotSize = dotSizes[size];
    const spacing = spacings[size];
    const dotOpacity = opacityValues[opacity];

    const getPatternStyle = () => {
      switch (pattern) {
        case "grid":
          return {
            backgroundImage: `
              radial-gradient(circle at center, currentColor ${dotSize}, transparent ${dotSize})
            `,
            backgroundSize: `${spacing} ${spacing}`,
            backgroundPosition: '0 0'
          };
        case "diagonal":
          return {
            backgroundImage: `
              radial-gradient(circle at center, currentColor ${dotSize}, transparent ${dotSize})
            `,
            backgroundSize: `${spacing} ${spacing}`,
            backgroundPosition: '0 0, 4px 4px'
          };
        case "random":
          return {
            backgroundImage: `
              radial-gradient(circle at 20% 30%, currentColor ${dotSize}, transparent ${dotSize}),
              radial-gradient(circle at 80% 70%, currentColor ${dotSize}, transparent ${dotSize}),
              radial-gradient(circle at 40% 80%, currentColor ${dotSize}, transparent ${dotSize})
            `,
            backgroundSize: `${spacing} ${spacing}`,
            backgroundPosition: '0 0, 2px 2px, 4px 4px'
          };
        default:
          return {};
      }
    };

    return (
      <div 
        ref={ref}
        className={cn("relative", className)}
        {...props}
      >
        {/* Main content */}
        {children}
        
        {/* Dot matrix overlay */}
        <div 
          className={cn(
            "absolute inset-0 pointer-events-none",
            animated && "animate-pulse"
          )}
          style={{
            ...getPatternStyle(),
            opacity: dotOpacity,
            animationDuration: animated ? "4s" : undefined
          }}
        />
        
        {/* Subtle corner indicators - Nothing OS signature */}
        <div className="absolute top-0 left-0 w-0.5 h-0.5 bg-current opacity-20" />
        <div className="absolute top-0 right-0 w-0.5 h-0.5 bg-current opacity-20" />
        <div className="absolute bottom-0 left-0 w-0.5 h-0.5 bg-current opacity-20" />
        <div className="absolute bottom-0 right-0 w-0.5 h-0.5 bg-current opacity-20" />
      </div>
    );
  }
);

NothingDotMatrix.displayName = "NothingDotMatrix";

export { NothingDotMatrix };