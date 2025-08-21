"use client";

import React, { createContext, useContext, useEffect, useMemo } from "react";
import { useThemePersistence, type ThemePreference } from "@/hooks/use-theme-persistence";
import { useSystemTheme } from "@/hooks/use-system-theme";

interface ThemeContextValue {
  // Current theme state
  theme: ThemePreference;
  isLoaded: boolean;
  
  // Computed values
  effectiveMode: "light" | "dark";
  systemTheme: "light" | "dark";
  isSystemThemeSupported: boolean;
  
  // Actions
  updateColorScheme: (colorScheme: string) => void;
  updateMode: (mode: "light" | "dark" | "system") => void;
  resetTheme: () => void;
  exportTheme: () => string;
  importTheme: (themeData: string) => boolean;
  
  // Utilities
  applyThemeToDocument: (colorScheme?: string) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const persistence = useThemePersistence();
  const { systemTheme, isSystemThemeSupported } = useSystemTheme();

  // Calculate the effective mode (resolving 'system' to actual mode)
  const effectiveMode = useMemo(() => {
    if (persistence.theme.mode === "system") {
      return systemTheme;
    }
    return persistence.theme.mode;
  }, [persistence.theme.mode, systemTheme]);

  // Apply theme to document when theme changes
  const applyThemeToDocument = React.useCallback((colorScheme?: string) => {
    const scheme = colorScheme || persistence.theme.colorScheme;
    
    // Apply theme class to document
    document.documentElement.classList.toggle("dark", effectiveMode === "dark");
    
    // Apply color scheme custom properties
    const themePresets: Record<string, { accent: string; accentForeground: string; ring: string }> = {
      red: { accent: "0 84% 60%", accentForeground: "0 0% 100%", ring: "0 84% 60%" },
      blue: { accent: "221 83% 53%", accentForeground: "0 0% 98%", ring: "221 83% 53%" },
      green: { accent: "142 76% 36%", accentForeground: "0 0% 98%", ring: "142 76% 36%" },
      purple: { accent: "263 70% 50%", accentForeground: "0 0% 98%", ring: "263 70% 50%" },
      orange: { accent: "24 95% 53%", accentForeground: "0 0% 98%", ring: "24 95% 53%" },
      yellow: { accent: "45 93% 47%", accentForeground: "0 0% 4%", ring: "45 93% 47%" },
      pink: { accent: "330 81% 60%", accentForeground: "0 0% 100%", ring: "330 81% 60%" },
      teal: { accent: "188 76% 42%", accentForeground: "0 0% 100%", ring: "188 76% 42%" },
    };

    const colors = themePresets[scheme];
    if (colors) {
      document.documentElement.style.setProperty("--accent", colors.accent);
      document.documentElement.style.setProperty("--accent-foreground", colors.accentForeground);
      document.documentElement.style.setProperty("--ring", colors.ring);
    }
  }, [persistence.theme.colorScheme, effectiveMode]);

  // Apply theme to document when loaded or when effective mode changes
  useEffect(() => {
    if (persistence.isLoaded) {
      applyThemeToDocument();
    }
  }, [persistence.isLoaded, effectiveMode, applyThemeToDocument]);

  const value: ThemeContextValue = {
    theme: persistence.theme,
    isLoaded: persistence.isLoaded,
    effectiveMode,
    systemTheme,
    isSystemThemeSupported,
    updateColorScheme: persistence.updateColorScheme,
    updateMode: persistence.updateMode,
    resetTheme: persistence.resetTheme,
    exportTheme: persistence.exportTheme,
    importTheme: persistence.importTheme,
    applyThemeToDocument,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// Higher-order component for easy integration
export function withTheme<P extends object>(
  Component: React.ComponentType<P>
) {
  const WrappedComponent = (props: P) => (
    <ThemeProvider>
      <Component {...props} />
    </ThemeProvider>
  );

  WrappedComponent.displayName = `withTheme(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
}