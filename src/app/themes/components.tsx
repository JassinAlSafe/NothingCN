"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy, Palette, Moon, Sun, Monitor, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ThemeMode = "light" | "dark" | "system";

interface ThemeColors {
  accent: string;
  accentForeground: string;
  ring: string;
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
                  style={{ backgroundColor: `hsl(${themePresets[theme].accent})` }}
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

export function ThemeModeSwitcher() {
  const [mode, setMode] = React.useState<ThemeMode>("system");

  const handleModeChange = React.useCallback((value: string) => {
    if (value === "light" || value === "dark" || value === "system") {
      setMode(value as ThemeMode);
    }
  }, []);

  return (
    <Tabs value={mode} onValueChange={handleModeChange} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="light" className="gap-2">
          <Sun className="w-4 h-4" />
          Light
        </TabsTrigger>
        <TabsTrigger value="dark" className="gap-2">
          <Moon className="w-4 h-4" />
          Dark
        </TabsTrigger>
        <TabsTrigger value="system" className="gap-2">
          <Monitor className="w-4 h-4" />
          System
        </TabsTrigger>
      </TabsList>
      <TabsContent value="light" className="space-y-4">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Light Mode</h3>
          <p className="text-sm text-muted-foreground">
            Components use light backgrounds with dark text for optimal readability in bright environments.
          </p>
        </Card>
      </TabsContent>
      <TabsContent value="dark" className="space-y-4">
        <div className="dark">
          <Card className="p-6 bg-background text-foreground border-border">
            <h3 className="font-semibold mb-2">Dark Mode</h3>
            <p className="text-sm text-muted-foreground">
              Components use dark backgrounds with light text, reducing eye strain in low-light conditions.
            </p>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="system" className="space-y-4">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">System Preference</h3>
          <p className="text-sm text-muted-foreground">
            Automatically switches between light and dark modes based on your device settings.
          </p>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

interface ColorCardProps {
  name: string;
  variable: string;
  value: string;
  dark?: string;
}

export function ColorCard({ name, variable, value, dark }: ColorCardProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative">
      <button
        onClick={() => copyToClipboard(variable)}
        className="w-full text-left space-y-3 p-4 rounded-lg border bg-card hover:bg-accent/5 transition-all duration-200"
        aria-label={`Copy ${name} color variable`}
      >
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs font-mono text-muted-foreground">{variable}</p>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 text-muted-foreground" />
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <div
            className="w-full h-10 rounded border"
            style={{ backgroundColor: `hsl(${value})` }}
            aria-label={`Light mode color: ${value}`}
          />
          {dark && (
            <div
              className="w-full h-10 rounded border"
              style={{ backgroundColor: `hsl(${dark})` }}
              aria-label={`Dark mode color: ${dark}`}
            />
          )}
        </div>
      </button>
    </div>
  );
}

export function ThemePresetsGrid() {
  const presets = [
    {
      name: "Nothing OS",
      description: "Clean monochrome with red accent",
      accent: "#F43F5E",
      bg: "linear-gradient(135deg, #000 0%, #111 100%)",
    },
    {
      name: "Ocean",
      description: "Deep blues and aqua tones",
      accent: "#3B82F6",
      bg: "linear-gradient(135deg, #001e3c 0%, #003366 100%)",
    },
    {
      name: "Forest",
      description: "Natural greens and earth tones",
      accent: "#10B981",
      bg: "linear-gradient(135deg, #0f2617 0%, #1a3a2a 100%)",
    },
    {
      name: "Sunset",
      description: "Warm oranges and purples",
      accent: "#F97316",
      bg: "linear-gradient(135deg, #451a03 0%, #7c2d12 100%)",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {presets.map((preset) => (
        <Card
          key={preset.name}
          className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{ background: preset.bg }}
          />
          <div className="relative p-6 space-y-4">
            <div
              className="w-12 h-12 rounded-lg shadow-lg"
              style={{ backgroundColor: preset.accent }}
            />
            <div className="space-y-2">
              <h3 className="font-bold">{preset.name}</h3>
              <p className="text-sm text-muted-foreground">
                {preset.description}
              </p>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="w-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Apply Theme
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export function AnimatedThemeTransition() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  return (
    <div className="space-y-4">
      <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        variant="outline"
        className="w-full sm:w-auto"
      >
        <Palette className="w-4 h-4 mr-2" />
        Toggle Theme Animation
      </Button>
      
      <div
        className={cn(
          "relative overflow-hidden rounded-lg border p-8 transition-all duration-500",
          theme === "dark" ? "dark" : ""
        )}
        style={{
          backgroundColor: theme === "dark" ? "hsl(0 0% 0%)" : "hsl(0 0% 100%)",
          color: theme === "dark" ? "hsl(0 0% 100%)" : "hsl(0 0% 0%)",
          borderColor: theme === "dark" ? "hsl(0 0% 100% / 0.2)" : "hsl(0 0% 0% / 0.2)",
        }}
      >
        <div className="space-y-4">
          <h3 className="text-2xl font-bold transition-colors duration-500"
              style={{ color: theme === "dark" ? "hsl(0 0% 100%)" : "hsl(0 0% 0%)" }}>
            Smooth Theme Transitions
          </h3>
          <p className="transition-colors duration-500"
             style={{ color: theme === "dark" ? "hsl(0 0% 100% / 0.7)" : "hsl(0 0% 0% / 0.7)" }}>
            Watch how smoothly components transition between themes with proper CSS transitions.
          </p>
          <div className="flex gap-3">
            <div className="px-4 py-2 rounded-lg transition-all duration-500"
                 style={{
                   backgroundColor: theme === "dark" ? "hsl(0 0% 100%)" : "hsl(0 0% 0%)",
                   color: theme === "dark" ? "hsl(0 0% 0%)" : "hsl(0 0% 100%)"
                 }}>
              Inverted
            </div>
            <div className="px-4 py-2 rounded-lg border transition-all duration-500"
                 style={{
                   borderColor: theme === "dark" ? "hsl(0 0% 100% / 0.2)" : "hsl(0 0% 0% / 0.2)"
                 }}>
              Bordered
            </div>
          </div>
        </div>
        
        {/* Animated gradient overlay */}
        <div
          className={cn(
            "absolute inset-0 pointer-events-none transition-opacity duration-1000",
            theme === "dark" ? "opacity-20" : "opacity-10"
          )}
          style={{
            background: theme === "dark" 
              ? "radial-gradient(circle at top right, #3b82f6 0%, transparent 50%)"
              : "radial-gradient(circle at bottom left, #f43f5e 0%, transparent 50%)",
          }}
        />
      </div>
    </div>
  );
}