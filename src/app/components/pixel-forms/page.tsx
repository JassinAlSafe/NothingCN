"use client";

import { ComponentPreview } from "@/components/component-preview";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PixelFormsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold font-ndot tracking-wide">Pixel Forms</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          8-bit inspired form components with pixel-perfect styling, monospace typography, and retro gaming aesthetics. 
          Perfect for creating immersive, nostalgic user interfaces.
        </p>
      </div>

      <div className="space-y-8">
        {/* Pixel Input Examples */}
        <ComponentPreview
          title="Pixel Input Field"
          description="8-bit styled input with pixel-perfect corners and shadow effects"
          preview={
            <div className="space-y-4 p-8 max-w-md">
              <Input 
                variant="pixel" 
                placeholder="Enter your username..."
                className="font-mono"
              />
              <Input 
                variant="pixel" 
                type="email"
                placeholder="email@example.com"
                value="player@retro.game"
                readOnly
              />
              <Input 
                variant="pixel" 
                type="password"
                placeholder="••••••••"
                disabled
              />
            </div>
          }
          code={`import { Input } from "@/components/ui/input";

export default function PixelInputExample() {
  return (
    <div className="space-y-4">
      <Input 
        variant="pixel" 
        placeholder="Enter your username..."
      />
      <Input 
        variant="pixel" 
        type="email"
        placeholder="email@example.com"
      />
      <Input 
        variant="pixel" 
        type="password"
        placeholder="••••••••"
        disabled
      />
    </div>
  );
}`}
        />

        {/* Pixel Textarea Examples */}
        <ComponentPreview
          title="Pixel Textarea"
          description="Multi-line text input with pixel-art borders and gaming aesthetics"
          preview={
            <div className="space-y-4 p-8 max-w-md">
              <Textarea 
                variant="pixel"
                placeholder="Write your gaming strategy..."
                rows={4}
              />
              <Textarea 
                variant="pixel"
                value="Achievement unlocked!&#10;You have discovered the secret level.&#10;&#10;Press START to continue..."
                readOnly
                rows={4}
              />
            </div>
          }
          code={`import { Textarea } from "@/components/ui/textarea";

export default function PixelTextareaExample() {
  return (
    <div className="space-y-4">
      <Textarea 
        variant="pixel"
        placeholder="Write your gaming strategy..."
        rows={4}
      />
      <Textarea 
        variant="pixel"
        value="Achievement unlocked!
You have discovered the secret level.

Press START to continue..."
        readOnly
        rows={4}
      />
    </div>
  );
}`}
        />

        {/* Terminal Variant Examples */}
        <ComponentPreview
          title="Terminal Style Forms"
          description="Retro terminal aesthetic with green text and scan line effects"
          preview={
            <div className="space-y-4 p-8 max-w-md bg-black rounded-lg">
              <Input 
                variant="terminal"
                placeholder="root@nothingcn:~$ "
                className="font-mono"
              />
              <Textarea 
                variant="terminal"
                placeholder="Enter command or message..."
                rows={4}
                defaultValue="SYSTEM STATUS: ONLINE&#10;LAST LOGIN: 2087-03-14 15:42:33&#10;NETWORK: CONNECTED&#10;> _"
              />
              <Button variant="pixel" className="w-full bg-green-600 hover:bg-green-500 text-black font-mono">
                EXECUTE
              </Button>
            </div>
          }
          code={`import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function TerminalExample() {
  return (
    <div className="space-y-4 bg-black p-8 rounded-lg">
      <Input 
        variant="terminal"
        placeholder="root@nothingcn:~$ "
      />
      <Textarea 
        variant="terminal"
        placeholder="Enter command or message..."
        rows={4}
      />
      <Button variant="pixel" className="w-full bg-green-600 hover:bg-green-500 text-black">
        EXECUTE
      </Button>
    </div>
  );
}`}
        />

        {/* Gaming Form Example */}
        <ComponentPreview
          title="Complete Gaming Form"
          description="Full form example with pixel styling and gaming interface elements"
          preview={
            <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg">
              <Card className="border-2 border-accent/30 bg-background/95 backdrop-blur">
                <CardHeader className="text-center">
                  <CardTitle className="font-ndot text-2xl text-accent">
                    PLAYER REGISTRATION
                  </CardTitle>
                  <CardDescription className="font-mono text-sm">
                    Join the retro gaming community
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-mono font-bold text-accent">
                        USERNAME
                      </label>
                      <Input 
                        variant="pixel" 
                        placeholder="PLAYER_001"
                        maxLength={12}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-mono font-bold text-accent">
                        LEVEL
                      </label>
                      <Input 
                        variant="pixel" 
                        type="number"
                        placeholder="42"
                        min="1"
                        max="100"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-mono font-bold text-accent">
                      EMAIL ADDRESS
                    </label>
                    <Input 
                      variant="pixel" 
                      type="email"
                      placeholder="player@retro.game"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-mono font-bold text-accent">
                      BIO / ACHIEVEMENTS
                    </label>
                    <Textarea 
                      variant="pixel"
                      placeholder="Describe your gaming achievements..."
                      rows={3}
                    />
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button variant="pixel" className="flex-1">
                      REGISTER
                    </Button>
                    <Button variant="outline" className="flex-1">
                      CANCEL
                    </Button>
                  </div>
                  
                  <div className="text-center pt-2">
                    <Badge variant="secondary" className="font-mono text-xs">
                      SECURE CONNECTION
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

export default function GamingFormExample() {
  return (
    <Card className="border-2 border-accent/30 bg-background/95">
      <CardHeader className="text-center">
        <CardTitle className="font-ndot text-2xl text-accent">
          PLAYER REGISTRATION
        </CardTitle>
        <CardDescription className="font-mono text-sm">
          Join the retro gaming community
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-mono font-bold text-accent">
              USERNAME
            </label>
            <Input variant="pixel" placeholder="PLAYER_001" maxLength={12} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-mono font-bold text-accent">
              LEVEL
            </label>
            <Input variant="pixel" type="number" placeholder="42" min="1" max="100" />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-mono font-bold text-accent">
            EMAIL ADDRESS
          </label>
          <Input variant="pixel" type="email" placeholder="player@retro.game" />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-mono font-bold text-accent">
            BIO / ACHIEVEMENTS
          </label>
          <Textarea 
            variant="pixel"
            placeholder="Describe your gaming achievements..."
            rows={3}
          />
        </div>
        
        <div className="flex gap-2 pt-4">
          <Button variant="pixel" className="flex-1">REGISTER</Button>
          <Button variant="outline" className="flex-1">CANCEL</Button>
        </div>
        
        <div className="text-center pt-2">
          <Badge variant="secondary" className="font-mono text-xs">
            SECURE CONNECTION
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}`}
        />

        {/* Glow Variant Example */}
        <ComponentPreview
          title="Glow Style Forms"
          description="Dramatic lighting effects with animated gradients and neon aesthetics"
          preview={
            <div className="space-y-4 p-8 max-w-md bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 rounded-lg">
              <Input 
                variant="glow"
                placeholder="Enter your cyber handle..."
                className="font-medium"
              />
              <Textarea 
                variant="glow"
                placeholder="Describe your digital realm..."
                rows={4}
                defaultValue="Welcome to the matrix...
The future is now.

> System online"
              />
              <Button variant="pixel" className="w-full bg-accent hover:bg-accent/80 text-black font-bold">
                INITIALIZE
              </Button>
            </div>
          }
          code={`import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function GlowExample() {
  return (
    <div className="space-y-4 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 p-8 rounded-lg">
      <Input 
        variant="glow"
        placeholder="Enter your cyber handle..."
      />
      <Textarea 
        variant="glow"
        placeholder="Describe your digital realm..."
        rows={4}
      />
      <Button variant="pixel" className="w-full bg-accent hover:bg-accent/80 text-black">
        INITIALIZE
      </Button>
    </div>
  );
}`}
        />

        {/* Pixel Sizes Example */}
        <ComponentPreview
          title="Pixel Size Variants"
          description="Different pixel corner sizes for various design needs"
          preview={
            <div className="space-y-6 p-8">
              <div className="space-y-2">
                <label className="text-sm font-mono font-bold">Small Pixels</label>
                <Input 
                  variant="pixel" 
                  pixelSize="sm"
                  placeholder="Fine detail pixel corners"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-mono font-bold">Medium Pixels (Default)</label>
                <Input 
                  variant="pixel" 
                  pixelSize="md"
                  placeholder="Standard pixel corners"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-mono font-bold">Large Pixels</label>
                <Input 
                  variant="pixel" 
                  pixelSize="lg"
                  placeholder="Bold pixel corners"
                />
              </div>
            </div>
          }
          code={`import { Input } from "@/components/ui/input";

export default function PixelSizesExample() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-mono font-bold">Small Pixels</label>
        <Input 
          variant="pixel" 
          pixelSize="sm"
          placeholder="Fine detail pixel corners"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-mono font-bold">Medium Pixels (Default)</label>
        <Input 
          variant="pixel" 
          pixelSize="md"
          placeholder="Standard pixel corners"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-mono font-bold">Large Pixels</label>
        <Input 
          variant="pixel" 
          pixelSize="lg"
          placeholder="Bold pixel corners"
        />
      </div>
    </div>
  );
}`}
        />
      </div>

      {/* Features Section */}
      <div className="mt-8 p-6 bg-muted/50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">✨ Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <ul className="space-y-2">
            <li>• **Pixel-perfect corners** for authentic 8-bit aesthetics</li>
            <li>• **Monospace typography** for retro gaming feel</li>
            <li>• **Shadow effects** similar to pixel button styling</li>
            <li>• **Focus states** with accent color highlights</li>
            <li>• **Interactive animations** on hover and focus</li>
          </ul>
          <ul className="space-y-2">
            <li>• **Terminal variant** with scan line effects</li>
            <li>• **Glow variant** with dramatic lighting and neon aesthetics</li>
            <li>• **Configurable pixel sizes** (sm, md, lg)</li>
            <li>• **Content-aware styling** (text color changes)</li>
            <li>• **Accessibility support** with proper focus management</li>
            <li>• **Consistent with design system** theme integration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}