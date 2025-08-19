export const buttonSourceCode = `import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium motion-safe:transition-all motion-safe:duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-full",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:bg-foreground/90 border-0",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 border-0",
        outline:
          "border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-0",
        ghost: "hover:bg-accent hover:text-accent-foreground border-0",
        link: "text-primary underline-offset-4 hover:underline border-0",
        pixel: "bg-background text-foreground border-2 border-foreground hover:bg-foreground hover:text-background font-mono font-bold tracking-wider uppercase text-xs rounded-none relative overflow-hidden shadow-[4px_4px_0px_0px_theme(colors.foreground)] motion-safe:hover:shadow-[2px_2px_0px_0px_theme(colors.foreground)] motion-safe:hover:translate-x-[2px] motion-safe:hover:translate-y-[2px] motion-safe:active:shadow-none motion-safe:active:translate-x-[4px] motion-safe:active:translate-y-[4px] motion-safe:transition-all motion-safe:duration-150",
        nothing: "bg-background text-foreground border-2 border-border hover:bg-accent hover:text-accent-foreground hover:border-accent font-ndot font-bold tracking-wider uppercase text-sm rounded-full px-8 py-3 motion-safe:transition-all motion-safe:duration-300 relative overflow-hidden group image-rendering-pixelated [-webkit-font-smoothing:none] [-moz-osx-font-smoothing:grayscale] [text-rendering:optimizeSpeed]",
      },
      size: {
        default: "h-12 px-6 py-3 text-sm font-medium",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-base font-medium",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };`;