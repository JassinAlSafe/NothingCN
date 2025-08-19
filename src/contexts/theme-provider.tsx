"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

type ThemeMode = "light" | "dark" | "system";

interface ThemeColors {
  accent: string;
  accentForeground: string;
  ring: string;
}

interface Theme {
  mode: ThemeMode;
  colorScheme: string;
  colors: ThemeColors;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Partial<Theme>) => void;
  setColorScheme: (colorScheme: string) => void;
  setMode: (mode: ThemeMode) => void;
  resetToDefault: () => void;
  exportTheme: () => string;
  importTheme: (themeString: string) => boolean;
  isApplying: boolean;
  isHydrated: boolean;
}

const themePresets: Record<string, ThemeColors> = {
  red: {
    accent: "0 84% 60%",
    accentForeground: "0 0% 100%",
    ring: "0 84% 60%",
  },
  blue: {
    accent: "221 83% 53%",
    accentForeground: "0 0% 98%",
    ring: "221 83% 53%",
  },
  green: {
    accent: "142 76% 36%",
    accentForeground: "0 0% 98%",
    ring: "142 76% 36%",
  },
  purple: {
    accent: "263 70% 50%",
    accentForeground: "0 0% 98%",
    ring: "263 70% 50%",
  },
  orange: {
    accent: "24 95% 53%",
    accentForeground: "0 0% 98%",
    ring: "24 95% 53%",
  },
  yellow: {
    accent: "45 93% 47%",
    accentForeground: "0 0% 4%",
    ring: "45 93% 47%",
  },
  pink: {
    accent: "330 81% 60%",
    accentForeground: "0 0% 100%",
    ring: "330 81% 60%",
  },
  cyan: {
    accent: "188 76% 42%",
    accentForeground: "0 0% 100%",
    ring: "188 76% 42%",
  },
};

const defaultTheme: Theme = {
  mode: "system",
  colorScheme: "red",
  colors: themePresets.red,
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [isApplying, setIsApplying] = useState(false);
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydration effect - load theme from localStorage after component mounts
  useEffect(() => {
    try {
      // Load theme from localStorage
      const stored = localStorage.getItem("nothingcn-theme");
      if (stored) {
        const parsedTheme = JSON.parse(stored);
        setThemeState({
          ...defaultTheme,
          ...parsedTheme,
          colors: themePresets[parsedTheme.colorScheme] || defaultTheme.colors,
        });
      }
      
      // Set system theme
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        setSystemTheme(e.matches ? "dark" : "light");
      };

      setSystemTheme(mediaQuery.matches ? "dark" : "light");
      mediaQuery.addEventListener("change", handleChange);
      
      // Mark as hydrated
      setIsHydrated(true);
      
      return () => mediaQuery.removeEventListener("change", handleChange);
    } catch (error) {
      console.warn("Failed to hydrate theme from localStorage:", error);
      setIsHydrated(true); // Still mark as hydrated to prevent blocking
    }
  }, []);

  // Apply theme to document (only after hydration)
  useEffect(() => {
    if (!isHydrated) return;
    
    const applyTheme = async () => {
      setIsApplying(true);
      
      try {
        const root = document.documentElement;
        const { colors, mode } = theme;
        
        // Apply color scheme
        root.style.setProperty("--accent", colors.accent);
        root.style.setProperty("--accent-foreground", colors.accentForeground);
        root.style.setProperty("--ring", colors.ring);
        
        // Apply dark/light mode
        const effectiveMode = mode === "system" ? systemTheme : mode;
        root.classList.toggle("dark", effectiveMode === "dark");
        
        // Add smooth transitions
        root.style.setProperty("--theme-transition", "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease");
        
        // Store in localStorage
        localStorage.setItem("nothingcn-theme", JSON.stringify(theme));
        
        // Small delay for better UX feedback
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        console.error("Failed to apply theme:", error);
      } finally {
        setIsApplying(false);
      }
    };

    applyTheme();
  }, [theme, systemTheme, isHydrated]);


  const setTheme = useCallback((updates: Partial<Theme>) => {
    setThemeState(prev => ({
      ...prev,
      ...updates,
      colors: updates.colorScheme 
        ? themePresets[updates.colorScheme] || prev.colors
        : prev.colors,
    }));
  }, []);

  const setColorScheme = useCallback((colorScheme: string) => {
    if (themePresets[colorScheme]) {
      setTheme({
        colorScheme,
        colors: themePresets[colorScheme],
      });
    }
  }, [setTheme]);

  const setMode = useCallback((mode: ThemeMode) => {
    setTheme({ mode });
  }, [setTheme]);

  const resetToDefault = useCallback(() => {
    setThemeState(defaultTheme);
    localStorage.removeItem("nothingcn-theme");
  }, []);

  const exportTheme = useCallback(() => {
    return JSON.stringify(theme, null, 2);
  }, [theme]);

  const importTheme = useCallback((themeString: string) => {
    try {
      const parsedTheme = JSON.parse(themeString);
      if (parsedTheme.colorScheme && themePresets[parsedTheme.colorScheme]) {
        setTheme({
          ...parsedTheme,
          colors: themePresets[parsedTheme.colorScheme],
        });
        return true;
      }
      return false;
    } catch (error) {
      console.error("Failed to import theme:", error);
      return false;
    }
  }, [setTheme]);

  const value: ThemeContextType = {
    theme,
    setTheme,
    setColorScheme,
    setMode,
    resetToDefault,
    exportTheme,
    importTheme,
    isApplying,
    isHydrated,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// Export theme presets for external use
export { themePresets };