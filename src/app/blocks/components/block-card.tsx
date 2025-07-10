import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Block } from "../data/blocks";
import { copyToClipboard } from "../utils/code-actions";
import { Copy, Check, ExternalLink } from "lucide-react";

interface BlockCardProps {
  block: Block;
  index: number;
}

export function BlockCard({ block, index }: BlockCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(block.code);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
      style={{
        animationName: "fadeInUp",
        animationDuration: "0.5s",
        animationTimingFunction: "ease-out",
        animationFillMode: "forwards",
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Preview Section */}
      <div className="relative aspect-video overflow-hidden rounded-t-lg bg-muted/50">
        <div className="flex h-full items-center justify-center p-6">
          {block.component}
        </div>
        
        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="absolute inset-0 flex items-center justify-center gap-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={handleCopy}
              className="h-8 px-3 text-xs font-medium"
            >
              {copied ? (
                <Check className="mr-1 h-3 w-3" />
              ) : (
                <Copy className="mr-1 h-3 w-3" />
              )}
              {copied ? "Copied!" : "Copy code"}
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="h-8 px-3 text-xs font-medium"
              asChild
            >
              <a href={`#${block.id}`} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-3 w-3" />
                View
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="font-semibold leading-none tracking-tight">
              {block.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {block.description}
            </p>
          </div>
        </div>
        
        <div className="mt-3 flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {block.category}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {block.difficulty}
          </Badge>
        </div>
      </div>
    </div>
  );
}