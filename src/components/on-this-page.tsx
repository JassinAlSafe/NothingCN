"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface OnThisPageProps {
  sections: Array<{
    id: string;
    title: string;
    level?: number;
  }>;
}

export function OnThisPage({ sections }: OnThisPageProps) {
  const [activeSection, setActiveSection] = React.useState<string>("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -35% 0%",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-1.5 min-w-0 w-fit">
      <h4 className="font-ndot text-xs font-medium text-foreground uppercase tracking-wide whitespace-nowrap">On This Page</h4>
      <nav className="space-y-0.5 min-w-0">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={cn(
              "block text-left text-xs transition-colors hover:text-foreground py-0.5 leading-tight min-w-0 max-w-[200px] w-fit",
              section.level === 2 && "pl-1.5",
              section.level === 3 && "pl-3",
              activeSection === section.id
                ? "text-foreground font-medium border-l-2 border-accent pl-1.5"
                : "text-muted-foreground"
            )}
          >
            <span className="block truncate text-ellipsis overflow-hidden">{section.title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}