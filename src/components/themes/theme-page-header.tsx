"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemePageHeaderProps {
  title: string;
  description: string;
  badges?: Array<{
    text: string;
    icon?: LucideIcon;
    variant?: "default" | "secondary" | "destructive" | "outline";
    className?: string;
  }>;
}

export const ThemePageHeader = React.memo(function ThemePageHeader({
  title,
  description,
  badges = []
}: ThemePageHeaderProps) {
  return (
    <div className="space-y-4 sm:space-y-6 border-b border-border pb-6 sm:pb-8 lg:pb-10">
      <div className="flex items-center space-x-3">
        <div className="w-1.5 sm:w-2 h-10 sm:h-12 bg-accent rounded-full" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-ndot">
          {title}
        </h1>
      </div>
      <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
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
                className={cn(
                  "text-xs sm:text-sm",
                  badge.className
                )}
              >
                {Icon && <Icon className="w-3 h-3 mr-1" />}
                {badge.text}
              </Badge>
            );
          })}
        </div>
      )}
    </div>
  );
});