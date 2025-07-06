"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SidebarItem {
  title: string;
  href: string;
  disabled?: boolean;
  label?: string;
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

const sidebarConfig: SidebarSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/components",
      },
      {
        title: "Installation",
        href: "/components/installation",
      },
      {
        title: "Typography",
        href: "/components/typography",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Button",
        href: "/components/button",
      },
      {
        title: "Card",
        href: "/components/card",
      },
      {
        title: "Badge",
        href: "/components/badge",
      },
      {
        title: "Code Block",
        href: "/components/code-block",
      },
      {
        title: "Tabs",
        href: "/components/tabs",
      },
      {
        title: "Input",
        href: "/components/input",
        disabled: true,
        label: "Soon",
      },
      {
        title: "Select",
        href: "/components/select",
        disabled: true,
        label: "Soon",
      },
      {
        title: "Dialog",
        href: "/components/dialog",
        disabled: true,
        label: "Soon",
      },
    ],
  },
  {
    title: "Creative Components",
    items: [
      {
        title: "Gradient Button",
        href: "/components/gradient-button",
        disabled: true,
        label: "New",
      },
      {
        title: "Neon Card",
        href: "/components/neon-card",
        disabled: true,
        label: "New",
      },
      {
        title: "Glitch Text",
        href: "/components/glitch-text",
        disabled: true,
        label: "New",
      },
      {
        title: "Pixel Border",
        href: "/components/pixel-border",
        disabled: true,
        label: "New",
      },
    ],
  },
];

export function ComponentsSidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-accent rounded-full" />
          <h4 className="text-lg font-bold font-ndot tracking-wide">
            NOTHINGCN
          </h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Creative components for modern web applications.
        </p>
      </div>

      {/* Navigation Sections */}
      <div className="space-y-8">
        {sidebarConfig.map((section) => (
          <div key={section.title} className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/60 px-3">
              {section.title}
            </h4>
            <div className="space-y-1">
              {section.items.map((item) => (
                <div key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "group flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-accent/10 hover:text-accent rounded-lg border border-transparent hover:border-accent/20",
                      pathname === item.href
                        ? "bg-accent/10 text-accent border-accent/30 shadow-sm"
                        : "text-foreground/80 hover:text-foreground",
                      item.disabled && "cursor-not-allowed opacity-50 hover:bg-transparent hover:text-foreground/50"
                    )}
                    onClick={item.disabled ? (e) => e.preventDefault() : undefined}
                  >
                    <span className="flex items-center space-x-2">
                      {pathname === item.href && (
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      )}
                      <span>{item.title}</span>
                    </span>
                    {item.label && (
                      <Badge
                        variant="secondary"
                        className={cn(
                          "text-xs px-2 py-0.5 font-medium",
                          item.label === "New" && "bg-accent/20 text-accent border border-accent/30",
                          item.label === "Soon" && "bg-muted/50 text-muted-foreground border border-border"
                        )}
                      >
                        {item.label}
                      </Badge>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-border pt-6 mt-8">
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground px-3">
            Made with Nothing OS inspiration
          </p>
          <div className="flex items-center space-x-1 px-3">
            <div className="w-1 h-1 bg-accent rounded-full" />
            <div className="w-1 h-1 bg-accent/60 rounded-full" />
            <div className="w-1 h-1 bg-accent/30 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}