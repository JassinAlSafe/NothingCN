"use client";

import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/component-preview";

const buttonCode = `import { Button } from "@/components/ui/button"

export function ButtonExample() {
  return (
    <div className="flex items-center space-x-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}`;

const buttonSizesCode = `import { Button } from "@/components/ui/button"

export function ButtonSizesExample() {
  return (
    <div className="flex items-center space-x-2">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}`;

const buttonStatesCode = `import { Button } from "@/components/ui/button"

export function ButtonStatesExample() {
  return (
    <div className="flex items-center space-x-2">
      <Button disabled>Disabled</Button>
      <Button variant="outline" disabled>
        Disabled Outline
      </Button>
    </div>
  )
}`;

export default function ButtonPage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="space-y-4 border-b border-border pb-8">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-12 bg-accent rounded-full" />
          <h1 className="text-5xl font-bold tracking-tight font-ndot">Button</h1>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Displays a button or a component that looks like a button. Perfect for actions, forms, and navigation.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="The default button with various variants."
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        }
        code={buttonCode}
      />

      <ComponentPreview
        title="Sizes"
        description="Button component supports different sizes."
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        }
        code={buttonSizesCode}
      />

      <ComponentPreview
        title="States"
        description="Button component supports disabled state."
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled>
              Disabled Outline
            </Button>
          </div>
        }
        code={buttonStatesCode}
      />

      {/* Installation Section */}
      <div className="space-y-6 border-t border-border pt-12">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight">Installation</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            Add the button component to your project.
          </p>
        </div>
        <ComponentPreview
          title="Copy and Paste"
          description="Copy the component code and paste it into your project."
          preview={<div />}
          code={`// 1. Copy the button component code from above
// 2. Create components/ui/button.tsx in your project
// 3. Paste the code
// 4. Install dependencies if needed:
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge

// 5. Import and use:
import { Button } from "@/components/ui/button"

export function MyComponent() {
  return <Button>Click me</Button>
}`}
          hidePreview
        />
      </div>
    </div>
  );
}