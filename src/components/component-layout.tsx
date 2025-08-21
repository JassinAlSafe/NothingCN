"use client";

import * as React from "react";
import { DocumentationLayout } from "@/components/documentation-layout";

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

// ComponentLayout now uses DocumentationLayout internally for consistency
// This maintains backward compatibility while using the new architecture
export function ComponentLayout({
  children,
  sections,
  previous,
  next,
}: ComponentLayoutProps) {
  return (
    <DocumentationLayout
      sections={sections}
      previous={previous}
      next={next}
      showRightSidebar={true}
    >
      {children}
    </DocumentationLayout>
  );
}