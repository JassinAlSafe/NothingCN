"use client";

import React from "react";
import { ComponentLayout } from "@/components/component-layout";
import { InstallationTabs } from "@/components/installation-tabs";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentCode } from "@/components/component-code";
import { ComponentTestRunner } from "@/components/component-test-runner";
import { getComponentNavigation } from "@/lib/component-navigation";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface Section {
  id: string;
  title: string;
  level?: number;
}

interface Badge {
  text: string;
  icon?: LucideIcon;
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
}

interface StandardComponentLayoutProps {
  componentName: string;
  componentPath: string;
  description: string;
  badges?: Badge[];
  children?: React.ReactNode;
  customSections?: Section[];
  dependencies?: string[];
  cliCommand?: string;
  manualSteps?: Array<{
    title: string;
    description: string;
    code: string;
  }>;
  componentSourceCode?: string;
  basicUsageCode?: string;
  enableTesting?: boolean;
  testVariants?: Record<string, unknown>[];
  ComponentClass?: React.ComponentType<Record<string, unknown>>;
}

const defaultSections: Section[] = [
  { id: "installation", title: "Installation" },
  { id: "usage", title: "Usage" },
  { id: "basic-usage", title: "Basic Usage" },
  { id: "examples", title: "Examples" },
  { id: "component-source", title: "Component Source" },
];

export const StandardComponentLayout = React.memo(function StandardComponentLayout({
  componentName,
  componentPath,
  description,
  badges = [],
  children,
  customSections,
  dependencies = ["class-variance-authority", "clsx", "tailwind-merge"],
  cliCommand,
  manualSteps = [],
  componentSourceCode = "",
  basicUsageCode = "",
  enableTesting = false,
  testVariants = [],
  ComponentClass
}: StandardComponentLayoutProps) {
  // Build sections array based on what content we'll actually render
  const sections = customSections || [
    { id: "installation", title: "Installation" },
    { id: "usage", title: "Usage" },
    ...(basicUsageCode ? [{ id: "basic-usage", title: "Basic Usage" }] : []),
    { id: "examples", title: "Examples" },
    ...(componentSourceCode ? [{ id: "component-source", title: "Component Source" }] : []),
  ];
  
  // Get navigation for this component
  const { previous, next } = getComponentNavigation(componentPath);

  // Default manual steps if none provided
  const defaultManualSteps = manualSteps.length > 0 ? manualSteps : [
    {
      title: "Install dependencies",
      description: "Install required dependencies for the component.",
      code: `npm install ${dependencies.join(" ")}`,
    },
    {
      title: "Copy component source code",
      description: "Create a new file and paste the component code.",
      code: componentSourceCode,
    },
    {
      title: "Import and use",
      description: "Import the component and use it in your project.",
      code: basicUsageCode || `import { ${componentName} } from "@/components/ui/${componentName.toLowerCase()}";

export function Example() {
  return (
    <${componentName}>
      Example content
    </${componentName}>
  );
}`,
    },
  ];

  return (
    <ComponentLayout sections={sections} previous={previous} next={next}>
      <div className="space-y-8 sm:space-y-12 lg:space-y-16">
        {/* Standard Page Header */}
        <div className="space-y-3 border-b border-border pb-6">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-12 bg-accent rounded-full" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-ndot">
              {componentName}
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {description}
          </p>
          {badges.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-2 sm:pt-4 lg:pt-6">
              {badges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <Badge 
                    key={index}
                    variant={badge.variant || "secondary"} 
                    className={badge.className}
                  >
                    {Icon && <Icon className="w-3 h-3 mr-1" />}
                    {badge.text}
                  </Badge>
                );
              })}
            </div>
          )}
        </div>

        {/* All Content Provided by Children */}
        {children}
      </div>
    </ComponentLayout>
  );
});