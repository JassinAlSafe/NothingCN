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
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
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
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content goes here. This is a simple card component.</p>
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
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        }
        code={cardWithFooterCode}
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
          title="Copy and Paste"
          description="Copy the component code and paste it into your project."
          preview={<div />}
          code={`// 1. Copy the card component code from above
// 2. Create components/ui/card.tsx in your project  
// 3. Paste the code
// 4. Install dependencies if needed:
npm install clsx tailwind-merge

// 5. Import and use:
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