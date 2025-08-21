"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

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