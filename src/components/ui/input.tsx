"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "pixel" | "terminal" | "glow" | "nothing";
  pixelSize?: "sm" | "md" | "lg";
  error?: string;
  validation?: (value: string) => string | undefined;
}

// Pixel corners component for consistent styling
const PixelCorners: React.FC<{ size?: "sm" | "md" | "lg" }> = ({ size = "md" }) => {
  const pixelSize = size === "sm" ? "w-1 h-1" : size === "lg" ? "w-3 h-3" : "w-2 h-2";
  
  return (
    <>
      <div className={`absolute top-0 left-0 ${pixelSize} bg-border`} />
      <div className={`absolute top-0 right-0 ${pixelSize} bg-border`} />
      <div className={`absolute bottom-0 left-0 ${pixelSize} bg-border`} />
      <div className={`absolute bottom-0 right-0 ${pixelSize} bg-border`} />
    </>
  );
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", pixelSize = "md", error, validation, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasContent, setHasContent] = React.useState(false);
    const [validationError, setValidationError] = React.useState<string | undefined>();

    const currentError = error || validationError;
    const hasError = Boolean(currentError);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setHasContent(value.length > 0);
      
      // Run validation if provided
      if (validation && value) {
        const validationResult = validation(value);
        setValidationError(validationResult);
      } else {
        setValidationError(undefined);
      }
      
      props.onChange?.(e);
    };

    const baseClasses = "w-full transition-all duration-200";
    
    const variantClasses = {
      default: cn(
        "flex h-12 min-h-[48px] rounded-xl border-2 border-border/40 bg-background/80 backdrop-blur-sm px-4 py-3 text-sm font-medium",
        "ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "placeholder:text-muted-foreground/50 placeholder:font-normal",
        "focus:outline-none focus:border-accent/80 focus:bg-background focus:shadow-[0_0_0_3px_theme(colors.accent/0.1)]",
        "hover:border-border/80 hover:bg-background/90 hover:backdrop-blur-md",
        "disabled:cursor-not-allowed disabled:opacity-40 disabled:bg-muted/30",
        "transition-all duration-300 ease-out",
        // Unique Nothing OS touches
        hasContent ? "border-accent/60 bg-accent/[0.02] text-foreground" : "",
        isFocused ? "motion-safe:shadow-[0_0_0_3px_theme(colors.accent/0.1)] motion-safe:scale-[1.02]" : "",
        // Error states
        hasError ? "border-destructive/80 bg-destructive/[0.02] focus:border-destructive focus:shadow-[0_0_0_3px_theme(colors.destructive/0.1)]" : "",
        // Subtle gradient borders
        "relative before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-r before:from-border/20 before:to-border/60 before:-z-10",
        "after:absolute after:inset-[1px] after:rounded-[10px] after:bg-background/80 after:-z-10"
      ),
      pixel: cn(
        "relative h-12 min-h-[48px] bg-background text-foreground font-mono text-sm",
        "border-2 border-border rounded-none",
        "px-4 py-3 leading-none tracking-wide",
        "placeholder:text-muted-foreground/60 placeholder:font-mono",
        "focus:outline-none focus:border-accent focus:shadow-[4px_4px_0px_0px_theme(colors.accent)]",
        "hover:border-accent/50 hover:shadow-[2px_2px_0px_0px_theme(colors.accent/0.3)]",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted",
        "file:bg-transparent file:font-mono file:text-sm file:border-0 file:text-foreground",
        // 8-bit styling
        hasContent ? "text-accent" : "",
        isFocused ? "bg-accent/5" : ""
      ),
      terminal: cn(
        "h-12 min-h-[48px] bg-black text-green-400 font-mono text-sm border-2 border-green-500/30 rounded-none",
        "px-4 py-3 leading-none tracking-wider",
        "placeholder:text-green-500/40",
        "focus:outline-none focus:border-green-400 focus:bg-black focus:shadow-[0_0_10px_rgba(34,197,94,0.3)]",
        "hover:border-green-400/60",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "file:bg-transparent file:font-mono file:text-sm file:border-0 file:text-green-400",
        // Terminal cursor effect
        isFocused ? "shadow-[inset_0_0_20px_rgba(34,197,94,0.1)]" : ""
      ),
      glow: cn(
        "h-12 min-h-[48px] bg-black/90 text-accent font-medium text-sm border-2 border-accent/30 rounded-2xl",
        "px-4 py-3 leading-none tracking-normal backdrop-blur-md",
        "placeholder:text-accent/40",
        "focus:outline-none focus:border-accent focus:bg-black/95 focus:shadow-[0_0_20px_theme(colors.accent/0.4),inset_0_0_20px_theme(colors.accent/0.1)]",
        "hover:border-accent/60 hover:bg-black/95 hover:shadow-[0_0_10px_theme(colors.accent/0.2)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "file:bg-transparent file:font-medium file:text-sm file:border-0 file:text-accent",
        // Unique glow effects
        hasContent ? "text-white shadow-[0_0_15px_theme(colors.accent/0.3)]" : "",
        isFocused ? "motion-safe:scale-[1.02] shadow-[0_0_25px_theme(colors.accent/0.5),inset_0_0_25px_theme(colors.accent/0.1)]" : "",
        // Animated border gradient
        "relative before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-accent/20 before:via-accent/60 before:to-accent/20 before:-z-10",
        "after:absolute after:inset-[1px] after:rounded-[15px] after:bg-black/90 after:-z-10"
      ),
      nothing: cn(
        "h-12 min-h-[48px] bg-background/95 backdrop-blur-sm text-foreground font-ndot text-sm border-2 border-border/40 rounded-lg",
        "px-4 py-3 leading-none tracking-wide",
        "placeholder:text-muted-foreground/60 placeholder:font-ndot",
        "focus:outline-none focus:border-accent/80 focus:bg-background focus:shadow-[0_0_0_3px_theme(colors.accent/0.1)]",
        "hover:border-accent/50 hover:bg-background/98",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/30",
        "file:bg-transparent file:font-ndot file:text-sm file:border-0 file:text-foreground",
        "transition-all duration-300 ease-out",
        // Nothing-specific styling
        hasContent ? "border-accent/70 bg-accent/[0.03] text-foreground shadow-[0_0_0_1px_theme(colors.accent/0.1)]" : "",
        isFocused ? "motion-safe:scale-[1.01] border-accent shadow-[0_0_0_3px_theme(colors.accent/0.15)]" : "",
        // Unique Nothing design elements
        "relative before:absolute before:inset-0 before:rounded-lg before:p-[1px] before:bg-gradient-to-r before:from-border/30 before:via-border/10 before:to-border/30 before:-z-10",
        "after:absolute after:inset-[1px] after:rounded-[7px] after:bg-background/95 after:-z-10"
      )
    };

    return (
      <div className="relative inline-block w-full">
        <input
          type={type}
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
        
        {/* Nothing-style glyph interface elements */}
        {variant === "nothing" && (
          <>
            {/* Animated glyph dots */}
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 pointer-events-none">
              <div className={cn(
                "w-1.5 h-1.5 rounded-full transition-all duration-300",
                isFocused ? "bg-accent motion-safe:animate-pulse" : "bg-border/40",
                hasContent ? "bg-accent/70" : ""
              )} />
              <div className={cn(
                "w-1.5 h-1.5 rounded-full transition-all duration-300",
                isFocused ? "bg-accent motion-safe:animate-pulse [animation-delay:0.1s]" : "bg-border/40",
                hasContent ? "bg-accent/70 [animation-delay:0.1s]" : ""
              )} />
              <div className={cn(
                "w-1.5 h-1.5 rounded-full transition-all duration-300",
                isFocused ? "bg-accent motion-safe:animate-pulse [animation-delay:0.2s]" : "bg-border/40",
                hasContent ? "bg-accent/70 [animation-delay:0.2s]" : ""
              )} />
            </div>
            
            {/* Focus ring effect */}
            {isFocused && (
              <div className="absolute inset-0 rounded-lg border border-accent/30 pointer-events-none motion-safe:animate-pulse" />
            )}
            
            {/* Subtle background pattern */}
            <div className="absolute inset-0 rounded-lg pointer-events-none opacity-5">
              <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-xl" />
              <div className="absolute bottom-2 left-2 w-12 h-12 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-lg" />
            </div>
          </>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };