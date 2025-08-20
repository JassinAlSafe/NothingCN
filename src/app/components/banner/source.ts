export const bannerSourceCode = `"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X, AlertCircle, Info, CheckCircle, AlertTriangle, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const bannerVariants = cva(
  "relative w-full flex items-center justify-center px-4 py-3 motion-safe:transition-all motion-safe:duration-300 overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-accent text-accent-foreground",
        info: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 border-y border-blue-500/20",
        success: "bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400 border-y border-green-500/20",
        warning: "bg-yellow-500/10 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400 border-y border-yellow-500/20",
        destructive: "bg-destructive/10 text-destructive dark:bg-destructive/20 border-y border-destructive/20",
        nothing: "bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 text-accent border-y-2 border-accent/20 backdrop-blur-sm",
        pixel: "bg-background text-foreground border-y-2 border-foreground shadow-[inset_0_2px_0_0_theme(colors.foreground),inset_0_-2px_0_0_theme(colors.foreground)]",
      },
      position: {
        top: "fixed top-0 left-0 right-0 z-[70]",
        bottom: "fixed bottom-0 left-0 right-0 z-[70]",
        static: "relative",
      },
      size: {
        sm: "py-2 text-sm",
        default: "py-3 text-sm",
        lg: "py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      position: "top",
      size: "default",
    },
  }
);

const iconMap = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  destructive: AlertCircle,
  default: Sparkles,
  nothing: Zap,
  pixel: Zap,
};

export interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  onDismiss?: () => void;
  dismissible?: boolean;
  icon?: React.ReactNode;
  showIcon?: boolean;
  children: React.ReactNode;
}

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  ({ 
    className, 
    variant = "default", 
    position = "top",
    size = "default",
    onDismiss,
    dismissible = true,
    icon,
    showIcon = true,
    children,
    ...props 
  }, ref) => {
    const [isVisible, setIsVisible] = React.useState(true);
    const [isAnimating, setIsAnimating] = React.useState(false);

    const handleDismiss = React.useCallback(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsVisible(false);
        onDismiss?.();
        // Remove banner height CSS variable when dismissed
        if (position === "top") {
          document.documentElement.style.removeProperty("--banner-height");
        }
      }, 300);
    }, [onDismiss, position]);

    // Set CSS variable for banner height when position is top
    React.useEffect(() => {
      if (position === "top" && isVisible) {
        const height = size === "sm" ? "36px" : size === "lg" ? "56px" : "48px";
        document.documentElement.style.setProperty("--banner-height", height);
      } else if (position === "top") {
        document.documentElement.style.removeProperty("--banner-height");
      }
      
      return () => {
        if (position === "top") {
          document.documentElement.style.removeProperty("--banner-height");
        }
      };
    }, [position, size, isVisible]);

    if (!isVisible) return null;

    const Icon = iconMap[variant || "default"];
    const displayIcon = icon || (showIcon && Icon && <Icon className="h-4 w-4" />);

    return (
      <>
        {/* No spacer needed - header will handle positioning */}
        
        <div
          ref={ref}
          role="banner"
          aria-live="polite"
          className={cn(
            bannerVariants({ variant, position, size }),
            isAnimating && position === "top" && "motion-safe:-translate-y-full opacity-0",
            isAnimating && position === "bottom" && "motion-safe:translate-y-full opacity-0",
            isAnimating && position === "static" && "motion-safe:scale-y-0 opacity-0",
            className
          )}
          {...props}
        >
          {/* Nothing OS Background Pattern */}
          {variant === "nothing" && (
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at center, currentColor 0.5px, transparent 0.5px)",
                  backgroundSize: "16px 16px",
                }}
              />
            </div>
          )}

          {/* Pixel variant decorative corners */}
          {variant === "pixel" && (
            <>
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-foreground" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-foreground" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-foreground" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-foreground" />
            </>
          )}

          {/* Geometric indicators for nothing variant */}
          {variant === "nothing" && (
            <div className="absolute left-4 flex items-center space-x-1.5">
              <div className="w-1.5 h-1.5 bg-accent rounded-full opacity-60 animate-pulse" />
              <div className="w-1 h-1 bg-accent/70 rounded-full opacity-50" />
              <div className="w-0.5 h-0.5 bg-accent/50 rounded-full opacity-40" />
            </div>
          )}

          <div className="container mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              {/* Icon */}
              {displayIcon && (
                <div className="flex-shrink-0">
                  {displayIcon}
                </div>
              )}

              {/* Content */}
              <div className={cn(
                "flex-1",
                variant === "nothing" && "font-ndot font-medium tracking-wider",
                variant === "pixel" && "font-mono font-bold uppercase tracking-wider"
              )}>
                {children}
              </div>
            </div>

            {/* Dismiss button */}
            {dismissible && (
              <button
                onClick={handleDismiss}
                className={cn(
                  "flex-shrink-0 p-1 rounded-full hover:bg-accent/20 motion-safe:transition-colors motion-safe:duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background",
                  variant === "pixel" && "rounded-none hover:bg-foreground hover:text-background"
                )}
                aria-label="Dismiss banner"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Geometric indicators for nothing variant (right side) */}
          {variant === "nothing" && (
            <div className="absolute right-4 flex items-center space-x-1.5">
              <div className="w-0.5 h-0.5 bg-accent/50 rounded-full opacity-40" />
              <div className="w-1 h-1 bg-accent/70 rounded-full opacity-50" />
              <div className="w-1.5 h-1.5 bg-accent rounded-full opacity-60 animate-pulse" />
            </div>
          )}
        </div>
      </>
    );
  }
);

Banner.displayName = "Banner";

// Hook to manage banner state with localStorage
export function useBanner(key: string, defaultVisible = true) {
  const [isVisible, setIsVisible] = React.useState(defaultVisible);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    
    const stored = localStorage.getItem(\`banner-dismissed-\${key}\`);
    if (stored === "true") {
      setIsVisible(false);
    }
  }, [key]);

  const dismiss = React.useCallback(() => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      localStorage.setItem(\`banner-dismissed-\${key}\`, "true");
    }
  }, [key]);

  const reset = React.useCallback(() => {
    setIsVisible(true);
    if (typeof window !== "undefined") {
      localStorage.removeItem(\`banner-dismissed-\${key}\`);
    }
  }, [key]);

  return { isVisible, dismiss, reset };
}

export { Banner, bannerVariants };`;