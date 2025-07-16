import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Sparkles,
  Users,
  Heart,
  ArrowRight,
  GitBranch,
  Star,
  Zap,
} from "lucide-react";

export function ContributionSection() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      aria-labelledby="contribution-heading"
    >
      {/* Nothing OS Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, currentColor 0.5px, transparent 0.5px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* Geometric accent patterns */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/25 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/15 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* Enhanced Nothing OS style header */}
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              {/* Animated geometric elements */}
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
                  <div
                    className="absolute -top-1.5 -left-1.5 w-5 h-5 border border-accent/30 rounded-full animate-spin"
                    style={{ animationDuration: "10s" }}
                  />
                </div>
                <div className="w-1.5 h-1.5 bg-accent/80 rounded-full animate-pulse delay-200" />
                <div className="w-1 h-1 bg-accent/60 rounded-full animate-pulse delay-400" />
              </div>

              <Badge
                variant="secondary"
                className="bg-accent/10 text-accent border-accent/30 font-ndot tracking-wider"
              >
                CONTRIBUTE
              </Badge>

              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-accent/60 rounded-full animate-pulse delay-600" />
                <div className="w-1.5 h-1.5 bg-accent/80 rounded-full animate-pulse delay-400" />
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse delay-100" />
                  <div
                    className="absolute -top-1.5 -left-1.5 w-5 h-5 border border-accent/30 rounded-full animate-spin"
                    style={{
                      animationDuration: "12s",
                      animationDirection: "reverse",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2
                id="contribution-heading"
                className="font-bold text-4xl md:text-6xl tracking-wider font-ndot bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent"
              >
                BUILD THE FUTURE
                <span className="block text-accent">TOGETHER</span>
              </h2>
              <div className="flex items-center justify-center space-x-3">
                <div className="h-0.5 w-20 bg-gradient-to-r from-accent to-accent/50" />
                <span className="text-xs text-accent tracking-widest font-ndot">
                  OPEN SOURCE
                </span>
                <div className="h-0.5 w-16 bg-gradient-to-r from-accent/50 to-transparent" />
              </div>
            </div>

            <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed font-ndot">
              NothingCN is built by developers, for developers. Join our growing
              community and help create the most creative component library on
              the web.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="border border-border/50 bg-card/80 backdrop-blur-sm hover:border-accent/50 transition-all duration-500 group hover:shadow-xl hover:shadow-green-500/10 relative overflow-hidden">
            {/* Nothing OS card styling */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />

            {/* Geometric accent elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-green-500/30 rounded-full group-hover:bg-green-500/60 transition-all duration-300" />
            <div className="absolute left-6 top-1/2 w-px h-8 bg-gradient-to-b from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />

            <CardHeader className="text-center relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/10 text-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 group-hover:from-green-500/30 group-hover:to-green-500/20 border border-green-500/20 group-hover:border-green-500/40">
                <Code className="h-7 w-7" />
              </div>
              <CardTitle className="text-xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent font-ndot tracking-wide">
                CREATE COMPONENTS
              </CardTitle>
              <CardDescription className="font-ndot text-base leading-relaxed">
                Build new creative components and expand the library with
                innovative designs
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border border-border/50 bg-card/80 backdrop-blur-sm hover:border-accent/50 transition-all duration-500 group hover:shadow-xl hover:shadow-blue-500/10 relative overflow-hidden">
            {/* Nothing OS card styling */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />

            {/* Geometric accent elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500/30 rounded-full group-hover:bg-blue-500/60 transition-all duration-300" />
            <div className="absolute left-6 top-1/2 w-px h-8 bg-gradient-to-b from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />

            <CardHeader className="text-center relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 group-hover:from-blue-500/30 group-hover:to-blue-500/20 border border-blue-500/20 group-hover:border-blue-500/40">
                <Sparkles className="h-7 w-7" />
              </div>
              <CardTitle className="text-xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent font-ndot tracking-wide">
                IMPROVE DESIGN
              </CardTitle>
              <CardDescription className="font-ndot text-base leading-relaxed">
                Enhance existing components with better UX and cutting-edge
                aesthetics
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border border-border/50 bg-card/80 backdrop-blur-sm hover:border-accent/50 transition-all duration-500 group hover:shadow-xl hover:shadow-purple-500/10 relative overflow-hidden">
            {/* Nothing OS card styling */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />

            {/* Geometric accent elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-purple-500/30 rounded-full group-hover:bg-purple-500/60 transition-all duration-300" />
            <div className="absolute left-6 top-1/2 w-px h-8 bg-gradient-to-b from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />

            <CardHeader className="text-center relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 group-hover:from-purple-500/30 group-hover:to-purple-500/20 border border-purple-500/20 group-hover:border-purple-500/40">
                <Users className="h-7 w-7" />
              </div>
              <CardTitle className="text-xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent font-ndot tracking-wide">
                SHARE IDEAS
              </CardTitle>
              <CardDescription className="font-ndot text-base leading-relaxed">
                Suggest new features, report bugs, and help grow the community
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Enhanced metrics and stats */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground font-ndot flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <GitBranch className="w-4 h-4 text-green-500" />
              <span>50+ Contributors</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>2K+ GitHub Stars</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-accent" />
              <span>100+ Components</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-accent-foreground group shadow-lg shadow-accent/20 font-ndot tracking-wide px-8 py-3 transition-all duration-300"
          >
            <Link
              href="/contribute"
              aria-label="Start contributing to NothingCN"
              rel="noopener noreferrer"
            >
              <Heart className="mr-3 h-5 w-5" />
              START CONTRIBUTING
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/10 rounded-lg animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Enhanced background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/6 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/4 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-accent/2 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "8s" }}
        />
      </div>
    </section>
  );
}
