"use client";

import React from "react";
import { ComponentLayout } from "@/components/component-layout";
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
  componentSourceCode?: string;
  basicUsageCode?: string;
}


export const StandardComponentLayout = React.memo(function StandardComponentLayout({
  componentName,
  componentPath,
  description,
  badges = [],
  children,
  customSections,
  componentSourceCode = "",
  basicUsageCode = "",
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