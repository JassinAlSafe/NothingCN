# NothingCN

[![CI](https://github.com/JassinAlSafe/NothingCN/actions/workflows/ci.yml/badge.svg)](https://github.com/JassinAlSafe/NothingCN/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/JassinAlSafe/NothingCN)](LICENSE)
[![Issues](https://img.shields.io/github/issues/JassinAlSafe/NothingCN)](https://github.com/JassinAlSafe/NothingCN/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/JassinAlSafe/NothingCN)](https://github.com/JassinAlSafe/NothingCN/pulls)
[![Deploy](https://img.shields.io/vercel/production?label=vercel)](https://vercel.com)
[![Stars](https://img.shields.io/github/stars/JassinAlSafe/NothingCN?style=social)](https://github.com/JassinAlSafe/NothingCN/stargazers)

---

An open source creative component library built with Next.js 15, React 19, TypeScript, and Tailwind CSS. NothingCN provides a comprehensive set of unique, visually stunning UI components with live previews and copy-paste code examples for developers.

**Inspired by the minimalist design philosophy of [NOTHING](https://nothing.tech/)** - bringing that same "nothing" aesthetic to the web with clean, purposeful components.

## ✨ Features

- 🎨 **Creative Design** - Unique, visually stunning components that stand out
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

## 🌟 What Makes NothingCN Special

- **Open Source**: Completely free and open for everyone to use
- **Creative Focus**: Emphasis on unique, creative component designs
- **Copy-Paste Ready**: No installation required - just copy and use
- **Community Driven**: Built by developers, for developers
- **Modern Stack**: Latest web technologies for optimal performance

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
git clone https://github.com/nothingcn/nothingcn.git
cd nothingcn
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
pnpm dev
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
│   ├── components/        # Creative components showcase
│   ├── blocks/           # Pre-built component combinations
│   ├── themes/           # Theme customization examples
│   ├── docs/             # Documentation and guides
│   ├── globals.css       # Global styles and theme variables
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # NothingCN homepage
├── components/
│   ├── ui/               # Core creative UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── tabs.tsx
│   │   └── code-block.tsx
│   └── site-header.tsx   # Site navigation header
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

### Design Inspiration
- **[NOTHING](https://nothing.tech/)** - The minimalist design philosophy and aesthetic that inspired NothingCN&apos;s clean, purposeful approach to UI components
- [shadcn/ui](https://ui.shadcn.com/) - Inspiration for the component library structure and architecture

### Typography & Fonts
- **[Commit Mono](https://commitmono.com/)** - The monospace font used throughout the project for code examples and technical text
- **Ndot/Nothing Font** - Custom typography inspired by NOTHING&apos;s design language

### Technical Foundation
- [Radix UI](https://radix-ui.com/) - Unstyled, accessible UI primitives
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide](https://lucide.dev/) - Beautiful & consistent icon toolkit
- [Next.js](https://nextjs.org/) - The React framework for production
- [Vercel](https://vercel.com/) - Platform for deployment and hosting

## 🎯 Mission

NothingCN aims to democratize access to high-quality, creative UI components. Inspired by NOTHING&apos;s philosophy of removing the unnecessary and focusing on what matters, we believe that beautiful, minimalist design should be accessible to all developers, regardless of their design background or budget.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

## 👨‍💻 Creator & Company

**Created by Jassin Al Safe**

- 🌐 **Company**: [Zenit Digital](https://zenitdigital.se) - Digital solutions and web development
- 💼 **LinkedIn**: [Jassin Al Safe](https://www.linkedin.com/in/jassin-al-safe-343939181/)
- 🧵 **Threads**: [@babajassin](https://www.threads.com/@babajassin)
- 📧 **Contact**: Available through GitHub issues or LinkedIn

### About Zenit Digital
Zenit Digital specializes in creating modern web solutions and digital experiences. NothingCN represents our commitment to open source and sharing knowledge with the developer community.

---

Built with ❤️ by [Jassin Al Safe](https://www.linkedin.com/in/jassin-al-safe-343939181/) and the NothingCN community using Next.js and React
