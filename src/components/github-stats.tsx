"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Star, 
  GitFork, 
  Users, 
  GitPullRequest, 
  AlertCircle,
  ExternalLink,
  TrendingUp,
  Activity,
  Github,
  Clock,
  MessageSquare
} from "lucide-react";
import { 
  getRepositoryStats,
  getTopContributors,
  getRecentCommits,
  getRecentPullRequests,
  getOpenIssues,
  getTimeAgo,
  formatCommitMessage,
  getContributionTypeFromCommit,
  proxyAvatarUrl,
  type GitHubContributor,
  type GitHubCommit,
  type GitHubPullRequest,
  type GitHubIssue,
  type GitHubRepoStats
} from "@/lib/github";

// Real-time repository statistics
export function GitHubRepoStats() {
  const [stats, setStats] = useState<GitHubRepoStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const repoStats = await getRepositoryStats();
        setStats(repoStats);
      } catch (error) {
        console.error('Failed to fetch repository stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
    // Refresh every 5 minutes
    const interval = setInterval(fetchStats, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="border border-border animate-pulse">
            <CardContent className="p-4 text-center">
              <div className="h-5 w-5 bg-muted rounded mx-auto mb-2" />
              <div className="h-6 w-12 bg-muted rounded mx-auto mb-1" />
              <div className="h-4 w-16 bg-muted rounded mx-auto" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!stats) return null;

  const statItems = [
    { icon: <Star className="h-5 w-5" />, value: stats.stargazers_count, label: "Stars", color: "text-yellow-500" },
    { icon: <GitFork className="h-5 w-5" />, value: stats.forks_count, label: "Forks", color: "text-blue-500" },
    { icon: <Users className="h-5 w-5" />, value: stats.watchers_count, label: "Watchers", color: "text-green-500" },
    { icon: <AlertCircle className="h-5 w-5" />, value: stats.open_issues_count, label: "Issues", color: "text-orange-500" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {statItems.map((item, index) => (
        <Card key={index} className="border border-border hover:border-accent/50 transition-all duration-300 group">
          <CardContent className="p-4 text-center">
            <div className={`${item.color} flex justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
              {item.icon}
            </div>
            <div className="text-2xl font-bold mb-1">{item.value.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">{item.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Top contributors leaderboard
export function TopContributors() {
  const [contributors, setContributors] = useState<GitHubContributor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContributors() {
      try {
        const topContributors = await getTopContributors(8);
        setContributors(topContributors);
      } catch (error) {
        console.error('Failed to fetch contributors:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchContributors();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center space-x-3 animate-pulse">
            <div className="w-10 h-10 bg-muted rounded-full" />
            <div className="flex-1">
              <div className="h-4 w-24 bg-muted rounded mb-1" />
              <div className="h-3 w-16 bg-muted rounded" />
            </div>
            <div className="h-6 w-12 bg-muted rounded" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {contributors.map((contributor, index) => (
        <div key={contributor.id} className="flex items-center space-x-3 group hover:bg-muted/30 p-2 rounded-lg transition-colors">
          <div className="relative">
            <Avatar className="w-10 h-10 group-hover:scale-110 transition-transform duration-300">
              <AvatarImage src={proxyAvatarUrl(contributor.avatar_url)} alt={contributor.login} />
              <AvatarFallback>{contributor.login.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            {index < 3 && (
              <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold
                ${index === 0 ? 'bg-yellow-500 text-yellow-900' : ''}
                ${index === 1 ? 'bg-gray-400 text-gray-900' : ''}
                ${index === 2 ? 'bg-orange-600 text-orange-100' : ''}
              `}>
                {index + 1}
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <Link 
                href={contributor.html_url} 
                target="_blank"
                className="font-medium text-sm hover:text-accent transition-colors"
              >
                {contributor.name || contributor.login}
              </Link>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {contributor.bio && (
              <p className="text-xs text-muted-foreground truncate">{contributor.bio}</p>
            )}
          </div>
          <Badge variant="secondary" className="text-xs">
            {contributor.contributions} commits
          </Badge>
        </div>
      ))}
    </div>
  );
}

// Recent activity feed
export function RecentActivity() {
  const [commits, setCommits] = useState<GitHubCommit[]>([]);
  const [pullRequests, setPullRequests] = useState<GitHubPullRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchActivity() {
      try {
        const [recentCommits, recentPRs] = await Promise.all([
          getRecentCommits(5),
          getRecentPullRequests(3)
        ]);
        setCommits(recentCommits);
        setPullRequests(recentPRs);
      } catch (error) {
        console.error('Failed to fetch recent activity:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchActivity();
    // Refresh every 2 minutes
    const interval = setInterval(fetchActivity, 2 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-start space-x-3 animate-pulse">
            <div className="w-8 h-8 bg-muted rounded-full" />
            <div className="flex-1">
              <div className="h-4 w-3/4 bg-muted rounded mb-1" />
              <div className="h-3 w-1/2 bg-muted rounded" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'feature': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'fix': return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'docs': return <MessageSquare className="w-4 h-4 text-blue-500" />;
      default: return <Activity className="w-4 h-4 text-accent" />;
    }
  };

  // Combine and sort activities by date
  const activities = [
    ...commits.map(commit => ({
      type: 'commit' as const,
      data: commit,
      date: commit.commit.author.date,
    })),
    ...pullRequests.map(pr => ({
      type: 'pullrequest' as const,
      data: pr,
      date: pr.updated_at,
    })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4);

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-start space-x-3 group hover:bg-muted/30 p-2 rounded-lg transition-colors">
          <div className="relative">
            <Avatar className="w-8 h-8 group-hover:scale-110 transition-transform duration-300">
              {activity.type === 'commit' && activity.data.author ? (
                <AvatarImage src={proxyAvatarUrl(activity.data.author.avatar_url)} alt={activity.data.author.login} />
              ) : activity.type === 'pullrequest' ? (
                <AvatarImage src={proxyAvatarUrl(activity.data.user.avatar_url)} alt={activity.data.user.login} />
              ) : null}
              <AvatarFallback>
                {activity.type === 'commit' 
                  ? (activity.data.author?.login || 'U').slice(0, 2).toUpperCase()
                  : activity.data.user.login.slice(0, 2).toUpperCase()
                }
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-background rounded-full flex items-center justify-center border border-border">
              {activity.type === 'commit' ? (
                getActivityIcon(getContributionTypeFromCommit(activity.data.commit.message))
              ) : (
                <GitPullRequest className="w-3 h-3 text-purple-500" />
              )}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <span className="font-medium text-sm">
                {activity.type === 'commit' 
                  ? (activity.data.author?.login || activity.data.commit.author.name)
                  : activity.data.user.login
                }
              </span>
              <Badge variant="outline" className="text-xs">
                {activity.type === 'commit' ? 'commit' : 'PR'}
              </Badge>
            </div>
            <Link 
              href={activity.data.html_url} 
              target="_blank"
              className="text-sm text-muted-foreground hover:text-accent transition-colors block"
            >
              {activity.type === 'commit' 
                ? formatCommitMessage(activity.data.commit.message)
                : activity.data.title
              }
            </Link>
            <div className="flex items-center space-x-2 mt-1">
              <Clock className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                {getTimeAgo(activity.date)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Open issues that need help
export function HelpWantedIssues() {
  const [issues, setIssues] = useState<GitHubIssue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchIssues() {
      try {
        const openIssues = await getOpenIssues(5);
        setIssues(openIssues);
      } catch (error) {
        console.error('Failed to fetch issues:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchIssues();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="border border-border animate-pulse">
            <CardContent className="p-4">
              <div className="h-4 w-3/4 bg-muted rounded mb-2" />
              <div className="h-3 w-1/2 bg-muted rounded mb-2" />
              <div className="flex space-x-2">
                <div className="h-5 w-16 bg-muted rounded" />
                <div className="h-5 w-12 bg-muted rounded" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {issues.map((issue) => (
        <Card key={issue.id} className="border border-border hover:border-accent/50 transition-all duration-300 group">
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-2">
              <Link 
                href={issue.html_url} 
                target="_blank"
                className="font-medium text-sm hover:text-accent transition-colors group-hover:underline"
              >
                {issue.title}
              </Link>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="flex items-center space-x-2 mb-3">
              <Avatar className="w-6 h-6">
                <AvatarImage src={proxyAvatarUrl(issue.user.avatar_url)} alt={issue.user.login} />
                <AvatarFallback>{issue.user.login.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">
                by {issue.user.login} • {getTimeAgo(issue.created_at)}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-2">
              {issue.labels.map((label) => (
                <Badge 
                  key={label.name} 
                  variant="secondary" 
                  className="text-xs"
                  style={{ backgroundColor: `#${label.color}20`, color: `#${label.color}` }}
                >
                  {label.name}
                </Badge>
              ))}
            </div>
            
            {issue.comments > 0 && (
              <div className="flex items-center text-xs text-muted-foreground">
                <MessageSquare className="w-3 h-3 mr-1" />
                {issue.comments} comment{issue.comments !== 1 ? 's' : ''}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
      
      <div className="text-center pt-4">
        <Button variant="outline" asChild>
          <Link href="https://github.com/nothingcn/nothingcn/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22" target="_blank">
            <Github className="mr-2 h-4 w-4" />
            View All Issues
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}