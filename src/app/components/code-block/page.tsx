"use client";

import { CodeBlock } from "@/components/ui/code-block";
import { ComponentPreview } from "@/components/component-preview";

const codeBlockCode = `import { CodeBlock } from "@/components/ui/code-block"

export function CodeBlockExample() {
  return (
    <CodeBlock
      code={\`function hello() {
  console.log("Hello, World!");
}\`}
      language="javascript"
      title="example.js"
    />
  )
}`;

const codeBlockWithoutTitleCode = `import { CodeBlock } from "@/components/ui/code-block"

export function CodeBlockWithoutTitleExample() {
  return (
    <CodeBlock
      code={\`const greeting = "Hello, NothingCN!";
console.log(greeting);\`}
      language="typescript"
    />
  )
}`;

const codeBlockMultilineCode = `import { CodeBlock } from "@/components/ui/code-block"

export function CodeBlockMultilineExample() {
  return (
    <CodeBlock
      code={\`import React from 'react';
import { Button } from '@/components/ui/button';

export function MyComponent() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="space-y-4">
      <h1>Welcome to NothingCN</h1>
      <Button onClick={handleClick}>
        Click me
      </Button>
    </div>
  );
}\`}
      language="tsx"
      title="MyComponent.tsx"
      showLineNumbers
    />
  )
}`;

export default function CodeBlockPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2 font-ndot">Code Block</h1>
        <p className="text-xl text-muted-foreground">
          Displays syntax-highlighted code with copy functionality.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A simple code block with syntax highlighting."
        preview={
          <div className="w-full max-w-2xl">
            <CodeBlock
              code={`function hello() {
  console.log("Hello, World!");
}`}
              language="javascript"
              title="example.js"
            />
          </div>
        }
        code={codeBlockCode}
      />

      <ComponentPreview
        title="Without Title"
        description="A code block without a title bar."
        preview={
          <div className="w-full max-w-2xl">
            <CodeBlock
              code={`const greeting = "Hello, NothingCN!";
console.log(greeting);`}
              language="typescript"
            />
          </div>
        }
        code={codeBlockWithoutTitleCode}
      />

      <ComponentPreview
        title="With Line Numbers"
        description="A code block with line numbers enabled."
        preview={
          <div className="w-full max-w-2xl">
            <CodeBlock
              code={`import React from 'react';
import { Button } from '@/components/ui/button';

export function MyComponent() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="space-y-4">
      <h1>Welcome to NothingCN</h1>
      <Button onClick={handleClick}>
        Click me
      </Button>
    </div>
  );
}`}
              language="tsx"
              title="MyComponent.tsx"
              showLineNumbers
            />
          </div>
        }
        code={codeBlockMultilineCode}
      />

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight font-ndot">Installation</h2>
        <ComponentPreview
          title=""
          description=""
          preview={<div />}
          code={`npx shadcn-ui@latest add code-block`}
          hidePreview
        />
      </div>
    </div>
  );
}