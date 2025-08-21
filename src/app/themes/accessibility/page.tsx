"use client";

import { ComponentCode } from "@/components/component-code";
import { OnThisPage } from "@/components/on-this-page";
import { ComponentNavigation } from "@/components/component-navigation";
import { Card } from "@/components/ui/card";
import { Accessibility, Eye, Zap, Palette } from "lucide-react";

const sections = [
  { id: "motion", title: "Motion Preferences" },
  { id: "contrast", title: "High Contrast" },
  { id: "focus", title: "Focus Indicators" },
];

const previous = { title: "Dark Mode", href: "/themes/dark-mode" };
const next = { title: "Themes", href: "/themes" };

export default function AccessibilityPage() {
  return (
    <div className="flex gap-6 xl:gap-8">
      {/* Main content */}
      <main className="flex-1 min-w-0">
      <div className="space-y-12 lg:space-y-16">
        {/* Page Header */}
        <div className="space-y-4 border-b border-border pb-8 lg:pb-10">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-12 bg-accent rounded-full" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-ndot">
              Accessibility
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Respect user preferences for motion, contrast, and visual needs.
          </p>
        </div>

        {/* Features Grid */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="p-4">
            <Accessibility className="h-8 w-8 text-accent mb-2" />
            <h3 className="font-semibold">ARIA Support</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Semantic HTML and labels
            </p>
          </Card>
          <Card className="p-4">
            <Zap className="h-8 w-8 text-accent mb-2" />
            <h3 className="font-semibold">Reduced Motion</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Respect animation preferences
            </p>
          </Card>
          <Card className="p-4">
            <Eye className="h-8 w-8 text-accent mb-2" />
            <h3 className="font-semibold">High Contrast</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Enhanced visibility mode
            </p>
          </Card>
          <Card className="p-4">
            <Palette className="h-8 w-8 text-accent mb-2" />
            <h3 className="font-semibold">Color Blind</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Accessible color choices
            </p>
          </Card>
        </section>

        {/* Motion Preferences */}
        <section id="motion" className="scroll-mt-20">
          <ComponentCode
            title="Motion Preferences"
            description="Reduce or disable animations for users who prefer it"
            code={`/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Safe animations */
.animate-safe {
  animation: fadeIn 0.3s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .animate-safe {
    animation: none;
  }
}`}
          />
        </section>

        {/* High Contrast */}
        <section id="contrast" className="scroll-mt-20">
          <ComponentCode
            title="High Contrast Mode"
            description="Enhance visibility for users who need it"
            code={`/* High contrast mode */
@media (prefers-contrast: high) {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 0%;
    --border: 0 0% 0%;
    --accent: 0 100% 50%;
  }

  .dark {
    --background: 0 0% 0%;
    --foreground: 0 0% 100%;
    --border: 0 0% 100%;
  }

  /* Stronger borders */
  * {
    border-width: 2px;
  }
}`}
          />
        </section>

        {/* Focus Indicators */}
        <section id="focus" className="scroll-mt-20">
          <ComponentCode
            title="Focus Indicators"
            description="Clear focus states for keyboard navigation"
            code={`/* Visible focus indicators */
:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

/* Remove default outline */
:focus:not(:focus-visible) {
  outline: none;
}

/* Custom focus styles */
.button:focus-visible {
  box-shadow: 
    0 0 0 2px hsl(var(--background)),
    0 0 0 4px hsl(var(--ring));
}`}
          />
        </section>

        {/* Add some bottom spacing */}
        <div className="h-8" />
      </div>
      
      {/* Navigation */}
      <div className="mt-12">
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
  );
}