"use client";

import * as React from "react";

// System theme hook
export function useSystemTheme() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isDark;
}

// GitHub data hook with fallback
export function useGitHubData() {
  const [starCount, setStarCount] = React.useState<string>("1.2k");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    let mounted = true;

    async function fetchStars() {
      try {
        setIsLoading(true);
        const response = await fetch("/api/github/repos/nothingcn/nothingcn", {
          next: { revalidate: 3600 } // Cache for 1 hour
        });
        
        if (!mounted) return;
        
        if (response.ok) {
          const data = await response.json();
          const stars = data.stargazers_count || 1200;
          
          // Format star count
          const formattedStars = stars >= 1000 
            ? `${(stars / 1000).toFixed(1)}k`
            : stars.toString();
            
          setStarCount(formattedStars);
        }
      } catch {
        console.log("GitHub API fetch failed, using fallback");
        // Keep the fallback value
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    fetchStars();
    
    return () => {
      mounted = false;
    };
  }, []);

  return { starCount, isLoading };
}