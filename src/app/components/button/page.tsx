"use client";

import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/component-preview";
import { StandardComponentLayout } from "@/components/standard-component-layout";
import { 
  basicUsageCode,
  buttonVariantsCode,
  buttonSizesCode,
  buttonStatesCode,
  nothingButtonCode,
  pixelButtonCode 
} from "./examples";
import { buttonSourceCode } from "./source";

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
      componentSourceCode={buttonSourceCode}
    >
      {/* Basic Usage - Override the default one */}
      <div id="basic-usage">
        <ComponentPreview
          title="Basic Usage"
          description="Basic example of the Button component."
          preview={
            <div className="w-full max-w-sm sm:max-w-md">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="nothing">Nothing</Button>
                <Button variant="pixel"><span className="font-ndot">Pixel</span></Button>
              </div>
            </div>
          }
          code={basicUsageCode}
        />
      </div>
      {/* Variants Section */}
      <div id="variants">
        <ComponentPreview
          title="Variants"
          description="The button component includes multiple variants for different use cases."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Button>Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="nothing">Nothing</Button>
                <Button variant="pixel"><span className="font-ndot">Pixel</span></Button>
              </div>
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
            <div className="w-full max-w-sm sm:max-w-md">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
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
            <div className="w-full max-w-sm sm:max-w-md">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Button disabled aria-label="Disabled default button">Disabled</Button>
                <Button variant="outline" disabled aria-label="Disabled outline button">
                  Disabled Outline
                </Button>
                <Button variant="destructive" disabled aria-label="Disabled destructive button">
                  Disabled Destructive
                </Button>
              </div>
            </div>
          }
          code={buttonStatesCode}
        />
      </div>

      {/* Nothing Theme Section */}
      <div id="nothing-theme">
        <ComponentPreview
          title="Nothing Theme"
          description="Authentic Nothing OS pill buttons with dot matrix typography, pixelated rendering, and signature red accent colors. Features the classic inactive/active states."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-muted/20 rounded-lg">
                <Button variant="nothing" size="sm">CLOSE</Button>
                <Button variant="nothing" className="bg-accent text-accent-foreground border-accent">ACTIVATE</Button>
                <Button variant="nothing" size="lg">SETTINGS</Button>
                <Button variant="nothing" disabled aria-label="Disabled nothing button">DISABLED</Button>
              </div>
            </div>
          }
          code={nothingButtonCode}
        />
      </div>

      {/* Pixel Theme Section */}
      <div id="pixel-theme">
        <ComponentPreview
          title="Pixel Theme"
          description="Retro gaming style buttons with pixel-perfect shadows and animations."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-muted/20 rounded-lg">
                <Button variant="pixel" size="sm" className="min-h-[48px]"><span className="font-ndot">POWER ON</span></Button>
                <Button variant="pixel" className="min-h-[48px]"><span className="font-ndot">START GAME</span></Button>
                <Button variant="pixel" size="lg" className="min-h-[48px]"><span className="font-ndot">CONTINUE</span></Button>
                <Button variant="pixel" disabled aria-label="Locked pixel button" className="min-h-[48px]"><span className="font-ndot">LOCKED</span></Button>
              </div>
            </div>
          }
          code={pixelButtonCode}
        />
      </div>
    </StandardComponentLayout>
  );
}