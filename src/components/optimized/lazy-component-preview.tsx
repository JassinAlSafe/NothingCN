"use client";

import React, { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ComponentPerformanceOptimizer } from "@/lib/performance-utils";
import { cn } from "@/lib/utils";

interface LazyComponentPreviewProps {
  title: string;
  description?: string;
  preview: React.ComponentType;
  code: string;
  className?: string;
  lazy?: boolean;
}

// Simple code display component
const CodeDisplay = React.memo(function CodeDisplay({ code }: { code: string }) {
  return (
    <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto text-sm">
      <code>{code}</code>
    </pre>
  );
});

// Loading skeleton for component previews
const PreviewSkeleton = () => (
  <div className="space-y-4">
    <div className="space-y-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
    </div>
    <Skeleton className="h-24 w-full rounded-lg" />
    <div className="space-y-2">
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
      <Skeleton className="h-3 w-4/6" />
    </div>
  </div>
);

export const LazyComponentPreview = React.memo(function LazyComponentPreview({
  title,
  description,
  preview: PreviewComponent,
  code,
  className,
  lazy = true
}: LazyComponentPreviewProps) {
  const [isVisible, setIsVisible] = React.useState(!lazy);
  const [renderTime, setRenderTime] = React.useState<number | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Initialize intersection observer for lazy loading
  React.useEffect(() => {
    if (!lazy || isVisible) return;

    ComponentPerformanceOptimizer.initializeLazyLoading();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, isVisible]);

  // Measure component render time
  const handleRender = React.useCallback(() => {
    const time = ComponentPerformanceOptimizer.measureRenderTime(
      `LazyComponentPreview-${title}`,
      () => {
        // Render measurement placeholder
      }
    );
    setRenderTime(time);
  }, [title]);

  React.useLayoutEffect(() => {
    if (isVisible) {
      handleRender();
    }
  }, [isVisible, handleRender]);

  return (
    <div ref={containerRef} className={cn("space-y-4", className)}>
      <Card className="overflow-hidden">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            {renderTime !== null && process.env.NODE_ENV === 'development' && (
              <span className="text-xs text-muted-foreground font-mono">
                {renderTime.toFixed(2)}ms
              </span>
            )}
          </div>
          {description && (
            <p className="text-sm text-muted-foreground mt-2">{description}</p>
          )}
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Component Preview */}
          <div className="p-6 rounded-lg border border-border bg-muted/20">
            {isVisible ? (
              <Suspense fallback={<Skeleton className="h-16 w-full" />}>
                <PreviewComponent />
              </Suspense>
            ) : (
              <PreviewSkeleton />
            )}
          </div>

          {/* Code Display */}
          {isVisible && (
            <div className="relative">
              <CodeDisplay code={code} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
});

// High-order component for performance optimization
export function withPerformanceOptimization<P extends object>(
  Component: React.ComponentType<P>,
  componentName: string
) {
  const OptimizedComponent = React.memo((props: P) => {
    const [renderTime, setRenderTime] = React.useState<number | null>(null);

    React.useLayoutEffect(() => {
      const time = ComponentPerformanceOptimizer.measureRenderTime(
        componentName,
        () => {
          // Component is being rendered
        }
      );
      setRenderTime(time);
    }, []);

    return (
      <div className="relative">
        <Component {...props} />
        {process.env.NODE_ENV === 'development' && renderTime !== null && renderTime > 16 && (
          <div className="absolute top-0 right-0 bg-red-100 text-red-800 px-1 py-0.5 text-xs rounded">
            Slow: {renderTime.toFixed(1)}ms
          </div>
        )}
      </div>
    );
  });

  OptimizedComponent.displayName = `withPerformanceOptimization(${componentName})`;
  
  return OptimizedComponent;
}