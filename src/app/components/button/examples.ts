export const basicUsageCode = `import { Button } from "@/components/ui/button";

export function ButtonExample() {
  return (
    <div className="w-full max-w-sm sm:max-w-md">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="nothing">Nothing</Button>
        <Button variant="pixel"><span className="font-ndot">Pixel</span></Button>
      </div>
    </div>
  );
}`;

export const buttonVariantsCode = `import { Button } from "@/components/ui/button";

export function ButtonVariantsExample() {
  return (
    <div className="w-full max-w-sm sm:max-w-2xl">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <Button>Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="nothing">Nothing</Button>
        <Button variant="pixel"><span className="font-ndot">Pixel</span></Button>
      </div>
    </div>
  );
}`;

export const buttonSizesCode = `import { Button } from "@/components/ui/button";

export function ButtonSizesExample() {
  return (
    <div className="w-full max-w-sm sm:max-w-md">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  );
}`;

export const buttonStatesCode = `import { Button } from "@/components/ui/button";

export function ButtonStatesExample() {
  return (
    <div className="w-full max-w-sm sm:max-w-md">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <Button disabled aria-label="Disabled default button">Disabled</Button>
        <Button variant="outline" disabled aria-label="Disabled outline button">
          Disabled Outline
        </Button>
        <Button variant="destructive" disabled aria-label="Disabled destructive button">
          Disabled Destructive
        </Button>
      </div>
    </div>
  );
}`;

export const pixelButtonCode = `import { Button } from "@/components/ui/button";

export function PixelButtonExample() {
  return (
    <div className="w-full max-w-sm sm:max-w-2xl">
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-muted/20 rounded-lg">
        <Button variant="pixel" size="sm" className="min-h-[48px]">
          <span className="font-ndot">POWER ON</span>
        </Button>
        <Button variant="pixel" className="min-h-[48px]">
          <span className="font-ndot">START GAME</span>
        </Button>
        <Button variant="pixel" size="lg" className="min-h-[48px]">
          <span className="font-ndot">CONTINUE</span>
        </Button>
        <Button variant="pixel" disabled aria-label="Locked pixel button" className="min-h-[48px]">
          <span className="font-ndot">LOCKED</span>
        </Button>
      </div>
    </div>
  );
}`;

export const nothingButtonCode = `import { Button } from "@/components/ui/button";

export function NothingButtonExample() {
  return (
    <div className="w-full max-w-sm sm:max-w-2xl">
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-muted/20 rounded-lg">
        <Button variant="nothing" size="sm">
          CLOSE
        </Button>
        <Button variant="nothing" className="bg-accent text-accent-foreground border-accent">
          ACTIVATE
        </Button>
        <Button variant="nothing" size="lg">
          SETTINGS
        </Button>
        <Button variant="nothing" disabled aria-label="Disabled nothing button">
          DISABLED
        </Button>
      </div>
    </div>
  );
}`;