"use client";

import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "@/components/component-preview";

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
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Badge</h1>
        <p className="text-xl text-muted-foreground">
          Displays a badge or a component that looks like a badge.
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
          title="Copy and Paste"
          description="Copy the component code and paste it into your project."
          preview={<div />}
          code={`// 1. Copy the badge component code from above
// 2. Create components/ui/badge.tsx in your project
// 3. Paste the code
// 4. Install dependencies if needed:
npm install class-variance-authority clsx tailwind-merge

// 5. Import and use:
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