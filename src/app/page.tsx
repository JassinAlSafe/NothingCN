import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
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
  ExternalLink,
  Zap,
  CheckCircle,
  Globe,
} from "lucide-react";

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: "NothingCN - Creative Component Library",
  description:
    "Open source creative component library built with Next.js and React. Copy-paste ready components for modern web development. TypeScript-first, accessible, and production-ready.",
  keywords: [
    "React components",
    "Next.js",
    "UI library",
    "TypeScript",
    "Open source",
    "Creative components",
    "Web development",
  ],
  openGraph: {
    title: "NothingCN - Creative Component Library",
    description:
      "Open source creative component library built with Next.js and React. Copy-paste ready components for modern web development.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NothingCN Component Library Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NothingCN - Creative Component Library",
    description:
      "Open source creative component library built with Next.js and React. Copy-paste ready components for modern web development.",
    images: ["/og-image.png"],
  },
};

// Enhanced example code with better TypeScript types
const exampleButtonCode = `import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

interface ButtonExampleProps {
  className?: string;
}

export function ButtonExample({ className }: ButtonExampleProps) {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  )
}`;

// Enhanced features with better descriptions and metrics
const features = [
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Lightning Fast",
    description:
      "Built with Next.js 15, React 19, and Tailwind CSS 4 for blazing performance. Optimized for Core Web Vitals.",
    highlight: "Latest Tech",
    metrics: "98% Lighthouse Score",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Creative & Unique",
    description:
      "Stunning, eye-catching designs that make your projects stand out. Inspired by Nothing OS design language.",
    highlight: "Stand Out",
    metrics: "50+ Unique Components",
  },
  {
    icon: <Command className="h-6 w-6" />,
    title: "Developer Experience",
    description:
      "TypeScript-first, accessible components with comprehensive documentation and IntelliSense support.",
    highlight: "DX Focused",
    metrics: "100% TypeScript",
  },
  {
    icon: <Copy className="h-6 w-6" />,
    title: "Copy & Paste Ready",
    description:
      "Zero dependencies. Copy the code and paste directly into your project. No configuration needed.",
    highlight: "No Setup",
    metrics: "Zero Dependencies",
  },
];

// Enhanced stats with better visualization
const stats = [
  {
    number: "10+",
    label: "Components",
    icon: <Layers className="h-5 w-5" />,
    description: "Production-ready components",
  },
  {
    number: "10+",
    label: "Downloads",
    icon: <Download className="h-5 w-5" />,
    description: "Monthly downloads",
  },
  {
    number: "2+",
    label: "GitHub Stars",
    icon: <Star className="h-5 w-5" />,
    description: "Community support",
  },
  {
    number: "2+",
    label: "Developers",
    icon: <Users className="h-5 w-5" />,
    description: "Active users",
  },
];

// Enhanced testimonials with more details
const testimonials = [
  {
    content:
      "NothingCN components are absolutely stunning. They've transformed how our app looks and feels. The copy-paste approach saves hours of development time.",
    author: "Sarah Chen",
    role: "Frontend Developer",
    company: "TechCorp",
    avatar: "/avatars/sarah.jpg",
    rating: 5,
  },
  {
    content:
      "The copy-paste approach saves so much time. These components are production-ready out of the box with excellent TypeScript support.",
    author: "Alex Rodriguez",
    role: "Lead Engineer",
    company: "StartupXYZ",
    avatar: "/avatars/alex.jpg",
    rating: 5,
  },
  {
    content:
      "Finally, a component library that focuses on creativity without sacrificing accessibility. The documentation is top-notch.",
    author: "Jordan Kim",
    role: "Design Engineer",
    company: "DesignStudio",
    avatar: "/avatars/jordan.jpg",
    rating: 5,
  },
];

// FAQ section for better SEO and user experience
const faqs = [
  {
    question: "What is NothingCN?",
    answer:
      "NothingCN is an open-source creative component library built with Next.js and React. It provides copy-paste ready components with a unique design language inspired by Nothing OS.",
  },
  {
    question: "Do I need to install any dependencies?",
    answer:
      "No! NothingCN components are designed to be copy-pasted directly into your project. Just copy the code and paste it into your application.",
  },
  {
    question: "Are the components accessible?",
    answer:
      "Yes, all components are built with accessibility in mind, following WCAG guidelines and best practices for screen readers and keyboard navigation.",
  },
  {
    question: "Can I customize the components?",
    answer:
      "Absolutely! All components are fully customizable and built with Tailwind CSS. You can easily modify colors, spacing, and styling to match your brand.",
  },
];

// Loading component for better UX
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
    </div>
  );
}

// Enhanced Hero Section Component
function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <Badge
              variant="secondary"
              className="mb-8 bg-accent/10 text-accent border-accent/20 px-4 py-2 text-sm font-medium"
              role="status"
              aria-label="Open source project"
            >
              <Globe className="w-4 h-4 mr-2" />
              OPEN SOURCE
            </Badge>

            <h1
              id="hero-heading"
              className="font-ndot text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter leading-[0.8] drop-shadow-sm"
            >
              <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                Nothing
              </span>
              <span
                className="block bg-gradient-to-br from-accent via-accent to-accent/80 bg-clip-text text-transparent drop-shadow-lg"
                aria-label="CN"
              >
                CN
              </span>
            </h1>
          </div>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Creative components for modern web development.
            <br />
            <span className="font-semibold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Copy. Paste. Build.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 group"
              aria-label="Explore NothingCN components"
            >
              <Link href="/components">
                Explore Components
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-accent/20 hover:border-accent hover:bg-accent/5"
            >
              <Link href="/contribute" aria-label="Contribute to NothingCN">
                <Heart className="mr-2 h-4 w-4" />
                Contribute
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              asChild
              className="hover:bg-accent/5"
            >
              <Link
                href="https://github.com/JassinAlSafe/NothingCN"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View NothingCN on GitHub (opens in new tab)"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-accent/8 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent/4 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/3 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--accent)/0.02)_100%)]" />
      </div>
    </section>
  );
}

// Enhanced Stats Section Component
function StatsSection() {
  return (
    <section
      className="py-16 border-b border-border"
      aria-labelledby="stats-heading"
    >
      <div className="container mx-auto px-4">
        <h2 id="stats-heading" className="sr-only">
          Project Statistics
        </h2>
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
              <div
                className="text-2xl md:text-3xl font-bold mb-1"
                aria-label={`${stat.number} ${stat.label}`}
              >
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Enhanced Features Section Component
function FeaturesSection() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="features-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge
            variant="secondary"
            className="mb-4 bg-accent/10 text-accent border-accent/20"
          >
            Why Choose NothingCN
          </Badge>
          <h2
            id="features-heading"
            className="font-bold text-4xl md:text-6xl mb-6 tracking-tight"
          >
            Built for Modern
            <span className="block text-accent">Development</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Everything you need to create stunning, accessible interfaces that
            users love and developers enjoy building.
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
                  <Badge
                    variant="outline"
                    className="text-xs font-medium border-accent/20 text-accent"
                  >
                    {feature.highlight}
                  </Badge>
                </div>

                <h3 className="font-bold text-xl mb-3 transition-colors duration-300 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-accent group-hover:to-accent/80">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>

                <div className="flex items-center text-sm text-accent font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {feature.metrics}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/2 rounded-full blur-2xl" />
      </div>
    </section>
  );
}

// Enhanced Component Showcase Section
function ComponentShowcaseSection() {
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

        <div className="max-w-7xl mx-auto space-y-12">
          {/* Live Component Examples */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Button Component */}
            <Card className="border-2 border-border bg-gradient-to-br from-background to-muted/20 overflow-hidden group hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <CardHeader className="border-b border-border bg-gradient-to-r from-muted/50 to-accent/8">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold">
                      Button Component
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Versatile button variants for any interface
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
                    <Button className="bg-foreground text-background hover:bg-foreground/90">
                      Default
                    </Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button
                      variant="outline"
                      className="border-2 border-foreground"
                    >
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
              </CardContent>
            </Card>

            {/* Weather Card Component */}
            <Card className="border-2 border-border bg-gradient-to-br from-background to-muted/20 overflow-hidden group hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <CardHeader className="border-b border-border bg-gradient-to-r from-muted/50 to-accent/8">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold">
                      Pixel Weather Card
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Retro-style weather display with animations
                    </CardDescription>
                  </div>
                  <Badge className="bg-accent text-accent-foreground">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Animated
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8 flex justify-center">
                <Suspense fallback={<LoadingSpinner />}>
                  <div className="scale-75 transform">
                    <PixelWeatherCard temperature={22} condition="sunny" />
                  </div>
                </Suspense>
              </CardContent>
            </Card>
          </div>

          {/* Code Example */}
          <div className="animate-fade-in-up">
            <Card className="border-2 border-border bg-gradient-to-br from-background to-muted/20 overflow-hidden hover:border-accent/30 transition-all duration-300">
              <CardHeader className="border-b border-border bg-gradient-to-r from-muted/50 to-accent/8">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-bold">
                      Ready to Copy
                    </CardTitle>
                    <CardDescription>
                      Just copy and paste into your project
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-accent/20 text-accent"
                  >
                    <Code className="w-3 h-3 mr-1" />
                    TypeScript
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Suspense fallback={<LoadingSpinner />}>
                  <CodeBlock
                    code={exampleButtonCode}
                    language="tsx"
                    title="Button.tsx"
                  />
                </Suspense>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent/2 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/3 rounded-full blur-2xl" />
      </div>
    </section>
  );
}

// Enhanced Testimonials Section
function TestimonialsSection() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge
            variant="secondary"
            className="mb-4 bg-accent/10 text-accent border-accent/20"
          >
            Loved by Developers
          </Badge>
          <h2
            id="testimonials-heading"
            className="font-bold text-4xl md:text-6xl mb-6 tracking-tight"
          >
            What People
            <span className="block text-accent">Are Saying</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 border-border bg-gradient-to-br from-background to-muted/30 p-6 hover:border-accent/50 transition-all duration-300 group animate-slide-in hover:shadow-lg hover:shadow-accent/10 relative overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="mb-4 relative z-10">
                <div
                  className="flex items-center text-accent mb-2"
                  aria-label={`${testimonial.rating} star rating`}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
              </div>

              <div className="flex items-center space-x-3 relative z-10">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold group-hover:bg-accent/20 transition-colors duration-300">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/2 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-2xl" />
      </div>
    </section>
  );
}

// FAQ Section for better SEO
function FAQSection() {
  return (
    <section
      className="py-24 md:py-32 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge
            variant="secondary"
            className="mb-4 bg-accent/10 text-accent border-accent/20"
          >
            FAQ
          </Badge>
          <h2
            id="faq-heading"
            className="font-bold text-4xl md:text-6xl mb-6 tracking-tight"
          >
            Frequently Asked
            <span className="block text-accent">Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-2 border-border bg-gradient-to-br from-background to-muted/20 p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
            >
              <h3 className="font-bold text-lg mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                {faq.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/2 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-accent/3 rounded-full blur-2xl" />
      </div>
    </section>
  );
}

// Enhanced Contribution Section
function ContributionSection() {
  return (
    <section
      className="py-24 md:py-32 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"
      aria-labelledby="contribution-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-accent/10 text-accent border-accent/20"
          >
            Join Our Community
          </Badge>
          <h2
            id="contribution-heading"
            className="font-bold text-4xl md:text-6xl mb-6 tracking-tight"
          >
            Build The Future
            <span className="block text-accent">Together</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            NothingCN is built by developers, for developers. Join our growing
            community and help create the most creative component library on the
            web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="border-2 border-border hover:border-accent/50 transition-all duration-300 group bg-gradient-to-br from-background to-muted/20 hover:shadow-lg hover:shadow-green-500/10">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-green-500/20">
                <Code className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Create Components
              </CardTitle>
              <CardDescription>
                Build new creative components and expand the library
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-border hover:border-accent/50 transition-all duration-300 group bg-gradient-to-br from-background to-muted/20 hover:shadow-lg hover:shadow-blue-500/10">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-500/20">
                <Sparkles className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Improve Design
              </CardTitle>
              <CardDescription>
                Enhance existing components with better UX and aesthetics
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-border hover:border-accent/50 transition-all duration-300 group bg-gradient-to-br from-background to-muted/20 hover:shadow-lg hover:shadow-purple-500/10">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-purple-500/20">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Share Ideas
              </CardTitle>
              <CardDescription>
                Suggest new features, report bugs, and help the community
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 group"
          >
            <Link
              href="/contribute"
              aria-label="Start contributing to NothingCN"
            >
              <Heart className="mr-2 h-5 w-5" />
              Start Contributing
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Enhanced CTA Section
function CTASection() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          <Badge
            variant="secondary"
            className="mb-4 bg-accent/10 text-accent border-accent/20"
          >
            Ready to Build?
          </Badge>
          <h2
            id="cta-heading"
            className="font-bold text-4xl md:text-6xl mb-6 tracking-tight"
          >
            Start Building
            <span className="block text-accent">Amazing UIs</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8">
            Join thousands of developers who are creating stunning interfaces
            with NothingCN. Copy, paste, and customize to your heart&apos;s
            content.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 animate-glow group"
            >
              <Link href="/components" aria-label="Browse NothingCN components">
                Browse Components
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-accent/20 hover:border-accent hover:bg-accent/5"
            >
              <Link href="/contribute" aria-label="Contribute to NothingCN">
                <Heart className="mr-2 h-4 w-4" />
                Contribute
              </Link>
            </Button>
          </div>

          {/* Enhanced Quick Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Open Source</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>2+ GitHub Stars</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500" />
              <span>2+ Developers</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              <span>Zero Dependencies</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/12 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-accent/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent/8" />
      </div>
    </section>
  );
}

// Main Homepage Component
export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ComponentShowcaseSection />
      <TestimonialsSection />
      <FAQSection />
      <ContributionSection />
      <CTASection />
    </div>
  );
}
