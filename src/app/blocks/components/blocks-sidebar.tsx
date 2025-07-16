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
      <div className="sticky top-8 space-y-6 p-4 border border-border/50 rounded-lg bg-card/50 backdrop-blur-sm">
        {/* Enhanced Search */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <h3 className="text-xs font-semibold text-foreground/80 tracking-wide uppercase font-ndot">
              Search
            </h3>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search blocks..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 h-10 bg-background/80 border-border/50 focus:border-accent/50 focus:bg-background transition-all duration-300 focus:shadow-md font-ndot rounded-lg"
            />
          </div>
        </div>

        {/* Enhanced Categories */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent/70 rounded-full animate-pulse delay-200" />
            <h3 className="text-xs font-semibold text-foreground/80 tracking-wide uppercase font-ndot">
              Categories
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent" />
          </div>
          <div className="space-y-0.5">
            {categories.map((category) => {
              const count =
                category === "All"
                  ? blocks.length
                  : blocks.filter((block) => block.category === category)
                      .length;

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
                  <Badge
                    variant="secondary"
                    className="text-xs h-5 px-2 font-ndot"
                  >
                    {count}
                  </Badge>
                </button>
              );
            })}
          </div>
        </div>

        {/* Enhanced View Options */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent/50 rounded-full animate-pulse delay-400" />
            <h3 className="text-xs font-semibold text-foreground/80 tracking-wide uppercase font-ndot">
              View
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent" />
          </div>
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

        {/* Enhanced Stats */}
        <div className="space-y-3 pt-4 border-t border-border/50">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent/30 rounded-full animate-pulse delay-600" />
            <h3 className="text-xs font-semibold text-foreground/80 tracking-wide uppercase font-ndot">
              Stats
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-ndot">
                Total blocks
              </span>
              <span className="text-xs font-semibold text-accent font-ndot">
                {blocks.length}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-ndot">
                Categories
              </span>
              <span className="text-xs font-semibold text-accent font-ndot">
                {categories.length - 1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
