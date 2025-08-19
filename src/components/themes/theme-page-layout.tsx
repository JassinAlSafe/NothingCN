"use client";

import React from "react";
import { OnThisPage } from "@/components/on-this-page";
import { ComponentNavigation } from "@/components/component-navigation";
import { ThemeErrorBoundary } from "@/components/theme-error-boundary";

interface Section {
  id: string;
  title: string;
  level?: number;
}

interface NavigationLink {
  href: string;
  title: string;
}

interface ThemePageLayoutProps {
  children: React.ReactNode;
  sections: Section[];
  previous?: NavigationLink;
  next?: NavigationLink;
  enableErrorBoundary?: boolean;
}

export const ThemePageLayout = React.memo(function ThemePageLayout({
  children,
  sections,
  previous,
  next,
  enableErrorBoundary = true
}: ThemePageLayoutProps) {
  const content = enableErrorBoundary ? (
    <ThemeErrorBoundary>{children}</ThemeErrorBoundary>
  ) : children;

  return (
    <div className="flex gap-2 lg:gap-4 xl:gap-6">
      {/* Main content */}
      <main className="flex-1 min-w-0">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {content}
        </div>
        
        {/* Navigation */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <ComponentNavigation previous={previous} next={next} />
        </div>
      </main>

      {/* Right sidebar - "On This Page" - Reduced width and closer positioning */}
      <aside className="hidden xl:block shrink-0 w-48 lg:w-52">
        <div className="sticky top-6">
          <OnThisPage sections={sections} />
        </div>
      </aside>
    </div>
  );
});