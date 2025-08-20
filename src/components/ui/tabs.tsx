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

// TabsList variants following shadcn patterns with NothingCN design
const tabsListVariants = cva(
  "inline-flex items-center text-muted-foreground motion-safe:transition-all motion-safe:duration-200 focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2",
  {
    variants: {
      variant: {
        default: "justify-center rounded-full bg-muted p-1 text-muted-foreground",
        nothing: "justify-center rounded-full bg-card border-2 border-accent/20 p-1 motion-safe:hover:border-accent/40",
        pixel: "justify-center bg-background border-2 border-foreground p-1 shadow-[4px_4px_0px_0px_theme(colors.foreground)] motion-safe:hover:shadow-[2px_2px_0px_0px_theme(colors.foreground)] motion-safe:hover:translate-x-[2px] motion-safe:hover:translate-y-[2px]",
        underline: "justify-start bg-transparent border-b border-border p-0",
        minimal: "justify-start bg-transparent p-1"
      },
      size: {
        sm: "h-9 text-sm",
        default: "h-10 text-sm", 
        lg: "h-12 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

// TabsTrigger variants following button component patterns
const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background motion-safe:transition-all motion-safe:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground data-[state=active]:shadow-sm",
  {
    variants: {
      variant: {
        default: "rounded-full px-3 py-1.5 data-[state=active]:bg-background data-[state=active]:text-foreground hover:bg-accent/10 hover:text-accent",
        nothing: "rounded-full px-4 py-2 font-ndot font-bold tracking-wider text-sm bg-background text-foreground border-2 border-border hover:bg-accent hover:text-accent-foreground hover:border-accent data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:border-accent relative overflow-hidden group image-rendering-pixelated [-webkit-font-smoothing:none] [-moz-osx-font-smoothing:grayscale] [text-rendering:optimizeSpeed]",
        pixel: "px-3 py-1.5 bg-background text-foreground border-2 border-foreground hover:bg-foreground hover:text-background font-mono font-bold tracking-wider uppercase text-xs rounded-none relative overflow-hidden shadow-[4px_4px_0px_0px_theme(colors.foreground)] motion-safe:hover:shadow-[2px_2px_0px_0px_theme(colors.foreground)] motion-safe:hover:translate-x-[2px] motion-safe:hover:translate-y-[2px] data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:border-accent data-[state=active]:shadow-[2px_2px_0px_0px_theme(colors.accent)]",
        underline: "px-3 py-1.5 border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-accent hover:text-accent/70",
        minimal: "px-3 py-1.5 hover:bg-accent hover:text-accent-foreground data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
      },
      size: {
        sm: "text-xs h-7 px-2",
        default: "text-sm h-8 px-3",
        lg: "text-base h-10 px-4"
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
        "mt-6 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-2 motion-safe:duration-300 motion-safe:ease-out",
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