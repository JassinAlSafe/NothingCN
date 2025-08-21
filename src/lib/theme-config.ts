/**
 * Theme Configuration
 * Single source of truth for all theme-related constants and utilities
 */

export type ThemeMode = "light" | "dark" | "system";
export type ColorScheme = "red" | "blue" | "green" | "purple" | "orange" | "yellow" | "pink" | "cyan";

export interface ThemeColors {
  accent: string;
  accentForeground: string;
  ring: string;
}

export interface Theme {
  mode: ThemeMode;
  colorScheme: ColorScheme;
  colors: ThemeColors;
}

// Theme color presets - matches the playground
export const THEME_COLORS: Record<ColorScheme, ThemeColors> = {
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
} as const;

// Default theme configuration
export const DEFAULT_THEME: Theme = {
  mode: "light",
  colorScheme: "red",
  colors: THEME_COLORS.red,
} as const;

// Storage key for persistence
export const THEME_STORAGE_KEY = "nothingcn-theme" as const;

// CSS variable names
export const CSS_VARIABLES = {
  accent: "--accent",
  accentForeground: "--accent-foreground", 
  ring: "--ring",
} as const;

// Utility functions
export function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function resolveThemeMode(mode: ThemeMode): "light" | "dark" {
  return mode === "system" ? getSystemTheme() : mode;
}

export function createTheme(colorScheme: ColorScheme, mode: ThemeMode = "light"): Theme {
  return {
    mode,
    colorScheme,
    colors: THEME_COLORS[colorScheme],
  };
}

export function validateTheme(theme: unknown): theme is Theme {
  if (!theme || typeof theme !== "object") return false;
  const t = theme as Partial<Theme>;
  
  return (
    typeof t.mode === "string" &&
    ["light", "dark", "system"].includes(t.mode) &&
    typeof t.colorScheme === "string" &&
    Object.keys(THEME_COLORS).includes(t.colorScheme) &&
    typeof t.colors === "object" &&
    t.colors !== null
  );
}