"use client";

import * as React from "react";
import { OnThisPage } from "@/components/on-this-page";
import { ComponentNavigation } from "@/components/component-navigation";

interface DocumentationLayoutProps {
  children: React.ReactNode;
  sections: Array<{
    id: string;
    title: string;
    level?: number;
  }>;
  previous?: {
    href: string;
    title: string;
  };
  next?: {
    href: string;
    title: string;
  };
  leftSidebar?: React.ReactNode;
  rightSidebar?: React.ReactNode;
  showRightSidebar?: boolean;
}

export function DocumentationLayout({
  children,
  sections,
  previous,
  next,
  leftSidebar,
  rightSidebar,
  showRightSidebar = true,
}: DocumentationLayoutProps) {
  // Default right sidebar to OnThisPage if not provided
  const rightSidebarContent = rightSidebar || (showRightSidebar ? <OnThisPage sections={sections} /> : null);

  return (
    <div className="container relative py-8 lg:py-12 max-w-none">
      <div className="flex gap-4 lg:gap-6 xl:gap-8">
        {/* Optional Left Sidebar */}
        {leftSidebar && (
          <aside className="hidden lg:block">
            {leftSidebar}
          </aside>
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-none mx-0 lg:max-w-[85ch] lg:mx-auto xl:max-w-none xl:mx-0">
            {children}
          </div>
          <div className="max-w-none mx-0 lg:max-w-[85ch] lg:mx-auto xl:max-w-none xl:mx-0 mt-12">
            <ComponentNavigation previous={previous} next={next} />
          </div>
        </main>

        {/* Optional Right sidebar - "On This Page" */}
        {rightSidebarContent && (
          <aside className="hidden xl:block shrink-0">
            <div className="sticky top-6">
              {rightSidebarContent}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}