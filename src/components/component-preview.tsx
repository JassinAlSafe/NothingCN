"use client";

import { Card } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ErrorBoundary, ComponentErrorFallback } from "@/components/error-boundary";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
  hidePreview?: boolean;
  className?: string;
}

export function ComponentPreview({
  title,
  description,
  preview,
  code,
  hidePreview = false,
  className,
}: ComponentPreviewProps) {
  if (hidePreview) {
    return (
      <div className={cn("space-y-6", className)}>
        {(title || description) && (
          <div className="space-y-2">
            {title && <h3 className="text-xl font-bold tracking-tight">{title}</h3>}
            {description && (
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            )}
          </div>
        )}
        <div className="relative">
          <CodeBlock code={code} language="bash" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      {(title || description) && (
        <div className="space-y-3">
          {title && (
            <div className="flex items-center space-x-3">
              <div className="w-1 h-8 bg-accent rounded-full" />
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{title}</h3>
            </div>
          )}
          {description && (
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed ml-4">{description}</p>
          )}
        </div>
      )}

      {/* Content */}
      <Card className="overflow-hidden">
        <Tabs defaultValue="preview" className="w-full">
          <div className="border-b border-border bg-muted/30">
            <TabsList className="h-12 w-full justify-start rounded-none bg-transparent p-0">
              <TabsTrigger 
                value="preview" 
                className="relative h-12 rounded-none border-b-2 border-transparent bg-transparent px-6 font-medium text-muted-foreground shadow-none transition-colors data-[state=active]:border-accent data-[state=active]:text-foreground data-[state=active]:bg-background/50"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger 
                value="code"
                className="relative h-12 rounded-none border-b-2 border-transparent bg-transparent px-6 font-medium text-muted-foreground shadow-none transition-colors data-[state=active]:border-accent data-[state=active]:text-foreground data-[state=active]:bg-background/50"
              >
                Code
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="preview" className="mt-0 border-0 p-0">
            <div className="min-h-[200px] md:min-h-[300px] flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-background to-muted/20">
              <div className="w-full flex items-center justify-center">
                <ErrorBoundary fallback={ComponentErrorFallback}>
                  {preview}
                </ErrorBoundary>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="code" className="mt-0 border-0 p-0">
            <div className="relative">
              <CodeBlock code={code} language="tsx" />
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}