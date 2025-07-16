import { ComponentCode } from "@/components/component-code";
import { Badge } from "@/components/ui/badge";

export default function InstallationPage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-12 bg-accent rounded-full" />
          <h1 className="text-5xl font-bold tracking-tight font-ndot">Installation</h1>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Get started with NothingCN components. This is not a traditional npm package - you copy and paste the 
          components directly into your project. This gives you full control and ownership of your code.
        </p>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 border-amber-500/20">
            ⚠️ Important
          </Badge>
          <span className="text-sm text-muted-foreground">
            Some components use semantic color tokens that require configuration
          </span>
        </div>
      </div>

      {/* What You'll Need */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight font-ndot">What You&apos;ll Need</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            Before diving into NothingCN components, ensure your project has these foundational elements.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-border">
            <div className="w-8 h-8 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center">
              ⚛️
            </div>
            <div>
              <h3 className="font-semibold font-ndot">React 18+</h3>
              <p className="text-sm text-muted-foreground">Modern React with hooks support</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-border">
            <div className="w-8 h-8 bg-black/10 text-black dark:bg-white/10 dark:text-white rounded-full flex items-center justify-center">
              ▲
            </div>
            <div>
              <h3 className="font-semibold font-ndot">Next.js 13+</h3>
              <p className="text-sm text-muted-foreground">App Router recommended</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-border">
            <div className="w-8 h-8 bg-cyan-500/10 text-cyan-500 rounded-full flex items-center justify-center">
              🎨
            </div>
            <div>
              <h3 className="font-semibold font-ndot">Tailwind CSS</h3>
              <p className="text-sm text-muted-foreground">For styling and customization</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-border">
            <div className="w-8 h-8 bg-blue-600/10 text-blue-600 rounded-full flex items-center justify-center">
              📘
            </div>
            <div>
              <h3 className="font-semibold font-ndot">TypeScript</h3>
              <p className="text-sm text-muted-foreground">Recommended for best experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            NothingCN is a copy-paste component library. Unlike traditional libraries, there&apos;s no npm package to install. 
            Instead, you copy the component source code directly into your project.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-3 p-6 rounded-2xl border-2 border-border">
            <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
              1
            </div>
            <h3 className="text-xl font-bold">Browse Components</h3>
            <p className="text-muted-foreground">
              Explore our component library and find the perfect component for your project.
            </p>
          </div>
          
          <div className="space-y-3 p-6 rounded-2xl border-2 border-border">
            <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
              2
            </div>
            <h3 className="text-xl font-bold">Copy Code</h3>
            <p className="text-muted-foreground">
              Copy the component code from the documentation and paste it into your project.
            </p>
          </div>
          
          <div className="space-y-3 p-6 rounded-2xl border-2 border-border">
            <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
              3
            </div>
            <h3 className="text-xl font-bold">Customize</h3>
            <p className="text-muted-foreground">
              Modify the code to fit your needs. It&apos;s your code now!
            </p>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight">Prerequisites</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            Before using NothingCN components, make sure you have the following set up in your project.
          </p>
        </div>

        <ComponentCode
          title="Next.js with Tailwind CSS"
          description="NothingCN components are built for Next.js projects with Tailwind CSS."
          code={`# Create a new Next.js project
npx create-next-app@latest my-app --typescript --tailwind --eslint --app

# Navigate to your project
cd my-app

# Install additional dependencies
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react`}
          previewLines={8}
        />
      </div>

      {/* Setup Utils */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight">Setup Utils</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            Create a utility file for className merging. This is used by all NothingCN components.
          </p>
        </div>

        <ComponentCode
          title="lib/utils.ts"
          description="Create this file in your project's lib directory."
          code={`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string | number) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric", 
    year: "numeric",
  }).format(new Date(date))
}

export function absoluteUrl(path: string) {
  return \`\${process.env.NEXT_PUBLIC_APP_URL || ""}\${path}\`
}`}
          previewLines={6}
        />
      </div>

      {/* Configure Tailwind */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight">Configure Tailwind CSS</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            Add the NothingCN color scheme and configuration to your Tailwind CSS config.
          </p>
        </div>

        <ComponentCode
          title="tailwind.config.js"
          description="Update your Tailwind config with NothingCN's design tokens."
          code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`}
          previewLines={15}
        />
      </div>

      {/* Add CSS Variables */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight">Add CSS Variables</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            Add the NothingCN CSS variables to your global CSS file.
          </p>
        </div>

        <ComponentCode
          title="app/globals.css"
          description="Add these CSS variables to your global stylesheet."
          code={`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
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
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}`}
          previewLines={12}
        />
      </div>

      {/* Troubleshooting */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight font-ndot">Troubleshooting</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            Common issues and their solutions when setting up NothingCN components.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1">
          <div className="p-6 rounded-2xl border-2 border-yellow-500/20 bg-yellow-500/5">
            <h3 className="text-lg font-bold text-yellow-600 font-ndot mb-3">Components not styling correctly</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Make sure you&apos;ve added the CSS variables and configured Tailwind CSS correctly.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 font-ndot">
              <li>• Check that globals.css includes the CSS variables</li>
              <li>• Verify tailwind.config.js has the extended color scheme</li>
              <li>• Ensure the utils.ts file is created with the cn() function</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl border-2 border-red-500/20 bg-red-500/5">
            <h3 className="text-lg font-bold text-red-600 font-ndot mb-3">TypeScript errors</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Missing type definitions or import errors are common with copy-paste components.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 font-ndot">
              <li>• Install required dependencies: @radix-ui/react-slot, lucide-react</li>
              <li>• Check that utils.ts exports the cn() function</li>
              <li>• Verify component imports match your file structure</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl border-2 border-blue-500/20 bg-blue-500/5">
            <h3 className="text-lg font-bold text-blue-600 font-ndot mb-3">Component not found errors</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Import path issues are common when copying components between projects.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 font-ndot">
              <li>• Update import paths to match your project structure</li>
              <li>• Check that base components (Button, Card, etc.) are available</li>
              <li>• Verify @/components/ui/ path alias is configured</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Start Using */}
      <div className="space-y-6 border-t border-border pt-12">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight font-ndot">Start Using Components</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            You&apos;re all set! Start browsing components and copy the code into your project.
          </p>
        </div>

        <div className="p-8 rounded-2xl border-2 border-accent/20 bg-accent/5">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground text-sm font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold font-ndot">You&apos;re ready to go!</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed font-ndot">
              Browse the component library, copy the code, and start building beautiful interfaces with NothingCN.
            </p>
            <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground font-ndot mt-6">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-accent rounded-full" />
                Copy & Paste Ready
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                Full Code Ownership
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                No Dependencies
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}