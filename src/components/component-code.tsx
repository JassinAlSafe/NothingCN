"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/ui/code-block";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Code, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComponentCodeProps {
  title: string;
  description?: string;
  code: string;
  className?: string;
  defaultExpanded?: boolean;
  previewLines?: number;
}

function getCodePreview(code: string, previewLines: number = 10): string {
  const lines = code.split("\n");
  if (lines.length <= previewLines) return code;

  // Find key parts to show in preview
  const mainComponentStart = lines.findIndex(
    (line) => line.includes("const") && line.includes("forwardRef")
  );

  let previewEndLine = Math.min(previewLines, lines.length);

  // If we have a clear component structure, show up to the main component definition
  if (mainComponentStart > 0 && mainComponentStart < previewLines + 5) {
    previewEndLine = mainComponentStart + 2; // Show component start + a couple lines
  }

  const preview = lines.slice(0, previewEndLine);
  const remaining = lines.length - previewEndLine;

  if (remaining > 0) {
    preview.push(
      "",
      `// ... ${remaining} more lines`,
      '// Click "Show full code" to view complete implementation'
    );
  }

  return preview.join("\n");
}

export function ComponentCode({
  title,
  description,
  code,
  className,
  defaultExpanded = false,
  previewLines = 10,
}: ComponentCodeProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const codeToShow = isExpanded ? code : getCodePreview(code, previewLines);
  const totalLines = code.split("\n").length;
  const previewLineCount =
    getCodePreview(code, previewLines).split("\n").length - 2; // Subtract comment lines

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h3 className="text-2xl font-bold tracking-tight font-ndot">
              {title}
            </h3>
          </div>

          {/* Toggle Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="gap-2 font-ndot"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Hide full code
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Show full code
              </>
            )}
          </Button>
        </div>

        {description && (
          <p className="text-muted-foreground leading-relaxed ml-4">
            {description}
          </p>
        )}

        {/* Code Stats */}
        <div className="flex items-center gap-4 ml-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Code className="h-4 w-4" />
            <span>{totalLines} lines</span>
          </div>
          {!isExpanded && (
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>
                Showing {previewLineCount} of {totalLines} lines
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Code Block */}
      <div className="relative">
        {!isExpanded && (
          <div className="absolute top-0 right-0 z-10 bg-gradient-to-l from-background via-background/80 to-transparent w-32 h-full pointer-events-none" />
        )}

        <div
          className={cn(
            "transition-all duration-500 ease-in-out",
            !isExpanded && "relative"
          )}
        >
          <CodeBlock
            code={codeToShow}
            language="tsx"
            title={title.toLowerCase().replace(/\s+/g, "-") + ".tsx"}
            showLineNumbers={isExpanded}
          />

          {/* Fade overlay for collapsed state */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-muted via-muted/60 to-transparent pointer-events-none" />
          )}
        </div>

        {/* Expand prompt overlay */}
        {!isExpanded && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsExpanded(true)}
              className="shadow-lg backdrop-blur-sm bg-background/90 hover:bg-background border-2 border-accent/30 hover:border-accent/50 font-ndot"
            >
              <ChevronDown className="h-4 w-4 mr-2" />
              View complete source ({totalLines - previewLineCount} more lines)
            </Button>
          </div>
        )}
      </div>

      {/* Footer Info */}
      {isExpanded && (
        <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4 text-muted-foreground">
              <span>✅ Production ready</span>
              <span>🎨 Nothing OS styled</span>
              <span>♿ Fully accessible</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <ChevronUp className="h-4 w-4 mr-1" />
              Collapse
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
