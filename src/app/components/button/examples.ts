export const basicUsageCode = `import { Button } from "@/components/ui/button";

export function ButtonExample() {
  return (
    <div className="flex items-center space-x-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="pixel">Pixel</Button>
    </div>
  );
}`;

export const buttonVariantsCode = `import { Button } from "@/components/ui/button";

export function ButtonVariantsExample() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="pixel">Pixel</Button>
    </div>
  );
}`;

export const buttonSizesCode = `import { Button } from "@/components/ui/button";

export function ButtonSizesExample() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}`;

export const buttonStatesCode = `import { Button } from "@/components/ui/button";

export function ButtonStatesExample() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button disabled>Disabled</Button>
      <Button variant="outline" disabled>Disabled Outline</Button>
    </div>
  );
}`;

export const pixelButtonCode = `import { Button } from "@/components/ui/button";

export function PixelButtonExample() {
  return (
    <div className="flex flex-wrap items-center gap-6 p-8 bg-muted/20 rounded-lg">
      <Button variant="pixel" size="sm">
        <span className="font-ndot">POWER ON</span>
      </Button>
      <Button variant="pixel">
        <span className="font-ndot">START GAME</span>
      </Button>
      <Button variant="pixel" size="lg">
        <span className="font-ndot">CONTINUE</span>
      </Button>
      <Button variant="pixel" disabled>
        <span className="font-ndot">LOCKED</span>
      </Button>
    </div>
  );
}`;