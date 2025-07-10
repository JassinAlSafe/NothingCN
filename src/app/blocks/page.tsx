"use client";

import { useState, useMemo } from "react";
import { blocks } from "./data/blocks";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui/code-block";
import { Input } from "@/components/ui/input";
import { copyToClipboard } from "./utils/code-actions";
import { cn } from "@/lib/utils";
import {
  Monitor,
  Tablet,
  Smartphone,
  Copy,
  Check,
  ExternalLink,
  Search,
  Grid3X3,
  List,
  Filter,
} from "lucide-react";

export default function BlocksPage() {
  const [selectedBlock, setSelectedBlock] = useState(blocks[0]);
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [deviceView, setDeviceView] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = ["All", ...new Set(blocks.map((block) => block.category))];

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
    const success = await copyToClipboard(selectedBlock.code);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <h1 className="text-2xl font-bold font-ndot tracking-wide">BUILDING BLOCKS</h1>
              </div>
              <p className="text-sm text-muted-foreground">
                Copy and paste into your apps. Free forever.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Browse all
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex gap-6 lg:gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-6 py-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search blocks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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
                        onClick={() => {
                          setSelectedCategory(category);
                          const categoryBlocks = blocks.filter(
                            (block) => category === "All" || block.category === category
                          );
                          if (categoryBlocks.length > 0 && selectedBlock && 
                              !categoryBlocks.some(block => block.id === selectedBlock.id)) {
                            setSelectedBlock(categoryBlocks[0]);
                          }
                        }}
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
                    onClick={() => setViewMode("grid")}
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
                    onClick={() => setViewMode("list")}
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
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="py-6">
              {selectedBlock ? (
                <div className="space-y-6">
                  {/* Block Header */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="text-xl font-semibold">{selectedBlock.title}</h2>
                        <Badge variant="secondary" className="text-xs">
                          {selectedBlock.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {selectedBlock.difficulty}
                        </Badge>
                      </div>
                      {selectedBlock.description && (
                        <p className="text-sm text-muted-foreground">{selectedBlock.description}</p>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCopy}
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
                        >
                          <Smartphone className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="border border-border rounded-lg overflow-hidden">
                    {activeTab === "preview" ? (
                      <div className="bg-muted/20 overflow-auto">
                        <div className={cn("min-h-[400px] p-8", getDeviceClasses())}>
                          {selectedBlock.component}
                        </div>
                      </div>
                    ) : (
                      <div className="h-[500px]">
                        <CodeBlock
                          code={selectedBlock.code}
                          language="tsx"
                          title={`${selectedBlock.title.replace(/\s+/g, "")}.tsx`}
                          showLineNumbers={true}
                          className="h-full"
                        />
                      </div>
                    )}
                  </div>

                  {/* Block Grid */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">All Blocks</h3>
                      <p className="text-sm text-muted-foreground">
                        {filteredBlocks.length} blocks
                      </p>
                    </div>
                    
                    <div className={cn(
                      "grid gap-4",
                      viewMode === "grid" 
                        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" 
                        : "grid-cols-1"
                    )}>
                      {filteredBlocks.map((block) => (
                        <button
                          key={block.id}
                          onClick={() => setSelectedBlock(block)}
                          className={cn(
                            "text-left border rounded-lg p-4 transition-all hover:border-accent/50 hover:shadow-sm",
                            selectedBlock?.id === block.id
                              ? "border-accent/50 bg-accent/5 shadow-sm"
                              : "border-border bg-background"
                          )}
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{block.title}</h4>
                              <div className="flex items-center gap-1">
                                <Badge variant="secondary" className="text-xs">
                                  {block.category}
                                </Badge>
                              </div>
                            </div>
                            {block.description && (
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {block.description}
                              </p>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No blocks found matching your search.</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}