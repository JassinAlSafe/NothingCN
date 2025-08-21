"use client";

import { ComponentCode } from "@/components/component-code";
import { ThemePageHeader } from "@/components/themes/theme-page-header";
import { ThemePageLayout } from "@/components/themes/theme-page-layout";
import { ColorCard } from "../components";

const sections = [
  { id: "semantic-colors", title: "Semantic Colors" },
  { id: "color-variables", title: "CSS Variables" },
  { id: "implementation", title: "Implementation" },
];

const previous = { title: "Playground", href: "/themes/playground" };
const next = { title: "Dark Mode", href: "/themes/dark-mode" };

const semanticColors = [
  { name: "Background", variable: "--background", value: "0 0% 100%", dark: "0 0% 0%" },
  { name: "Foreground", variable: "--foreground", value: "0 0% 0%", dark: "0 0% 100%" },
  { name: "Card", variable: "--card", value: "0 0% 100%", dark: "0 0% 0%" },
  { name: "Primary", variable: "--primary", value: "0 0% 0%", dark: "0 0% 100%" },
  { name: "Secondary", variable: "--secondary", value: "0 0% 96%", dark: "0 0% 10%" },
  { name: "Accent", variable: "--accent", value: "0 84% 60%", dark: "0 84% 60%" },
  { name: "Muted", variable: "--muted", value: "0 0% 96%", dark: "0 0% 10%" },
  { name: "Border", variable: "--border", value: "0 0% 90%", dark: "0 0% 20%" },
];

export default function ColorSystemPage() {
  return (
    <ThemePageLayout
      sections={sections}
      previous={previous}
      next={next}
    >
      {/* Page Header */}
      <ThemePageHeader
        title="Color System"
        description="Semantic color system with light and dark variants. Click to copy variable names."
      />

        {/* Semantic Colors */}
        <section id="semantic-colors" className="scroll-mt-20 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-ndot">
            Semantic Colors
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {semanticColors.map((color) => (
              <ColorCard key={color.variable} {...color} />
            ))}
          </div>
        </section>

        {/* CSS Variables */}
        <section id="color-variables" className="scroll-mt-20">
          <ComponentCode
            title="CSS Variables"
            description="Define colors in your CSS"
            code={`:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 0%;
  --card: 0 0% 100%;
  --primary: 0 0% 0%;
  --secondary: 0 0% 96%;
  --accent: 0 84% 60%;
  --muted: 0 0% 96%;
  --border: 0 0% 90%;
}

.dark {
  --background: 0 0% 0%;
  --foreground: 0 0% 100%;
  --card: 0 0% 0%;
  --primary: 0 0% 100%;
  --secondary: 0 0% 10%;
  --accent: 0 84% 60%;
  --muted: 0 0% 10%;
  --border: 0 0% 20%;
}`}
          />
        </section>

        {/* Implementation */}
        <section id="implementation" className="scroll-mt-20">
          <ComponentCode
            title="Using Colors"
            description="How to use semantic colors in components"
            code={`// Tailwind CSS
<div className="bg-background text-foreground">
  <div className="border-border bg-card">
    <button className="bg-accent text-accent-foreground">
      Click me
    </button>
  </div>
</div>

// CSS
.component {
  background: hsl(var(--background));
  color: hsl(var(--foreground));
  border-color: hsl(var(--border));
}`}
          />
        </section>

        {/* Add some bottom spacing */}
        <div className="h-8" />
    </ThemePageLayout>
  );
}