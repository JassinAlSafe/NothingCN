"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Copy, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme, themePresets } from "@/providers/theme-provider";
import type { ColorScheme } from "@/lib/theme-config";

export const InteractiveThemeSwitcher = React.memo(function InteractiveThemeSwitcher() {
  const [copied, setCopied] = React.useState(false);
  const { theme, setColorScheme, isApplying, isHydrated } = useTheme();

  const activeTheme = theme.colorScheme;
  const updateTheme = setColorScheme;

  const themeStyles = React.useMemo(() => ({
    "--accent": themePresets[activeTheme].accent,
    "--accent-foreground": themePresets[activeTheme].accentForeground,
    "--ring": themePresets[activeTheme].ring,
  }), [activeTheme]);

  const themeCode = React.useMemo(() => {
    const colors = themePresets[activeTheme];
    return `:root {
  --accent: ${colors.accent};
  --accent-foreground: ${colors.accentForeground};
  --ring: ${colors.ring};
}`;
  }, [activeTheme]);

  const handleThemeChange = React.useCallback(async (newTheme: string) => {
    try {
      updateTheme(newTheme as ColorScheme);
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
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = themeCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [themeCode]);

  // Show loading state during hydration
  if (!isHydrated) {
    return (
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          <div className="px-4 py-2 rounded-lg border-2 bg-muted animate-pulse">
            Loading themes...
          </div>
        </div>
        <div className="p-6 rounded-lg border bg-background">
          <div className="space-y-4">
            <div className="h-8 bg-muted rounded animate-pulse" />
            <div className="h-6 bg-muted rounded animate-pulse w-1/2" />
          </div>
        </div>
      </div>
    );
  }

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
              {isApplying && activeTheme === theme ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: `hsl(${themePresets[theme as ColorScheme].accent})` }}
                />
              )}
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
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]">
              Active Theme: {activeTheme}
            </Badge>
            <Badge variant="outline" className="border-[hsl(var(--accent))]">
              Custom Accent
            </Badge>
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