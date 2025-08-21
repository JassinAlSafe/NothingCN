export const basicUsageCode = `import { CodePreview } from "@/components/ui/code-preview";
import { Button } from "@/components/ui/button";

export function CodePreviewExample() {
  return (
    <CodePreview
      preview={
        <Button variant="nothing">
          Click me
        </Button>
      }
      code={\`<Button variant="nothing">
  Click me
</Button>\`}
      title="Button Example"
      description="A simple button component with Nothing OS styling."
    />
  );
}`;

export const withTabVariantsCode = `import { CodePreview } from "@/components/ui/code-preview";
import { Card } from "@/components/ui/card";

export function TabVariantsExample() {
  return (
    <div className="space-y-8">
      <CodePreview
        preview={
          <Card className="p-4">
            <p>Nothing variant tabs</p>
          </Card>
        }
        code={\`<Card className="p-4">
  <p>Nothing variant tabs</p>
</Card>\`}
        tabsVariant="nothing"
        title="Nothing Variant"
      />
      
      <CodePreview
        preview={
          <Card className="p-4">
            <p>Pixel variant tabs</p>
          </Card>
        }
        code={\`<Card className="p-4">
  <p>Pixel variant tabs</p>
</Card>\`}
        tabsVariant="pixel"
        title="Pixel Variant"
      />
    </div>
  );
}`;

export const withLineNumbersCode = `import { CodePreview } from "@/components/ui/code-preview";

export function LineNumbersExample() {
  const complexCode = \`function calculateSum(a: number, b: number): number {
  // Add two numbers together
  const result = a + b;
  
  // Log the result
  console.log(\\\`Sum of \\\${a} and \\\${b} is \\\${result}\\\`);
  
  return result;
}\`;

  return (
    <CodePreview
      preview={
        <div className="p-4 bg-muted rounded-lg">
          <code className="text-sm">calculateSum(5, 3) = 8</code>
        </div>
      }
      code={complexCode}
      showLineNumbers={true}
      title="With Line Numbers"
      description="Display code with line numbers for better readability."
    />
  );
}`;

export const minimalStyleCode = `import { CodePreview } from "@/components/ui/code-preview";
import { Badge } from "@/components/ui/badge";

export function MinimalStyleExample() {
  return (
    <CodePreview
      preview={
        <div className="flex gap-2">
          <Badge variant="nothing">New</Badge>
          <Badge variant="pixel">Featured</Badge>
          <Badge variant="default">Popular</Badge>
        </div>
      }
      code={\`<div className="flex gap-2">
  <Badge variant="nothing">New</Badge>
  <Badge variant="pixel">Featured</Badge>
  <Badge variant="default">Popular</Badge>
</div>\`}
      minimal={true}
      title="Minimal Styling"
      description="Use minimal styling for components with their own appearance."
    />
  );
}`;

export const customPreviewClassCode = `import { CodePreview } from "@/components/ui/code-preview";
import { Input } from "@/components/ui/input";

export function CustomPreviewExample() {
  return (
    <CodePreview
      preview={
        <div className="w-full max-w-sm">
          <Input 
            placeholder="Enter your email" 
            type="email"
            variant="nothing"
          />
        </div>
      }
      code={\`<Input 
  placeholder="Enter your email" 
  type="email"
  variant="nothing"
/>\`}
      previewClassName="bg-gradient-to-br from-accent/10 to-background"
      title="Custom Preview Background"
      description="Apply custom styling to the preview container."
    />
  );
}`;

export const differentLanguagesCode = `import { CodePreview } from "@/components/ui/code-preview";

export function LanguagesExample() {
  return (
    <div className="space-y-8">
      <CodePreview
        preview={
          <div className="text-accent font-mono">
            console.log("JavaScript")
          </div>
        }
        code={\`const greeting = "Hello, Nothing OS!";
console.log(greeting);\`}
        language="javascript"
        title="JavaScript Code"
      />
      
      <CodePreview
        preview={
          <div className="text-accent font-mono">
            print("Python")
          </div>
        }
        code={\`greeting = "Hello, Nothing OS!"
print(greeting)\`}
        language="python"
        title="Python Code"
      />
    </div>
  );
}`;

export const withoutCardWrapperCode = `import { CodePreview } from "@/components/ui/code-preview";
import { Progress } from "@/components/ui/progress";

export function NoCardWrapperExample() {
  return (
    <CodePreview
      preview={
        <div className="w-full max-w-md space-y-2">
          <Progress value={75} className="h-2" />
          <p className="text-sm text-muted-foreground">75% Complete</p>
        </div>
      }
      code={\`<div className="w-full max-w-md space-y-2">
  <Progress value={75} className="h-2" />
  <p className="text-sm text-muted-foreground">75% Complete</p>
</div>\`}
      useCard={false}
      title="Without Card Wrapper"
      description="Display preview without the card container."
    />
  );
}`;

export const defaultTabCode = `import { CodePreview } from "@/components/ui/code-preview";
import { Switch } from "@/components/ui/switch";

export function DefaultTabExample() {
  return (
    <CodePreview
      preview={
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <label htmlFor="airplane-mode" className="text-sm">
            Airplane Mode
          </label>
        </div>
      }
      code={\`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <label htmlFor="airplane-mode" className="text-sm">
    Airplane Mode
  </label>
</div>\`}
      defaultTab="code"
      title="Default to Code Tab"
      description="Start with the code tab open by default."
    />
  );
}`;