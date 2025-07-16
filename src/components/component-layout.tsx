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
    <div className="container relative py-4 lg:py-6 max-w-none">
      <div className="flex gap-6 lg:gap-8 xl:gap-6">
        {/* Main content */}
        <main className="flex-1 min-w-0 max-w-none">
          <div className="max-w-4xl mx-auto lg:max-w-5xl xl:max-w-none xl:mx-0">
            {children}
          </div>
          <div className="max-w-4xl mx-auto lg:max-w-5xl xl:max-w-none xl:mx-0">
            <ComponentNavigation previous={previous} next={next} />
          </div>
        </main>

        {/* Right sidebar - "On This Page" */}
        <aside className="hidden xl:block shrink-0">
          <div className="sticky top-6">
            <OnThisPage sections={sections} />
          </div>
        </aside>
      </div>
    </div>
  );
}
