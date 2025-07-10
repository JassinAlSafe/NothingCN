"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";
import {
  Monitor,
  Tablet,
  Smartphone,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";

interface Block {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  dependencies: string[];
  code: string;
  component: React.ReactNode;
}

interface BlockPreviewProps {
  block: Block;
  onCopy: () => Promise<void>;
  copied: boolean;
}

export function BlockPreview({ block, onCopy, copied }: BlockPreviewProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [deviceView, setDeviceView] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const getDeviceStyles = () => {
    switch (deviceView) {
      case "tablet":
        return {
          width: "768px",
          maxHeight: "500px",
          overflow: "auto"
        };
      case "mobile":
        return {
          width: "375px",
          maxHeight: "500px",
          overflow: "auto"
        };
      default:
        return {
          width: "100%",
          minHeight: "500px"
        };
    }
  };

  return (
    <div className="space-y-6">
      {/* Block Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-2xl font-bold font-ndot">{block.title}</h2>
            <Badge variant="secondary" className="text-xs font-ndot">
              {block.category}
            </Badge>
            <Badge variant="outline" className="text-xs font-ndot">
              {block.difficulty}
            </Badge>
          </div>
          <p className="text-muted-foreground max-w-2xl leading-relaxed font-ndot">
            {block.description}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={onCopy}
            className="gap-2 font-ndot"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            {copied ? "Copied!" : "Copy"}
          </Button>
          
          <Button variant="outline" size="sm" className="gap-2 font-ndot">
            <ExternalLink className="h-4 w-4" />
            Open
          </Button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center rounded-lg bg-muted p-1">
          <button
            onClick={() => setActiveTab("preview")}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-colors font-ndot",
              activeTab === "preview"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-colors font-ndot",
              activeTab === "code"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Code
          </button>
        </div>

        {/* Device Controls */}
        {activeTab === "preview" && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground font-ndot mr-2">Preview:</span>
            <div className="flex items-center rounded-lg border p-1">
              <button
                onClick={() => setDeviceView("desktop")}
                className={cn(
                  "p-2 rounded-md transition-all duration-200",
                  deviceView === "desktop"
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
                title="Desktop view (1920px+)"
              >
                <Monitor className="h-4 w-4" />
              </button>
              <button
                onClick={() => setDeviceView("tablet")}
                className={cn(
                  "p-2 rounded-md transition-all duration-200",
                  deviceView === "tablet"
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
                title="Tablet view (768px)"
              >
                <Tablet className="h-4 w-4" />
              </button>
              <button
                onClick={() => setDeviceView("mobile")}
                className={cn(
                  "p-2 rounded-md transition-all duration-200",
                  deviceView === "mobile"
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
                title="Mobile view (375px)"
              >
                <Smartphone className="h-4 w-4" />
              </button>
            </div>
            <span className="text-xs text-muted-foreground font-ndot">
              {deviceView === "desktop" && "1920px+"}
              {deviceView === "tablet" && "768px"}
              {deviceView === "mobile" && "375px"}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="border border-border rounded-lg overflow-hidden bg-card">
        {activeTab === "preview" ? (
          <div className="bg-gradient-to-br from-muted/30 to-muted/10 overflow-auto">
            <div className="flex items-center justify-center p-4">
              <div 
                className={cn(
                  "bg-background border rounded-lg shadow-sm transition-all duration-300",
                  deviceView !== "desktop" && "border-border",
                  deviceView === "mobile" && "mobile-preview",
                  deviceView === "tablet" && "tablet-preview"
                )}
                style={getDeviceStyles()}
              >
                <div className={cn(
                  "h-full overflow-auto",
                  deviceView === "mobile" ? "p-4" : "p-8"
                )}>
                  <div className={cn(
                    "h-full w-full",
                    deviceView === "desktop" ? "flex items-center justify-center" : "",
                    deviceView === "mobile" && "space-y-4"
                  )}>
                    <div className={cn(
                      "w-full",
                      deviceView === "mobile" && "max-w-none"
                    )}>
                      {block.component}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[500px]">
            <CodeBlock
              code={block.code}
              language="tsx"
              title={`${block.title.replace(/\s+/g, "")}.tsx`}
              showLineNumbers={true}
              className="h-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}