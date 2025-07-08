"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "pixel" | "terminal" | "glow";
  pixelSize?: "sm" | "md" | "lg";
}

// Pixel corners using CSS for crisp edges
const PixelCorners: React.FC<{ size?: "sm" | "md" | "lg" }> = ({ size = "md" }) => {
  const pixelSize = size === "sm" ? "w-1 h-1" : size === "lg" ? "w-3 h-3" : "w-2 h-2";
  
  return (
    <>
      {/* Top corners */}
      <div className={`absolute top-0 left-0 ${pixelSize} bg-border`} />
      <div className={`absolute top-0 right-0 ${pixelSize} bg-border`} />
      {/* Bottom corners */}
      <div className={`absolute bottom-0 left-0 ${pixelSize} bg-border`} />
      <div className={`absolute bottom-0 right-0 ${pixelSize} bg-border`} />
    </>
  );
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = "default", pixelSize = "md", ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasContent, setHasContent] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setHasContent(e.target.value.length > 0);
      props.onChange?.(e);
    };

    const baseClasses = "w-full min-h-[80px] resize-none transition-all duration-200";
    
    const variantClasses = {
      default: cn(
        "rounded-xl border-2 border-border/40 bg-background/80 backdrop-blur-sm px-4 py-3 text-sm font-medium leading-relaxed",
        "placeholder:text-muted-foreground/50 placeholder:font-normal",
        "focus:outline-none focus:border-accent/80 focus:bg-background focus:shadow-[0_0_0_3px_theme(colors.accent/0.1)]",
        "hover:border-border/80 hover:bg-background/90 hover:backdrop-blur-md",
        "disabled:cursor-not-allowed disabled:opacity-40 disabled:bg-muted/30",
        "transition-all duration-300 ease-out",
        // Unique Nothing OS touches
        hasContent ? "border-accent/60 bg-accent/[0.02] text-foreground" : "",
        isFocused ? "shadow-[0_0_0_3px_theme(colors.accent/0.1)] scale-[1.01]" : "",
        // Subtle gradient borders
        "relative before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-r before:from-border/20 before:to-border/60 before:-z-10",
        "after:absolute after:inset-[1px] after:rounded-[10px] after:bg-background/80 after:-z-10"
      ),
      pixel: cn(
        "relative bg-background text-foreground font-mono text-sm",
        "border-2 border-border rounded-none",
        "px-4 py-3 leading-relaxed tracking-wide",
        "placeholder:text-muted-foreground/60 placeholder:font-mono",
        "focus:outline-none focus:border-accent focus:shadow-[4px_4px_0px_0px_theme(colors.accent)]",
        "hover:border-accent/50 hover:shadow-[2px_2px_0px_0px_theme(colors.accent/0.3)]",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted",
        // Pixel-perfect corners
        "before:absolute before:top-0 before:left-0 before:w-2 before:h-2 before:bg-background before:z-10",
        "after:absolute after:top-0 after:right-0 after:w-2 after:h-2 after:bg-background after:z-10",
        // 8-bit styling
        hasContent ? "text-accent" : "",
        isFocused ? "bg-accent/5" : ""
      ),
      terminal: cn(
        "bg-black text-green-400 font-mono text-sm border-2 border-green-500/30 rounded-none",
        "px-4 py-3 leading-relaxed tracking-wider",
        "placeholder:text-green-500/40",
        "focus:outline-none focus:border-green-400 focus:bg-black focus:shadow-[0_0_10px_rgba(34,197,94,0.3)]",
        "hover:border-green-400/60",
        "disabled:cursor-not-allowed disabled:opacity-50",
        // Terminal cursor effect
        isFocused ? "shadow-[inset_0_0_20px_rgba(34,197,94,0.1)]" : ""
      ),
      glow: cn(
        "bg-black/90 text-accent font-medium text-sm border-2 border-accent/30 rounded-2xl",
        "px-4 py-3 leading-relaxed tracking-normal backdrop-blur-md",
        "placeholder:text-accent/40",
        "focus:outline-none focus:border-accent focus:bg-black/95 focus:shadow-[0_0_20px_theme(colors.accent/0.4),inset_0_0_20px_theme(colors.accent/0.1)]",
        "hover:border-accent/60 hover:bg-black/95 hover:shadow-[0_0_10px_theme(colors.accent/0.2)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        // Unique glow effects
        hasContent ? "text-white shadow-[0_0_15px_theme(colors.accent/0.3)]" : "",
        isFocused ? "scale-[1.01] shadow-[0_0_25px_theme(colors.accent/0.5),inset_0_0_25px_theme(colors.accent/0.1)]" : "",
        // Animated border gradient
        "relative before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-accent/20 before:via-accent/60 before:to-accent/20 before:-z-10",
        "after:absolute after:inset-[1px] after:rounded-[15px] after:bg-black/90 after:-z-10"
      )
    };

    return (
      <div className="relative inline-block w-full">
        <textarea
          ref={ref}
          className={cn(
            baseClasses,
            variantClasses[variant],
            className
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
          {...props}
        />
        
        {/* Pixel corners for pixel variant */}
        {variant === "pixel" && (
          <>
            <PixelCorners size={pixelSize} />
            {isFocused && (
              <div className="absolute -inset-1 border-2 border-accent/30 rounded-none pointer-events-none" />
            )}
          </>
        )}
        
        {/* Terminal scan lines effect */}
        {variant === "terminal" && (
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{ 
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 197, 94, 0.1) 2px, rgba(34, 197, 94, 0.1) 4px)',
              animation: isFocused ? 'pulse 2s ease-in-out infinite' : 'none'
            }}
          />
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };