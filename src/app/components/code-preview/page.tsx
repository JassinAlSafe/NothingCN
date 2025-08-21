"use client";

import { CodePreview } from "@/components/ui/code-preview";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentCode } from "@/components/component-code";
import { InstallationTabs } from "@/components/installation-tabs";
import { StandardComponentLayout } from "@/components/standard-component-layout";
import { 
  basicUsageCode,
  withTabVariantsCode,
  withLineNumbersCode,
  minimalStyleCode,
  customPreviewClassCode,
  differentLanguagesCode,
  withoutCardWrapperCode,
  defaultTabCode
} from "./examples";
import { codePreviewSourceCode } from "./source";

export default function CodePreviewPage() {
  return (
    <StandardComponentLayout
      componentName="CodePreview"
      componentPath="/components/code-preview"
      description="A component for displaying live code previews alongside syntax-highlighted code. Perfect for documentation, examples, and interactive demos."
      badges={[
        { text: "✓ Interactive", variant: "secondary", className: "bg-green-500/10 text-green-600 border-green-500/20" },
        { text: "✓ Syntax Highlighted", variant: "secondary", className: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
        { text: "✓ Customizable", variant: "secondary", className: "bg-purple-500/10 text-purple-600 border-purple-500/20" }
      ]}
    >
      {/* Installation Section */}
      <InstallationTabs
        cliCommand="npx nothingcn@latest add code-preview"
        manualSteps={[
          {
            title: "Install dependencies",
            description: "Install required dependencies for the code preview component.",
            code: "npm install prism-react-renderer @radix-ui/react-tabs",
          },
          {
            title: "Copy and paste the component source",
            description: "Create a new file at src/components/ui/code-preview.tsx and paste the component code.",
            code: codePreviewSourceCode,
          },
          {
            title: "Import and use",
            description: "Import the component and use it in your project.",
            code: `import { CodePreview } from "@/components/ui/code-preview";

export function Example() {
  return (
    <CodePreview
      title="Button Example"
      code={\`<Button>Click me</Button>\`}
      language="tsx"
    >
      <Button>Click me</Button>
    </CodePreview>
  );
}`,
          },
        ]}
      />

      {/* Usage Section */}
      <div id="usage" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight font-ndot">Usage</h2>
        <div className="space-y-2">
          <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`import { CodePreview } from "@/components/ui/code-preview";`}</code>
          </pre>
        </div>
      </div>
      {/* Basic Usage */}
      <div id="basic-usage">
        <ComponentPreview
          title="Basic Usage"
          description="Simple code preview with live component and source code."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl">
              <CodePreview
                title="Button Example"
                description="A simple button component demonstration"
                preview={<Button>Click me</Button>}
                code={`<Button>Click me</Button>`}
                language="tsx"
              />
            </div>
          }
          code={basicUsageCode}
        />
      </div>

      {/* Tab Variants */}
      <div id="tab-variants">
        <ComponentPreview
          title="Tab Variants"
          description="Different tab styles for preview and code sections."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl space-y-8">
              <CodePreview
                title="Default Tabs"
                tabsVariant="default"
                preview={
                  <Card className="p-4">
                    <p>Default tab style</p>
                  </Card>
                }
                code={`<Card className="p-4">
  <p>Default tab style</p>
</Card>`}
                language="tsx"
              />

              <CodePreview
                title="Underline Tabs"
                tabsVariant="underline"
                preview={
                  <Card className="p-4">
                    <p>Underline tab style</p>
                  </Card>
                }
                code={`<Card className="p-4">
  <p>Underline tab style</p>
</Card>`}
                language="tsx"
              />

              <CodePreview
                title="Nothing Tabs"
                tabsVariant="nothing"
                preview={
                  <Card className="p-4">
                    <p>Nothing OS tab style</p>
                  </Card>
                }
                code={`<Card className="p-4">
  <p>Nothing OS tab style</p>
</Card>`}
                language="tsx"
              />
            </div>
          }
          code={withTabVariantsCode}
        />
      </div>

      {/* Line Numbers */}
      <div id="line-numbers">
        <ComponentPreview
          title="Line Numbers"
          description="Display code with line numbers for better reference."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl">
              <CodePreview
                title="With Line Numbers"
                description="Code display with line numbers enabled"
                showLineNumbers={true}
                preview={
                  <Card className="p-6">
                    <p className="font-mono">Hello, Developer!</p>
                    <p className="text-sm text-muted-foreground mt-2">Welcome to NothingCN</p>
                  </Card>
                }
                code={`function greet(name: string) {
  console.log(\`Hello, \${name}!\`);
  return \`Welcome to NothingCN\`;
}

const result = greet("Developer");
console.log(result);`}
                language="typescript"
              />
            </div>
          }
          code={withLineNumbersCode}
        />
      </div>

      {/* Minimal Style */}
      <div id="minimal-style">
        <ComponentPreview
          title="Minimal Style"
          description="Clean, minimal appearance without extra decorations."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl">
              <CodePreview
                minimal={true}
                preview={<Badge>New Feature</Badge>}
                code={`<Badge>New Feature</Badge>`}
                language="tsx"
              />
            </div>
          }
          code={minimalStyleCode}
        />
      </div>

      {/* Custom Preview Class */}
      <div id="custom-preview">
        <ComponentPreview
          title="Custom Preview Styling"
          description="Apply custom classes to the preview container."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl">
              <CodePreview
                title="Custom Background"
                description="Preview with gradient background"
                previewClassName="bg-gradient-to-br from-purple-500/10 to-pink-500/10 min-h-[200px] flex items-center justify-center"
                preview={
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Gradient Background</h3>
                    <p className="text-muted-foreground">Custom preview styling</p>
                  </div>
                }
                code={`<div className="text-center">
  <h3 className="text-2xl font-bold mb-2">Gradient Background</h3>
  <p className="text-muted-foreground">Custom preview styling</p>
</div>`}
                language="tsx"
              />
            </div>
          }
          code={customPreviewClassCode}
        />
      </div>

      {/* Different Languages */}
      <div id="languages">
        <ComponentPreview
          title="Different Languages"
          description="Support for various programming languages."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl space-y-8">
              <CodePreview
                title="JavaScript"
                preview={
                  <Card className="p-4">
                    <p className="font-mono text-sm">APPLE</p>
                    <p className="font-mono text-sm">BANANA</p>
                    <p className="font-mono text-sm">ORANGE</p>
                  </Card>
                }
                code={`const items = ['apple', 'banana', 'orange'];
items.forEach(item => {
  console.log(item.toUpperCase());
});`}
                language="javascript"
                showLineNumbers={true}
              />

              <CodePreview
                title="CSS"
                preview={
                  <button className="bg-gradient-to-br from-purple-500 to-purple-700 px-6 py-3 rounded-lg text-white font-semibold">
                    Styled Button
                  </button>
                }
                code={`.button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  font-weight: 600;
}`}
                language="css"
                showLineNumbers={true}
              />
            </div>
          }
          code={differentLanguagesCode}
        />
      </div>

      {/* Without Card Wrapper */}
      <div id="without-card">
        <ComponentPreview
          title="Without Card Wrapper"
          description="Display preview without the default card container."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl">
              <CodePreview
                title="No Card Wrapper"
                description="Clean display without container"
                useCard={false}
                preview={
                  <div className="flex gap-2">
                    <Input placeholder="Enter text..." />
                    <Button>Submit</Button>
                  </div>
                }
                code={`<div className="flex gap-2">
  <Input placeholder="Enter text..." />
  <Button>Submit</Button>
</div>`}
                language="tsx"
              />
            </div>
          }
          code={withoutCardWrapperCode}
        />
      </div>

      {/* Default Tab */}
      <div id="default-tab">
        <ComponentPreview
          title="Default Tab Selection"
          description="Set which tab is selected by default."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl">
              <CodePreview
                title="Code Tab Default"
                description="Opens with code tab selected"
                defaultTab="code"
                preview={
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm">
                      Toggle
                    </Button>
                    <label>Enable notifications</label>
                  </div>
                }
                code={`<div className="flex items-center gap-4">
  <Button variant="outline" size="sm">
    Toggle
  </Button>
  <label>Enable notifications</label>
</div>`}
                language="tsx"
              />
            </div>
          }
          code={defaultTabCode}
        />
      </div>

      {/* Component Source */}
      <div id="component-source">
        <ComponentCode
          title="Component Source"
          description="Copy and paste the following code into your project."
          code={codePreviewSourceCode}
        />
      </div>
    </StandardComponentLayout>
  );
}