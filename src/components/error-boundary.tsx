"use client";

import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

function DefaultErrorFallback({ error, resetError }: { error: Error; resetError: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-muted/30 rounded-xl border border-border/50">
      <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
      <h3 className="text-lg font-semibold font-ndot mb-2">Something went wrong</h3>
      <p className="text-sm text-muted-foreground mb-4 text-center max-w-md">
        An error occurred while rendering this component. This might be a temporary issue.
      </p>
      <details className="mb-4 max-w-md">
        <summary className="text-sm text-muted-foreground cursor-pointer hover:text-foreground">
          Error details
        </summary>
        <pre className="text-xs bg-muted p-2 rounded mt-2 overflow-auto">
          {error.message}
        </pre>
      </details>
      <Button onClick={resetError} variant="outline" size="sm">
        <RefreshCw className="h-4 w-4 mr-2" />
        Try again
      </Button>
    </div>
  );
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
    }

    return this.props.children;
  }
}

export function ComponentErrorFallback({ resetError }: { error: Error; resetError: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-6 bg-muted/20 rounded-lg border border-dashed border-border">
      <AlertTriangle className="h-8 w-8 text-destructive mb-3" />
      <h4 className="text-sm font-medium font-ndot mb-2">Component Error</h4>
      <p className="text-xs text-muted-foreground mb-3 text-center">
        Failed to render component preview
      </p>
      <Button onClick={resetError} variant="ghost" size="sm" className="text-xs">
        <RefreshCw className="h-3 w-3 mr-1" />
        Retry
      </Button>
    </div>
  );
}