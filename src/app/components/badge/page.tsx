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

const badgeUsageCode = `import { Badge } from "@/components/ui/badge"

export function BadgeUsageExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <span>Status:</span>
        <Badge>Active</Badge>
      </div>
      <div className="flex items-center space-x-2">
        <span>Priority:</span>
        <Badge variant="destructive">High</Badge>
      </div>
      <div className="flex items-center space-x-2">
        <span>Version:</span>
        <Badge variant="outline">v1.0.0</Badge>
      </div>
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
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        }
        code={badgeCode}
      />

      <ComponentPreview
        title="Usage Examples"
        description="Common use cases for badges."
        preview={
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span>Status:</span>
              <Badge>Active</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span>Priority:</span>
              <Badge variant="destructive">High</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span>Version:</span>
              <Badge variant="outline">v1.0.0</Badge>
            </div>
          </div>
        }
        code={badgeUsageCode}
      />

      {/* Component Source Code */}
      <ComponentCode
        title="Component Source"
        description="Copy and paste the following code into your project."
        code={`import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
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
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
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
          title="Step-by-step"
          description="Follow these steps to add the badge component to your project."
          preview={<div />}
          code={`# 1. Install dependencies
npm install class-variance-authority clsx tailwind-merge

# 2. Copy the component source code above
# 3. Create a new file: components/ui/badge.tsx
# 4. Paste the code into the file
# 5. Make sure you have the utils function in lib/utils.ts

# 6. Import and use:
import { Badge } from "@/components/ui/badge"

export function MyComponent() {
  return (
    <div className="flex items-center space-x-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}`}
          hidePreview
        />
      </div>
    </div>
  );
}