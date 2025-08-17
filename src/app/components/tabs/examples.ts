// Code examples for tabs component documentation
// Extracted to reduce duplication and improve maintainability

export const basicUsageCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function BasicTabsExample() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="space-y-2">
          <h3 className="font-semibold">Overview</h3>
          <p className="text-sm text-muted-foreground">
            Get a comprehensive view of your account activity.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="space-y-2">
          <h3 className="font-semibold">Analytics</h3>
          <p className="text-sm text-muted-foreground">
            Dive deep into your data with advanced analytics.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="space-y-2">
          <h3 className="font-semibold">Reports</h3>
          <p className="text-sm text-muted-foreground">
            Generate detailed reports and export your data.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}`;

export const nothingVariantCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function NothingTabsExample() {
  return (
    <Tabs defaultValue="design" className="w-full max-w-md">
      <TabsList variant="nothing">
        <TabsTrigger variant="nothing" value="design">Design</TabsTrigger>
        <TabsTrigger variant="nothing" value="features">Features</TabsTrigger>
        <TabsTrigger variant="nothing" value="specs">Specs</TabsTrigger>
      </TabsList>
      <TabsContent value="design">
        <div className="space-y-2">
          <h3 className="font-semibold font-ndot">Nothing OS Design</h3>
          <p className="text-sm text-muted-foreground">
            Signature Nothing aesthetic with accent colors and distinctive styling.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="features">
        <div className="space-y-2">
          <h3 className="font-semibold font-ndot">Enhanced Features</h3>
          <p className="text-sm text-muted-foreground">
            Premium interactions with subtle animations and glow effects.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="specs">
        <div className="space-y-2">
          <h3 className="font-semibold font-ndot">Technical Specs</h3>
          <p className="text-sm text-muted-foreground">
            Built with accessibility and performance in mind.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}`;

export const pixelVariantCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function PixelTabsExample() {
  return (
    <Tabs defaultValue="level1" className="w-full max-w-md">
      <TabsList variant="pixel">
        <TabsTrigger variant="pixel" value="level1">LEVEL_01</TabsTrigger>
        <TabsTrigger variant="pixel" value="level2">LEVEL_02</TabsTrigger>
        <TabsTrigger variant="pixel" value="level3">LEVEL_03</TabsTrigger>
      </TabsList>
      <TabsContent value="level1">
        <div className="space-y-2">
          <h3 className="font-semibold font-ndot">RETRO_GAMING_STYLE</h3>
          <p className="text-sm text-muted-foreground font-ndot">
            Sharp, pixelated design with monospace typography.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="level2">
        <div className="space-y-2">
          <h3 className="font-semibold font-ndot">PIXEL_PERFECT_SHADOWS</h3>
          <p className="text-sm text-muted-foreground font-ndot">
            Distinctive 4px shadow effects and uppercase styling.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="level3">
        <div className="space-y-2">
          <h3 className="font-semibold font-ndot">CLASSIC_VIBES</h3>
          <p className="text-sm text-muted-foreground font-ndot">
            Perfect for gaming applications and retro themes.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}`;

export const underlineVariantCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function UnderlineTabsExample() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList variant="underline">
        <TabsTrigger variant="underline" value="overview">Overview</TabsTrigger>
        <TabsTrigger variant="underline" value="details">Details</TabsTrigger>
        <TabsTrigger variant="underline" value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="space-y-2">
          <h3 className="font-semibold">Overview</h3>
          <p className="text-sm text-muted-foreground">
            Clean underline style perfect for navigation.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="details">
        <div className="space-y-2">
          <h3 className="font-semibold">Details</h3>
          <p className="text-sm text-muted-foreground">
            Detailed information with clean styling.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div className="space-y-2">
          <h3 className="font-semibold">Settings</h3>
          <p className="text-sm text-muted-foreground">
            Configuration options and preferences.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}`;

export const minimalVariantCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function MinimalTabsExample() {
  return (
    <Tabs defaultValue="tab1" className="w-full max-w-md">
      <TabsList variant="minimal">
        <TabsTrigger variant="minimal" value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger variant="minimal" value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger variant="minimal" value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="space-y-2">
          <h3 className="font-semibold">Minimal Design</h3>
          <p className="text-sm text-muted-foreground">
            Subtle, minimal design that blends seamlessly.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="space-y-2">
          <h3 className="font-semibold">Clean Interface</h3>
          <p className="text-sm text-muted-foreground">
            Understated approach with elegant simplicity.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="space-y-2">
          <h3 className="font-semibold">Flexible Usage</h3>
          <p className="text-sm text-muted-foreground">
            Perfect for applications requiring subtle navigation.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}`;

export const sizesCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function TabsSizesExample() {
  return (
    <div className="space-y-6">
      {/* Small Size */}
      <Tabs defaultValue="tab1" className="w-full max-w-md">
        <TabsList size="sm">
          <TabsTrigger size="sm" value="tab1">Small</TabsTrigger>
          <TabsTrigger size="sm" value="tab2">Compact</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Small size content</TabsContent>
        <TabsContent value="tab2">Perfect for tight spaces</TabsContent>
      </Tabs>
      
      {/* Large Size */}
      <Tabs defaultValue="tab1" className="w-full max-w-md">
        <TabsList size="lg">
          <TabsTrigger size="lg" value="tab1">Large</TabsTrigger>
          <TabsTrigger size="lg" value="tab2">Prominent</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Large size content</TabsContent>
        <TabsContent value="tab2">Great for primary navigation</TabsContent>
      </Tabs>
    </div>
  )
}`;