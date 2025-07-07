"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Github, Sun, Moon, Search, Zap } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Components", href: "/components" },
  { name: "Blocks", href: "/blocks" },
  { name: "Themes", href: "/themes" },
  { name: "Documentation", href: "/docs" },
];

const searchableComponents = [
  { name: "Button", href: "/components/button", description: "Displays a button or component that looks like a button" },
  { name: "Card", href: "/components/card", description: "Displays a card with header, content, and footer" },
  { name: "Badge", href: "/components/badge", description: "Displays a badge or component that looks like a badge" },
  { name: "Code Block", href: "/components/code-block", description: "Displays syntax-highlighted code with copy functionality" },
];

// Custom hook for system theme detection
function useSystemTheme() {
  const [systemTheme, setSystemTheme] = React.useState<'light' | 'dark'>('light');
  
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light');
    
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return systemTheme;
}

// Custom hook for scroll progress
function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  
  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      setScrollProgress((currentProgress / totalHeight) * 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollProgress;
}

// Search component
function SearchDialog() {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredComponents, setFilteredComponents] = React.useState(searchableComponents);
  
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);
  
  React.useEffect(() => {
    const filtered = searchableComponents.filter(component => 
      component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredComponents(filtered);
  }, [searchQuery]);
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          className="relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-56 h-9 bg-muted/50 hover:bg-muted transition-all duration-300"
        >
          <Search className="mr-2 h-4 w-4" />
          Search components...
          <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Search Components</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input 
            placeholder="Search components..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9"
          />
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {filteredComponents.map((component) => (
              <Link
                key={component.name}
                href={component.href}
                className="block p-3 rounded-lg hover:bg-muted transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                <div className="font-medium">{component.name}</div>
                <div className="text-sm text-muted-foreground">{component.description}</div>
              </Link>
            ))}
            {filteredComponents.length === 0 && (
              <div className="p-3 text-center text-muted-foreground">
                No components found.
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [themeMode, setThemeMode] = React.useState<'light' | 'dark' | 'system'>('system');
  const pathname = usePathname();
  const systemTheme = useSystemTheme();
  const scrollProgress = useScrollProgress();
  
  const applyTheme = React.useCallback((mode: 'light' | 'dark' | 'system') => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    
    if (mode === 'system') {
      root.classList.add(systemTheme);
    } else {
      root.classList.add(mode);
    }
  }, [systemTheme]);
  
  // Initialize theme from localStorage
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' || 'system';
    setThemeMode(savedTheme);
    applyTheme(savedTheme);
  }, [applyTheme]);
  
  // Apply theme based on mode and system preference
  React.useEffect(() => {
    applyTheme(themeMode);
  }, [themeMode, applyTheme]);
  
  const toggleTheme = () => {
    const newMode = themeMode === 'light' ? 'dark' : themeMode === 'dark' ? 'system' : 'light';
    setThemeMode(newMode);
    localStorage.setItem('theme', newMode);
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
      if (isMenuOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);
  
  // Focus trap for mobile menu
  React.useEffect(() => {
    if (isMenuOpen) {
      const focusableElements = document.querySelectorAll(
        '.mobile-menu a, .mobile-menu button'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
      
      const handleTab = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
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
      
      document.addEventListener('keydown', handleTab);
      return () => document.removeEventListener('keydown', handleTab);
    }
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-0.5 bg-accent transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="container flex h-20 items-center">
        <div className="mr-6 hidden md:flex">
          <Link href="/" className="mr-8 flex items-center space-x-3 group">
            <div className="flex items-center justify-center w-8 h-8 bg-accent text-accent-foreground rounded-full transition-all duration-300 group-hover:scale-110">
              <Zap className="h-4 w-4" />
            </div>
            <span className="font-bold text-xl font-ndot tracking-tight group-hover:text-accent transition-colors duration-300">
              NothingCN
            </span>
          </Link>
          
          {/* Visual Separator */}
          <div className="w-px h-6 bg-border mr-8 self-center" />
          
          <nav className="flex items-center space-x-8 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative transition-all duration-300 hover:text-accent group px-2 py-1 rounded-md hover:bg-accent/10 hover:shadow-sm hover:scale-105",
                  pathname === item.href
                    ? "text-foreground font-semibold"
                    : "text-foreground/70 font-medium"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-accent rounded-full" />
                )}
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex flex-1 max-w-sm mx-6">
          <SearchDialog />
        </div>

        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 transition-all duration-300" />
          ) : (
            <Menu className="h-6 w-6 transition-all duration-300" />
          )}
          <span className="sr-only">Toggle Menu</span>
        </Button>

        <div className="flex flex-1 items-center justify-between space-x-4 md:justify-end">
          {/* Mobile Search */}
          <div className="flex-1 md:hidden">
            <SearchDialog />
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Theme Toggle with enhanced states */}
            <Button
              variant="ghost"
              size="icon"
              className="relative transition-all duration-300 hover:scale-110 hover:bg-accent/10 min-h-[44px] min-w-[44px]"
              onClick={toggleTheme}
              title={`Current theme: ${themeMode}`}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme (current: {themeMode})</span>
            </Button>
            
            {/* Visual Separator */}
            <div className="w-px h-6 bg-border mx-2" />
            
            <Badge className="hidden sm:inline-flex bg-accent text-accent-foreground border-0 px-3 py-1 font-medium transition-all duration-300 hover:scale-105">
              BETA
            </Badge>
            
            <Button 
              variant="ghost" 
              size="icon" 
              asChild 
              className="transition-all duration-300 hover:scale-110 hover:bg-accent/10 min-h-[44px] min-w-[44px]"
            >
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile menu with swipe support */}
      {isMenuOpen && (
        <div 
          className="mobile-menu md:hidden border-t-2 border-border bg-background/95 backdrop-blur-xl animate-in slide-in-from-top-2 duration-300"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="space-y-1 px-4 pb-6 pt-4">
            {/* Progressive disclosure sections */}
            <div className="space-y-1">
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Navigation
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex px-4 py-4 text-base font-medium transition-all duration-300 border-2 border-transparent hover:border-accent hover:bg-accent/10 rounded-lg min-h-[44px] items-center hover:scale-[1.02] hover:shadow-sm",
                    pathname === item.href
                      ? "border-accent bg-accent/10 text-foreground font-semibold"
                      : "text-foreground/70"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  {pathname === item.href && (
                    <div className="ml-auto w-2 h-2 bg-accent rounded-full" />
                  )}
                </Link>
              ))}
            </div>
            
            {/* Additional mobile menu sections */}
            <div className="border-t border-border pt-4 mt-4">
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Quick Links
              </div>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex px-4 py-4 text-base font-medium transition-all duration-300 border-2 border-transparent hover:border-accent hover:bg-accent/10 rounded-lg min-h-[44px] items-center hover:scale-[1.02] hover:shadow-sm text-foreground/70"
                onClick={() => setIsMenuOpen(false)}
              >
                <Github className="mr-3 h-5 w-5" />
                GitHub Repository
              </Link>
            </div>
            
            {/* Swipe indicator */}
            <div className="flex justify-center pt-2">
              <div className="w-8 h-1 bg-muted-foreground/30 rounded-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
