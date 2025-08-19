"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy, Moon, Sun, Monitor, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/providers/theme-provider";
import { THEME_COLORS, type ThemeMode, type ColorScheme } from "@/lib/theme-config";
import { useToastWithHelpers } from "@/components/ui/toast";

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
              {isApplying && activeTheme === theme ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: `hsl(${themePresets[theme as keyof typeof themePresets].accent})` }}
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
  const [hoveredCard, setHoveredCard] = React.useState<string | null>(null);
  const [applyingTheme, setApplyingTheme] = React.useState<string | null>(null);
  const [isHydrated, setIsHydrated] = React.useState(false);
  
  // Access theme context - it should be available in the themes page
  const { theme, setColorScheme, isApplying } = useTheme();
  const currentColorScheme = isHydrated ? theme.colorScheme : "red";
  
  // Initialize toast helpers
  const { toast } = useToastWithHelpers();
  
  // Mark as hydrated after mount to prevent hydration mismatches
  React.useEffect(() => {
    setIsHydrated(true);
  }, []);
  
  const presets = [
    {
      name: "Nothing OS",
      description: "Clean monochrome with red accent",
      colorScheme: "red" as ColorScheme,
      accent: `hsl(${THEME_COLORS.red.accent})`,
      secondary: "hsl(0, 84%, 70%)",
      tertiary: "hsl(0, 84%, 80%)",
      glow: "rgba(244, 63, 94, 0.1)",
    },
    {
      name: "Ocean",
      description: "Deep blues and aqua tones",
      colorScheme: "blue" as ColorScheme,
      accent: `hsl(${THEME_COLORS.blue.accent})`,
      secondary: "hsl(221, 83%, 63%)",
      tertiary: "hsl(221, 83%, 73%)",
      glow: "rgba(59, 130, 246, 0.1)",
    },
    {
      name: "Forest",
      description: "Natural greens and earth tones",
      colorScheme: "green" as ColorScheme,
      accent: `hsl(${THEME_COLORS.green.accent})`,
      secondary: "hsl(142, 76%, 46%)",
      tertiary: "hsl(142, 76%, 56%)",
      glow: "rgba(16, 185, 129, 0.1)",
    },
    {
      name: "Sunset",
      description: "Warm oranges and purples",
      colorScheme: "orange" as ColorScheme,
      accent: `hsl(${THEME_COLORS.orange.accent})`,
      secondary: "hsl(24, 95%, 63%)",
      tertiary: "hsl(24, 95%, 73%)",
      glow: "rgba(249, 115, 22, 0.1)",
    },
  ];

  const handleApplyTheme = React.useCallback(async (preset: typeof presets[number]) => {
    if (applyingTheme || isApplying) return; // Prevent multiple rapid clicks
    
    setApplyingTheme(preset.name);
    
    try {
      // Use the global theme system
      await new Promise(resolve => setTimeout(resolve, 500)); // Brief loading state for better UX
      setColorScheme(preset.colorScheme);
      
      // Show success toast
      toast.success({
        title: `${preset.name} Theme Applied`,
        description: `Your theme has been updated to ${preset.name.toLowerCase()}.`,
      });
    } catch (error) {
      console.error("Failed to apply theme:", error);
      
      // Show error toast
      toast.error({
        title: "Theme Application Failed",
        description: "There was an error applying the theme. Please try again.",
      });
    } finally {
      // Clear loading state after a brief moment to show success
      setTimeout(() => setApplyingTheme(null), 800);
    }
  }, [setColorScheme, applyingTheme, isApplying, toast]);

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 auto-rows-fr">
      {presets.map((preset, index) => (
        <Card
          key={preset.name}
          onMouseEnter={() => setHoveredCard(preset.name)}
          onMouseLeave={() => setHoveredCard(null)}
          className={cn(
            "group relative overflow-hidden transition-all duration-500 cursor-pointer",
            // Custom theme preset card styling
            "theme-preset-card",
            // Premium border treatment
            "border border-border/40 hover:border-accent/20",
            // More sophisticated shadow system
            "shadow-sm hover:shadow-2xl hover:shadow-accent/10",
            // Subtle scale transform for premium feel
            "hover:scale-[1.02] hover:-translate-y-1",
            // Enhanced focus states
            "focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background",
            // Active state styling
            currentColorScheme === preset.colorScheme && 
              "ring-1 ring-accent/30 shadow-accent/20 shadow-lg border-accent/30 scale-[1.01]",
            // Animation classes
            "animate-in"
          )}
          style={{
            boxShadow: hoveredCard === preset.name 
              ? `0 20px 60px -15px ${preset.glow}` 
              : (isHydrated && currentColorScheme === preset.colorScheme)
              ? `0 10px 30px -10px ${preset.glow}`
              : undefined,
            animationDelay: `${index * 100}ms`,
            animationFillMode: 'both'
          }}
          role="button"
          aria-label={`${preset.name} theme preset - ${preset.description}${isHydrated && currentColorScheme === preset.colorScheme ? ' (currently active)' : ''}`}
          aria-pressed={isHydrated && currentColorScheme === preset.colorScheme}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleApplyTheme(preset);
            }
          }}
        >
          {/* Enhanced gradient overlay on hover */}
          <div
            className={cn(
              "absolute inset-0 opacity-0 transition-all duration-700 pointer-events-none",
              hoveredCard === preset.name && "opacity-100"
            )}
            style={{ 
              background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${preset.glow} 60deg, transparent 120deg, ${preset.glow} 180deg, transparent 240deg, ${preset.glow} 300deg, transparent 360deg)`,
              filter: 'blur(40px)',
              transform: 'scale(1.5)',
            }}
          />
          
          {/* Subtle radial gradient overlay */}
          <div
            className={cn(
              "absolute inset-0 opacity-0 transition-opacity duration-500",
              hoveredCard === preset.name && "opacity-100"
            )}
            style={{ 
              background: `radial-gradient(circle at 50% 0%, ${preset.glow}, transparent 70%)`
            }}
          />
          
          {/* Content */}
          <div className="relative p-6 flex flex-col h-full space-y-5">
            {/* Enhanced color swatches - sophisticated layout */}
            <div className="flex-shrink-0">
              <div className="flex items-center gap-4">
                {/* Primary swatch with enhanced visual hierarchy */}
                <div className="relative group/swatch">
                  <div
                    className={cn(
                      "w-16 h-16 rounded-2xl transition-all duration-500",
                      "shadow-lg group-hover:shadow-xl",
                      hoveredCard === preset.name && "scale-110 rotate-3"
                    )}
                    style={{ 
                      backgroundColor: preset.accent,
                      boxShadow: `0 8px 32px -8px ${preset.glow}, inset 0 1px 0 rgba(255,255,255,0.1)`
                    }}
                    aria-label={`${preset.name} theme primary color`}
                    role="img"
                  />
                  
                  {/* Animated ripple effect on hover */}
                  {hoveredCard === preset.name && (
                    <div 
                      className="absolute inset-0 rounded-2xl animate-ping opacity-30"
                      style={{ backgroundColor: preset.accent }}
                    />
                  )}
                  
                  {/* More prominent active indicator */}
                  {isHydrated && currentColorScheme === preset.colorScheme && (
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full 
                                   border-2 border-background shadow-lg animate-enhanced-pulse
                                   flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                  )}
                </div>
                
                {/* Secondary color palette with staggered animation */}
                <div className="grid grid-cols-2 gap-2">
                  {[preset.secondary, preset.tertiary, preset.glow.replace('0.1', '0.3'), preset.accent].map((color, i) => (
                    <div
                      key={i}
                      className={cn(
                        "w-6 h-6 rounded-lg transition-all duration-300",
                        hoveredCard === preset.name && "scale-110"
                      )}
                      style={{ 
                        backgroundColor: color.includes('rgba') ? color : color,
                        transitionDelay: `${i * 50}ms`
                      }}
                      aria-label={`${preset.name} theme color variant ${i + 1}`}
                      role="img"
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Flexible content area */}
            <div className="flex-grow space-y-3">
              <h3 className={cn(
                "font-bold text-base transition-colors duration-200",
                hoveredCard === preset.name && "text-foreground"
              )}>
                {preset.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {preset.description}
              </p>
            </div>
            
            {/* Fixed height footer with enhanced button */}
            <div className="flex-shrink-0 pt-2">
              <Button
                size="sm"
                variant="outline"
                className={cn(
                  "w-full transition-all duration-300 text-xs h-9 font-medium",
                  "border-border/30 bg-transparent backdrop-blur-sm",
                  hoveredCard === preset.name 
                    ? "border-accent/50 bg-accent/[0.03] text-foreground shadow-sm" 
                    : "hover:border-accent/30 hover:bg-accent/[0.02]",
                  applyingTheme === preset.name && 
                    "bg-accent/10 border-accent/40 text-accent-foreground",
                  isHydrated && currentColorScheme === preset.colorScheme &&
                    "bg-accent/5 border-accent/30 text-accent"
                )}
                onClick={() => handleApplyTheme(preset)}
                disabled={applyingTheme === preset.name}
              >
                {applyingTheme === preset.name ? (
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border-2 border-accent border-t-transparent 
                                   rounded-full animate-spin" />
                    <span className="animate-pulse">Applying...</span>
                  </div>
                ) : isHydrated && currentColorScheme === preset.colorScheme ? (
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-enhanced-pulse" />
                    Active
                  </div>
                ) : (
                  <span className="group-hover:tracking-wide transition-all duration-200">
                    Apply Theme
                  </span>
                )}
              </Button>
              
              {/* Live region for screen readers */}
              <div 
                role="status" 
                aria-live="polite" 
                className="sr-only"
              >
                {applyingTheme === preset.name && `Applying ${preset.name} theme`}
                {isHydrated && currentColorScheme === preset.colorScheme && `${preset.name} theme is currently active`}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export function AnimatedThemeTransition() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  const handleToggle = React.useCallback(() => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium">Current Mode: {theme === "light" ? "Light" : "Dark"}</p>
          <p className="text-xs text-muted-foreground">Click to see smooth transitions</p>
        </div>
        <Button
          onClick={handleToggle}
          variant="outline"
          className="flex items-center gap-2"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? (
            <>
              <Moon className="w-4 h-4" />
              Switch to Dark
            </>
          ) : (
            <>
              <Sun className="w-4 h-4" />
              Switch to Light
            </>
          )}
        </Button>
      </div>
      
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border-2",
          "motion-safe:transition-all motion-safe:duration-500",
          theme === "dark" ? "border-white/10" : "border-black/10"
        )}
        style={{
          backgroundColor: theme === "dark" ? "hsl(0 0% 8%)" : "hsl(0 0% 96%)",
          boxShadow: theme === "dark" 
            ? "0 20px 40px -10px rgba(0, 0, 0, 0.4), 0 1px 0 rgba(255, 255, 255, 0.05) inset"
            : "0 20px 40px -10px rgba(0, 0, 0, 0.1), 0 1px 0 rgba(255, 255, 255, 0.8) inset",
        }}
      >
        <div className="p-8 lg:p-12 space-y-6">
          {/* Header with icon */}
          <div className="flex items-center gap-4">
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center",
              "motion-safe:transition-all motion-safe:duration-300",
              theme === "dark" 
                ? "bg-white/90 text-black" 
                : "bg-black/90 text-white"
            )}>
              {theme === "dark" ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
            </div>
            <h3 
              className="text-3xl font-bold motion-safe:transition-colors motion-safe:duration-300"
              style={{ color: theme === "dark" ? "hsl(0 0% 100%)" : "hsl(0 0% 0%)" }}
            >
              {theme === "dark" ? "Dark Mode Active" : "Light Mode Active"}
            </h3>
          </div>
          
          <p 
            className="text-lg leading-relaxed motion-safe:transition-colors motion-safe:duration-300"
            style={{ color: theme === "dark" ? "hsl(0 0% 100% / 0.9)" : "hsl(0 0% 0% / 0.9)" }}
          >
            Experience seamless theme transitions with smooth animations. 
            Every element adapts gracefully to provide the best visual experience.
          </p>
          
          {/* Sample UI elements */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className={cn(
              "p-4 rounded-lg border motion-safe:transition-all motion-safe:duration-300",
              theme === "dark" 
                ? "bg-white/5 border-white/10" 
                : "bg-black/5 border-black/10"
            )}>
              <div 
                className={cn(
                  "w-8 h-8 rounded mb-3 motion-safe:transition-all motion-safe:duration-300",
                  theme === "dark" ? "bg-blue-500" : "bg-blue-600"
                )}
                style={{
                  boxShadow: theme === "dark" 
                    ? "0 2px 8px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.1)"
                    : "0 2px 8px rgba(37, 99, 235, 0.2), 0 0 0 1px rgba(37, 99, 235, 0.1)"
                }}
              />
              <h4 
                className="font-semibold mb-1 motion-safe:transition-colors motion-safe:duration-300"
                style={{ color: theme === "dark" ? "hsl(0 0% 100%)" : "hsl(0 0% 0%)" }}
              >
                Primary
              </h4>
              <p 
                className="text-sm motion-safe:transition-colors motion-safe:duration-300"
                style={{ color: theme === "dark" ? "hsl(0 0% 100% / 0.7)" : "hsl(0 0% 0% / 0.7)" }}
              >
                Core actions
              </p>
            </div>
            
            <div className={cn(
              "p-4 rounded-lg border motion-safe:transition-all motion-safe:duration-300",
              theme === "dark" 
                ? "bg-white/5 border-white/10" 
                : "bg-black/5 border-black/10"
            )}>
              <div 
                className={cn(
                  "w-8 h-8 rounded mb-3 motion-safe:transition-all motion-safe:duration-300",
                  theme === "dark" ? "bg-green-500" : "bg-green-600"
                )}
                style={{
                  boxShadow: theme === "dark" 
                    ? "0 2px 8px rgba(34, 197, 94, 0.3), 0 0 0 1px rgba(34, 197, 94, 0.1)"
                    : "0 2px 8px rgba(22, 163, 74, 0.2), 0 0 0 1px rgba(22, 163, 74, 0.1)"
                }}
              />
              <h4 
                className="font-semibold mb-1 motion-safe:transition-colors motion-safe:duration-300"
                style={{ color: theme === "dark" ? "hsl(0 0% 100%)" : "hsl(0 0% 0%)" }}
              >
                Success
              </h4>
              <p 
                className="text-sm motion-safe:transition-colors motion-safe:duration-300"
                style={{ color: theme === "dark" ? "hsl(0 0% 100% / 0.7)" : "hsl(0 0% 0% / 0.7)" }}
              >
                Confirmations
              </p>
            </div>
            
            <div className={cn(
              "p-4 rounded-lg border motion-safe:transition-all motion-safe:duration-300",
              theme === "dark" 
                ? "bg-white/5 border-white/10" 
                : "bg-black/5 border-black/10"
            )}>
              <div 
                className={cn(
                  "w-8 h-8 rounded mb-3 motion-safe:transition-all motion-safe:duration-300",
                  theme === "dark" ? "bg-red-500" : "bg-red-600"
                )}
                style={{
                  boxShadow: theme === "dark" 
                    ? "0 2px 8px rgba(239, 68, 68, 0.3), 0 0 0 1px rgba(239, 68, 68, 0.1)"
                    : "0 2px 8px rgba(220, 38, 38, 0.2), 0 0 0 1px rgba(220, 38, 38, 0.1)"
                }}
              />
              <h4 
                className="font-semibold mb-1 motion-safe:transition-colors motion-safe:duration-300"
                style={{ color: theme === "dark" ? "hsl(0 0% 100%)" : "hsl(0 0% 0%)" }}
              >
                Danger
              </h4>
              <p 
                className="text-sm motion-safe:transition-colors motion-safe:duration-300"
                style={{ color: theme === "dark" ? "hsl(0 0% 100% / 0.7)" : "hsl(0 0% 0% / 0.7)" }}
              >
                Warnings
              </p>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 pt-4">
            <Button
              className={cn(
                "motion-safe:transition-all motion-safe:duration-300",
                theme === "dark"
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-black text-white hover:bg-black/90"
              )}
            >
              Primary Action
            </Button>
            <Button
              variant="outline"
              style={{
                borderColor: theme === "dark" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)",
                color: theme === "dark" ? "white" : "black",
                backgroundColor: "transparent"
              }}
              className="motion-safe:transition-all motion-safe:duration-300 hover:bg-opacity-10"
            >
              Secondary Action
            </Button>
          </div>
        </div>
        
        {/* Enhanced background effects for visual interest */}
        <div
          className="absolute inset-0 pointer-events-none motion-safe:transition-opacity motion-safe:duration-500"
          style={{
            opacity: theme === "dark" ? 0.1 : 0.08,
            background: theme === "dark" 
              ? "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 80%, #8b5cf6 0%, transparent 60%)"
              : "radial-gradient(circle at 80% 20%, #f43f5e 0%, transparent 50%), radial-gradient(circle at 20% 80%, #f97316 0%, transparent 60%)",
          }}
        />
        
        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: theme === "dark"
              ? "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)"
              : "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)",
            backgroundSize: "20px 20px"
          }}
        />
      </div>
    </div>
  );
}