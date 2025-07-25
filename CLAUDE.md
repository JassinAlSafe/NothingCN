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