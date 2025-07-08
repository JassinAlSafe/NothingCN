"use client";

import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentCode } from "@/components/component-code";

const badgeCode = `import { Badge } from "@/components/ui/badge"

export function BadgeExample() {
  return (
    <div className="flex items-center space-x-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  )
}`;


export default function BadgePage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="space-y-4 border-b border-border pb-8">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-12 bg-accent rounded-full" />
          <h1 className="text-5xl font-bold tracking-tight font-ndot">Badge</h1>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Displays a badge or a component that looks like a badge. Perfect for labels, status indicators, and tags.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="The default badge with various variants."
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <Badge><span className="font-ndot">Default</span></Badge>
            <Badge variant="secondary"><span className="font-ndot">Secondary</span></Badge>
            <Badge variant="outline"><span className="font-ndot">Outline</span></Badge>
            <Badge variant="destructive"><span className="font-ndot">Destructive</span></Badge>
          </div>
        }
        code={badgeCode}
      />

      <ComponentPreview
        title="Color Variants"
        description="Badge variants with different colors for categorization."
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="nothing"><span className="font-ndot">Nothing OS</span></Badge>
            <Badge variant="red"><span className="font-ndot">Red</span></Badge>
            <Badge variant="green"><span className="font-ndot">Green</span></Badge>
            <Badge variant="blue"><span className="font-ndot">Blue</span></Badge>
            <Badge variant="purple"><span className="font-ndot">Purple</span></Badge>
            <Badge variant="orange"><span className="font-ndot">Orange</span></Badge>
            <Badge variant="yellow"><span className="font-ndot">Yellow</span></Badge>
          </div>
        }
        code={`import { Badge } from "@/components/ui/badge";

export function ColorBadgesExample() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Badge variant="nothing">Nothing OS</Badge>
      <Badge variant="red">Red</Badge>
      <Badge variant="green">Green</Badge>
      <Badge variant="blue">Blue</Badge>
      <Badge variant="purple">Purple</Badge>
      <Badge variant="orange">Orange</Badge>
      <Badge variant="yellow">Yellow</Badge>
    </div>
  );
}`}
      />

      <ComponentPreview
        title="Badges with Dots"
        description="Badges with colored dots for visual categorization, inspired by Nothing OS."
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <Badge dot dotColor="red" variant="nothing"><span className="font-ndot">Newsroom</span></Badge>
            <Badge dot dotColor="blue" variant="nothing"><span className="font-ndot">Phone Series</span></Badge>
            <Badge dot dotColor="green" variant="nothing"><span className="font-ndot">Ear Series</span></Badge>
            <Badge dot dotColor="purple" variant="nothing"><span className="font-ndot">Community</span></Badge>
            <Badge dot dotColor="orange" variant="nothing"><span className="font-ndot">Updates</span></Badge>
          </div>
        }
        code={`import { Badge } from "@/components/ui/badge";

export function BadgesWithDotsExample() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Badge dot dotColor="red" variant="nothing">Newsroom</Badge>
      <Badge dot dotColor="blue" variant="nothing">Phone Series</Badge>
      <Badge dot dotColor="green" variant="nothing">Ear Series</Badge>
      <Badge dot dotColor="purple" variant="nothing">Community</Badge>
      <Badge dot dotColor="orange" variant="nothing">Updates</Badge>
    </div>
  );
}`}
      />

      <ComponentPreview
        title="Badge Sizes"
        description="Different sizes for various contexts."
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <Badge size="sm">Small</Badge>
            <Badge size="default">Default</Badge>
            <Badge size="lg">Large</Badge>
            <Badge size="sm" dot dotColor="red" variant="nothing"><span className="font-ndot">Small with dot</span></Badge>
            <Badge size="lg" dot dotColor="blue" variant="nothing"><span className="font-ndot">Large with dot</span></Badge>
          </div>
        }
        code={`import { Badge } from "@/components/ui/badge";

export function BadgeSizesExample() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="default">Default</Badge>
      <Badge size="lg">Large</Badge>
      <Badge size="sm" dot dotColor="red" variant="nothing">Small with dot</Badge>
      <Badge size="lg" dot dotColor="blue" variant="nothing">Large with dot</Badge>
    </div>
  );
}`}
      />

      <ComponentPreview
        title="Usage Examples"
        description="Common use cases for badges."
        preview={
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span>Status:</span>
              <Badge variant="green"><span className="font-ndot">Active</span></Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span>Priority:</span>
              <Badge variant="destructive"><span className="font-ndot">High</span></Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span>Version:</span>
              <Badge variant="outline"><span className="font-ndot">v1.0.0</span></Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span>Category:</span>
              <Badge dot dotColor="blue" variant="nothing"><span className="font-ndot">Technology</span></Badge>
            </div>
          </div>
        }
        code={`import { Badge } from "@/components/ui/badge";

export function BadgeUsageExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <span>Status:</span>
        <Badge variant="green">Active</Badge>
      </div>
      <div className="flex items-center space-x-2">
        <span>Priority:</span>
        <Badge variant="destructive">High</Badge>
      </div>
      <div className="flex items-center space-x-2">
        <span>Version:</span>
        <Badge variant="outline">v1.0.0</Badge>
      </div>
      <div className="flex items-center space-x-2">
        <span>Category:</span>
        <Badge dot dotColor="blue" variant="nothing">Technology</Badge>
      </div>
    </div>
  );
}`}
      />

      {/* Component Source Code */}
      <ComponentCode
        title="Component Source"
        description="Copy and paste the following code into your project."
        code={`import * as React from "react";
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

export { Badge, badgeVariants };`}
      />

      {/* Installation Section */}
      <div className="space-y-6 border-t border-border pt-12">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight">Installation</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            Add the badge component to your project.
          </p>
        </div>
        <ComponentPreview
          title="Step-by-step Installation"
          description="Follow these steps to add the badge component to your project."
          preview={<div />}
          code={`# 1. Install dependencies
npm install class-variance-authority clsx tailwind-merge

# 2. Create the utils file (lib/utils.ts)
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

# 3. Copy the component source code above
# 4. Create: components/ui/badge.tsx
# 5. Paste the component code into the file

# 6. Make sure you have Tailwind CSS installed:
npm install tailwindcss@latest

# 7. Add to your globals.css:
@import "tailwindcss";

# 8. The component uses standard Tailwind classes that work out of the box:
# - Standard colors: red-50, red-600, green-50, etc.
# - Standard sizing: px-2, py-0.5, text-xs, etc.
# - Standard utilities: rounded-full, border, etc.

# 9. Import and use:
import { Badge } from "@/components/ui/badge"

export function MyComponent() {
  return (
    <div className="flex items-center space-x-2">
      <Badge>Default</Badge>
      <Badge variant="nothing">Nothing OS</Badge>
      <Badge dot dotColor="red" variant="nothing">With Dot</Badge>
      <Badge size="lg" variant="blue">Large Blue</Badge>
    </div>
  )
}

# Note: This component uses semantic color tokens (primary, secondary, accent, etc.)
# that should be defined in your design system. The color variants (red, green, blue, purple, etc.)
# use standard Tailwind color classes that work without additional configuration.
# 
# To customize colors, you can either:
# 1. Define the semantic tokens in your CSS variables or Tailwind config
# 2. Replace them with standard Tailwind classes in the badgeVariants object
# 
# For example, to use standard colors:
# default: "border-transparent bg-slate-900 text-white hover:bg-slate-800"`}
          hidePreview
        />
      </div>
    </div>
  );
}