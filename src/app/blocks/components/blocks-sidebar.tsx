"use client";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Search, Grid3X3, List } from "lucide-react";

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

interface BlocksSidebarProps {
  blocks: Block[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

export function BlocksSidebar({
  blocks,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  viewMode,
  onViewModeChange,
}: BlocksSidebarProps) {
  const categories = ["All", ...new Set(blocks.map((block) => block.category))];

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-8 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search blocks..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 h-9 bg-background/50 border-border/50 focus:border-accent/50 focus:bg-background transition-all duration-200 focus:shadow-sm font-ndot"
          />
        </div>

        {/* Categories */}
        <div className="space-y-2">
          <h3 className="text-xs font-semibold text-foreground/80 px-2 tracking-wide uppercase font-ndot">Categories</h3>
          <div className="space-y-0.5">
            {categories.map((category) => {
              const count = category === "All" 
                ? blocks.length 
                : blocks.filter(block => block.category === category).length;
              
              return (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={cn(
                    "w-full flex items-center justify-between px-2 py-2 text-sm rounded-md transition-all duration-200 text-left font-ndot",
                    selectedCategory === category
                      ? "bg-accent/10 text-accent font-medium border border-accent/30"
                      : "text-foreground/70 hover:text-foreground hover:bg-accent/5"
                  )}
                >
                  <span>{category}</span>
                  <Badge variant="secondary" className="text-xs h-5 px-2 font-ndot">
                    {count}
                  </Badge>
                </button>
              );
            })}
          </div>
        </div>

        {/* View Options */}
        <div className="space-y-2">
          <h3 className="text-xs font-semibold text-foreground/80 px-2 tracking-wide uppercase font-ndot">View</h3>
          <div className="flex rounded-md bg-muted p-0.5">
            <button
              onClick={() => onViewModeChange("grid")}
              className={cn(
                "flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 text-xs font-medium rounded-sm transition-all duration-200 font-ndot",
                viewMode === "grid"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Grid3X3 className="h-3 w-3" />
              Grid
            </button>
            <button
              onClick={() => onViewModeChange("list")}
              className={cn(
                "flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 text-xs font-medium rounded-sm transition-all duration-200 font-ndot",
                viewMode === "list"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <List className="h-3 w-3" />
              List
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-2 pt-3 border-t border-border">
          <div className="px-2 space-y-1">
            <p className="text-xs text-muted-foreground font-ndot">
              {blocks.length} total blocks
            </p>
            <p className="text-xs text-muted-foreground font-ndot">
              {categories.length - 1} categories
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}