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
  Zap,
  Star,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SearchDialog } from "./search-dialog";
import { navigation } from "./navigation-data";
import { useSystemTheme, useGitHubData } from "./hooks";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [theme, setTheme] = React.useState<"light" | "dark" | "system">("system");
  const systemIsDark = useSystemTheme();
  const { starCount, isLoading: githubLoading } = useGitHubData();

  // Determine effective theme
  const effectiveTheme = theme === "system" ? (systemIsDark ? "dark" : "light") : theme;

  // Theme toggle handler with improved UX
  const toggleTheme = React.useCallback(() => {
    setTheme((current) => {
      const themeOrder: Array<typeof theme> = ["light", "dark", "system"];
      const currentIndex = themeOrder.indexOf(current);
      const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
      
      // Apply to document immediately for better UX
      if (nextTheme === "system") {
        document.documentElement.classList.toggle("dark", systemIsDark);
      } else {
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
      }
      
      return nextTheme;
    });
  }, [systemIsDark]);

  // Apply theme changes
  React.useEffect(() => {
    if (theme === "system") {
      document.documentElement.classList.toggle("dark", systemIsDark);
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme, systemIsDark]);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" style={{ top: 'var(--banner-height, 0px)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center border border-accent/20 shadow-lg shadow-accent/20">
                  <Zap className="h-5 w-5 text-accent-foreground" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-background animate-pulse" />
              </div>
              <span className="font-bold text-xl font-ndot tracking-wider">
                NothingCN
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent font-ndot",
                  pathname === item.href
                    ? "text-accent"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search - Hidden on mobile to save space */}
            <div className="hidden lg:block">
              <SearchDialog />
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="h-9 w-9 p-0"
              aria-label={`Switch to ${
                theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
              } theme`}
            >
              <div className="relative">
                {effectiveTheme === "light" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
                {theme === "system" && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-accent rounded-full" />
                )}
              </div>
            </Button>

            {/* GitHub Star Button */}
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center space-x-2 h-9 px-3 bg-muted/50 hover:bg-muted/80 border-border/50"
              asChild
            >
              <a 
                href="https://github.com/nothingcn/nothingcn" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Star NothingCN on GitHub"
              >
                <GitHubIcon className="h-4 w-4" />
                <Star className="h-3 w-3" />
                <span className="font-ndot text-sm">
                  {githubLoading ? "..." : starCount}
                </span>
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-9 w-9 p-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="lg:hidden">
              <SearchDialog />
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors font-ndot",
                    pathname === item.href
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-accent hover:bg-accent/5"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile GitHub Link */}
            <div className="pt-4 border-t border-border/40">
              <a 
                href="https://github.com/nothingcn/nothingcn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-3 py-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <GitHubIcon className="h-5 w-5" />
                <span className="font-ndot">View on GitHub</span>
                <div className="flex items-center space-x-1 ml-auto">
                  <Star className="h-4 w-4" />
                  <span className="text-sm font-ndot">
                    {githubLoading ? "..." : starCount}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}