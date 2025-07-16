import { ComponentCode } from "@/components/component-code";
import { Badge } from "@/components/ui/badge";

export default function TypographyPage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-12 bg-accent rounded-full" />
          <h1 className="text-5xl font-bold tracking-tight font-ndot">Typography</h1>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          NothingCN uses a carefully curated typography system inspired by Nothing OS design language. 
          Built with modern web fonts and designed for optimal readability and visual hierarchy.
        </p>
      </div>

      {/* Typography Philosophy */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight font-ndot">Typography Philosophy</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            Our typography system emphasizes clarity, hierarchy, and the distinctive Nothing OS aesthetic. 
            We use custom spacing, modern fonts, and purposeful design choices to create interfaces that feel both familiar and unique.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-3 p-6 rounded-2xl border-2 border-border">
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center font-bold text-xl">
              🎯
            </div>
            <h3 className="text-xl font-bold font-ndot">Clarity First</h3>
            <p className="text-muted-foreground font-ndot">
              Every typographic choice prioritizes readability and user comprehension.
            </p>
          </div>
          
          <div className="space-y-3 p-6 rounded-2xl border-2 border-border">
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center font-bold text-xl">
              📐
            </div>
            <h3 className="text-xl font-bold font-ndot">Systematic Scale</h3>
            <p className="text-muted-foreground font-ndot">
              A consistent typographic scale that creates visual harmony across all components.
            </p>
          </div>
          
          <div className="space-y-3 p-6 rounded-2xl border-2 border-border">
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center font-bold text-xl">
              ✨
            </div>
            <h3 className="text-xl font-bold font-ndot">Nothing OS Inspired</h3>
            <p className="text-muted-foreground font-ndot">
              Distinctive aesthetic that captures the essence of Nothing&apos;s design language.
            </p>
          </div>
        </div>
      </div>

      {/* Font Families */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight font-ndot">Font Families</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            NothingCN uses a combination of system fonts and custom fonts to create the distinctive Nothing OS look.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 p-6 rounded-2xl border-2 border-border">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold font-ndot">NDot Font</h3>
              <Badge variant="secondary" className="font-ndot">Primary</Badge>
            </div>
            <p className="text-muted-foreground font-ndot">
              Our primary font family used for headings, labels, and UI elements. 
              Provides the distinctive Nothing OS aesthetic.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">CSS Class:</p>
              <code className="bg-muted px-2 py-1 rounded text-sm">font-ndot</code>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <p className="font-ndot text-2xl">The quick brown fox jumps over the lazy dog</p>
            </div>
          </div>

          <div className="space-y-4 p-6 rounded-2xl border-2 border-border">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold font-ndot">System Font</h3>
              <Badge variant="outline" className="font-ndot">Secondary</Badge>
            </div>
            <p className="text-muted-foreground font-ndot">
              System font stack for body text and general content. 
              Ensures optimal readability across all platforms.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">CSS Class:</p>
              <code className="bg-muted px-2 py-1 rounded text-sm">Default (no class)</code>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <p className="text-2xl">The quick brown fox jumps over the lazy dog</p>
            </div>
          </div>
        </div>
      </div>

      {/* Typography Scale */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight font-ndot">Typography Scale</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            A systematic approach to sizing that creates consistent hierarchy and visual balance.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-1 h-6 bg-accent rounded-full" />
              <h3 className="text-xl font-bold tracking-tight font-ndot">Heading Examples</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed ml-4">
              All heading styles with their corresponding classes and use cases.
            </p>
          </div>
          
          <div className="space-y-6 w-full p-8 rounded-lg border border-border bg-muted/20">
            <div className="space-y-2">
              <h1 className="text-6xl font-bold tracking-tight font-ndot">Heading 1</h1>
              <code className="text-xs text-muted-foreground">text-6xl font-bold tracking-tight font-ndot</code>
            </div>
            <div className="space-y-2">
              <h2 className="text-5xl font-bold tracking-tight font-ndot">Heading 2</h2>
              <code className="text-xs text-muted-foreground">text-5xl font-bold tracking-tight font-ndot</code>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold tracking-tight font-ndot">Heading 3</h3>
              <code className="text-xs text-muted-foreground">text-4xl font-bold tracking-tight font-ndot</code>
            </div>
            <div className="space-y-2">
              <h4 className="text-3xl font-bold tracking-tight font-ndot">Heading 4</h4>
              <code className="text-xs text-muted-foreground">text-3xl font-bold tracking-tight font-ndot</code>
            </div>
            <div className="space-y-2">
              <h5 className="text-2xl font-bold tracking-tight font-ndot">Heading 5</h5>
              <code className="text-xs text-muted-foreground">text-2xl font-bold tracking-tight font-ndot</code>
            </div>
            <div className="space-y-2">
              <h6 className="text-xl font-bold tracking-tight font-ndot">Heading 6</h6>
              <code className="text-xs text-muted-foreground">text-xl font-bold tracking-tight font-ndot</code>
            </div>
          </div>
        </div>

        <ComponentCode
          title="Heading Code"
          description="Copy and paste these heading examples into your project."
          code={`<h1 className="text-6xl font-bold tracking-tight font-ndot">Heading 1</h1>
<h2 className="text-5xl font-bold tracking-tight font-ndot">Heading 2</h2>
<h3 className="text-4xl font-bold tracking-tight font-ndot">Heading 3</h3>
<h4 className="text-3xl font-bold tracking-tight font-ndot">Heading 4</h4>
<h5 className="text-2xl font-bold tracking-tight font-ndot">Heading 5</h5>
<h6 className="text-xl font-bold tracking-tight font-ndot">Heading 6</h6>`}
          previewLines={6}
        />
      </div>

      {/* Body Text */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight font-ndot">Body Text</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            Body text styles for different contexts and emphasis levels.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-1 h-6 bg-accent rounded-full" />
              <h3 className="text-xl font-bold tracking-tight font-ndot">Body Text Examples</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed ml-4">
              Different body text styles and their use cases.
            </p>
          </div>
          
          <div className="space-y-6 w-full p-8 rounded-lg border border-border bg-muted/20">
            <div className="space-y-2">
              <p className="text-xl leading-relaxed">
                Large body text - Used for introductions and important descriptions. 
                Provides excellent readability for key content.
              </p>
              <code className="text-xs text-muted-foreground">text-xl leading-relaxed</code>
            </div>
            <div className="space-y-2">
              <p className="text-lg leading-relaxed">
                Medium body text - Standard size for most content. 
                Balanced readability and space efficiency.
              </p>
              <code className="text-xs text-muted-foreground">text-lg leading-relaxed</code>
            </div>
            <div className="space-y-2">
              <p className="text-base leading-relaxed">
                Base body text - Default size for general content. 
                Optimal for long-form reading experiences.
              </p>
              <code className="text-xs text-muted-foreground">text-base leading-relaxed</code>
            </div>
            <div className="space-y-2">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Small body text - Used for captions, labels, and secondary information. 
                Maintains readability while conserving space.
              </p>
              <code className="text-xs text-muted-foreground">text-sm leading-relaxed text-muted-foreground</code>
            </div>
            <div className="space-y-2">
              <p className="text-xs leading-relaxed text-muted-foreground">
                Extra small text - Perfect for metadata, timestamps, and fine print.
              </p>
              <code className="text-xs text-muted-foreground">text-xs leading-relaxed text-muted-foreground</code>
            </div>
          </div>
        </div>

        <ComponentCode
          title="Body Text Code"
          description="Copy and paste these body text examples into your project."
          code={`<p className="text-xl leading-relaxed">Large body text</p>
<p className="text-lg leading-relaxed">Medium body text</p>
<p className="text-base leading-relaxed">Base body text</p>
<p className="text-sm leading-relaxed text-muted-foreground">Small body text</p>
<p className="text-xs leading-relaxed text-muted-foreground">Extra small text</p>`}
          previewLines={5}
        />
      </div>

      {/* Text Emphasis */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight font-ndot">Text Emphasis</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            Various ways to emphasize text and create visual hierarchy.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-1 h-6 bg-accent rounded-full" />
              <h3 className="text-xl font-bold tracking-tight font-ndot">Text Emphasis Examples</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed ml-4">
              Different emphasis styles and their semantic meanings.
            </p>
          </div>
          
          <div className="space-y-4 w-full p-8 rounded-lg border border-border bg-muted/20">
            <p className="text-base leading-relaxed">
              This is regular text with <strong className="font-semibold">bold emphasis</strong> and <em className="italic">italic emphasis</em>.
            </p>
            <p className="text-base leading-relaxed">
              Text with <span className="text-accent font-medium">accent color</span> and <span className="text-muted-foreground">muted color</span>.
            </p>
            <p className="text-base leading-relaxed">
              <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent font-semibold">
                Gradient text effect
              </span> for special emphasis.
            </p>
            <p className="text-base leading-relaxed">
              Code elements like <code className="bg-muted px-2 py-1 rounded text-sm font-mono">className=&quot;text-base&quot;</code> inline.
            </p>
          </div>
        </div>

        <ComponentCode
          title="Text Emphasis Code"
          description="Copy and paste these text emphasis examples into your project."
          code={`<p>Regular text with <strong className="font-semibold">bold emphasis</strong></p>
<p>Text with <span className="text-accent font-medium">accent color</span></p>
<p>
  <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent font-semibold">
    Gradient text effect
  </span>
</p>
<p>Code: <code className="bg-muted px-2 py-1 rounded text-sm font-mono">className</code></p>`}
          previewLines={4}
        />
      </div>

      {/* Lists */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight font-ndot">Lists</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            Styled lists for organizing information clearly and effectively.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-1 h-6 bg-accent rounded-full" />
              <h3 className="text-xl font-bold tracking-tight font-ndot">List Examples</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed ml-4">
              Different list styles and their use cases.
            </p>
          </div>
          
          <div className="space-y-6 w-full p-8 rounded-lg border border-border bg-muted/20">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold font-ndot">Unordered List</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>First item with important information</li>
                <li>Second item with additional details</li>
                <li>Third item completing the list</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold font-ndot">Ordered List</h4>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>First step in the process</li>
                <li>Second step to follow</li>
                <li>Final step to complete</li>
              </ol>
            </div>
          </div>
        </div>

        <ComponentCode
          title="List Code"
          description="Copy and paste these list examples into your project."
          code={`<ul className="list-disc pl-6 space-y-2 text-muted-foreground">
  <li>First item with important information</li>
  <li>Second item with additional details</li>
  <li>Third item completing the list</li>
</ul>

<ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
  <li>First step in the process</li>
  <li>Second step to follow</li>
  <li>Final step to complete</li>
</ol>`}
          previewLines={6}
        />
      </div>

      {/* Best Practices */}
      <div className="space-y-6 border-t border-border pt-12">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl font-bold tracking-tight font-ndot">Best Practices</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed ml-4">
            Guidelines for using typography effectively in your NothingCN projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 p-6 rounded-2xl border-2 border-green-500/20 bg-green-500/5">
            <h3 className="text-lg font-bold text-green-600 font-ndot">✓ Do</h3>
            <ul className="space-y-2 text-sm text-muted-foreground font-ndot">
              <li>• Use font-ndot for headings and UI elements</li>
              <li>• Maintain consistent spacing with leading-relaxed</li>
              <li>• Use semantic HTML elements (h1, h2, p, etc.)</li>
              <li>• Apply text-muted-foreground for secondary text</li>
              <li>• Use tracking-tight for headings</li>
            </ul>
          </div>

          <div className="space-y-4 p-6 rounded-2xl border-2 border-red-500/20 bg-red-500/5">
            <h3 className="text-lg font-bold text-red-600 font-ndot">✗ Don&apos;t</h3>
            <ul className="space-y-2 text-sm text-muted-foreground font-ndot">
              <li>• Mix too many font weights in one section</li>
              <li>• Use font-ndot for long-form body text</li>
              <li>• Forget to consider accessibility and contrast</li>
              <li>• Override the systematic scale arbitrarily</li>
              <li>• Use too many emphasis styles together</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}