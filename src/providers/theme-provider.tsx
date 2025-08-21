"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { 
  Theme, 
  DEFAULT_THEME,
  THEME_COLORS,
  type ColorScheme,
  type ThemeMode 
} from "@/lib/theme-config";
import { 
  loadThemeFromStorage,
  applyThemeToDocument,
  createThemeUpdater,
} from "@/lib/theme-utils";

interface ThemeContextValue {
  // Current theme state
  theme: Theme;
  isHydrated: boolean;
  isApplying: boolean;
  
  // Theme modification functions
  setColorScheme: (colorScheme: ColorScheme) => void;
  setMode: (mode: ThemeMode) => void;
  updateTheme: (updates: Partial<Theme>) => void;
  resetToDefault: () => void;
  
  // Utility functions
  exportTheme: () => string;
  importTheme: (themeString: string) => boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  /**
   * Default theme to use before hydration
   * Helps prevent hydration mismatches
   */
  defaultTheme?: Theme;
  /**
   * Whether to apply theme immediately on mount
   * Set to false if you want to control when themes are applied
   */
  enableAutoApply?: boolean;
}

export function ThemeProvider({ 
  children, 
  defaultTheme = DEFAULT_THEME,
  enableAutoApply = true 
}: ThemeProviderProps) {
  // State management - Initialize with the actual stored theme to prevent mismatch
  const [theme, setThemeState] = useState<Theme>(() => {
    // Only run on client side
    if (typeof window === "undefined") {
      return defaultTheme;
    }
    // Get the theme that was already applied by the pre-hydration script
    return loadThemeFromStorage();
  });
  const [isHydrated, setIsHydrated] = useState(false);
  const [isApplying, setIsApplying] = useState(false);

  // Mark as hydrated and enable transitions after mount
  useEffect(() => {
    setIsHydrated(true);
    // Enable transitions after hydration to prevent flash
    requestAnimationFrame(() => {
      document.body.classList.add('theme-loaded');
      document.documentElement.style.transition = '';
    });
  }, []);

  // Watch system theme changes and re-apply theme when system preference changes
  useEffect(() => {
    if (theme.mode !== "system" || !isHydrated) return;
    
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      // Re-apply theme when system preference changes
      applyThemeToDocument(theme);
    };
    
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [theme, isHydrated]);

  // Apply theme changes to DOM
  useEffect(() => {
    if (!isHydrated || !enableAutoApply) return;

    setIsApplying(true);
    
    try {
      // Apply theme immediately without delay to prevent flash
      applyThemeToDocument(theme);
    } catch (error) {
      console.error("Failed to apply theme:", error);
    } finally {
      setIsApplying(false);
    }
  }, [theme, isHydrated, enableAutoApply]);

  // Theme update functions
  const updaters = createThemeUpdater(theme);

  const setColorScheme = useCallback((colorScheme: ColorScheme) => {
    setThemeState(() => updaters.setColorScheme(colorScheme));
  }, [updaters]);

  const setMode = useCallback((mode: ThemeMode) => {
    setThemeState(() => updaters.setMode(mode));
  }, [updaters]);

  const updateTheme = useCallback((updates: Partial<Theme>) => {
    setThemeState(() => updaters.updateTheme(updates));
  }, [updaters]);

  const resetToDefault = useCallback(() => {
    setThemeState(updaters.resetToDefault());
  }, [updaters]);

  const exportTheme = useCallback(() => {
    return JSON.stringify(theme, null, 2);
  }, [theme]);

  const importTheme = useCallback((themeString: string) => {
    try {
      const parsed = JSON.parse(themeString);
      
      // Validate the imported theme
      if (
        parsed.colorScheme &&
        THEME_COLORS[parsed.colorScheme as ColorScheme] &&
        parsed.mode &&
        ["light", "dark", "system"].includes(parsed.mode)
      ) {
        updateTheme({
          ...parsed,
          colors: THEME_COLORS[parsed.colorScheme as ColorScheme],
        });
        return true;
      }
      
      return false;
    } catch (error) {
      console.error("Failed to import theme:", error);
      return false;
    }
  }, [updateTheme]);

  const contextValue: ThemeContextValue = {
    theme,
    isHydrated,
    isApplying,
    setColorScheme,
    setMode,
    updateTheme,
    resetToDefault,
    exportTheme,
    importTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// Export theme presets for external use
export { THEME_COLORS as themePresets } from "@/lib/theme-config";