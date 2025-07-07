import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ComponentCode } from "@/components/component-code";
import { ComponentPreview } from "@/components/component-preview";

const themeCode = `@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 0%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 0%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 0%;
    --primary: 0 0% 0%;
    --primary-foreground: 0 0% 100%;
    --secondary: 0 0% 96%;
    --secondary-foreground: 0 0% 0%;
    --muted: 0 0% 96%;
    --muted-foreground: 0 0% 45%;
    --accent: 0 84% 60%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border: 0 0% 90%;
    --input: 0 0% 96%;
    --ring: 0 84% 60%;
    --radius: 0rem;
  }

  .dark {
    --background: 0 0% 0%;
    --foreground: 0 0% 100%;
    --card: 0 0% 0%;
    --card-foreground: 0 0% 100%;
    --popover: 0 0% 0%;
    --popover-foreground: 0 0% 100%;
    --primary: 0 0% 100%;
    --primary-foreground: 0 0% 0%;
    --secondary: 0 0% 10%;
    --secondary-foreground: 0 0% 100%;
    --muted: 0 0% 10%;
    --muted-foreground: 0 0% 65%;
    --accent: 0 84% 60%;
    --accent-foreground: 0 0% 0%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 0%;
    --border: 0 0% 20%;
    --input: 0 0% 10%;
    --ring: 0 84% 60%;
  }
}`;

const customThemeCode = `/* Blue Theme */
:root {
  --accent: 221 83% 53%;
  --accent-foreground: 0 0% 98%;
  --ring: 221 83% 53%;
}

/* Green Theme */
:root {
  --accent: 142 76% 36%;
  --accent-foreground: 0 0% 98%;
  --ring: 142 76% 36%;
}

/* Purple Theme */
:root {
  --accent: 263 70% 50%;
  --accent-foreground: 0 0% 98%;
  --ring: 263 70% 50%;
}

/* Orange Theme */
:root {
  --accent: 24 95% 53%;
  --accent-foreground: 0 0% 98%;
  --ring: 24 95% 53%;
}`;

interface ThemeCardProps {
  name: string;
  color: string;
  isActive?: boolean;
}

function ThemeCard({ name, color, isActive = false }: ThemeCardProps) {
  return (
    <div className="space-y-4">
      <div className="relative group">
        <div 
          className={`w-full h-24 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
            isActive ? 'border-foreground' : 'border-border hover:border-foreground/50'
          }`}
          style={{ backgroundColor: color }}
        />
        {isActive && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-background rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-foreground rounded-full" />
            </div>
          </div>
        )}
      </div>
      <div className="text-center">
        <h3 className="font-medium text-sm">{name}</h3>
        <p className="text-xs text-muted-foreground font-mono">{color}</p>
      </div>
    </div>
  );
}

export default function ThemesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-8 lg:px-8 lg:py-12">
      <div className="space-y-12">
      {/* Page Header */}
      <div className="space-y-4 border-b border-border pb-8">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-12 bg-accent rounded-full" />
          <h1 className="text-5xl font-bold tracking-tight">Themes</h1>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Customize your components with clean, minimal themes inspired by Nothing OS design philosophy.
        </p>
      </div>

      {/* Theme Preview */}
      <ComponentPreview
        title="Default Theme Preview"
        description="See how components look with the Nothing OS theme."
        preview={
          <div className="space-y-4 w-full">
            <div className="flex flex-wrap items-center gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>
        }
        code={`import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ThemePreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div className="flex items-center gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
    </div>
  )
}`}
      />

      {/* Accent Colors */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight">Accent Colors</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            Choose from different accent colors while keeping the monochrome base.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <ThemeCard name="Red" color="#F43F5E" isActive />
          <ThemeCard name="Blue" color="#3B82F6" />
          <ThemeCard name="Green" color="#10B981" />
          <ThemeCard name="Purple" color="#8B5CF6" />
          <ThemeCard name="Orange" color="#F97316" />
          <ThemeCard name="Yellow" color="#EAB308" />
        </div>
      </div>

      {/* Accent Colors Code */}
      <ComponentCode
        title="Accent Color Variations"
        description="Override just the accent color to create different theme variations."
        code={customThemeCode}
      />

      {/* Base Theme Code */}
      <ComponentCode
        title="Base Theme"
        description="Copy this base theme configuration into your globals.css file."
        code={themeCode}
      />

      {/* Usage Guide */}
      <div className="space-y-6 border-t border-border pt-8">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight">How to Use</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            Get started with NothingCN themes in three simple steps.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
              1
            </div>
            <h3 className="text-xl font-bold">Copy Base Theme</h3>
            <p className="text-muted-foreground">
              Add the base theme CSS variables to your globals.css file.
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
              2
            </div>
            <h3 className="text-xl font-bold">Choose Accent</h3>
            <p className="text-muted-foreground">
              Pick an accent color or create your own custom color scheme.
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
              3
            </div>
            <h3 className="text-xl font-bold">Done</h3>
            <p className="text-muted-foreground">
              All components automatically adapt to your chosen theme.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
