"use client";

import { AnimatedCloud } from "@/components/ui/icons";
import { RainingCloud } from "@/components/ui/raining-cloud";
import { ComponentPreview } from "@/components/component-preview";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const basicUsageCode = `import { AnimatedCloud } from "@/components/ui/icons"

export function BasicExample() {
  return (
    <div className="flex items-center justify-center p-8">
      <AnimatedCloud 
        width={120} 
        height={80}
        animate={true}
        animationType="float"
        className="text-blue-500"
      />
    </div>
  )
}`;

const advancedUsageCode = `import { AnimatedCloud } from "@/components/ui/icons"

export function AnimationTypes() {
  return (
    <div className="grid grid-cols-3 gap-6 p-8">
      <AnimatedCloud animationType="bounce" speed="fast" className="text-green-500" />
      <AnimatedCloud animationType="pulse" speed="normal" className="text-purple-500" />
      <AnimatedCloud animationType="spin" speed="slow" className="text-orange-500" />
    </div>
  )
}`;

const hoverEffectsCode = `import { AnimatedCloud } from "@/components/ui/icons"

export function HoverEffects() {
  return (
    <div className="space-y-6 p-8">
      <AnimatedCloud 
        hover={true}
        animationType="pulse"
        className="text-accent hover:text-blue-500 transition-colors"
      />
      <AnimatedCloud 
        hover={true}
        animate={false}
        className="text-accent hover:text-red-500 transition-colors"
      />
    </div>
  )
}`;

export default function SVGAnimationExamplePage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="space-y-4 border-b border-border pb-8">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-12 bg-accent rounded-full" />
          <h1 className="text-5xl font-bold tracking-tight font-ndot">
            SVG Animation
          </h1>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Learn how to create and animate SVG icons as React components. This
          example shows how to convert your static SVG files into interactive,
          animated components.
        </p>
      </div>

      {/* Basic Usage */}
      <ComponentPreview
        title="Basic Animated SVG"
        description="A simple animated cloud using your original SVG with floating animation."
        preview={
          <div className="flex items-center justify-center p-8">
            <AnimatedCloud
              width={120}
              height={80}
              animate={true}
              animationType="bounce"
              className="text-blue-500"
            />
          </div>
        }
        code={basicUsageCode}
      />

      {/* Animation Types */}
      <ComponentPreview
        title="Animation Types"
        description="Different animation types with various speeds and colors."
        preview={
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            <div className="flex flex-col items-center space-y-2">
              <AnimatedCloud
                animationType="bounce"
                speed="fast"
                className="text-green-500"
              />
              <Badge variant="outline">Bounce - Fast</Badge>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <AnimatedCloud
                animationType="pulse"
                speed="normal"
                className="text-purple-500"
              />
              <Badge variant="outline">Pulse - Normal</Badge>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <AnimatedCloud
                animationType="spin"
                speed="slow"
                className="text-orange-500"
              />
              <Badge variant="outline">Spin - Slow</Badge>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <AnimatedCloud
                animationType="ping"
                speed="fast"
                className="text-pink-500"
              />
              <Badge variant="outline">Ping - Fast</Badge>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <AnimatedCloud animationType="none" className="text-gray-500" />
              <Badge variant="outline">Static</Badge>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <AnimatedCloud
                hover={true}
                animate={false}
                className="text-accent hover:text-blue-500 transition-colors duration-300"
              />
              <Badge variant="outline">Hover Only</Badge>
            </div>
          </div>
        }
        code={advancedUsageCode}
      />

      {/* Hover Effects */}
      <ComponentPreview
        title="Interactive Hover Effects"
        description="Hover over these icons to see interactive effects combined with animations."
        preview={
          <div className="grid grid-cols-2 gap-8 p-8">
            <div className="flex flex-col items-center space-y-2">
              <AnimatedCloud
                hover={true}
                animationType="pulse"
                className="text-accent hover:text-blue-500 transition-colors duration-300"
              />
              <Badge variant="secondary">Hover + Pulse</Badge>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <AnimatedCloud
                hover={true}
                animate={false}
                className="text-accent hover:text-red-500 transition-colors duration-300"
              />
              <Badge variant="secondary">Hover Transform</Badge>
            </div>
          </div>
        }
        code={hoverEffectsCode}
      />

      {/* Complex Animated Component */}
      <ComponentPreview
        title="Complex Animated SVG: Raining Cloud"
        description="Example of your existing RainingCloud component with animated rain drops and customizable options."
        preview={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            <div className="flex flex-col items-center space-y-2">
              <RainingCloud
                size="lg"
                rainColor="blue"
                rainCount={8}
                className="text-blue-500"
              />
              <Badge variant="outline">Blue Rain</Badge>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <RainingCloud
                size="lg"
                rainColor="cyan"
                rainCount={12}
                className="text-cyan-500"
              />
              <Badge variant="outline">Cyan Rain</Badge>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <RainingCloud
                size="lg"
                rainColor="gray"
                rainCount={6}
                className="text-gray-500"
              />
              <Badge variant="outline">Gray Rain</Badge>
            </div>
          </div>
        }
        code={`import { RainingCloud } from "@/components/ui/raining-cloud"

export function RainingCloudExample() {
  return (
    <div className="grid grid-cols-3 gap-6 p-8">
      <RainingCloud size="lg" rainColor="blue" rainCount={8} />
      <RainingCloud size="lg" rainColor="cyan" rainCount={12} />
      <RainingCloud size="lg" rainColor="gray" rainCount={6} />
    </div>
  )
}`}
      />

      {/* File Structure Guide */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          SVG Organization Guide
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                📁 Recommended Structure
              </CardTitle>
              <CardDescription>
                Organize your SVGs for maximum flexibility and maintainability.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 font-mono text-sm">
                <div>📂 src/components/ui/icons/</div>
                <div className="ml-4">├── animated-cloud.tsx</div>
                <div className="ml-4">├── weather-icons.tsx</div>
                <div className="ml-4">├── brand-logo.tsx</div>
                <div className="ml-4">└── index.tsx</div>
                <div className="mt-4">📂 public/icons/</div>
                <div className="ml-4">├── static-logo.svg</div>
                <div className="ml-4">└── fallback-icons.svg</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">⚡ Animation Benefits</CardTitle>
              <CardDescription>
                Why convert SVGs to React components with animations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• **TypeScript support** with props and type checking</li>
                <li>• **Theme integration** using CSS custom properties</li>
                <li>
                  • **Interactive animations** with hover and click events
                </li>
                <li>• **Dynamic sizing** and color changes</li>
                <li>• **Better performance** than animated GIFs or videos</li>
                <li>• **Accessibility** with proper ARIA labels</li>
                <li>• **Tree-shaking** for smaller bundle sizes</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Tips */}
      <div className="mt-12 p-6 bg-muted/50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Usage Tips</h2>
        <div className="grid gap-4 md:grid-cols-2 text-sm text-muted-foreground">
          <div>
            <h3 className="font-medium text-foreground mb-2">
              For Static SVGs:
            </h3>
            <ul className="space-y-1">
              <li>• Keep in `public/icons/` for Next.js Image optimization</li>
              <li>• Use for logos, brand assets, and simple graphics</li>
              <li>• Reference with `/icons/filename.svg`</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              For Animated SVGs:
            </h3>
            <ul className="space-y-1">
              <li>
                • Convert to React components in `src/components/ui/icons/`
              </li>
              <li>• Add TypeScript interfaces for props</li>
              <li>• Use Tailwind classes for styling and animations</li>
              <li>• Export from index file for clean imports</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
