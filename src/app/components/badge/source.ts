export const badgeSourceCode = `import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        nothing: "bg-background border-border text-foreground hover:bg-accent/10",
        red: "bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30 border-transparent",
        green: "bg-green-50 text-green-600 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30 border-transparent",
        blue: "bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30 border-transparent",
        purple: "bg-purple-50 text-purple-600 hover:bg-purple-100 dark:bg-purple-900/20 dark:text-purple-400 dark:hover:bg-purple-900/30 border-transparent",
        orange: "bg-orange-50 text-orange-600 hover:bg-orange-100 dark:bg-orange-900/20 dark:text-orange-400 dark:hover:bg-orange-900/30 border-transparent",
        yellow: "bg-yellow-50 text-yellow-600 hover:bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400 dark:hover:bg-yellow-900/30 border-transparent",
      },
      size: {
        sm: "px-2 py-0.5 text-xs font-semibold",
        default: "px-2.5 py-0.5 text-xs font-semibold",
        lg: "px-3 py-1 text-sm font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
  dotColor?: "red" | "green" | "blue" | "purple" | "orange" | "yellow";
}

function Badge({ className, variant, size, dot, dotColor = "red", children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && (
        <span
          className={cn(
            "w-2 h-2 rounded-full flex-shrink-0 mr-1.5",
            {
              "bg-red-500": dotColor === "red",
              "bg-green-500": dotColor === "green",
              "bg-blue-500": dotColor === "blue",
              "bg-purple-500": dotColor === "purple",
              "bg-orange-500": dotColor === "orange",
              "bg-yellow-500": dotColor === "yellow",
            }
          )}
        />
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };`;