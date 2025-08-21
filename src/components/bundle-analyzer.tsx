"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Package, 
  FileText, 
  AlertTriangle, 
  TrendingUp,
  Download,
  RefreshCw 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BundleAnalyzerProps {
  className?: string;
}

interface BundleInfo {
  name: string;
  size: number;
  gzipped: number;
  percentage: number;
  type: 'vendor' | 'component' | 'page' | 'chunk';
}

interface DuplicateModule {
  name: string;
  instances: number;
  totalSize: number;
  locations: string[];
}

export const BundleAnalyzer = React.memo(function BundleAnalyzer({
  className
}: BundleAnalyzerProps) {
  const [bundleData, setBundleData] = React.useState<{
    bundles: BundleInfo[];
    duplicates: DuplicateModule[];
    totalSize: number;
    totalGzipped: number;
    isAnalyzing: boolean;
  }>({
    bundles: [],
    duplicates: [],
    totalSize: 0,
    totalGzipped: 0,
    isAnalyzing: false
  });

  // Mock bundle analysis - in real implementation, this would analyze the actual build
  const analyzeBundles = React.useCallback(async () => {
    setBundleData(prev => ({ ...prev, isAnalyzing: true }));
    
    // Simulate analysis delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock data - in real implementation, this would come from webpack-bundle-analyzer
    const mockBundles: BundleInfo[] = [
      { name: 'vendor.js', size: 245000, gzipped: 89000, percentage: 45, type: 'vendor' },
      { name: 'main.js', size: 156000, gzipped: 52000, percentage: 28, type: 'chunk' },
      { name: 'components.js', size: 89000, gzipped: 28000, percentage: 16, type: 'component' },
      { name: 'pages.js', size: 67000, gzipped: 21000, percentage: 11, type: 'page' },
    ];

    const mockDuplicates: DuplicateModule[] = [
      {
        name: 'lodash',
        instances: 3,
        totalSize: 24000,
        locations: ['vendor.js', 'components.js', 'utils.js']
      },
      {
        name: 'moment',
        instances: 2,
        totalSize: 18000,
        locations: ['vendor.js', 'pages.js']
      }
    ];

    setBundleData({
      bundles: mockBundles,
      duplicates: mockDuplicates,
      totalSize: mockBundles.reduce((sum, bundle) => sum + bundle.size, 0),
      totalGzipped: mockBundles.reduce((sum, bundle) => sum + bundle.gzipped, 0),
      isAnalyzing: false
    });
  }, []);

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const getBundleTypeIcon = (type: BundleInfo['type']) => {
    switch (type) {
      case 'vendor': return <Package className="w-4 h-4" />;
      case 'component': return <FileText className="w-4 h-4" />;
      case 'page': return <FileText className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getBundleTypeColor = (type: BundleInfo['type']) => {
    switch (type) {
      case 'vendor': return 'text-blue-600';
      case 'component': return 'text-green-600';  
      case 'page': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  React.useEffect(() => {
    // Auto-analyze on mount
    analyzeBundles();
  }, [analyzeBundles]);

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Package className="w-5 h-5" />
              <span className="font-ndot">Bundle Analyzer</span>
            </CardTitle>
            <Button
              onClick={analyzeBundles}
              disabled={bundleData.isAnalyzing}
              size="sm"
              variant="outline"
              className="font-ndot"
            >
              {bundleData.isAnalyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Re-analyze
                </>
              )}
            </Button>
          </div>
        </CardHeader>

        {bundleData.bundles.length > 0 && (
          <CardContent className="space-y-6">
            {/* Bundle Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <span className="text-sm text-muted-foreground">Total Size</span>
                <div className="text-2xl font-bold">{formatBytes(bundleData.totalSize)}</div>
              </div>
              <div className="space-y-2">
                <span className="text-sm text-muted-foreground">Gzipped</span>
                <div className="text-2xl font-bold text-green-600">{formatBytes(bundleData.totalGzipped)}</div>
              </div>
              <div className="space-y-2">
                <span className="text-sm text-muted-foreground">Bundles</span>
                <div className="text-2xl font-bold">{bundleData.bundles.length}</div>
              </div>
              <div className="space-y-2">
                <span className="text-sm text-muted-foreground">Duplicates</span>
                <div className="text-2xl font-bold text-red-600">{bundleData.duplicates.length}</div>
              </div>
            </div>

            {/* Bundle Breakdown */}
            <div className="space-y-4">
              <h3 className="font-semibold flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>Bundle Breakdown</span>
              </h3>

              <div className="space-y-3">
                {bundleData.bundles.map((bundle) => (
                  <div key={bundle.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={getBundleTypeColor(bundle.type)}>
                          {getBundleTypeIcon(bundle.type)}
                        </div>
                        <span className="font-medium">{bundle.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {bundle.type}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <span>{formatBytes(bundle.size)}</span>
                        <span className="text-green-600">({formatBytes(bundle.gzipped)} gzipped)</span>
                        <span className="text-muted-foreground">{bundle.percentage}%</span>
                      </div>
                    </div>
                    <Progress value={bundle.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Duplicate Modules */}
            {bundleData.duplicates.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-semibold flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-600" />
                  <span>Duplicate Modules</span>
                  <Badge variant="destructive" size="sm">
                    {bundleData.duplicates.length}
                  </Badge>
                </h3>

                <div className="space-y-3">
                  {bundleData.duplicates.map((duplicate) => (
                    <div key={duplicate.name} className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-600" />
                          <span className="font-medium text-yellow-800">{duplicate.name}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Badge variant="yellow" size="sm">
                            {duplicate.instances}x duplicated
                          </Badge>
                          <span className="text-yellow-700">{formatBytes(duplicate.totalSize)}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {duplicate.locations.map((location) => (
                          <Badge key={location} variant="outline" size="sm" className="text-xs">
                            {location}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Optimization Suggestions */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <h4 className="font-medium text-blue-800 mb-2">Optimization Suggestions</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Consider using webpack&apos;s SplitChunksPlugin to deduplicate common modules</li>
                    <li>• Move duplicate dependencies to a shared vendor chunk</li>
                    <li>• Use dynamic imports for large modules that aren&apos;t immediately needed</li>
                    <li>• Consider replacing heavy libraries with lighter alternatives</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Export Options */}
            <div className="border-t pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Bundle analysis helps identify optimization opportunities
                </span>
                <Button size="sm" variant="outline" className="font-ndot">
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
              </div>
            </div>
          </CardContent>
        )}

        {/* Loading State */}
        {bundleData.isAnalyzing && (
          <CardContent className="text-center py-8">
            <RefreshCw className="w-8 h-8 mx-auto mb-4 animate-spin text-blue-600" />
            <p className="text-muted-foreground">Analyzing bundle structure...</p>
            <p className="text-sm text-muted-foreground mt-1">This may take a few moments</p>
          </CardContent>
        )}
      </Card>
    </div>
  );
});