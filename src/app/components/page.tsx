"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Copy, Check } from "lucide-react";
import { copyToClipboard } from "@/app/blocks/utils/code-actions";

// Enhanced component data with better descriptions and categorization
const enhancedComponents = [
  {
    name: "Button",
    description: "Interactive buttons with multiple variants, states, and size options.",
    href: "/components/button",
    category: "Interactive",
    isNew: false,
    isPopular: true,
    quickCode: `<Button variant="default" size="md">
  Click me
</Button>`,
  },
  {
    name: "Card",
    description: "Flexible container components for content organization and layout.",
    href: "/components/card",
    category: "Layout", 
    isNew: false,
    isPopular: true,
    quickCode: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>`,
  },
  {
    name: "Badge",
    description: "Small status indicators and labels with customizable styling.",
    href: "/components/badge",
    category: "Display",
    isNew: false,
    isPopular: true,
    quickCode: `<Badge variant="default">
  Badge text
</Badge>`,
  },
  {
    name: "Banner",
    description: "Flexible notification banners with Nothing OS-inspired design and persistent dismiss.",
    href: "/components/banner",
    category: "Feedback",
    isNew: true,
    isPopular: false,
    quickCode: `<Banner variant="nothing">
  🚀 System update available
</Banner>`,
  },
  {
    name: "Code Block",
    description: "Syntax-highlighted code display with one-click copy functionality.",
    href: "/components/code-block",
    category: "Display",
    isNew: false,
    isPopular: true,
    quickCode: `<CodeBlock 
  code="console.log('Hello World')" 
  language="javascript" 
/>`,
  },
  {
    name: "Accordion",
    description: "Collapsible content sections with smooth animations and keyboard navigation.",
    href: "/components/accordion",
    category: "Interactive",
    isNew: true,
    isPopular: false,
  },
  {
    name: "Alert",
    description: "Attention-grabbing notifications and callouts for important information.",
    href: "/components/alert",
    category: "Feedback",
    isNew: true,
    isPopular: false,
  },
  {
    name: "Input",
    description: "Form input fields with validation states and enhanced accessibility.",
    href: "/components/input",
    category: "Forms",
    isNew: false,
    isPopular: false,
  },
  {
    name: "Dialog",
    description: "Modal dialogs and overlays with focus management and animations.",
    href: "/components/dialog",
    category: "Overlay",
    isNew: false,
    isPopular: false,
  },
  {
    name: "Discussion Card",
    description: "Social media style cards for comments, posts, and conversations.",
    href: "/components/discussion-card",
    category: "Social",
    isNew: false,
    isPopular: false,
  },
  {
    name: "Pixel Weather Card",
    description: "Retro-styled weather display with pixelated graphics and animations.",
    href: "/components/pixel-weather-card",
    category: "Creative",
    isNew: false,
    isPopular: true,
    quickCode: `<PixelWeatherCard 
  temperature={22}
  condition="sunny"
  location="Nothing City"
/>`,
  },
  {
    name: "Pixel Forms",
    description: "Game-inspired form components with retro pixel aesthetics.",
    href: "/components/pixel-forms",
    category: "Creative",
    isNew: false,
    isPopular: false,
  },
  {
    name: "Nothing Calendar",
    description: "Beautiful calendar component with Nothing OS design language.",
    href: "/components/nothing-calendar",
    category: "Creative",
    isNew: false,
    isPopular: true,
    quickCode: `<NothingCalendar 
  mode="single"
  selected={new Date()}
/>`,
  },
];

export default function ComponentsPage() {
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const handleCopyCode = async (componentName: string, code: string) => {
    const success = await copyToClipboard(code);
    if (success) {
      setCopiedStates(prev => ({ ...prev, [componentName]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [componentName]: false }));
      }, 2000);
    }
  };

  return (
    <div className="space-y-12">
      {/* Detailed Introduction */}
      <div className="space-y-8 py-8">
        <div className="space-y-6 text-center">
          <div className="flex justify-center">
            <Badge className="bg-accent/10 text-accent border-accent/20 font-ndot tracking-wider">
              COMPONENT LIBRARY
            </Badge>
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-ndot">
              Components
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-ndot">
              Beautifully designed, accessible components that you can copy and paste into your apps. 
              Built with Radix UI and Tailwind CSS.
            </p>
          </div>
        </div>

        {/* Core Principle */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-medium text-foreground font-ndot">
            This is not a traditional component library. It&apos;s a collection of reusable components 
            that you can copy and paste into your apps.
          </p>
        </div>

        {/* What is NothingCN */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-ndot">What is NothingCN?</h2>
            <div className="space-y-3 text-muted-foreground font-ndot leading-relaxed">
              <p>
                NothingCN is a creative component library inspired by Nothing OS design language. 
                It provides a curated collection of copy-and-paste components that are:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Accessible:</strong> Built with accessibility in mind using Radix UI primitives</li>
                <li><strong>Customizable:</strong> Styled with Tailwind CSS and CSS custom properties</li>
                <li><strong>Modern:</strong> Built with Next.js 15, React 19, and TypeScript</li>
                <li><strong>Creative:</strong> Unique visual designs that stand out from typical UI libraries</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-ndot">Why not a package?</h2>
            <div className="space-y-3 text-muted-foreground font-ndot leading-relaxed">
              <p>
                The idea behind NothingCN is to give you ownership and control over your components. 
                When you need a component, you can:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Copy the component code directly into your project</li>
                <li>Customize it however you want</li>
                <li>Own the code without external dependencies</li>
                <li>No version conflicts or breaking changes</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-ndot">Key Features</h2>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-semibold font-ndot">🎨 Creative Design</h3>
                <p className="text-sm text-muted-foreground font-ndot">
                  Unique visual components inspired by Nothing OS aesthetics
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold font-ndot">♿ Accessible</h3>
                <p className="text-sm text-muted-foreground font-ndot">
                  Built with Radix UI primitives for keyboard navigation and screen readers
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold font-ndot">🔧 Customizable</h3>
                <p className="text-sm text-muted-foreground font-ndot">
                  Easy to modify with Tailwind CSS and CSS custom properties
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold font-ndot">📦 Zero Dependencies</h3>
                <p className="text-sm text-muted-foreground font-ndot">
                  Copy and paste without installing additional packages
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <Button asChild size="lg" className="font-ndot tracking-wide">
          <Link href="/components/installation">
            Installation Guide
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg" className="font-ndot tracking-wide">
          <Link 
            href="https://github.com/JassinAlSafe/NothingCN" 
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Popular Components Section */}
      <div className="space-y-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight font-ndot">Popular Components</h2>
            <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/20">
              Most Used
            </Badge>
          </div>
          <p className="text-muted-foreground font-ndot">
            Start with these frequently used components. Each includes examples, customization options, and copy-paste code.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {enhancedComponents.filter(comp => comp.isPopular).map((component) => (
            <Card key={component.name} className="group hover:border-accent/50 transition-all duration-300 relative overflow-hidden">
              <CardHeader className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <CardTitle className="text-lg group-hover:text-accent transition-colors font-ndot">
                        {component.name}
                      </CardTitle>
                      {component.isNew && (
                        <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-600 border-green-500/20">
                          New
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs text-muted-foreground border-border">
                        {component.category}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm leading-relaxed font-ndot">
                      {component.description}
                    </CardDescription>
                    {component.quickCode && (
                      <div className="flex items-center gap-2 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleCopyCode(component.name, component.quickCode!);
                          }}
                          className="text-xs h-7 px-2 relative z-10"
                        >
                          {copiedStates[component.name] ? (
                            <>
                              <Check className="h-3 w-3 mr-1" />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3 mr-1" />
                              Copy
                            </>
                          )}
                        </Button>
                        <span className="text-xs text-muted-foreground font-ndot">Quick copy</span>
                      </div>
                    )}
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                </div>
              </CardHeader>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Link href={component.href} className="absolute inset-0" />
            </Card>
          ))}
        </div>
      </div>

      {/* All Components Section */}
      <div className="space-y-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight font-ndot">All Components</h2>
            <Badge variant="outline" className="text-xs">
              {enhancedComponents.length} Components
            </Badge>
          </div>
          <p className="text-muted-foreground font-ndot">
            Complete collection of NothingCN components organized by category and use case.
          </p>
        </div>
        
        {/* Components by Category */}
        {['Interactive', 'Creative', 'Layout', 'Display', 'Forms', 'Feedback', 'Overlay', 'Social'].map(category => {
          const categoryComponents = enhancedComponents.filter(comp => comp.category === category);
          if (categoryComponents.length === 0) return null;
          
          return (
            <div key={category} className="space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold font-ndot">{category}</h3>
                <Badge variant="secondary" className="text-xs">
                  {categoryComponents.length}
                </Badge>
              </div>
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {categoryComponents.map((component) => (
                  <Card key={component.name} className="group hover:border-accent/50 transition-all duration-300 relative overflow-hidden">
                    <CardHeader className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base group-hover:text-accent transition-colors font-ndot">
                            {component.name}
                          </CardTitle>
                          {component.isNew && (
                            <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-600 border-green-500/20">
                              New
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-xs leading-relaxed font-ndot line-clamp-2">
                          {component.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Link href={component.href} className="absolute inset-0" />
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Getting Started Footer */}
      <div className="border-t border-border/50 pt-8">
        <div className="space-y-4 text-center">
          <p className="text-sm text-muted-foreground font-ndot">
            Select a component from the sidebar to view detailed documentation and examples.
          </p>
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground font-ndot">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-accent rounded-full" />
              Copy & Paste Ready
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              TypeScript Support
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              Accessible
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}