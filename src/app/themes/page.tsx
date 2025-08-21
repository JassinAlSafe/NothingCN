"use client";

import { ComponentPreview } from "@/components/component-preview";
import { ComponentCode } from "@/components/component-code";
import { InstallationTabs } from "@/components/installation-tabs";
import { ThemePageHeader } from "@/components/themes/theme-page-header";
import { ThemePageLayout } from "@/components/themes/theme-page-layout";
import { ThemeErrorBoundary } from "@/components/theme-error-boundary";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { 
  Palette, Moon, Sparkles, Play, 
  Accessibility, Settings, ArrowRight
} from "lucide-react";
import { themeSourceCode } from "./source";

const sections = [
  { id: "installation", title: "Installation" },
  { id: "usage", title: "Usage" },
  { id: "quick-start", title: "Quick Start" },
  { id: "explore", title: "Explore Themes" },
];

// Themes navigation
const previous = undefined;
const next = { href: "/themes/playground", title: "Playground" };

const themePages = [
  {
    title: "Playground",
    description: "Interactive theme customization",
    href: "/themes/playground",
    icon: Play,
    color: "text-purple-500 bg-purple-500/10",
  },
  {
    title: "Color System",
    description: "Semantic colors and palettes",
    href: "/themes/colors",
    icon: Palette,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    title: "Dark Mode",
    description: "Light and dark theme setup",
    href: "/themes/dark-mode",
    icon: Moon,
    color: "text-indigo-500 bg-indigo-500/10",
  },
  {
    title: "Accessibility",
    description: "User preference support",
    href: "/themes/accessibility",
    icon: Accessibility,
    color: "text-green-500 bg-green-500/10",
  },
];

export default function ThemesPage() {
  return (
    <ThemePageLayout
      sections={sections}
      previous={previous}
      next={next}
      enableErrorBoundary={false}
    >
      {/* Page Header */}
      <ThemePageHeader
        title="Themes"
        description="Minimal theming system with CSS variables and dark mode support, inspired by Nothing OS."
        badges={[
          {
            text: "CSS Variables",
            icon: Sparkles,
            className: "bg-green-500/10 text-green-600 border-green-500/20"
          },
          {
            text: "Dark Mode", 
            icon: Moon,
            className: "bg-blue-500/10 text-blue-600 border-blue-500/20"
          },
          {
            text: "Customizable",
            icon: Settings,
            className: "bg-purple-500/10 text-purple-600 border-purple-500/20"
          }
        ]}
      />

        {/* Installation */}
        <InstallationTabs
          cliCommand="npx nothingcn@latest add theme"
          manualSteps={[
            {
              title: "Copy theme variables",
              description: "Add to your globals.css file",
              code: themeSourceCode,
            },
          ]}
        />

        {/* Usage */}
        <div id="usage" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-ndot">Usage</h2>
          <ComponentCode
            title="Import in CSS"
            description="Add the theme to your global CSS file"
            code={`/* globals.css */
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 0%;
    /* ... other variables */
  }
}`}
          />
        </div>

        {/* Quick Start */}
        <div id="quick-start">
          <ComponentPreview
            title="Quick Start"
            description="Components automatically use theme variables"
            preview={
              <ThemeErrorBoundary>
                <div className="space-y-4 w-full max-w-md">
                  <div className="flex flex-wrap gap-3">
                    <Button>Primary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </div>
              </ThemeErrorBoundary>
            }
            code={`<Button>Primary</Button>
<Button variant="outline">Outline</Button>
<Badge>Default</Badge>`}
          />
        </div>

        {/* Explore Themes */}
        <div id="explore" className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-ndot">
              Explore Themes
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Dive deeper into customization options and features.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {themePages.map((page) => {
              const Icon = page.icon;
              return (
                <Link key={page.href} href={page.href}>
                  <Card className="h-full p-6 hover:shadow-lg transition-all duration-200 hover:border-foreground/20 group cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3">
                        <div className={`w-10 h-10 rounded-lg ${page.color} flex items-center justify-center`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{page.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {page.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

          {/* Add some bottom spacing */}
          <div className="h-16" />
    </ThemePageLayout>
  );
}