"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  spacing?: "tight" | "normal" | "loose";
}

export const ResponsiveContainer = React.memo(function ResponsiveContainer({
  children,
  className,
  size = "lg",
  spacing = "normal"
}: ResponsiveContainerProps) {
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md", 
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-none"
  };

  const spacingClasses = {
    tight: "space-y-4 sm:space-y-6",
    normal: "space-y-6 sm:space-y-8 lg:space-y-12",
    loose: "space-y-8 sm:space-y-12 lg:space-y-16"
  };

  return (
    <div className={cn(
      "w-full mx-auto",
      sizeClasses[size],
      spacingClasses[spacing],
      className
    )}>
      {children}
    </div>
  );
});