import {
  Layers,
  Download,
  Star,
  Users,
  Code2,
  Shield,
  Sparkles,
} from "lucide-react";

// Enhanced stats with better visualization and Nothing OS styling
const stats = [
  {
    number: "25+",
    label: "Components",
    icon: <Layers className="h-5 w-5" />,
    description: "Production-ready components",
    accent: "accent",
    delay: "0ms",
  },
  {
    number: "1.2K+",
    label: "Downloads",
    icon: <Download className="h-5 w-5" />,
    description: "Monthly downloads",
    accent: "accent/80",
    delay: "150ms",
  },
  {
    number: "150+",
    label: "GitHub Stars",
    icon: <Star className="h-5 w-5" />,
    description: "Community support",
    accent: "accent/60",
    delay: "300ms",
  },
  {
    number: "50+",
    label: "Developers",
    icon: <Users className="h-5 w-5" />,
    description: "Active users",
    accent: "accent/40",
    delay: "450ms",
  },
];

export function StatsSection() {
  return (
    <section
      className="relative py-24 border-b border-border/50 overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Nothing OS Background Pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, currentColor 0.3px, transparent 0.3px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/3 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-1.5">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <div className="w-1.5 h-1.5 bg-accent/70 rounded-full animate-pulse delay-200" />
              <div className="w-1 h-1 bg-accent/50 rounded-full animate-pulse delay-400" />
            </div>
            <h2
              id="stats-heading"
              className="text-2xl font-bold font-ndot tracking-wider text-foreground/90"
            >
              BY THE NUMBERS
            </h2>
            <div className="flex items-center space-x-1.5">
              <div className="w-1 h-1 bg-accent/50 rounded-full animate-pulse delay-600" />
              <div className="w-1.5 h-1.5 bg-accent/70 rounded-full animate-pulse delay-800" />
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-1000" />
            </div>
          </div>

          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group text-center animate-fade-in-up"
              style={{ animationDelay: stat.delay }}
            >
              {/* Background card with Nothing OS styling */}
              <div className="relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5">
                {/* Geometric accent */}
                <div
                  className="absolute top-3 right-3 w-2 h-2 bg-accent/30 rounded-full animate-pulse"
                  style={{ animationDelay: stat.delay }}
                />

                {/* Icon with enhanced styling */}
                <div className="flex items-center justify-center mb-4">
                  <div
                    className={`w-12 h-12 bg-${stat.accent}/10 text-${stat.accent} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-${stat.accent}/20 transition-all duration-300 border border-${stat.accent}/20`}
                  >
                    {stat.icon}
                  </div>
                </div>

                {/* Number with Nothing OS typography */}
                <div
                  className="text-3xl md:text-4xl font-bold mb-2 font-ndot tracking-wide"
                  aria-label={`${stat.number} ${stat.label}`}
                >
                  <span
                    className={`bg-gradient-to-r from-${stat.accent} to-${stat.accent}/80 bg-clip-text text-transparent`}
                  >
                    {stat.number}
                  </span>
                </div>

                {/* Label */}
                <div className="text-sm text-foreground font-semibold mb-1 font-ndot tracking-wider uppercase">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-xs text-muted-foreground font-ndot">
                  {stat.description}
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Nothing OS elements */}
        <div className="flex items-center justify-center space-x-8 mt-16 opacity-60">
          <div className="flex items-center space-x-2">
            <Code2 className="h-4 w-4 text-accent" />
            <span className="text-xs font-ndot text-muted-foreground tracking-wide">
              TYPESCRIPT FIRST
            </span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-xs font-ndot text-muted-foreground tracking-wide">
              ACCESSIBLE
            </span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center space-x-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-xs font-ndot text-muted-foreground tracking-wide">
              MODERN DESIGN
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
