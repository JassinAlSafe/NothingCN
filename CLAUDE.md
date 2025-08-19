# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Project Architecture

This is NothingCN - an open source Next.js 15 component showcase built with React 19, TypeScript, and Tailwind CSS 4. The goal is to create a comprehensive library of creative, reusable components that developers can easily copy and use in their projects.

### Key Architecture Patterns

- **App Router Structure**: Uses Next.js App Router with pages organized in `src/app/`
- **Component-First Design**: All UI components are built with Radix UI primitives and use the compound component pattern
- **Variant System**: Components use `class-variance-authority` for consistent styling variants
- **Theme System**: CSS custom properties for theming with built-in dark mode support
- **Utility-First Styling**: Tailwind CSS with `cn()` utility function for class merging

### Core Dependencies

- **UI Primitives**: Radix UI for accessible, unstyled components
- **Styling**: Tailwind CSS 4 with `clsx` and `tailwind-merge`
- **Icons**: Lucide React
- **Code Highlighting**: Prism React Renderer for syntax highlighting
- **Fonts**: Geist Sans and Geist Mono

### Component Structure

All reusable components are in `src/components/ui/` and follow these patterns:
- Use `React.forwardRef` for proper ref handling
- Export both component and variant functions
- Use `cn()` utility for class merging
- Support `asChild` prop pattern via Radix Slot when applicable

### Navigation Structure

- `/` - Homepage showcasing NothingCN
- `/components` - Creative component library with copy-paste functionality
- `/blocks` - Pre-built component combinations and layouts
- `/themes` - Theme customization and color schemes
- `/docs` - Documentation and contribution guidelines

### Project Goals

- **Open Source**: All components are freely available for developers to use
- **Creative Focus**: Emphasis on unique, visually appealing components
- **Copy-Paste Ready**: No installation required - just copy the code
- **Community Driven**: Built for and by the developer community

### Styling Guidelines

- Use CSS custom properties defined in `globals.css` for theming
- Dark mode is controlled by adding/removing `dark` class on document element
- All components support both light and dark themes automatically
- Responsive design follows mobile-first approach

## Component Showcase Philosophy

### Dogfooding Principle
As a component library, NothingCN must demonstrate its own value by extensively using its own components. This means:

- **Every showcase page MUST use established reusable components**:
  - `InstallationTabs` for installation sections
  - `ComponentPreview` for variant demonstrations
  - `ComponentCode` for source code display
  - `ComponentLayout` for consistent page structure
  - `ComponentNavigation` for page-to-page navigation

- **NEVER create manual implementations when a reusable component exists**
- **Always check for existing patterns before creating new ones**
- **If a pattern is used more than once, it should become a reusable component**

### Demonstration Best Practices

When creating component showcase pages:

1. **Reuse Over Recreate**: Always use existing components from the library
2. **Consistent Structure**: Follow the established section patterns (installation → usage → variants → source)
3. **Clear Examples**: Each code example should be focused and demonstrate one concept
4. **Real-World Usage**: Show how components work together in practical scenarios
5. **Accessibility First**: All examples must be keyboard navigable and screen reader friendly

### Component Development Checklist

Before creating a new component showcase page, ensure:
- [ ] Uses `ComponentLayout` for page structure
- [ ] Uses `InstallationTabs` for installation instructions
- [ ] Uses `ComponentPreview` for all demonstrations
- [ ] Uses `ComponentCode` for source code display
- [ ] Includes proper navigation with `getComponentNavigation`
- [ ] Follows CVA pattern for variants
- [ ] Includes all variant examples (default, nothing, pixel, minimal, etc.)
- [ ] Has clear, focused code examples for each variant
- [ ] Demonstrates the value of the component library through reuse

This approach ensures that NothingCN doesn't just provide components - it demonstrates their value by using them throughout its own documentation.

## Component Page Layout Standards

### Required Page Structure

All component documentation pages must follow this exact structure for consistency:

#### 1. **Imports and Setup**
```tsx
"use client";

import { ComponentPreview } from "@/components/component-preview";
import { ComponentCode } from "@/components/component-code";
import { ComponentLayout } from "@/components/component-layout";
import { InstallationTabs } from "@/components/installation-tabs";
import { getComponentNavigation } from "@/lib/component-navigation";
import { 
  // Import code examples from separate files
} from "./examples";
import { componentSourceCode } from "./source";
```

#### 2. **Navigation Sections**
```tsx
const sections = [
  { id: "installation", title: "Installation" },
  { id: "usage", title: "Usage" },
  { id: "basic-usage", title: "Basic Usage" },
  { id: "variant-1", title: "Variant Name" },
  { id: "variant-2", title: "Another Variant" },
  { id: "sizes", title: "Sizes" }, // if applicable
  { id: "component-source", title: "Component Source" },
];

const { previous, next } = getComponentNavigation("/components/component-name");
```

#### 3. **Page Header Structure**
```tsx
<ComponentLayout sections={sections} previous={previous} next={next}>
  <div className="space-y-8">
    {/* Page Header */}
    <div className="space-y-3 border-b border-border pb-6">
      <div className="flex items-center space-x-3">
        <div className="w-2 h-12 bg-accent rounded-full" />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-ndot">
          Component Name
        </h1>
      </div>
      <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
        Component description explaining purpose and use cases.
      </p>
    </div>
```

#### 4. **Installation Section**
```tsx
<InstallationTabs
  cliCommand="npx nothingcn@latest add component-name"
  manualSteps={[
    {
      title: "Install dependencies",
      description: "Install required dependencies for the component.",
      code: "npm install @radix-ui/react-component class-variance-authority",
    },
    {
      title: "Copy and paste the component source",
      description: "Create a new file and paste the component code.",
      code: componentSourceCode,
    },
  ]}
/>
```

#### 5. **Usage Section**
```tsx
<div id="usage" className="space-y-4">
  <h2 className="text-3xl font-bold tracking-tight font-ndot">Usage</h2>
  <div className="space-y-2">
    <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
      <code>{`import { Component } from "@/components/ui/component"`}</code>
    </pre>
  </div>
</div>
```

#### 6. **Component Examples**
```tsx
<div id="basic-usage">
  <ComponentPreview
    title="Basic Usage"
    description="Description of what this example demonstrates."
    preview={
      <div className="w-full max-w-sm sm:max-w-md">
        {/* Component demo */}
      </div>
    }
    code={basicUsageCode}
  />
</div>
```

#### 7. **Component Source Section**
```tsx
<div id="component-source">
  <ComponentCode
    title="Component Source"
    description="Copy and paste the following code into your project."
    code={componentSourceCode}
  />
</div>
```

### Code Organization Standards

#### Separate Code Examples
Always extract code examples to separate files:

**`examples.ts`**:
```tsx
export const basicUsageCode = `import { Component } from "@/components/ui/component";

export function ComponentExample() {
  return (
    <Component variant="default">
      Example content
    </Component>
  );
}`;
```

**`source.ts`**:
```tsx
export const componentSourceCode = `"use client";

import * as React from "react";
// Full component implementation
`;
```

### Mobile Responsiveness Requirements

All component pages must be mobile-optimized:

- **Responsive Typography**: `text-3xl sm:text-4xl lg:text-5xl` for headings
- **Responsive Containers**: `max-w-sm sm:max-w-md` for component demos
- **Mobile-First Grids**: `grid-cols-1 sm:grid-cols-2` for form layouts
- **Responsive Padding**: `p-4 sm:p-8` for content areas
- **Touch Targets**: Minimum `min-h-[48px]` for interactive elements

### Accessibility Standards

- **Motion Safety**: Use `motion-safe:` prefixes for animations
- **Focus Management**: Proper focus rings and keyboard navigation
- **Touch Targets**: Meet 48px minimum touch target guidelines
- **Semantic Structure**: Proper heading hierarchy and landmarks

### File Structure Pattern

```
src/app/components/component-name/
├── page.tsx          # Main component page
├── examples.ts       # Extracted code examples
└── source.ts         # Component source code
```

This standardized approach ensures:
- Consistent user experience across all component pages
- Maintainable and organized code
- Excellent mobile responsiveness
- Proper accessibility support
- Easy navigation and documentation discovery

## Component Registry System

### Overview
NothingCN will implement a component registry system similar to shadcn/ui for managing and distributing components. This system allows for programmatic installation, versioning, and dependency management of components.

### Registry JSON Structure

The main registry file (`registry.json`) defines the entire component library:

```json
{
  "$schema": "https://nothingcn.com/schema/registry.json",
  "name": "nothingcn",
  "homepage": "https://nothingcn.com",
  "items": [
    // Array of registry items
  ]
}
```

#### Registry Fields
- **`$schema`**: Points to the JSON schema definition for validation
- **`name`**: Registry identifier (used for metadata and data attributes)
- **`homepage`**: URL of the registry's homepage
- **`items`**: Array of all registry items (components, blocks, etc.)

### Registry Item JSON Structure

Each item in the registry follows this schema:

```json
{
  "$schema": "https://nothingcn.com/schema/registry-item.json",
  "name": "button",
  "type": "registry:ui",
  "title": "Button",
  "description": "A versatile button component with multiple variants.",
  "files": [
    {
      "path": "registry/default/ui/button.tsx",
      "type": "registry:component",
      "target": "components/ui/button.tsx"
    }
  ],
  "dependencies": ["@radix-ui/react-slot"],
  "registryDependencies": ["utils"],
  "tailwind": {
    "config": {
      "theme": {
        "extend": {
          // Tailwind config extensions
        }
      }
    }
  },
  "cssVars": {
    "light": {
      "--button-bg": "0 0% 100%"
    },
    "dark": {
      "--button-bg": "0 0% 0%"
    }
  }
}
```

#### Item Type Values
- **`registry:block`**: Complete UI blocks/sections
- **`registry:component`**: Individual components
- **`registry:ui`**: UI primitives
- **`registry:lib`**: Library utilities
- **`registry:hook`**: React hooks
- **`registry:page`**: Full page templates
- **`registry:file`**: Generic files
- **`registry:style`**: Style-only files
- **`registry:theme`**: Theme configurations
- **`registry:item`**: Generic registry items

#### Required Fields
- **`name`**: Unique identifier (kebab-case)
- **`type`**: Item type from the list above
- **`title`**: Human-readable name
- **`description`**: Clear description of functionality
- **`files`**: Array of file objects with:
  - `path`: Source file location in registry
  - `type`: File type (usually `registry:component`)
  - `target` (optional): Installation destination path

#### Optional Fields
- **`dependencies`**: NPM package dependencies
- **`registryDependencies`**: Other registry items this depends on
- **`cssVars`**: CSS custom properties for theming
- **`tailwind`**: Tailwind configuration extensions
- **`css`**: Additional CSS requirements
- **`envVars`**: Required environment variables
- **`docs`**: Documentation URL
- **`categories`**: Array of category tags
- **`meta`**: Additional metadata
- **`author`**: Component author information

### Implementation Guidelines

1. **File Organization**
   ```
   registry/
   ├── default/           # Default theme components
   │   ├── ui/           # UI primitives
   │   ├── blocks/       # Complete blocks
   │   └── hooks/        # Custom hooks
   ├── themes/           # Alternative themes
   └── registry.json     # Main registry file
   ```

2. **Component Variants**
   - Each variant should be a separate registry item
   - Use `registryDependencies` to share common code
   - Maintain consistent naming: `component-variant`

3. **Dependency Management**
   - List all NPM dependencies explicitly
   - Use `registryDependencies` for internal components
   - Include peer dependencies when necessary

4. **CSS Variables**
   - Define both light and dark theme values
   - Use HSL color format for flexibility
   - Prefix variables with component name

5. **CLI Integration**
   - Support `npx nothingcn@latest add [component]`
   - Auto-install dependencies
   - Handle file conflicts gracefully
   - Support batch installation

### Registry API Endpoints

Future implementation will include:
- `GET /api/registry` - Full registry JSON
- `GET /api/registry/[item]` - Individual item details
- `GET /api/registry/schema` - JSON schema definitions
- `GET /api/registry/categories` - Available categories

### Benefits
- **Programmatic Installation**: Components can be installed via CLI
- **Dependency Resolution**: Automatic handling of component dependencies
- **Version Control**: Track component versions and updates
- **Customization**: Users can modify after installation
- **Type Safety**: Full TypeScript support with proper schemas