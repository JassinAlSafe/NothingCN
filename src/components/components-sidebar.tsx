"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { NothingProgress } from "@/components/ui/nothing-progress";
import { Search, ChevronDown, ChevronRight } from "lucide-react";

interface SidebarItem {
  title: string;
  href: string;
  disabled?: boolean;
  label?: string;
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

const sidebarConfig: SidebarSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/components",
      },
      {
        title: "Installation",
        href: "/components/installation",
      },
      {
        title: "Typography",
        href: "/components/typography",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Accordion",
        href: "/components/accordion",
        label: "New",
      },
      {
        title: "Alert",
        href: "/components/alert",
        label: "New",
      },
      {
        title: "Button",
        href: "/components/button",
      },
      {
        title: "Card",
        href: "/components/card",
      },
      {
        title: "Badge",
        href: "/components/badge",
      },
      {
        title: "Banner",
        href: "/components/banner",
        label: "New",
      },
      {
        title: "Code Block",
        href: "/components/code-block",
      },
      {
        title: "Discussion Card",
        href: "/components/discussion-card",
        label: "New",
      },
      {
        title: "Tabs",
        href: "/components/tabs",
        label: "New",
      },
      {
        title: "Input",
        href: "/components/input",
        label: "New",
      },
      {
        title: "Select",
        href: "/components/select",
        disabled: true,
        label: "Soon",
      },
      {
        title: "Dialog",
        href: "/components/dialog",
        label: "New",
      },
    ],
  },
  {
    title: "Creative Components",
    items: [
      {
        title: "Pixel Weather Card",
        href: "/components/pixel-weather-card",
        label: "New",
      },
      {
        title: "Pixel Forms",
        href: "/components/pixel-forms",
        label: "New",
      },
      {
        title: "Nothing Calendar",
        href: "/components/nothing-calendar",
        label: "New",
      },
      {
        title: "Gradient Button",
        href: "/components/gradient-button",
        disabled: true,
        label: "New",
      },
      {
        title: "Neon Card",
        href: "/components/neon-card",
        disabled: true,
        label: "New",
      },
      {
        title: "Glitch Text",
        href: "/components/glitch-text",
        disabled: true,
        label: "New",
      },
      {
        title: "Pixel Border",
        href: "/components/pixel-border",
        disabled: true,
        label: "New",
      },
    ],
  },
];

// Calculate progress for each section
const getCompletionStats = (section: SidebarSection) => {
  const total = section.items.length;
  const completed = section.items.filter(item => !item.disabled).length;
  const percentage = Math.round((completed / total) * 100);
  return { completed, total, percentage };
};

export function ComponentsSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [collapsedSections, setCollapsedSections] = useState<string[]>([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLAnchorElement>(null);


  const toggleSection = (sectionTitle: string) => {
    setCollapsedSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(s => s !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sidebarConfig;
    
    return sidebarConfig.map(section => ({
      ...section,
      items: section.items.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(section => section.items.length > 0);
  }, [searchQuery]);

  // Get all visible items for keyboard navigation
  const visibleItems = useMemo(() => {
    return filteredSections.flatMap(section => 
      collapsedSections.includes(section.title) ? [] : section.items
    );
  }, [filteredSections, collapsedSections]);

  // Scroll to active item on mount and path change
  useEffect(() => {
    if (activeItemRef.current && containerRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
    }
  }, [pathname]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current?.contains(document.activeElement)) return;
      
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex(prev => 
            prev < visibleItems.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex(prev => prev > 0 ? prev - 1 : prev);
          break;
        case 'Enter':
          e.preventDefault();
          if (focusedIndex >= 0 && focusedIndex < visibleItems.length) {
            const item = visibleItems[focusedIndex];
            if (!item.disabled && item.href.startsWith('/')) {
              router.push(item.href);
            }
          }
          break;
        case 'Escape':
          setFocusedIndex(-1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [visibleItems, focusedIndex, router]);

  return (
    <div ref={containerRef} className="space-y-8" tabIndex={0}>
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-accent rounded-full" />
          <h4 className="text-lg font-bold font-ndot tracking-wide">
            NOTHINGCN
          </h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Creative components for modern web applications.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search components..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-background/50 border-border/50 focus:border-accent/50 focus:bg-background transition-colors"
        />
      </div>

      {/* Navigation Sections */}
      <div className="space-y-6">
        {filteredSections.map((section) => {
          const stats = getCompletionStats(section);
          return (
            <div key={section.title} className="space-y-3">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold uppercase tracking-wider text-foreground/60 hover:text-foreground/80 transition-colors group rounded-md hover:bg-accent/5"
              >
                <div className="flex items-center space-x-2">
                  <span>{section.title}</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-[10px] font-ndot text-muted-foreground">
                      {stats.completed}/{stats.total}
                    </span>
                    <div className="w-8">
                      <NothingProgress 
                        value={stats.percentage} 
                        size="sm" 
                        variant="dotted"
                      />
                    </div>
                  </div>
                </div>
                {collapsedSections.includes(section.title) ? (
                  <ChevronRight className="h-3 w-3 transition-transform group-hover:scale-110" />
                ) : (
                  <ChevronDown className="h-3 w-3 transition-transform group-hover:scale-110" />
                )}
              </button>
            {!collapsedSections.includes(section.title) && (
              <div className="space-y-1">
                {section.items.map((item) => {
                  const globalIndex = visibleItems.findIndex(vi => vi.href === item.href);
                  const isKeyboardFocused = globalIndex === focusedIndex;
                  
                  return (
                    <div key={item.href} className="relative">
                      <Link
                        ref={pathname === item.href ? activeItemRef : null}
                        href={item.href}
                        className={cn(
                          "group flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-accent/10 hover:text-accent rounded-lg border border-transparent hover:border-accent/20 focus:outline-none focus:ring-2 focus:ring-accent/50",
                          pathname === item.href
                            ? "bg-accent/10 text-accent border-accent/30 shadow-sm"
                            : "text-foreground/80 hover:text-foreground",
                          item.disabled && "cursor-not-allowed opacity-50 hover:bg-transparent hover:text-foreground/50",
                          isKeyboardFocused && "ring-2 ring-accent/50 bg-accent/5"
                        )}
                        onClick={item.disabled ? (e) => e.preventDefault() : undefined}
                      >
                    <span className="flex items-center space-x-2">
                      {pathname === item.href && (
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      )}
                      <span>{item.title}</span>
                    </span>
                    {item.label && (
                      <Badge
                        variant="secondary"
                        className={cn(
                          "text-xs px-2 py-0.5 font-medium",
                          item.label === "New" && "bg-accent/20 text-accent border border-accent/30",
                          item.label === "Soon" && "bg-muted/50 text-muted-foreground border border-border"
                        )}
                      >
                        {item.label}
                      </Badge>
                    )}
                  </Link>
                </div>
                  );
                })}
              </div>
            )}
          </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="border-t border-border pt-6 mt-8">
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground px-3">
            Made with Nothing OS inspiration
          </p>
          <div className="flex items-center space-x-1 px-3">
            <div className="w-1 h-1 bg-accent rounded-full" />
            <div className="w-1 h-1 bg-accent/60 rounded-full" />
            <div className="w-1 h-1 bg-accent/30 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}