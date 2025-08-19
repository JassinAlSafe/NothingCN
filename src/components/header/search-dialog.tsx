"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, Circle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { searchableContent } from "./navigation-data";

// Enhanced Search Dialog Component with performance optimizations
export function SearchDialog() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [debouncedQuery, setDebouncedQuery] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const [isLoading, setIsLoading] = React.useState(false);

  // Memoized searchable content for performance
  const memoizedContent = React.useMemo(() => searchableContent, []);

  // Debounce search query
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Memoized filtered results with loading state
  const filteredResults = React.useMemo(() => {
    if (!debouncedQuery.trim()) {
      setIsLoading(false);
      return [];
    }

    setIsLoading(true);
    const results: typeof searchableContent = [];
    const query = debouncedQuery.toLowerCase();
    
    memoizedContent.forEach((category) => {
      const matchingItems = category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
      if (matchingItems.length > 0) {
        results.push({ ...category, items: matchingItems });
      }
    });
    
    setIsLoading(false);
    return results;
  }, [debouncedQuery, memoizedContent]);

  // Flatten results for keyboard navigation
  const flatResults = React.useMemo(() => {
    return filteredResults.flatMap(category => 
      category.items.map(item => ({ ...item, category: category.category }))
    );
  }, [filteredResults]);

  const handleItemSelect = React.useCallback((href: string) => {
    setOpen(false);
    setSearchQuery("");
    setSelectedIndex(-1);
    if (href.startsWith('/')) {
      router.push(href);
    }
  }, [router]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
        return;
      }
      
      if (!open) return;

      switch (e.key) {
        case "Escape":
          setOpen(false);
          setSelectedIndex(-1);
          break;
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < flatResults.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
          break;
        case "Enter":
          e.preventDefault();
          if (selectedIndex >= 0 && flatResults[selectedIndex]) {
            handleItemSelect(flatResults[selectedIndex].href);
          }
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, selectedIndex, flatResults, handleItemSelect]);

  // Reset selection when results change
  React.useEffect(() => {
    setSelectedIndex(-1);
  }, [filteredResults]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="relative justify-start text-sm text-muted-foreground h-9 w-full min-w-[240px] bg-muted/50 hover:bg-muted/70 border border-border rounded-md px-3 transition-all duration-200 hover:shadow-sm group"
        >
          <div className="flex items-center">
            <Search className="mr-2 h-4 w-4" />
            <span className="font-ndot">Search...</span>
          </div>
          <kbd className="pointer-events-none absolute right-2 top-2 hidden h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono text-[10px] font-medium md:flex border border-border/50">
            ⌘K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0 border-2 border-border bg-background/95 backdrop-blur-sm">
        <DialogHeader className="sr-only">
          <DialogTitle>Search NothingCN</DialogTitle>
        </DialogHeader>
        <div className="flex items-center border-b px-4 py-3 bg-muted/20">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <div className="flex gap-1" aria-hidden="true">
              <Circle className="h-1.5 w-1.5 bg-accent rounded-full motion-safe:animate-pulse" />
              <Circle className="h-1.5 w-1.5 bg-accent rounded-full motion-safe:animate-pulse motion-safe:[animation-delay:0.2s]" />
              <Circle className="h-1.5 w-1.5 bg-accent rounded-full motion-safe:animate-pulse motion-safe:[animation-delay:0.4s]" />
            </div>
          </div>
          <Input
            placeholder="Search components, pages, and more..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 border-0 bg-transparent px-3 py-0 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 font-ndot"
            autoFocus
            role="combobox"
            aria-expanded={filteredResults.length > 0}
            aria-controls="search-results"
            aria-activedescendant={selectedIndex >= 0 ? `search-item-${selectedIndex}` : undefined}
          />
          {isLoading && (
            <div className="ml-2">
              <Circle className="h-4 w-4 motion-safe:animate-spin text-muted-foreground" />
            </div>
          )}
        </div>
        <div 
          className="max-h-[400px] overflow-y-auto" 
          id="search-results"
          role="listbox"
          aria-label="Search results"
        >
          {filteredResults.length === 0 && debouncedQuery.trim() === "" && (
            <div className="p-6 text-center text-muted-foreground">
              <div className="mb-4 flex justify-center">
                <div className="relative">
                  <Circle className="h-8 w-8 text-accent" />
                  <div className="absolute inset-0 h-8 w-8 border-2 border-accent rounded-full motion-safe:animate-ping" />
                </div>
              </div>
              <div className="mb-2 text-lg font-medium font-ndot">
                Search NothingCN
              </div>
              <p className="text-sm">
                Find components, pages, and documentation quickly.
              </p>
            </div>
          )}
          {filteredResults.length === 0 && debouncedQuery.trim() !== "" && (
            <div className="p-6 text-center text-muted-foreground">
              <div className="mb-4 flex justify-center">
                <Circle className="h-8 w-8 text-muted-foreground opacity-50" />
              </div>
              <div className="mb-2 text-lg font-medium font-ndot">
                No results found
              </div>
              <p className="text-sm">
                Try searching for components, pages, or documentation.
              </p>
            </div>
          )}
          {filteredResults.map((category, categoryIndex) => (
            <div key={category.category} className="p-2">
              <div className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider font-ndot">
                {category.category}
              </div>
              <div className="space-y-1" role="group" aria-labelledby={`category-${categoryIndex}`}>
                {category.items.map((item, itemIndex) => {
                  const globalIndex = filteredResults
                    .slice(0, categoryIndex)
                    .reduce((acc, cat) => acc + cat.items.length, 0) + itemIndex;
                  const isSelected = selectedIndex === globalIndex;
                  
                  return (
                    <button
                      key={item.href}
                      id={`search-item-${globalIndex}`}
                      onClick={() => handleItemSelect(item.href)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-md transition-colors duration-200 group border",
                        isSelected 
                          ? "bg-accent/10 border-accent/20 text-accent" 
                          : "border-transparent hover:bg-muted/50 hover:border-accent/20"
                      )}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className={cn(
                            "font-medium transition-colors font-ndot",
                            isSelected ? "text-accent" : "group-hover:text-accent"
                          )}>
                            {item.name}
                          </div>
                          <div className="text-sm text-muted-foreground line-clamp-1">
                            {item.description}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <ArrowRight className={cn(
                            "h-3 w-3 transition-opacity text-accent",
                            isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                          )} />
                          <Badge
                            variant="secondary"
                            className={cn(
                              "text-xs transition-opacity font-ndot",
                              isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                            )}
                          >
                            Enter
                          </Badge>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t p-3 text-xs text-muted-foreground bg-muted/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Circle className="h-1 w-1 bg-accent rounded-full" />
              <span className="font-ndot">Use ↑↓ to navigate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-ndot">Enter to select</span>
              <Circle className="h-1 w-1 bg-accent rounded-full" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}