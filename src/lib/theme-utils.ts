/**
 * Theme Utilities
 * Safe utilities for theme persistence and DOM manipulation
 */

import { 
  Theme, 
  DEFAULT_THEME, 
  THEME_STORAGE_KEY, 
  CSS_VARIABLES, 
  THEME_COLORS,
  resolveThemeMode,
  validateTheme,
  type ColorScheme,
  type ThemeMode,
  type ThemeColors
} from "./theme-config";

/**
 * Safely load theme from localStorage
 */
export function loadThemeFromStorage(): Theme {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (!stored) {
      return DEFAULT_THEME;
    }

    const parsed = JSON.parse(stored);
    if (!validateTheme(parsed)) {
      console.warn("Invalid theme data in localStorage, using default");
      return DEFAULT_THEME;
    }

    // Ensure colors are up to date with current presets
    return {
      ...parsed,
      colors: THEME_COLORS[parsed.colorScheme] || DEFAULT_THEME.colors,
    };
  } catch (error) {
    console.warn("Failed to load theme from localStorage:", error);
    return DEFAULT_THEME;
  }
}

/**
 * Safely save theme to localStorage
 */
export function saveThemeToStorage(theme: Theme): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme));
    return true;
  } catch (error) {
    console.warn("Failed to save theme to localStorage:", error);
    return false;
  }
}

/**
 * Apply theme to document (client-side only)
 */
export function applyThemeToDocument(theme: Theme): void {
  if (typeof window === "undefined") {
    return;
  }

  const root = document.documentElement;

  // Apply color scheme
  root.style.setProperty(CSS_VARIABLES.accent, theme.colors.accent);
  root.style.setProperty(CSS_VARIABLES.accentForeground, theme.colors.accentForeground);
  root.style.setProperty(CSS_VARIABLES.ring, theme.colors.ring);

  // Apply dark/light mode
  const effectiveMode = resolveThemeMode(theme.mode);
  
  // Update data attribute for debugging
  root.setAttribute('data-theme-mode', effectiveMode);
  
  // Use a more explicit approach to prevent flickering
  if (effectiveMode === "dark") {
    if (!root.classList.contains("dark")) {
      root.classList.add("dark");
    }
  } else {
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
    }
  }

  // Save to localStorage
  saveThemeToStorage(theme);
}


/**
 * Create theme update functions
 */
export function createThemeUpdater(currentTheme: Theme) {
  return {
    setColorScheme: (colorScheme: ColorScheme): Theme => ({
      ...currentTheme,
      colorScheme,
      colors: THEME_COLORS[colorScheme],
    }),
    
    setMode: (mode: ThemeMode): Theme => ({
      ...currentTheme,
      mode,
    }),
    
    updateTheme: (updates: Partial<Theme>): Theme => ({
      ...currentTheme,
      ...updates,
      colors: updates.colorScheme 
        ? THEME_COLORS[updates.colorScheme] 
        : currentTheme.colors,
    }),
    
    resetToDefault: (): Theme => DEFAULT_THEME,
  };
}


/**
 * Pre-hydration script to prevent theme flash on page load
 * This runs before React hydration to apply the stored theme immediately
 */
export function getPreHydrationScript(): string {
  // Serialize the theme colors to avoid duplication
  const serializedColors = Object.entries(THEME_COLORS).reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {} as Record<string, ThemeColors>);
  
  return `
    (function() {
      try {
        const root = document.documentElement;
        const stored = localStorage.getItem('${THEME_STORAGE_KEY}');
        
        // Theme colors (must be inlined for pre-hydration)
        const colors = ${JSON.stringify(serializedColors)};
        
        // Default theme values
        const DEFAULT_MODE = '${DEFAULT_THEME.mode}';
        const DEFAULT_COLOR = '${DEFAULT_THEME.colorScheme}';
        
        // Parse stored theme or use defaults
        let theme;
        if (stored) {
          try {
            theme = JSON.parse(stored);
          } catch {
            theme = { mode: DEFAULT_MODE, colorScheme: DEFAULT_COLOR };
          }
        } else {
          theme = { mode: DEFAULT_MODE, colorScheme: DEFAULT_COLOR };
        }
        
        // Apply color scheme immediately
        const colorScheme = theme.colorScheme || DEFAULT_COLOR;
        if (colors[colorScheme]) {
          const c = colors[colorScheme];
          root.style.setProperty('${CSS_VARIABLES.accent}', c.accent);
          root.style.setProperty('${CSS_VARIABLES.accentForeground}', c.accentForeground);
          root.style.setProperty('${CSS_VARIABLES.ring}', c.ring);
        }
        
        // Resolve and apply theme mode
        const mode = theme.mode || DEFAULT_MODE;
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const effectiveMode = mode === 'system' ? (systemDark ? 'dark' : 'light') : mode;
        
        // Store the resolved mode for React to use
        root.setAttribute('data-theme-mode', effectiveMode);
        
        // Apply dark class if needed - BEFORE the page renders
        if (effectiveMode === 'dark') {
          root.classList.add('dark');
        } else {
          // Explicitly ensure dark class is removed
          root.classList.remove('dark');
        }
        
        // Prevent transitions during initial load
        root.style.transition = 'none';
        
      } catch (e) {
        // On any error, default to light mode
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme-mode', 'light');
      }
    })();
  `;
}