"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Github as GitHubIcon,
  Sun,
  Moon,
  Search,
  Zap,
  Star,
  Circle,
  ArrowRight,
} from "lucide-react";

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

const navigation = [
  { name: "Components", href: "/components" },
  { name: "Blocks", href: "/blocks" },
  { name: "Themes", href: "/themes" },
  { name: "Docs", href: "/docs" },
];

const searchableContent = [
  {
    category: "Components",
    items: [
      {
        name: "Accordion",
        href: "/components/accordion",
        description: "Collapsible content sections with smooth animations",
      },
      {
        name: "Button",
        href: "/components/button",
        description: "Versatile button variants for any interface",
      },
      {
        name: "Card",
        href: "/components/card",
        description: "Displays content in a card format",
      },
      {
        name: "Badge",
        href: "/components/badge",
        description: "Small status indicators and labels",
      },
      {
        name: "Code Block",
        href: "/components/code-block",
        description: "Syntax-highlighted code display",
      },
      {
        name: "Input",
        href: "/components/input",
        description: "Form input components with validation",
      },
      {
        name: "Dialog",
        href: "/components/dialog",
        description: "Modal dialog component for displaying content and forms",
      },
      {
        name: "Discussion Card",
        href: "/components/discussion-card",
        description: "Interactive discussion and comment cards",
      },
      {
        name: "Pixel Weather Card",
        href: "/components/pixel-weather-card",
        description: "Retro-style weather display",
      },
      {
        name: "Pixel Forms",
        href: "/components/pixel-forms",
        description: "Retro-styled form components",
      },
      {
        name: "Nothing Calendar",
        href: "/components/nothing-calendar",
        description: "Modern calendar component",
      },
    ],
  },
  {
    category: "Pages",
    items: [
      { name: "Home", href: "/", description: "Welcome to NothingCN" },
      {
        name: "Components",
        href: "/components",
        description: "Browse all available components",
      },
      {
        name: "Blocks",
        href: "/blocks",
        description: "Pre-built component combinations",
      },
      { name: "Themes", href: "/themes", description: "Customize your theme" },
      {
        name: "Documentation",
        href: "/docs",
        description: "Learn how to use NothingCN",
      },
      {
        name: "Contribute",
        href: "/contribute",
        description: "Help improve NothingCN",
      },
    ],
  },
];

// Custom hook for system theme detection
function useSystemTheme() {
  const [systemTheme, setSystemTheme] = React.useState<"light" | "dark">(
    "light"
  );

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return systemTheme;
}

// Enhanced Search Dialog Component
function SearchDialog() {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredResults, setFilteredResults] = React.useState<
    typeof searchableContent
  >([]);

  // Keyboard shortcut
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter search results
  React.useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredResults([]);
      return;
    }

    const results: typeof searchableContent = [];
    searchableContent.forEach((category) => {
      const matchingItems = category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (matchingItems.length > 0) {
        results.push({ ...category, items: matchingItems });
      }
    });
    setFilteredResults(results);
  }, [searchQuery]);

  const handleItemSelect = (href: string) => {
    setOpen(false);
    setSearchQuery("");
    window.location.href = href;
  };

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
            <div className="flex gap-1">
              <Circle className="h-1.5 w-1.5 bg-accent rounded-full animate-pulse" />
              <Circle className="h-1.5 w-1.5 bg-accent rounded-full animate-pulse [animation-delay:0.2s]" />
              <Circle className="h-1.5 w-1.5 bg-accent rounded-full animate-pulse [animation-delay:0.4s]" />
            </div>
          </div>
          <Input
            placeholder="Search components, pages, and more..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 border-0 bg-transparent px-3 py-0 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 font-ndot"
            autoFocus
          />
        </div>
        <div className="max-h-[400px] overflow-y-auto">
          {filteredResults.length === 0 && searchQuery.trim() === "" && (
            <div className="p-6 text-center text-muted-foreground">
              <div className="mb-4 flex justify-center">
                <div className="relative">
                  <Circle className="h-8 w-8 text-accent" />
                  <div className="absolute inset-0 h-8 w-8 border-2 border-accent rounded-full animate-ping" />
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
          {filteredResults.length === 0 && searchQuery.trim() !== "" && (
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
          {filteredResults.map((category) => (
            <div key={category.category} className="p-2">
              <div className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider font-ndot">
                {category.category}
              </div>
              <div className="space-y-1">
                {category.items.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleItemSelect(item.href)}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-muted/50 transition-colors duration-200 group border border-transparent hover:border-accent/20"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-medium group-hover:text-accent transition-colors font-ndot">
                          {item.name}
                        </div>
                        <div className="text-sm text-muted-foreground line-clamp-1">
                          {item.description}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                        <Badge
                          variant="secondary"
                          className="text-xs opacity-0 group-hover:opacity-100 transition-opacity font-ndot"
                        >
                          Enter
                        </Badge>
                      </div>
                    </div>
                  </button>
                ))}
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

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [themeMode, setThemeMode] = React.useState<"light" | "dark" | "system">(
    "system"
  );
  const pathname = usePathname();
  const systemTheme = useSystemTheme();

  const applyTheme = React.useCallback(
    (mode: "light" | "dark" | "system") => {
      const root = document.documentElement;
      root.classList.remove("light", "dark");

      if (mode === "system") {
        root.classList.add(systemTheme);
      } else {
        root.classList.add(mode);
      }
    },
    [systemTheme]
  );

  // Initialize theme from localStorage
  React.useEffect(() => {
    const savedTheme =
      (localStorage.getItem("theme") as "light" | "dark" | "system") ||
      "system";
    setThemeMode(savedTheme);
    applyTheme(savedTheme);
  }, [applyTheme]);

  // Apply theme based on mode and system preference
  React.useEffect(() => {
    applyTheme(themeMode);
  }, [themeMode, applyTheme]);

  const toggleTheme = () => {
    const newMode =
      themeMode === "light"
        ? "dark"
        : themeMode === "dark"
        ? "system"
        : "light";
    setThemeMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  // Handle swipe gestures for mobile menu
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && isMenuOpen) {
      setIsMenuOpen(false);
    } else if (isRightSwipe && !isMenuOpen) {
      setIsMenuOpen(true);
    }
  };

  // Close menu on outside click
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest(".mobile-menu")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Focus trap for mobile menu
  React.useEffect(() => {
    if (isMenuOpen) {
      const focusableElements = document.querySelectorAll(
        ".mobile-menu a, .mobile-menu button"
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      const handleTab = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener("keydown", handleTab);
      return () => document.removeEventListener("keydown", handleTab);
    }
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/95 transition-all duration-300">
      <div className="container flex h-14 items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 group mr-8 transition-all duration-300"
        >
          <div className="flex items-center justify-center w-6 h-6 bg-foreground text-background rounded-sm transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 group-hover:shadow-lg">
            <Zap className="h-3 w-3 transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <span className="font-bold text-base font-ndot tracking-tight transition-colors duration-300 group-hover:text-accent">
            NothingCN
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-all duration-300 hover:text-foreground py-2 px-1 rounded-md hover:bg-accent/5 group",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
              {pathname === item.href && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full transition-all duration-300" />
              )}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-accent/50 rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center ml-auto space-x-3">
          {/* Search */}
          <div className="hidden md:block">
            <SearchDialog />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-9 w-9"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle Menu</span>
          </Button>

          {/* GitHub Link with Star Count */}
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="h-9 px-3 transition-all duration-300 hover:bg-accent/10 hover:text-accent group"
          >
            <Link
              href="https://github.com/JassinAlSafe/NothingCN"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5"
            >
              <GitHubIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <Star className="h-3 w-3 fill-current transition-colors duration-300 group-hover:text-yellow-500" />
              <span className="text-xs font-medium">1.2k</span>
            </Link>
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9 transition-all duration-300 hover:bg-accent/10 hover:text-accent group"
            title={`Theme: ${themeMode}`}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 group-hover:rotate-180" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 group-hover:-rotate-90" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "mobile-menu md:hidden border-t border-border bg-background/95 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div
          className="px-4 py-6 space-y-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Mobile Search */}
          <div className="mb-6">
            <SearchDialog />
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2.5 text-base font-medium rounded-md transition-all duration-300 group relative overflow-hidden",
                  pathname === item.href
                    ? "text-foreground bg-accent/10 border-l-2 border-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30 hover:translate-x-1"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="absolute inset-0 bg-accent/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="relative z-10">{item.name}</span>
                {pathname === item.href && (
                  <div className="ml-auto w-2 h-2 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="border-t border-border pt-4 mt-6">
            <Link
              href="https://github.com/JassinAlSafe/NothingCN"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2.5 text-base font-medium text-muted-foreground hover:text-foreground rounded-md transition-all duration-300 group hover:bg-accent/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <GitHubIcon className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span>GitHub</span>
              <div className="ml-auto flex items-center space-x-1">
                <Star className="h-3 w-3 fill-current transition-colors duration-300 group-hover:text-yellow-500" />
                <span className="text-xs">2</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
