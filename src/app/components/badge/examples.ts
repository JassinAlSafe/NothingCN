export const badgeCode = `import { Badge } from "@/components/ui/badge";

export function BadgeExample() {
  return (
    <div className="flex items-center space-x-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  );
}`;

export const colorBadgesCode = `import { Badge } from "@/components/ui/badge";

export function ColorBadgesExample() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Badge variant="nothing">Nothing OS</Badge>
      <Badge variant="red">Red</Badge>
      <Badge variant="green">Green</Badge>
      <Badge variant="blue">Blue</Badge>
      <Badge variant="purple">Purple</Badge>
      <Badge variant="orange">Orange</Badge>
      <Badge variant="yellow">Yellow</Badge>
    </div>
  );
}`;

export const badgesWithDotsCode = `import { Badge } from "@/components/ui/badge";

export function BadgesWithDotsExample() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Badge dot dotColor="red" variant="nothing">Newsroom</Badge>
      <Badge dot dotColor="blue" variant="nothing">Phone Series</Badge>
      <Badge dot dotColor="green" variant="nothing">Ear Series</Badge>
      <Badge dot dotColor="purple" variant="nothing">Community</Badge>
      <Badge dot dotColor="orange" variant="nothing">Updates</Badge>
    </div>
  );
}`;

export const badgeSizesCode = `import { Badge } from "@/components/ui/badge";

export function BadgeSizesExample() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="default">Default</Badge>
      <Badge size="lg">Large</Badge>
      <Badge size="sm" dot dotColor="red" variant="nothing">Small with dot</Badge>
      <Badge size="lg" dot dotColor="blue" variant="nothing">Large with dot</Badge>
    </div>
  );
}`;

export const badgeUsageCode = `import { Badge } from "@/components/ui/badge";

export function BadgeUsageExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <span>Status:</span>
        <Badge variant="green">Active</Badge>
      </div>
      <div className="flex items-center space-x-2">
        <span>Priority:</span>
        <Badge variant="destructive">High</Badge>
      </div>
      <div className="flex items-center space-x-2">
        <span>Version:</span>
        <Badge variant="outline">v1.0.0</Badge>
      </div>
      <div className="flex items-center space-x-2">
        <span>Category:</span>
        <Badge dot dotColor="blue" variant="nothing">Technology</Badge>
      </div>
    </div>
  );
}`;