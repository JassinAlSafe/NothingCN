"use client";

import { CodePreview } from "@/components/ui/code-preview";
import { ThemePageHeader } from "@/components/themes/theme-page-header";
import { ThemePageLayout } from "@/components/themes/theme-page-layout";
import { ThemeErrorBoundary } from "@/components/theme-error-boundary";
import { InteractiveThemeSwitcher } from "@/components/themes/interactive-theme-switcher";
import { AnimatedThemeTransition, ThemePresetsGrid } from "../components";

const sections = [
  { id: "live-preview", title: "Live Preview" },
  { id: "presets", title: "Theme Presets" },
  { id: "animations", title: "Animations" },
];

const previous = { title: "Themes", href: "/themes" };
const next = { title: "Color System", href: "/themes/colors" };

export default function ThemePlaygroundPage() {
  return (
    <ThemePageLayout
      sections={sections}
      previous={previous}
      next={next}
    >
      {/* Page Header */}
      <ThemePageHeader
        title="Theme Playground"
        description="Experiment with themes in real-time. Click colors to preview changes instantly."
      />

        {/* Live Preview */}
        <section id="live-preview" className="scroll-mt-20">
          <CodePreview
            title="Interactive Theme Switcher"
            description="Click any color to see your UI transform instantly"
            preview={
              <ThemeErrorBoundary>
                <InteractiveThemeSwitcher />
              </ThemeErrorBoundary>
            }
            code={`// Apply theme dynamically
const applyTheme = (color) => {
  document.documentElement.style.setProperty('--accent', color);
}`}
            language="javascript"
            defaultTab="preview"
            tabsVariant="nothing"
            minimal={true}
          />
        </section>

        {/* Theme Presets */}
        <section id="presets" className="scroll-mt-20">
          <CodePreview
            title="Theme Presets"
            description="Pre-configured themes ready to use"
            preview={
              <ThemeErrorBoundary>
                <ThemePresetsGrid />
              </ThemeErrorBoundary>
            }
            code={`// Import preset themes
import { themes } from '@/lib/themes';

// Apply a preset
themes.ocean.apply();`}
            language="typescript"
            defaultTab="preview"
            tabsVariant="nothing"
            minimal={true}
          />
        </section>

        {/* Animations */}
        <section id="animations" className="scroll-mt-20">
          <CodePreview
            title="Theme Transitions"
            description="Smooth animations between theme changes"
            preview={
              <ThemeErrorBoundary>
                <AnimatedThemeTransition />
              </ThemeErrorBoundary>
            }
            code={`/* Enable smooth transitions */
* {
  transition: background-color 0.3s, color 0.3s;
}`}
            language="css"
            defaultTab="preview"
            tabsVariant="nothing"
            minimal={true}
          />
        </section>

        {/* Add some bottom spacing */}
        <div className="h-16" />
    </ThemePageLayout>
  );
}