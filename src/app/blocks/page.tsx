"use client";

import { useState, useMemo } from "react";
import { blocks } from "./data/blocks";
import { copyToClipboard } from "./utils/code-actions";
import { BlocksSidebar } from "./components/blocks-sidebar";
import { BlockPreview } from "./components/block-preview";
import { BlockGrid } from "./components/block-grid";
import { Button } from "@/components/ui/button";
import { Filter, Sparkles } from "lucide-react";

export default function BlocksPage() {
  const [selectedBlock, setSelectedBlock] = useState(blocks[0]);
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredBlocks = useMemo(() => {
    return blocks.filter((block) => {
      const matchesCategory = selectedCategory === "All" || block.category === selectedCategory;
      const matchesSearch = block.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           block.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           block.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopy = async () => {
    if (!selectedBlock) return;
    const success = await copyToClipboard(selectedBlock.code);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const categoryBlocks = blocks.filter(
      (block) => category === "All" || block.category === category
    );
    if (categoryBlocks.length > 0 && selectedBlock && 
        !categoryBlocks.some(block => block.id === selectedBlock.id)) {
      setSelectedBlock(categoryBlocks[0]);
    }
  };

  const handleBlockSelect = (block: typeof blocks[0]) => {
    setSelectedBlock(block);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
      <div className="space-y-8">
        {/* Page Header */}
        <div className="space-y-4 border-b border-border pb-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-accent/70 rounded-full animate-pulse delay-200" />
                  <div className="w-1 h-1 bg-accent/40 rounded-full animate-pulse delay-400" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-ndot">
                  BUILDING BLOCKS
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-ndot">
                Beautiful, customizable components that you can copy and paste into your apps. 
                Open source. Free forever.
              </p>
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              <Button variant="outline" size="sm" className="gap-2 font-ndot">
                <Filter className="h-4 w-4" />
                Browse all
              </Button>
              <Button size="sm" className="gap-2 bg-accent hover:bg-accent/90 font-ndot">
                <Sparkles className="h-4 w-4" />
                New blocks
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          <BlocksSidebar
            blocks={blocks}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />

          <main className="flex-1 min-w-0">
            <div className="space-y-8">
              {selectedBlock ? (
                <>
                  <BlockPreview
                    block={selectedBlock}
                    onCopy={handleCopy}
                    copied={copied}
                  />
                  
                  <BlockGrid
                    blocks={filteredBlocks}
                    selectedBlock={selectedBlock}
                    onBlockSelect={handleBlockSelect}
                    viewMode={viewMode}
                  />
                </>
              ) : (
                <div className="text-center py-20">
                  <div className="space-y-6">
                    <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center">
                      <div className="w-10 h-10 border-2 border-dashed border-muted-foreground/50 rounded" />
                    </div>
                    <div className="space-y-3">
                      <p className="text-lg font-medium text-foreground font-ndot">
                        No blocks found
                      </p>
                      <p className="text-muted-foreground font-ndot">
                        Try adjusting your search or filters.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}