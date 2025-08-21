"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle2, XCircle, AlertTriangle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  ComponentTestSuite, 
  runTestSuite,
  createComponentTestSuite 
} from "@/lib/component-testing";

interface ComponentTestRunnerProps {
  componentName: string;
  ComponentClass: React.ComponentType<Record<string, unknown>>;
  variants?: Record<string, unknown>[];
  baseProps?: Record<string, unknown>;
  className?: string;
}

interface TestResults {
  componentName: string;
  passed: number;
  failed: number;
  warnings: number;
  results: {
    basic: { passed: number; failed: number; details: string[] };
    accessibility: { passed: number; failed: number; details: string[] };
    performance: { passed: number; failed: number; details: string[] };
  };
}

export const ComponentTestRunner = React.memo(function ComponentTestRunner({
  componentName,
  ComponentClass,
  variants = [],
  baseProps = {},
  className
}: ComponentTestRunnerProps) {
  const [testSuite, setTestSuite] = React.useState<ComponentTestSuite | null>(null);
  const [results, setResults] = React.useState<TestResults | null>(null);
  const [isRunning, setIsRunning] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  // Initialize test suite
  React.useEffect(() => {
    async function initializeTestSuite() {
      setIsLoading(true);
      try {
        const suite = await createComponentTestSuite(
          componentName,
          ComponentClass,
          variants,
          baseProps
        );
        setTestSuite(suite);
      } catch (error) {
        console.error('Failed to create test suite:', error);
      } finally {
        setIsLoading(false);
      }
    }

    initializeTestSuite();
  }, [componentName, ComponentClass, variants, baseProps]);

  const runTests = React.useCallback(async () => {
    if (!testSuite) return;
    
    setIsRunning(true);
    try {
      const testResults = await runTestSuite(testSuite);
      setResults(testResults);
    } catch (error) {
      console.error('Failed to run tests:', error);
    } finally {
      setIsRunning(false);
    }
  }, [testSuite]);

  const getStatusIcon = (passed: number, failed: number) => {
    if (failed > 0) return <XCircle className="w-4 h-4 text-red-500" />;
    if (passed > 0) return <CheckCircle2 className="w-4 h-4 text-green-500" />;
    return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
  };

  const getStatusBadge = (passed: number, failed: number, warnings: number) => {
    if (failed > 0) {
      return <Badge variant="destructive">{failed} Failed</Badge>;
    }
    if (warnings > 0) {
      return <Badge variant="yellow">{warnings} Warnings</Badge>;
    }
    if (passed > 0) {
      return <Badge variant="green">{passed} Passed</Badge>;
    }
    return <Badge variant="secondary">No Results</Badge>;
  };

  if (isLoading) {
    return (
      <Card className={className}>
        <CardContent className="p-6">
          <div className="flex items-center justify-center space-x-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Loading test suite...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <span className="font-ndot">Component Tests</span>
            {results && getStatusIcon(results.passed, results.failed)}
          </CardTitle>
          <Button
            onClick={runTests}
            disabled={isRunning || !testSuite}
            size="sm"
            variant="outline"
            className="font-ndot"
          >
            {isRunning ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Running...
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Run Tests
              </>
            )}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Test Suite Info */}
        {testSuite && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Component: {componentName}</span>
              <Badge variant="outline">
                {testSuite.tests.length + testSuite.accessibility.length + testSuite.performance.length} Tests
              </Badge>
            </div>
            {variants.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Variants:</span>
                <Badge variant="secondary" size="sm">{variants.length} Variants</Badge>
              </div>
            )}
          </div>
        )}

        {/* Test Results */}
        {results && (
          <div className="space-y-4 border-t pt-4">
            {/* Overall Results */}
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Test Results</h3>
              <div className="flex items-center space-x-2">
                {getStatusBadge(results.passed, results.failed, results.warnings)}
                <span className="text-sm text-muted-foreground">
                  {results.passed + results.failed} tests
                </span>
              </div>
            </div>

            {/* Category Results */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Basic Tests */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(results.results.basic.passed, results.results.basic.failed)}
                  <h4 className="font-medium text-sm">Basic</h4>
                </div>
                <div className="text-xs text-muted-foreground">
                  {results.results.basic.passed} passed, {results.results.basic.failed} failed
                </div>
                {results.results.basic.details.length > 0 && (
                  <div className="space-y-1">
                    {results.results.basic.details.map((detail, index) => (
                      <div key={index} className="text-xs text-red-600 bg-red-50 p-2 rounded">
                        {detail}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Accessibility Tests */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(results.results.accessibility.passed, results.results.accessibility.failed)}
                  <h4 className="font-medium text-sm">Accessibility</h4>
                </div>
                <div className="text-xs text-muted-foreground">
                  {results.results.accessibility.passed} passed, {results.results.accessibility.failed} failed
                </div>
                {results.results.accessibility.details.length > 0 && (
                  <div className="space-y-1">
                    {results.results.accessibility.details.map((detail, index) => (
                      <div key={index} className="text-xs text-red-600 bg-red-50 p-2 rounded">
                        {detail}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Performance Tests */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(results.results.performance.passed, results.results.performance.failed)}
                  <h4 className="font-medium text-sm">Performance</h4>
                </div>
                <div className="text-xs text-muted-foreground">
                  {results.results.performance.passed} passed, {results.results.performance.failed} failed
                </div>
                {results.results.performance.details.length > 0 && (
                  <div className="space-y-1">
                    {results.results.performance.details.map((detail, index) => (
                      <div key={index} className="text-xs text-yellow-600 bg-yellow-50 p-2 rounded">
                        {detail}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Summary */}
            <div className="border-t pt-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Quality Score: {Math.round((results.passed / (results.passed + results.failed)) * 100)}%
                </span>
                <span className={cn(
                  "font-medium",
                  results.failed === 0 ? "text-green-600" : "text-red-600"
                )}>
                  {results.failed === 0 ? "✓ All tests passed" : `${results.failed} issues found`}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* No Results State */}
        {!results && !isRunning && testSuite && (
          <div className="text-center py-6 text-muted-foreground">
            <AlertTriangle className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p>Click &ldquo;Run Tests&rdquo; to validate component quality</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
});