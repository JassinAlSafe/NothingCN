"use client";

import { useState } from "react";
import { ThemesSidebarNav } from "@/components/themes-sidebar-nav";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <div className="flex">
        {/* Mobile Sidebar */}
        <aside className={cn(
          "fixed top-20 left-0 z-50 h-[calc(100vh-5rem)] w-72 sm:w-80 shrink-0 border-r-2 border-border bg-background transform transition-transform duration-300 md:hidden",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="h-full overflow-y-auto py-4 px-4 sm:py-6 sm:px-6 scrollbar-thin scroll-smooth">
            <ThemesSidebarNav />
          </div>
        </aside>
        
        {/* Desktop Sidebar */}
        <aside className="fixed top-20 left-0 z-30 hidden h-[calc(100vh-5rem)] w-64 lg:w-72 shrink-0 border-r-2 border-border bg-background/95 backdrop-blur-xl md:block">
          <div className="h-full overflow-y-auto py-6 px-6 scrollbar-thin scroll-smooth">
            <ThemesSidebarNav />
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 md:ml-64 lg:ml-72">
          {/* Mobile Header */}
          <div className="sticky top-20 z-20 border-b-2 border-border bg-background/95 backdrop-blur-xl px-6 py-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="h-10 w-10 border-2 border-transparent hover:border-accent"
            >
              {sidebarOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          </div>
          
          <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8 lg:px-6 lg:py-12 xl:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}