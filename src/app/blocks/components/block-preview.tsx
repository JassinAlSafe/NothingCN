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
  difficulty: string;
  description?: string;
  component: React.ReactNode;
  code: string;
}

interface BlockPreviewProps {
  block: Block;
  onCopy: () => Promise<void>;
  copied: boolean;
}

export function BlockPreview({ block, onCopy, copied }: BlockPreviewProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [deviceView, setDeviceView] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const getDeviceClasses = () => {
    switch (deviceView) {
      case "tablet":
        return "max-w-4xl mx-auto";
      case "mobile":
        return "max-w-md mx-auto";
      default:
        return "w-full max-w-none";
    }
  };

  return (
    <div className="space-y-6">
      {/* Block Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-2xl font-bold">{block.title}</h2>
            <Badge variant="secondary" className="text-xs">
              {block.category}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {block.difficulty}
            </Badge>
          </div>
          {block.description && (
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              {block.description}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={onCopy}
            className="gap-2"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            {copied ? "Copied!" : "Copy"}
          </Button>
          
          <Button variant="outline" size="sm" className="gap-2">
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
              "px-4 py-2 text-sm font-medium rounded-md transition-colors",
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
              "px-4 py-2 text-sm font-medium rounded-md transition-colors",
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
          <div className="flex items-center rounded-lg border p-1">
            <button
              onClick={() => setDeviceView("desktop")}
              className={cn(
                "p-2 rounded-md transition-colors",
                deviceView === "desktop"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              title="Desktop view"
            >
              <Monitor className="h-4 w-4" />
            </button>
            <button
              onClick={() => setDeviceView("tablet")}
              className={cn(
                "p-2 rounded-md transition-colors",
                deviceView === "tablet"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              title="Tablet view"
            >
              <Tablet className="h-4 w-4" />
            </button>
            <button
              onClick={() => setDeviceView("mobile")}
              className={cn(
                "p-2 rounded-md transition-colors",
                deviceView === "mobile"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              title="Mobile view"
            >
              <Smartphone className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="border border-border rounded-lg overflow-hidden bg-card">
        {activeTab === "preview" ? (
          <div className="bg-gradient-to-br from-muted/30 to-muted/10 overflow-auto">
            <div className={cn("min-h-[500px] p-8", getDeviceClasses())}>
              <div className="flex items-center justify-center min-h-full">
                {block.component}
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