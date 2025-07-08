"use client";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { 
  Star, 
  Plus, 
  Search,
  MessageSquare,
  ArrowLeft,
  Filter,
  ExternalLink,
  ThumbsUp,
  Lightbulb,
  Zap,
  Target,
  CheckCircle2
} from "lucide-react";

interface FeatureRequest {
  id: number;
  title: string;
  description: string;
  author: string;
  votes: number;
  comments: number;
  status: 'proposed' | 'in-progress' | 'completed' | 'planned';
  category: 'component' | 'theme' | 'feature' | 'docs';
  createdAt: string;
  labels: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const mockFeatureRequests: FeatureRequest[] = [
  {
    id: 1,
    title: "Interactive Data Visualization Components",
    description: "A comprehensive set of chart and graph components including line charts, bar charts, pie charts, and interactive data tables with sorting and filtering capabilities.",
    author: "data-enthusiast",
    votes: 127,
    comments: 23,
    status: 'planned',
    category: 'component',
    createdAt: '2024-01-15T10:30:00Z',
    labels: ['charts', 'data-viz', 'high-priority'],
    difficulty: 'advanced'
  },
  {
    id: 2,
    title: "Advanced Form Components Package",
    description: "Multi-step forms, form validation, file uploads, date pickers, and rich text editors. All with built-in accessibility and responsive design.",
    author: "form-master",
    votes: 89,
    comments: 16,
    status: 'in-progress',
    category: 'component',
    createdAt: '2024-01-12T14:20:00Z',
    labels: ['forms', 'validation', 'accessibility'],
    difficulty: 'intermediate'
  },
  {
    id: 3,
    title: "Cyberpunk Theme Variant",
    description: "A futuristic cyberpunk theme with neon colors, glitch effects, and sci-fi aesthetics. Perfect for gaming and tech-focused applications.",
    author: "cyber-designer",
    votes: 76,
    comments: 12,
    status: 'proposed',
    category: 'theme',
    createdAt: '2024-01-10T09:15:00Z',
    labels: ['theme', 'cyberpunk', 'neon'],
    difficulty: 'intermediate'
  },
  {
    id: 4,
    title: "Animation Library Integration",
    description: "Pre-built animations and micro-interactions for common UI patterns. Including hover effects, loading states, and page transitions.",
    author: "motion-lover",
    votes: 64,
    comments: 8,
    status: 'proposed',
    category: 'feature',
    createdAt: '2024-01-08T16:45:00Z',
    labels: ['animations', 'micro-interactions', 'UX'],
    difficulty: 'intermediate'
  },
  {
    id: 5,
    title: "Component Playground Documentation",
    description: "Interactive documentation with live code examples, prop controls, and real-time preview for all components.",
    author: "docs-contributor",
    votes: 52,
    comments: 15,
    status: 'in-progress',
    category: 'docs',
    createdAt: '2024-01-05T11:00:00Z',
    labels: ['documentation', 'playground', 'interactive'],
    difficulty: 'advanced'
  },
  {
    id: 6,
    title: "Mobile-Optimized Navigation Components",
    description: "Bottom navigation, drawer navigation, and mobile-first menu components with gesture support and smooth animations.",
    author: "mobile-dev",
    votes: 41,
    comments: 7,
    status: 'proposed',
    category: 'component',
    createdAt: '2024-01-03T08:30:00Z',
    labels: ['mobile', 'navigation', 'gestures'],
    difficulty: 'intermediate'
  },
  {
    id: 7,
    title: "AI-Powered Component Generator",
    description: "A tool that generates component code based on design descriptions or screenshots using AI assistance.",
    author: "ai-pioneer",
    votes: 38,
    comments: 19,
    status: 'proposed',
    category: 'feature',
    createdAt: '2024-01-01T12:00:00Z',
    labels: ['AI', 'code-generation', 'automation'],
    difficulty: 'advanced'
  },
  {
    id: 8,
    title: "Gaming UI Components",
    description: "HUD elements, health bars, inventory grids, and other gaming-specific UI components with pixel-perfect styling.",
    author: "game-dev",
    votes: 29,
    comments: 5,
    status: 'completed',
    category: 'component',
    createdAt: '2023-12-28T15:20:00Z',
    labels: ['gaming', 'HUD', 'pixel-art'],
    difficulty: 'intermediate'
  }
];

const categories = [
  { value: 'all', label: 'All Categories', icon: <Target className="w-4 h-4" /> },
  { value: 'component', label: 'Components', icon: <Zap className="w-4 h-4" /> },
  { value: 'theme', label: 'Themes', icon: <Star className="w-4 h-4" /> },
  { value: 'feature', label: 'Features', icon: <Lightbulb className="w-4 h-4" /> },
  { value: 'docs', label: 'Documentation', icon: <MessageSquare className="w-4 h-4" /> },
];

const statusConfig = {
  proposed: { label: 'Proposed', color: 'bg-blue-500/10 text-blue-600 border-blue-500/20' },
  planned: { label: 'Planned', color: 'bg-purple-500/10 text-purple-600 border-purple-500/20' },
  'in-progress': { label: 'In Progress', color: 'bg-orange-500/10 text-orange-600 border-orange-500/20' },
  completed: { label: 'Completed', color: 'bg-green-500/10 text-green-600 border-green-500/20' },
};

const difficultyConfig = {
  beginner: { label: 'Beginner', color: 'bg-green-500/10 text-green-600' },
  intermediate: { label: 'Intermediate', color: 'bg-yellow-500/10 text-yellow-600' },
  advanced: { label: 'Advanced', color: 'bg-red-500/10 text-red-600' },
};

function getTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  return `${Math.floor(diffInDays / 30)} months ago`;
}

export default function FeatureRequestsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("votes");
  const [, setShowNewRequestForm] = useState(false);
  const [votedRequests, setVotedRequests] = useState<Set<number>>(new Set());

  const handleVote = (requestId: number) => {
    setVotedRequests(prev => {
      const newSet = new Set(prev);
      if (newSet.has(requestId)) {
        newSet.delete(requestId);
      } else {
        newSet.add(requestId);
      }
      return newSet;
    });
  };

  const filteredRequests = mockFeatureRequests
    .filter(request => {
      const matchesSearch = request.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           request.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           request.labels.some(label => label.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || request.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'votes': return b.votes - a.votes;
        case 'recent': return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'comments': return b.comments - a.comments;
        default: return 0;
      }
    });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" asChild>
              <Link href="/contribute" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Contribute
              </Link>
            </Button>
          </div>
          
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              Community Driven
            </Badge>
            <h1 className="font-ndot text-5xl md:text-7xl font-bold tracking-tight">
              Feature
              <span className="block text-accent">Requests</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
              Share your ideas, vote on features, and help shape the future of NothingCN. 
              Every voice matters in our community-driven development process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => setShowNewRequestForm(true)}
              >
                <Plus className="mr-2 h-5 w-5" />
                Submit Request
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com/nothingcn/nothingcn/discussions" target="_blank">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join Discussion
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search requests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.value)}
                    className="flex items-center gap-2"
                  >
                    {category.icon}
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-background border border-border rounded-md px-3 py-2 text-sm"
              >
                <option value="votes">Most Voted</option>
                <option value="recent">Most Recent</option>
                <option value="comments">Most Discussed</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Requests Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredRequests.map((request) => (
              <Card key={request.id} className="border-2 border-border hover:border-accent/50 transition-all duration-300 group h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Badge className={statusConfig[request.status].color}>
                        {request.status === 'completed' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                        {statusConfig[request.status].label}
                      </Badge>
                      <Badge variant="outline" className={difficultyConfig[request.difficulty].color}>
                        {difficultyConfig[request.difficulty].label}
                      </Badge>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {request.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg font-bold group-hover:text-accent transition-colors line-clamp-2">
                    {request.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm leading-relaxed line-clamp-3">
                    {request.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {request.labels.slice(0, 3).map((label) => (
                      <Badge key={label} variant="secondary" className="text-xs">
                        {label}
                      </Badge>
                    ))}
                    {request.labels.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{request.labels.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4">
                      <Button
                        variant={votedRequests.has(request.id) ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleVote(request.id)}
                        className="flex items-center gap-1"
                      >
                        <ThumbsUp className="w-3 h-3" />
                        {request.votes + (votedRequests.has(request.id) ? 1 : 0)}
                      </Button>
                      
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MessageSquare className="w-3 h-3" />
                        {request.comments}
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      {getTimeAgo(request.createdAt)}
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    by <span className="font-medium">{request.author}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Community Impact</h3>
            <p className="text-muted-foreground">Your voice drives our development</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">
                {mockFeatureRequests.length}
              </div>
              <div className="text-sm text-muted-foreground">Total Requests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">
                {mockFeatureRequests.filter(r => r.status === 'completed').length}
              </div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">
                {mockFeatureRequests.filter(r => r.status === 'in-progress').length}
              </div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {mockFeatureRequests.reduce((sum, r) => sum + r.votes, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Votes</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Have an idea?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don&apos;t see your feature request? Submit a new one and get the community involved!
          </p>
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={() => setShowNewRequestForm(true)}
          >
            <Plus className="mr-2 h-5 w-5" />
            Submit New Request
          </Button>
        </div>
      </section>
    </div>
  );
}