"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { 
  Play, 
  RotateCcw, 
  Copy, 
  Download, 
  Share,
  Code, 
  Eye,
  Monitor,
  Smartphone,
  Tablet,
  Settings,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  ExternalLink
} from "lucide-react";

interface PlaygroundProps {
  componentName: string;
  initialCode: string;
  defaultProps?: Record<string, unknown>;
}

const DEVICE_PRESETS = {
  desktop: { width: '100%', height: 'auto', label: 'Desktop', icon: Monitor },
  tablet: { width: '768px', height: '600px', label: 'Tablet', icon: Tablet },
  mobile: { width: '375px', height: '600px', label: 'Mobile', icon: Smartphone },
};

const THEME_PRESETS = {
  light: { label: 'Light', class: '' },
  dark: { label: 'Dark', class: 'dark' },
  system: { label: 'System', class: 'system' },
};

export function CodePlayground({ 
  componentName, 
  initialCode, 
  defaultProps = {} 
}: PlaygroundProps) {
  const [code, setCode] = useState(initialCode);
  const [preview, setPreview] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [device, setDevice] = useState<keyof typeof DEVICE_PRESETS>('desktop');
  const [theme, setTheme] = useState<keyof typeof THEME_PRESETS>('light');
  const [showCode, setShowCode] = useState(true);
  const [props, setProps] = useState(defaultProps);
  const [shareUrl, setShareUrl] = useState('');

  // Simulate code execution and preview generation
  const executeCode = useCallback(async () => {
    setIsExecuting(true);
    setError(null);
    
    try {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Basic code validation
      if (!code.trim()) {
        throw new Error('Code cannot be empty');
      }
      
      if (!code.includes('export') && !code.includes('function')) {
        throw new Error('Code should export a component or function');
      }
      
      // Generate preview HTML (simplified simulation)
      const cleanCode = code.replace(/import.*from.*['""];?\n?/g, '');
      setPreview(`
        <div class="p-8 bg-background text-foreground min-h-[200px] flex items-center justify-center border rounded-lg ${theme === 'dark' ? 'dark' : ''}">
          <div class="text-center space-y-4">
            <div class="text-lg font-semibold">${componentName} Preview</div>
            <div class="text-sm text-muted-foreground">Live component render would appear here</div>
            <div class="bg-accent/10 p-4 rounded border">
              ${cleanCode.length > 100 ? cleanCode.substring(0, 100) + '...' : cleanCode}
            </div>
          </div>
        </div>
      `);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      setPreview('');
    } finally {
      setIsExecuting(false);
    }
  }, [code, componentName, theme]);

  // Auto-execute when code changes (with debounce)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (code.trim()) {
        executeCode();
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [code, executeCode]);

  // Generate shareable URL
  const generateShareUrl = () => {
    const encoded = btoa(JSON.stringify({ code, props, device, theme }));
    const url = `${window.location.origin}/playground?data=${encoded}`;
    setShareUrl(url);
    navigator.clipboard.writeText(url);
  };

  // Reset to initial state
  const resetCode = () => {
    setCode(initialCode);
    setProps(defaultProps);
    setError(null);
  };

  // Download component code
  const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${componentName.toLowerCase()}.tsx`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Copy code to clipboard
  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
  };

  return (
    <div className="space-y-6">
      {/* Playground Header */}
      <Card className="border-2 border-accent/20 bg-gradient-to-r from-accent/5 to-accent/10">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent text-accent-foreground rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <CardTitle className="text-xl">Interactive Playground</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Live code editor for {componentName} component
                </p>
              </div>
            </div>
            <Badge className="bg-accent text-accent-foreground">
              <Lightbulb className="w-3 h-3 mr-1" />
              Live Preview
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Controls */}
      <Card className="border border-border">
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* View Controls */}
            <div className="flex items-center gap-2">
              <Button
                variant={showCode ? "default" : "outline"}
                size="sm"
                onClick={() => setShowCode(!showCode)}
              >
                <Code className="w-4 h-4 mr-2" />
                Code
              </Button>
              <Button
                variant={!showCode ? "default" : "outline"}
                size="sm"
                onClick={() => setShowCode(!showCode)}
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </div>

            {/* Device Presets */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Device:</span>
              {Object.entries(DEVICE_PRESETS).map(([key, preset]) => {
                const Icon = preset.icon;
                return (
                  <Button
                    key={key}
                    variant={device === key ? "default" : "outline"}
                    size="sm"
                    onClick={() => setDevice(key as keyof typeof DEVICE_PRESETS)}
                  >
                    <Icon className="w-4 h-4" />
                  </Button>
                );
              })}
            </div>

            {/* Theme Controls */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Theme:</span>
              {Object.entries(THEME_PRESETS).map(([key, preset]) => (
                <Button
                  key={key}
                  variant={theme === key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTheme(key as keyof typeof THEME_PRESETS)}
                >
                  {preset.label}
                </Button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 ml-auto">
              <Button variant="outline" size="sm" onClick={resetCode}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
              <Button variant="outline" size="sm" onClick={copyCode}>
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
              <Button variant="outline" size="sm" onClick={downloadCode}>
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" size="sm" onClick={generateShareUrl}>
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Playground */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Code Editor */}
        {showCode && (
          <Card className="border border-border">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Code Editor</CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    onClick={executeCode}
                    disabled={isExecuting}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {isExecuting ? 'Running...' : 'Run'}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative">
                <Textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="min-h-[400px] font-mono text-sm border-0 rounded-none resize-none"
                  placeholder="Enter your component code here..."
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="text-xs">
                    TypeScript
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Preview Panel */}
        <Card className="border border-border">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Live Preview</CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {DEVICE_PRESETS[device].label}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {THEME_PRESETS[theme].label}
                </Badge>
                {isExecuting && (
                  <Badge className="bg-orange-500 text-white text-xs">
                    <Settings className="w-3 h-3 mr-1 animate-spin" />
                    Updating
                  </Badge>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div 
              className="border-t border-border overflow-auto"
              style={{ 
                width: DEVICE_PRESETS[device].width,
                height: DEVICE_PRESETS[device].height || '400px',
                maxWidth: '100%'
              }}
            >
              {error ? (
                <div className="p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Execution Error</h3>
                  <p className="text-sm text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded">
                    {error}
                  </p>
                </div>
              ) : preview ? (
                <div 
                  className={THEME_PRESETS[theme].class}
                  dangerouslySetInnerHTML={{ __html: preview }}
                />
              ) : (
                <div className="p-8 text-center text-muted-foreground">
                  <Code className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Write code to see live preview</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Props Configuration */}
      <Card className="border border-border">
        <CardHeader>
          <CardTitle className="text-lg">Component Props</CardTitle>
          <p className="text-sm text-muted-foreground">
            Configure component properties and see changes in real-time
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(defaultProps).map(([key]) => (
              <div key={key} className="space-y-2">
                <label className="text-sm font-medium">{key}</label>
                <Input
                  value={props[key]?.toString() || ''}
                  onChange={(e) => setProps(prev => ({
                    ...prev,
                    [key]: e.target.value
                  }))}
                  placeholder={`Enter ${key}...`}
                  className="text-sm"
                />
              </div>
            ))}
          </div>
          
          {Object.keys(defaultProps).length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Settings className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>No configurable props for this component</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Share URL Modal */}
      {shareUrl && (
        <Card className="border-2 border-accent/50 bg-accent/5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium">Shareable link copied!</p>
                  <p className="text-sm text-muted-foreground">
                    Share this playground with others
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href={shareUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}