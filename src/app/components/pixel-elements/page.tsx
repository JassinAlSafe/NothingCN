"use client";

import { ComponentPreview } from "@/components/component-preview";
import { NothingProgress } from "@/components/ui/nothing-progress";
import { NothingDotMatrix } from "@/components/ui/nothing-dot-matrix";
import { PixelLoader } from "@/components/ui/pixel-loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PixelElementsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold font-ndot tracking-wide">Nothing Elements</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Authentic Nothing OS elements with strategic use of dot matrix typography.
          The <span className="font-ndot">font-ndot</span> creates that distinctive Nothing OS feel for data displays.
        </p>
      </div>

      <div className="space-y-8">
        {/* Nothing Progress Bars */}
        <ComponentPreview
          title="Nothing Progress"
          description="Clean, minimal progress indicators with subtle Nothing OS aesthetics"
          preview={
            <div className="space-y-6 p-8 max-w-md">
              <div className="space-y-2">
                <label className="text-sm font-medium">Component Progress</label>
                <NothingProgress value={75} variant="minimal" showValue />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Loading Assets</label>
                <NothingProgress value={45} variant="dotted" size="lg" showValue />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Installation</label>
                <NothingProgress value={90} variant="segmented" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Build Status</label>
                <NothingProgress value={100} variant="dotted" size="sm" />
              </div>
            </div>
          }
          code={`import { NothingProgress } from "@/components/ui/nothing-progress";

export default function ProgressExample() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Component Progress</label>
        <NothingProgress value={75} variant="minimal" showValue />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">Loading Assets</label>
        <NothingProgress value={45} variant="dotted" size="lg" showValue />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">Installation</label>
        <NothingProgress value={90} variant="segmented" />
      </div>
    </div>
  );
}`}
        />

        {/* Pixel Loaders */}
        <ComponentPreview
          title="Pixel Loaders"
          description="Authentic 8-bit loading animations for different use cases"
          preview={
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
              <div className="flex flex-col items-center space-y-3">
                <PixelLoader variant="dots" color="green" size="lg" />
                <span className="text-xs">Dots</span>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <PixelLoader variant="bars" color="blue" size="lg" />
                <span className="text-xs">Bars</span>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <PixelLoader variant="blocks" color="purple" size="lg" />
                <span className="text-xs">Blocks</span>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <PixelLoader variant="spinner" color="red" size="lg" />
                <span className="text-xs">Spinner</span>
              </div>
            </div>
          }
          code={`import { PixelLoader } from "@/components/ui/pixel-loader";

export default function LoaderExample() {
  return (
    <div className="grid grid-cols-4 gap-8">
      <div className="flex flex-col items-center space-y-3">
        <PixelLoader variant="dots" color="green" size="lg" />
        <span className="text-xs font-mono">Dots</span>
      </div>
      
      <div className="flex flex-col items-center space-y-3">
        <PixelLoader variant="bars" color="blue" size="lg" />
        <span className="text-xs font-mono">Bars</span>
      </div>
      
      <div className="flex flex-col items-center space-y-3">
        <PixelLoader variant="blocks" color="purple" size="lg" />
        <span className="text-xs font-mono">Blocks</span>
      </div>
      
      <div className="flex flex-col items-center space-y-3">
        <PixelLoader variant="spinner" color="red" size="lg" />
        <span className="text-xs font-mono">Spinner</span>
      </div>
    </div>
  );
}`}
        />

        {/* Nothing Dot Matrix Backgrounds */}
        <ComponentPreview
          title="Nothing Dot Matrix"
          description="Subtle dot patterns that add texture without overwhelming the interface"
          preview={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
              <NothingDotMatrix size="sm" opacity="medium" className="p-6 border border-border rounded-lg">
                <Card>
                  <CardHeader>
                    <CardTitle>System Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">CPU</span>
                        <Badge variant="green"><span className="font-ndot">Online</span></Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Memory</span>
                        <Badge variant="green"><span className="font-ndot">Online</span></Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Network</span>
                        <Badge variant="red"><span className="font-ndot">Error</span></Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </NothingDotMatrix>
              
              <NothingDotMatrix size="md" opacity="subtle" animated className="p-6 border border-border rounded-lg">
                <Card>
                  <CardHeader>
                    <CardTitle>Loading...</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <NothingProgress value={67} variant="minimal" />
                    <div className="flex items-center space-x-2">
                      <PixelLoader variant="dots" size="sm" />
                      <span className="text-sm font-ndot">Initializing systems...</span>
                    </div>
                  </CardContent>
                </Card>
              </NothingDotMatrix>
            </div>
          }
          code={`import { NothingDotMatrix } from "@/components/ui/nothing-dot-matrix";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DotMatrixExample() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <NothingDotMatrix size="sm" opacity="medium" className="p-6 border rounded-lg">
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Content here */}
          </CardContent>
        </Card>
      </NothingDotMatrix>
      
      <NothingDotMatrix size="md" opacity="subtle" animated className="p-6 border rounded-lg">
        <Card>
          <CardHeader>
            <CardTitle>Loading...</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <NothingProgress value={67} variant="minimal" />
          </CardContent>
        </Card>
      </NothingDotMatrix>
    </div>
  );
}`}
        />

        {/* Nothing Dashboard Example */}
        <ComponentPreview
          title="Nothing Dashboard"
          description="Clean interface combining Nothing elements with minimal aesthetics"
          preview={
            <NothingDotMatrix size="md" opacity="subtle" animated className="p-8 bg-muted/20 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Project Status</h2>
                  <PixelLoader variant="dots" size="sm" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Build Progress</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Components</span>
                          <span className="font-ndot">8/10</span>
                        </div>
                        <NothingProgress value={80} variant="segmented" size="sm" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Documentation</span>
                          <span className="font-ndot">6/10</span>
                        </div>
                        <NothingProgress value={60} variant="dotted" size="sm" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Testing</span>
                          <span className="font-ndot">9/10</span>
                        </div>
                        <NothingProgress value={90} variant="minimal" size="sm" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>System Status</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Build</span>
                          <Badge variant="green"><span className="font-ndot">Success</span></Badge>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Deploy</span>
                          <div className="flex items-center space-x-2">
                            <PixelLoader variant="bars" size="sm" />
                            <Badge variant="yellow"><span className="font-ndot">Deploying</span></Badge>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Tests</span>
                          <Badge variant="green"><span className="font-ndot">Passing</span></Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </NothingDotMatrix>
          }
          code={`import { NothingDotMatrix } from "@/components/ui/nothing-dot-matrix";
import { NothingProgress } from "@/components/ui/nothing-progress";
import { PixelLoader } from "@/components/ui/pixel-loader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NothingDashboard() {
  return (
    <NothingDotMatrix size="md" opacity="subtle" animated className="p-8 bg-muted/20 rounded-lg">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Project Status</h2>
          <PixelLoader variant="dots" size="sm" />
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Build Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Components</span>
                  <span>8/10</span>
                </div>
                <NothingProgress value={80} variant="segmented" size="sm" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Documentation</span>
                  <span>6/10</span>
                </div>
                <NothingProgress value={60} variant="dotted" size="sm" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm">Build</span>
                <Badge variant="green">Success</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </NothingDotMatrix>
  );
}`}
        />
      </div>

      {/* Integration Ideas */}
      <div className="mt-8 p-6 bg-muted/50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">🎮 Integration Ideas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Navigation & UI</h3>
            <ul className="space-y-2 text-sm">
              <li>• **Sidebar Progress** - Use PixelProgress for component completion</li>
              <li>• **Loading States** - PixelLoader for page transitions</li>
              <li>• **Scroll Indicators** - Pixel progress for page scroll</li>
              <li>• **Menu Animations** - 8-bit hover effects</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Content Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>• **Code Blocks** - PixelGrid background for terminal feel</li>
              <li>• **Component Previews** - Retro borders and grids</li>
              <li>• **GitHub Stats** - Pixel progress bars for contributions</li>
              <li>• **Error Pages** - Full 8-bit themed 404 pages</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}