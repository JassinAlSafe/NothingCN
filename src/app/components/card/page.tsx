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
import { ComponentCode } from "@/components/component-code";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

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

const cardGridCode = `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardGridExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Performance</CardTitle>
          <CardDescription>System performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-500">98%</div>
          <p className="text-sm text-muted-foreground">+2% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>Active users this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-500">1,234</div>
          <p className="text-sm text-muted-foreground">+12% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
          <CardDescription>Monthly revenue</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-accent">$45,231</div>
          <p className="text-sm text-muted-foreground">+20% from last month</p>
        </CardContent>
      </Card>
    </div>
  )
}`;

export default function CardPage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-12 bg-accent rounded-full" />
          <h1 className="text-5xl font-bold tracking-tight font-ndot">Card</h1>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Displays a card with header, content, and footer. Perfect for organizing information and creating layouts.
          Built with semantic HTML and accessible design patterns.
        </p>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
            ✓ Semantic HTML
          </Badge>
          <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 border-blue-500/20">
            ✓ Accessible
          </Badge>
          <Badge variant="secondary" className="bg-purple-500/10 text-purple-600 border-purple-500/20">
            ✓ Responsive
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
            Interactive preview of the card component with all its variants.
          </p>
        </div>
        
        <div className="p-8 rounded-lg border border-border bg-muted/20">
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
            Install and configure the card component in your project.
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
              description="Use the CLI to automatically add the card component to your project."
              code={`# Install the card component
npx shadcn-ui@latest add card

# Or using the NothingCN CLI (coming soon)
npx nothingcn add card`}
              previewLines={4}
            />
          </TabsContent>
          
          <TabsContent value="manual" className="space-y-4">
            <ComponentCode
              title="Manual Installation"
              description="Manually add the card component to your project."
              code={`# 1. Install dependencies
npm install clsx tailwind-merge

# 2. Copy the component source code below
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
            Different ways to use the card component in your application.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight font-ndot">Basic Card</h3>
              <p className="text-muted-foreground leading-relaxed">
                A simple card with header and content for displaying information.
              </p>
            </div>
            
            <div className="p-8 rounded-lg border border-border bg-muted/20">
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
            </div>

            <ComponentCode
              title="Basic Card Example"
              description="A simple card with header and content."
              code={cardCode}
              previewLines={12}
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight font-ndot">Card with Footer</h3>
              <p className="text-muted-foreground leading-relaxed">
                A card with header, content, and footer actions for interactive elements.
              </p>
            </div>
            
            <div className="p-8 rounded-lg border border-border bg-muted/20">
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
            </div>

            <ComponentCode
              title="Card with Footer Example"
              description="A card with header, content, and footer actions."
              code={cardWithFooterCode}
              previewLines={12}
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight font-ndot">Card Grid</h3>
              <p className="text-muted-foreground leading-relaxed">
                Multiple cards arranged in a grid layout for dashboards and data display.
              </p>
            </div>
            
            <div className="p-8 rounded-lg border border-border bg-muted/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance</CardTitle>
                    <CardDescription>System performance metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-500">98%</div>
                    <p className="text-sm text-muted-foreground">+2% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Users</CardTitle>
                    <CardDescription>Active users this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-500">1,234</div>
                    <p className="text-sm text-muted-foreground">+12% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue</CardTitle>
                    <CardDescription>Monthly revenue</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-accent">$45,231</div>
                    <p className="text-sm text-muted-foreground">+20% from last month</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <ComponentCode
              title="Card Grid Example"
              description="Multiple cards arranged in a responsive grid layout."
              code={cardGridCode}
              previewLines={15}
            />
          </div>
        </div>
      </div>

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
        previewLines={25}
      />
    </div>
  );
}