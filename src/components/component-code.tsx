"use client";

import { CodeBlock } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";

interface ComponentCodeProps {
  title: string;
  description?: string;
  code: string;
  className?: string;
}

export function ComponentCode({
  title,
  description,
  code,
  className,
}: ComponentCodeProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-1 h-8 bg-accent rounded-full" />
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        </div>
        {description && (
          <p className="text-muted-foreground leading-relaxed ml-4">
            {description}
          </p>
        )}
      </div>

      {/* Code */}
      <div className="relative">
        <CodeBlock 
          code={code} 
          language="tsx" 
          title={title.toLowerCase().replace(/\s+/g, '-') + '.tsx'}
        />
      </div>
    </div>
  );
}