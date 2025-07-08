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
  { name: "Contribute", href: "/contribute" },
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
          className="relative justify-start text-sm text-muted-foreground h-8 w-full max-w-[180px] bg-muted/30 hover:bg-muted/50 border border-border/50 rounded-md px-3"
        >
          <Search className="mr-2 h-3.5 w-3.5" />
          <span className="hidden sm:inline">Search...</span>
          <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded bg-muted px-1 font-mono text-[9px] font-medium lg:flex">
            ⌘K
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
      
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group mr-8">
          <div className="flex items-center justify-center w-7 h-7 bg-accent text-accent-foreground rounded-lg transition-all duration-300 group-hover:scale-110">
            <Zap className="h-3.5 w-3.5" />
          </div>
          <span className="font-bold text-lg font-ndot tracking-tight group-hover:text-accent transition-colors duration-300">
            NothingCN
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative transition-all duration-200 hover:text-accent px-3 py-2 rounded-md text-sm font-medium",
                pathname === item.href
                  ? "text-foreground bg-accent/10"
                  : "text-foreground/70 hover:bg-accent/5"
              )}
            >
              {item.name}
              {pathname === item.href && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center ml-auto space-x-2">
          {/* Search - Compact */}
          <div className="hidden lg:block">
            <SearchDialog />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle Menu</span>
          </Button>

          {/* Mobile Search */}
          <div className="flex-1 lg:hidden md:block md:max-w-[200px]">
            <SearchDialog />
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-1">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9"
              title={`Theme: ${themeMode}`}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            
            {/* Beta Badge */}
            <Badge variant="secondary" className="hidden sm:inline-flex text-xs px-2 py-1">
              BETA
            </Badge>
            
            {/* GitHub Link */}
            <Button 
              variant="ghost" 
              size="icon" 
              asChild 
              className="h-9 w-9"
            >
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="mobile-menu md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors",
                  pathname === item.href
                    ? "bg-accent/10 text-foreground"
                    : "text-foreground/70 hover:bg-accent/5 hover:text-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="ml-auto w-1.5 h-1.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
            
            <div className="border-t border-border pt-3 mt-3">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2.5 text-sm font-medium text-foreground/70 hover:bg-accent/5 hover:text-foreground rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
