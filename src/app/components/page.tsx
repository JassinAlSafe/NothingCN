import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Palette, Code, Copy, Zap } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Fast & Modern",
    description: "Built with Next.js 15 and React 19 for optimal performance.",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Creative Design",
    description: "Unique, visually stunning components that stand out.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Developer First",
    description: "TypeScript support, great DX, and comprehensive documentation.",
  },
  {
    icon: <Copy className="h-6 w-6" />,
    title: "Copy & Paste",
    description: "No installation required. Copy the code and paste it into your project.",
  },
];

const popularComponents = [
  {
    name: "Button",
    description: "Displays a button or a component that looks like a button.",
    href: "/components/button",
  },
  {
    name: "Card",
    description: "Displays a card with header, content, and footer.",
    href: "/components/card",
  },
  {
    name: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
    href: "/components/badge",
  },
  {
    name: "Code Block",
    description: "Displays syntax-highlighted code with copy functionality.",
    href: "/components/code-block",
  },
];

export default function ComponentsPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="space-y-8 text-center py-12">
        <div className="flex justify-center">
          <Badge className="bg-accent text-accent-foreground font-medium px-4 py-2 text-sm">
            NOTHINGCN COMPONENTS
          </Badge>
        </div>
        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tight font-ndot">
            Components
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Creative, accessible components built with Radix UI and Tailwind CSS. 
            Copy and paste into your apps. Open source and ready to use.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button asChild size="lg">
            <Link href="/components/button">
              Browse Components
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="https://github.com" target="_blank">
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight">Why Choose NothingCN?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built with modern web standards and developer experience in mind.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => (
            <Card key={index} className="group p-8 hover:border-accent/50 transition-colors">
              <CardHeader className="p-0">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Popular Components Section */}
      <div className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tight">Popular Components</h2>
          <p className="text-muted-foreground">
            Start with these frequently used components.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {popularComponents.map((component) => (
            <Card key={component.name} className="group hover:border-accent transition-colors relative p-8">
              <CardHeader className="p-0">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      {component.name}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {component.description}
                    </CardDescription>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </CardHeader>
              <Link href={component.href} className="absolute inset-0" />
            </Card>
          ))}
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="border-t-2 border-border pt-12">
        <div className="space-y-8 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight">Getting Started</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose a component from the sidebar to view detailed documentation, examples, and ready-to-copy code.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/components/installation">
                Installation Guide
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/components/typography">
                Typography
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
