"use client";

import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "@/components/component-preview";
import { StandardComponentLayout } from "@/components/standard-component-layout";
import { 
  badgeCode,
  colorBadgesCode,
  badgesWithDotsCode,
  badgeSizesCode,
  badgeUsageCode
} from "./examples";
import { badgeSourceCode } from "./source";

const sections = [
  { id: "installation", title: "Installation" },
  { id: "usage", title: "Usage" },
  { id: "basic-usage", title: "Basic Usage" },
  { id: "color-variants", title: "Color Variants" },
  { id: "dots", title: "Badges with Dots" },
  { id: "sizes", title: "Badge Sizes" },
  { id: "usage-examples", title: "Usage Examples" },
  { id: "component-source", title: "Component Source" },
];

export default function BadgePage() {
  return (
    <StandardComponentLayout
      componentName="Badge"
      componentPath="/components/badge"
      description="Displays a badge or a component that looks like a badge. Perfect for labels, status indicators, and tags."
      badges={[
        { text: "✓ Semantic HTML", variant: "secondary", className: "bg-green-500/10 text-green-600 border-green-500/20" },
        { text: "✓ Accessible", variant: "secondary", className: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
        { text: "✓ Customizable", variant: "secondary", className: "bg-purple-500/10 text-purple-600 border-purple-500/20" }
      ]}
      customSections={sections}
      basicUsageCode={badgeCode}
      componentSourceCode={badgeSourceCode}
    >
      {/* Color Variants Section */}
      <div id="color-variants">
        <ComponentPreview
          title="Color Variants"
          description="Badge variants with different colors for categorization."
          preview={
            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="nothing"><span className="font-ndot">Nothing OS</span></Badge>
              <Badge variant="red"><span className="font-ndot">Red</span></Badge>
              <Badge variant="green"><span className="font-ndot">Green</span></Badge>
              <Badge variant="blue"><span className="font-ndot">Blue</span></Badge>
              <Badge variant="purple"><span className="font-ndot">Purple</span></Badge>
              <Badge variant="orange"><span className="font-ndot">Orange</span></Badge>
              <Badge variant="yellow"><span className="font-ndot">Yellow</span></Badge>
            </div>
          }
          code={colorBadgesCode}
        />
      </div>

      {/* Badges with Dots Section */}
      <div id="dots">
        <ComponentPreview
          title="Badges with Dots"
          description="Badges with colored dots for visual categorization, inspired by Nothing OS."
          preview={
            <div className="flex flex-wrap items-center gap-4">
              <Badge dot dotColor="red" variant="nothing"><span className="font-ndot">Newsroom</span></Badge>
              <Badge dot dotColor="blue" variant="nothing"><span className="font-ndot">Phone Series</span></Badge>
              <Badge dot dotColor="green" variant="nothing"><span className="font-ndot">Ear Series</span></Badge>
              <Badge dot dotColor="purple" variant="nothing"><span className="font-ndot">Community</span></Badge>
              <Badge dot dotColor="orange" variant="nothing"><span className="font-ndot">Updates</span></Badge>
            </div>
          }
          code={badgesWithDotsCode}
        />
      </div>

      {/* Badge Sizes Section */}
      <div id="sizes">
        <ComponentPreview
          title="Badge Sizes"
          description="Different sizes for various contexts."
          preview={
            <div className="flex flex-wrap items-center gap-4">
              <Badge size="sm">Small</Badge>
              <Badge size="default">Default</Badge>
              <Badge size="lg">Large</Badge>
              <Badge size="sm" dot dotColor="red" variant="nothing"><span className="font-ndot">Small with dot</span></Badge>
              <Badge size="lg" dot dotColor="blue" variant="nothing"><span className="font-ndot">Large with dot</span></Badge>
            </div>
          }
          code={badgeSizesCode}
        />
      </div>

      {/* Usage Examples Section */}
      <div id="usage-examples">
        <ComponentPreview
          title="Usage Examples"
          description="Common use cases for badges."
          preview={
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span>Status:</span>
                <Badge variant="green"><span className="font-ndot">Active</span></Badge>
              </div>
              <div className="flex items-center space-x-2">
                <span>Priority:</span>
                <Badge variant="destructive"><span className="font-ndot">High</span></Badge>
              </div>
              <div className="flex items-center space-x-2">
                <span>Version:</span>
                <Badge variant="outline"><span className="font-ndot">v1.0.0</span></Badge>
              </div>
              <div className="flex items-center space-x-2">
                <span>Category:</span>
                <Badge dot dotColor="blue" variant="nothing"><span className="font-ndot">Technology</span></Badge>
              </div>
            </div>
          }
          code={badgeUsageCode}
        />
      </div>
    </StandardComponentLayout>
  );
}