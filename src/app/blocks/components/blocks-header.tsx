"use client";

import { Button } from "@/components/ui/button";
import { Filter, Sparkles } from "lucide-react";

export function BlocksHeader() {
  return (
    <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 pt-8 pb-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1.5">
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                <div className="w-1 h-1 bg-accent/60 rounded-full animate-pulse delay-150" />
                <div className="w-0.5 h-0.5 bg-accent/30 rounded-full animate-pulse delay-300" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold font-ndot tracking-wide bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                BUILDING BLOCKS
              </h1>
            </div>
            <p className="text-muted-foreground max-w-2xl text-base sm:text-lg leading-relaxed">
              Beautiful, customizable components that you can copy and paste into your apps. 
              Open source. Free forever.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Browse all
            </Button>
            <Button size="sm" className="gap-2 bg-accent hover:bg-accent/90">
              <Sparkles className="h-4 w-4" />
              New blocks
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
