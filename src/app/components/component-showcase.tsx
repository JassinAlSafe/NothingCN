"use client";

import { useState, useMemo } from "react";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { PixelWeatherCard } from "@/components/ui/pixel-weather-card";
import {
  Search,
  Code,
  Copy,
  Eye,
  Monitor,
  Tablet,
  Smartphone,
  Check,
  ExternalLink,
  Play,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Enhanced component data with live examples and code
const showcaseComponents = [
  {
    id: "buttons",
    title: "Button Components",
    description: "Versatile button variants for any interface",
    category: "Interactive",
    tags: ["button", "cta", "forms", "navigation"],
    difficulty: "beginner",
    featured: true,
    component: (
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Button className="bg-foreground text-background hover:bg-foreground/90">
            Default
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline" className="border-2 border-foreground">
            Outline
          </Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
    ),
    code: `import { Button } from "@/components/ui/button"

export function ButtonShowcase() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  )
}`,
  },
  {
    id: "pixel-weather",
    title: "Pixel Weather Card",
    description: "Retro-style weather display with animations",
    category: "Data Display",
    tags: ["weather", "animation", "pixel", "retro"],
    difficulty: "intermediate",
    featured: true,
    component: (
      <div className="flex justify-center">
        <PixelWeatherCard temperature={22} condition="sunny" />
      </div>
    ),
    code: `import { PixelWeatherCard } from "@/components/ui/pixel-weather-card"

export function WeatherShowcase() {
  return (
    <div className="flex justify-center">
      <PixelWeatherCard temperature={22} condition="sunny" />
    </div>
  )
}`,
  },
  {
    id: "badges",
    title: "Badge Collection",
    description: "Status indicators and labels for content organization",
    category: "Data Display",
    tags: ["badge", "status", "labels", "metadata"],
    difficulty: "beginner",
    featured: false,
    component: (
      <div className="flex flex-wrap gap-3">
        <Badge className="bg-accent text-accent-foreground">Featured</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Error</Badge>
        <Badge className="bg-green-500 text-white">Success</Badge>
        <Badge className="bg-yellow-500 text-black">Warning</Badge>
      </div>
    ),
    code: `import { Badge } from "@/components/ui/badge"

export function BadgeShowcase() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge variant="default">Featured</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Error</Badge>
    </div>
  )
}`,
  },
  {
    id: "cards",
    title: "Card Layouts",
    description: "Flexible content containers with headers and actions",
    category: "Layout",
    tags: ["card", "container", "layout", "content"],
    difficulty: "beginner",
    featured: false,
    component: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-lg">Product Card</CardTitle>
            <CardDescription>A beautiful product showcase</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Perfect for displaying products, services, or any content.
            </p>
          </CardContent>
        </Card>
        <Card className="w-full border-accent/50 bg-accent/5">
          <CardHeader>
            <CardTitle className="text-lg text-accent">Featured Card</CardTitle>
            <CardDescription>Enhanced with accent colors</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Stand out with custom styling and branding.
            </p>
          </CardContent>
        </Card>
      </div>
    ),
    code: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CardShowcase() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Your content goes here...</p>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    id: "code-block",
    title: "Code Block",
    description: "Syntax-highlighted code display with copy functionality",
    category: "Content",
    tags: ["code", "syntax", "highlight", "copy"],
    difficulty: "intermediate",
    featured: false,
    component: (
      <div className="w-full max-w-md">
        <div className="border border-border rounded-lg bg-muted/50 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">example.tsx</span>
            <Badge variant="outline" className="text-xs">
              TypeScript
            </Badge>
          </div>
          <pre className="text-sm text-muted-foreground">
            <code>{`function hello() {
  return "Hello World!"
}`}</code>
          </pre>
        </div>
      </div>
    ),
    code: `import { CodeBlock } from "@/components/ui/code-block"

const exampleCode = \`function hello() {
  return "Hello World!"
}\`

export function CodeShowcase() {
  return (
    <CodeBlock
      code={exampleCode}
      language="tsx"
      title="example.tsx"
      showLineNumbers
    />
  )
}`,
  },
  {
    id: "interactive-demo",
    title: "Interactive Demo",
    description:
      "A complete mini-app showcasing multiple components working together",
    category: "Demo",
    tags: ["demo", "interactive", "showcase", "complete"],
    difficulty: "advanced",
    featured: true,
    component: (
      <div className="w-full max-w-md space-y-4">
        <Card className="border-2 border-accent/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Interactive Demo</CardTitle>
              <Badge className="bg-green-500 text-white">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></div>
                Live
              </Badge>
            </div>
            <CardDescription>Try the components in action</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button size="sm" className="flex-1">
                Like
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                Share
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge className="bg-accent text-accent-foreground">
                Featured
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function InteractiveDemo() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Interactive Demo</CardTitle>
        <CardDescription>Components working together</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Button size="sm">Like</Button>
          <Button size="sm" variant="outline">Share</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
        </div>
      </CardContent>
    </Card>
  )
}`,
  },
];

// Loading component
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
    </div>
  );
}

// Enhanced Component Showcase with interactive features
export function ComponentShowcase() {
  const [selectedComponent, setSelectedComponent] = useState(
    showcaseComponents[0]
  );
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [deviceView, setDeviceView] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copied, setCopied] = useState(false);

  // Filter components based on search and category
  const filteredComponents = useMemo(() => {
    return showcaseComponents.filter((component) => {
      const matchesCategory =
        selectedCategory === "All" || component.category === selectedCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        component.title.toLowerCase().includes(searchLower) ||
        component.description.toLowerCase().includes(searchLower) ||
        component.tags.some((tag) => tag.toLowerCase().includes(searchLower));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const categories = [
    "All",
    ...new Set(showcaseComponents.map((c) => c.category)),
  ];

  const handleCopy = async () => {
    if (!selectedComponent) return;
    try {
      await navigator.clipboard.writeText(selectedComponent.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const getDeviceStyles = () => {
    switch (deviceView) {
      case "tablet":
        return { width: "768px", maxHeight: "500px", overflow: "auto" };
      case "mobile":
        return { width: "375px", maxHeight: "500px", overflow: "auto" };
      default:
        return { width: "100%", minHeight: "400px" };
    }
  };

  return (
    <section
      className="py-24 md:py-32 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden"
      aria-labelledby="showcase-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge
            variant="secondary"
            className="mb-4 bg-accent/10 text-accent border-accent/20"
          >
            Component Library
          </Badge>
          <h2
            id="showcase-heading"
            className="font-bold text-4xl md:text-6xl mb-6 tracking-tight"
          >
            See It In
            <span className="block text-accent">Action</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Experience our components in action. Each one is crafted with
            attention to detail and ready to enhance your projects.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Search and Filter Controls */}
          <div className="mb-8 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-border rounded-xl bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-accent/20 focus:border-accent transition-all duration-300 text-base"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    selectedCategory === category
                      ? "bg-accent text-accent-foreground shadow-md shadow-accent/20"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Component List Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Components</h3>
                  <Badge variant="outline" className="text-xs">
                    {filteredComponents.length} available
                  </Badge>
                </div>

                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {filteredComponents.map((component) => (
                    <button
                      key={component.id}
                      onClick={() => setSelectedComponent(component)}
                      className={cn(
                        "w-full text-left p-4 rounded-lg border transition-all duration-200 group",
                        selectedComponent.id === component.id
                          ? "border-accent/50 bg-accent/5 shadow-md shadow-accent/5"
                          : "border-border bg-card hover:bg-card/80 hover:border-accent/30"
                      )}
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-semibold group-hover:text-accent transition-colors">
                            {component.title}
                          </h4>
                          {component.featured && (
                            <Badge className="bg-accent text-accent-foreground text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {component.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {component.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {component.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Preview Area */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Component Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-2xl font-bold">
                        {selectedComponent.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {selectedComponent.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {selectedComponent.difficulty}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground max-w-2xl leading-relaxed">
                      {selectedComponent.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {selectedComponent.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs bg-accent/5 text-accent/70 border-accent/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopy}
                      className="gap-2"
                    >
                      {copied ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      {copied ? "Copied!" : "Copy"}
                    </Button>

                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Open
                    </Button>
                  </div>
                </div>

                {/* Tab Controls */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center rounded-lg bg-muted p-1">
                    <button
                      onClick={() => setActiveTab("preview")}
                      className={cn(
                        "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                        activeTab === "preview"
                          ? "bg-background text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </button>
                    <button
                      onClick={() => setActiveTab("code")}
                      className={cn(
                        "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                        activeTab === "code"
                          ? "bg-background text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <Code className="h-4 w-4 mr-2" />
                      Code
                    </button>
                  </div>

                  {/* Device Controls for Preview */}
                  {activeTab === "preview" && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground mr-2">
                        Preview:
                      </span>
                      <div className="flex items-center rounded-lg border p-1">
                        <button
                          onClick={() => setDeviceView("desktop")}
                          className={cn(
                            "p-2 rounded-md transition-all duration-200",
                            deviceView === "desktop"
                              ? "bg-accent text-accent-foreground shadow-sm"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          )}
                        >
                          <Monitor className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => setDeviceView("tablet")}
                          className={cn(
                            "p-2 rounded-md transition-all duration-200",
                            deviceView === "tablet"
                              ? "bg-accent text-accent-foreground shadow-sm"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          )}
                        >
                          <Tablet className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => setDeviceView("mobile")}
                          className={cn(
                            "p-2 rounded-md transition-all duration-200",
                            deviceView === "mobile"
                              ? "bg-accent text-accent-foreground shadow-sm"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          )}
                        >
                          <Smartphone className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="border border-border rounded-lg overflow-hidden bg-card">
                  {activeTab === "preview" ? (
                    <div className="bg-gradient-to-br from-muted/30 to-muted/10 overflow-auto">
                      <div className="flex items-center justify-center p-4">
                        <div
                          className={cn(
                            "bg-background border rounded-lg shadow-sm transition-all duration-300",
                            deviceView !== "desktop" && "border-border"
                          )}
                          style={getDeviceStyles()}
                        >
                          <div
                            className={cn(
                              "h-full overflow-auto",
                              deviceView === "mobile" ? "p-4" : "p-8"
                            )}
                          >
                            <div
                              className={cn(
                                "h-full w-full",
                                deviceView === "desktop"
                                  ? "flex items-center justify-center"
                                  : "",
                                deviceView === "mobile" && "space-y-4"
                              )}
                            >
                              <div className="w-full">
                                <Suspense fallback={<LoadingSpinner />}>
                                  {selectedComponent.component}
                                </Suspense>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-[500px]">
                      <Suspense fallback={<LoadingSpinner />}>
                        <CodeBlock
                          code={selectedComponent.code}
                          language="tsx"
                          title={`${selectedComponent.title.replace(
                            /\s+/g,
                            ""
                          )}.tsx`}
                          showLineNumbers={true}
                          className="h-full"
                        />
                      </Suspense>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-border hover:border-accent/50 transition-all duration-300 group bg-gradient-to-br from-background to-muted/20">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Layers className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Browse All Components</CardTitle>
                <CardDescription>
                  Explore our complete library of production-ready components
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-border hover:border-accent/50 transition-all duration-300 group bg-gradient-to-br from-background to-muted/20">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">View Documentation</CardTitle>
                <CardDescription>
                  Detailed guides, examples, and API references
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-border hover:border-accent/50 transition-all duration-300 group bg-gradient-to-br from-background to-muted/20">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Try Building Blocks</CardTitle>
                <CardDescription>
                  Advanced component compositions and layouts
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent/2 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/3 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-2/3 right-1/3 w-64 h-64 bg-accent/1 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>
    </section>
  );
}
