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
  "relative rounded-2xl border px-6 py-4 transition-all duration-300 animate-fade-in-up overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-background via-background to-muted/30 border-border/50 text-foreground shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 backdrop-blur-sm",
        destructive:
          "bg-gradient-to-br from-background via-background to-background/95 border-border/50 text-foreground shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 backdrop-blur-sm",
        warning:
          "bg-gradient-to-br from-background via-background to-background/95 border-border/50 text-foreground shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 backdrop-blur-sm",
        success:
          "bg-gradient-to-br from-background via-background to-background/95 border-border/50 text-foreground shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 backdrop-blur-sm",
        info: "bg-gradient-to-br from-background via-background to-background/95 border-border/50 text-foreground shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 backdrop-blur-sm",
        nothing:
          "bg-gradient-to-br from-background/95 via-background/90 to-accent/5 border-accent/30 text-foreground shadow-2xl shadow-accent/10 hover:shadow-accent/20 backdrop-blur-md relative",
        terminal:
          "bg-gradient-to-br from-background via-background to-accent/5 border-accent/40 text-foreground font-commit-mono text-sm shadow-2xl shadow-accent/15 hover:shadow-accent/25 backdrop-blur-md relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent/5 before:to-transparent before:pointer-events-none",
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

const alertIconVariants = cva("flex-shrink-0 drop-shadow-sm", {
  variants: {
    variant: {
      default: "text-foreground/80",
      destructive: "text-red-600 dark:text-red-400",
      warning: "text-amber-600 dark:text-amber-400",
      success: "text-emerald-600 dark:text-emerald-400",
      info: "text-blue-600 dark:text-blue-400",
      nothing: "text-accent drop-shadow-md",
      terminal: "text-accent drop-shadow-md",
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
        {/* Colored accent stripe */}
        {variant !== "default" && variant !== "nothing" && variant !== "terminal" && (
          <div className={cn(
            "absolute top-0 left-0 w-1.5 h-full rounded-l-2xl",
            variant === "destructive" && "bg-gradient-to-b from-red-500 to-red-600",
            variant === "warning" && "bg-gradient-to-b from-amber-500 to-amber-600",
            variant === "success" && "bg-gradient-to-b from-emerald-500 to-emerald-600",
            variant === "info" && "bg-gradient-to-b from-blue-500 to-blue-600"
          )} />
        )}

        {/* Nothing OS corner dots */}
        {variant === "nothing" && (
          <>
            <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-accent/40 rounded-full animate-pulse" />
            <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-accent/40 rounded-full animate-pulse" />
            <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-accent/40 rounded-full animate-pulse" />
            <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-accent/40 rounded-full animate-pulse" />
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

        {/* Subtle glow effect for special variants */}
        {(variant === "nothing" || variant === "terminal") && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent pointer-events-none" />
        )}

        <div className="flex items-start space-x-3 relative z-10">
          {/* Icon */}
          {showIcon && (
            <div className="mt-0.5 p-1 rounded-lg bg-current/5 border border-current/10">
              {icon || getDefaultIcon()}
            </div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">{children}</div>

          {/* Dismiss button */}
          {dismissible && (
            <button
              onClick={handleDismiss}
              className={cn(
                "mt-0.5 p-1.5 rounded-xl transition-all duration-200 hover:bg-current/10 flex-shrink-0 border border-transparent hover:border-current/20",
                variant === "nothing"
                  ? "text-accent hover:bg-accent/10 hover:border-accent/20"
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
