export const basicUsageCode = `import { Banner } from "@/components/ui/banner";

export function BasicBannerExample() {
  return (
    <Banner position="static" onDismiss={() => console.log("Dismissed")}>
      🚀 This page is currently in beta. Some features may not work as expected.
    </Banner>
  );
}`;

export const positionsCode = `import { Banner } from "@/components/ui/banner";

export function BannerPositions() {
  return (
    <>
      {/* Top positioned (fixed) */}
      <Banner position="top">
        This banner sticks to the top of the viewport
      </Banner>

      {/* Bottom positioned (fixed) */}
      <Banner position="bottom">
        This banner sticks to the bottom of the viewport
      </Banner>

      {/* Static positioned (inline) */}
      <Banner position="static">
        This banner flows with the content
      </Banner>
    </>
  );
}`;

export const variantsCode = `import { Banner } from "@/components/ui/banner";

export function BannerVariants() {
  return (
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
  );
}`;

export const nothingVariantCode = `import { Banner } from "@/components/ui/banner";

export function NothingBanner() {
  return (
    <Banner variant="nothing" position="static">
      SYSTEM UPDATE • Performance improvements and bug fixes are now available
    </Banner>
  );
}`;

export const pixelVariantCode = `import { Banner } from "@/components/ui/banner";

export function PixelBanner() {
  return (
    <Banner variant="pixel" position="static">
      ACHIEVEMENT UNLOCKED • YOU'VE DISCOVERED THE PIXEL BANNER
    </Banner>
  );
}`;

export const persistentDismissCode = `import { Banner, useBanner } from "@/components/ui/banner";
import { Button } from "@/components/ui/button";

export function PersistentBanner() {
  const { isVisible, dismiss, reset } = useBanner("my-feature-banner");

  return (
    <div className="space-y-4">
      {isVisible && (
        <Banner 
          variant="warning" 
          position="static"
          onDismiss={dismiss}
        >
          This banner remembers when you dismiss it
        </Banner>
      )}
      
      <Button onClick={reset} disabled={isVisible}>
        Reset Banner
      </Button>
    </div>
  );
}`;

export const customContentCode = `import { Banner } from "@/components/ui/banner";

export function CustomContentBanner() {
  return (
    <>
      {/* Banner with link */}
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

      {/* Banner with custom icon and rich content */}
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
    </>
  );
}`;

export const sizesCode = `import { Banner } from "@/components/ui/banner";

export function BannerSizes() {
  return (
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
  );
}`;