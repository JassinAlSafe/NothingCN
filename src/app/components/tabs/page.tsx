"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentCode } from "@/components/component-code";
import { InstallationTabs } from "@/components/installation-tabs";
import { StandardComponentLayout } from "@/components/standard-component-layout";
import { 
  basicUsageCode, 
  nothingVariantCode, 
  pixelVariantCode, 
  underlineVariantCode, 
  minimalVariantCode, 
  sizesCode 
} from "./examples";
import { tabsSourceCode } from "./source";

export default function TabsPage() {
  return (
    <StandardComponentLayout
      componentName="Tabs"
      componentPath="/components/tabs"
      description="A set of layered sections of content—known as tab panels—that are displayed one at a time. Perfect for organizing information and creating intuitive navigation experiences."
      badges={[
        { text: "✓ Radix UI", variant: "secondary", className: "bg-green-500/10 text-green-600 border-green-500/20" },
        { text: "✓ Accessible", variant: "secondary", className: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
        { text: "✓ Animated", variant: "secondary", className: "bg-purple-500/10 text-purple-600 border-purple-500/20" }
      ]}
    >
      {/* Installation Section */}
      <InstallationTabs
        cliCommand="npx nothingcn@latest add tabs"
        manualSteps={[
          {
            title: "Install dependencies",
            description: "Install required dependencies for the tabs component.",
            code: "npm install @radix-ui/react-tabs class-variance-authority",
          },
          {
            title: "Copy and paste the component source",
            description: "Create a new file at src/components/ui/tabs.tsx and paste the component code.",
            code: tabsSourceCode,
          },
          {
            title: "Import and use",
            description: "Import the component and use it in your project.",
            code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function Example() {
  return (
    <Tabs defaultValue="tab1" className="w-full">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Tab 1 content</TabsContent>
      <TabsContent value="tab2">Tab 2 content</TabsContent>
    </Tabs>
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
            <code>{`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";`}</code>
          </pre>
        </div>
      </div>
      {/* Basic Usage */}
      <div id="basic-usage">
        <ComponentPreview
          title="Basic Usage"
          description="Default tabs with clean, modern styling."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl">
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="team">Team</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account</CardTitle>
                      <CardDescription>
                        Make changes to your account here. Click save when you&apos;re done.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-sm font-medium">Name</label>
                        <input className="w-full px-3 py-2 border rounded-md" defaultValue="John Doe" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-medium">Username</label>
                        <input className="w-full px-3 py-2 border rounded-md" defaultValue="@johndoe" />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="password">
                  <Card>
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                      <CardDescription>
                        Change your password here. After saving, you&apos;ll be logged out.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-sm font-medium">Current password</label>
                        <input type="password" className="w-full px-3 py-2 border rounded-md" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-medium">New password</label>
                        <input type="password" className="w-full px-3 py-2 border rounded-md" />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="team">
                  <Card>
                    <CardHeader>
                      <CardTitle>Team</CardTitle>
                      <CardDescription>
                        Manage your team members and their roles.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        Your team has 5 active members across 3 different projects.
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          }
          code={basicUsageCode}
        />
      </div>

      {/* Nothing Variant */}
      <div id="nothing-variant">
        <ComponentPreview
          title="Nothing Variant"
          description="Premium Nothing OS design with dot matrix patterns and glowing effects."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl">
              <Tabs defaultValue="overview" variant="nothing" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">OVERVIEW</TabsTrigger>
                  <TabsTrigger value="analytics">ANALYTICS</TabsTrigger>
                  <TabsTrigger value="reports">REPORTS</TabsTrigger>
                  <TabsTrigger value="settings">SETTINGS</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-6">
                  <div className="p-6 sm:p-8 rounded-3xl border-2 border-border/40 bg-background/95">
                    <h3 className="text-xl font-ndot font-semibold mb-3">System Overview</h3>
                    <p className="text-muted-foreground">
                      Monitor your system&apos;s performance and health metrics in real-time.
                      Everything is running smoothly with optimal efficiency.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="analytics" className="mt-6">
                  <div className="p-6 sm:p-8 rounded-3xl border-2 border-border/40 bg-background/95">
                    <h3 className="text-xl font-ndot font-semibold mb-3">Analytics Dashboard</h3>
                    <p className="text-muted-foreground">
                      Deep insights into user behavior and system usage patterns.
                      Track metrics that matter to your business.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="reports" className="mt-6">
                  <div className="p-6 sm:p-8 rounded-3xl border-2 border-border/40 bg-background/95">
                    <h3 className="text-xl font-ndot font-semibold mb-3">Generated Reports</h3>
                    <p className="text-muted-foreground">
                      Automated reports are generated weekly and sent to your inbox.
                      Custom reports can be created on demand.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="settings" className="mt-6">
                  <div className="p-6 sm:p-8 rounded-3xl border-2 border-border/40 bg-background/95">
                    <h3 className="text-xl font-ndot font-semibold mb-3">Configuration</h3>
                    <p className="text-muted-foreground">
                      Customize your experience with advanced settings and preferences.
                      All changes are saved automatically.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          }
          code={nothingVariantCode}
        />
      </div>

      {/* Pixel Variant */}
      <div id="pixel-variant">
        <ComponentPreview
          title="Pixel Variant"
          description="Retro gaming style with pixelated borders and bold shadows."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl">
              <Tabs defaultValue="game" variant="pixel" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="game">GAME</TabsTrigger>
                  <TabsTrigger value="stats">STATS</TabsTrigger>
                  <TabsTrigger value="options">OPTIONS</TabsTrigger>
                </TabsList>
                <TabsContent value="game" className="mt-6">
                  <div className="p-6 border-2 border-foreground bg-background shadow-[4px_4px_0px_0px_theme(colors.foreground)]">
                    <h3 className="text-lg font-mono font-bold uppercase mb-3">NEW GAME</h3>
                    <p className="font-mono text-sm">
                      PRESS START TO BEGIN YOUR ADVENTURE.
                      COLLECT COINS AND DEFEAT ENEMIES!
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="stats" className="mt-6">
                  <div className="p-6 border-2 border-foreground bg-background shadow-[4px_4px_0px_0px_theme(colors.foreground)]">
                    <h3 className="text-lg font-mono font-bold uppercase mb-3">PLAYER STATS</h3>
                    <div className="font-mono text-sm space-y-2">
                      <div>HIGH SCORE: 999,999</div>
                      <div>GAMES PLAYED: 42</div>
                      <div>ACHIEVEMENTS: 15/20</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="options" className="mt-6">
                  <div className="p-6 border-2 border-foreground bg-background shadow-[4px_4px_0px_0px_theme(colors.foreground)]">
                    <h3 className="text-lg font-mono font-bold uppercase mb-3">GAME OPTIONS</h3>
                    <div className="font-mono text-sm space-y-2">
                      <div>SOUND: ON</div>
                      <div>MUSIC: ON</div>
                      <div>DIFFICULTY: NORMAL</div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          }
          code={pixelVariantCode}
        />
      </div>

      {/* Underline Variant */}
      <div id="underline-variant">
        <ComponentPreview
          title="Underline Variant"
          description="Clean tabs with underline indicator for active state."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl">
              <Tabs defaultValue="posts" variant="underline" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="posts">Posts</TabsTrigger>
                  <TabsTrigger value="followers">Followers</TabsTrigger>
                  <TabsTrigger value="following">Following</TabsTrigger>
                </TabsList>
                <TabsContent value="posts" className="mt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Recent Posts</h3>
                    <p className="text-muted-foreground">
                      You have published 24 posts this month. Your most popular post
                      has received 1,234 views and 89 comments.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="followers" className="mt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Your Followers</h3>
                    <p className="text-muted-foreground">
                      You have 5,432 followers. 234 new followers joined this week.
                      Your follower growth rate is up 12% from last month.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="following" className="mt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Following</h3>
                    <p className="text-muted-foreground">
                      You are following 321 accounts. Discover new accounts based on
                      your interests and engagement patterns.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          }
          code={underlineVariantCode}
        />
      </div>

      {/* Minimal Variant */}
      <div id="minimal-variant">
        <ComponentPreview
          title="Minimal Variant"
          description="Ultra-clean design with subtle hover states."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl">
              <Tabs defaultValue="profile" variant="minimal" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="preferences">Preferences</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>
                <TabsContent value="profile" className="mt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Profile Information</h3>
                    <p className="text-sm text-muted-foreground">
                      Update your profile details and public information.
                      These details will be visible to other users.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="preferences" className="mt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">User Preferences</h3>
                    <p className="text-sm text-muted-foreground">
                      Customize your experience with personal preferences.
                      Changes are saved automatically.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="security" className="mt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Security Settings</h3>
                    <p className="text-sm text-muted-foreground">
                      Manage your security settings and authentication methods.
                      Keep your account safe and secure.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          }
          code={minimalVariantCode}
        />
      </div>

      {/* Sizes */}
      <div id="sizes">
        <ComponentPreview
          title="Sizes"
          description="Different tab sizes for various use cases."
          preview={
            <div className="w-full max-w-sm sm:max-w-2xl space-y-8">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Small</h4>
                <Tabs defaultValue="tab1" size="sm" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" className="mt-4">
                    <div className="text-sm">Small tabs content</div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Default</h4>
                <Tabs defaultValue="tab1" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" className="mt-4">
                    <div className="text-sm">Default tabs content</div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Large</h4>
                <Tabs defaultValue="tab1" size="lg" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" className="mt-4">
                    <div className="text-sm">Large tabs content</div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          }
          code={sizesCode}
        />
      </div>

      {/* Component Source */}
      <div id="component-source">
        <ComponentCode
          title="Component Source"
          description="Copy and paste the following code into your project."
          code={tabsSourceCode}
        />
      </div>
    </StandardComponentLayout>
  );
}