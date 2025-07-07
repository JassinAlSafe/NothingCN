# Font Installation Guide

## Typography Philosophy

NothingCN&apos;s typography is inspired by **[NOTHING](https://nothing.tech/)&apos;s** minimalist design philosophy. We use carefully selected fonts that embody the same clean, purposeful aesthetic that NOTHING brings to their products.

## Font Selection

### Primary Font: Ndot (NOTHING-inspired)
- **Inspiration**: Custom typography inspired by NOTHING&apos;s design language
- **Usage**: Headers, branding, UI elements
- **Character**: Clean, minimal, purposeful

### Secondary Font: Commit Mono
- **Source**: [Commit Mono](https://commitmono.com/) - A monospace font for code
- **Usage**: Code blocks, technical text, monospace elements
- **Character**: Readable, developer-friendly

## Quick Setup

### 1. Download the Font Files
- **Primary Font**: `d7a74ed36ff0603a3e41b6da32c47f03.woff2` (4.2KB - most optimized)
- **Secondary Font**: CommitMono OTF files (for code)

### 2. Add to Your Project
```
public/fonts/
├── ndot/
│   └── ndot.woff2
└── commit-mono/
    ├── CommitMono-400-Regular.otf
    ├── CommitMono-400-Italic.otf
    ├── CommitMono-700-Regular.otf
    └── CommitMono-700-Italic.otf
```

### 3. Add CSS Declarations
```css
@font-face {
  font-family: 'Ndot';
  src: url('/fonts/ndot/ndot.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'CommitMono';
  src: url('/fonts/commit-mono/CommitMono-400-Regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

### 4. Use the Fonts
```css
/* Primary font for branding */
.font-brand {
  font-family: "Ndot", "SF Mono", Monaco, monospace;
}

/* Secondary font for code */
.font-code {
  font-family: "CommitMono", "SF Mono", Monaco, monospace;
}
```

## Font Sizes
- **File size**: 4.2KB (woff2) - very lightweight
- **Character set**: Basic Latin, numbers, symbols
- **Perfect for**: Branding, headers, UI elements

## Attribution & Credits

### Font Licenses
- **Ndot Font**: Custom typography inspired by NOTHING&apos;s design language
  - Web font files from [Web Fonts](http://www.onlinewebfonts.com) licensed by CC BY 4.0
  - Design inspiration from [NOTHING](https://nothing.tech/)
  
- **Commit Mono**: Open source monospace font
  - Source: [Commit Mono](https://commitmono.com/)
  - License: Open source (check repository for specific license)

### Design Philosophy Attribution
- **[NOTHING](https://nothing.tech/)** - The minimalist design philosophy that inspired our typography choices
- Typography selections align with NOTHING&apos;s principle of removing the unnecessary and focusing on what matters

### Usage Rights
- Fonts are used in accordance with their respective licenses
- NOTHING brand name and design philosophy referenced for inspirational purposes only
- No trademark or brand infringement intended