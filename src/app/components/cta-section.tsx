import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  Heart,
  Star,
  Users,
  Zap,
  Code2,
  Sparkles,
  GitBranch,
} from "lucide-react";

export function CTASection() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Nothing OS Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-12"
          style={{
            backgroundImage:
              "radial-gradient(circle at 60% 40%, rgba(120, 119, 198, 0.4) 0%, transparent 50%), radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, currentColor 0.5px, transparent 0.5px)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* Enhanced geometric accent patterns */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/25 to-transparent" />

        {/* Diagonal accent lines */}
        <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-accent/30 to-transparent rotate-45 origin-left" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-px bg-gradient-to-r from-accent/20 to-transparent -rotate-45 origin-right" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          {/* Enhanced Nothing OS style header */}
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              {/* Complex animated geometric elements */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <div
                    className="absolute -top-2 -left-2 w-7 h-7 border border-accent/30 rounded-full animate-spin"
                    style={{ animationDuration: "15s" }}
                  />
                  <div
                    className="absolute -top-1 -left-1 w-5 h-5 border border-accent/20 rounded-full animate-ping"
                    style={{ animationDuration: "3s" }}
                  />
                </div>
                <div className="w-2 h-2 bg-accent/80 rounded-full animate-pulse delay-150" />
                <div className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-pulse delay-300" />
                <div className="w-1 h-1 bg-accent/40 rounded-full animate-pulse delay-450" />
              </div>

              <Badge
                variant="secondary"
                className="bg-accent/15 text-accent border-accent/40 font-ndot tracking-wider px-4 py-1.5"
              >
                READY TO BUILD?
              </Badge>

              <div className="flex items-center space-x-3">
                <div className="w-1 h-1 bg-accent/40 rounded-full animate-pulse delay-600" />
                <div className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-pulse delay-450" />
                <div className="w-2 h-2 bg-accent/80 rounded-full animate-pulse delay-300" />
                <div className="relative">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse delay-150" />
                  <div
                    className="absolute -top-2 -left-2 w-7 h-7 border border-accent/30 rounded-full animate-spin"
                    style={{
                      animationDuration: "12s",
                      animationDirection: "reverse",
                    }}
                  />
                  <div
                    className="absolute -top-1 -left-1 w-5 h-5 border border-accent/20 rounded-full animate-ping"
                    style={{ animationDuration: "2.5s", animationDelay: "1s" }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2
                id="cta-heading"
                className="font-bold text-4xl md:text-6xl tracking-wider font-ndot bg-gradient-to-r from-foreground via-foreground/95 to-foreground/75 bg-clip-text text-transparent"
              >
                START BUILDING
                <span className="block text-accent">AMAZING UIs</span>
              </h2>
              <div className="flex items-center justify-center space-x-3">
                <div className="h-0.5 w-24 bg-gradient-to-r from-accent to-accent/60" />
                <span className="text-xs text-accent tracking-widest font-ndot">
                  COPY • PASTE • CUSTOMIZE
                </span>
                <div className="h-0.5 w-20 bg-gradient-to-r from-accent/60 to-transparent" />
              </div>
            </div>

            <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed font-ndot">
              Join thousands of developers who are creating stunning interfaces
              with NothingCN. Copy, paste, and customize to your heart&apos;s
              content.
            </p>
          </div>

          {/* Enhanced action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-accent via-accent/95 to-accent/90 hover:from-accent/95 hover:via-accent/90 hover:to-accent/85 text-accent-foreground group shadow-xl shadow-accent/25 font-ndot tracking-wide px-8 py-4 transition-all duration-300 relative overflow-hidden"
            >
              <Link href="/components" aria-label="Browse NothingCN components">
                <Code2 className="mr-3 h-5 w-5" />
                BROWSE COMPONENTS
                <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/15 rounded-lg animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-accent/30 hover:border-accent hover:bg-accent/8 font-ndot tracking-wide px-8 py-4 transition-all duration-300 group backdrop-blur-sm"
            >
              <Link 
                href="/contribute" 
                aria-label="Contribute to NothingCN"
                rel="noopener noreferrer"
              >
                <Heart className="mr-3 h-5 w-5 group-hover:text-red-500 transition-colors duration-300" />
                CONTRIBUTE
                <Sparkles className="ml-3 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </Button>
          </div>

          {/* Enhanced Quick Stats with Nothing OS styling */}
          <div className="pt-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card/40 backdrop-blur-sm border border-border/30 hover:border-accent/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-500/10 text-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold font-ndot">OPEN SOURCE</div>
                  <div className="text-xs text-muted-foreground font-ndot">
                    MIT License
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card/40 backdrop-blur-sm border border-border/30 hover:border-accent/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 text-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-5 h-5" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold font-ndot">2K+ STARS</div>
                  <div className="text-xs text-muted-foreground font-ndot">
                    GitHub
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card/40 backdrop-blur-sm border border-border/30 hover:border-accent/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-500/10 text-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold font-ndot">100+ DEVS</div>
                  <div className="text-xs text-muted-foreground font-ndot">
                    Community
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card/40 backdrop-blur-sm border border-border/30 hover:border-accent/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 text-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold font-ndot">ZERO DEPS</div>
                  <div className="text-xs text-muted-foreground font-ndot">
                    Copy & Paste
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional community metrics */}
          <div className="pt-8">
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground font-ndot flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <GitBranch className="w-4 h-4 text-green-500" />
                <span>50+ Pull Requests</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-blue-500" />
                <span>100+ Components</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span>Production Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced background effects with more complexity */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-3/4 left-1/6 w-64 h-64 bg-accent/6 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "6s" }}
        />
        <div
          className="absolute top-1/6 right-1/6 w-72 h-72 bg-accent/4 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "8s" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/12 via-transparent to-accent/8" />
      </div>
    </section>
  );
}
