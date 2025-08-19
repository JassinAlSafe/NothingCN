"use client";

import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/component-preview";
import { StandardComponentLayout } from "@/components/standard-component-layout";
import { 
  basicUsageCode,
  buttonVariantsCode,
  buttonSizesCode,
  buttonStatesCode,
  pixelButtonCode 
} from "./examples";
import { buttonSourceCode } from "./source";

const sections = [
  { id: "installation", title: "Installation" },
  { id: "usage", title: "Usage" },
  { id: "basic-usage", title: "Basic Usage" },
  { id: "variants", title: "Variants" },
  { id: "sizes", title: "Sizes" },
  { id: "states", title: "States" },
  { id: "pixel-theme", title: "Pixel Theme" },
  { id: "component-source", title: "Component Source" },
];

export default function ButtonPage() {
  return (
    <StandardComponentLayout
      componentName="Button"
      componentPath="/components/button"
      description="Displays a button or a component that looks like a button. Perfect for actions, forms, and navigation. Built with Radix UI Slot and includes multiple variants and states."
      badges={[
        { text: "✓ Radix UI", variant: "secondary", className: "bg-green-500/10 text-green-600 border-green-500/20" },
        { text: "✓ Accessible", variant: "secondary", className: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
        { text: "✓ Customizable", variant: "secondary", className: "bg-purple-500/10 text-purple-600 border-purple-500/20" }
      ]}
      customSections={sections}
      dependencies={["@radix-ui/react-slot", "class-variance-authority", "clsx", "tailwind-merge"]}
      cliCommand="npx nothingcn@latest add button"
      basicUsageCode={basicUsageCode}
      componentSourceCode={buttonSourceCode}
    >
      {/* Variants Section */}
      <div id="variants">
        <ComponentPreview
          title="Variants"
          description="The button component includes multiple variants for different use cases."
          preview={
            <div className="flex flex-wrap items-center gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="pixel"><span className="font-ndot">Pixel</span></Button>
            </div>
          }
          code={buttonVariantsCode}
        />
      </div>

      {/* Sizes Section */}
      <div id="sizes">
        <ComponentPreview
          title="Sizes"
          description="Button component supports different sizes for various contexts."
          preview={
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          }
          code={buttonSizesCode}
        />
      </div>

      {/* States Section */}
      <div id="states">
        <ComponentPreview
          title="States"
          description="Button component supports disabled state and loading states."
          preview={
            <div className="flex flex-wrap items-center gap-4">
              <Button disabled>Disabled</Button>
              <Button variant="outline" disabled>
                Disabled Outline
              </Button>
            </div>
          }
          code={buttonStatesCode}
        />
      </div>

      {/* Pixel Theme Section */}
      <div id="pixel-theme">
        <ComponentPreview
          title="Pixel Theme"
          description="Retro gaming style buttons with pixel-perfect shadows and animations."
          preview={
            <div className="flex flex-wrap items-center gap-6">
              <Button variant="pixel" size="sm"><span className="font-ndot">POWER ON</span></Button>
              <Button variant="pixel"><span className="font-ndot">START GAME</span></Button>
              <Button variant="pixel" size="lg"><span className="font-ndot">CONTINUE</span></Button>
              <Button variant="pixel" disabled><span className="font-ndot">LOCKED</span></Button>
            </div>
          }
          code={pixelButtonCode}
        />
      </div>
    </StandardComponentLayout>
  );
}