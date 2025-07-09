"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Check, Copy, Terminal, Book } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InstallationTabsProps {
  cliCommand: string;
  manualSteps: Array<{
    title: string;
    description: string;
    code?: string;
  }>;
}

export function InstallationTabs({ cliCommand, manualSteps }: InstallationTabsProps) {
  const [activeTab, setActiveTab] = React.useState<"cli" | "manual">("cli");
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div id="installation" className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight font-ndot">Installation</h2>
      
      {/* Tab Navigation */}
      <div className="flex space-x-1 rounded-lg bg-muted p-1 w-fit">
        <button
          onClick={() => setActiveTab("cli")}
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-all font-ndot",
            activeTab === "cli"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Terminal className="h-4 w-4" />
          CLI
        </button>
        <button
          onClick={() => setActiveTab("manual")}
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-all font-ndot",
            activeTab === "manual"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Book className="h-4 w-4" />
          Manual
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "cli" && (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Use the CLI to automatically add this component to your project.
          </p>
          <div className="relative">
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto">
              <code className="text-sm font-mono">{cliCommand}</code>
            </pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 h-8 px-2"
              onClick={() => copyToClipboard(cliCommand)}
            >
              {copied ? (
                <Check className="h-3 w-3 text-green-500" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </Button>
          </div>
        </div>
      )}

      {activeTab === "manual" && (
        <div className="space-y-6">
          <p className="text-muted-foreground">
            Copy and paste the following code into your project.
          </p>
          <div className="space-y-4">
            {manualSteps.map((step, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-medium font-ndot">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {step.code && (
                  <div className="relative">
                    <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
                      <code>{step.code}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 h-8 px-2"
                      onClick={() => copyToClipboard(step.code!)}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}