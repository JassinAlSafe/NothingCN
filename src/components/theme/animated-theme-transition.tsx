"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

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