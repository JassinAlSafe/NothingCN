"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentCode } from "@/components/component-code";
import { ComponentLayout } from "@/components/component-layout";
import { InstallationTabs } from "@/components/installation-tabs";
import { getComponentNavigation } from "@/lib/component-navigation";

const sections = [
  { id: "installation", title: "Installation" },
  { id: "usage", title: "Usage" },
  { id: "basic-usage", title: "Basic Usage" },
  { id: "multiple-items", title: "Multiple Items" },
  { id: "nothing-variant", title: "Nothing Variant" },
  { id: "pixel-variant", title: "Pixel Variant" },
  { id: "style-variants", title: "Style Variants" },
  { id: "controlled-state", title: "Controlled State" },
  { id: "component-source", title: "Component Source" },
];

const { previous, next } = getComponentNavigation("/components/accordion");

const basicAccordionCode = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function BasicAccordionExample() {
  return (
    <Accordion type="single" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and supports full keyboard navigation.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the Nothing OS design system.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It has smooth animations and transitions for a polished user experience.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`;

const multipleAccordionCode = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function MultipleAccordionExample() {
  return (
    <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Can multiple items be open?</AccordionTrigger>
        <AccordionContent>
          Yes. You can expand multiple items at once by setting type="multiple".
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How does it work?</AccordionTrigger>
        <AccordionContent>
          The accordion maintains an array of open items instead of a single value.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Any limitations?</AccordionTrigger>
        <AccordionContent>
          No limitations. You can open as many items as you need.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`;

const nothingVariantCode = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function NothingVariantExample() {
  return (
    <Accordion type="single" variant="nothing" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Nothing OS Design</AccordionTrigger>
        <AccordionContent>
          Features the signature Nothing OS aesthetic with corner dots, subtle glow effects, 
          and smooth animations that create a premium, futuristic feel.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Enhanced Typography</AccordionTrigger>
        <AccordionContent>
          Uses the Nothing Dot font family for authentic branding and includes 
          animated status indicators that pulse when sections are expanded.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Subtle Details</AccordionTrigger>
        <AccordionContent>
          Includes dot matrix background patterns, gradient overlays, and carefully 
          crafted shadows that enhance the overall user experience.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`;

const pixelVariantCode = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PixelVariantExample() {
  return (
    <Accordion type="single" variant="pixel" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>RETRO GAMING STYLE</AccordionTrigger>
        <AccordionContent>
          Sharp, pixelated design with bold shadows and monospace typography 
          that recreates classic gaming interfaces.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>PIXEL PERFECT SHADOWS</AccordionTrigger>
        <AccordionContent>
          Features distinctive 4px shadow effects and uppercase text styling 
          for an authentic retro gaming aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>CLASSIC VIBES</AccordionTrigger>
        <AccordionContent>
          Perfect for gaming applications, retro-themed sites, or any project 
          that wants to evoke nostalgia for classic computing.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`;

const variantsCode = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function VariantsExample() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h4 className="font-semibold">Default</h4>
        <Accordion type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>Default styling</AccordionTrigger>
            <AccordionContent>Clean, modern design with subtle shadows.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div className="space-y-4">
        <h4 className="font-semibold">Bordered</h4>
        <Accordion type="single" variant="bordered">
          <AccordionItem value="item-1">
            <AccordionTrigger>Bordered variant</AccordionTrigger>
            <AccordionContent>More contained appearance with defined borders.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div className="space-y-4">
        <h4 className="font-semibold">Minimal</h4>
        <Accordion type="single" variant="minimal">
          <AccordionItem value="item-1">
            <AccordionTrigger>Minimal design</AccordionTrigger>
            <AccordionContent>Simple, clean appearance with minimal visual elements.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}`;

const controlledAccordionCode = `import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ControlledAccordionExample() {
  const [value, setValue] = useState<string>("")
  
  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground">
        Current value: {value || "None"}
      </div>
      <Accordion type="single" value={value} onValueChange={setValue}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Controlled item 1</AccordionTrigger>
          <AccordionContent>
            This accordion is controlled by React state. The current value is displayed above.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Controlled item 2</AccordionTrigger>
          <AccordionContent>
            You can programmatically control which items are open or closed.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}`;

const accordionSourceCode = `"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Main accordion container variants
const accordionVariants = cva("w-full space-y-4", {
  variants: {
    variant: {
      default: "",
      bordered: "border-2 border-border/40 rounded-3xl p-4 bg-background/80 backdrop-blur-sm",
      minimal: "space-y-2",
      pixel: "space-y-0 font-mono",
      nothing: "space-y-3",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// Individual accordion item variants
const accordionItemVariants = cva("group relative", {
  variants: {
    variant: {
      default: "border-2 border-border/60 rounded-2xl overflow-hidden bg-background/90 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-lg",
      bordered: "border border-border/40 rounded-xl overflow-hidden bg-background/60 backdrop-blur-sm",
      minimal: "border-b border-border/30 last:border-b-0 bg-transparent",
      pixel: "border-2 border-foreground bg-background overflow-hidden shadow-[4px_4px_0px_0px_theme(colors.foreground)] mb-2 last:mb-0 rounded-none",
      nothing: "border-2 border-border/40 rounded-3xl overflow-hidden bg-background/95 backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:bg-background shadow-sm hover:shadow-xl",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// Trigger button variants
const accordionTriggerVariants = cva(
  "flex w-full items-center justify-between p-6 text-left font-medium transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 cursor-pointer",
  {
    variants: {
      variant: {
        default: "text-lg font-semibold hover:bg-accent/5 font-ndot tracking-wide",
        bordered: "text-base hover:bg-accent/5 font-ndot",
        minimal: "p-4 text-base hover:bg-transparent hover:text-accent font-ndot",
        pixel: "font-mono font-bold text-xs uppercase tracking-wider bg-background hover:bg-foreground hover:text-background border-0 shadow-none p-4",
        nothing: "text-xl font-ndot font-medium tracking-wide hover:bg-accent/5 hover:text-accent relative pl-12 pr-8",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Content area variants
const accordionContentVariants = cva(
  "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] data-[state=closed]:h-0 data-[state=closed]:opacity-0 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",
  {
    variants: {
      variant: {
        default: "data-[state=open]:pb-6",
        bordered: "data-[state=open]:pb-6",
        minimal: "data-[state=open]:pb-4",
        pixel: "data-[state=open]:pb-4 font-mono text-sm",
        nothing: "data-[state=open]:pb-8",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Main accordion component
export interface AccordionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof accordionVariants> {
  type?: "single" | "multiple";
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  disabled?: boolean;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, variant = "default", type = "single", value: controlledValue, defaultValue, onValueChange, disabled = false, children, ...props }, ref) => {
    // ... (implementation details)
    
    return (
      <div ref={ref} className={cn(accordionVariants({ variant }), className)} {...props}>
        {children}
      </div>
    );
  }
);

// ... (other components: AccordionItem, AccordionTrigger, AccordionContent)

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };`;

export default function AccordionPage() {
  return (
    <ComponentLayout sections={sections} previous={previous} next={next}>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="space-y-3 border-b border-border pb-6">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-12 bg-accent rounded-full" />
            <h1 className="text-5xl font-bold tracking-tight font-ndot">
              Accordion
            </h1>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            A vertically stacked set of interactive headings that each reveal a
            section of content. Perfect for FAQs, settings panels, and
            organizing information.
          </p>
        </div>

        <InstallationTabs
          cliCommand="npx nothingcn@latest add accordion"
          manualSteps={[
            {
              title: "Install dependencies",
              description:
                "Install the required dependencies for the accordion component.",
              code: "npm install class-variance-authority lucide-react",
            },
            {
              title: "Add CSS animations",
              description: "Add accordion animations to your global CSS file.",
              code: `/* Add to your globals.css */
@keyframes accordion-down {
  from {
    height: 0;
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    height: var(--radix-accordion-content-height);
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes accordion-up {
  from {
    height: var(--radix-accordion-content-height);
    opacity: 1;
    transform: translateY(0);
  }
  to {
    height: 0;
    opacity: 0;
    transform: translateY(-10px);
  }
}

.animate-accordion-down {
  animation: accordion-down 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-accordion-up {
  animation: accordion-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}`,
            },
            {
              title: "Copy and paste the component source",
              description:
                "Create a new file at src/components/ui/accordion.tsx and paste the component code.",
              code: accordionSourceCode,
            },
          ]}
        />

        <div id="usage" className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tight font-ndot">Usage</h2>
          <div className="space-y-2">
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
              <code>{`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"`}</code>
            </pre>
          </div>
        </div>

        <div id="basic-usage">
          <ComponentPreview
            title="Basic Usage"
            description="A simple accordion with single-item expansion and default styling."
            preview={
              <div className="w-full max-w-2xl">
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
            code={basicAccordionCode}
          />
        </div>

        <div id="multiple-items">
          <ComponentPreview
            title="Multiple Items"
            description="Allow multiple accordion items to be open simultaneously."
            preview={
              <div className="w-full max-w-2xl">
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

        <div id="nothing-variant">
          <ComponentPreview
            title="Nothing OS Variant"
            description="Premium Nothing OS design with corner dots, glowing effects, and Nothing typography."
            preview={
              <div className="w-full max-w-2xl">
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

        <div id="pixel-variant">
          <ComponentPreview
            title="Pixel Variant"
            description="Retro gaming style with sharp edges, bold shadows, and monospace typography."
            preview={
              <div className="w-full max-w-2xl">
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

        <div id="style-variants">
          <ComponentPreview
            title="Style Variants"
            description="Compare different visual styles: default, bordered, and minimal."
            preview={
              <div className="w-full max-w-2xl space-y-8">
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

        <div id="controlled-state">
          <ComponentPreview
            title="Controlled State"
            description="Programmatically control which accordion items are open."
            preview={
              <div className="w-full max-w-2xl space-y-4">
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

        <div id="component-source">
          <ComponentCode
            title="Component Source"
            description="Copy and paste the following code into your project."
            code={accordionSourceCode}
          />
        </div>
      </div>
    </ComponentLayout>
  );
}
