# Contributing to NothingCN

🚀 Thank you for your interest in contributing to NothingCN! Your contributions help make this creative component library better for everyone.

## 🛠️ Project Setup

1. **Fork the repository** and clone it locally:
    ```bash
    git clone https://github.com/YOUR_USERNAME/nothingcn.git
    cd nothingcn
    ```

2. **Install dependencies**:
    ```bash
    npm install
    # or
    pnpm install
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    # or
    pnpm dev
    ```
    The app will run at `http://localhost:3000`.

---

## 🎨 Design Philosophy

NothingCN emphasizes:
- **Creative Design** - Unique, visually stunning components
- **Nothing OS Inspiration** - Clean, minimal aesthetic with dot-matrix typography
- **Accessibility First** - All components built with Radix UI primitives
- **Copy-Paste Ready** - No installation required for end users

---

## 🪐 Branch Naming

Use descriptive branch names:
- `feat/add-avatar-component`
- `fix/button-mobile-alignment`
- `docs/update-installation-guide`
- `theme/dark-mode-improvements`
- `font/ndot-optimization`

---

## ✅ Commit Conventions

Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):
- `feat:` for new components or features
- `fix:` for bug fixes
- `docs:` for documentation updates
- `refactor:` for code improvements
- `style:` for styling and design updates
- `theme:` for theme-related changes
- `font:` for typography improvements

Examples:
```
feat: add Progress component with Nothing OS styling
fix: correct Card shadow in dark mode
docs: update component usage examples
theme: improve accent color contrast ratios
font: optimize Ndot font loading performance
```

---

## 🎯 Component Guidelines

### Creating New Components

1. **Use Radix UI primitives** when available for accessibility
2. **Follow existing patterns** - check similar components first
3. **Support variants** - use `class-variance-authority` for styling options
4. **Include TypeScript types** - proper prop definitions
5. **Add to showcase** - create a demo page in `/src/app/components/`

### Component Structure
```tsx
import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const componentVariants = cva(
  "base-styles",
  {
    variants: {
      variant: {
        default: "default-styles",
        creative: "creative-styles",
      },
      size: {
        sm: "small-styles",
        md: "medium-styles",
        lg: "large-styles",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(componentVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Component.displayName = "Component";

export { Component, componentVariants };
```

---

## 🎨 Styling Guidelines

- **Use CSS variables** from the theme system
- **Follow Nothing OS aesthetics** - clean, minimal, high contrast
- **Support dark mode** - test in both light and dark themes
- **Use Ndot font** for branding elements (`.font-ndot`)
- **Use CommitMono** for code elements (`.font-commit-mono`)
- **Responsive design** - mobile-first approach

---

## 🛡️ Pull Request Guidelines

1. **Ensure your branch is up to date** with `main`:
    ```bash
    git pull origin main
    ```

2. **Test your changes**:
    ```bash
    npm run build    # Ensure builds successfully
    npm run lint     # Check for linting issues
    ```

3. **Include component demo** - add showcase page if creating new component

4. **Open a Pull Request** with:
    - Clear title following convention (`feat: add Avatar component`)
    - Description of changes made
    - Screenshots for visual changes
    - Component demo link if applicable

5. **Reference related issues**:
    ```
    Closes #issue_number
    Fixes #bug_number
    ```

6. **Ensure CI passes** - build, lint, and type checks must pass

---

## 🐛 Reporting Bugs

When reporting bugs:
- **Check existing issues** first
- **Use clear titles** - describe the problem concisely
- **Include reproduction steps**:
  1. Go to component page
  2. Interact with component
  3. Observe unexpected behavior
- **Environment details** - browser, OS, screen size
- **Screenshots** - especially for visual bugs
- **Expected vs actual behavior**

---

## 🌟 Feature Requests

We welcome creative component ideas! Please:
- **Open an issue** with `[Feature Request]` in the title
- **Describe the use case** - why is this component needed?
- **Include design inspiration** - mockups, references, or sketches
- **Consider Nothing OS aesthetic** - how does it fit the design philosophy?

---

## 📁 Project Structure

Understanding the codebase:
```
src/
├── app/                    # Next.js app router
│   ├── components/        # Component showcase pages
│   ├── blocks/           # Pre-built component combinations  
│   ├── themes/           # Theme customization
│   ├── docs/             # Documentation
│   └── globals.css       # Theme variables & font declarations
├── components/
│   ├── ui/               # Core UI components
│   └── site-header.tsx   # Navigation
└── lib/
    └── utils.ts          # Utility functions
```

---

## 🎨 Font System

NothingCN uses a dual-font system:
- **Primary (Ndot)**: Branding, headers, special UI elements
- **Secondary (CommitMono)**: Code, technical text, monospace needs
- **System**: Body text and general UI

See [FONTS.md](FONTS.md) for detailed font usage guidelines.

---

## 🤝 Code of Conduct

Please follow our [Code of Conduct](CODE_OF_CONDUCT.md) in all interactions. We're committed to providing a welcoming and inclusive environment for all contributors.

---

## 🎯 Getting Started

Good first contributions:
- **Improve existing components** - add variants, fix bugs
- **Add component examples** - showcase different use cases
- **Update documentation** - clarify usage or installation
- **Theme improvements** - enhance dark mode, color contrast
- **Font optimizations** - improve loading, fallbacks

---

Thank you for contributing to **NothingCN** and helping create beautiful, accessible components for the developer community! 🚀✨

*Built with ❤️ using Next.js, React, and the Nothing OS design philosophy*