"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowLeft,
  Users,
  Activity,
  Target,
  Trophy,
  TrendingUp,
  ExternalLink,
  Github,
  MessageSquare,
  GitPullRequest,
  AlertCircle,
  Bug,
  Zap,
  Heart,
  Lightbulb,
} from "lucide-react";
import {
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
} from "@/lib/github";

// Security function to sanitize color values to prevent XSS
const sanitizeColor = (color: string): string => {
  // Only allow valid hex colors (6 characters, alphanumeric)
  if (/^[0-9A-Fa-f]{6}$/.test(color)) {
    return color;
  }
  // Fallback to neutral color if invalid
  return '6b7280'; // gray-500
};

export default function CommunityPage() {
  const [contributors, setContributors] = useState<GitHubContributor[]>([]);
  const [commits, setCommits] = useState<GitHubCommit[]>([]);
  const [pullRequests, setPullRequests] = useState<GitHubPullRequest[]>([]);
  const [issues, setIssues] = useState<GitHubIssue[]>([]);
  const [loading, setLoading] = useState(true);
  const [showMoreActivity, setShowMoreActivity] = useState(false);

  useEffect(() => {
    async function fetchCommunityData() {
      try {
        const [topContributors, recentCommits, recentPRs, openIssues] =
          await Promise.all([
            getTopContributors(12),
            getRecentCommits(15),
            getRecentPullRequests(10),
            getOpenIssues(20),
          ]);

        setContributors(topContributors);
        setCommits(recentCommits);
        setPullRequests(recentPRs);
        setIssues(openIssues);
      } catch (error) {
        console.error("Failed to fetch community data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCommunityData();
    // Refresh every 3 minutes
    const interval = setInterval(fetchCommunityData, 3 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "feature":
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case "fix":
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      case "docs":
        return <MessageSquare className="w-4 h-4 text-blue-500" />;
      default:
        return <Activity className="w-4 h-4 text-accent" />;
    }
  };

  const getIssueIcon = (labels: Array<{ name: string; color: string }>) => {
    const labelNames = labels.map((l) => l.name.toLowerCase());
    if (labelNames.includes("bug"))
      return <Bug className="w-4 h-4 text-red-500" />;
    if (labelNames.includes("enhancement"))
      return <Zap className="w-4 h-4 text-blue-500" />;
    if (labelNames.includes("good first issue"))
      return <Heart className="w-4 h-4 text-green-500" />;
    return <Lightbulb className="w-4 h-4 text-yellow-500" />;
  };

  // Combine and sort activities by date
  const allActivities = [
    ...commits.map((commit) => ({
      type: "commit" as const,
      data: commit,
      date: commit.commit.author.date,
    })),
    ...pullRequests.map((pr) => ({
      type: "pullrequest" as const,
      data: pr,
      date: pr.updated_at,
    })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const displayedActivities = showMoreActivity
    ? allActivities
    : allActivities.slice(0, 8);

  // Group activities by date for better organization
  const groupedActivities = displayedActivities.reduce((groups, activity) => {
    const date = new Date(activity.date).toDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(activity);
    return groups;
  }, {} as Record<string, typeof displayedActivities>);

  if (loading) {
    return (
      <div className="min-h-screen">
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-8">
              <Button variant="ghost" asChild className="mr-4">
                <Link href="/contribute">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Contribute
                </Link>
              </Button>
            </div>
            <div className="text-center space-y-6">
              <div className="h-8 w-32 bg-muted rounded mx-auto animate-pulse" />
              <div className="h-12 w-48 bg-muted rounded mx-auto animate-pulse" />
              <div className="h-6 w-96 bg-muted rounded mx-auto animate-pulse" />
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Button variant="ghost" asChild className="mr-4">
              <Link href="/contribute">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Contribute
              </Link>
            </Button>
          </div>

          <div className="text-center space-y-6">
            <Badge
              variant="secondary"
              className="bg-accent/10 text-accent border-accent/20"
            >
              <Users className="w-3 h-3 mr-1" />
              Community Hub
            </Badge>
            <h1 className="font-ndot text-4xl md:text-6xl font-bold tracking-tight">
              NothingCN
              <span className="block text-accent">Community</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Meet our contributors, see recent activity, and find ways to get
              involved. This is where the magic happens!
            </p>
          </div>
        </div>
      </section>

      {/* Community Content */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Top Contributors */}
            <div className="lg:col-span-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-2xl tracking-tight">
                  Top Contributors
                </h2>
                <Badge className="bg-accent text-accent-foreground">
                  <Trophy className="w-3 h-3 mr-1" />
                  {contributors.length}
                </Badge>
              </div>

              <div className="space-y-4">
                {contributors.map((contributor, index) => (
                  <div
                    key={contributor.id}
                    className="flex items-center space-x-3 group hover:bg-muted/30 p-3 rounded-lg transition-colors"
                  >
                    <div className="relative">
                      <Avatar className="w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                        <AvatarImage
                          src={proxyAvatarUrl(contributor.avatar_url)}
                          alt={contributor.login}
                        />
                        <AvatarFallback>
                          {contributor.login.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      {index < 3 && (
                        <div
                          className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold
                          ${index === 0 ? "bg-yellow-500 text-yellow-900" : ""}
                          ${index === 1 ? "bg-gray-400 text-gray-900" : ""}
                          ${index === 2 ? "bg-orange-600 text-orange-100" : ""}
                        `}
                        >
                          {index + 1}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <Link
                          href={contributor.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-sm hover:text-accent transition-colors"
                        >
                          {contributor.name || contributor.login}
                        </Link>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      {contributor.bio && (
                        <p className="text-xs text-muted-foreground truncate">
                          {contributor.bio}
                        </p>
                      )}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {contributor.contributions}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-2xl tracking-tight">
                  Recent Activity
                </h2>
                <Badge className="bg-accent text-accent-foreground">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Live
                </Badge>
              </div>

              {/* Activity Feed with Date Grouping */}
              <div className="space-y-6 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                {Object.entries(groupedActivities).map(
                  ([date, dayActivities]) => (
                    <div key={date} className="space-y-3">
                      {/* Date Header */}
                      <div className="flex items-center space-x-2 sticky top-0 bg-background/80 backdrop-blur-sm z-10 py-2">
                        <div className="h-px bg-border flex-1" />
                        <span className="text-xs font-medium text-muted-foreground px-2">
                          {new Date(date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year:
                              new Date(date).getFullYear() !==
                              new Date().getFullYear()
                                ? "numeric"
                                : undefined,
                          })}
                        </span>
                        <div className="h-px bg-border flex-1" />
                      </div>

                      {/* Activities for this date */}
                      <div className="space-y-2">
                        {dayActivities.map((activity, index) => (
                          <Card
                            key={index}
                            className="border-0 shadow-none bg-muted/20 hover:bg-muted/40 transition-colors"
                          >
                            <CardContent className="p-3">
                              <div className="flex items-start space-x-3">
                                <div className="relative flex-shrink-0">
                                  <Avatar className="w-7 h-7">
                                    {activity.type === "commit" &&
                                    activity.data.author ? (
                                      <AvatarImage
                                        src={proxyAvatarUrl(activity.data.author.avatar_url)}
                                        alt={activity.data.author.login}
                                      />
                                    ) : activity.type === "pullrequest" ? (
                                      <AvatarImage
                                        src={proxyAvatarUrl(activity.data.user.avatar_url)}
                                        alt={activity.data.user.login}
                                      />
                                    ) : null}
                                    <AvatarFallback className="text-xs">
                                      {activity.type === "commit"
                                        ? (activity.data.author?.login || "U")
                                            .slice(0, 2)
                                            .toUpperCase()
                                        : activity.data.user.login
                                            .slice(0, 2)
                                            .toUpperCase()}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-background rounded-full flex items-center justify-center border border-border">
                                    {activity.type === "commit" ? (
                                      getActivityIcon(
                                        getContributionTypeFromCommit(
                                          activity.data.commit.message
                                        )
                                      )
                                    ) : (
                                      <GitPullRequest className="w-2 h-2 text-purple-500" />
                                    )}
                                  </div>
                                </div>

                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2 mb-1">
                                    <span className="font-medium text-sm">
                                      {activity.type === "commit"
                                        ? activity.data.author?.login ||
                                          activity.data.commit.author.name
                                        : activity.data.user.login}
                                    </span>
                                    <Badge
                                      variant="outline"
                                      className="text-xs px-1.5 py-0.5"
                                    >
                                      {activity.type === "commit"
                                        ? "commit"
                                        : "PR"}
                                    </Badge>
                                    <span className="text-xs text-muted-foreground">
                                      {getTimeAgo(activity.date)}
                                    </span>
                                  </div>

                                  <Link
                                    href={activity.data.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-foreground hover:text-accent transition-colors block line-clamp-2 group"
                                  >
                                    {activity.type === "commit"
                                      ? formatCommitMessage(
                                          activity.data.commit.message
                                        )
                                      : activity.data.title}
                                    <ExternalLink className="w-3 h-3 inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </Link>

                                  {activity.type === "pullrequest" &&
                                    activity.data.labels.length > 0 && (
                                      <div className="flex flex-wrap gap-1 mt-1">
                                        {activity.data.labels
                                          .slice(0, 2)
                                          .map((label) => (
                                            <Badge
                                              key={label.name}
                                              variant="secondary"
                                              className="text-xs px-1.5 py-0"
                                              style={{
                                                backgroundColor: `#${label.color}20`,
                                                color: `#${label.color}`,
                                              }}
                                            >
                                              {label.name}
                                            </Badge>
                                          ))}
                                      </div>
                                    )}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Show More Button */}
              {!showMoreActivity && allActivities.length > 8 && (
                <div className="mt-4 text-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowMoreActivity(true)}
                    className="w-full"
                  >
                    Show More Activity ({allActivities.length - 8} more)
                  </Button>
                </div>
              )}

              {showMoreActivity && (
                <div className="mt-4 text-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowMoreActivity(false)}
                    className="w-full"
                  >
                    Show Less
                  </Button>
                </div>
              )}
            </div>

            {/* Help Wanted Issues */}
            <div className="lg:col-span-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-2xl tracking-tight">
                  Help Wanted
                </h2>
                <Badge variant="secondary" className="text-xs">
                  <Target className="w-3 h-3 mr-1" />
                  {issues.length} open
                </Badge>
              </div>

              <div className="space-y-4">
                {issues.slice(0, 10).map((issue) => (
                  <Card
                    key={issue.id}
                    className="border border-border hover:border-accent/50 transition-all duration-300 group"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="relative">
                          <Avatar className="w-8 h-8 group-hover:scale-110 transition-transform duration-300">
                            <AvatarImage
                              src={proxyAvatarUrl(issue.user.avatar_url)}
                              alt={issue.user.login}
                            />
                            <AvatarFallback>
                              {issue.user.login.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-background rounded-full flex items-center justify-center border border-border">
                            {getIssueIcon(issue.labels)}
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-xs text-muted-foreground">
                              #{issue.number}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {getTimeAgo(issue.created_at)}
                            </span>
                          </div>

                          <Link
                            href={issue.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-sm hover:text-accent transition-colors group-hover:underline block"
                          >
                            {issue.title}
                          </Link>

                          <div className="flex flex-wrap gap-1 mt-2">
                            {issue.labels.slice(0, 2).map((label) => (
                              <Badge
                                key={label.name}
                                variant="secondary"
                                className="text-xs"
                                style={{
                                  backgroundColor: `#${sanitizeColor(label.color)}20`,
                                  color: `#${sanitizeColor(label.color)}`,
                                }}
                              >
                                {label.name}
                              </Badge>
                            ))}
                          </div>

                          {issue.comments > 0 && (
                            <div className="flex items-center text-xs text-muted-foreground mt-1">
                              <MessageSquare className="w-3 h-3 mr-1" />
                              {issue.comments}
                            </div>
                          )}
                        </div>

                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 pt-16 border-t border-border text-center">
            <h3 className="font-bold text-2xl mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you&apos;re fixing bugs, adding features, or helping other
              contributors, every contribution makes NothingCN better for
              everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link
                  href="https://github.com/JassinAlSafe/NothingCN/fork"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Fork Repository
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link
                  href="https://github.com/JassinAlSafe/NothingCN/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Good First Issues
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
