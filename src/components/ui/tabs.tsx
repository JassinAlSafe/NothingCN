"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

// Enhanced Tabs Root with proper forwardRef and variant support
interface TabsProps 
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  variant?: "default" | "nothing" | "pixel" | "underline" | "minimal";
  size?: "sm" | "default" | "lg";
}

const Tabs = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ className, variant = "default", size = "default", ...props }, ref) => {
  // Create context to pass variant and size to child components
  const contextValue = React.useMemo(() => ({ variant, size }), [variant, size]);
  
  return (
    <TabsContext.Provider value={contextValue}>
      <TabsPrimitive.Root
        ref={ref}
        className={cn("w-full", className)}
        {...props}
      />
    </TabsContext.Provider>
  );
});
Tabs.displayName = "Tabs";

// Context for sharing variant and size
const TabsContext = React.createContext<{
  variant: "default" | "nothing" | "pixel" | "underline" | "minimal";
  size: "sm" | "default" | "lg";
}>({ variant: "default", size: "default" });

const useTabsContext = () => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs compound components must be used within Tabs");
  }
  return context;
};

// Optimized TabsList variants with better accessibility and consistency
const tabsListVariants = cva(
  "inline-flex items-center text-muted-foreground relative overflow-hidden focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background",
  {
    variants: {
      variant: {
        default: "justify-center rounded-full bg-muted p-1 shadow-sm",
        nothing: "justify-center rounded-2xl bg-muted/50 border border-border/50 backdrop-blur-sm p-1.5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-border/70",
        pixel: "justify-center rounded-none border-2 border-border bg-gradient-to-r from-muted to-muted/80 p-1 shadow-[2px_2px_0px_0px_theme(colors.border)]",
        underline: "justify-start bg-transparent border-b border-border rounded-none p-0 gap-0 shadow-none",
        minimal: "justify-start bg-transparent rounded-none p-0 gap-2 shadow-none"
      },
      size: {
        sm: "h-10 text-sm min-w-fit",
        default: "h-12 text-sm min-w-fit", 
        lg: "h-14 text-base min-w-fit"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

// TabsTrigger variants with Nothing OS inspired styling and improved states
const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:shadow-lg focus-visible:shadow-accent/25 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: `rounded-full px-4 py-2 h-full flex-1 relative
          data-[state=active]:bg-background data-[state=active]:text-foreground 
          data-[state=active]:shadow-md data-[state=active]:scale-[1.02]
          hover:bg-background/60 hover:scale-[0.98]
          motion-safe:data-[state=active]:animate-in motion-safe:data-[state=active]:zoom-in-95`,
        nothing: `rounded-2xl px-4 py-2 h-full flex-1 relative
          data-[state=active]:bg-accent data-[state=active]:text-accent-foreground 
          data-[state=active]:shadow-lg data-[state=active]:shadow-accent/25
          data-[state=active]:border data-[state=active]:border-accent/20
          hover:bg-accent/8 dark:hover:bg-accent/12 hover:shadow-md hover:shadow-accent/10
          before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r 
          before:from-transparent before:via-accent/5 before:to-transparent 
          before:opacity-0 before:transition-opacity before:duration-300
          data-[state=active]:before:opacity-100`,
        pixel: `rounded-none px-4 py-2 border-2 border-transparent font-ndot tracking-wider
          data-[state=active]:border-accent data-[state=active]:bg-accent 
          data-[state=active]:text-accent-foreground data-[state=active]:shadow-lg
          data-[state=active]:shadow-accent/20 data-[state=active]:scale-[1.02]
          hover:border-accent/30 hover:bg-accent/10 hover:scale-[0.98]
          after:content-[''] after:absolute after:inset-0 after:border-2 after:border-accent
          after:opacity-0 data-[state=active]:after:opacity-100 after:animate-pulse`,
        underline: `rounded-none px-4 py-3 border-b-2 border-transparent relative
          data-[state=active]:border-accent data-[state=active]:text-accent 
          hover:text-accent/70 hover:border-accent/30
          after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 
          after:bg-gradient-to-r after:from-transparent after:via-accent after:to-transparent
          after:opacity-0 after:transition-all after:duration-300
          data-[state=active]:after:opacity-100`,
        minimal: `rounded-lg px-3 py-2 relative
          data-[state=active]:bg-accent/10 data-[state=active]:text-accent 
          hover:bg-accent/5 hover:text-accent/80
          before:absolute before:inset-0 before:rounded-lg before:bg-accent/10
          before:scale-0 before:transition-transform before:duration-300
          data-[state=active]:before:scale-100`
      },
      size: {
        sm: "text-sm min-h-[40px]",
        default: "text-sm min-h-[48px]",
        lg: "text-base min-h-[52px]"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {
  asChild?: boolean;
}

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {
  asChild?: boolean;
}

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  // Use context values if props aren't provided
  const context = useTabsContext();
  const resolvedVariant = variant ?? context.variant;
  const resolvedSize = size ?? context.size;
  
  const Comp = asChild ? Slot : TabsPrimitive.List;
  
  return (
    <Comp
      ref={ref}
      className={cn(
        tabsListVariants({ 
          variant: resolvedVariant, 
          size: resolvedSize, 
          className 
        })
      )}
      {...props}
    />
  );
});
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  // Use context values if props aren't provided
  const context = useTabsContext();
  const resolvedVariant = variant ?? context.variant;
  const resolvedSize = size ?? context.size;
  
  const Comp = asChild ? Slot : TabsPrimitive.Trigger;
  
  return (
    <Comp
      ref={ref}
      className={cn(
        tabsTriggerVariants({ 
          variant: resolvedVariant, 
          size: resolvedSize, 
          className 
        })
      )}
      {...props}
    />
  );
});
TabsTrigger.displayName = "TabsTrigger";

interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {
  asChild?: boolean;
}

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : TabsPrimitive.Content;
  
  return (
    <Comp
      ref={ref}
      className={cn(
        "mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-1 motion-safe:duration-200 motion-safe:ease-out",
        "data-[state=inactive]:motion-safe:animate-out data-[state=inactive]:motion-safe:fade-out-0 data-[state=inactive]:motion-safe:slide-out-to-bottom-1",
        className
      )}
      {...props}
    />
  );
});
TabsContent.displayName = "TabsContent";

// Export all components and variants
export { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent, 
  tabsListVariants, 
  tabsTriggerVariants,
  type TabsProps,
  type TabsListProps,
  type TabsTriggerProps,
  type TabsContentProps
};