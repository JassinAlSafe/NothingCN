"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  AlertTriangle,
  CheckCircle,
  Info,
  X,
  XCircle,
  Terminal,
  Zap,
  Bell,
} from "lucide-react";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative rounded-xl border-2 px-6 py-4 transition-all duration-300 animate-fade-in-up",
  {
    variants: {
      variant: {
        default:
          "bg-background border-border text-foreground shadow-sm hover:shadow-md",
        destructive:
          "bg-red-50 border-red-200 text-red-900 dark:bg-red-950/30 dark:border-red-800 dark:text-red-200 shadow-sm shadow-red-500/20",
        warning:
          "bg-orange-50 border-orange-200 text-orange-900 dark:bg-orange-950/30 dark:border-orange-800 dark:text-orange-200 shadow-sm shadow-orange-500/20",
        success:
          "bg-green-50 border-green-200 text-green-900 dark:bg-green-950/30 dark:border-green-800 dark:text-green-200 shadow-sm shadow-green-500/20",
        info: "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-200 shadow-sm shadow-blue-500/20",
        nothing:
          "bg-background/95 backdrop-blur-sm border-accent/30 text-foreground shadow-lg shadow-accent/10 relative overflow-hidden",
        terminal:
          "bg-background border-accent/40 text-foreground font-commit-mono text-sm shadow-lg relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent/5 before:to-transparent before:pointer-events-none",
      },
      size: {
        sm: "text-sm py-3 px-4",
        default: "text-sm py-4 px-6",
        lg: "text-base py-6 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const alertIconVariants = cva("flex-shrink-0", {
  variants: {
    variant: {
      default: "text-foreground",
      destructive: "text-red-600 dark:text-red-400",
      warning: "text-orange-600 dark:text-orange-400",
      success: "text-green-600 dark:text-green-400",
      info: "text-blue-600 dark:text-blue-400",
      nothing: "text-accent",
      terminal: "text-accent",
    },
    size: {
      sm: "h-4 w-4",
      default: "h-5 w-5",
      lg: "h-6 w-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
  showIcon?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
  dotMatrix?: boolean;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant,
      size,
      icon,
      showIcon = true,
      dismissible = false,
      onDismiss,
      dotMatrix = false,
      children,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = React.useState(true);

    const handleDismiss = () => {
      setIsVisible(false);
      onDismiss?.();
    };

    const getDefaultIcon = () => {
      switch (variant) {
        case "destructive":
          return (
            <XCircle className={cn(alertIconVariants({ variant, size }))} />
          );
        case "warning":
          return (
            <AlertTriangle
              className={cn(alertIconVariants({ variant, size }))}
            />
          );
        case "success":
          return (
            <CheckCircle className={cn(alertIconVariants({ variant, size }))} />
          );
        case "info":
          return <Info className={cn(alertIconVariants({ variant, size }))} />;
        case "nothing":
          return <Zap className={cn(alertIconVariants({ variant, size }))} />;
        case "terminal":
          return (
            <Terminal className={cn(alertIconVariants({ variant, size }))} />
          );
        default:
          return <Bell className={cn(alertIconVariants({ variant, size }))} />;
      }
    };

    if (!isVisible) return null;

    return (
      <div
        ref={ref}
        className={cn(alertVariants({ variant, size }), className)}
        {...props}
      >
        {/* Nothing OS corner dots */}
        {variant === "nothing" && (
          <>
            <div className="absolute top-2 left-2 w-1 h-1 bg-accent/30 rounded-full" />
            <div className="absolute top-2 right-2 w-1 h-1 bg-accent/30 rounded-full" />
            <div className="absolute bottom-2 left-2 w-1 h-1 bg-accent/30 rounded-full" />
            <div className="absolute bottom-2 right-2 w-1 h-1 bg-accent/30 rounded-full" />
          </>
        )}

        {/* Dot matrix background for Nothing variant */}
        {variant === "nothing" && dotMatrix && (
          <div
            className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at center, currentColor 0.5px, transparent 0.5px)`,
              backgroundSize: "8px 8px",
            }}
          />
        )}

        <div className="flex items-start space-x-3 relative z-10">
          {/* Icon */}
          {showIcon && <div className="mt-0.5">{icon || getDefaultIcon()}</div>}

          {/* Content */}
          <div className="flex-1 min-w-0">{children}</div>

          {/* Dismiss button */}
          {dismissible && (
            <button
              onClick={handleDismiss}
              className={cn(
                "mt-0.5 p-1 rounded-md transition-colors duration-200 hover:bg-current/10 flex-shrink-0",
                variant === "nothing"
                  ? "text-accent hover:bg-accent/10"
                  : "text-current"
              )}
              aria-label="Dismiss alert"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    );
  }
);
Alert.displayName = "Alert";

export interface AlertTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: VariantProps<typeof alertVariants>["variant"];
}

const AlertTitle = React.forwardRef<HTMLParagraphElement, AlertTitleProps>(
  ({ className, variant, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn(
        "mb-2 font-medium leading-none tracking-tight",
        variant === "nothing" || variant === "terminal"
          ? "font-ndot text-base"
          : "text-sm",
        className
      )}
      {...props}
    />
  )
);
AlertTitle.displayName = "AlertTitle";

export interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: VariantProps<typeof alertVariants>["variant"];
}

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  AlertDescriptionProps
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-sm leading-relaxed",
      variant === "nothing"
        ? "font-ndot text-foreground/90"
        : "[&_p]:leading-relaxed",
      variant === "terminal" ? "font-commit-mono text-xs" : "",
      className
    )}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export {
  Alert,
  AlertTitle,
  AlertDescription,
  alertVariants,
  alertIconVariants,
};
