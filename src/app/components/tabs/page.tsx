"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentCode } from "@/components/component-code";
import { ComponentLayout } from "@/components/component-layout";
import { InstallationTabs } from "@/components/installation-tabs";
import { getComponentNavigation } from "@/lib/component-navigation";
import { 
  basicUsageCode, 
  nothingVariantCode, 
  pixelVariantCode, 
  underlineVariantCode, 
  minimalVariantCode, 
  sizesCode 
} from "./examples";
import { tabsSourceCode } from "./source";

const sections = [
  { id: "installation", title: "Installation" },
  { id: "usage", title: "Usage" },
  { id: "basic-usage", title: "Basic Usage" },
  { id: "nothing-variant", title: "Nothing Variant" },
  { id: "pixel-variant", title: "Pixel Variant" },
  { id: "underline-variant", title: "Underline Variant" },
  { id: "minimal-variant", title: "Minimal Variant" },
  { id: "sizes", title: "Sizes" },
  { id: "component-source", title: "Component Source" },
];

const { previous, next } = getComponentNavigation("/components/tabs");

export default function TabsPage() {
  return (
    <ComponentLayout sections={sections} previous={previous} next={next}>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="space-y-3 border-b border-border pb-6">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-12 bg-accent rounded-full" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-ndot">
              Tabs
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            A set of layered sections of content—known as tab panels—that are displayed one at a time. 
            Perfect for organizing information and creating intuitive navigation experiences.
          </p>
        </div>

        <InstallationTabs
          cliCommand="npx nothingcn@latest add tabs"
          manualSteps={[
            {
              title: "Install dependencies",
              description: "Install the required dependencies for the tabs component.",
              code: "npm install @radix-ui/react-tabs class-variance-authority",
            },
            {
              title: "Copy and paste the component source",
              description: "Create a new file at src/components/ui/tabs.tsx and paste the component code.",
              code: tabsSourceCode,
            },
          ]}
        />

        <div id="usage" className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tight font-ndot">Usage</h2>
          <div className="space-y-2">
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
              <code>{`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"`}</code>
            </pre>
          </div>
        </div>

        <div id="basic-usage">
          <ComponentPreview
            title="Basic Usage"
            description="A simple tabs component with three sections demonstrating the default styling and behavior."
            preview={
              <div className="w-full max-w-sm sm:max-w-md">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-0">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Overview</CardTitle>
                        <CardDescription>
                          Get a comprehensive view of your account activity.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Your dashboard shows real-time data and insights.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="analytics" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Analytics</CardTitle>
                        <CardDescription>
                          Dive deep into your data with advanced analytics.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Track user behavior and key performance indicators.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="reports" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Reports</CardTitle>
                        <CardDescription>
                          Generate detailed reports and export your data.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Create custom reports for your team.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            }
            code={basicUsageCode}
          />
        </div>

        <div id="nothing-variant">
          <ComponentPreview
            title="Nothing OS Variant"
            description="Premium Nothing OS design with accent colors, distinctive styling, and enhanced visual hierarchy."
            preview={
              <div className="w-full max-w-sm sm:max-w-md">
                <Tabs defaultValue="design" className="w-full">
                  <TabsList variant="nothing">
                    <TabsTrigger variant="nothing" value="design">Design</TabsTrigger>
                    <TabsTrigger variant="nothing" value="features">Features</TabsTrigger>
                    <TabsTrigger variant="nothing" value="specs">Specs</TabsTrigger>
                  </TabsList>
                  <TabsContent value="design">
                    <div className="space-y-2 p-4 bg-muted/30 rounded-xl border">
                      <h3 className="font-semibold font-ndot">Nothing OS Design</h3>
                      <p className="text-sm text-muted-foreground">
                        Signature Nothing aesthetic with accent colors and distinctive styling.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="features">
                    <div className="space-y-2 p-4 bg-muted/30 rounded-xl border">
                      <h3 className="font-semibold font-ndot">Enhanced Features</h3>
                      <p className="text-sm text-muted-foreground">
                        Premium interactions with subtle animations and glow effects.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="specs">
                    <div className="space-y-2 p-4 bg-muted/30 rounded-xl border">
                      <h3 className="font-semibold font-ndot">Technical Specs</h3>
                      <p className="text-sm text-muted-foreground">
                        Built with accessibility and performance in mind.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            }
            code={nothingVariantCode}
          />
        </div>

        <div id="pixel-variant">
          <ComponentPreview
            title="Pixel Variant"
            description="Retro gaming inspired design with pixel perfect typography, sharp edges, and distinctive shadows."
            preview={
              <div className="w-full max-w-sm sm:max-w-md">
                <Tabs defaultValue="level1" className="w-full">
                  <TabsList variant="pixel">
                    <TabsTrigger variant="pixel" value="level1">LEVEL_01</TabsTrigger>
                    <TabsTrigger variant="pixel" value="level2">LEVEL_02</TabsTrigger>
                    <TabsTrigger variant="pixel" value="level3">LEVEL_03</TabsTrigger>
                  </TabsList>
                  <TabsContent value="level1">
                    <div className="space-y-2 p-4 bg-muted border-2 border-foreground shadow-[4px_4px_0px_0px_theme(colors.foreground)]">
                      <h3 className="font-semibold font-ndot">RETRO_GAMING_STYLE</h3>
                      <p className="text-sm text-muted-foreground font-ndot">
                        Sharp, pixelated design with monospace typography.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="level2">
                    <div className="space-y-2 p-4 bg-muted border-2 border-foreground shadow-[4px_4px_0px_0px_theme(colors.foreground)]">
                      <h3 className="font-semibold font-ndot">PIXEL_PERFECT_SHADOWS</h3>
                      <p className="text-sm text-muted-foreground font-ndot">
                        Distinctive 4px shadow effects and uppercase styling.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="level3">
                    <div className="space-y-2 p-4 bg-muted border-2 border-foreground shadow-[4px_4px_0px_0px_theme(colors.foreground)]">
                      <h3 className="font-semibold font-ndot">CLASSIC_VIBES</h3>
                      <p className="text-sm text-muted-foreground font-ndot">
                        Perfect for gaming applications and retro themes.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            }
            code={pixelVariantCode}
          />
        </div>

        <div id="underline-variant">
          <ComponentPreview
            title="Underline Variant"
            description="Clean underline style tabs perfect for navigation and content organization with minimal visual distraction."
            preview={
              <div className="w-full max-w-sm sm:max-w-md">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList variant="underline">
                    <TabsTrigger variant="underline" value="overview">Overview</TabsTrigger>
                    <TabsTrigger variant="underline" value="details">Details</TabsTrigger>
                    <TabsTrigger variant="underline" value="settings">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview">
                    <div className="space-y-2 p-4">
                      <h3 className="font-semibold">Overview</h3>
                      <p className="text-sm text-muted-foreground">
                        Clean underline style perfect for navigation.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="details">
                    <div className="space-y-2 p-4">
                      <h3 className="font-semibold">Details</h3>
                      <p className="text-sm text-muted-foreground">
                        Detailed information with clean styling.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="settings">
                    <div className="space-y-2 p-4">
                      <h3 className="font-semibold">Settings</h3>
                      <p className="text-sm text-muted-foreground">
                        Configuration options and preferences.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            }
            code={underlineVariantCode}
          />
        </div>

        <div id="minimal-variant">
          <ComponentPreview
            title="Minimal Variant"
            description="Subtle, minimal design that blends seamlessly into any interface without overwhelming the content."
            preview={
              <div className="w-full max-w-sm sm:max-w-md">
                <Tabs defaultValue="tab1" className="w-full">
                  <TabsList variant="minimal">
                    <TabsTrigger variant="minimal" value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger variant="minimal" value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger variant="minimal" value="tab3">Tab 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1">
                    <div className="space-y-2 p-4">
                      <h3 className="font-semibold">Minimal Design</h3>
                      <p className="text-sm text-muted-foreground">
                        Subtle, minimal design that blends seamlessly.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="tab2">
                    <div className="space-y-2 p-4">
                      <h3 className="font-semibold">Clean Interface</h3>
                      <p className="text-sm text-muted-foreground">
                        Understated approach with elegant simplicity.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="tab3">
                    <div className="space-y-2 p-4">
                      <h3 className="font-semibold">Flexible Usage</h3>
                      <p className="text-sm text-muted-foreground">
                        Perfect for applications requiring subtle navigation.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            }
            code={minimalVariantCode}
          />
        </div>

        <div id="sizes">
          <ComponentPreview
            title="Sizes"
            description="Different size variants for tabs to fit various design requirements and space constraints."
            preview={
              <div className="w-full max-w-md space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-3 text-muted-foreground">Small</h4>
                  <Tabs defaultValue="tab1" className="w-full">
                    <TabsList size="sm">
                      <TabsTrigger size="sm" value="tab1">Small</TabsTrigger>
                      <TabsTrigger size="sm" value="tab2">Compact</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1">
                      <p className="text-sm text-muted-foreground">Small size content</p>
                    </TabsContent>
                    <TabsContent value="tab2">
                      <p className="text-sm text-muted-foreground">Perfect for tight spaces</p>
                    </TabsContent>
                  </Tabs>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-3 text-muted-foreground">Large</h4>
                  <Tabs defaultValue="tab1" className="w-full">
                    <TabsList size="lg">
                      <TabsTrigger size="lg" value="tab1">Large</TabsTrigger>
                      <TabsTrigger size="lg" value="tab2">Prominent</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1">
                      <p className="text-sm text-muted-foreground">Large size content</p>
                    </TabsContent>
                    <TabsContent value="tab2">
                      <p className="text-sm text-muted-foreground">Great for primary navigation</p>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            }
            code={sizesCode}
          />
        </div>

        <div id="component-source">
          <ComponentCode
            title="Component Source"
            description="Copy and paste the following code into your project."
            code={tabsSourceCode}
          />
        </div>
      </div>
    </ComponentLayout>
  );
}