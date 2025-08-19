"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, 
  Zap, 
  Timer, 
  HardDrive, 
  Wifi, 
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  BarChart3 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  collectPerformanceMetrics, 
  ComponentPerformanceOptimizer,
  PerformanceMetrics 
} from "@/lib/performance-utils";

interface PerformanceMonitorProps {
  className?: string;
  enableAutoMonitoring?: boolean;
  showDetailedMetrics?: boolean;
}

export const PerformanceMonitor = React.memo(function PerformanceMonitor({
  className,
  enableAutoMonitoring = true,
  showDetailedMetrics = false
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics | null>(null);
  const [isCollecting, setIsCollecting] = React.useState(false);
  const [componentReport, setComponentReport] = React.useState<ReturnType<typeof ComponentPerformanceOptimizer.getPerformanceReport> | null>(null);

  const collectMetrics = React.useCallback(async () => {
    setIsCollecting(true);
    
    try {
      const [performanceMetrics] = await Promise.all([
        collectPerformanceMetrics(),
      ]);
      
      setMetrics(performanceMetrics);
      setComponentReport(ComponentPerformanceOptimizer.getPerformanceReport());
    } catch (error) {
      console.error('Failed to collect performance metrics:', error);
    } finally {
      setIsCollecting(false);
    }
  }, []);

  // Auto-collect metrics on mount
  React.useEffect(() => {
    if (enableAutoMonitoring) {
      const timer = setTimeout(() => {
        collectMetrics();
      }, 2000); // Wait 2s after component mount

      return () => clearTimeout(timer);
    }
  }, [enableAutoMonitoring, collectMetrics]);

  const getScoreColor = (score: number, thresholds: { good: number; needsImprovement: number }) => {
    if (score <= thresholds.good) return 'text-green-600';
    if (score <= thresholds.needsImprovement) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadge = (score: number, thresholds: { good: number; needsImprovement: number }) => {
    if (score <= thresholds.good) return <Badge variant="green">Good</Badge>;
    if (score <= thresholds.needsImprovement) return <Badge variant="yellow">Needs Improvement</Badge>;
    return <Badge variant="destructive">Poor</Badge>;
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatTime = (ms: number) => {
    if (ms < 1000) return `${ms.toFixed(0)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  // Core Web Vitals thresholds (Google standards)
  const thresholds = {
    lcp: { good: 2500, needsImprovement: 4000 }, // ms
    fid: { good: 100, needsImprovement: 300 }, // ms  
    cls: { good: 0.1, needsImprovement: 0.25 }, // score
    ttfb: { good: 800, needsImprovement: 1800 }, // ms
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5" />
              <span className="font-ndot">Performance Monitor</span>
            </CardTitle>
            <Button
              onClick={collectMetrics}
              disabled={isCollecting}
              size="sm"
              variant="outline"
              className="font-ndot"
            >
              {isCollecting ? (
                <>
                  <Activity className="w-4 h-4 mr-2 animate-spin" />
                  Collecting...
                </>
              ) : (
                <>
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Collect Metrics
                </>
              )}
            </Button>
          </div>
        </CardHeader>

        {metrics && (
          <CardContent className="space-y-6">
            {/* Core Web Vitals */}
            <div className="space-y-4">
              <h3 className="font-semibold flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Core Web Vitals</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* LCP */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">LCP</span>
                    {getScoreBadge(metrics.lcp, thresholds.lcp)}
                  </div>
                  <div className={cn("text-2xl font-bold", getScoreColor(metrics.lcp, thresholds.lcp))}>
                    {formatTime(metrics.lcp)}
                  </div>
                  <Progress 
                    value={(metrics.lcp / thresholds.lcp.needsImprovement) * 100}
                    className="h-2"
                  />
                  <p className="text-xs text-muted-foreground">
                    Largest Contentful Paint
                  </p>
                </div>

                {/* FID */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">FID</span>
                    {getScoreBadge(metrics.fid, thresholds.fid)}
                  </div>
                  <div className={cn("text-2xl font-bold", getScoreColor(metrics.fid, thresholds.fid))}>
                    {formatTime(metrics.fid)}
                  </div>
                  <Progress 
                    value={(metrics.fid / thresholds.fid.needsImprovement) * 100}
                    className="h-2"
                  />
                  <p className="text-xs text-muted-foreground">
                    First Input Delay
                  </p>
                </div>

                {/* CLS */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">CLS</span>
                    {getScoreBadge(metrics.cls, thresholds.cls)}
                  </div>
                  <div className={cn("text-2xl font-bold", getScoreColor(metrics.cls, thresholds.cls))}>
                    {metrics.cls.toFixed(3)}
                  </div>
                  <Progress 
                    value={(metrics.cls / thresholds.cls.needsImprovement) * 100}
                    className="h-2"
                  />
                  <p className="text-xs text-muted-foreground">
                    Cumulative Layout Shift
                  </p>
                </div>
              </div>
            </div>

            {/* Resource Metrics */}
            <div className="space-y-4">
              <h3 className="font-semibold flex items-center space-x-2">
                <HardDrive className="w-4 h-4" />
                <span>Resource Usage</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <span className="text-sm">JavaScript</span>
                  </div>
                  <div className="text-lg font-bold">{formatBytes(metrics.totalJSSize)}</div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-sm">CSS</span>
                  </div>
                  <div className="text-lg font-bold">{formatBytes(metrics.totalCSSSize)}</div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full" />
                    <span className="text-sm">Images</span>
                  </div>
                  <div className="text-lg font-bold">{formatBytes(metrics.totalImageSize)}</div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-3 h-3" />
                    <span className="text-sm">Network</span>
                  </div>
                  <div className="text-lg font-bold capitalize">{metrics.networkSpeed}</div>
                </div>
              </div>
            </div>

            {/* Component Performance - Only show if showDetailedMetrics is true */}
            {showDetailedMetrics && componentReport && componentReport.renderTimes && Object.keys(componentReport.renderTimes).length > 0 && (
              <div className="space-y-4">
                <h3 className="font-semibold flex items-center space-x-2">
                  <Timer className="w-4 h-4" />
                  <span>Component Performance</span>
                </h3>

                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Average Render Time</span>
                      <div className="font-bold">{formatTime(componentReport.averageRenderTime || 0)}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Components Measured</span>
                      <div className="font-bold">{Object.keys(componentReport.renderTimes).length}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Slow Components</span>
                      <div className="font-bold">{componentReport.slowComponents?.length || 0}</div>
                    </div>
                  </div>

                  {/* Slow Components Alert */}
                  {componentReport.slowComponents && componentReport.slowComponents.length > 0 && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                        <span className="text-sm font-medium text-yellow-800">
                          Slow Rendering Components
                        </span>
                      </div>
                      <div className="space-y-1">
                        {componentReport.slowComponents.slice(0, 3).map(([name, time]) => (
                          <div key={name} className="flex justify-between text-xs">
                            <span className="text-yellow-700">{name}</span>
                            <span className="font-mono text-yellow-600">{formatTime(time)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Performance Score */}
            <div className="border-t pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Overall Performance Score</span>
                <div className="flex items-center space-x-2">
                  {/* Calculate overall score based on Core Web Vitals */}
                  {(() => {
                    const lcpScore = metrics.lcp <= thresholds.lcp.good ? 100 : metrics.lcp <= thresholds.lcp.needsImprovement ? 75 : 25;
                    const fidScore = metrics.fid <= thresholds.fid.good ? 100 : metrics.fid <= thresholds.fid.needsImprovement ? 75 : 25;
                    const clsScore = metrics.cls <= thresholds.cls.good ? 100 : metrics.cls <= thresholds.cls.needsImprovement ? 75 : 25;
                    const overallScore = Math.round((lcpScore + fidScore + clsScore) / 3);
                    
                    return (
                      <>
                        <span className={cn(
                          "text-2xl font-bold",
                          overallScore >= 90 ? "text-green-600" : overallScore >= 70 ? "text-yellow-600" : "text-red-600"
                        )}>
                          {overallScore}
                        </span>
                        {overallScore >= 90 ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        ) : (
                          <TrendingUp className="w-5 h-5 text-yellow-600" />
                        )}
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          </CardContent>
        )}

        {/* No Data State */}
        {!metrics && !isCollecting && (
          <CardContent className="text-center py-8 text-muted-foreground">
            <Activity className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p>Click &ldquo;Collect Metrics&rdquo; to analyze performance</p>
          </CardContent>
        )}
      </Card>
    </div>
  );
});