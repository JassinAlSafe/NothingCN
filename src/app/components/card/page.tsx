"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentCode } from "@/components/component-code";

const cardCode = `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardExample() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>System Status</CardTitle>
        <CardDescription>Current system information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span>CPU Usage</span>
            <span className="font-ndot text-green-500">45%</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Memory</span>
            <span className="font-ndot text-blue-500">8.2GB</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Status</span>
            <span className="font-ndot text-green-500">Online</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}`;

const cardWithFooterCode = `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CardWithFooterExample() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Project Setup</CardTitle>
        <CardDescription>
          Deploy your new project in one-click.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Get started with your project in minutes.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}`;

export default function CardPage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="space-y-4 border-b border-border pb-8">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-12 bg-accent rounded-full" />
          <h1 className="text-5xl font-bold tracking-tight font-ndot">Card</h1>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Displays a card with header, content, and footer. Perfect for organizing information and creating layouts.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A simple card with header and content."
        preview={
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>System Status</CardTitle>
              <CardDescription>Current system information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>CPU Usage</span>
                  <span className="font-ndot text-green-500">45%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Memory</span>
                  <span className="font-ndot text-blue-500">8.2GB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Status</span>
                  <span className="font-ndot text-green-500">Online</span>
                </div>
              </div>
            </CardContent>
          </Card>
        }
        code={cardCode}
      />

      <ComponentPreview
        title="With Footer"
        description="A card with header, content, and footer actions."
        preview={
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Project Setup</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Get started with your project in minutes.</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline"><span className="font-ndot">Cancel</span></Button>
              <Button><span className="font-ndot">Deploy</span></Button>
            </CardFooter>
          </Card>
        }
        code={cardWithFooterCode}
      />

      {/* Component Source Code */}
      <ComponentCode
        title="Component Source"
        description="Copy and paste the following code into your project."
        code={`import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-3xl border-2 border-border bg-card text-card-foreground transition-all duration-300 hover:border-accent/50",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-3 p-6 pb-4", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-6 pb-6", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center px-6 pb-6 pt-4", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};`}
      />

      {/* Installation Section */}
      <div className="space-y-6 border-t border-border pt-12">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight">Installation</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            Add the card component to your project.
          </p>
        </div>
        <ComponentPreview
          title="Step-by-step"
          description="Follow these steps to add the card component to your project."
          preview={<div />}
          code={`# 1. Install dependencies
npm install clsx tailwind-merge

# 2. Copy the component source code above
# 3. Create a new file: components/ui/card.tsx
# 4. Paste the code into the file
# 5. Make sure you have the utils function in lib/utils.ts

# 6. Import and use:
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content goes here</p>
      </CardContent>
    </Card>
  )
}`}
          hidePreview
        />
      </div>
    </div>
  );
}