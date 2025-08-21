"use client";

import { Banner, useBanner } from "@/components/ui/banner";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentCode } from "@/components/component-code";
import { ComponentLayout } from "@/components/component-layout";
import { InstallationTabs } from "@/components/installation-tabs";
import { getComponentNavigation } from "@/lib/component-navigation";
import { Button } from "@/components/ui/button";
import { 
  basicUsageCode, 
  positionsCode,
  variantsCode,
  nothingVariantCode,
  pixelVariantCode,
  persistentDismissCode,
  customContentCode,
  sizesCode
} from "./examples";
import { bannerSourceCode } from "./source";

const sections = [
  { id: "installation", title: "Installation" },
  { id: "usage", title: "Usage" },
  { id: "basic-usage", title: "Basic Usage" },
  { id: "variants", title: "Variants" },
  { id: "nothing-variant", title: "Nothing Variant" },
  { id: "pixel-variant", title: "Pixel Variant" },
  { id: "positions", title: "Positions" },
  { id: "sizes", title: "Sizes" },
  { id: "persistent-dismiss", title: "Persistent Dismiss" },
  { id: "custom-content", title: "Custom Content" },
  { id: "component-source", title: "Component Source" },
];

const { previous, next } = getComponentNavigation("/components/banner");

export default function BannerPage() {
  const betaBanner = useBanner("beta-demo");

  return (
    <ComponentLayout sections={sections} previous={previous} next={next}>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="space-y-3 border-b border-border pb-6">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-12 bg-accent rounded-full" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-ndot">
              Banner
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Flexible notification banners with Nothing OS-inspired design. Perfect for announcements, 
            warnings, and system messages with persistent dismiss functionality.
          </p>
        </div>

        {/* Installation Section */}
        <InstallationTabs
          cliCommand="npx nothingcn@latest add banner"
          manualSteps={[
            {
              title: "Install dependencies",
              description: "Install required dependencies for the banner component.",
              code: "npm install class-variance-authority lucide-react",
            },
            {
              title: "Copy and paste the component source",
              description: "Create a new file at src/components/ui/banner.tsx and paste the component code.",
              code: bannerSourceCode,
            },
          ]}
        />

        {/* Usage Section */}
        <div id="usage" className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight font-ndot">Usage</h2>
          <div className="space-y-2">
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
              <code>{`import { Banner, useBanner } from "@/components/ui/banner"`}</code>
            </pre>
          </div>
        </div>

        {/* Basic Usage */}
        <div id="basic-usage">
          <ComponentPreview
            title="Basic Usage"
            description="Simple banner with default styling and dismiss functionality."
            preview={
              <div className="relative">
                <Banner position="static" onDismiss={() => console.log("Dismissed")}>
                  🚀 This page is currently in beta. Some features may not work as expected.
                </Banner>
              </div>
            }
            code={basicUsageCode}
          />
        </div>

        {/* Variants */}
        <div id="variants">
          <ComponentPreview
            title="Variants"
            description="Different banner variants for various use cases."
            preview={
              <div className="space-y-4">
                <Banner variant="default" position="static">
                  Default banner with accent colors
                </Banner>
                <Banner variant="info" position="static">
                  Information banner for general notices
                </Banner>
                <Banner variant="success" position="static">
                  Success banner for positive feedback
                </Banner>
                <Banner variant="warning" position="static">
                  Warning banner for important notices
                </Banner>
                <Banner variant="destructive" position="static">
                  Destructive banner for errors or critical alerts
                </Banner>
              </div>
            }
            code={variantsCode}
          />
        </div>

        {/* Nothing Variant */}
        <div id="nothing-variant">
          <ComponentPreview
            title="Nothing Variant"
            description="Premium Nothing OS design with dot matrix patterns and geometric indicators."
            preview={
              <div className="relative">
                <Banner variant="nothing" position="static">
                  SYSTEM UPDATE • Performance improvements and bug fixes are now available
                </Banner>
              </div>
            }
            code={nothingVariantCode}
          />
        </div>

        {/* Pixel Variant */}
        <div id="pixel-variant">
          <ComponentPreview
            title="Pixel Variant"
            description="Retro gaming style with pixel borders and bold typography."
            preview={
              <div className="relative">
                <Banner variant="pixel" position="static">
                  ACHIEVEMENT UNLOCKED • YOU&apos;VE DISCOVERED THE PIXEL BANNER
                </Banner>
              </div>
            }
            code={pixelVariantCode}
          />
        </div>

        {/* Positions */}
        <div id="positions">
          <ComponentPreview
            title="Positions"
            description="Banners can be positioned at the top, bottom, or inline with content."
            preview={
              <div className="space-y-4">
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-sm text-muted-foreground mb-4">
                    Static position (inline with content):
                  </p>
                  <Banner variant="info" position="static">
                    This banner is positioned inline with the content
                  </Banner>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-sm text-muted-foreground mb-4">
                    Fixed positions are demonstrated in the examples (top/bottom of viewport)
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        const div = document.createElement("div");
                        div.innerHTML = `<div class="fixed top-0 left-0 right-0 z-[60] bg-accent text-accent-foreground px-4 py-3">Top positioned banner (demo)</div>`;
                        document.body.appendChild(div.firstElementChild as HTMLElement);
                        setTimeout(() => {
                          document.querySelector(".fixed.top-0")?.remove();
                        }, 3000);
                      }}
                    >
                      Show Top Banner (3s)
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        const div = document.createElement("div");
                        div.innerHTML = `<div class="fixed bottom-0 left-0 right-0 z-[60] bg-accent text-accent-foreground px-4 py-3">Bottom positioned banner (demo)</div>`;
                        document.body.appendChild(div.firstElementChild as HTMLElement);
                        setTimeout(() => {
                          document.querySelector(".fixed.bottom-0")?.remove();
                        }, 3000);
                      }}
                    >
                      Show Bottom Banner (3s)
                    </Button>
                  </div>
                </div>
              </div>
            }
            code={positionsCode}
          />
        </div>

        {/* Sizes */}
        <div id="sizes">
          <ComponentPreview
            title="Sizes"
            description="Different banner sizes for various content needs."
            preview={
              <div className="space-y-4">
                <Banner variant="info" position="static" size="sm">
                  Small banner with compact padding
                </Banner>
                <Banner variant="info" position="static" size="default">
                  Default banner with standard padding
                </Banner>
                <Banner variant="info" position="static" size="lg">
                  Large banner with generous padding
                </Banner>
              </div>
            }
            code={sizesCode}
          />
        </div>

        {/* Persistent Dismiss */}
        <div id="persistent-dismiss">
          <ComponentPreview
            title="Persistent Dismiss"
            description="Use the useBanner hook to persist dismiss state in localStorage."
            preview={
              <div className="space-y-4">
                {betaBanner.isVisible && (
                  <Banner 
                    variant="warning" 
                    position="static"
                    onDismiss={betaBanner.dismiss}
                  >
                    This banner remembers when you dismiss it (stored in localStorage)
                  </Banner>
                )}
                <Button 
                  variant="outline" 
                  onClick={betaBanner.reset}
                  disabled={betaBanner.isVisible}
                >
                  Reset Banner
                </Button>
              </div>
            }
            code={persistentDismissCode}
          />
        </div>

        {/* Custom Content */}
        <div id="custom-content">
          <ComponentPreview
            title="Custom Content"
            description="Banners can contain rich content including links and custom icons."
            preview={
              <div className="space-y-4">
                <Banner variant="nothing" position="static" dismissible={false}>
                  <div className="flex items-center justify-between w-full">
                    <span>🎉 New components added this week!</span>
                    <a 
                      href="/components" 
                      className="text-accent-foreground underline underline-offset-4 hover:no-underline font-semibold"
                    >
                      Explore Now →
                    </a>
                  </div>
                </Banner>
                <Banner 
                  variant="success" 
                  position="static"
                  icon={<span className="text-xl">🚀</span>}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold">Launch Week is Here!</span>
                    <span className="text-sm opacity-90">
                      Join us for exciting announcements and live demos.
                    </span>
                  </div>
                </Banner>
              </div>
            }
            code={customContentCode}
          />
        </div>

        {/* Component Source */}
        <div id="component-source">
          <ComponentCode
            title="Component Source"
            description="Copy and paste the following code into your project."
            code={bannerSourceCode}
          />
        </div>
      </div>
    </ComponentLayout>
  );
}