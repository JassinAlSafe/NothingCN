"use client";

import * as React from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Copy, Check } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "typescript",
  title,
  className,
  showLineNumbers = false,
  ...props
}: CodeBlockProps) {
  const [isCopied, setIsCopied] = React.useState(false);
  
  // Determine if we're in dark mode - check DOM state directly for immediate updates
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  
  React.useEffect(() => {
    // Check immediately and set up observer for changes
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };
    
    checkDarkMode(); // Initial check
    
    // Observe changes to the dark class
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Create custom theme based on dark mode with transparent background
  const prismTheme = React.useMemo(() => {
    const baseTheme = isDarkMode ? themes.vsDark : themes.oneLight;
    return {
      ...baseTheme,
      plain: {
        ...baseTheme.plain,
        backgroundColor: 'transparent', // Make background transparent so our styles show through
      }
    };
  }, [isDarkMode]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };

  return (
    <div className={cn("relative group", className)} {...props}>
      {title && (
        <div 
          className="flex items-center justify-between px-4 py-2 border-b"
          style={{
            backgroundColor: isDarkMode ? '#0f0f0f' : '#f3f4f6',
            borderColor: isDarkMode ? '#1f1f1f' : '#e5e7eb'
          }}
        >
          <span className="text-sm font-medium font-ndot">{title}</span>
        </div>
      )}

      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={copyToClipboard}
        >
          {isCopied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>

        <Highlight theme={prismTheme} code={code} language={language}>
          {({ className: highlightClassName, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={cn(
                "overflow-x-auto p-4 text-sm rounded-2xl font-ntype82-mono",
                highlightClassName,
                className
              )}
              style={{ 
                // Force background color based on dark mode state
                backgroundColor: isDarkMode ? '#0a0a0a' : '#f9fafb',
                color: isDarkMode ? '#e5e7eb' : '#111827'
              }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {showLineNumbers && (
                    <span className="select-none text-muted-foreground mr-4 text-right w-8 inline-block font-ndot">
                      {i + 1}
                    </span>
                  )}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}
