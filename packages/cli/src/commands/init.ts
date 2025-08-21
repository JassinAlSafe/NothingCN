import { existsSync, writeFileSync, readFileSync } from 'fs-extra';
import { join } from 'path';
import chalk from 'chalk';
import ora from 'ora';
import prompts from 'prompts';

export async function init() {
  console.log(chalk.cyan('🎨 Initializing NothingCN in your project...\n'));

  const cwd = process.cwd();
  
  // Check if this is a valid project
  const packageJsonPath = join(cwd, 'package.json');
  if (!existsSync(packageJsonPath)) {
    console.log(chalk.red('❌ No package.json found. Please run this command in a valid project directory.'));
    process.exit(1);
  }

  // Check for Tailwind CSS
  const tailwindConfigPaths = [
    'tailwind.config.js',
    'tailwind.config.ts',
    'tailwind.config.mjs'
  ];
  
  const hasTailwind = tailwindConfigPaths.some(path => existsSync(join(cwd, path)));
  
  if (!hasTailwind) {
    console.log(chalk.yellow('⚠️  Tailwind CSS not detected. NothingCN requires Tailwind CSS to work properly.'));
    console.log(chalk.blue('📖 Visit https://tailwindcss.com/docs/installation for installation instructions.'));
  }

  const spinner = ora('Setting up NothingCN configuration...').start();

  try {
    // Create components directory
    const componentsDir = join(cwd, 'src/components/ui');
    if (!existsSync(componentsDir)) {
      require('fs-extra').mkdirSync(componentsDir, { recursive: true });
    }

    // Create lib directory for utils
    const libDir = join(cwd, 'src/lib');
    if (!existsSync(libDir)) {
      require('fs-extra').mkdirSync(libDir, { recursive: true });
    }

    // Create nothingcn.json config file
    const config = {
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
    };

    writeFileSync(
      join(cwd, 'nothingcn.json'),
      JSON.stringify(config, null, 2)
    );

    spinner.succeed(chalk.green('✅ NothingCN initialized successfully!'));

    console.log(chalk.cyan('\n🚀 Next steps:'));
    console.log('1. Install Tailwind CSS if you haven\'t already');
    console.log('2. Run ' + chalk.yellow('npx nothingcn@latest add button') + ' to add your first component');
    console.log('3. Visit ' + chalk.blue('https://nothingcn.com') + ' for documentation and examples');

  } catch (error) {
    spinner.fail('Failed to initialize NothingCN');
    console.error(error);
    process.exit(1);
  }
}