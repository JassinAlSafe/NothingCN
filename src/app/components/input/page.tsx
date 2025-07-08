"use client";

import { ComponentPreview } from "@/components/component-preview";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function InputPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold font-ndot tracking-wide">Input & Textarea</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Clean, minimal form components inspired by Nothing OS design philosophy. 
          Subtle interactions, refined aesthetics, and excellent usability.
        </p>
      </div>

      <div className="space-y-8">
        {/* Basic Input Examples */}
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

        {/* Textarea Examples */}
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

        {/* Contact Form Example */}
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

        {/* Input States */}
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

      {/* Design Philosophy */}
      <div className="mt-8 p-6 bg-muted/50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 font-ndot">🎨 Nothing OS Design Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <ul className="space-y-2">
            <li>• **Subtle interactions** - Gentle focus states and hover effects</li>
            <li>• **Clean typography** - Readable, well-spaced text</li>
            <li>• **Minimal borders** - Soft, translucent borders that don&apos;t overwhelm</li>
            <li>• **Consistent spacing** - Harmonious padding and margins</li>
            <li>• **Smooth transitions** - 200ms duration for all state changes</li>
          </ul>
          <ul className="space-y-2">
            <li>• **Content-aware styling** - Border colors adapt to content state</li>
            <li>• **Accessibility first** - Proper focus management and contrast</li>
            <li>• **Professional appearance** - Suitable for business applications</li>
            <li>• **Theme integration** - Seamless dark/light mode support</li>
            <li>• **Performance optimized** - Lightweight and fast interactions</li>
          </ul>
        </div>
      </div>

      {/* When to Use */}
      <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200 font-ndot">
          🎯 When to Use Normal vs Pixel Components
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Use Normal Components For:</h3>
            <ul className="space-y-1 text-blue-600 dark:text-blue-400">
              <li>• Business applications and professional interfaces</li>
              <li>• Forms requiring user data input</li>
              <li>• Documentation and content management</li>
              <li>• Settings and configuration pages</li>
              <li>• When you need subtle, non-distracting inputs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Use Creative Components For:</h3>
            <ul className="space-y-1 text-blue-600 dark:text-blue-400">
              <li>• Gaming interfaces and retro applications</li>
              <li>• Creative projects and portfolio sites</li>
              <li>• Terminal/command-line inspired interfaces</li>
              <li>• Modern cyberpunk and futuristic designs</li>
              <li>• When you want to make a bold visual statement</li>
              <li>• Entertainment and interactive experiences</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}