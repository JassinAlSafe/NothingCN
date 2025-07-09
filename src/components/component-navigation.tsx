"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationItem {
  href: string;
  title: string;
}

interface ComponentNavigationProps {
  previous?: NavigationItem;
  next?: NavigationItem;
}

export function ComponentNavigation({ previous, next }: ComponentNavigationProps) {
  return (
    <div className="flex items-center justify-between py-8 border-t border-border">
      <div className="flex-1">
        {previous && (
          <Button
            variant="ghost"
            asChild
            className="h-auto p-4 justify-start group hover:bg-muted/50 transition-all duration-200"
          >
            <Link href={previous.href} className="flex items-center gap-3">
              <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground font-ndot">Previous</div>
                <div className="font-medium font-ndot">{previous.title}</div>
              </div>
            </Link>
          </Button>
        )}
      </div>
      
      <div className="flex-1 flex justify-end">
        {next && (
          <Button
            variant="ghost"
            asChild
            className="h-auto p-4 justify-end group hover:bg-muted/50 transition-all duration-200"
          >
            <Link href={next.href} className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-xs text-muted-foreground font-ndot">Next</div>
                <div className="font-medium font-ndot">{next.title}</div>
              </div>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}