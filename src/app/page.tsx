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
import { PixelWeatherCard } from "@/components/ui/pixel-weather-card";
import { 
  ArrowRight, 
  Code, 
  Copy, 
  Star, 
  Download, 
  Users, 
  Sparkles,
  Eye,
  Heart,
  ChevronRight,
  Layers,
  Command,
  Rocket,
  ExternalLink
} from "lucide-react";

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
    icon: <Rocket className="h-6 w-6" />,
    title: "Lightning Fast",
    description:
      "Built with Next.js 15, React 19, and Tailwind CSS 4 for blazing performance.",
    highlight: "Latest Tech"
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Creative Components",
    description:
      "Unique, eye-catching designs that make your projects stand out from the crowd.",
    highlight: "Stand Out"
  },
  {
    icon: <Command className="h-6 w-6" />,
    title: "Developer Experience",
    description:
      "TypeScript-first, accessible components with comprehensive documentation.",
    highlight: "DX Focused"
  },
  {
    icon: <Copy className="h-6 w-6" />,
    title: "Copy & Paste Ready",
    description:
      "Zero dependencies. Copy the code and paste directly into your project.",
    highlight: "No Setup"
  },
];

const stats = [
  {
    number: "50+",
    label: "Components",
    icon: <Layers className="h-5 w-5" />
  },
  {
    number: "10k+",
    label: "Downloads",
    icon: <Download className="h-5 w-5" />
  },
  {
    number: "1k+",
    label: "GitHub Stars",
    icon: <Star className="h-5 w-5" />
  },
  {
    number: "500+",
    label: "Developers",
    icon: <Users className="h-5 w-5" />
  },
];

const testimonials = [
  {
    content: "NothingCN components are absolutely stunning. They&apos;ve transformed how our app looks and feels.",
    author: "Sarah Chen",
    role: "Frontend Developer",
    company: "TechCorp"
  },
  {
    content: "The copy-paste approach saves so much time. These components are production-ready out of the box.",
    author: "Alex Rodriguez",
    role: "Lead Engineer",
    company: "StartupXYZ"
  },
  {
    content: "Finally, a component library that focuses on creativity without sacrificing accessibility.",
    author: "Jordan Kim",
    role: "Design Engineer",
    company: "DesignStudio"
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
                <Link href="/contribute">
                  <Heart className="mr-2 h-4 w-4" />
                  Contribute
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center mb-2 text-accent group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              Why Choose NothingCN
            </Badge>
            <h2 className="font-bold text-4xl md:text-6xl mb-6 tracking-tight">
              Built for Modern
              <span className="block text-accent">Development</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Everything you need to create stunning, accessible interfaces that users love.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="relative border-2 border-border bg-gradient-to-br from-background to-muted/20 p-8 hover:border-accent/50 transition-all duration-500 group animate-slide-in overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      {feature.icon}
                    </div>
                    <Badge variant="outline" className="text-xs font-medium border-accent/20 text-accent">
                      {feature.highlight}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Component Showcase Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              Component Library
            </Badge>
            <h2 className="font-bold text-4xl md:text-6xl mb-6 tracking-tight">
              See It In
              <span className="block text-accent">Action</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Experience our components in action. Each one is crafted with attention to detail and ready to enhance your projects.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Multiple Component Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Button Component */}
              <Card className="border-2 border-border bg-background overflow-hidden group hover:border-accent/50 transition-all duration-300">
                <CardHeader className="border-b border-border bg-gradient-to-r from-muted/50 to-accent/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold">Button Component</CardTitle>
                      <CardDescription className="mt-1">
                        Versatile button variants for any interface.
                      </CardDescription>
                    </div>
                    <Badge className="bg-accent text-accent-foreground">
                      <Eye className="w-3 h-3 mr-1" />
                      Live
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <Button className="bg-foreground text-background hover:bg-foreground/90">Default</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline" className="border-2 border-foreground">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Weather Card Component */}
              <Card className="border-2 border-border bg-background overflow-hidden group hover:border-accent/50 transition-all duration-300">
                <CardHeader className="border-b border-border bg-gradient-to-r from-muted/50 to-accent/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold">Pixel Weather Card</CardTitle>
                      <CardDescription className="mt-1">
                        Retro-style weather display with animations.
                      </CardDescription>
                    </div>
                    <Badge className="bg-accent text-accent-foreground">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Animated
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-8 flex justify-center">
                  <div className="scale-75 transform">
                    <PixelWeatherCard 
                      temperature={22}
                      condition="sunny"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Code Example */}
            <div className="animate-fade-in-up">
              <Card className="border-2 border-border bg-background overflow-hidden">
                <CardHeader className="border-b border-border bg-gradient-to-r from-muted/50 to-accent/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg font-bold">Ready to Copy</CardTitle>
                      <CardDescription>
                        Just copy and paste into your project
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="border-accent/20 text-accent">
                      <Code className="w-3 h-3 mr-1" />
                      TypeScript
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <CodeBlock
                    code={exampleButtonCode}
                    language="tsx"
                    title="Button.tsx"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              Loved by Developers
            </Badge>
            <h2 className="font-bold text-4xl md:text-6xl mb-6 tracking-tight">
              What People
              <span className="block text-accent">Are Saying</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="border-2 border-border bg-gradient-to-br from-background to-muted/20 p-6 hover:border-accent/50 transition-all duration-300 group animate-slide-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-4">
                  <div className="flex items-center text-accent mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-accent/5 via-transparent to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              Join Our Community
            </Badge>
            <h2 className="font-bold text-4xl md:text-6xl mb-6 tracking-tight">
              Build The Future
              <span className="block text-accent">Together</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              NothingCN is built by developers, for developers. Join our growing community and help create 
              the most creative component library on the web.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="border-2 border-border hover:border-accent/50 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Create Components</CardTitle>
                <CardDescription>
                  Build new creative components and expand the library
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 border-border hover:border-accent/50 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Improve Design</CardTitle>
                <CardDescription>
                  Enhance existing components with better UX and aesthetics
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 border-border hover:border-accent/50 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Share Ideas</CardTitle>
                <CardDescription>
                  Suggest new features, report bugs, and help the community
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contribute">
                <Heart className="mr-2 h-5 w-5" />
                Start Contributing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              Ready to Build?
            </Badge>
            <h2 className="font-bold text-4xl md:text-6xl mb-6 tracking-tight">
              Start Building
              <span className="block text-accent">Amazing UIs</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8">
              Join thousands of developers who are creating stunning interfaces with NothingCN. 
              Copy, paste, and customize to your heart&apos;s content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 animate-glow group">
                <Link href="/components">
                  Browse Components
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-2 border-accent/20 hover:border-accent hover:bg-accent/5">
                <Link href="/contribute">
                  <Heart className="mr-2 h-4 w-4" />
                  Contribute
                </Link>
              </Button>
            </div>
            
            {/* Quick stats */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>1k+ GitHub Stars</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span>500+ Developers</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
        </div>
      </section>
    </div>
  );
}
