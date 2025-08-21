# Publishing NothingCN CLI

## Prerequisites

1. Ensure you have npm account with publishing permissions
2. Make sure you're logged in to npm: `npm login`
3. Verify your project is deployed and the API endpoints are accessible

## Publishing Steps

### 1. Verify Everything Works

```bash
# Test the CLI locally
npm run build
node dist/index.js --help

# Test with your deployed API
node dist/index.js add button --yes --cwd /tmp/test-project
```

### 2. Update Version (if needed)

```bash
# Bump version
npm version patch  # or minor/major
```

### 3. Publish to npm

```bash
# Dry run first
npm publish --dry-run

# Actual publish
npm publish
```

### 4. Test Installation

```bash
# Test in a new directory
cd /tmp && mkdir test-install && cd test-install
npm init -y
npx nothingcn@latest add button
```

## Configuration

The CLI uses these environment variables (with fallbacks):

- `NOTHINGCN_REGISTRY_URL`: Registry API endpoint
  - Default: `https://component-showcase-six.vercel.app/api/registry`
- `NOTHINGCN_FILES_URL`: File serving API endpoint  
  - Default: `https://component-showcase-six.vercel.app/api/registry/files`

## Release Checklist

- [ ] All tests pass
- [ ] CLI builds without errors
- [ ] Local testing with deployed API works
- [ ] Version number updated
- [ ] CHANGELOG.md updated (if exists)
- [ ] Published to npm
- [ ] Installation tested with `npx nothingcn@latest`

## Troubleshooting

### Registry API Not Found
- Ensure your site is deployed and accessible
- Check API routes are working: `curl https://your-site.com/api/registry`

### File Download Errors
- Verify file serving API: `curl https://your-site.com/api/registry/files/default/ui/button.tsx`
- Check registry.json paths match file structure

### Permission Errors
- Ensure you're logged into npm: `npm whoami`
- Check package name availability: `npm view nothingcn`