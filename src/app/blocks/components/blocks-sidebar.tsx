"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Search, Grid3X3, List } from "lucide-react";

interface Block {
  id: string;
  title: string;
  category: string;
  description?: string;
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
      <div className="sticky top-24 space-y-6 py-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search blocks..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-background/50 border-border/50 focus:border-accent/50 focus:bg-background transition-colors"
          />
        </div>

        {/* Categories */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-foreground/80 px-3">Categories</h3>
          <div className="space-y-1">
            {categories.map((category) => {
              const count = category === "All" 
                ? blocks.length 
                : blocks.filter(block => block.category === category).length;
              
              return (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors text-left",
                    selectedCategory === category
                      ? "bg-accent/10 text-accent font-medium border border-accent/30"
                      : "text-foreground/70 hover:text-foreground hover:bg-accent/5"
                  )}
                >
                  <span>{category}</span>
                  <Badge variant="secondary" className="text-xs">
                    {count}
                  </Badge>
                </button>
              );
            })}
          </div>
        </div>

        {/* View Options */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-foreground/80 px-3">View</h3>
          <div className="flex rounded-lg bg-muted p-1">
            <button
              onClick={() => onViewModeChange("grid")}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                viewMode === "grid"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Grid3X3 className="h-4 w-4" />
              Grid
            </button>
            <button
              onClick={() => onViewModeChange("list")}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                viewMode === "list"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <List className="h-4 w-4" />
              List
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-2 pt-4 border-t border-border">
          <div className="px-3 space-y-1">
            <p className="text-xs text-muted-foreground">
              {blocks.length} total blocks
            </p>
            <p className="text-xs text-muted-foreground">
              {categories.length - 1} categories
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}