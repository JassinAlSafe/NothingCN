# Font Installation Guide

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

## Attribution
Fonts made from [Web Fonts](http://www.onlinewebfonts.com) is licensed by CC BY 4.0