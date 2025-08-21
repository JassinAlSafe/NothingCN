"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentCode } from "@/components/component-code";
import { InstallationTabs } from "@/components/installation-tabs";
import { StandardComponentLayout } from "@/components/standard-component-layout";
import { 
  basicUsageCode,
  multipleAccordionCode,
  nothingVariantCode,
  pixelVariantCode,
  variantsCode,
  controlledAccordionCode
} from "./examples";
import { accordionSourceCode } from "./source";

export default function AccordionPage() {
  return (
    <StandardComponentLayout
      componentName="Accordion"
      componentPath="/components/accordion"
      description="A vertically stacked set of interactive headings that each reveal a section of content. Perfect for FAQs, settings panels, and organizing information."
      badges={[
        { text: "✓ Accessible", variant: "secondary", className: "bg-green-500/10 text-green-600 border-green-500/20" },
        { text: "✓ Animated", variant: "secondary", className: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
        { text: "✓ Customizable", variant: "secondary", className: "bg-purple-500/10 text-purple-600 border-purple-500/20" }
      ]}
    >
      {/* Installation Section */}
      <InstallationTabs
        cliCommand="npx nothingcn@latest add accordion"
        manualSteps={[
          {
            title: "Install dependencies",
            description: "Install required dependencies for the accordion component.",
            code: "npm install class-variance-authority lucide-react",
          },
          {
            title: "Copy and paste the component source",
            description: "Create a new file at src/components/ui/accordion.tsx and paste the component code.",
            code: accordionSourceCode,
          },
          {
            title: "Import and use",
            description: "Import the component and use it in your project.",
            code: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Example() {
  return (
    <Accordion type="single" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
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
            <code>{`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";`}</code>
          </pre>
        </div>
      </div>
      {/* Basic Usage - Override the default one */}
      <div id="basic-usage">
        <ComponentPreview
          title="Basic Usage"
          description="A simple accordion with single-item expansion and default styling."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl">
              <Accordion type="single" defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern and
                    supports full keyboard navigation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that match the Nothing
                    OS design system.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It has smooth animations and transitions for a
                    polished user experience.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          }
          code={basicUsageCode}
        />
      </div>

      {/* Multiple Items */}
      <div id="multiple-items">
        <ComponentPreview
          title="Multiple Items"
          description="Allow multiple accordion items to be open simultaneously."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl">
              <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Can multiple items be open?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. You can expand multiple items at once by setting
                    type=&quot;multiple&quot;.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How does it work?</AccordionTrigger>
                  <AccordionContent>
                    The accordion maintains an array of open items instead of
                    a single value.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Any limitations?</AccordionTrigger>
                  <AccordionContent>
                    No limitations. You can open as many items as you need.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          }
          code={multipleAccordionCode}
        />
      </div>

      {/* Nothing OS Variant */}
      <div id="nothing-variant">
        <ComponentPreview
          title="Nothing OS Variant"
          description="Premium Nothing OS design with corner dots, glowing effects, and Nothing typography."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl">
              <Accordion
                type="single"
                variant="nothing"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Nothing OS Design</AccordionTrigger>
                  <AccordionContent>
                    Features the signature Nothing OS aesthetic with corner
                    dots, subtle glow effects, and smooth animations that
                    create a premium, futuristic feel.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Enhanced Typography</AccordionTrigger>
                  <AccordionContent>
                    Uses the Nothing Dot font family for authentic branding
                    and includes animated status indicators that pulse when
                    sections are expanded.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Subtle Details</AccordionTrigger>
                  <AccordionContent>
                    Includes dot matrix background patterns, gradient
                    overlays, and carefully crafted shadows that enhance the
                    overall user experience.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          }
          code={nothingVariantCode}
        />
      </div>

      {/* Pixel Variant */}
      <div id="pixel-variant">
        <ComponentPreview
          title="Pixel Variant"
          description="Retro gaming style with sharp edges, bold shadows, and monospace typography."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl">
              <Accordion type="single" variant="pixel" defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>RETRO GAMING STYLE</AccordionTrigger>
                  <AccordionContent>
                    Sharp, pixelated design with bold shadows and monospace
                    typography that recreates classic gaming interfaces.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>PIXEL PERFECT SHADOWS</AccordionTrigger>
                  <AccordionContent>
                    Features distinctive 4px shadow effects and uppercase text
                    styling for an authentic retro gaming aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>CLASSIC VIBES</AccordionTrigger>
                  <AccordionContent>
                    Perfect for gaming applications, retro-themed sites, or
                    any project that wants to evoke nostalgia for classic
                    computing.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          }
          code={pixelVariantCode}
        />
      </div>

      {/* Style Variants */}
      <div id="style-variants">
        <ComponentPreview
          title="Style Variants"
          description="Compare different visual styles: default, bordered, and minimal."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl space-y-8">
              <div className="space-y-4">
                <h4 className="font-semibold font-ndot">Default</h4>
                <Accordion type="single">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Default styling</AccordionTrigger>
                    <AccordionContent>
                      Clean, modern design with subtle shadows.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold font-ndot">Bordered</h4>
                <Accordion type="single" variant="bordered">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Bordered variant</AccordionTrigger>
                    <AccordionContent>
                      More contained appearance with defined borders.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold font-ndot">Minimal</h4>
                <Accordion type="single" variant="minimal">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Minimal design</AccordionTrigger>
                    <AccordionContent>
                      Simple, clean appearance with minimal visual elements.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          }
          code={variantsCode}
        />
      </div>

      {/* Controlled State */}
      <div id="controlled-state">
        <ComponentPreview
          title="Controlled State"
          description="Programmatically control which accordion items are open."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl space-y-4">
              <div className="text-sm text-muted-foreground font-ndot">
                Current value: <span className="font-mono">{"item-1"}</span>
              </div>
              <Accordion
                type="single"
                value="item-1"
                onValueChange={() => {}}
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Controlled item 1</AccordionTrigger>
                  <AccordionContent>
                    This accordion is controlled by React state. The current
                    value is displayed above.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Controlled item 2</AccordionTrigger>
                  <AccordionContent>
                    You can programmatically control which items are open or
                    closed.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          }
          code={controlledAccordionCode}
        />
      </div>

      {/* Component Source */}
      <div id="component-source">
        <ComponentCode
          title="Component Source"
          description="Copy and paste the following code into your project."
          code={accordionSourceCode}
        />
      </div>
    </StandardComponentLayout>
  );
}