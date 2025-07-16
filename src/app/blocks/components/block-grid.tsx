"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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

interface BlockGridProps {
  blocks: Block[];
  selectedBlock: Block | null;
  onBlockSelect: (block: Block) => void;
  viewMode: "grid" | "list";
}

export function BlockGrid({
  blocks,
  selectedBlock,
  onBlockSelect,
  viewMode,
}: BlockGridProps) {
  if (blocks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="space-y-4">
          <div className="relative w-20 h-20 mx-auto">
            <div className="absolute inset-0 bg-muted/50 rounded-full" />
            <div className="absolute inset-2 border-2 border-dashed border-muted-foreground/30 rounded-full" />
            <div className="absolute inset-4 bg-muted-foreground/10 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border border-muted-foreground/50 rounded" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent/20 rounded-full animate-ping" />
          </div>
          <div className="space-y-2">
            <p className="font-semibold font-ndot text-foreground">
              No blocks found
            </p>
            <p className="text-sm text-muted-foreground font-ndot">
              Try adjusting your search or filters.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold font-ndot">All Blocks</h3>
        <p className="text-sm text-muted-foreground font-ndot">
          {blocks.length} {blocks.length === 1 ? "block" : "blocks"}
        </p>
      </div>

      <div
        className={cn(
          "grid gap-4",
          viewMode === "grid"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3"
            : "grid-cols-1"
        )}
      >
        {blocks.map((block) => (
          <BlockCard
            key={block.id}
            block={block}
            isSelected={selectedBlock?.id === block.id}
            onClick={() => onBlockSelect(block)}
            viewMode={viewMode}
          />
        ))}
      </div>
    </div>
  );
}

interface BlockCardProps {
  block: Block;
  isSelected: boolean;
  onClick: () => void;
  viewMode: "grid" | "list";
}

function BlockCard({ block, isSelected, onClick, viewMode }: BlockCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group text-left border rounded-lg p-4 transition-all duration-200 hover:border-accent/50 hover:shadow-md hover:shadow-accent/5",
        isSelected
          ? "border-accent/50 bg-accent/5 shadow-md shadow-accent/5"
          : "border-border bg-card hover:bg-card/80",
        viewMode === "list" && "flex items-center gap-4"
      )}
    >
      <div
        className={cn("space-y-3", viewMode === "list" && "flex-1 space-y-2")}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <h4 className="font-semibold group-hover:text-accent transition-colors font-ndot">
              {block.title}
            </h4>
            <p className="text-sm text-muted-foreground line-clamp-2 font-ndot">
              {block.description}
            </p>
          </div>
          {isSelected && (
            <div className="w-2 h-2 bg-accent rounded-full shrink-0 mt-2" />
          )}
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="secondary" className="text-xs font-ndot">
            {block.category}
          </Badge>
          <Badge variant="outline" className="text-xs font-ndot">
            {block.difficulty}
          </Badge>
        </div>
      </div>
    </button>
  );
}
