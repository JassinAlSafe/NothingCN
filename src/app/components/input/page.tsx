"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentCode } from "@/components/component-code";
import { InstallationTabs } from "@/components/installation-tabs";
import { StandardComponentLayout } from "@/components/standard-component-layout";
import { 
  basicInputCode, 
  textareaCode, 
  contactFormCode, 
  nothingInputCode, 
  nothingFormCode, 
  allVariantsCode, 
  inputStatesCode 
} from "./examples";
import { inputSourceCode } from "./source";

export default function InputPage() {
  return (
    <StandardComponentLayout
      componentName="Input"
      componentPath="/components/input"
      description="Clean, minimal form components inspired by Nothing OS design philosophy. Subtle interactions, refined aesthetics, and excellent usability."
      badges={[
        { text: "✓ Accessible", variant: "secondary", className: "bg-green-500/10 text-green-600 border-green-500/20" },
        { text: "✓ Form Ready", variant: "secondary", className: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
        { text: "✓ Customizable", variant: "secondary", className: "bg-purple-500/10 text-purple-600 border-purple-500/20" }
      ]}
    >
      {/* Installation Section */}
      <InstallationTabs
        cliCommand="npx nothingcn@latest add input"
        manualSteps={[
          {
            title: "Install dependencies",
            description: "Install required dependencies for the input component.",
            code: "npm install class-variance-authority",
          },
          {
            title: "Copy and paste the component source",
            description: "Create a new file at src/components/ui/input.tsx and paste the component code.",
            code: inputSourceCode,
          },
          {
            title: "Import and use",
            description: "Import the component and use it in your project.",
            code: `import { Input } from "@/components/ui/input";

export function Example() {
  return (
    <Input placeholder="Enter your email..." />
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
            <code>{`import { Input } from "@/components/ui/input";`}</code>
          </pre>
        </div>
      </div>
      {/* Basic Input Field */}
      <div id="input-field">
        <ComponentPreview
          title="Input Field"
          description="Clean, minimal input with subtle Nothing OS styling"
          preview={
            <div className="space-y-4 p-4 sm:p-8 max-w-sm sm:max-w-md">
              <Input placeholder="Enter your name..." />
              <Input type="email" placeholder="your@email.com" />
              <Input type="password" placeholder="Password" />
              <Input value="Pre-filled content" readOnly />
              <Input placeholder="Disabled input" disabled />
            </div>
          }
          code={basicInputCode}
        />
      </div>

      {/* Textarea */}
      <div id="textarea">
        <ComponentPreview
          title="Textarea"
          description="Multi-line text input with auto-resize and Nothing OS aesthetics"
          preview={
            <div className="space-y-4 p-4 sm:p-8 max-w-sm sm:max-w-md">
              <Textarea 
                placeholder="Tell us your story..." 
                className="min-h-[120px]"
              />
              <Textarea 
                value="Pre-filled content with more text to show how it looks when filled with actual content that spans multiple lines."
                readOnly
                className="min-h-[120px]"
              />
              <Textarea 
                placeholder="Disabled textarea" 
                disabled
                className="min-h-[120px]"
              />
            </div>
          }
          code={textareaCode}
        />
      </div>

      {/* Contact Form Example */}
      <div id="contact-form">
        <ComponentPreview
          title="Contact Form"
          description="Complete form example with inputs, textarea, and submit button"
          preview={
            <Card className="w-full max-w-sm sm:max-w-md">
              <CardHeader>
                <CardTitle className="font-ndot">Get in Touch</CardTitle>
                <CardDescription>Send us a message and we&apos;ll respond within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us what you're thinking..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          }
          code={contactFormCode}
        />
      </div>

      {/* Nothing Variant Input */}
      <div id="nothing-input">
        <ComponentPreview
          title="Nothing Input"
          description="Premium Nothing OS input design with corner dots and subtle glows"
          preview={
            <div className="space-y-4 p-6 sm:p-8 max-w-sm sm:max-w-md bg-background rounded-2xl">
              <Input 
                variant="nothing"
                placeholder="Enter your name..."
              />
              <Input 
                variant="nothing"
                type="email"
                placeholder="your@email.com"
              />
              <Input 
                variant="nothing"
                type="password"
                placeholder="Password"
              />
              <Textarea 
                variant="default"
                placeholder="Tell us your story..."
                className="min-h-[120px]"
              />
            </div>
          }
          code={nothingInputCode}
        />
      </div>

      {/* Nothing Form Example */}
      <div id="nothing-form">
        <ComponentPreview
          title="Nothing Form"
          description="Complete form with Nothing OS design language"
          preview={
            <Card className="w-full max-w-sm sm:max-w-md border-2 border-border/40 shadow-xl">
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
                  <div className="w-1 h-1 bg-accent/60 rounded-full animate-pulse [animation-delay:0.2s]" />
                  <div className="w-1 h-1 bg-accent/30 rounded-full animate-pulse [animation-delay:0.4s]" />
                </div>
                <CardTitle className="font-ndot text-2xl">Create Account</CardTitle>
                <CardDescription>Enter your details to get started</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-ndot">Username</label>
                    <Input variant="nothing" placeholder="Choose a username" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-ndot">Email</label>
                    <Input variant="nothing" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-ndot">Password</label>
                    <Input variant="nothing" type="password" placeholder="Create a password" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-ndot">Bio</label>
                    <Textarea 
                      variant="default"
                      placeholder="Tell us about yourself..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button variant="nothing" className="w-full">
                    CREATE ACCOUNT
                  </Button>
                </form>
              </CardContent>
            </Card>
          }
          code={nothingFormCode}
        />
      </div>

      {/* All Variants */}
      <div id="all-variants">
        <ComponentPreview
          title="All Input Variants"
          description="Compare all available input variants"
          preview={
            <div className="space-y-6 p-4 sm:p-8 max-w-sm sm:max-w-md">
              <div className="space-y-2">
                <label className="text-sm font-medium">Default</label>
                <Input placeholder="Default input..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Nothing</label>
                <Input variant="nothing" placeholder="Nothing input..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Pixel</label>
                <Input variant="pixel" placeholder="PIXEL INPUT..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Glow</label>
                <Input variant="glow" placeholder="Glow input..." />
              </div>
            </div>
          }
          code={allVariantsCode}
        />
      </div>

      {/* Input States */}
      <div id="input-states">
        <ComponentPreview
          title="Input States"
          description="Different input states and their visual representations"
          preview={
            <div className="space-y-6 p-4 sm:p-8 max-w-sm sm:max-w-md">
              <div className="space-y-2">
                <label className="text-sm font-medium">Normal</label>
                <Input placeholder="Normal state..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Focused (click to see)</label>
                <Input placeholder="Focus state..." autoFocus />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Filled</label>
                <Input value="This input has content" readOnly />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Disabled</label>
                <Input placeholder="Disabled state..." disabled />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Read Only</label>
                <Input value="Read only content" readOnly />
              </div>
            </div>
          }
          code={inputStatesCode}
        />
      </div>

      {/* Component Source */}
      <div id="component-source">
        <ComponentCode
          title="Component Source"
          description="Copy and paste the following code into your project."
          code={inputSourceCode}
        />
      </div>
    </StandardComponentLayout>
  );
}