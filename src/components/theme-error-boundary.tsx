"use client";

import React, { Component, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

export class ThemeErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to monitoring service in production
    if (process.env.NODE_ENV === "production") {
      console.error("Theme component error:", error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Card className="p-6 border-destructive/50 bg-destructive/5">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-destructive mt-1 shrink-0" />
            <div className="space-y-4 flex-1">
              <div>
                <h3 className="text-lg font-semibold text-destructive">
                  Theme Component Error
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Something went wrong with the theme component. This might be due to:
                </p>
                <ul className="text-sm text-muted-foreground mt-2 ml-4 list-disc">
                  <li>Invalid theme configuration</li>
                  <li>Missing CSS custom properties</li>
                  <li>Browser compatibility issues</li>
                </ul>
              </div>

              {process.env.NODE_ENV === "development" && this.state.error && (
                <details className="text-xs bg-muted p-3 rounded-md">
                  <summary className="cursor-pointer font-medium">
                    Error Details (Development Only)
                  </summary>
                  <pre className="mt-2 whitespace-pre-wrap">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              )}

              <div className="flex gap-2">
                <Button
                  onClick={this.handleReset}
                  size="sm"
                  variant="outline"
                  className="h-8"
                >
                  <RefreshCw className="h-3 w-3 mr-2" />
                  Try Again
                </Button>
                <Button
                  onClick={() => window.location.reload()}
                  size="sm"
                  variant="outline"
                  className="h-8"
                >
                  Reload Page
                </Button>
              </div>
            </div>
          </div>
        </Card>
      );
    }

    return this.props.children;
  }
}

// Simpler functional wrapper for common use cases
export function withThemeErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
) {
  const WrappedComponent = (props: P) => (
    <ThemeErrorBoundary fallback={fallback}>
      <Component {...props} />
    </ThemeErrorBoundary>
  );

  WrappedComponent.displayName = `withThemeErrorBoundary(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
}