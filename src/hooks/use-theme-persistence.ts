"use client";

import { useState, useEffect, useCallback } from "react";

export type ThemePreference = {
  colorScheme: string;
  mode: "light" | "dark" | "system";
  lastUpdated: number;
};

const THEME_STORAGE_KEY = "nothingcn-theme-preference";
const DEFAULT_THEME: ThemePreference = {
  colorScheme: "red",
  mode: "system",
  lastUpdated: Date.now(),
};

export function useThemePersistence() {
  const [theme, setTheme] = useState<ThemePreference>(DEFAULT_THEME);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as ThemePreference;
        // Validate the stored theme
        if (parsed.colorScheme && parsed.mode) {
          setTheme(parsed);
        }
      }
    } catch (error) {
      console.warn("Failed to load theme from localStorage:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme));
      } catch (error) {
        console.warn("Failed to save theme to localStorage:", error);
      }
    }
  }, [theme, isLoaded]);

  const updateColorScheme = useCallback((colorScheme: string) => {
    setTheme(prev => ({
      ...prev,
      colorScheme,
      lastUpdated: Date.now(),
    }));
  }, []);

  const updateMode = useCallback((mode: "light" | "dark" | "system") => {
    setTheme(prev => ({
      ...prev,
      mode,
      lastUpdated: Date.now(),
    }));
  }, []);

  const resetTheme = useCallback(() => {
    setTheme(DEFAULT_THEME);
  }, []);

  const exportTheme = useCallback(() => {
    return JSON.stringify(theme, null, 2);
  }, [theme]);

  const importTheme = useCallback((themeData: string) => {
    try {
      const parsed = JSON.parse(themeData) as ThemePreference;
      if (parsed.colorScheme && parsed.mode) {
        setTheme({
          ...parsed,
          lastUpdated: Date.now(),
        });
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }, []);

  return {
    theme,
    isLoaded,
    updateColorScheme,
    updateMode,
    resetTheme,
    exportTheme,
    importTheme,
  };
}