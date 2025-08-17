// Component source code for tabs documentation
// Extracted to improve maintainability and reduce duplication

export const tabsSourceCode = `"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

// TabsList variants following the design system pattern
const tabsListVariants = cva(
  "inline-flex items-center justify-center p-1 text-muted-foreground",
  {
    variants: {
      variant: {
        default: "rounded-full bg-muted",
        nothing: "rounded-3xl bg-muted border border-border",
        pixel: "rounded-none border-2 border-border bg-gradient-to-r from-muted to-muted/50",
        underline: "bg-transparent border-b border-border rounded-none p-0",
        minimal: "bg-transparent rounded-none p-0 gap-1"
      },
      size: {
        sm: "h-10 text-sm",
        default: "h-12 text-sm",
        lg: "h-14 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

// TabsTrigger variants with Nothing OS inspired styling
const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "rounded-full px-4 py-2 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm hover:bg-background/50",
        nothing: "rounded-2xl px-4 py-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-accent/20 hover:bg-accent/10",
        pixel: "rounded-none px-4 py-2 border-2 border-transparent font-ndot tracking-wider data-[state=active]:border-accent data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-sm hover:border-accent/30 hover:bg-accent/10",
        underline: "rounded-none px-4 py-3 border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-accent hover:text-accent/70",
        minimal: "rounded-lg px-3 py-2 data-[state=active]:bg-accent/10 data-[state=active]:text-accent hover:bg-accent/5"
      },
      size: {
        sm: "text-sm px-3 py-1.5",
        default: "text-sm px-4 py-2",
        lg: "text-base px-6 py-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant, size, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ variant, size, className }))}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, variant, size, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerVariants({ variant, size, className }))}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-safe:animate-in motion-safe:fade-in-50 motion-safe:slide-in-from-bottom-2 motion-safe:duration-300",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants, tabsTriggerVariants };`;