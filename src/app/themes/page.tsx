import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui/code-block";

const themeCode = `:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 45.1%;
  --accent: 240 4.8% 95.9%;
  --accent-foreground: 240 5.9% 10%;
  --destructive: 0 72% 51%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 5.9% 90%;
  --input: 240 5.9% 90%;
  --ring: 240 5.9% 10%;
  --radius: 0.5rem;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --card: 240 10% 3.9%;
  --card-foreground: 0 0% 98%;
  --popover: 240 10% 3.9%;
  --popover-foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 240 5.9% 10%;
  --secondary: 240 3.7% 15.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 240 3.7% 15.9%;
  --muted-foreground: 240 5% 64.9%;
  --accent: 240 3.7% 15.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 63% 31%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 3.7% 15.9%;
  --input: 240 3.7% 15.9%;
  --ring: 240 4.9% 83.9%;
}`;

const customThemeCode = `/* Blue Theme */
:root {
  --primary: 221 83% 53%;
  --primary-foreground: 0 0% 98%;
  --secondary: 221 14% 93%;
  --secondary-foreground: 221 83% 20%;
  --accent: 221 14% 93%;
  --accent-foreground: 221 83% 20%;
}

/* Green Theme */
:root {
  --primary: 142 76% 36%;
  --primary-foreground: 0 0% 98%;
  --secondary: 142 76% 93%;
  --secondary-foreground: 142 76% 20%;
  --accent: 142 76% 93%;
  --accent-foreground: 142 76% 20%;
}

/* Purple Theme */
:root {
  --primary: 263 70% 50%;
  --primary-foreground: 0 0% 98%;
  --secondary: 263 70% 93%;
  --secondary-foreground: 263 70% 20%;
  --accent: 263 70% 93%;
  --accent-foreground: 263 70% 20%;
}`;

interface ThemePreviewProps {
  title: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
}

function ThemePreview({
  title,
  description,
  primaryColor,
  secondaryColor,
  backgroundColor,
}: ThemePreviewProps) {
  return (
    <div
      className="p-6 rounded-lg border space-y-4"
      style={{ backgroundColor }}
    >
      <div className="space-y-2">
        <h3 className="font-semibold text-lg" style={{ color: primaryColor }}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="flex items-center space-x-2">
        <button
          className="px-4 py-2 rounded-md text-sm font-medium text-white"
          style={{ backgroundColor: primaryColor }}
        >
          Primary Button
        </button>
        <button
          className="px-4 py-2 rounded-md text-sm font-medium border"
          style={{
            borderColor: primaryColor,
            color: primaryColor,
            backgroundColor: "transparent",
          }}
        >
          Secondary Button
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <span
          className="px-2 py-1 rounded-full text-xs font-semibold text-white"
          style={{ backgroundColor: primaryColor }}
        >
          Primary
        </span>
        <span
          className="px-2 py-1 rounded-full text-xs font-semibold"
          style={{
            backgroundColor: secondaryColor,
            color: primaryColor,
          }}
        >
          Secondary
        </span>
      </div>
    </div>
  );
}

export default function ThemesPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-bold text-4xl tracking-tight lg:text-5xl">
            Themes
          </h1>
          <p className="text-xl text-muted-foreground">
            Customize the look and feel of your components with different themes
            and color schemes.
          </p>
        </div>
      </div>

      <div className="pb-8 pt-6 md:pb-10 md:pt-8 space-y-8">
        {/* Default Theme */}
        <Card>
          <CardHeader>
            <CardTitle>Default Theme</CardTitle>
            <CardDescription>
              The default light and dark theme for the component library.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-medium">Light Mode</h4>
                <div className="p-6 rounded-lg border bg-background space-y-4">
                  <div className="flex items-center space-x-2">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Dark Mode</h4>
                <div className="p-6 rounded-lg border bg-gray-900 space-y-4">
                  <div className="flex items-center space-x-2">
                    <button className="px-4 py-2 rounded-md text-sm font-medium bg-white text-gray-900">
                      Primary
                    </button>
                    <button className="px-4 py-2 rounded-md text-sm font-medium bg-gray-800 text-white">
                      Secondary
                    </button>
                    <button className="px-4 py-2 rounded-md text-sm font-medium border border-gray-600 text-white bg-transparent">
                      Outline
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-white text-gray-900">
                      Default
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-800 text-white">
                      Secondary
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-semibold border border-gray-600 text-white">
                      Outline
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <CodeBlock code={themeCode} language="css" title="globals.css" />
          </CardContent>
        </Card>

        {/* Color Themes */}
        <Card>
          <CardHeader>
            <CardTitle>Color Themes</CardTitle>
            <CardDescription>
              Different color variations for your components.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ThemePreview
                title="Blue Theme"
                description="A professional blue color scheme"
                primaryColor="#3b82f6"
                secondaryColor="#dbeafe"
                backgroundColor="#f8fafc"
              />

              <ThemePreview
                title="Green Theme"
                description="A fresh green color scheme"
                primaryColor="#10b981"
                secondaryColor="#d1fae5"
                backgroundColor="#f0fdf4"
              />

              <ThemePreview
                title="Purple Theme"
                description="A vibrant purple color scheme"
                primaryColor="#8b5cf6"
                secondaryColor="#e9d5ff"
                backgroundColor="#faf5ff"
              />

              <ThemePreview
                title="Red Theme"
                description="A bold red color scheme"
                primaryColor="#ef4444"
                secondaryColor="#fecaca"
                backgroundColor="#fef2f2"
              />

              <ThemePreview
                title="Orange Theme"
                description="An energetic orange color scheme"
                primaryColor="#f97316"
                secondaryColor="#fed7aa"
                backgroundColor="#fff7ed"
              />

              <ThemePreview
                title="Indigo Theme"
                description="A deep indigo color scheme"
                primaryColor="#6366f1"
                secondaryColor="#c7d2fe"
                backgroundColor="#f1f5f9"
              />
            </div>

            <CodeBlock
              code={customThemeCode}
              language="css"
              title="custom-themes.css"
            />
          </CardContent>
        </Card>

        {/* Theme Usage */}
        <Card>
          <CardHeader>
            <CardTitle>How to Use Themes</CardTitle>
            <CardDescription>
              Learn how to implement and customize themes in your project.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">1. CSS Variables</h4>
                <p className="text-sm text-muted-foreground">
                  All themes use CSS custom properties (variables) for easy
                  customization. Simply override the variables in your CSS to
                  change the theme.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">2. Dark Mode</h4>
                <p className="text-sm text-muted-foreground">
                  Dark mode is automatically supported. Add the &quot;dark&quot;
                  class to your HTML element to enable dark mode styles.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">3. Custom Colors</h4>
                <p className="text-sm text-muted-foreground">
                  Create your own theme by defining new CSS variables. Use HSL
                  values for better color manipulation and consistency.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">4. Component Theming</h4>
                <p className="text-sm text-muted-foreground">
                  All components automatically inherit the theme colors. No
                  additional configuration is needed when you change themes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
