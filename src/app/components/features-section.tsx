import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Rocket,
  Sparkles,
  Command,
  Copy,
  CheckCircle,
  Zap,
  Terminal,
  Shield,
} from "lucide-react";

// Enhanced features focused on user benefits
const features = [
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Ship Faster",
    description:
      "Skip weeks of development time. Pre-built components mean you focus on your business logic, not recreating UI patterns.",
    highlight: "Save Time",
    metrics: "75% Faster Development",
    accent: "accent",
    delay: "0ms",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Stand Out",
    description:
      "Your projects will look unique and memorable. Nothing OS-inspired designs that stand out from typical Bootstrap and Material UI interfaces.",
    highlight: "Be Different",
    metrics: "Unique Visual Language",
    accent: "accent/80",
    delay: "150ms",
  },
  {
    icon: <Command className="h-6 w-6" />,
    title: "Just Works",
    description:
      "TypeScript support, accessibility built-in, and comprehensive docs. No guesswork, just productivity.",
    highlight: "Developer Joy",
    metrics: "Zero Configuration",
    accent: "accent/60",
    delay: "300ms",
  },
  {
    icon: <Copy className="h-6 w-6" />,
    title: "No Dependencies",
    description:
      "Copy, paste, customize. No complex installations or version conflicts. Your codebase stays clean and maintainable.",
    highlight: "Clean Code",
    metrics: "Zero Bundle Bloat",
    accent: "accent/40",
    delay: "450ms",
  },
];

export function FeaturesSection() {
  return (
    <section
      className="relative py-32 md:py-40 overflow-hidden"
      aria-labelledby="features-heading"
    >
      {/* Enhanced Nothing OS Background Pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, currentColor 0.4px, transparent 0.4px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/4 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/3 rounded-full blur-2xl animate-pulse delay-1000" />

        {/* Geometric accent lines */}
        <div className="absolute top-32 left-32 w-20 h-0.5 bg-gradient-to-r from-accent/30 to-transparent rotate-12 animate-pulse delay-500" />
        <div className="absolute bottom-32 right-32 w-24 h-0.5 bg-gradient-to-l from-accent/30 to-transparent -rotate-12 animate-pulse delay-1500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-in-up space-y-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-1.5">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <div className="w-1.5 h-1.5 bg-accent/70 rounded-full animate-pulse delay-200" />
              <div className="w-1 h-1 bg-accent/50 rounded-full animate-pulse delay-400" />
            </div>
            <Badge
              variant="secondary"
              className="bg-accent/10 text-accent border-accent/20 px-4 py-2 font-ndot tracking-wider"
            >
              Why Choose NothingCN
            </Badge>
            <div className="flex items-center space-x-1.5">
              <div className="w-1 h-1 bg-accent/50 rounded-full animate-pulse delay-600" />
              <div className="w-1.5 h-1.5 bg-accent/70 rounded-full animate-pulse delay-800" />
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-1000" />
            </div>
          </div>

          <h2
            id="features-heading"
            className="font-bold text-4xl md:text-6xl mb-6 tracking-tight font-ndot"
          >
            Why Developers
            <span className="block bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Choose NothingCN
            </span>
          </h2>

          <div className="space-y-4">
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground font-ndot leading-relaxed">
              Stop rebuilding the same components. Start shipping faster with components that users love and you&apos;ll actually enjoy using.
            </p>
            <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <Card
              key={`feature-${feature.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="relative border-2 border-border/50 bg-gradient-to-br from-background to-muted/20 p-8 hover:border-accent/50 transition-all duration-500 group animate-slide-in overflow-hidden backdrop-blur-sm"
              style={{ animationDelay: feature.delay }}
            >
              {/* Enhanced background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Geometric accent indicator */}
              <div
                className="absolute top-4 right-4 w-2 h-2 bg-accent/40 rounded-full animate-pulse"
                style={{ animationDelay: feature.delay }}
              />

              <div className="relative z-10 space-y-6">
                {/* Enhanced header */}
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300 border border-accent/20 shadow-lg">
                    {feature.icon}
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs font-medium border-accent/20 text-accent font-ndot tracking-wide"
                  >
                    {feature.highlight}
                  </Badge>
                </div>

                {/* Enhanced content */}
                <div className="space-y-4">
                  <h3 className="font-bold text-xl transition-colors duration-300 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-accent group-hover:to-accent/80 font-ndot tracking-wide">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed font-ndot">
                    {feature.description}
                  </p>

                  {/* Enhanced metrics with Nothing OS styling */}
                  <div className="flex items-center space-x-3 pt-2">
                    <div className="flex items-center text-sm text-accent font-medium font-ndot">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {feature.metrics}
                    </div>
                    <div className="h-4 w-px bg-accent/20" />
                    <div className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-accent/50 rounded-full animate-pulse" />
                      <div className="w-1 h-1 bg-accent/30 rounded-full animate-pulse delay-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced hover effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-accent/20 rounded-lg transition-all duration-500" />
            </Card>
          ))}
        </div>

        {/* Additional Nothing OS elements */}
        <div className="flex items-center justify-center space-x-8 mt-20 opacity-60">
          <div className="flex items-center space-x-2">
            <Terminal className="h-4 w-4 text-accent" />
            <span className="text-xs font-ndot text-muted-foreground tracking-wide">
              CLI TOOLS
            </span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-xs font-ndot text-muted-foreground tracking-wide">
              SECURE
            </span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center space-x-2">
            <Zap className="h-4 w-4 text-accent" />
            <span className="text-xs font-ndot text-muted-foreground tracking-wide">
              OPTIMIZED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
