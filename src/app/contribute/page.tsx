"use client";

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
import { 
  GitHubRepoStats, 
  TopContributors, 
  RecentActivity, 
  HelpWantedIssues 
} from "@/components/github-stats";
import { 
  GITHUB_REPO_URL, 
  GITHUB_FORK_URL, 
  GITHUB_NEW_ISSUE_URL 
} from "@/lib/github";
import { 
  Github, 
  Heart, 
  Star, 
  Users, 
  Code, 
  Lightbulb,
  Rocket,
  ExternalLink,
  Trophy,
  Target,
  Zap,
  Coffee,
  MessageSquare,
  BookOpen,
  ArrowRight,
  Bug,
  Palette,
  Clock,
  TrendingUp,
} from "lucide-react";

const contributionTypes = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Create Components",
    description: "Build new creative components following our design system and accessibility standards.",
    difficulty: "Intermediate",
    color: "blue",
    estimatedTime: "2-4 hours",
    examples: ["Button variants", "Card animations", "Form controls"]
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Design & Theming",
    description: "Enhance visual design, create new themes, or improve existing component aesthetics.",
    difficulty: "Beginner",
    color: "purple",
    estimatedTime: "1-2 hours",
    examples: ["Color palettes", "Animation tweaks", "Typography improvements"]
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Documentation",
    description: "Write guides, improve examples, or create tutorials for component usage.",
    difficulty: "Beginner",
    color: "green",
    estimatedTime: "30min-1 hour",
    examples: ["Usage examples", "Best practices", "Migration guides"]
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Feature Ideas",
    description: "Propose new components, suggest improvements, or provide feedback on existing features.",
    difficulty: "Any Level",
    color: "yellow",
    estimatedTime: "15-30 min",
    examples: ["Component requests", "UX improvements", "API suggestions"]
  }
];

const quickStartSteps = [
  {
    step: "1",
    title: "Fork & Clone",
    description: "Fork the repository and clone it to your local machine",
    action: "git clone https://github.com/YOUR_USERNAME/nothingcn.git"
  },
  {
    step: "2", 
    title: "Install Dependencies",
    description: "Set up the development environment",
    action: "npm install && npm run dev"
  },
  {
    step: "3",
    title: "Pick an Issue",
    description: "Browse open issues or create a new component",
    action: "Check 'good first issue' labels"
  },
  {
    step: "4",
    title: "Submit PR",
    description: "Create a pull request with your changes",
    action: "Follow our PR template and guidelines"
  }
];


export default function ContributePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              Join Our Community
            </Badge>
            <h1 className="font-ndot text-5xl md:text-7xl font-bold tracking-tight">
              Contribute to
              <span className="block text-accent">NothingCN</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
              Help build the most creative component library for modern web development. 
              From code to design, every contribution makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#quick-start">
                  <Rocket className="mr-2 h-4 w-4" />
                  Quick Start Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </section>

      {/* Real-time GitHub Stats Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              <TrendingUp className="w-3 h-3 mr-1" />
              Live GitHub Stats
            </Badge>
            <h3 className="text-2xl font-bold">Repository Activity</h3>
            <p className="text-muted-foreground">Real-time data from our GitHub repository</p>
          </div>
          <GitHubRepoStats />
        </div>
      </section>

      {/* Quick Win Section */}
      <section className="py-16 bg-accent/5 border-y border-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="h-6 w-6 text-accent" />
              <h2 className="text-3xl font-bold font-ndot">Quick Wins</h2>
              <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
                No Setup Required
              </Badge>
            </div>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Start contributing in under 5 minutes. These tasks require no technical setup.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Documentation Fix */}
            <Card className="group hover:border-accent/50 transition-all duration-300 relative overflow-hidden">
              <CardHeader className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500/10 text-blue-500 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <Badge variant="outline" className="text-xs">
                      1-2 min
                    </Badge>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 font-ndot">Fix Typos</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Spot a typo or unclear documentation? Click edit on any docs page and suggest improvements.
                </p>
                <div className="mt-4">
                  <Button asChild size="sm" variant="outline">
                    <Link href="/docs" className="text-xs">
                      Browse Docs
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>

            {/* Component Ideas */}
            <Card className="group hover:border-accent/50 transition-all duration-300 relative overflow-hidden">
              <CardHeader className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-500/10 text-purple-500 rounded-lg flex items-center justify-center">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <div>
                    <Badge variant="outline" className="text-xs">
                      2-3 min
                    </Badge>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 font-ndot">Suggest Ideas</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Have an idea for a new component? Share it in our feature requests. No coding required.
                </p>
                <div className="mt-4">
                  <Button asChild size="sm" variant="outline">
                    <Link href="/feature-requests" className="text-xs">
                      Share Ideas
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>

            {/* Report Issues */}
            <Card className="group hover:border-accent/50 transition-all duration-300 relative overflow-hidden">
              <CardHeader className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-500/10 text-orange-500 rounded-lg flex items-center justify-center">
                    <Bug className="h-5 w-5" />
                  </div>
                  <div>
                    <Badge variant="outline" className="text-xs">
                      3-5 min
                    </Badge>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 font-ndot">Report Bugs</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Found something broken? Help us improve by reporting issues with clear steps to reproduce.
                </p>
                <div className="mt-4">
                  <Button asChild size="sm" variant="outline">
                    <Link href={GITHUB_NEW_ISSUE_URL} target="_blank" rel="noopener noreferrer" className="text-xs">
                      Report Bug
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/3 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground font-ndot">
              💡 <strong>Just getting started?</strong> These contributions help you learn our workflow and build confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Contribution Types */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl mb-6 tracking-tight">
              Ways to
              <span className="block text-accent">Contribute</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Choose the type of contribution that matches your skills and interests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {contributionTypes.map((type, index) => (
              <Card key={index} className="border-2 border-border hover:border-accent/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-${type.color}-500/10 text-${type.color}-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {type.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {type.difficulty}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {type.estimatedTime}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-accent transition-colors">
                    {type.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-muted-foreground">Examples:</div>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section id="quick-start" className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              Get Started in Minutes
            </Badge>
            <h2 className="font-bold text-4xl md:text-5xl mb-6 tracking-tight">
              Quick Start
              <span className="block text-accent">Guide</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Follow these simple steps to make your first contribution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {quickStartSteps.map((step, index) => (
              <Card key={index} className="border-2 border-border bg-background relative group hover:border-accent/50 transition-all duration-300">
                <div className="absolute -top-4 left-6 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-lg font-bold group-hover:text-accent transition-colors">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <code className="text-xs font-mono text-muted-foreground">
                      {step.action}
                    </code>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-2 border-accent/20 hover:border-accent hover:bg-accent/5">
              <Link href="/docs/contributing" target="_blank" rel="noopener noreferrer">
                <BookOpen className="mr-2 h-4 w-4" />
                Read Full Contributing Guide
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Activity */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Top Contributors */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-2xl tracking-tight">Top Contributors</h3>
                <Badge className="bg-accent text-accent-foreground">
                  <Trophy className="w-3 h-3 mr-1" />
                  Leaderboard
                </Badge>
              </div>
              <TopContributors />
            </div>
            
            {/* Recent Activity */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-2xl tracking-tight">Recent Activity</h3>
                <Badge className="bg-accent text-accent-foreground">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Live
                </Badge>
              </div>
              <RecentActivity />
            </div>
            
            {/* Help Wanted Issues */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-2xl tracking-tight">Help Wanted</h3>
                <Badge variant="secondary" className="text-xs">
                  <Target className="w-3 h-3 mr-1" />
                  Good First Issues
                </Badge>
              </div>
              <HelpWantedIssues />
            </div>
          </div>
          
          {/* Central Community Button */}
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contribute/community">
                <Users className="mr-2 h-5 w-5" />
                Explore Full Community
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              View all contributors, activity, and issues in one place
            </p>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl mb-6 tracking-tight">
              Contributor
              <span className="block text-accent">Recognition</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              We celebrate every contribution and recognize our community members.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-orange-500/5">
              <CardHeader className="text-center">
                <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-yellow-600">Top Contributor</CardTitle>
                <CardDescription>
                  Monthly recognition for outstanding contributions
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
              <CardHeader className="text-center">
                <Zap className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-purple-600">Innovation Award</CardTitle>
                <CardDescription>
                  For creative and unique component contributions
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 border-green-500/20 bg-gradient-to-br from-green-500/5 to-blue-500/5">
              <CardHeader className="text-center">
                <Coffee className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-green-600">Community Helper</CardTitle>
                <CardDescription>
                  For helping other contributors and community support
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            <h2 className="font-bold text-4xl md:text-6xl mb-6 tracking-tight">
              Ready to
              <span className="block text-accent">Contribute?</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Join our growing community of developers and designers building the future of web components.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href={GITHUB_FORK_URL} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Fork Repository
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://discord.gg/nothingcn" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join Discord
                </Link>
              </Button>
            </div>
            
            <div className="pt-8 text-sm text-muted-foreground">
              <div className="flex flex-wrap justify-center items-center gap-6">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>Open Source</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span>Welcoming Community</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Quality First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </section>
    </div>
  );
}