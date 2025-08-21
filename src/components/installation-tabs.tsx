"use client";

import * as React from "react";
import { Terminal, Book } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface InstallationTabsProps {
  cliCommand: string;
  manualSteps: Array<{
    title: string;
    description: string;
    code?: string;
  }>;
  className?: string;
}

export function InstallationTabs({ cliCommand, manualSteps }: InstallationTabsProps) {
  return (
    <div id="installation" className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight font-ndot">Installation</h2>
      
      <Tabs defaultValue="cli" className="w-full">
        <TabsList className="grid w-fit grid-cols-2">
          <TabsTrigger value="cli" className="flex items-center gap-2 font-ndot">
            <Terminal className="h-4 w-4" />
            CLI
          </TabsTrigger>
          <TabsTrigger value="manual" className="flex items-center gap-2 font-ndot">
            <Book className="h-4 w-4" />
            Manual
          </TabsTrigger>
        </TabsList>

        <TabsContent value="cli" className="space-y-4">
          <p className="text-muted-foreground">
            Use the CLI to automatically add this component to your project.
          </p>
          <CodeBlock
            code={cliCommand}
            language="bash"
            className="text-sm"
          />
        </TabsContent>

        <TabsContent value="manual" className="space-y-6">
          <p className="text-muted-foreground">
            Copy and paste the following code into your project.
          </p>
          <div className="space-y-4">
            {manualSteps.map((step, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-medium font-ndot">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {step.code && (
                  <CodeBlock
                    code={step.code}
                    language="tsx"
                    className="text-sm"
                  />
                )}
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}