"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/providers/theme-provider";

type ThemeMode = "light" | "dark" | "system";

export function ThemeModeSwitcher() {
  const { theme, setMode, isHydrated } = useTheme();
  const mode = theme.mode;

  const handleModeChange = React.useCallback((value: string) => {
    if (value === "light" || value === "dark" || value === "system") {
      setMode(value as ThemeMode);
    }
  }, [setMode]);

  // Show loading state during hydration
  if (!isHydrated) {
    return (
      <div className="w-full">
        <div className="grid w-full grid-cols-3 bg-muted rounded-md p-1 animate-pulse">
          <div className="h-8 bg-background rounded-sm" />
          <div className="h-8" />
          <div className="h-8" />
        </div>
      </div>
    );
  }

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
        <Card className="p-6 bg-black text-white border-white/20">
          <h3 className="font-semibold mb-2">Dark Mode</h3>
          <p className="text-sm text-white/70">
            Components use dark backgrounds with light text, reducing eye strain in low-light conditions.
          </p>
        </Card>
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