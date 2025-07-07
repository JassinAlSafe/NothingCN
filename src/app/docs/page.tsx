import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { Badge } from "@/components/ui/badge";

const installationCode = `# Install dependencies
npm install @radix-ui/react-slot
npm install @radix-ui/react-tabs
npm install @radix-ui/react-icons
npm install class-variance-authority
npm install clsx
npm install tailwind-merge
npm install lucide-react
npm install prism-react-renderer`;

const usageCode = `import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function MyComponent() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>My Component</CardTitle>
        <CardDescription>
          This is a simple example using our components.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <Button>Click me</Button>
          <Badge>New</Badge>
        </div>
      </CardContent>
    </Card>
  )
}`;

const customizationCode = `// You can customize components by extending the variants
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const MyCustomButton = ({ className, variant, size, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

// Or create new variants
const customButtonVariants = cva(
  "base-button-styles",
  {
    variants: {
      variant: {
        ...buttonVariants.variants.variant,
        gradient: "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
      },
    },
  }
)`;

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-8 lg:px-8 lg:py-12">
      <div className="space-y-12">
        {/* Page Header */}
        <div className="space-y-4 border-b border-border pb-8">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-12 bg-accent rounded-full" />
            <h1 className="text-5xl font-bold tracking-tight">Documentation</h1>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Learn how to use and customize our components.
          </p>
        </div>

        <div className="space-y-8">
        {/* Introduction */}
        <Card>
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
            <CardDescription>
              Welcome to our component library documentation.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              This component library provides beautifully designed, accessible
              components built with Radix UI primitives and styled with Tailwind
              CSS. All components are fully customizable and follow modern React
              patterns.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Radix UI</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">Accessible</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Installation */}
        <Card>
          <CardHeader>
            <CardTitle>Installation</CardTitle>
            <CardDescription>
              Get started by installing the required dependencies.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Install the necessary dependencies for the components you want to
              use:
            </p>
            <CodeBlock
              code={installationCode}
              language="bash"
              title="Terminal"
            />
            <p>
              Then copy the component files into your project and update your
              import paths.
            </p>
          </CardContent>
        </Card>

        {/* Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>
              How to use the components in your project.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Import and use the components in your React application:</p>
            <CodeBlock
              code={usageCode}
              language="tsx"
              title="MyComponent.tsx"
            />
          </CardContent>
        </Card>

        {/* Customization */}
        <Card>
          <CardHeader>
            <CardTitle>Customization</CardTitle>
            <CardDescription>
              How to customize and extend the components.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              All components are built with class-variance-authority and can be
              easily customized:
            </p>
            <CodeBlock
              code={customizationCode}
              language="tsx"
              title="CustomButton.tsx"
            />
            <p>
              You can also override the default styles by passing custom
              className props or modifying the component variants directly.
            </p>
          </CardContent>
        </Card>

        {/* Theming */}
        <Card>
          <CardHeader>
            <CardTitle>Theming</CardTitle>
            <CardDescription>
              How to customize the color scheme and theme.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The components use CSS variables for theming. You can customize
              the colors by modifying the CSS variables in your global CSS file.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium">Example theme variables:</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>--background: 0 0% 100%</div>
                <div>--foreground: 240 10% 3.9%</div>
                <div>--primary: 240 5.9% 10%</div>
                <div>--secondary: 240 4.8% 95.9%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accessibility */}
        <Card>
          <CardHeader>
            <CardTitle>Accessibility</CardTitle>
            <CardDescription>
              Our commitment to accessible design.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>All components are built with accessibility in mind:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Proper ARIA attributes and roles</li>
              <li>Keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>Focus management</li>
              <li>Color contrast compliance</li>
            </ul>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
}
