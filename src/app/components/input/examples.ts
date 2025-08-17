// Code examples for input component documentation
// Extracted to reduce duplication and improve maintainability

export const basicInputCode = `import { Input } from "@/components/ui/input";

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
}`;

export const textareaCode = `import { Textarea } from "@/components/ui/textarea";

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
}`;

export const contactFormCode = `import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactFormExample() {
  return (
    <Card className="border-2 border-border/60 bg-background max-w-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Get in Touch</CardTitle>
        <CardDescription>
          Send us a message and we'll get back to you soon.
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
}`;

export const nothingInputCode = `import { Input } from "@/components/ui/input";

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
}`;

export const nothingFormCode = `import { Input } from "@/components/ui/input";
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
}`;

export const allVariantsCode = `import { Input } from "@/components/ui/input";

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
}`;

export const inputStatesCode = `import { Input } from "@/components/ui/input";

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
}`;