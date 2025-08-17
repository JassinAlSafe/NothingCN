"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Download, 
  Code, 
  Palette, 
  Eye, 
  Zap,
  ArrowRight 
} from "lucide-react";

const installationCode = `# Install dependencies
npm install @radix-ui/react-slot
npm install @radix-ui/react-tabs
npm install @radix-ui/react-icons
npm install class-variance-authority
npm install clsx
npm install tailwind-merge
npm install lucide-react
npm install prism-react-renderer`;

const usageCode = `import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function MyComponent() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>My Component</CardTitle>
        <CardDescription>
          This is a simple example using our components.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <Button>Click me</Button>
          <Badge>New</Badge>
        </div>
      </CardContent>
    </Card>
  )
}`;

const customizationCode = `// You can customize components by extending the variants
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const MyCustomButton = ({ className, variant, size, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

// Or create new variants
const customButtonVariants = cva(
  "base-button-styles",
  {
    variants: {
      variant: {
        ...buttonVariants.variants.variant,
        gradient: "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
      },
    },
  }
)`;

const sections = [
  { id: "introduction", title: "Introduction", icon: BookOpen },
  { id: "installation", title: "Installation", icon: Download },
  { id: "usage", title: "Usage", icon: Code },
  { id: "customization", title: "Customization", icon: Zap },
  { id: "theming", title: "Theming", icon: Palette },
  { id: "accessibility", title: "Accessibility", icon: Eye },
];

export default function DocsPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Table of Contents - Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Contents
              </h2>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="flex items-center w-full text-left px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors group"
                    >
                      <Icon className="w-4 h-4 mr-3 text-muted-foreground group-hover:text-accent-foreground" />
                      {section.title}
                      <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  );
                })}
              </nav>
            </div>
            
            {/* Quick Actions */}
            <div className="border-t pt-6">
              <h3 className="text-sm font-medium mb-3 text-muted-foreground">Quick Actions</h3>
              <div className="space-y-2">
                <a 
                  href="/components" 
                  className="flex items-center text-sm px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Code className="w-4 h-4 mr-2" />
                  Browse Components
                </a>
                <a 
                  href="/blocks" 
                  className="flex items-center text-sm px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  View Blocks
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-12">
          {/* Page Header */}
          <div className="space-y-6 border-b border-border pb-12">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-16 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
              <div className="space-y-2">
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Documentation
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  Learn how to use and customize our beautifully designed components. 
                  Built with accessibility in mind and ready for production.
                </p>
              </div>
            </div>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-accent/50">
                <Zap className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium text-sm">Copy & Paste</div>
                  <div className="text-xs text-muted-foreground">No installation required</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-accent/50">
                <Eye className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium text-sm">Accessible</div>
                  <div className="text-xs text-muted-foreground">Built with Radix UI</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-accent/50">
                <Palette className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium text-sm">Customizable</div>
                  <div className="text-xs text-muted-foreground">Full theme control</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <section id="introduction">
              <Card className="border-l-4 border-l-primary/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <BookOpen className="w-6 h-6 mr-3 text-primary" />
                    Introduction
                  </CardTitle>
                  <CardDescription className="text-base">
                    Welcome to our component library documentation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-base leading-relaxed">
                    This component library provides beautifully designed, accessible
                    components built with Radix UI primitives and styled with Tailwind
                    CSS. All components are fully customizable and follow modern React
                    patterns.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="px-3 py-1">TypeScript</Badge>
                    <Badge variant="secondary" className="px-3 py-1">Radix UI</Badge>
                    <Badge variant="secondary" className="px-3 py-1">Tailwind CSS</Badge>
                    <Badge variant="secondary" className="px-3 py-1">Accessible</Badge>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Installation */}
            <section id="installation">
              <Card className="border-l-4 border-l-blue-500/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Download className="w-6 h-6 mr-3 text-blue-500" />
                    Installation
                  </CardTitle>
                  <CardDescription className="text-base">
                    Get started by installing the required dependencies.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-base leading-relaxed">
                    Install the necessary dependencies for the components you want to
                    use:
                  </p>
                  <CodeBlock
                    code={installationCode}
                    language="bash"
                    title="Terminal"
                  />
                  <div className="bg-accent/50 p-4 rounded-lg border-l-4 border-l-yellow-500">
                    <p className="text-sm">
                      <strong>Pro tip:</strong> Then copy the component files into your project and update your
                      import paths. No additional configuration needed!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Usage */}
            <section id="usage">
              <Card className="border-l-4 border-l-green-500/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Code className="w-6 h-6 mr-3 text-green-500" />
                    Usage
                  </CardTitle>
                  <CardDescription className="text-base">
                    How to use the components in your project.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-base leading-relaxed">
                    Import and use the components in your React application:
                  </p>
                  <CodeBlock
                    code={usageCode}
                    language="tsx"
                    title="MyComponent.tsx"
                  />
                </CardContent>
              </Card>
            </section>

            {/* Customization */}
            <section id="customization">
              <Card className="border-l-4 border-l-purple-500/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Zap className="w-6 h-6 mr-3 text-purple-500" />
                    Customization
                  </CardTitle>
                  <CardDescription className="text-base">
                    How to customize and extend the components.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-base leading-relaxed">
                    All components are built with class-variance-authority and can be
                    easily customized:
                  </p>
                  <CodeBlock
                    code={customizationCode}
                    language="tsx"
                    title="CustomButton.tsx"
                  />
                  <p className="text-base leading-relaxed">
                    You can also override the default styles by passing custom
                    className props or modifying the component variants directly.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Theming */}
            <section id="theming">
              <Card className="border-l-4 border-l-orange-500/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Palette className="w-6 h-6 mr-3 text-orange-500" />
                    Theming
                  </CardTitle>
                  <CardDescription className="text-base">
                    How to customize the color scheme and theme.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-base leading-relaxed">
                    The components use CSS variables for theming. You can customize
                    the colors by modifying the CSS variables in your global CSS file.
                  </p>
                  <div className="space-y-4">
                    <p className="text-sm font-medium">Example theme variables:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-mono bg-accent/30 p-4 rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">--background:</span>
                        <span>0 0% 100%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">--foreground:</span>
                        <span>240 10% 3.9%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">--primary:</span>
                        <span>240 5.9% 10%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">--secondary:</span>
                        <span>240 4.8% 95.9%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Accessibility */}
            <section id="accessibility">
              <Card className="border-l-4 border-l-teal-500/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Eye className="w-6 h-6 mr-3 text-teal-500" />
                    Accessibility
                  </CardTitle>
                  <CardDescription className="text-base">
                    Our commitment to accessible design.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-base leading-relaxed">
                    All components are built with accessibility in mind:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Proper ARIA attributes and roles",
                      "Keyboard navigation support", 
                      "Screen reader compatibility",
                      "Focus management",
                      "Color contrast compliance",
                      "Semantic HTML structure"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-accent/30">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
