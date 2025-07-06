import Link from "next/link";
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
import { ArrowRight, Github, Zap, Palette, Code, Copy } from "lucide-react";

const exampleButtonCode = `import { Button } from "@/components/ui/button"

export function ButtonExample() {
  return (
    <div className="flex items-center space-x-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  )
}`;

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Fast & Modern",
    description:
      "Built with Next.js 15 and React 19 for optimal performance and developer experience.",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Creative Design",
    description:
      "Unique, visually stunning components that stand out from the crowd.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Developer First",
    description:
      "TypeScript support, great DX, and comprehensive documentation.",
  },
  {
    icon: <Copy className="h-6 w-6" />,
    title: "Copy & Paste",
    description:
      "No installation required. Copy the code and paste it into your project.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-8 bg-accent text-accent-foreground border-0 px-4 py-2 text-sm font-medium">
                OPEN SOURCE
              </Badge>
              <h1 className="font-ndot text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter">
                Nothing
                <span className="block text-accent">CN</span>
              </h1>
            </div>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Creative components.
              <br />
              Copy. Paste. Build.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <Link href="/components">
                  Explore Components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-bold text-4xl md:text-6xl mb-6 tracking-tight">
              Why NothingCN?
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Everything you need to build creative, accessible components.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-border bg-background p-8 text-center hover:border-accent transition-all duration-300 group animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 mx-auto bg-accent text-accent-foreground rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-bold text-4xl md:text-6xl mb-6 tracking-tight">
              See It In Action
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Preview components with live examples and copy-ready code.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-2 border-border bg-background overflow-hidden">
              <CardHeader className="border-b border-border bg-muted/50">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold">Button Component</CardTitle>
                    <CardDescription className="mt-1">
                      Versatile button variants for any interface.
                    </CardDescription>
                  </div>
                  <Badge className="bg-accent text-accent-foreground">Live Preview</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div className="flex flex-wrap items-center gap-4">
                    <Button className="bg-foreground text-background hover:bg-foreground/90">Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline" className="border-2 border-foreground">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link" className="text-accent">Link</Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="animate-fade-in-up">
              <CodeBlock
                code={exampleButtonCode}
                language="tsx"
                title="Button.tsx"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="font-bold text-4xl md:text-6xl mb-6 tracking-tight">
              Start Building
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
              Join developers who are building with NothingCN.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-glow">
              <Link href="/components">
                Browse Components
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        {/* Background grid */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
        </div>
      </section>
    </div>
  );
}
