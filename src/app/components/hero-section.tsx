import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Heart,
  ExternalLink,
  Globe,
  Zap,
  Code2,
} from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20"
      aria-labelledby="hero-heading"
    >
      {/* Enhanced Nothing OS Background Pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Primary background gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-accent/8 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/4 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/3 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Nothing OS dot matrix pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, currentColor 0.5px, transparent 0.5px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Geometric accent lines */}
        <div className="absolute top-20 left-20 w-24 h-0.5 bg-gradient-to-r from-accent to-transparent rotate-45 animate-pulse delay-300" />
        <div className="absolute bottom-20 right-20 w-32 h-0.5 bg-gradient-to-l from-accent to-transparent -rotate-45 animate-pulse delay-700" />
        <div className="absolute top-1/3 right-16 w-0.5 h-20 bg-gradient-to-b from-accent to-transparent animate-pulse delay-500" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--accent)/0.02)_100%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-10 animate-fade-in-up">
          {/* Enhanced Badge with Nothing OS styling */}
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              {/* Animated geometric indicators */}
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <div className="w-1.5 h-1.5 bg-accent/70 rounded-full animate-pulse delay-200" />
                <div className="w-1 h-1 bg-accent/50 rounded-full animate-pulse delay-400" />
              </div>

              <Badge
                variant="secondary"
                className="bg-accent/10 text-accent border-accent/20 px-6 py-3 text-sm font-medium font-ndot tracking-wider shadow-lg shadow-accent/10"
                role="status"
                aria-label="Open source project"
              >
                <Globe className="w-4 h-4 mr-3" />
                OPEN SOURCE
                <div className="ml-3 w-2 h-2 bg-accent rounded-full animate-ping" />
              </Badge>

              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-accent/50 rounded-full animate-pulse delay-600" />
                <div className="w-1.5 h-1.5 bg-accent/70 rounded-full animate-pulse delay-800" />
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-1000" />
              </div>
            </div>

            {/* Enhanced main title with Nothing OS styling */}
            <div className="relative">
              <h1
                id="hero-heading"
                className="font-ndot text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-wider leading-[0.8] drop-shadow-sm"
              >
                <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                  Nothing
                </span>
                <span
                  className="block bg-gradient-to-br from-accent via-accent to-accent/80 bg-clip-text text-transparent drop-shadow-lg relative"
                  aria-label="CN"
                >
                  CN
                  {/* Accent dot */}
                  <div className="absolute -top-4 -right-4 w-3 h-3 bg-accent rounded-full animate-pulse opacity-80" />
                </span>
              </h1>

              {/* Nothing OS accent lines */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4">
                <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-accent to-transparent" />
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-accent to-transparent" />
              </div>
            </div>
          </div>

          {/* Enhanced description with Nothing OS typography */}
          <div className="space-y-4">
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed font-ndot">
              Creative components for modern web development.
            </p>
            <p className="max-w-xl mx-auto text-base text-muted-foreground/80 font-ndot">
              <span className="font-semibold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent tracking-wide">
                Copy. Paste. Build.
              </span>
            </p>
          </div>

          {/* Enhanced action buttons with Nothing OS styling */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-foreground to-foreground/90 text-background hover:from-foreground/90 hover:to-foreground/80 group shadow-lg shadow-foreground/20 transition-all duration-300 px-8 py-6 font-ndot"
              aria-label="Explore NothingCN components"
            >
              <Link href="/components">
                <Code2 className="mr-3 h-5 w-5" />
                Explore Components
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-accent/30 hover:border-accent hover:bg-accent/10 px-8 py-6 font-ndot backdrop-blur-sm transition-all duration-300"
            >
              <Link href="/contribute" aria-label="Contribute to NothingCN">
                <Heart className="mr-3 h-5 w-5" />
                Contribute
                <Zap className="ml-3 h-4 w-4" />
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              asChild
              className="hover:bg-accent/10 px-8 py-6 font-ndot transition-all duration-300"
            >
              <Link
                href="https://github.com/JassinAlSafe/NothingCN"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View NothingCN on GitHub (opens in new tab)"
              >
                <ExternalLink className="mr-3 h-5 w-5" />
                GitHub
              </Link>
            </Button>
          </div>

          {/* Nothing OS stats preview */}
          <div className="flex items-center justify-center space-x-8 pt-8 opacity-70">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent/50 rounded-full animate-pulse" />
              <span className="text-xs font-ndot text-muted-foreground tracking-wide">
                10+ COMPONENTS
              </span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent/50 rounded-full animate-pulse delay-300" />
              <span className="text-xs font-ndot text-muted-foreground tracking-wide">
                PRODUCTION READY
              </span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent/50 rounded-full animate-pulse delay-600" />
              <span className="text-xs font-ndot text-muted-foreground tracking-wide">
                TYPESCRIPT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
