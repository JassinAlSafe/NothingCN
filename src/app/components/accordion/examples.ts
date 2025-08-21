export const basicUsageCode = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
  );
}`;

export const multipleAccordionCode = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
  );
}`;

export const nothingVariantCode = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
  );
}`;

export const pixelVariantCode = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
  );
}`;

export const variantsCode = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
  );
}`;

export const controlledAccordionCode = `import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function ControlledAccordionExample() {
  const [value, setValue] = useState<string>("");
  
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
  );
}`;