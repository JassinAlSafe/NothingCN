"use client";

import { ComponentPreview } from "@/components/component-preview";
import { ComponentLayout } from "@/components/component-layout";
import { InstallationTabs } from "@/components/installation-tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getComponentNavigation } from "@/lib/component-navigation";

const sections = [
  { id: "installation", title: "Installation" },
  { id: "usage", title: "Usage" },
  { id: "input-field", title: "Input Field" },
  { id: "textarea", title: "Textarea" },
  { id: "contact-form", title: "Contact Form" },
  { id: "nothing-input", title: "Nothing Input" },
  { id: "nothing-form", title: "Nothing Form" },
  { id: "all-variants", title: "All Input Variants" },
  { id: "input-states", title: "Input States" },
  { id: "examples", title: "Examples" }
];

const { previous, next } = getComponentNavigation("/components/input");

export default function InputPage() {
  return (
    <ComponentLayout sections={sections} previous={previous} next={next}>
      <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold font-ndot tracking-wide">Input & Textarea</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Clean, minimal form components inspired by Nothing OS design philosophy. 
          Subtle interactions, refined aesthetics, and excellent usability.
        </p>
      </div>

      <InstallationTabs
        cliCommand="npx nothingcn@latest add input"
        manualSteps={[
          {
            title: "Copy and paste the following code into your project.",
            description: "Create a new file at src/components/ui/input.tsx",
            code: `"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "pixel" | "terminal" | "glow" | "nothing";
  pixelSize?: "sm" | "md" | "lg";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-xl border-2 border-border/40 bg-background/80 px-4 py-3 text-sm",
          "ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }`
          }
        ]}
      />

      <div id="usage" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight font-ndot">Usage</h2>
        <div className="space-y-2">
          <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`import { Input } from "@/components/ui/input"`}</code>
          </pre>
          <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`<Input placeholder="Enter your name..." />`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-8">
        {/* Basic Input Examples */}
        <div id="input-field">
          <ComponentPreview
            title="Input Field"
          description="Clean, minimal input with subtle Nothing OS styling"
          preview={
            <div className="space-y-4 p-8 max-w-md">
              <Input placeholder="Enter your name..." />
              <Input type="email" placeholder="your@email.com" />
              <Input type="password" placeholder="Password" />
              <Input value="Pre-filled content" readOnly />
              <Input placeholder="Disabled input" disabled />
            </div>
          }
          code={`import { Input } from "@/components/ui/input";

export default function InputExample() {
  return (
    <div className="space-y-4">
      <Input placeholder="Enter your name..." />
      <Input type="email" placeholder="your@email.com" />
      <Input type="password" placeholder="Password" />
      <Input value="Pre-filled content" readOnly />
      <Input placeholder="Disabled input" disabled />
    </div>
  );
}`}
          />
        </div>

        {/* Textarea Examples */}
        <div id="textarea">
          <ComponentPreview
          title="Textarea"
          description="Multi-line text input with consistent Nothing OS styling"
          preview={
            <div className="space-y-4 p-8 max-w-md">
              <Textarea placeholder="Write your message..." rows={4} />
              <Textarea 
                value="This is a read-only textarea with some content that demonstrates the styling and typography."
                readOnly
                rows={3}
              />
              <Textarea placeholder="Disabled textarea" disabled rows={3} />
            </div>
          }
          code={`import { Textarea } from "@/components/ui/textarea";

export default function TextareaExample() {
  return (
    <div className="space-y-4">
      <Textarea placeholder="Write your message..." rows={4} />
      <Textarea 
        value="This is a read-only textarea..."
        readOnly
        rows={3}
      />
      <Textarea placeholder="Disabled textarea" disabled rows={3} />
    </div>
  );
}`}
          />
        </div>

        {/* Contact Form Example */}
        <div id="contact-form">
          <ComponentPreview
          title="Contact Form"
          description="Complete form example with Nothing OS styling"
          preview={
            <div className="p-8 max-w-lg mx-auto">
              <Card className="border-2 border-border/60 bg-background">
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>
                    Send us a message and we&apos;ll get back to you soon.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Subject
                    </label>
                    <Input placeholder="What&apos;s this about?" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us more about your inquiry..."
                      rows={4}
                    />
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1"><span className="font-ndot">Send Message</span></Button>
                    <Button variant="outline" className="flex-1"><span className="font-ndot">Clear</span></Button>
                  </div>
                  
                  <div className="text-center pt-2">
                    <Badge variant="secondary" className="text-xs">
                      <span className="font-ndot">Your data is secure with us</span>
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          }
          code={`import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactFormExample() {
  return (
    <Card className="border-2 border-border/60 bg-background max-w-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Get in Touch</CardTitle>
        <CardDescription>
          Send us a message and we&apos;ll get back to you soon.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">First Name</label>
            <Input placeholder="John" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Last Name</label>
            <Input placeholder="Doe" />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Email Address</label>
          <Input type="email" placeholder="john@example.com" />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Subject</label>
          <Input placeholder="What's this about?" />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Message</label>
          <Textarea 
            placeholder="Tell us more about your inquiry..."
            rows={4}
          />
        </div>
        
        <div className="flex gap-2 pt-4">
          <Button className="flex-1">Send Message</Button>
          <Button variant="outline" className="flex-1">Clear</Button>
        </div>
      </CardContent>
    </Card>
  );
}`}
          />
        </div>

        {/* Nothing Input Examples */}
        <div id="nothing-input">
          <ComponentPreview
          title="Nothing Input"
          description="Input field with Nothing OS design elements, ndot typography, and unique glyph interface"
          preview={
            <div className="space-y-4 p-8 max-w-md">
              <Input variant="nothing" placeholder="Enter your name..." />
              <Input variant="nothing" type="email" placeholder="your@email.com" />
              <Input variant="nothing" type="password" placeholder="Password" />
              <Input variant="nothing" value="Pre-filled content" readOnly />
              <Input variant="nothing" placeholder="Disabled input" disabled />
            </div>
          }
          code={`import { Input } from "@/components/ui/input";

export default function NothingInputExample() {
  return (
    <div className="space-y-4">
      <Input variant="nothing" placeholder="Enter your name..." />
      <Input variant="nothing" type="email" placeholder="your@email.com" />
      <Input variant="nothing" type="password" placeholder="Password" />
      <Input variant="nothing" value="Pre-filled content" readOnly />
      <Input variant="nothing" placeholder="Disabled input" disabled />
    </div>
  );
}`}
          />
        </div>

        {/* Nothing Form Example */}
        <div id="nothing-form">
          <ComponentPreview
          title="Nothing Form"
          description="Complete form example with Nothing OS styling and ndot typography"
          preview={
            <div className="p-8 max-w-lg mx-auto">
              <Card className="border-2 border-border/60 bg-background/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-ndot">Nothing OS Contact</CardTitle>
                  <CardDescription className="font-ndot">
                    Connect with us using Nothing design language
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium font-ndot">
                        First Name
                      </label>
                      <Input variant="nothing" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium font-ndot">
                        Last Name
                      </label>
                      <Input variant="nothing" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-ndot">
                      Email Address
                    </label>
                    <Input variant="nothing" type="email" placeholder="john@nothing.tech" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-ndot">
                      Subject
                    </label>
                    <Input variant="nothing" placeholder="Nothing Phone (2a)" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-ndot">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Share your thoughts about Nothing OS..."
                      rows={4}
                      className="font-ndot"
                    />
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1 font-ndot bg-accent hover:bg-accent/90">
                      Send Message
                    </Button>
                    <Button variant="outline" className="flex-1 font-ndot border-accent/50 hover:border-accent">
                      Clear
                    </Button>
                  </div>
                  
                  <div className="text-center pt-2">
                    <Badge variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/30">
                      <span className="font-ndot">Powered by Nothing OS</span>
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          }
          code={`import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NothingContactFormExample() {
  return (
    <Card className="border-2 border-border/60 bg-background/95 backdrop-blur-sm max-w-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-ndot">Nothing OS Contact</CardTitle>
        <CardDescription className="font-ndot">
          Connect with us using Nothing design language
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium font-ndot">First Name</label>
            <Input variant="nothing" placeholder="John" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium font-ndot">Last Name</label>
            <Input variant="nothing" placeholder="Doe" />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium font-ndot">Email Address</label>
          <Input variant="nothing" type="email" placeholder="john@nothing.tech" />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium font-ndot">Subject</label>
          <Input variant="nothing" placeholder="Nothing Phone (2a)" />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium font-ndot">Message</label>
          <Textarea 
            placeholder="Share your thoughts about Nothing OS..."
            rows={4}
            className="font-ndot"
          />
        </div>
        
        <div className="flex gap-2 pt-4">
          <Button className="flex-1 font-ndot bg-accent hover:bg-accent/90">
            Send Message
          </Button>
          <Button variant="outline" className="flex-1 font-ndot border-accent/50 hover:border-accent">
            Clear
          </Button>
        </div>
        
        <div className="text-center pt-2">
          <Badge variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/30">
            <span className="font-ndot">Powered by Nothing OS</span>
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}`}
          />
        </div>

        {/* All Input Variants */}
        <div id="all-variants">
          <ComponentPreview
          title="All Input Variants"
          description="Comparison of all available input variants including the new Nothing design"
          preview={
            <div className="space-y-6 p-8 max-w-lg">
              <div className="space-y-2">
                <label className="text-sm font-medium">Default</label>
                <Input placeholder="Standard input field" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium font-ndot">Nothing OS</label>
                <Input variant="nothing" placeholder="Nothing-themed input" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium font-mono">Pixel</label>
                <Input variant="pixel" placeholder="Retro pixel input" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium font-mono text-green-400">Terminal</label>
                <Input variant="terminal" placeholder="Terminal-style input" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-accent">Glow</label>
                <Input variant="glow" placeholder="Futuristic glow input" />
              </div>
            </div>
          }
          code={`import { Input } from "@/components/ui/input";

export default function AllInputVariantsExample() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Default</label>
        <Input placeholder="Standard input field" />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium font-ndot">Nothing OS</label>
        <Input variant="nothing" placeholder="Nothing-themed input" />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium font-mono">Pixel</label>
        <Input variant="pixel" placeholder="Retro pixel input" />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium font-mono text-green-400">Terminal</label>
        <Input variant="terminal" placeholder="Terminal-style input" />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-accent">Glow</label>
        <Input variant="glow" placeholder="Futuristic glow input" />
      </div>
    </div>
  );
}`}
          />
        </div>

        {/* Input States */}
        <div id="input-states">
          <ComponentPreview
          title="Input States"
          description="Different states and interactions for input fields"
          preview={
            <div className="space-y-6 p-8 max-w-md">
              <div className="space-y-2">
                <label className="text-sm font-medium">Default State</label>
                <Input placeholder="Click to focus..." />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">With Content</label>
                <Input value="This input has content" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Read Only</label>
                <Input value="This is read-only" readOnly />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Disabled</label>
                <Input placeholder="Disabled input" disabled />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">File Input</label>
                <Input type="file" />
              </div>
            </div>
          }
          code={`import { Input } from "@/components/ui/input";

export default function InputStatesExample() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Default State</label>
        <Input placeholder="Click to focus..." />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">With Content</label>
        <Input value="This input has content" />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">Read Only</label>
        <Input value="This is read-only" readOnly />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">Disabled</label>
        <Input placeholder="Disabled input" disabled />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">File Input</label>
        <Input type="file" />
      </div>
    </div>
  );
}`}
          />
        </div>
      </div>
    </div>
  </ComponentLayout>
  );
}