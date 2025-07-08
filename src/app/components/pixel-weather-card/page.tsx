import { ComponentPreview } from "@/components/component-preview";
import { PixelWeatherCard } from "@/components/ui/pixel-weather-card";

export default function PixelWeatherCardPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold font-ndot tracking-wide">Pixel Weather Card</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          An animated pixel art weather card component featuring multiple weather conditions including sunny skies, 
          animated clouds, and beautiful starry night scenes. Complete with dot-matrix style graphics and app-themed colors. 
          Perfect for interactive weather displays and modern interfaces.
        </p>
      </div>

      <div className="space-y-8">
        {/* Basic Example */}
        <ComponentPreview
          title="Basic Pixel Weather Card"
          description="Default showers condition with 14° temperature using animated cloud with rain"
          preview={
            <div className="flex items-center justify-center p-8">
              <PixelWeatherCard />
            </div>
          }
          code={`// You'll need these files:
// 1. Copy pixel-weather-card.tsx
// 2. Copy the AnimatedCloud component from animated-cloud.tsx
// 3. Copy icons/index.tsx for the export

import { PixelWeatherCard } from "@/components/ui/pixel-weather-card";

export default function Example() {
  return (
    <div className="flex items-center justify-center p-8">
      <PixelWeatherCard />
    </div>
  );
}`}
        />

        {/* Different Temperatures */}
        <ComponentPreview
          title="Different Temperatures"
          description="Various temperature displays with dot-matrix numbers"
          preview={
            <div className="flex items-center justify-center gap-6 p-8 flex-wrap">
              <PixelWeatherCard temperature={5} />
              <PixelWeatherCard temperature={23} />
              <PixelWeatherCard temperature={-2} />
            </div>
          }
          code={`// Requires: pixel-weather-card.tsx + AnimatedCloud component
import { PixelWeatherCard } from "@/components/ui/pixel-weather-card";

export default function Example() {
  return (
    <div className="flex gap-6 p-8">
      <PixelWeatherCard temperature={5} />
      <PixelWeatherCard temperature={23} />
      <PixelWeatherCard temperature={-2} />
    </div>
  );
}`}
        />

        {/* Different Conditions */}
        <ComponentPreview
          title="Weather Conditions"
          description="Different weather condition labels with animated icons"
          preview={
            <div className="flex items-center justify-center gap-4 p-8 flex-wrap">
              <PixelWeatherCard condition="showers" temperature={14} />
              <PixelWeatherCard condition="sunny" temperature={25} />
              <PixelWeatherCard condition="cloudy" temperature={18} />
              <PixelWeatherCard condition="stormy" temperature={12} />
              <PixelWeatherCard condition="clear-night" temperature={16} />
            </div>
          }
          code={`// Requires: pixel-weather-card.tsx + animated icon components
import { PixelWeatherCard } from "@/components/ui/pixel-weather-card";

export default function Example() {
  return (
    <div className="flex gap-4 p-8 flex-wrap">
      <PixelWeatherCard condition="showers" temperature={14} />
      <PixelWeatherCard condition="sunny" temperature={25} />
      <PixelWeatherCard condition="cloudy" temperature={18} />
      <PixelWeatherCard condition="stormy" temperature={12} />
      <PixelWeatherCard condition="clear-night" temperature={16} />
    </div>
  );
}`}
        />

        {/* Clear Night Feature */}
        <ComponentPreview
          title="Clear Night Weather"
          description="Beautiful starry night sky with twinkling star animations - automatically adapts to your theme (light/dark mode)"
          preview={
            <div className="flex items-center justify-center gap-4 p-8 flex-wrap">
              <PixelWeatherCard condition="clear-night" temperature={12} />
              <PixelWeatherCard condition="clear-night" temperature={8} />
              <PixelWeatherCard condition="clear-night" temperature={-1} />
            </div>
          }
          code={`// Clear night automatically adapts to light/dark theme
import { PixelWeatherCard } from "@/components/ui/pixel-weather-card";

export default function Example() {
  return (
    <div className="flex gap-4 p-8 flex-wrap">
      <PixelWeatherCard condition="clear-night" temperature={12} />
      <PixelWeatherCard condition="clear-night" temperature={8} />
      <PixelWeatherCard condition="clear-night" temperature={-1} />
    </div>
  );
}`}
        />

        {/* Custom Styling */}
        <ComponentPreview
          title="Custom Styling"
          description="Customized colors and dimensions"
          preview={
            <div className="flex items-center justify-center gap-6 p-8">
              <PixelWeatherCard 
                temperature={22}
                condition="sunny"
                className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
              />
              <PixelWeatherCard 
                temperature={8}
                condition="stormy"
                className="bg-gradient-to-br from-slate-100 to-slate-200 border-slate-300"
              />
            </div>
          }
          code={`// Requires: pixel-weather-card.tsx + AnimatedCloud component
import { PixelWeatherCard } from "@/components/ui/pixel-weather-card";

export default function Example() {
  return (
    <div className="flex gap-6 p-8">
      <PixelWeatherCard 
        temperature={22}
        condition="sunny"
        className="bg-gradient-to-br from-blue-900 to-purple-900 border-2 border-blue-400"
      />
      <PixelWeatherCard 
        temperature={8}
        condition="stormy"
        className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-400"
      />
    </div>
  );
}`}
        />

      </div>

      {/* Installation Guide */}
      <div className="mt-12 space-y-6">
        <div className="p-6 bg-muted/50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">📦 Installation</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Copy the required files to your project. This component depends on the AnimatedCloud component.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold mb-2">1. Copy the main component file:</h3>
              <div className="text-xs bg-muted p-3 rounded border font-mono">
                src/components/ui/pixel-weather-card.tsx
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-2">2. Copy the AnimatedCloud dependency:</h3>
              <div className="text-xs bg-muted p-3 rounded border font-mono space-y-1">
                <div>src/components/ui/icons/animated-cloud.tsx</div>
                <div>src/components/ui/icons/index.tsx</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-2">3. Ensure you have the utility function:</h3>
              <div className="text-xs bg-muted p-3 rounded border font-mono">
                src/lib/utils.ts (contains the cn() function)
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-2">4. Install required dependencies:</h3>
              <div className="text-xs bg-muted p-3 rounded border font-mono">
                npm install clsx tailwind-merge
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-muted/50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">🛠️ Required utils.ts</h2>
          <p className="text-sm text-muted-foreground mb-4">
            If you don&apos;t have the cn() utility function, create this file:
          </p>
          
          <div className="bg-muted p-4 rounded border font-mono text-xs overflow-x-auto">
            <div className="text-muted-foreground mb-2">{/* src/lib/utils.ts */}</div>
            <div>import &#123; type ClassValue, clsx &#125; from &quot;clsx&quot;</div>
            <div>import &#123; twMerge &#125; from &quot;tailwind-merge&quot;</div>
            <div className="mt-2"></div>
            <div>export function cn(...inputs: ClassValue[]) &#123;</div>
            <div className="ml-4">return twMerge(clsx(inputs))</div>
            <div>&#125;</div>
          </div>
        </div>
        
        <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">🎨 Tailwind CSS Requirements</h2>
          <p className="text-sm text-blue-700 mb-4">
            This component uses standard Tailwind CSS animations. Ensure you have:
          </p>
          
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• <code className="bg-blue-100 px-1 rounded">animate-bounce</code> - For bouncing cloud animation</li>
            <li>• <code className="bg-blue-100 px-1 rounded">animate-pulse</code> - For pulsing cloud animation</li>
            <li>• Standard Tailwind utility classes for spacing, colors, and typography</li>
            <li>• CSS custom properties support (for theme colors)</li>
          </ul>
          
          <div className="mt-4 p-3 bg-blue-100 rounded border text-xs font-mono">
            <div className="text-blue-600 mb-1">{/* Ensure these work in your Tailwind setup: */}</div>
            <div>bg-card, text-foreground, border-border, text-accent</div>
          </div>
        </div>
        
        <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-green-800">⚛️ React & TypeScript</h2>
          <p className="text-sm text-green-700 mb-4">
            Component requirements and compatibility:
          </p>
          
          <ul className="text-sm text-green-700 space-y-1">
            <li>• <strong>React 18+</strong> - Uses &quot;use client&quot; directive</li>
            <li>• <strong>TypeScript</strong> - Fully typed with interfaces</li>
            <li>• <strong>Next.js compatible</strong> - Works with App Router</li>
            <li>• <strong>No external API calls</strong> - Pure client-side component</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 p-6 bg-muted/50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Features</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• **Animated cloud component** with smooth SVG animations</li>
          <li>• **Dynamic animations** that change based on weather condition</li>
          <li>• **Custom temperature display** using dot-matrix number patterns (0-9)</li>
          <li>• **Multiple weather conditions** (showers, sunny, cloudy, stormy)</li>
          <li>• **App theme integration** using CSS custom properties</li>
          <li>• **Responsive design** that works across different screen sizes</li>
          <li>• **Minimalist aesthetics** perfect for modern interfaces</li>
          <li>• **Degree symbol rendering** in dot-matrix style</li>
          <li>• **Theme-aware colors** with light/dark mode support</li>
          <li>• **Performance optimized** animations using CSS transforms</li>
        </ul>

        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="text-sm font-semibold text-yellow-800 mb-2">📋 Required Files to Copy</h3>
          <div className="text-xs text-yellow-700 space-y-1">
            <div>1. <code className="bg-yellow-100 px-1 rounded">pixel-weather-card.tsx</code> - Main component</div>
            <div>2. <code className="bg-yellow-100 px-1 rounded">icons/animated-cloud.tsx</code> - Animated cloud dependency</div>
            <div>3. <code className="bg-yellow-100 px-1 rounded">icons/index.tsx</code> - Export file</div>
            <div>4. <code className="bg-yellow-100 px-1 rounded">utils.ts</code> - cn() utility function</div>
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-sm font-semibold text-red-800 mb-2">🔧 Troubleshooting</h3>
          <div className="text-xs text-red-700 space-y-2">
            <div><strong>Import errors:</strong> Ensure all 4 files are copied and paths match your project structure</div>
            <div><strong>Animation not working:</strong> Check that Tailwind CSS is properly configured with animations enabled</div>
            <div><strong>Styling issues:</strong> Verify your project uses CSS custom properties for theming</div>
            <div><strong>TypeScript errors:</strong> Make sure you have @types/react installed</div>
          </div>
        </div>
      </div>
    </div>
  );
}