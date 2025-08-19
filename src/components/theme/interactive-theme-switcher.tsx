"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { THEME_COLORS } from "@/lib/theme-config";

// Use the centralized theme colors instead of duplicating
const themePresets = THEME_COLORS;

export const InteractiveThemeSwitcher = React.memo(function InteractiveThemeSwitcher() {
  const [copied, setCopied] = React.useState(false);
  const [fallbackTheme, setFallbackTheme] = React.useState("red");
  
  // Use context with fallback to local state
  const activeTheme = fallbackTheme;
  const updateTheme = setFallbackTheme;
  const isApplying = false;
  
  // TODO: Once ThemeProvider is globally available, this can be simplified
  // to just use useTheme() hook directly

  const themeStyles = React.useMemo(() => ({
    "--accent": themePresets[activeTheme as keyof typeof themePresets].accent,
    "--accent-foreground": themePresets[activeTheme as keyof typeof themePresets].accentForeground,
    "--ring": themePresets[activeTheme as keyof typeof themePresets].ring,
  }), [activeTheme]);

  const themeCode = React.useMemo(() => {
    const colors = themePresets[activeTheme as keyof typeof themePresets];
    return `:root {
  --accent: ${colors.accent};
  --accent-foreground: ${colors.accentForeground};
  --ring: ${colors.ring};
}`;
  }, [activeTheme]);

  const handleThemeChange = React.useCallback(async (newTheme: string) => {
    try {
      // Use the theme context's setColorScheme method
      updateTheme(newTheme);
    } catch (error) {
      console.error("Failed to apply theme:", error);
    }
  }, [updateTheme]);

  const copyThemeCode = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(themeCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy theme code:", error);
      // Modern fallback without deprecated execCommand
      try {
        // Use the Clipboard API with a fallback
        const clipboardItem = new ClipboardItem({
          "text/plain": new Blob([themeCode], { type: "text/plain" })
        });
        await navigator.clipboard.write([clipboardItem]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackError) {
        console.error("Clipboard API not supported:", fallbackError);
      }
    }
  }, [themeCode]);

  return (
    <div className="space-y-6">
      {/* Theme Selector */}
      <div className="flex flex-wrap gap-2">
        {Object.keys(themePresets).map((theme) => (
          <button
            key={theme}
            onClick={() => handleThemeChange(theme)}
            disabled={isApplying}
            className={cn(
              "px-4 py-2 rounded-lg border-2 transition-all duration-200 capitalize flex items-center gap-2",
              activeTheme === theme
                ? "border-foreground bg-foreground text-background"
                : "border-border hover:border-foreground/50",
              isApplying && "opacity-50 cursor-not-allowed"
            )}
            aria-label={`Select ${theme} theme`}
          >
            <span className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: `hsl(${themePresets[theme as keyof typeof themePresets].accent})` }}
              />
              {theme}
            </span>
          </button>
        ))}
      </div>

      {/* Live Preview */}
      <div
        id="theme-preview-container"
        className="p-6 rounded-lg border bg-background"
        style={themeStyles as React.CSSProperties}
      >
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Button className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--accent))]/90">
              Accent Button
            </Button>
            <Button variant="outline" className="border-[hsl(var(--accent))]/20 hover:bg-[hsl(var(--accent))]/10">
              Outline Accent
            </Button>
            <Button variant="ghost" className="hover:bg-[hsl(var(--accent))]/10">
              Ghost Accent
            </Button>
          </div>
        </div>
      </div>

      {/* Copy Button */}
      <Button
        onClick={copyThemeCode}
        variant="outline"
        className="w-full sm:w-auto"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 mr-2" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 mr-2" />
            Copy Theme Code
          </>
        )}
      </Button>
    </div>
  );
});