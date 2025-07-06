# Component Showcase

A beautiful component library showcase built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Similar to shadcn/ui, this project provides a comprehensive set of reusable UI components with live previews and copy-paste code examples.

## ✨ Features

- 🎨 **Beautiful Design** - Carefully crafted components with attention to detail
- 🌙 **Dark Mode** - Full dark mode support with smooth transitions
- ♿ **Accessible** - Built with accessibility in mind using Radix UI primitives
- 📱 **Responsive** - Works perfectly on all device sizes
- 🔧 **Customizable** - Easy to customize with CSS variables and class variants
- 📋 **Copy & Paste** - No installation required, just copy the code
- 🔍 **Live Previews** - See components in action with interactive examples
- 🎯 **TypeScript** - Full TypeScript support with proper type definitions

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **React**: React 19
- **Styling**: Tailwind CSS 4
- **UI Primitives**: Radix UI
- **Icons**: Lucide React
- **Code Highlighting**: Prism React Renderer
- **Variant Management**: Class Variance Authority
- **Utilities**: clsx, tailwind-merge

## 📦 Components

### Basic Components

- **Button** - Multiple variants and sizes
- **Card** - Flexible card component with header, content, and footer
- **Badge** - Status indicators and labels
- **Tabs** - Tabbed interface for organizing content

### Advanced Components

- **Code Block** - Syntax-highlighted code with copy functionality
- **Theme System** - Comprehensive theming with CSS variables

### Blocks (Component Combinations)

- **Stats Cards** - Dashboard-style metric cards
- **User Cards** - Profile cards with contact information
- **Social Media Posts** - Social media style layouts
- **Event Cards** - Event information display

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd component-showcase
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Usage

### Using Components

1. Navigate to the Components page to see all available components
2. Click on any component to see its live preview
3. Switch to the "Code" tab to see the implementation
4. Copy the code and paste it into your project

### Example Usage

```tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function MyComponent() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>My Component</CardTitle>
        <CardDescription>Description here</CardDescription>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

## 🎨 Theming

The component library uses CSS custom properties for theming. You can customize the appearance by modifying the CSS variables in your global CSS file.

### Default Theme Variables

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  /* ... more variables */
}
```

### Dark Mode

Dark mode is supported out of the box. Add the `dark` class to your HTML element to enable dark mode:

```html
<html class="dark"></html>
```

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── components/        # Components showcase page
│   │   ├── blocks/           # Blocks showcase page
│   │   ├── themes/           # Themes showcase page
│   │   ├── docs/             # Documentation page
│   │   ├── globals.css       # Global styles and theme variables
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Homepage
│   └── components/
│       ├── ui/               # Reusable UI components
│       │   ├── button.tsx
│       │   ├── card.tsx
│       │   ├── badge.tsx
│       │   ├── tabs.tsx
│       │   └── code-block.tsx
│       └── site-header.tsx   # Site navigation header
└── lib/
    └── utils.ts          # Utility functions
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - Inspiration for the component library structure
- [Radix UI](https://radix-ui.com/) - Unstyled, accessible UI primitives
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide](https://lucide.dev/) - Beautiful & consistent icon toolkit

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using Next.js and React
