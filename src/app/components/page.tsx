"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Component examples
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

interface ComponentPreviewProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
}

function ComponentPreview({
  title,
  description,
  preview,
  code,
}: ComponentPreviewProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-4">
            <div className="component-preview-content">{preview}</div>
          </TabsContent>
          <TabsContent value="code" className="mt-4">
            <CodeBlock code={code} language="tsx" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

export default function ComponentsPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-bold text-4xl tracking-tight lg:text-5xl">
            Components
          </h1>
          <p className="text-xl text-muted-foreground">
            Beautifully designed components built with Radix UI and Tailwind
            CSS.
          </p>
        </div>
      </div>

      <div className="pb-8 pt-6 md:pb-10 md:pt-8">
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
          {/* Button Component */}
          <ComponentPreview
            title="Button"
            description="Displays a button or a component that looks like a button."
            preview={
              <div className="flex flex-col space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Button disabled>Disabled</Button>
                  <Button variant="outline" disabled>
                    Disabled
                  </Button>
                </div>
              </div>
            }
            code={buttonCode}
          />

          {/* Card Component */}
          <ComponentPreview
            title="Card"
            description="Displays a card with header, content, and footer."
            preview={
              <div className="flex flex-wrap gap-4">
                <Card className="w-[350px]">
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Card content goes here. This is a simple card component.
                    </p>
                  </CardContent>
                </Card>
                <Card className="w-[350px]">
                  <CardHeader>
                    <CardTitle>Interactive Card</CardTitle>
                    <CardDescription>
                      This card has interactive elements.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-2">
                      <p>Count: {count}</p>
                      <Button onClick={() => setCount(count + 1)}>
                        Increment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            }
            code={cardCode}
          />

          {/* Badge Component */}
          <ComponentPreview
            title="Badge"
            description="Displays a badge or a component that looks like a badge."
            preview={
              <div className="flex flex-wrap items-center gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            }
            code={badgeCode}
          />

          {/* Code Block Component */}
          <ComponentPreview
            title="Code Block"
            description="Displays syntax-highlighted code with copy functionality."
            preview={
              <div className="w-full max-w-2xl">
                <CodeBlock
                  code={`function hello() {
  console.log("Hello, World!");
}`}
                  language="javascript"
                  title="example.js"
                />
              </div>
            }
            code={`import { CodeBlock } from "@/components/ui/code-block"

export function CodeBlockExample() {
  return (
    <CodeBlock
      code={\`function hello() {
  console.log("Hello, World!");
}\`}
      language="javascript"
      title="example.js"
    />
  )
}`}
          />
        </div>
      </div>
    </div>
  );
}
