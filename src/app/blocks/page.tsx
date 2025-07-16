"use client";

import { useState, useMemo } from "react";
import { blocks } from "./data/blocks";
import { copyToClipboard } from "./utils/code-actions";
import { BlocksSidebar } from "./components/blocks-sidebar";
import { BlockPreview } from "./components/block-preview";
import { BlockGrid } from "./components/block-grid";
import { Button } from "@/components/ui/button";
import { Filter, Sparkles, Zap, Layers, Code2 } from "lucide-react";

export default function BlocksPage() {
  const [selectedBlock, setSelectedBlock] = useState(blocks[0]);
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredBlocks = useMemo(() => {
    return blocks.filter((block) => {
      const matchesCategory =
        selectedCategory === "All" || block.category === selectedCategory;
      const matchesSearch =
        block.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
    if (
      categoryBlocks.length > 0 &&
      selectedBlock &&
      !categoryBlocks.some((block) => block.id === selectedBlock.id)
    ) {
      setSelectedBlock(categoryBlocks[0]);
    }
  };

  const handleBlockSelect = (block: (typeof blocks)[0]) => {
    setSelectedBlock(block);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, currentColor 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
        <div className="space-y-8">
          {/* Enhanced Page Header */}
          <div className="space-y-6 border-b border-border/50 pb-12">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-6">
                {/* Nothing OS style header */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    {/* Animated geometric elements */}
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                        <div
                          className="absolute -top-1 -left-1 w-5 h-5 border border-accent/30 rounded-full animate-spin"
                          style={{ animationDuration: "3s" }}
                        />
                      </div>
                      <div className="w-2 h-2 bg-accent/70 rounded-full animate-pulse delay-200" />
                      <div className="w-1.5 h-1.5 bg-accent/50 rounded-full animate-pulse delay-400" />
                      <div className="w-1 h-1 bg-accent/30 rounded-full animate-pulse delay-600" />
                    </div>

                    {/* Main title with Nothing styling */}
                    <div className="space-y-1">
                      <h1 className="text-5xl sm:text-6xl font-bold tracking-wider font-ndot bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                        BUILDING BLOCKS
                      </h1>
                      <div className="flex items-center space-x-3">
                        <div className="h-0.5 w-12 bg-gradient-to-r from-accent to-accent/50" />
                        <span className="text-xs font-mono text-accent tracking-widest">
                          NOTHING.OS
                        </span>
                        <div className="h-0.5 w-8 bg-gradient-to-r from-accent/50 to-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Enhanced description */}
                  <div className="space-y-3">
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl font-ndot">
                      Beautiful, customizable components that you can copy and
                      paste into your apps.
                    </p>
                    <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-2xl font-ndot">
                      Open source. Free forever. Designed with Nothing OS
                      aesthetics.
                    </p>
                  </div>

                  {/* Stats row */}
                  <div className="flex items-center space-x-6 pt-2">
                    <div className="flex items-center space-x-2">
                      <Code2 className="h-4 w-4 text-accent" />
                      <span className="text-sm font-ndot text-muted-foreground">
                        {blocks.length} blocks available
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Layers className="h-4 w-4 text-accent" />
                      <span className="text-sm font-ndot text-muted-foreground">
                        Production ready
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-accent" />
                      <span className="text-sm font-ndot text-muted-foreground">
                        Copy & paste
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced action buttons */}
              <div className="flex items-center gap-4 shrink-0">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-3 font-ndot border-accent/30 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                >
                  <Filter className="h-4 w-4" />
                  Browse all
                </Button>
                <Button
                  size="lg"
                  className="gap-3 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 font-ndot shadow-lg shadow-accent/20 transition-all duration-300"
                >
                  <Sparkles className="h-4 w-4" />
                  New blocks
                  <div className="absolute inset-0 bg-white/10 rounded-md animate-pulse opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Main Content */}
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
                  <div className="text-center py-24">
                    <div className="space-y-8">
                      {/* Nothing-style empty state icon */}
                      <div className="relative mx-auto w-24 h-24">
                        <div className="absolute inset-0 bg-muted/50 rounded-full" />
                        <div className="absolute inset-2 border-2 border-dashed border-muted-foreground/30 rounded-full" />
                        <div className="absolute inset-4 bg-muted-foreground/10 rounded-full flex items-center justify-center">
                          <Code2 className="h-8 w-8 text-muted-foreground/50" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent/20 rounded-full animate-ping" />
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold font-ndot text-foreground">
                            No blocks found
                          </h3>
                          <div className="h-0.5 w-16 bg-gradient-to-r from-accent/50 to-transparent mx-auto" />
                        </div>
                        <p className="text-muted-foreground font-ndot max-w-md mx-auto leading-relaxed">
                          Try adjusting your search or filters to discover the
                          perfect components for your project.
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
    </div>
  );
}
