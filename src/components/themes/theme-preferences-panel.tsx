"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Download, Upload, RotateCcw, Monitor, 
  Sun, Moon, Palette, Check, X 
} from "lucide-react";

interface ThemePreferencesPanelProps {
  theme?: {
    colorScheme: string;
    mode: "light" | "dark" | "system";
    lastUpdated: number;
  };
  effectiveMode?: "light" | "dark";
  systemTheme?: "light" | "dark";
  onColorSchemeChange?: (scheme: string) => void;
  onModeChange?: (mode: "light" | "dark" | "system") => void;
  onReset?: () => void;
  onExport?: () => string;
  onImport?: (data: string) => boolean;
}

const colorSchemes = [
  { name: "red", color: "0 84% 60%" },
  { name: "blue", color: "221 83% 53%" },
  { name: "green", color: "142 76% 36%" },
  { name: "purple", color: "263 70% 50%" },
  { name: "orange", color: "24 95% 53%" },
  { name: "yellow", color: "45 93% 47%" },
  { name: "pink", color: "330 81% 60%" },
  { name: "teal", color: "188 76% 42%" },
];

export const ThemePreferencesPanel = React.memo(function ThemePreferencesPanel({
  theme = { colorScheme: "red", mode: "system", lastUpdated: Date.now() },
  effectiveMode = "light",
  systemTheme = "light",
  onColorSchemeChange = () => {},
  onModeChange = () => {},
  onReset = () => {},
  onExport = () => "",
  onImport = () => false,
}: ThemePreferencesPanelProps) {
  const [importData, setImportData] = React.useState("");
  const [importStatus, setImportStatus] = React.useState<"idle" | "success" | "error">("idle");

  const handleExport = () => {
    const data = onExport();
    navigator.clipboard.writeText(data);
  };

  const handleImport = () => {
    const success = onImport(importData);
    setImportStatus(success ? "success" : "error");
    setTimeout(() => setImportStatus("idle"), 2000);
    if (success) setImportData("");
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Theme Preferences</h3>
        <p className="text-sm text-muted-foreground">
          Customize your theme and save preferences locally
        </p>
      </div>

      <Tabs defaultValue="appearance" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="appearance" className="space-y-4">
          <div className="space-y-3">
            <label className="text-sm font-medium">Theme Mode</label>
            <div className="grid grid-cols-3 gap-2">
              {["light", "dark", "system"].map((mode) => (
                <Button
                  key={mode}
                  variant={theme.mode === mode ? "default" : "outline"}
                  size="sm"
                  onClick={() => onModeChange(mode as "light" | "dark" | "system")}
                  className="flex items-center gap-2"
                >
                  {mode === "light" && <Sun className="w-4 h-4" />}
                  {mode === "dark" && <Moon className="w-4 h-4" />}
                  {mode === "system" && <Monitor className="w-4 h-4" />}
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                Current: {effectiveMode} mode
              </Badge>
              {theme.mode === "system" && (
                <Badge variant="secondary" className="text-xs">
                  System: {systemTheme}
                </Badge>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="colors" className="space-y-4">
          <div className="space-y-3">
            <label className="text-sm font-medium">Color Scheme</label>
            <div className="grid grid-cols-4 gap-2">
              {colorSchemes.map((scheme) => (
                <Button
                  key={scheme.name}
                  variant={theme.colorScheme === scheme.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => onColorSchemeChange(scheme.name)}
                  className="flex items-center gap-2 capitalize"
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: `hsl(${scheme.color})` }}
                  />
                  {scheme.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Active: {theme.colorScheme}
            </span>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <div className="space-y-4">
            <div className="space-y-3">
              <label className="text-sm font-medium">Export/Import</label>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleExport}>
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
                <Button variant="outline" size="sm" onClick={onReset}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Import Theme</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Paste theme data..."
                  value={importData}
                  onChange={(e) => setImportData(e.target.value)}
                  className="flex-1 px-3 py-1 text-sm border rounded"
                />
                <Button 
                  size="sm" 
                  onClick={handleImport}
                  disabled={!importData.trim()}
                >
                  {importStatus === "success" && <Check className="w-4 h-4 mr-2" />}
                  {importStatus === "error" && <X className="w-4 h-4 mr-2" />}
                  {importStatus === "idle" && <Upload className="w-4 h-4 mr-2" />}
                  Import
                </Button>
              </div>
              {importStatus === "error" && (
                <p className="text-xs text-destructive">Invalid theme data</p>
              )}
            </div>

            <div className="text-xs text-muted-foreground space-y-1">
              <p>Last updated: {new Date(theme.lastUpdated).toLocaleString()}</p>
              <p>Preferences saved locally in your browser</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
});