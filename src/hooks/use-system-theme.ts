"use client";

import { useState, useEffect } from "react";

export function useSystemTheme() {
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");
  const [isSystemThemeSupported, setIsSystemThemeSupported] = useState(false);

  useEffect(() => {
    // Check if the browser supports prefers-color-scheme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsSystemThemeSupported(true);
    
    // Set initial theme
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } 
    // Legacy browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return {
    systemTheme,
    isSystemThemeSupported,
  };
}