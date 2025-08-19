export const codePreviewSourceCode = `"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/ui/code-block";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CodePreviewProps {
  /**
   * The live preview component to render
   */
  preview: React.ReactNode;
  /**
   * The source code to display in the code tab
   */
  code: string;
  /**
   * Programming language for syntax highlighting
   * @default "tsx"
   */
  language?: string;
  /**
   * Title for the component preview
   */
  title?: string;
  /**
   * Description text shown below the title
   */
  description?: string;
  /**
   * Default tab to show
   * @default "preview"
   */
  defaultTab?: "preview" | "code";
  /**
   * Custom class name for the container
   */
  className?: string;
  /**
   * Custom class name for the preview container
   */
  previewClassName?: string;
  /**
   * Whether to show line numbers in code
   * @default false
   */
  showLineNumbers?: boolean;
  /**
   * Custom styling variant for the tabs
   * @default "nothing"
   */
  tabsVariant?: "default" | "nothing" | "pixel" | "underline" | "minimal";
  /**
   * Size variant for the tabs
   * @default "default"
   */
  tabsSize?: "sm" | "default" | "lg";
  /**
   * Whether to use a card wrapper for the preview
   * @default true
   */
  useCard?: boolean;
  /**
   * Custom props for the preview container
   */
  previewProps?: React.HTMLAttributes<HTMLDivElement>;
  /**
   * Whether to use minimal styling for the preview container
   * @default false
   */
  minimal?: boolean;
}

export function CodePreview({
  preview,
  code,
  language = "tsx",
  title,
  description,
  defaultTab = "preview",
  className,
  previewClassName,
  showLineNumbers = false,
  tabsVariant = "nothing",
  tabsSize = "default",
  useCard = true,
  previewProps,
  minimal = false,
}: CodePreviewProps) {

  const PreviewContainer = ({ children }: { children: React.ReactNode }) => {
    const content = minimal ? (
      // Minimal styling for components that have their own styling
      <div 
        className={cn(
          "relative p-6",
          previewClassName
        )}
        {...previewProps}
      >
        {children}
      </div>
    ) : (
      // Standard styling for regular component previews
      <div 
        className={cn(
          "relative p-6 rounded-lg transition-all duration-200",
          "bg-background/50 border border-border/50",
          "hover:border-border/70",
          previewClassName
        )}
        {...previewProps}
      >
        {children}
      </div>
    );

    return useCard ? (
      <Card className="border-0 bg-transparent shadow-none">
        {content}
      </Card>
    ) : content;
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Header Section */}
      {(title || description) && (
        <div className="space-y-2">
          {title && (
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-ndot">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Preview/Code Tabs */}
      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList 
          variant={tabsVariant} 
          size={tabsSize}
          className="grid w-full grid-cols-2 max-w-[200px]"
        >
          <TabsTrigger 
            value="preview" 
            variant={tabsVariant}
            size={tabsSize}
            className="font-ndot"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger 
            value="code" 
            variant={tabsVariant}
            size={tabsSize}
            className="font-ndot"
          >
            Code
          </TabsTrigger>
        </TabsList>

        {/* Preview Tab Content */}
        <TabsContent value="preview" className="mt-6">
          <PreviewContainer>
            <div className="flex items-center justify-center min-h-[200px] w-full">
              {preview}
            </div>
          </PreviewContainer>
        </TabsContent>

        {/* Code Tab Content */}
        <TabsContent value="code" className="mt-6">
          <CodeBlock
            code={code}
            language={language}
            showLineNumbers={showLineNumbers}
            className="rounded-xl border border-border/50"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Export with display name for better debugging
CodePreview.displayName = "CodePreview";

// Utility type for easier usage
export type { CodePreviewProps };`;