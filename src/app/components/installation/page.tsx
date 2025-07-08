import { ComponentPreview } from "@/components/component-preview";

export default function InstallationPage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="space-y-4 border-b border-border pb-8">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-12 bg-accent rounded-full" />
          <h1 className="text-5xl font-bold tracking-tight font-ndot">Installation</h1>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Get started with NothingCN components. Copy, paste, and customize to your heart&apos;s content.
          <br />
          <strong className="text-amber-600 dark:text-amber-400">⚠️ Important:</strong> Some components use semantic color tokens that may need configuration in your project.
        </p>
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

        <ComponentPreview
          title="Next.js with Tailwind CSS"
          description="NothingCN components are built for Next.js projects with Tailwind CSS."
          preview={<div />}
          code={`# Create a new Next.js project
npx create-next-app@latest my-app --typescript --tailwind --eslint --app

# Navigate to your project
cd my-app

# Install additional dependencies
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react`}
          hidePreview
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

        <ComponentPreview
          title="lib/utils.ts"
          description="Create this file in your project's lib directory."
          preview={<div />}
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
          hidePreview
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

        <ComponentPreview
          title="tailwind.config.js"
          description="Update your Tailwind config with NothingCN's design tokens."
          preview={<div />}
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
          hidePreview
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

        <ComponentPreview
          title="app/globals.css"
          description="Add these CSS variables to your global stylesheet."
          preview={<div />}
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
          hidePreview
        />
      </div>

      {/* Start Using */}
      <div className="space-y-6 border-t border-border pt-12">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight">Start Using Components</h2>
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
              <h3 className="text-xl font-bold">You&apos;re ready to go!</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Browse the component library, copy the code, and start building beautiful interfaces with NothingCN.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}