import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";

const popularComponents = [
  {
    name: "Button",
    description: "Displays a button or a component that looks like a button.",
    href: "/components/button",
    isNew: false,
  },
  {
    name: "Card",
    description: "Displays a card with header, content, and footer.",
    href: "/components/card",
    isNew: false,
  },
  {
    name: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
    href: "/components/badge",
    isNew: false,
  },
  {
    name: "Code Block",
    description: "Displays syntax-highlighted code with copy functionality.",
    href: "/components/code-block",
    isNew: false,
  },
  {
    name: "Accordion",
    description: "A vertically stacked set of interactive headings.",
    href: "/components/accordion",
    isNew: true,
  },
  {
    name: "Alert",
    description: "Displays a callout for user attention.",
    href: "/components/alert",
    isNew: true,
  },
];

export default function ComponentsPage() {
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
            <h1 className="text-5xl font-bold tracking-tight font-ndot">
              Components
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-ndot">
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
            <div className="grid gap-4 md:grid-cols-2">
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
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* Component Grid */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight font-ndot">Browse Components</h2>
          <p className="text-muted-foreground font-ndot">
            Click on any component to view examples and copy the code.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popularComponents.map((component) => (
            <Card key={component.name} className="group hover:border-accent/50 transition-all duration-300 relative overflow-hidden">
              <CardHeader className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg group-hover:text-accent transition-colors font-ndot">
                        {component.name}
                      </CardTitle>
                      {component.isNew && (
                        <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-600 border-green-500/20">
                          New
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-sm leading-relaxed font-ndot">
                      {component.description}
                    </CardDescription>
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