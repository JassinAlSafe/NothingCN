"use client";

import { ComponentPreview } from "@/components/component-preview";
import { ComponentCode } from "@/components/component-code";
import { OnThisPage } from "@/components/on-this-page";
import { ComponentNavigation } from "@/components/component-navigation";
import { ThemeModeSwitcher } from "../components";

const sections = [
  { id: "setup", title: "Setup" },
  { id: "theme-toggle", title: "Theme Toggle" },
  { id: "system-preference", title: "System Preference" },
];

const previous = { title: "Color System", href: "/themes/colors" };
const next = { title: "Accessibility", href: "/themes/accessibility" };

export default function DarkModePage() {
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
              Dark Mode
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Complete dark mode setup with system preference detection and manual toggle.
          </p>
        </div>

        {/* Setup */}
        <section id="setup" className="scroll-mt-20">
          <ComponentCode
            title="Next.js Setup"
            description="Configure next-themes for dark mode support"
            code={`// app/layout.tsx
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`}
          />
        </section>

        {/* Theme Toggle */}
        <section id="theme-toggle" className="scroll-mt-20">
          <ComponentPreview
            title="Theme Mode Switcher"
            description="Let users choose their preferred theme"
            preview={<ThemeModeSwitcher />}
            code={`import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}`}
          />
        </section>

        {/* System Preference */}
        <section id="system-preference" className="scroll-mt-20">
          <ComponentCode
            title="System Preference"
            description="Respect user's OS theme preference"
            code={`/* CSS for system preference */
@media (prefers-color-scheme: dark) {
  :root {
    --background: 0 0% 0%;
    --foreground: 0 0% 100%;
  }
}

/* JavaScript detection */
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Listen for changes
window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    setTheme(e.matches ? 'dark' : 'light');
  });`}
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