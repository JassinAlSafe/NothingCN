"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Copy, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TouchFriendlyThemeSwitcherProps {
  activeTheme?: string;
  onThemeChange?: (theme: string) => void;
  isApplying?: boolean;
  className?: string;
}

const themePresets = {
  red: { accent: "0 84% 60%", accentForeground: "0 0% 100%", ring: "0 84% 60%" },
  blue: { accent: "221 83% 53%", accentForeground: "0 0% 98%", ring: "221 83% 53%" },
  green: { accent: "142 76% 36%", accentForeground: "0 0% 98%", ring: "142 76% 36%" },
  purple: { accent: "263 70% 50%", accentForeground: "0 0% 98%", ring: "263 70% 50%" },
  orange: { accent: "24 95% 53%", accentForeground: "0 0% 98%", ring: "24 95% 53%" },
  yellow: { accent: "45 93% 47%", accentForeground: "0 0% 4%", ring: "45 93% 47%" },
  pink: { accent: "330 81% 60%", accentForeground: "0 0% 100%", ring: "330 81% 60%" },
  teal: { accent: "188 76% 42%", accentForeground: "0 0% 100%", ring: "188 76% 42%" },
};

export const TouchFriendlyThemeSwitcher = React.memo(function TouchFriendlyThemeSwitcher({
  activeTheme = "red",
  onThemeChange = () => {},
  isApplying = false,
  className
}: TouchFriendlyThemeSwitcherProps) {
  const [copied, setCopied] = React.useState(false);
  const [pressedTheme, setPressedTheme] = React.useState<string | null>(null);

  const themeStyles = React.useMemo(() => ({
    "--accent": themePresets[activeTheme as keyof typeof themePresets]?.accent || themePresets.red.accent,
    "--accent-foreground": themePresets[activeTheme as keyof typeof themePresets]?.accentForeground || themePresets.red.accentForeground,
    "--ring": themePresets[activeTheme as keyof typeof themePresets]?.ring || themePresets.red.ring,
  }), [activeTheme]);

  const themeCode = React.useMemo(() => {
    const colors = themePresets[activeTheme as keyof typeof themePresets] || themePresets.red;
    return `:root {
  --accent: ${colors.accent};
  --accent-foreground: ${colors.accentForeground};
  --ring: ${colors.ring};
}`;
  }, [activeTheme]);

  const copyThemeCode = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(themeCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy theme code:", error);
    }
  }, [themeCode]);

  const handleThemePress = React.useCallback((theme: string) => {
    setPressedTheme(theme);
    // Add haptic feedback on supported devices
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  }, []);

  const handleThemeRelease = React.useCallback(() => {
    setPressedTheme(null);
  }, []);

  const handleThemeClick = React.useCallback((theme: string) => {
    if (!isApplying) {
      onThemeChange(theme);
    }
  }, [onThemeChange, isApplying]);

  return (
    <div className={cn("space-y-6", className)}>
      {/* Theme Selector - Mobile Optimized */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Choose Theme</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Object.keys(themePresets).map((theme) => (
            <button
              key={theme}
              onTouchStart={() => handleThemePress(theme)}
              onTouchEnd={handleThemeRelease}
              onMouseDown={() => handleThemePress(theme)}
              onMouseUp={handleThemeRelease}
              onMouseLeave={handleThemeRelease}
              onClick={() => handleThemeClick(theme)}
              disabled={isApplying}
              className={cn(
                // Base styles with larger touch targets
                "group relative min-h-[60px] p-4 rounded-xl border-2 transition-all duration-200",
                "active:scale-95 motion-safe:transform motion-safe:transition-transform",
                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent",
                
                // Touch feedback
                pressedTheme === theme && "scale-95 shadow-lg",
                
                // Theme states
                activeTheme === theme
                  ? "border-accent bg-accent/10 shadow-md"
                  : "border-border hover:border-accent/50 hover:bg-accent/5",
                
                // Disabled state
                isApplying && "opacity-50 cursor-not-allowed"
              )}
              aria-label={`Select ${theme} theme`}
            >
              <div className="flex flex-col items-center gap-2">
                {/* Color preview with better visibility */}
                <div className="relative">
                  {isApplying && activeTheme === theme ? (
                    <div className="w-6 h-6 flex items-center justify-center">
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </div>
                  ) : (
                    <div
                      className="w-6 h-6 rounded-full shadow-sm border border-black/10"
                      style={{ backgroundColor: `hsl(${themePresets[theme as keyof typeof themePresets].accent})` }}
                    />
                  )}
                  
                  {/* Active indicator */}
                  {activeTheme === theme && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full flex items-center justify-center">
                      <Check className="w-2 h-2 text-accent-foreground" />
                    </div>
                  )}
                </div>
                
                {/* Theme name */}
                <span className="text-sm font-medium capitalize leading-none">
                  {theme}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Live Preview Card */}
      <Card 
        className="p-6 border-2" 
        style={themeStyles as React.CSSProperties}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Theme Preview</h4>
            <Badge 
              className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]"
            >
              {activeTheme}
            </Badge>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button 
              size="sm"
              className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--accent))]/90"
            >
              Primary
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-[hsl(var(--accent))]/20 hover:bg-[hsl(var(--accent))]/10"
            >
              Outline
            </Button>
          </div>
        </div>
      </Card>

      {/* Copy Button - Touch Friendly */}
      <Button
        onClick={copyThemeCode}
        variant="outline"
        className="w-full min-h-[48px] text-base"
        disabled={copied}
      >
        {copied ? (
          <>
            <Check className="w-5 h-5 mr-2" />
            Copied to Clipboard!
          </>
        ) : (
          <>
            <Copy className="w-5 h-5 mr-2" />
            Copy Theme Code
          </>
        )}
      </Button>
    </div>
  );
});