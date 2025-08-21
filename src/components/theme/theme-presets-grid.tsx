"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/providers/theme-provider";
import { THEME_COLORS, type ColorScheme } from "@/lib/theme-config";
import { useToastWithHelpers } from "@/components/ui/toast";

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