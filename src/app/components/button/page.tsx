"use client";

import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentCode } from "@/components/component-code";

const buttonCode = `import { Button } from "@/components/ui/button"

export function ButtonExample() {
  return (
    <div className="flex items-center space-x-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="pixel">Pixel</Button>
    </div>
  )
}`;

const pixelButtonCode = `import { Button } from "@/components/ui/button"

export function PixelButtonExample() {
  return (
    <div className="flex items-center space-x-4 p-8 bg-muted/20 rounded-lg">
      <Button variant="pixel" size="sm">POWER ON</Button>
      <Button variant="pixel">START GAME</Button>
      <Button variant="pixel" size="lg">CONTINUE</Button>
      <Button variant="pixel" disabled>LOCKED</Button>
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
            <Button variant="pixel"><span className="font-ndot">Pixel</span></Button>
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

      <ComponentPreview
        title="Pixel Theme"
        description="Retro gaming style buttons with pixel-perfect shadows and animations."
        preview={
          <div className="flex flex-wrap items-center gap-6 p-8 bg-muted/20 rounded-lg">
            <Button variant="pixel" size="sm"><span className="font-ndot">POWER ON</span></Button>
            <Button variant="pixel"><span className="font-ndot">START GAME</span></Button>
            <Button variant="pixel" size="lg"><span className="font-ndot">CONTINUE</span></Button>
            <Button variant="pixel" disabled><span className="font-ndot">LOCKED</span></Button>
          </div>
        }
        code={pixelButtonCode}
      />

      {/* Component Source Code */}
      <ComponentCode
        title="Component Source"
        description="Copy and paste the following code into your project."
        code={`import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-full",
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
        pixel: "bg-background text-foreground border-2 border-foreground hover:bg-foreground hover:text-background font-mono font-bold tracking-wider uppercase text-xs rounded-none relative overflow-hidden shadow-[4px_4px_0px_0px_theme(colors.foreground)] hover:shadow-[2px_2px_0px_0px_theme(colors.foreground)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150",
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

export { Button, buttonVariants };`}
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
          title="Step-by-step"
          description="Follow these steps to add the button component to your project."
          preview={<div />}
          code={`# 1. Install dependencies
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge

# 2. Copy the component source code above
# 3. Create a new file: components/ui/button.tsx
# 4. Paste the code into the file
# 5. Make sure you have the utils function in lib/utils.ts

# 6. Import and use:
import { Button } from "@/components/ui/button"

export function MyComponent() {
  return (
    <div className="space-x-2">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  )
}`}
          hidePreview
        />
      </div>
    </div>
  );
}