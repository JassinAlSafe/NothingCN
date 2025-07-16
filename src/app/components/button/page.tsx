"use client";

import { Button } from "@/components/ui/button";
import { ComponentCode } from "@/components/component-code";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

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
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-12 bg-accent rounded-full" />
          <h1 className="text-5xl font-bold tracking-tight font-ndot">Button</h1>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Displays a button or a component that looks like a button. Perfect for actions, forms, and navigation.
          Built with Radix UI Slot and includes multiple variants and states.
        </p>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
            ✓ Radix UI
          </Badge>
          <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 border-blue-500/20">
            ✓ Accessible
          </Badge>
          <Badge variant="secondary" className="bg-purple-500/10 text-purple-600 border-purple-500/20">
            ✓ Customizable
          </Badge>
        </div>
      </div>

      {/* Preview Section */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight font-ndot">Preview</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            Interactive preview of the button component with all variants.
          </p>
        </div>
        
        <div className="p-8 rounded-lg border border-border bg-muted/20">
          <div className="flex flex-wrap items-center gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="pixel"><span className="font-ndot">Pixel</span></Button>
          </div>
        </div>
      </div>

      {/* Installation */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight font-ndot">Installation</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            Install and configure the button component in your project.
          </p>
        </div>

        <Tabs defaultValue="cli" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="cli" className="font-ndot">CLI</TabsTrigger>
            <TabsTrigger value="manual" className="font-ndot">Manual</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cli" className="space-y-4">
            <ComponentCode
              title="CLI Installation"
              description="Use the CLI to automatically add the button component to your project."
              code={`# Install the button component
npx shadcn-ui@latest add button

# Or using the NothingCN CLI (coming soon)
npx nothingcn add button`}
              previewLines={4}
            />
          </TabsContent>
          
          <TabsContent value="manual" className="space-y-4">
            <ComponentCode
              title="Manual Installation"
              description="Manually add the button component to your project."
              code={`# 1. Install dependencies
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge

# 2. Copy the component source code below
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
              previewLines={8}
            />
          </TabsContent>
        </Tabs>
      </div>

      {/* Usage Examples */}
      <div className="space-y-8">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight font-ndot">Usage</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            Different ways to use the button component in your application.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight font-ndot">Variants</h3>
              <p className="text-muted-foreground leading-relaxed">
                The button component includes multiple variants for different use cases.
              </p>
            </div>
            
            <div className="p-8 rounded-lg border border-border bg-muted/20">
              <div className="flex flex-wrap items-center gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="pixel"><span className="font-ndot">Pixel</span></Button>
              </div>
            </div>

            <ComponentCode
              title="Variants Example"
              description="All available button variants with their usage."
              code={buttonCode}
              previewLines={8}
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight font-ndot">Sizes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Button component supports different sizes for various contexts.
              </p>
            </div>
            
            <div className="p-8 rounded-lg border border-border bg-muted/20">
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <ComponentCode
              title="Sizes Example"
              description="Different button sizes for various use cases."
              code={buttonSizesCode}
              previewLines={6}
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight font-ndot">States</h3>
              <p className="text-muted-foreground leading-relaxed">
                Button component supports disabled state and loading states.
              </p>
            </div>
            
            <div className="p-8 rounded-lg border border-border bg-muted/20">
              <div className="flex flex-wrap items-center gap-4">
                <Button disabled>Disabled</Button>
                <Button variant="outline" disabled>
                  Disabled Outline
                </Button>
              </div>
            </div>

            <ComponentCode
              title="States Example"
              description="Button states including disabled and loading."
              code={buttonStatesCode}
              previewLines={6}
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight font-ndot">Pixel Theme</h3>
              <p className="text-muted-foreground leading-relaxed">
                Retro gaming style buttons with pixel-perfect shadows and animations.
              </p>
            </div>
            
            <div className="p-8 rounded-lg border border-border bg-muted/20">
              <div className="flex flex-wrap items-center gap-6">
                <Button variant="pixel" size="sm"><span className="font-ndot">POWER ON</span></Button>
                <Button variant="pixel"><span className="font-ndot">START GAME</span></Button>
                <Button variant="pixel" size="lg"><span className="font-ndot">CONTINUE</span></Button>
                <Button variant="pixel" disabled><span className="font-ndot">LOCKED</span></Button>
              </div>
            </div>

            <ComponentCode
              title="Pixel Theme Example"
              description="Retro gaming style buttons with Nothing OS aesthetics."
              code={pixelButtonCode}
              previewLines={8}
            />
          </div>
        </div>
      </div>

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
        previewLines={20}
      />
    </div>
  );
}