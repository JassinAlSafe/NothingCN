# NothingCN CLI

CLI tool for adding NothingCN components to your React projects.

## Installation

```bash
npx nothingcn@latest init
```

## Usage

### Initialize NothingCN in your project

```bash
npx nothingcn@latest init
```

This will:
- Create the necessary directory structure
- Generate a `nothingcn.json` configuration file
- Set up aliases for easy imports

### Add components

```bash
# Add a single component
npx nothingcn@latest add button

# Add multiple components
npx nothingcn@latest add button input card

# Add with options
npx nothingcn@latest add button --yes --overwrite
```

### Options

- `--yes, -y` - Skip confirmation prompts
- `--overwrite, -o` - Overwrite existing files
- `--cwd <path>` - Working directory (default: current directory)
- `--path <path>` - Components directory (default: `src/components/ui`)

## Configuration

The CLI uses a `nothingcn.json` file for configuration:

```json
{
  "$schema": "https://nothingcn.com/schema/config.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "src/components",
    "utils": "src/lib/utils"
  }
}
```

## Development

To contribute to the CLI:

```bash
# Install dependencies
npm install

# Build the CLI
npm run build

# Test locally
npm link
nothingcn --help
```