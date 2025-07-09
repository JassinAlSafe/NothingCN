"use client";

import * as React from "react";
import { OnThisPage } from "@/components/on-this-page";
import { ComponentNavigation } from "@/components/component-navigation";

interface ComponentLayoutProps {
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
}

export function ComponentLayout({
  children,
  sections,
  previous,
  next,
}: ComponentLayoutProps) {
  return (
    <div className="container relative py-6 lg:py-8 max-w-7xl">
      <div className="flex gap-4 lg:gap-6">
        {/* Main content */}
        <main className="flex-1 min-w-0 max-w-5xl">
          {children}
          <ComponentNavigation previous={previous} next={next} />
        </main>

        {/* Right sidebar - "On This Page" */}
        <aside className="hidden xl:block w-48 shrink-0">
          <OnThisPage sections={sections} />
        </aside>
      </div>
    </div>
  );
}
